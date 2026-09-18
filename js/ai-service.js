/**
 * AI Service - Isolated API / Response Generator Layer
 * Sends user prompts to the Cloudflare Pages Function backend at /api/ai.
 */

(function () {
  /**
   * Fetches an AI assistant response for a given user message and attachments.
   * @param {string} message - User message input
   * @param {Array<{name: string, type: string, fileType: 'image'|'file', dataUrl?: string, size?: number}>} attachments - Attached files/images
   * @returns {Promise<{text: string, timestamp: string}>}
   */
  async function getAIResponse(message, attachments = []) {
    const response = await fetch('/api/ai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message, attachments })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'AI service unavailable');
    }

    const data = await response.json();

    if (!data || typeof data.reply !== 'string') {
      throw new Error('Invalid response received from AI service');
    }

    return {
      text: data.reply,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
  }

  // Export to global scope
  window.AIService = {
    getAIResponse
  };
})();
