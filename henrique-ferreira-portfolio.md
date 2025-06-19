# henrique-ferreira-portfolio

Este é um site de portfólio profissional, moderno e responsivo para Henrique Ferreira, Analista de BI e Engenheiro de Dados.

## Tecnologias Utilizadas

- **Frontend**: React.js
- **Estilização**: Tailwind CSS
- **Animações**: Framer Motion
- **Internacionalização**: react-i18next
- **Roteamento**: react-router-dom
- **Componentes UI**: shadcn/ui

## Estrutura do Projeto

```
henrique-ferreira-portfolio/
├── public/
├── src/
│   ├── assets/             # Imagens, ícones e outros assets estáticos
│   ├── components/         # Componentes React reutilizáveis
│   │   ├── ui/             # Componentes de UI (shadcn/ui)
│   │   └── common/         # Componentes comuns (Navbar, Footer, etc.)
│   ├── hooks/              # Custom React Hooks
│   ├── lib/                # Funções utilitárias e configurações (i18n, dark mode)
│   ├── pages/              # Páginas principais do site (Home, About, Portfolio, etc.)
│   ├── App.jsx             # Componente principal da aplicação
│   ├── App.css             # Estilos globais e Tailwind CSS
│   ├── main.jsx            # Ponto de entrada da aplicação
│   └── i18n.js             # Configuração de internacionalização
├── package.json
├── vite.config.js
├── README.md
└── ... outros arquivos de configuração
```

## Funcionalidades Principais

- **Navegação Fixa**: Navbar com links para as seções.
- **Sobre Mim**: Biografia e tecnologias.
- **Portfólio de BI**: Carrossel de dashboards com lightbox.
- **Engenharia de Dados**: Cards com pipelines e descrição.
- **Automação com n8n**: Destaque para automações com ícones e fluxogramas.
- **Cases Reais**: Detalhes de desafios, soluções e arquiteturas.
- **Certificações**: Lista de certificações com links.
- **Artigos / Blog Técnico** (Opcional): Sessão para postagens técnicas.
- **Contato**: Formulário de contato, links para redes sociais e currículo.
- **Dark Mode**: Alternância entre tema claro e escuro.
- **Internacionalização (i18n)**: Suporte a Português e Inglês.
- **Animações Leves**: Efeitos visuais com Framer Motion.
- **Design Responsivo**: Mobile-first com Tailwind CSS.

## Como Rodar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd henrique-ferreira-portfolio
   ```
2. Instale as dependências:
   ```bash
   pnpm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   pnpm run dev
   ```
   O site estará disponível em `http://localhost:5173` (ou outra porta).

## Deploy

Este projeto está configurado para deploy automático no GitHub Pages via GitHub Actions.

## Contribuição

Sinta-se à vontade para contribuir com melhorias e novas funcionalidades.

