# Instruções de Deploy para GitHub Pages

## Configuração Inicial

1. **Criar repositório no GitHub**:
   - Crie um novo repositório público no GitHub com o nome `henrique-ferreira-portfolio`
   - Não inicialize com README, .gitignore ou licença

2. **Configurar o repositório local**:
   ```bash
   cd henrique-ferreira-portfolio
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/henrique-ferreira-portfolio.git
   git push -u origin main
   ```

3. **Configurar GitHub Pages**:
   - Vá para Settings > Pages no seu repositório
   - Em "Source", selecione "GitHub Actions"
   - O workflow já está configurado em `.github/workflows/deploy.yml`

## Deploy Automático

O site será automaticamente deployado sempre que você fizer push para a branch `main`. O workflow do GitHub Actions irá:

1. Instalar as dependências
2. Fazer o build do projeto
3. Fazer deploy para GitHub Pages

## URL do Site

Após o deploy, o site estará disponível em:
`https://SEU_USUARIO.github.io/henrique-ferreira-portfolio/`

## Comandos Úteis

- **Desenvolvimento local**: `pnpm run dev`
- **Build de produção**: `pnpm run build`
- **Preview do build**: `pnpm run preview`

## Estrutura do Projeto

- `src/components/` - Componentes React
- `src/assets/` - Imagens e assets estáticos
- `src/i18n.js` - Configuração de internacionalização
- `.github/workflows/deploy.yml` - Workflow do GitHub Actions

## Funcionalidades Implementadas

✅ Dark Mode com toggle
✅ Internacionalização (Português/Inglês)
✅ Animações com Framer Motion
✅ Lightbox para imagens
✅ Design responsivo
✅ Navbar fixa
✅ Seções: Sobre, Portfólio, Engenharia de Dados, Automação, Cases, Certificações, Contato
✅ Formulário de contato
✅ Deploy automático no GitHub Pages

