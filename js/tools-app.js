/**
 * Main Tools Library UI Controller
 */
document.addEventListener('DOMContentLoaded', () => {
  const toolsGrid = document.getElementById('tools-grid');
  const searchInput = document.getElementById('tools-search-input');
  const categoryContainer = document.getElementById('category-filter-container');
  const noToolsMessage = document.getElementById('no-tools-message');
  const toolsCountLabel = document.getElementById('tools-count-label');

  // Track state
  let currentCategory = 'All';
  let searchQuery = '';

  if (!toolsGrid) {
    // We might be on an individual tool page. Auto-track recent if on a tool page.
    trackCurrentToolPage();
    return;
  }

  // Initialize event listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderTools();
    });
  }

  if (categoryContainer) {
    categoryContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      const category = btn.getAttribute('data-category');
      if (category) {
        currentCategory = category;
        categoryContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderTools();
      }
    });
  }

  // Delegated listener for Favorite star toggles
  toolsGrid.addEventListener('click', (e) => {
    const favBtn = e.target.closest('.fav-toggle-btn');
    if (!favBtn) return;

    e.preventDefault();
    e.stopPropagation();

    const toolId = favBtn.getAttribute('data-tool-id');
    const isNowFav = window.ToolsStorage.toggleFavorite(toolId);

    favBtn.classList.toggle('active', isNowFav);
    favBtn.setAttribute('aria-label', isNowFav ? 'Remove from favorites' : 'Add to favorites');

    // If viewing 'Favorites' category, re-render immediately to update list
    if (currentCategory === 'Favorites') {
      renderTools();
    }
  });

  // Render initial tool cards
  renderTools();

  /**
   * Filter and render tool cards
   */
  function renderTools() {
    const allTools = window.STUDENT_TOOLS || [];
    const favorites = window.ToolsStorage.getFavorites();
    const recents = window.ToolsStorage.getRecents();

    let filtered = allTools.filter(tool => {
      // Category check
      if (currentCategory === 'Favorites') {
        if (!favorites.includes(tool.id)) return false;
      } else if (currentCategory === 'Recently Used') {
        if (!recents.includes(tool.id)) return false;
      } else if (currentCategory !== 'All') {
        if (!tool.categories.includes(currentCategory)) return false;
      }

      // Search query check
      if (searchQuery) {
        const titleMatch = tool.name.toLowerCase().includes(searchQuery);
        const descMatch = tool.description.toLowerCase().includes(searchQuery);
        const keywordMatch = tool.keywords.some(k => k.toLowerCase().includes(searchQuery));
        if (!titleMatch && !descMatch && !keywordMatch) return false;
      }

      return true;
    });

    // Sort Recently Used in order of access
    if (currentCategory === 'Recently Used') {
      filtered.sort((a, b) => recents.indexOf(a.id) - recents.indexOf(b.id));
    }

    // Update count display
    if (toolsCountLabel) {
      toolsCountLabel.textContent = `Showing ${filtered.length} ${filtered.length === 1 ? 'tool' : 'tools'}`;
    }

    // Handle Empty State
    if (filtered.length === 0) {
      toolsGrid.style.display = 'none';
      if (noToolsMessage) {
        noToolsMessage.style.display = 'block';
        if (currentCategory === 'Favorites') {
          noToolsMessage.querySelector('p').textContent = 'You haven\'t added any tools to your favorites yet. Click the star icon on any tool card to save it here!';
        } else if (currentCategory === 'Recently Used') {
          noToolsMessage.querySelector('p').textContent = 'You haven\'t used any tools recently. Open a tool to automatically see it here!';
        } else {
          noToolsMessage.querySelector('p').textContent = 'No tools found matching your search criteria. Try searching for something else or clear filters.';
        }
      }
      return;
    }

    if (noToolsMessage) noToolsMessage.style.display = 'none';
    toolsGrid.style.display = 'grid';

    // Helper function to map category name to badge class
    const getBadgeClass = (cat) => {
      switch (cat) {
        case 'Academic': return 'badge-academic';
        case 'Math': return 'badge-math';
        case 'Time & Date': return 'badge-time';
        case 'Productivity': return 'badge-prod';
        case 'Text': return 'badge-text';
        case 'Image & File': return 'badge-image';
        default: return 'badge-other';
      }
    };

    // Generate Card HTML
    toolsGrid.innerHTML = filtered.map(tool => {
      const isFav = favorites.includes(tool.id);
      const primaryCategory = tool.categories[0] || 'Other';

      return `
        <div class="card tool-card" data-tool-id="${tool.id}" data-category-theme="${primaryCategory}">
          <button class="fav-toggle-btn ${isFav ? 'active' : ''}" data-tool-id="${tool.id}" aria-label="${isFav ? 'Remove from favorites' : 'Add to favorites'}">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="${isFav ? '#f59e0b' : 'none'}" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </button>
          <div class="card-icon" title="${tool.name}">
            ${tool.icon}
          </div>
          <div class="tool-card-categories">
            ${tool.categories.map(c => `<span class="badge badge-sm ${getBadgeClass(c)}">${c}</span>`).join(' ')}
          </div>
          <h3 class="card-title">${tool.emoji ? tool.emoji + ' ' : ''}${tool.name}</h3>
          <p class="card-desc">${tool.description}</p>
          <a href="${tool.url}" class="btn btn-outline btn-sm tool-use-btn" data-tool-id="${tool.id}">Use Tool &rarr;</a>
        </div>
      `;
    }).join('');

    // Attach click listener to "Use Tool" buttons to log recents
    toolsGrid.querySelectorAll('.tool-use-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const toolId = btn.getAttribute('data-tool-id');
        if (toolId && window.ToolsStorage) {
          window.ToolsStorage.addRecent(toolId);
        }
      });
    });
  }

  /**
   * Tracks recently used tool when user directly lands on or opens a tool page
   */
  function trackCurrentToolPage() {
    const currentPath = window.location.pathname.replace(/\/$/, '');
    const tools = window.STUDENT_TOOLS || [];
    const matched = tools.find(t => {
      if (!t.url) return false;
      const cleanToolUrl = t.url.replace(/^(\.\.\/)+/, '').replace(/\/index\.html$/, '').replace(/\/$/, '');
      return currentPath.endsWith(cleanToolUrl) || currentPath.endsWith(t.id);
    });

    if (matched && window.ToolsStorage) {
      window.ToolsStorage.addRecent(matched.id);
    }
  }
});
