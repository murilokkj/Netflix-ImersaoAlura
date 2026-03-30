// Elementos do DOM
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const body = document.body;

// Verificar tema salvo no localStorage (persistência entre recarregamentos)
const savedTheme = localStorage.getItem('theme') || 'dark';

// Aplicar tema ao carregar a página
if (savedTheme === 'light') {
    body.classList.add('light-theme');
    themeIcon.src = 'assets/moon.svg';
    themeIcon.alt = 'Ícone da lua';
} else {
    body.classList.remove('light-theme');
    themeIcon.src = 'assets/sun.svg';
    themeIcon.alt = 'Ícone do sol';
}

// Função auxiliar para atualizar ícone com base no tema
function updateThemeIcon() {
    if (body.classList.contains('light-theme')) {
        themeIcon.src = 'assets/moon.svg';
        themeIcon.alt = 'Ícone da lua';
    } else {
        themeIcon.src = 'assets/sun.svg';
        themeIcon.alt = 'Ícone do sol';
    }
}

// Função para usar ícone hover com fallback
function setHoverIcon() {
    if (body.classList.contains('light-theme')) {
        themeIcon.src = 'assets/moon-hover.svg';
        themeIcon.alt = 'Ícone da lua (hover)';
    } else {
        themeIcon.src = 'assets/sun-hover.svg';
        themeIcon.alt = 'Ícone do sol (hover)';
    }
}

function resetIcon() {
    updateThemeIcon();
}

// Event listener para o botão de alternar tema
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');

    // Atualizar localStorage e ícone
    if (body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }

    updateThemeIcon();
});

// Mudança de ícone no hover
themeToggle.addEventListener('mouseenter', () => {
    setHoverIcon();
});

themeToggle.addEventListener('mouseleave', () => {
    resetIcon();
});

// Interação com os perfis (exemplo básico)
const profileLinks = document.querySelectorAll('.profile');

profileLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Armazena perfil ativo no localStorage para uso em catalogo.html
        const profileName = link.querySelector('p').textContent;
        const profileImg = link.querySelector('img').src;

        localStorage.setItem('perfilAtivoNome', profileName);
        localStorage.setItem('perfilAtivoImagem', profileImg);
    });
});

// Interação com o botão gerenciar perfis
const manageButton = document.querySelector('.manage-profiles');

manageButton.addEventListener('click', () => {
    console.log('Botão gerenciar perfis clicado');
    // Adicione a lógica desejada aqui
});
