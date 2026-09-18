/**
 * Cloudflare Pages Function: /api/ai
 * Handles AI chat requests by proxying them securely to the Google Gemini API.
 */

// Simple in-memory rate limiting map (IP -> array of timestamps)
// Note: In Cloudflare's serverless environment, in-memory state is maintained per worker instance.
// For production persistence across distributed edge locations, upgrading to Cloudflare KV or Durable Objects is recommended.
const ipRequestMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute window
const MAX_REQUESTS_PER_WINDOW = 15;      // Max 15 requests per minute per IP

function isRateLimited(clientIp) {
  const now = Date.now();
  const timestamps = ipRequestMap.get(clientIp) || [];

  // Keep timestamps within the time window
  const validTimestamps = timestamps.filter(ts => now - ts < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  ipRequestMap.set(clientIp, validTimestamps);
  return false;
}

export async function onRequest(context) {
  const { request, env } = context;

  // 1. Method Check: Reject non-POST requests with HTTP 405 Method Not Allowed
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
        'Allow': 'POST'
      }
    });
  }

  // 2. Rate Limiting Protection
  const clientIp = request.headers.get('cf-connecting-ip') || '127.0.0.1';
  if (isRateLimited(clientIp)) {
    return new Response(JSON.stringify({ error: 'Too many requests. Please try again later.' }), {
      status: 429,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // 3. Input Parsing & Validation
  let body;
  try {
    body = await request.json();
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Invalid JSON payload' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return new Response(JSON.stringify({ error: 'Request body must be a JSON object' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Reject unexpected extra fields
  const allowedKeys = ['message', 'attachments'];
  const extraKeys = Object.keys(body).filter(key => !allowedKeys.includes(key));
  if (extraKeys.length > 0) {
    return new Response(JSON.stringify({ error: 'Unexpected fields in request body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const { message, attachments } = body;

  // Validate message
  if (typeof message !== 'string' || message.trim().length === 0) {
    return new Response(JSON.stringify({ error: 'Message field is required and must be a non-empty string' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (message.length > 4000) {
    return new Response(JSON.stringify({ error: 'Message exceeds maximum length of 4000 characters' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Validate attachments format if present
  if (attachments !== undefined && !Array.isArray(attachments)) {
    return new Response(JSON.stringify({ error: 'Attachments must be an array' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // 4. API Key Verification
  const apiKey = env.GEMINI_API_KEY;
  if (!apiKey) {
    // Log internally if needed, but return generic error to client
    return new Response(JSON.stringify({ error: 'AI service unavailable' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // 5. Call Gemini REST API
  const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  const geminiPayload = {
    contents: [
      {
        parts: [
          { text: message }
        ]
      }
    ]
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 20000); // 20-second timeout

  try {
    const response = await fetch(geminiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(geminiPayload),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'AI service unavailable' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data = await response.json();
    const replyText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!replyText) {
      return new Response(JSON.stringify({ error: 'AI service unavailable' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ reply: replyText }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err) {
    clearTimeout(timeoutId);
    return new Response(JSON.stringify({ error: 'AI service unavailable' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
