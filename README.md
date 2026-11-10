# Market-Place

Estudo de e-commerce com **Next.js 13 (App Router)**, **TypeScript**, **Tailwind CSS** e componentes no estilo shadcn/ui. O catálogo usa dados de exemplo e a integração com **Stripe** está preparada no cliente.

## O que tem no projeto

- Listagem de produtos com cards (`components/shop`) e dados de seed em `app/dummy`.
- Página de carrinho (`app/cart`) e botão de carrinho no header.
- Layout com header, logo e menu de usuário (`components/layout`).
- Componentes base reutilizáveis em `components/ui` (botão, card, avatar, dropdown).
- Cliente Stripe isolado em `lib/stripe.ts`.

## Stack

Next.js 13 · React 18 · TypeScript · Tailwind CSS · Radix UI · Stripe · Lucide

## Como rodar

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abra http://localhost:3000.

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha com as suas chaves. Nenhuma chave real deve ser commitada.

## Escopo

Projeto de estudo de front-end e integração de pagamento. Não é um marketplace em produção: não há autenticação real, banco de dados nem webhook de pagamento implementados.
