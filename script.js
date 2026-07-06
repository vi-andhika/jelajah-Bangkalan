const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('header nav');
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Dark mode toggle
  const themeToggle = document.querySelector('.theme-toggle');
  const themeIcon = document.querySelector('.theme-icon');
  const root = document.documentElement;

  const savedTheme = localStorage.getItem('theme') || 'light';
  root.setAttribute('data-theme', savedTheme);
  updateIcon(savedTheme);

  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeToggle.setAttribute('aria-pressed', next === 'dark');
    updateIcon(next);
  });

  function updateIcon(theme) {
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }