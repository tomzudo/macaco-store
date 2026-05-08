# ☕ Zen Coffee

Sistema web completo para gerenciamento de produtos de uma loja de café, desenvolvido com foco em boas práticas, organização de código e experiência do usuário.

---

## 📌 Sobre o projeto

O **Zen Coffee** é uma aplicação que simula um projeto fullstack de um e-commerce de café, permitindo o controle de produtos com uma interface moderna e um fluxo de autenticação funcional.

O objetivo principal do projeto foi consolidar fundamentos importantes como:

* Estruturação de código
* Separação de responsabilidades
* Persistência de dados
* Validações
* Organização de rotas
* Boas práticas de frontend e backend

---

## ✔ Funcionalidades

* 🔐 Sistema de login para administração
* 📦 Cadastro de produtos
* 🗑️ Remoção de produtos
* ✏️ Edição de produtos
* 🖼️ Upload e exibição de imagens
* 🧾 Listagem dinâmica de produtos
* ⚡ Atualização em tempo real da interface
* 🎨 Interface moderna e responsiva
* 📁 Organização modular de componentes e serviços

---

## ⛏ Tecnologias utilizadas

### Frontend

* React
* Next.js
* TypeScript
* Tailwind CSS

### Backend

* API Routes (Next.js)
* Node.js

### Banco de Dados / ORM

* Prisma ORM

### Autenticação e Segurança

* bcryptjs

### Ferramentas e Desenvolvimento

* ESLint
* PostCSS
* Autoprefixer
* npm

---

## 📂 Estrutura do projeto

```bash
zen-coffee/
├── public/
├── src/
│   ├── app/
│   ├── components/
│   ├── services/
│   ├── lib/
│   ├── styles/
│   └── types/
├── prisma/
├── package.json
└── README.md
```

---

## ⚙️ Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/tom-build/Zen-Coffee.git
```

### 2. Acessar a pasta

```bash
cd Zen-Coffee
```

### 3. Instalar dependências

```bash
npm install
```

### 4. Instalar dependências

```bash
DATABASE_URL=""
```

### 5. Rodar o projeto

```bash
npx prisma migrate dev
```

### 6. Rodar o projeto

```bash
npm run dev
```

### 7. Abrir no navegador

```
http://localhost:3000
```

---

## 🔐 Acesso administrativo

O sistema possui uma área de login para gerenciamento dos produtos.

---

## 🎯 Objetivo do projeto

Este projeto foi desenvolvido com foco em evolução prática, visando:

* Desenvolvimento Full Stack moderno 
* Organização e escalabilidade
* Criação de interfaces profissionais
* Integração frontend/backend
* Estruturação de aplicações com Next.js
* Utilização de ORM e persistência de dados 
* Aplicação de boas práticas de código

---

## 📈 Melhorias futuras

* Integração com serviços de upload (Cloudinary / AWS S3)
* Sistema completo de autenticação JWT
* Controle de permissões e níveis de acesso
* Dashboard administrativo avançado
* Sistema de pedidos
* Integração com pagamentos
* Deploy com CI/CD
* Testes automatizados

---

## 👨‍💻 Autor

Desenvolvido por **Erivelton**
