# SaaS Access Auditor

Base inicial de estrutura para um MVP SaaS com Next.js (App Router) e TypeScript.

## Jornada principal do produto (MVP)

Fluxo estruturado no App Router:

1. `login/signup`
2. `dashboard`
3. `new audit`
4. `upload` (1 a 3 arquivos)
5. `seleção do tipo de cada arquivo`
6. `column mapping`
7. `processing`
8. `results dashboard`

## Rotas principais do fluxo

```text
/
/login
/signup
/dashboard
/audits/new
/audits/new/upload
/audits/new/file-types
/audits/new/mapping
/audits/new/processing
/audits/new/results
```

## Estrutura de pastas e arquivos

```text
.
├── app/
│   ├── audits/
│   │   └── new/
│   │       ├── file-types/page.tsx
│   │       ├── mapping/page.tsx
│   │       ├── page.tsx
│   │       ├── processing/page.tsx
│   │       ├── results/page.tsx
│   │       └── upload/page.tsx
│   ├── dashboard/page.tsx
│   ├── login/page.tsx
│   ├── signup/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── audits/
│   ├── auth/
│   ├── dashboard/
│   ├── layout/
│   └── shared/
│       └── journey-state-card.tsx
├── lib/
│   ├── app-config.ts
│   └── journey-flow.ts
├── services/
│   ├── audits/
│   ├── exports/
│   ├── parsing/
│   ├── rules/
│   ├── scoring/
│   └── uploads/
├── prisma/
│   └── schema.prisma
├── schemas/
├── types/
│   ├── audit-types.ts
│   └── flow-types.ts
├── hooks/
├── actions/
├── storage/
├── utils/
├── .env.example
├── .gitignore
├── next-env.d.ts
├── package.json
└── tsconfig.json
```

## Objetivo

Este repositório está preparado apenas com estrutura de rotas, estados e placeholders para acelerar o início do desenvolvimento, sem implementação de regras de negócio completas.
