(function() {
            const toggle = document.getElementById('themeToggle');
            const icon = document.getElementById('themeIcon');
            const label = document.getElementById('themeLabel');

            // ── read stored preference ──
            const stored = localStorage.getItem('campusflo-theme');
            let currentTheme = stored || 'day';

            // ── apply theme ──
            function setTheme(theme) {
                if (theme === 'night') {
                    document.documentElement.setAttribute('data-theme', 'night');
                    icon.textContent = '🌙';
                    label.textContent = 'Night';
                } else {
                    document.documentElement.removeAttribute('data-theme');
                    icon.textContent = '☀️';
                    label.textContent = 'Day';
                }
                currentTheme = theme;
                localStorage.setItem('campusflo-theme', theme);
            }

            // ── toggle handler ──
            function toggleTheme() {
                const next = currentTheme === 'day' ? 'night' : 'day';
                setTheme(next);
            }

            // ── click & keyboard support ──
            toggle.addEventListener('click', toggleTheme);
            toggle.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleTheme();
                }
            });

            // ── initialise ──
            setTheme(currentTheme);
        })();