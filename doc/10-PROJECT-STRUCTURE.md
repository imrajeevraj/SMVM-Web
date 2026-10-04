# SMVM Web Portal — Recommended Repository Structure

```text
smbm-web/
│
├── docs/
│   ├── 00-MASTER-README.md
│   ├── 01-ARCHITECTURE.md
│   ├── 02-DESIGN-SYSTEM.md
│   ├── 03-PAGE-SPECS.md
│   ├── 04-ASSETS-AND-IMAGE-PLAN.md
│   ├── 05-SEO-AND-CONTENT.md
│   ├── 06-IMPLEMENTATION-PLAN.md
│   ├── 07-QA-CHECKLIST.md
│   ├── 08-AI-BUILD-PROMPT.md
│   └── 09-CONTENT-INPUT-TEMPLATE.md
│
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── manifest.webmanifest
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── images/
│   │   ├── brand/
│   │   ├── products/
│   │   │   └── cambill-pos/
│   │   ├── team/
│   │   ├── og/
│   │   └── backgrounds/
│   └── videos/
│
├── src/
│   ├── app/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── hero/
│   │   ├── cards/
│   │   ├── forms/
│   │   ├── product/
│   │   ├── chatbot/
│   │   └── seo/
│   ├── config/
│   ├── data/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   └── types/
│
├── tests/
│   ├── unit/
│   ├── components/
│   └── e2e/
│
├── .env.example
├── .gitignore
├── eslint.config.js
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```
