import assert from 'node:assert';
import { onRequestPost } from './functions/api/ai.js';

// Helper mock context creator
function createMockContext(body, env = { GEMINI_API_KEY: 'test-api-key' }) {
  return {
    request: new Response(JSON.stringify(body), {
      headers: { 'Content-Type': 'application/json' }
    }),
    env
  };
}

async function runTests() {
  console.log('--- Running AI Fallback System Unit Tests ---');

  // Test 1: Missing API Key
  {
    console.log('Test 1: Missing API Key handling');
    const ctx = createMockContext({ message: 'Hello' }, {});
    const res = await onRequestPost(ctx);
    const data = await res.json();
    assert.strictEqual(res.status, 500);
    assert.strictEqual(data.error, 'API key not configured');
    console.log('✓ Passed');
  }

  // Test 2: Invalid or empty message
  {
    console.log('Test 2: Invalid message handling');
    const ctx = createMockContext({ message: '' });
    const res = await onRequestPost(ctx);
    const data = await res.json();
    assert.strictEqual(res.status, 400);
    assert.strictEqual(data.error, 'Empty message');
    console.log('✓ Passed');
  }

  // Test 3: First model succeeds
  {
    console.log('Test 3: First model succeeds');
    const calledUrls = [];
    const originalFetch = globalThis.fetch;
    globalThis.fetch = async (url) => {
      calledUrls.push(url);
      return new Response(JSON.stringify({
        candidates: [{ content: { parts: [{ text: 'Hello from gemini-2.5-flash' }] } }]
      }), { status: 200 });
    };

    try {
      const ctx = createMockContext({ message: 'Hi' });
      const res = await onRequestPost(ctx);
      const data = await res.json();
      assert.strictEqual(res.status, 200);
      assert.strictEqual(data.reply, 'Hello from gemini-2.5-flash');
      assert.strictEqual(data.model, 'gemini-2.5-flash');
      assert.strictEqual(calledUrls.length, 1);
      assert.ok(calledUrls[0].includes('gemini-2.5-flash'));
      console.log('✓ Passed');
    } finally {
      globalThis.fetch = originalFetch;
    }
  }

  // Test 4: First two models fail (400 deprecated, 429 quota), third succeeds (gemini-1.5-flash)
  {
    console.log('Test 4: Fallback through failed models to a working model');
    const calledUrls = [];
    const originalFetch = globalThis.fetch;
    globalThis.fetch = async (url) => {
      calledUrls.push(url);
      if (url.includes('gemini-2.5-flash')) {
        return new Response(JSON.stringify({
          error: { message: 'Model models/gemini-2.5-flash is not found' }
        }), { status: 400 });
      }
      if (url.includes('gemini-2.0-flash-lite')) {
        return new Response(JSON.stringify({
          error: { message: 'Quota exceeded for gemini-2.0-flash-lite' }
        }), { status: 429 });
      }
      if (url.includes('gemini-1.5-flash')) {
        return new Response(JSON.stringify({
          candidates: [{ content: { parts: [{ text: 'Fallback reply from gemini-1.5-flash' }] } }]
        }), { status: 200 });
      }
      return new Response(JSON.stringify({ error: { message: 'Unexpected call' } }), { status: 500 });
    };

    try {
      const ctx = createMockContext({ message: 'Test message' });
      const res = await onRequestPost(ctx);
      const data = await res.json();
      assert.strictEqual(res.status, 200);
      assert.strictEqual(data.reply, 'Fallback reply from gemini-1.5-flash');
      assert.strictEqual(data.model, 'gemini-1.5-flash');
      assert.strictEqual(calledUrls.length, 3);
      console.log('✓ Passed');
    } finally {
      globalThis.fetch = originalFetch;
    }
  }

  // Test 5: All models fail
  {
    console.log('Test 5: All models fail handling');
    const calledUrls = [];
    const originalFetch = globalThis.fetch;
    globalThis.fetch = async (url) => {
      calledUrls.push(url);
      return new Response(JSON.stringify({
        error: { message: 'Model unavailable' }
      }), { status: 500 });
    };

    try {
      const ctx = createMockContext({ message: 'Hello' });
      const res = await onRequestPost(ctx);
      const data = await res.json();
      assert.strictEqual(res.status, 502);
      assert.strictEqual(data.error, 'Model unavailable');
      assert.strictEqual(calledUrls.length, 6);
      console.log('✓ Passed');
    } finally {
      globalThis.fetch = originalFetch;
    }
  }

  console.log('\n✅ All tests passed successfully!');
}

runTests().catch((err) => {
  console.error('❌ Test failed:', err);
  process.exit(1);
});
