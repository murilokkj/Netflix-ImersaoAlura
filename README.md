# Netflix Style Prototype (Imersão Alura)

Projeto da imersão Alura para recriar uma interface inspirada na Netflix usando HTML, CSS e JavaScript puros.

## Estrutura do projeto

- `index.html` - Página inicial de seleção de perfis e alternância de tema (claro/escuro)
- `style.css` - Estilos globais e estilos de tema (dark/light) utilizados também em `catalogo`.
- `script.js` - Lógica de alternância de tema, seleção de perfil e armazenamento em `localStorage`.
- `assets/` - Ícones (`sun.svg`, `moon.svg`, `*.png`) e imagens de perfil.
- `catalogo/`
  - `catalogo.html` - Página de catálogo de filmes/séries (com navbar, rows e footer)
  - `catalogo.css` - Estilos próprios do catálogo (slider/carousel e layout de cards)
  - `js/main.js` - Criação dinâmica dos rows do catálogo via componentes
  - `js/data.js` - Dados de filmes/séries (categorias e listas de filmes)
  - `js/components/Carousel.js` - Componente de slider/carrossel de cards
  - `js/utils.js` - (se existir) utilitários compartilhados
  - `js/theme-toggle.js` - Lógica de alternância de tema em catalogo (botão e estado persistente)

## Funcionalidades implementadas

1. Página de seleção de perfis com hover e redirecionamento
2. Armazenamento de perfil ativo no `localStorage` (`perfilAtivoNome`, `perfilAtivoImagem`)
3. Botão de alternância de tema (dark/light) com persistência no `localStorage` (`theme`)
4. Uso do mesmo tema em `index.html` e `catalogo/catalogo.html`
5. Catálogo com sliders de 'movie rows' e cards com expansão no hover
6. Layout responsivo para dispositivos móveis e desktop
7. Ícones adaptados para contraste (sol/lua, hover)
8. Tema claro/dark no catálogo com ajustes de cores de texto e footer para alta legibilidade

## Como usar

1. Abrir `index.html` no navegador.
2. Selecionar o perfil desejado.
3. O clique armazena perfil em `localStorage` e vai para `catalogo/catalogo.html`.
4. Alternar tema com o botão (em `index` e `catalogo`) e confirmar persistência após refresh.

## Como editar filmes exibidos

- Vá em `catalogo/js/data.js` e altere os objetos em `categories`.
- Cada categoria deve ser algo como:

```js
{
  title: 'Nome da categoria',
  movies: [
    {id, title, imageUrl, videoUrl, description}
  ]
}
```

- As modificações são refletidas em `catalogo/js/main.js` através do componente `createCarousel`.

## Observações

- O botão de tema em `catalogo` deve estar em `catalogo/js/theme-toggle.js` e utilizar `../assets/sun.svg` / `../assets/moon.svg` para funcionar no contexto de subpasta.
- A lógica de tema mesclada com `style.css` garante que o tema seja unificado em todo o app.
- O modo claro em `catalogo` recebeu ajustes de cor para texto, navbar e footer para melhorar a visibilidade.
- Arquivo ainda pode ser expandido com testes, deploy e configuração de JSON de catálogo.

## Ambiente e requisitos

- Navegador moderno (Chrome, Edge, Firefox)
- Não necessita server back-end, roda como propósito estático.

---

Created as part of an Alura immersion project, with focus on HTML/CSS/JS fundamentals, state persistence, and responsive UI.