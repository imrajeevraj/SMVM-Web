# SMVM Software — Master Prompt for the Coding AI

You are the lead frontend architect, senior React engineer, UI/UX designer, SEO engineer, accessibility engineer, performance engineer, and QA engineer for the SMVM Software web portal.

Your task is to build the complete SMVM Software website from the documentation in `/docs`.

## Source of Truth

Read these files first:

```text
00-MASTER-README.md
01-ARCHITECTURE.md
02-DESIGN-SYSTEM.md
03-PAGE-SPECS.md
04-ASSETS-AND-IMAGE-PLAN.md
05-SEO-AND-CONTENT.md
06-IMPLEMENTATION-PLAN.md
07-QA-CHECKLIST.md
```

## First Action

Do NOT immediately start rewriting files.

First:

1. inspect the repository
2. inspect package.json
3. inspect existing source
4. inspect all public assets
5. inspect existing SMVM logos/icons
6. inspect existing CamBill POS screenshots
7. identify what can be reused
8. identify missing information
9. create a short implementation audit

Then begin implementation.

## Technical Requirements

Use:

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- consistent SVG icons
- accessible semantic HTML
- responsive design
- reusable components
- data-driven products
- SEO metadata
- JSON-LD
- sitemap
- robots
- Open Graph
- theme support
- testing
- production build validation

## Pages

Implement:

```text
/
/products
/products/cambill-pos
/about
/vision
/contact
/privacy
/terms
/*
```

## Visual Requirements

Create a modern software-company website.

The design should feel:

```text
modern
technical
premium
clean
trustworthy
innovative
human
```

Do not create a generic template.

Use actual SMVM brand assets.

Use actual CamBill screenshots when available.

## Responsive Requirements

The site must work from 320px mobile through large desktop.

Do not merely shrink desktop layouts.

## Theme Requirements

Support:

```text
Light
Dark
System
```

Persist preference.

## Component Requirements

Build reusable:

```text
Header
Footer
MobileMenu
Button
Card
ProductCard
Section
PageHero
CTASection
ScreenshotFrame
ContactForm
ChatWidget
SEO
```

## Product Architecture

Products must be data-driven.

Create a product model and render product detail pages from it.

Future products should be addable without duplicating an entire page implementation.

## Chatbot

Implement a polished floating chatbot UI.

Use the supplied SMVM/Memo asset.

The icon should not have an unwanted circular boundary.

Use a service abstraction:

```text
Chat UI
↓
ChatService
↓
Mock service initially
↓
Future API/AI service
```

Do not put API secrets in frontend code.

## Content Rules

Never invent:

- customer numbers
- awards
- certifications
- testimonials
- revenue
- employee count
- locations
- founder biographies
- pricing
- guarantees
- partnerships

If information is missing, use a configuration placeholder and report it.

## SEO

Every indexable page needs unique metadata.

Implement:

- canonical URLs
- sitemap
- robots
- OG
- JSON-LD
- semantic HTML
- breadcrumbs where appropriate
- descriptive alt text

## Accessibility

Target WCAG 2.2 AA.

Support:

- keyboard navigation
- visible focus
- screen readers
- reduced motion
- semantic headings
- form labels
- error messages

## Performance

Optimize:

- images
- fonts
- JS
- CSS
- third-party scripts
- lazy loading
- responsive images

Avoid unnecessary dependencies.

## Development Process

Work in phases:

```text
Audit
↓
Foundation
↓
Design system
↓
Shared components
↓
Home
↓
Products
↓
CamBill
↓
About
↓
Vision
↓
Contact
↓
Chatbot
↓
SEO
↓
Testing
↓
Performance
↓
Deployment
```

After every major phase:

```text
run build
run lint
fix errors
inspect UI
continue
```

## Final Verification

Before declaring completion:

```text
npm run build
npm run lint
npm run test
```

and, where configured:

```text
npm run test:e2e
```

Verify every route and every breakpoint.

## Final Report

At the end report:

1. architecture implemented
2. pages implemented
3. components implemented
4. assets used
5. SEO implemented
6. accessibility work
7. performance work
8. tests executed
9. known limitations
10. required business information
11. deployment instructions

Do not stop after producing a visual mockup. The objective is a complete, maintainable, production-ready website.
