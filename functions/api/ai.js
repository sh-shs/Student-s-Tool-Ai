/**
 * Cloudflare Pages Function: /api/ai
 * Handles AI chat requests by proxying them securely to the Google Gemini API.
 * Uses a fallback array of Gemini models to handle model deprecation, availability, or quota limits.
 */

export async function onRequestPost(context) {
  const corsHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };

  try {
    let body;
    try {
      body = await context.request.json();
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Invalid JSON payload' }), {
        status: 400,
        headers: corsHeaders
      });
    }

    const { message } = body || {};

    if (!message || typeof message !== 'string' || message.trim() === '') {
      return new Response(JSON.stringify({ error: 'Empty message' }), {
        status: 400,
        headers: corsHeaders
      });
    }

    const API_KEY = context.env?.GEMINI_API_KEY;

    if (!API_KEY) {
      return new Response(JSON.stringify({ error: 'API key not configured' }), {
        status: 500,
        headers: corsHeaders
      });
    }

    const MODELS = [
      'gemini-2.5-flash',
      'gemini-2.0-flash-lite',
      'gemini-1.5-flash',
      'gemini-2.5-pro',
      'gemini-1.5-pro',
      'gemini-3.6-flash'
    ];

    let lastErrorMessage = 'All AI model requests failed';

    for (const model of MODELS) {
      try {
        const URL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEY.trim()}`;

        const geminiRes = await fetch(URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: message }]
              }
            ]
          })
        });

        const data = await geminiRes.json().catch(() => ({}));

        if (geminiRes.ok) {
          const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (reply) {
            return new Response(JSON.stringify({ reply, model }), {
              status: 200,
              headers: corsHeaders
            });
          }
        } else {
          lastErrorMessage = data.error?.message || `HTTP ${geminiRes.status} for model ${model}`;
        }
      } catch (e) {
        lastErrorMessage = e.message || String(e);
      }
    }

    return new Response(JSON.stringify({
      error: lastErrorMessage
    }), {
      status: 502,
      headers: corsHeaders
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: corsHeaders
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
