/**
 * AI Formatter - Lightweight, secure Markdown-to-HTML parser
 * Converts markdown text into safe, styled HTML markup without external dependencies.
 */

(function () {
  /**
   * Escapes HTML special characters to prevent XSS.
   * @param {string} str
   * @returns {string}
   */
  function escapeHtml(str) {
    return (str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /**
   * Formats inline markdown elements (bold, italic, inline code, links).
   * Assumes input string is already HTML-escaped.
   * @param {string} text
   * @returns {string}
   */
  function formatInline(text) {
    let result = text;

    // Inline code: `code`
    result = result.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');

    // Bold: **text** or __text__
    result = result.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    result = result.replace(/__([^_]+)__/g, '<strong>$1</strong>');

    // Italic: *text* or _text_
    result = result.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    result = result.replace(/_([^_]+)_/g, '<em>$1</em>');

    // Links: [text](url)
    result = result.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, url) => {
      // Basic URL check to ensure safe protocols
      const safeUrl = url.replace(/javascript:/gi, '');
      return `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer" class="ai-link">${linkText}</a>`;
    });

    return result;
  }

  /**
   * Main Markdown to HTML Parser
   * @param {string} markdownRaw
   * @returns {string} Safe HTML string
   */
  function parseMarkdown(markdownRaw) {
    if (!markdownRaw) return '';

    // Step 1: Normalize line endings
    let src = markdownRaw.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

    // Step 2: Extract code blocks before HTML escaping to avoid double-escaping inside code blocks
    const codeBlocks = [];
    src = src.replace(/```([a-zA-Z0-9_+-]*)\n([\s\S]*?)```/g, (match, lang, code) => {
      const placeholder = `___CODE_BLOCK_${codeBlocks.length}___`;
      codeBlocks.push({
        lang: lang ? lang.trim() : 'code',
        code: code
      });
      return placeholder;
    });

    // Step 3: Escape HTML for all remaining text
    let escapedSrc = escapeHtml(src);

    // Step 4: Extract and format tables
    const tableRegex = /((?:\|[^\n]+\|\n?)+)/g;
    escapedSrc = escapedSrc.replace(tableRegex, (match) => {
      const lines = match.trim().split('\n').map(l => l.trim()).filter(Boolean);
      if (lines.length >= 2) {
        // Check if second line is separator like | --- | --- |
        const isTable = lines[1].split('|').every(cell => cell.trim() === '' || /^:?-+:?$/.test(cell.trim()));
        if (isTable) {
          const headers = lines[0].split('|').slice(1, -1).map(c => formatInline(c.trim()));
          const rows = lines.slice(2).map(line => {
            return line.split('|').slice(1, -1).map(c => formatInline(c.trim()));
          });

          let tableHtml = '<div class="ai-table-wrapper"><table class="ai-table"><thead><tr>';
          headers.forEach(h => { tableHtml += `<th>${h}</th>`; });
          tableHtml += '</tr></thead><tbody>';
          rows.forEach(row => {
            tableHtml += '<tr>';
            row.forEach(cell => { tableHtml += `<td>${cell}</td>`; });
            tableHtml += '</tr>';
          });
          tableHtml += '</tbody></table></div>';
          return tableHtml;
        }
      }
      return match;
    });

    // Step 5: Process line by line for block elements (headings, lists, blockquotes, paragraphs)
    const lines = escapedSrc.split('\n');
    let htmlOutput = [];
    let inList = false;
    let listType = null; // 'ul' or 'ol'

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];

      // If line is a code block placeholder
      if (line.includes('___CODE_BLOCK_')) {
        if (inList) {
          htmlOutput.push(listType === 'ul' ? '</ul>' : '</ol>');
          inList = false;
        }
        htmlOutput.push(line);
        continue;
      }

      // If line is part of a table (already formatted)
      if (line.includes('<div class="ai-table-wrapper">') || line.includes('</table></div>')) {
        if (inList) {
          htmlOutput.push(listType === 'ul' ? '</ul>' : '</ol>');
          inList = false;
        }
        htmlOutput.push(line);
        continue;
      }

      // Check headings
      const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
      if (headingMatch) {
        if (inList) {
          htmlOutput.push(listType === 'ul' ? '</ul>' : '</ol>');
          inList = false;
        }
        const level = headingMatch[1].length;
        const headingText = formatInline(headingMatch[2]);
        htmlOutput.push(`<h${level} class="ai-heading h${level}">${headingText}</h${level}>`);
        continue;
      }

      // Check blockquotes
      const quoteMatch = line.match(/^&gt;\s+(.+)$/);
      if (quoteMatch) {
        if (inList) {
          htmlOutput.push(listType === 'ul' ? '</ul>' : '</ol>');
          inList = false;
        }
        htmlOutput.push(`<blockquote class="ai-blockquote">${formatInline(quoteMatch[1])}</blockquote>`);
        continue;
      }

      // Check unordered list items: - or *
      const ulMatch = line.match(/^[\-\*]\s+(.+)$/);
      if (ulMatch) {
        if (!inList || listType !== 'ul') {
          if (inList) htmlOutput.push(listType === 'ul' ? '</ul>' : '</ol>');
          htmlOutput.push('<ul class="ai-list">');
          inList = true;
          listType = 'ul';
        }
        htmlOutput.push(`<li>${formatInline(ulMatch[1])}</li>`);
        continue;
      }

      // Check ordered list items: 1.
      const olMatch = line.match(/^(\d+)\.\s+(.+)$/);
      if (olMatch) {
        if (!inList || listType !== 'ol') {
          if (inList) htmlOutput.push(listType === 'ul' ? '</ul>' : '</ol>');
          htmlOutput.push('<ol class="ai-list">');
          inList = true;
          listType = 'ol';
        }
        htmlOutput.push(`<li>${formatInline(olMatch[2])}</li>`);
        continue;
      }

      // Close list if line is empty or normal paragraph
      if (inList && line.trim() === '') {
        htmlOutput.push(listType === 'ul' ? '</ul>' : '</ol>');
        inList = false;
      }

      // Normal text / paragraph
      if (line.trim() !== '') {
        htmlOutput.push(`<p class="ai-paragraph">${formatInline(line)}</p>`);
      }
    }

    if (inList) {
      htmlOutput.push(listType === 'ul' ? '</ul>' : '</ol>');
    }

    let finalHtml = htmlOutput.join('\n');

    // Step 6: Restore code blocks with escapeHtml applied inside code
    finalHtml = finalHtml.replace(/___CODE_BLOCK_(\d+)___/g, (match, index) => {
      const block = codeBlocks[parseInt(index, 10)];
      if (!block) return '';
      const safeCode = escapeHtml(block.code.trim());
      const langLabel = escapeHtml(block.lang || 'code');
      return `
        <div class="ai-code-wrapper">
          <div class="ai-code-header">
            <span class="ai-code-lang">${langLabel}</span>
            <button class="ai-code-copy-btn" onclick="window.AIFormatter.copyCodeBlock(this)" aria-label="Copy code block">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              <span>Copy</span>
            </button>
          </div>
          <pre class="ai-code-pre"><code class="ai-code language-${langLabel}">${safeCode}</code></pre>
        </div>
      `.trim();
    });

    return finalHtml;
  }

  /**
   * Helper function to copy code block content to clipboard
   * @param {HTMLElement} btn
   */
  function copyCodeBlock(btn) {
    const wrapper = btn.closest('.ai-code-wrapper');
    if (!wrapper) return;
    const codeEl = wrapper.querySelector('code');
    if (!codeEl) return;

    const codeText = codeEl.textContent;
    navigator.clipboard.writeText(codeText).then(() => {
      const span = btn.querySelector('span');
      if (span) {
        const originalText = span.textContent;
        span.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          span.textContent = originalText;
          btn.classList.remove('copied');
        }, 2000);
      }
    }).catch(err => {
      console.error('Failed to copy code:', err);
    });
  }

  // Export module
  window.AIFormatter = {
    escapeHtml,
    parseMarkdown,
    copyCodeBlock
  };
})();
