/**
 * Cloudflare Pages Function: /api/ai
 * Handles AI chat requests by proxying them securely to the Google Gemini API.
 */

import { GEMINI_API_KEY as CONFIG_GEMINI_API_KEY } from "../_config.js";

// Simple in-memory rate limiting map (IP -> array of timestamps)
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

  // Retrieve Gemini API Key from Cloudflare Pages environment variables first, falling back to _config.js
  const apiKey = env?.GEMINI_API_KEY || CONFIG_GEMINI_API_KEY;

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
  if (!apiKey || apiKey === 'PASTE_YOUR_KEY_HERE') {
    console.error('Gemini API key is not configured or still contains placeholder value.');
    return new Response(JSON.stringify({ error: 'AI service unavailable' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // 5. Call Gemini REST API using active supported model gemini-3.5-flash
  const geminiEndpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent';

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
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey
      },
      body: JSON.stringify(geminiPayload),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text().catch(() => '');
      console.error(`Gemini API call failed with status ${response.status}: ${errorText}`);
      return new Response(JSON.stringify({ error: 'AI service unavailable' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data = await response.json();
    const replyText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!replyText) {
      console.error('Gemini API response missing candidates/text:', JSON.stringify(data));
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
    console.error('Error while communicating with Gemini API:', err);
    return new Response(JSON.stringify({ error: 'AI service unavailable' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
