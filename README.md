# SaaS Access Auditor

Base inicial de estrutura para um MVP SaaS com Next.js (App Router) e TypeScript.

## Estrutura de pastas e arquivos

```text
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── audits/
│   │   └── audit-list.tsx
│   ├── auth/
│   │   └── auth-shell.tsx
│   ├── dashboard/
│   │   └── dashboard-shell.tsx
│   ├── layout/
│   │   └── app-header.tsx
│   └── shared/
│       └── loading-state.tsx
├── services/
│   ├── audits/
│   │   └── audits-service.ts
│   ├── exports/
│   │   └── exports-service.ts
│   ├── parsing/
│   │   └── parsing-service.ts
│   ├── rules/
│   │   └── rules-service.ts
│   ├── scoring/
│   │   └── scoring-service.ts
│   └── uploads/
│       └── uploads-service.ts
├── actions/
│   └── audit-actions.ts
├── hooks/
│   └── use-audits.ts
├── lib/
│   └── app-config.ts
├── prisma/
│   └── schema.prisma
├── schemas/
│   └── audit-schema.ts
├── storage/
│   └── storage-client.ts
├── types/
│   └── audit-types.ts
├── utils/
│   └── date-utils.ts
├── .env.example
├── .gitignore
├── next-env.d.ts
├── package.json
└── tsconfig.json
```

## Objetivo

Este repositório está preparado apenas com estrutura e placeholders para acelerar o início do desenvolvimento, sem implementação de features neste momento.

## Configuração inicial

```bash
cp .env.example .env.local
npm install
npm run dev
```

## Como validar localmente

Rode este comando na raiz para conferir a estrutura:

```bash
find . -maxdepth 3 -type d | sort
```
