// ─── Theme Toggle ───
(function() {
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return; // safety if not on page
    const icon = document.getElementById('themeIcon');
    const label = document.getElementById('themeLabel');

    const stored = localStorage.getItem('campusflo-theme') || 'day';
    let currentTheme = stored;

    function setTheme(theme) {
        if (theme === 'night') {
            document.documentElement.setAttribute('data-theme', 'night');
            if (icon) icon.textContent = '🌙';
            if (label) label.textContent = 'Night';
        } else {
            document.documentElement.removeAttribute('data-theme');
            if (icon) icon.textContent = '☀️';
            if (label) label.textContent = 'Day';
        }
        currentTheme = theme;
        localStorage.setItem('campusflo-theme', theme);
    }

    function toggleTheme() {
        const next = currentTheme === 'day' ? 'night' : 'day';
        setTheme(next);
    }

    toggle.addEventListener('click', toggleTheme);
    toggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleTheme();
        }
    });

    setTheme(currentTheme);
})();

// ─── Hamburger Menu ───
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('open');
        });
    }
});

// ─── Utility: Save/Load from localStorage ───
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
function loadData(key, defaultVal = []) {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : defaultVal;
}