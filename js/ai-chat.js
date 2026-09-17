/**
 * AI Chat Controller - UI Interaction & Chat Logic
 * Manages chat history, input auto-resize, attachment handling, auto-scrolling,
 * rendering formatted messages, prompt suggestions, sidebar toggle, and error/loading states.
 */

(function () {
  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

  // Allowed file MIME types and extensions
  const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
  const ALLOWED_FILE_EXTENSIONS = ['.pdf', '.txt', '.md', '.js', '.py', '.html', '.css', '.json'];

  // Application State
  let messages = [];
  let currentAttachments = [];
  let isLoading = false;
  let lastUserPrompt = '';
  let lastUserAttachments = [];

  // DOM Elements
  let chatContainer, messagesContainer, emptyStateContainer, inputArea, promptTextarea;
  let sendBtn, attachImgBtn, attachFileBtn, imgFileInput, docFileInput;
  let attachmentPreviewsContainer, inlineErrorBanner, newChatBtn, clearChatBtn;
  let clearModal, clearModalConfirmBtn, clearModalCancelBtn;
  let sidebarToggleBtn, chatSidebar, sidebarCloseBtn, sidebarOverlay, sidebarNewChatBtn;

  document.addEventListener('DOMContentLoaded', () => {
    initDOMElements();
    if (!chatContainer) return; // Not on AI page

    bindEvents();
    renderChat();
  });

  function initDOMElements() {
    chatContainer = document.getElementById('chat-container');
    messagesContainer = document.getElementById('chat-messages');
    emptyStateContainer = document.getElementById('chat-empty-state');
    inputArea = document.getElementById('chat-input-area');
    promptTextarea = document.getElementById('chat-prompt-textarea');
    sendBtn = document.getElementById('chat-send-btn');
    attachImgBtn = document.getElementById('attach-img-btn');
    attachFileBtn = document.getElementById('attach-file-btn');
    imgFileInput = document.getElementById('img-file-input');
    docFileInput = document.getElementById('doc-file-input');
    attachmentPreviewsContainer = document.getElementById('attachment-previews');
    inlineErrorBanner = document.getElementById('attachment-error-banner');
    newChatBtn = document.getElementById('new-chat-btn');
    clearChatBtn = document.getElementById('clear-chat-btn');

    clearModal = document.getElementById('clear-modal');
    clearModalConfirmBtn = document.getElementById('clear-modal-confirm');
    clearModalCancelBtn = document.getElementById('clear-modal-cancel');

    sidebarToggleBtn = document.getElementById('sidebar-toggle-btn');
    chatSidebar = document.getElementById('chat-sidebar');
    sidebarCloseBtn = document.getElementById('sidebar-close-btn');
    sidebarOverlay = document.getElementById('sidebar-overlay');
    sidebarNewChatBtn = document.getElementById('sidebar-new-chat-btn');
  }

  function bindEvents() {
    // Auto-expand textarea
    promptTextarea.addEventListener('input', handleTextareaInput);

    // Keyboard send on Enter (without Shift)
    promptTextarea.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        submitPrompt();
      }
    });

    // Send button click
    sendBtn.addEventListener('click', () => {
      submitPrompt();
    });

    // Attachment triggers
    if (attachImgBtn) attachImgBtn.addEventListener('click', () => imgFileInput.click());
    if (attachFileBtn) attachFileBtn.addEventListener('click', () => docFileInput.click());

    if (imgFileInput) imgFileInput.addEventListener('change', handleImageSelected);
    if (docFileInput) docFileInput.addEventListener('change', handleFileSelected);

    // Sidebar Toggle & Actions
    if (sidebarToggleBtn) {
      sidebarToggleBtn.addEventListener('click', toggleSidebar);
    }

    if (sidebarCloseBtn) {
      sidebarCloseBtn.addEventListener('click', closeSidebar);
    }

    if (sidebarOverlay) {
      sidebarOverlay.addEventListener('click', closeSidebar);
    }

    if (sidebarNewChatBtn) {
      sidebarNewChatBtn.addEventListener('click', () => {
        resetChat();
        closeSidebar();
      });
    }

    // Chat History items
    document.querySelectorAll('.history-item').forEach(item => {
      item.addEventListener('click', () => {
        document.querySelectorAll('.history-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        closeSidebar();
      });
    });

    // Prompt Chips in Empty State
    document.querySelectorAll('.prompt-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const promptText = chip.getAttribute('data-prompt') || chip.textContent.trim();
        promptTextarea.value = promptText;
        handleTextareaInput();
        promptTextarea.focus();
      });
    });

    // New Chat & Clear Chat Header buttons
    if (newChatBtn) newChatBtn.addEventListener('click', resetChat);
    if (clearChatBtn) clearChatBtn.addEventListener('click', openClearModal);

    // Clear Modal Actions
    if (clearModalCancelBtn) clearModalCancelBtn.addEventListener('click', closeClearModal);
    if (clearModalConfirmBtn) clearModalConfirmBtn.addEventListener('click', confirmClearChat);

    if (clearModal) {
      clearModal.addEventListener('click', (e) => {
        if (e.target === clearModal) closeClearModal();
      });
    }
  }

  function toggleSidebar() {
    if (!chatSidebar) return;
    if (window.innerWidth <= 768) {
      chatSidebar.classList.toggle('open');
      if (sidebarOverlay) sidebarOverlay.classList.toggle('active');
    } else {
      chatSidebar.classList.toggle('collapsed');
    }
  }

  function closeSidebar() {
    if (chatSidebar) chatSidebar.classList.remove('open');
    if (sidebarOverlay) sidebarOverlay.classList.remove('active');
  }

  function handleTextareaInput() {
    promptTextarea.style.height = 'auto';
    const newHeight = Math.min(promptTextarea.scrollHeight, 180);
    promptTextarea.style.height = `${newHeight}px`;

    // Enable/disable send button
    const hasText = promptTextarea.value.trim().length > 0;
    sendBtn.disabled = !hasText && currentAttachments.length === 0;
  }

  function showInlineError(message) {
    if (!inlineErrorBanner) return;
    inlineErrorBanner.textContent = message;
    inlineErrorBanner.style.display = 'flex';
    setTimeout(() => {
      inlineErrorBanner.style.display = 'none';
    }, 4000);
  }

  function handleImageSelected(e) {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    files.forEach(file => {
      if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
        showInlineError("This file type isn't supported yet.");
        return;
      }
      if (file.size > MAX_FILE_SIZE) {
        showInlineError("File size exceeds the 10MB limit.");
        return;
      }

      const reader = new FileReader();
      reader.onload = (evt) => {
        currentAttachments.push({
          id: 'att_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
          name: file.name,
          fileType: 'image',
          mimeType: file.type,
          size: file.size,
          dataUrl: evt.target.result
        });
        renderAttachmentPreviews();
        handleTextareaInput();
      };
      reader.readAsDataURL(file);
    });

    imgFileInput.value = '';
  }

  function handleFileSelected(e) {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    files.forEach(file => {
      const ext = '.' + file.name.split('.').pop().toLowerCase();
      if (!ALLOWED_FILE_EXTENSIONS.includes(ext)) {
        showInlineError("This file type isn't supported yet.");
        return;
      }
      if (file.size > MAX_FILE_SIZE) {
        showInlineError("File size exceeds the 10MB limit.");
        return;
      }

      currentAttachments.push({
        id: 'att_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
        name: file.name,
        fileType: 'file',
        mimeType: file.type || 'text/plain',
        size: file.size,
        extension: ext
      });
      renderAttachmentPreviews();
      handleTextareaInput();
    });

    docFileInput.value = '';
  }

  function renderAttachmentPreviews() {
    if (!attachmentPreviewsContainer) return;

    if (currentAttachments.length === 0) {
      attachmentPreviewsContainer.style.display = 'none';
      attachmentPreviewsContainer.innerHTML = '';
      return;
    }

    attachmentPreviewsContainer.style.display = 'flex';
    attachmentPreviewsContainer.innerHTML = '';

    currentAttachments.forEach(att => {
      const chip = document.createElement('div');
      chip.className = 'attachment-preview-chip';

      if (att.fileType === 'image') {
        chip.innerHTML = `
          <div class="attachment-thumb">
            <img src="${att.dataUrl}" alt="${window.AIFormatter ? window.AIFormatter.escapeHtml(att.name) : att.name}">
          </div>
          <span class="attachment-name">${window.AIFormatter ? window.AIFormatter.escapeHtml(att.name) : att.name}</span>
          <button type="button" class="attachment-remove-btn" aria-label="Remove image" data-id="${att.id}">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        `;
      } else {
        const sizeFormatted = formatFileSize(att.size);
        chip.innerHTML = `
          <div class="attachment-file-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          </div>
          <div class="attachment-file-info">
            <span class="attachment-name">${window.AIFormatter ? window.AIFormatter.escapeHtml(att.name) : att.name}</span>
            <span class="attachment-size">${sizeFormatted}</span>
          </div>
          <button type="button" class="attachment-remove-btn" aria-label="Remove file" data-id="${att.id}">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        `;
      }

      chip.querySelector('.attachment-remove-btn').addEventListener('click', (e) => {
        const idToRemove = e.currentTarget.getAttribute('data-id');
        currentAttachments = currentAttachments.filter(a => a.id !== idToRemove);
        renderAttachmentPreviews();
        handleTextareaInput();
      });

      attachmentPreviewsContainer.appendChild(chip);
    });
  }

  function formatFileSize(bytes) {
    if (!bytes) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }

  async function submitPrompt() {
    if (isLoading) return;

    const text = promptTextarea.value.trim();
    if (!text && currentAttachments.length === 0) return;

    // Save prompt and attachments state
    lastUserPrompt = text;
    lastUserAttachments = [...currentAttachments];

    // Add user message
    const userMsg = {
      id: 'msg_' + Date.now(),
      role: 'user',
      content: text,
      attachments: [...currentAttachments],
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    messages.push(userMsg);

    // Reset input state
    promptTextarea.value = '';
    currentAttachments = [];
    renderAttachmentPreviews();
    handleTextareaInput();

    renderChat();
    scrollToBottom();

    // Trigger AI response
    await executeAIResponse(text, userMsg.attachments);
  }

  async function executeAIResponse(promptText, attachments) {
    isLoading = true;
    renderTypingIndicator();
    scrollToBottom();

    try {
      const result = await window.AIService.getAIResponse(promptText, attachments);
      removeTypingIndicator();
      isLoading = false;

      const aiMsg = {
        id: 'msg_' + Date.now(),
        role: 'assistant',
        content: result.text,
        timestamp: result.timestamp
      };

      messages.push(aiMsg);
      renderChat();
      scrollToBottom();
    } catch (err) {
      removeTypingIndicator();
      isLoading = false;

      const errorMsg = {
        id: 'msg_' + Date.now(),
        role: 'assistant',
        isError: true,
        content: "An unexpected error occurred while generating a response. Please try again.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      messages.push(errorMsg);
      renderChat();
      scrollToBottom();
    }
  }

  function renderChat() {
    if (messages.length === 0) {
      emptyStateContainer.style.display = 'block';
      messagesContainer.style.display = 'none';
      messagesContainer.innerHTML = '';
      return;
    }

    emptyStateContainer.style.display = 'none';
    messagesContainer.style.display = 'flex';
    messagesContainer.innerHTML = '';

    const assistantMessages = messages.filter(m => m.role === 'assistant');
    const lastAssistantMsgId = assistantMessages.length ? assistantMessages[assistantMessages.length - 1].id : null;

    messages.forEach(msg => {
      const bubbleEl = document.createElement('div');
      bubbleEl.className = `chat-bubble-row ${msg.role === 'user' ? 'user-row' : 'assistant-row'}`;

      if (msg.role === 'user') {
        let attachmentsMarkup = '';
        if (msg.attachments && msg.attachments.length > 0) {
          attachmentsMarkup = '<div class="user-inline-attachments">';
          msg.attachments.forEach(att => {
            if (att.fileType === 'image') {
              attachmentsMarkup += `
                <div class="user-img-preview">
                  <img src="${att.dataUrl}" alt="${window.AIFormatter.escapeHtml(att.name)}">
                </div>
              `;
            } else {
              attachmentsMarkup += `
                <div class="user-file-chip">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  <span>${window.AIFormatter.escapeHtml(att.name)}</span>
                </div>
              `;
            }
          });
          attachmentsMarkup += '</div>';
        }

        bubbleEl.innerHTML = `
          <div class="chat-bubble user-bubble">
            ${attachmentsMarkup}
            <div class="bubble-text">${window.AIFormatter.escapeHtml(msg.content)}</div>
            <div class="bubble-meta">${msg.timestamp}</div>
          </div>
        `;
      } else if (msg.isError) {
        bubbleEl.innerHTML = `
          <div class="ai-avatar-icon sm assistant-row-avatar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 12 2.1 12a10 10 0 0 0 17.8 5.3z"/><circle cx="12" cy="12" r="3"/></svg>
          </div>
          <div class="chat-bubble assistant-bubble error-bubble">
            <div class="error-notice">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <span>${window.AIFormatter.escapeHtml(msg.content)}</span>
            </div>
            <div class="bubble-actions">
              <button type="button" class="btn btn-outline btn-sm retry-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
                Retry
              </button>
            </div>
          </div>
        `;

        bubbleEl.querySelector('.retry-btn').addEventListener('click', () => {
          messages = messages.filter(m => m.id !== msg.id);
          renderChat();
          executeAIResponse(lastUserPrompt, lastUserAttachments);
        });
      } else {
        const isLatestAssistant = msg.id === lastAssistantMsgId;
        const formattedHtml = window.AIFormatter ? window.AIFormatter.parseMarkdown(msg.content) : msg.content;

        let regenerateMarkup = '';
        if (isLatestAssistant) {
          regenerateMarkup = `
            <button type="button" class="bubble-action-btn regenerate-btn" title="Regenerate response" aria-label="Regenerate response">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
              <span>Regenerate</span>
            </button>
          `;
        }

        bubbleEl.innerHTML = `
          <div class="ai-avatar-icon sm assistant-row-avatar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 12 2.1 12a10 10 0 0 0 17.8 5.3z"/><circle cx="12" cy="12" r="3"/></svg>
          </div>
          <div class="chat-bubble assistant-bubble">
            <div class="bubble-content markdown-body">${formattedHtml}</div>

            <div class="bubble-uncertainty-note">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <span>AI can make mistakes. Verify important information.</span>
            </div>

            <div class="bubble-footer">
              <span class="bubble-meta">${msg.timestamp}</span>
              <div class="bubble-actions">
                <button type="button" class="bubble-action-btn copy-btn" title="Copy response" aria-label="Copy response">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                  <span>Copy</span>
                </button>
                ${regenerateMarkup}
              </div>
            </div>
          </div>
        `;

        // Copy action
        const copyBtn = bubbleEl.querySelector('.copy-btn');
        if (copyBtn) {
          copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(msg.content).then(() => {
              const span = copyBtn.querySelector('span');
              span.textContent = 'Copied!';
              copyBtn.classList.add('copied');
              setTimeout(() => {
                span.textContent = 'Copy';
                copyBtn.classList.remove('copied');
              }, 2000);
            });
          });
        }

        // Regenerate action
        const regenBtn = bubbleEl.querySelector('.regenerate-btn');
        if (regenBtn) {
          regenBtn.addEventListener('click', () => {
            messages = messages.filter(m => m.id !== msg.id);
            renderChat();
            executeAIResponse(lastUserPrompt, lastUserAttachments);
          });
        }
      }

      messagesContainer.appendChild(bubbleEl);
    });
  }

  function renderTypingIndicator() {
    let typingEl = document.getElementById('typing-indicator-row');
    if (!typingEl) {
      typingEl = document.createElement('div');
      typingEl.id = 'typing-indicator-row';
      typingEl.className = 'chat-bubble-row assistant-row';
      typingEl.innerHTML = `
        <div class="ai-avatar-icon sm assistant-row-avatar">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 12 2.1 12a10 10 0 0 0 17.8 5.3z"/><circle cx="12" cy="12" r="3"/></svg>
        </div>
        <div class="chat-bubble assistant-bubble typing-bubble">
          <div class="typing-dots">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
          <span class="typing-text">AI is thinking...</span>
        </div>
      `;
      messagesContainer.appendChild(typingEl);
    }
  }

  function removeTypingIndicator() {
    const typingEl = document.getElementById('typing-indicator-row');
    if (typingEl) {
      typingEl.remove();
    }
  }

  function scrollToBottom() {
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }

  function resetChat() {
    messages = [];
    currentAttachments = [];
    lastUserPrompt = '';
    lastUserAttachments = [];
    renderAttachmentPreviews();
    renderChat();
  }

  function openClearModal() {
    if (messages.length === 0) return; // Nothing to clear
    if (clearModal) clearModal.classList.add('show');
  }

  function closeClearModal() {
    if (clearModal) clearModal.classList.remove('show');
  }

  function confirmClearChat() {
    closeClearModal();
    resetChat();
  }

  // Export for testing or external access
  window.AIChat = {
    getMessages: () => messages,
    resetChat
  };
})();
