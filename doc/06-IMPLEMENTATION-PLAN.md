# SMVM Web Portal — Implementation Plan

## Stage 1 — Audit

Commands:

```bash
npm install
npm run dev
npm run build
npm run lint
```

Inspect:

```text
package.json
src/
public/
existing assets
existing routes
Tailwind configuration
Vite configuration
```

Do not modify before understanding the current project.

---

## Stage 2 — Foundation

Create:

```text
src/app
src/components
src/config
src/data
src/hooks
src/lib
src/pages
src/services
src/styles
src/types
```

Implement:

- router
- theme
- global CSS
- tokens
- layout
- error boundary
- SEO helper

---

## Stage 3 — Shared UI

Implement:

```text
Header
MobileMenu
Footer
Container
Section
Button
Badge
Card
CTASection
PageHero
ProductCard
ScreenshotFrame
Breadcrumbs
```

---

## Stage 4 — Home

Build and test responsive layout.

---

## Stage 5 — Products

Build data-driven product cards.

---

## Stage 6 — CamBill POS

Build detailed product marketing page.

Use real screenshots when supplied.

---

## Stage 7 — Company Pages

Build:

```text
About
Vision
Contact
404
```

---

## Stage 8 — Chatbot

Implement UI with mock service.

Ensure service interface can later connect to an AI API.

---

## Stage 9 — SEO

Implement:

- metadata
- OG
- canonical
- JSON-LD
- sitemap
- robots
- favicon
- manifest

---

## Stage 10 — Testing

Run:

```bash
npm run lint
npm run build
npm run test
```

If available:

```bash
npm run test:e2e
```

---

## Stage 11 — Performance

Audit:

```text
bundle
images
fonts
animations
third-party scripts
layout shift
```

---

## Stage 12 — Deployment

Connect GitHub to Vercel.

Configure:

```text
production environment variables
domain
redirects
headers
```

Test production build before launch.
