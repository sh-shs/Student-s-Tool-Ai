/**
 * AI Service - Isolated API / Response Generator Layer
 * Sends user prompts to the Cloudflare Pages Function backend at /api/ai.
 */

(function () {
  /**
   * Fetches an AI assistant response for a given user message.
   * @param {string} message - User message input
   * @returns {Promise<{text: string, timestamp: string}>}
   */
  async function sendMessage(message) {
    const res = await fetch('/api/ai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      throw new Error(data.error || 'AI service unavailable');
    }

    if (!data || typeof data.reply !== 'string') {
      throw new Error('Invalid response received from AI service');
    }

    return data.reply;
  }

  /**
   * Wrapper function for UI compatibility
   * @param {string} message
   * @param {Array} attachments
   * @returns {Promise<{text: string, timestamp: string}>}
   */
  async function getAIResponse(message, attachments = []) {
    const reply = await sendMessage(message);
    return {
      text: reply,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
  }

  // Export to global scope
  window.AIService = {
    sendMessage,
    getAIResponse
  };
})();
