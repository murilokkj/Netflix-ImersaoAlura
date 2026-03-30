// theme-toggle.js (catálogo) - alterna tema e mantém preferências
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

const savedTheme = localStorage.getItem('theme') || 'dark';

function setTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-theme');
        themeIcon.src = '../assets/moon.svg';
        themeIcon.alt = 'Ícone da lua';
    } else {
        document.body.classList.remove('light-theme');
        themeIcon.src = '../assets/sun.svg';
        themeIcon.alt = 'Ícone do sol';
    }
    localStorage.setItem('theme', theme);
}

function applyHoverIcon() {
    if (document.body.classList.contains('light-theme')) {
        themeIcon.src = '../assets/moon-hover.svg';
    } else {
        themeIcon.src = '../assets/sun-hover.svg';
    }
}

function resetIcon() {
    if (document.body.classList.contains('light-theme')) {
        themeIcon.src = '../assets/moon.svg';
    } else {
        themeIcon.src = '../assets/sun.svg';
    }
}

setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const next = document.body.classList.contains('light-theme') ? 'dark' : 'light';
    setTheme(next);
});

themeToggle.addEventListener('mouseenter', applyHoverIcon);
themeToggle.addEventListener('mouseleave', resetIcon);
