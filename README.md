# Portfólio Atualizado - Luan Lima Tavares

Este é o portfólio profissional de Luan Lima Tavares, desenvolvido com [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/) e diversas bibliotecas modernas do ecossistema React. O objetivo é apresentar projetos, habilidades, experiências e facilitar o contato profissional.

## ✨ Funcionalidades

- Apresentação pessoal e trajetória acadêmica
- Listagem de habilidades e tecnologias dominadas
- Exibição de projetos pessoais com descrição, tecnologias e links para o GitHub
- Seção de cursos e formações
- Formulário de contato integrado ao EmailJS para envio de mensagens
- Design responsivo e moderno

## 🚀 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [EmailJS](https://www.emailjs.com/) (para envio de emails)
- [pnpm](https://pnpm.io/) (gerenciador de pacotes)

## 📦 Instalação

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/LuanLimaT/portfolio-luan.git
   cd portfolio-luan
   ```

2. **Instale as dependências:**
   ```sh
   pnpm install
   ```

3. **Configure as variáveis do EmailJS:**
   - No arquivo [`app/api/send-email/route.ts`](app/api/send-email/route.ts), substitua:
     - `YOUR_SERVICE_ID` pelo seu Service ID do EmailJS
     - `YOUR_TEMPLATE_ID` pelo seu Template ID do EmailJS
     - `YOUR_PUBLIC_KEY` pela sua Public Key do EmailJS

4. **Inicie o servidor de desenvolvimento:**
   ```sh
   pnpm dev
   ```
   O projeto estará disponível em [http://localhost:3000](http://localhost:3000).

## 🛠️ Scripts

- `pnpm dev` — Inicia o servidor de desenvolvimento
- `pnpm build` — Gera a build de produção
- `pnpm start` — Inicia o servidor em modo produção
- `pnpm lint` — Executa o linter

## 📁 Estrutura de Pastas

```
components/         # Componentes reutilizáveis
hooks/              # Hooks customizados
lib/                # Funções utilitárias
app/                # Estrutura de rotas e páginas (Next.js App Router)
  api/              # Rotas de API (ex: envio de email)
  components/       # Componentes específicos das páginas
  globals.css       # Estilos globais
  layout.tsx        # Layout principal
  page.tsx          # Página principal
public/             # Imagens e arquivos estáticos
styles/             # Estilos adicionais
```

## 📬 Contato

Fique à vontade para entrar em contato pelo formulário do site ou diretamente pelo email: [luan.limatavares@gmail.com](mailto:luan.limatavares@gmail.com)

---

Desenvolvido com 💜 por Luan Lima Tavares.
