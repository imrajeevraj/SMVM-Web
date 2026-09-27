# SMVM Software Web Portal — Master Build Specification

> **Purpose:** This repository is the single source of truth for building the complete SMVM Software public web portal.
>
> **Primary audience:** A coding AI/agent that will implement the website from this specification.
>
> **Brand:** SMVM Software
>
> **Core pages:** Home, Products, Product Detail, About Us, Our Vision, Contact Us
>
> **Quality target:** Modern, responsive, accessible, SEO-friendly, fast, maintainable, conversion-oriented, and easy to extend.

---

## 1. Non-Negotiable Build Rules

1. Do not create a generic template-looking website.
2. Use a coherent SMVM visual identity across every page.
3. Mobile, tablet, laptop, and large desktop layouts must all be intentionally designed.
4. Every important interaction must have a clear loading, success, empty, and error state.
5. Use real semantic HTML and accessible controls.
6. Do not put important text inside images.
7. Optimize all images and avoid unnecessary JavaScript.
8. Do not expose secrets or API keys in frontend source.
9. Do not use fake functionality that looks broken. If a backend is not available, use a clearly defined mock/service abstraction.
10. Keep content, components, routes, SEO metadata, assets, and configuration organized so the site can scale.
11. Do not remove existing brand assets supplied by the project owner. Reuse them where appropriate.
12. Build the site so a future CMS/backend can be connected without rewriting the UI.

---

## 2. Recommended Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React or another consistent SVG icon library
- Framer Motion or Motion for restrained animation
- Zod for client-side schema validation where useful

### Content / SEO

- Central route metadata configuration
- JSON-LD structured data
- `sitemap.xml`
- `robots.txt`
- Open Graph metadata
- Twitter/X card metadata
- Canonical URLs
- Semantic headings
- Image alt text
- Breadcrumbs on deeper pages

### Quality

- ESLint
- Prettier
- TypeScript strict mode
- Vitest
- React Testing Library
- Playwright for critical end-to-end flows
- Lighthouse/PageSpeed testing

### Deployment

- Vercel
- GitHub repository
- Production domain + HTTPS
- Preview deployments for pull requests

---

## 3. Site Map

```text
/
├── Home
├── Products
│   ├── CamBill POS
│   └── [future products]
├── About Us
├── Our Vision
├── Contact Us
├── Privacy Policy
├── Terms of Service
├── Cookie Policy (if applicable)
└── 404
```

Future-ready route pattern:

```text
/products/:slug
```

This prevents the architecture from being locked to one product.

---

## 4. Global User Journey

```text
LANDING
   |
   +--> Discover SMVM
   |      |
   |      +--> Products
   |      |      |
   |      |      +--> Product Detail
   |      |             |
   |      |             +--> Trial / Demo CTA
   |      |
   |      +--> About
   |      |
   |      +--> Vision
   |      |
   |      +--> Contact
   |
   +--> Primary CTA
          |
          +--> Trial / Demo / Contact
```

Primary conversion actions should be visible without being aggressive:

- Explore Products
- View CamBill POS
- Start Free Trial
- Book a Demo
- Contact SMVM

---

## 5. Global Page Anatomy

Every major page should follow:

```text
Header
  ↓
Page Hero
  ↓
Primary Content
  ↓
Supporting Proof / Benefits
  ↓
Relevant CTA
  ↓
Footer
```

The exact sections vary by page. Avoid repeating the same section sequence everywhere.

---

## 6. Global Header

Desktop:

```text
[SMVM Logo]    Home  Products  About Us  Our Vision  Contact Us    [Get Started]
```

Requirements:

- Sticky or intelligently persistent header.
- Transparent/overlay version may be used on the Home hero.
- Solid background after scroll.
- Active navigation state.
- Keyboard accessible.
- Mobile hamburger menu.
- Mobile menu must trap focus correctly.
- Logo links to `/`.
- CTA should remain visually distinct.
- Header height should remain compact.
- Avoid excessive shadows.

Mobile:

```text
[Logo]                         [Menu]
```

---

## 7. Global Footer

Suggested structure:

```text
SMVM Software
Where creativity meets innovation.

Products
- CamBill POS
- Future Products

Company
- About Us
- Our Vision
- Contact Us

Resources
- Documentation
- Support
- Privacy
- Terms

Contact
- Email
- Phone
- Location

[Social Icons]

© SMVM Software. All rights reserved.
```

Do not invent phone numbers, addresses, email addresses, social URLs, testimonials, awards, customer counts, or certifications. Use project-provided values or clearly marked placeholders.

---

## 8. Design Direction

### Visual personality

The site should feel:

- modern
- technical
- trustworthy
- premium
- innovative
- clean
- practical
- software-focused

Avoid:

- excessive glassmorphism
- random gradients
- oversized decorative blobs
- excessive animations
- template-like stock sections
- tiny unreadable text
- excessive rounded cards
- visually noisy dashboards on marketing pages

### Recommended visual language

Use:

- strong typography
- generous whitespace
- subtle borders
- controlled gradients
- clean product mockups
- technical grid patterns
- abstract data/technology visuals
- restrained glow effects
- micro-interactions
- clear CTA hierarchy

---

## 9. Theme System

Support:

```text
Light
Dark
System
```

Persist user choice locally.

Theme tokens must be centralized.

Example conceptual tokens:

```text
Background:
  --bg-primary
  --bg-secondary
  --bg-elevated

Text:
  --text-primary
  --text-secondary
  --text-muted

Brand:
  --brand-primary
  --brand-secondary
  --brand-accent

UI:
  --border
  --ring
  --success
  --warning
  --error
```

Do not hard-code dozens of unrelated colors across components.

---

## 10. Typography

Recommended approach:

- One display family
- One highly readable body family
- Strong hierarchy
- Minimum comfortable body size
- Responsive type scale

Example:

```text
Display XL
Display L
Display M
H1
H2
H3
Body Large
Body
Body Small
Caption
```

Use `clamp()` for major headings.

---

## 11. Responsive Breakpoints

Design intentionally for:

```text
Small mobile: 320–479
Large mobile: 480–767
Tablet: 768–1023
Desktop: 1024–1439
Large desktop: 1440+
```

Do not simply shrink the desktop layout.

Mobile requirements:

- no horizontal overflow
- touch targets approximately 44px or larger
- readable body text
- no hover-only functionality
- optimized navigation
- compressed but useful sections
- responsive product screenshots
- responsive footer

---

## 12. Animation Rules

Animation should communicate state or hierarchy.

Use:

- fade/slide on section entry
- subtle card hover
- button feedback
- navigation transitions
- product screenshot reveal
- lightweight background motion

Avoid:

- constant motion
- long page transitions
- distracting particles
- excessive parallax
- animation that blocks interaction

Respect:

```css
prefers-reduced-motion
```

---

## 13. Accessibility

Target WCAG 2.2 AA principles.

Required:

- semantic landmarks
- keyboard navigation
- visible focus
- sufficient contrast
- accessible labels
- alt text
- button vs link semantics
- proper heading order
- form error messages
- `aria-live` where appropriate
- reduced-motion support
- no color-only status communication

---

## 14. Performance Targets

Aim for:

- excellent Lighthouse performance
- fast initial render
- minimal JS on marketing pages
- optimized images
- lazy loading below-the-fold media
- responsive image sizing
- no layout shift from images
- font loading strategy
- code splitting for non-critical routes
- minimal third-party scripts

Use WebP/AVIF where supported.

---

## 15. SEO Strategy

Every indexable route needs:

```text
title
meta description
canonical URL
Open Graph title
Open Graph description
Open Graph image
Twitter/X card metadata
robots policy
structured data where appropriate
```

### Structured data

Use appropriate JSON-LD types:

- Organization
- WebSite
- WebPage
- Product
- BreadcrumbList
- ContactPage

Only publish properties that are factually supported.

### Technical SEO

Create:

```text
/public/robots.txt
/public/sitemap.xml
```

Use canonical URLs.

Avoid duplicate pages.

Create descriptive URLs:

```text
/products
/products/cambill-pos
/about
/vision
/contact
```

Avoid:

```text
/page?id=123
```

---

# 16. PAGE-BY-PAGE SPECIFICATION

## Home `/`

### Hero

Goal: immediately explain what SMVM does.

Suggested structure:

```text
[Eyebrow]
SOFTWARE FOR MODERN BUSINESSES

[H1]
Technology that turns everyday work into smarter business.

[Supporting text]
Short factual explanation of SMVM and its software products.

[Primary CTA] Explore Products
[Secondary CTA] Contact Us

[Product visual / software mockup]
```

Do not invent unsupported claims.

### Home sections

1. Hero
2. Product ecosystem
3. Why SMVM / key capabilities
4. Featured product — CamBill POS
5. Product interface showcase
6. How SMVM approaches software
7. About/vision preview
8. Trust/proof section using only real evidence
9. Final CTA
10. Footer

### Hero visual

Prefer a real SMVM product UI screenshot or a designed product mockup over generic stock photography.

---

# 17. Products `/products`

### Hero

```text
Software built for real business workflows.
```

### Product grid

Each card:

```text
[Product icon]
Product name
One-line value proposition
Short description
Key capabilities
[View Product]
```

### CamBill POS card

Use actual CamBill POS assets where available.

Do not fabricate pricing.

If pricing is not finalized:

```text
Free Trial
Contact for details
```

---

# 18. CamBill POS `/products/cambill-pos`

This page should be the strongest product marketing page.

### Sections

1. Product hero
2. Product screenshot/video
3. Core problem
4. Solution
5. Feature grid
6. Workflow
7. Inventory management
8. Billing/invoice experience
9. Reports
10. Backup/data safety
11. User roles/security
12. UI screenshots
13. Trial CTA
14. FAQ
15. Contact CTA

### Feature examples

Only include features that actually exist or are clearly marked as planned:

- inventory management
- billing
- invoice generation
- product management
- barcode support
- reporting
- backup
- user roles
- settings
- audit/history
- dashboard

---

# 19. About Us `/about`

Sections:

1. Hero
2. SMVM story
3. What we build
4. Our working principles
5. Founders/team
6. Milestones
7. Technology philosophy
8. CTA

Use real team photos if provided.

Never fabricate biography, experience, awards, clients, or company history.

---

# 20. Our Vision `/vision`

Suggested narrative:

```text
Vision
↓
Problem we want to solve
↓
How technology helps
↓
Principles
↓
Future product ecosystem
↓
Long-term direction
↓
CTA
```

Keep this page aspirational but factual about current capabilities.

---

# 21. Contact Us `/contact`

### Layout

Desktop:

```text
Contact information | Contact form
```

Mobile:

```text
Contact information
↓
Form
↓
Map/location if appropriate
```

### Form

Fields:

- Name
- Email
- Phone (optional)
- Company (optional)
- Subject
- Message
- Consent checkbox if required

States:

```text
Idle
Submitting
Success
Validation Error
Server Error
```

Never log sensitive form data to the browser console.

---

# 22. 404

Create a branded 404 page.

Example:

```text
404
This page went off the grid.

[Back Home]
[Explore Products]
```

---

# 23. Chatbot

Include a floating SMVM support assistant if the project owner wants it.

### Visual

Use the supplied SMVM chatbot/Memo icon or animation.

Important:

- no visible hard circular boundary if the design calls for a free-flowing icon
- transparent icon area
- subtle idle animation
- tooltip on hover
- accessible button label
- mobile-friendly
- keyboard accessible

### Architecture

```text
ChatWidget
  ↓
Chat UI
  ↓
ChatService interface
  ↓
MockChatService (initial)
  ↓
Future API / AI provider
```

The UI must not depend on a specific AI provider.

---

# 24. Asset Architecture

Recommended:

```text
public/
├── favicon.ico
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── manifest.webmanifest
├── images/
│   ├── brand/
│   ├── products/
│   │   └── cambill-pos/
│   ├── team/
│   ├── og/
│   ├── backgrounds/
│   └── icons/
├── videos/
└── fonts/
```

### Asset naming

Use:

```text
smbm-logo-primary.svg
smbm-logo-white.svg
smbm-logo-monochrome.svg
smbm-icon.svg
cambill-pos-dashboard.webp
cambill-pos-invoice.webp
cambill-pos-inventory.webp
```

Avoid:

```text
IMG_9382.png
final-final2.png
newlogoLATEST.png
```

---

# 25. Image Strategy

Use three image categories.

### A. Real product images

Priority #1.

Use actual:

- dashboard screenshots
- product UI
- invoices
- reports
- inventory screens
- settings screens

### B. Brand illustrations

Create abstract technical visuals for:

- hero
- vision
- technology sections

### C. Photography

Use only where it adds human context:

- founders
- team
- office
- real product users

Avoid generic business stock photos where a product visualization would be stronger.

---

# 26. Icon Strategy

Use one primary icon family throughout.

Recommended:

- Lucide
- Phosphor
- another consistent SVG system

Do not mix five icon libraries.

Use custom SMVM icons only for:

- brand
- products
- unique capabilities
- chatbot

---

# 27. Component Architecture

Recommended:

```text
src/
├── app/
│   ├── App.tsx
│   ├── router.tsx
│   └── providers/
├── assets/
├── components/
│   ├── common/
│   ├── layout/
│   ├── navigation/
│   ├── hero/
│   ├── cards/
│   ├── forms/
│   ├── product/
│   ├── chatbot/
│   └── seo/
├── config/
│   ├── site.ts
│   ├── navigation.ts
│   ├── products.ts
│   └── seo.ts
├── data/
├── hooks/
├── lib/
├── pages/
│   ├── Home/
│   ├── Products/
│   ├── ProductDetail/
│   ├── About/
│   ├── Vision/
│   ├── Contact/
│   └── NotFound/
├── services/
│   ├── chat/
│   └── contact/
├── styles/
└── types/
```

---

# 28. Component Rules

Prefer reusable components:

```text
Container
Section
SectionHeading
Button
Badge
Card
ProductCard
ProductFeature
FeatureGrid
Logo
Header
Footer
MobileMenu
Breadcrumbs
CTASection
ContactForm
ChatWidget
SEO
```

Avoid giant page components.

A page should compose components rather than contain every implementation detail.

---

# 29. Data-Driven Product Architecture

Products should be defined in data:

```ts
type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
  heroImage: string;
  features: Feature[];
  screenshots: Screenshot[];
  cta: CTA;
};
```

Then `/products/:slug` renders from the product definition.

This makes future products inexpensive to add.

---

# 30. Configuration

Create a central:

```text
src/config/site.ts
```

Containing:

- company name
- tagline
- site URL
- logo paths
- social links
- contact information
- default SEO
- navigation
- legal links

Do not scatter company information across components.

---

# 31. Forms and Backend Readiness

Frontend should use service interfaces:

```text
ContactService
ChatService
NewsletterService
```

Initial implementation can be mock/local if backend is not ready.

Later:

```text
React UI
   ↓
Service Interface
   ↓
API Client
   ↓
Backend
```

This avoids rewriting the UI.

---

# 32. SEO Content Architecture

Create a page metadata map:

```text
Home
Products
CamBill POS
About
Vision
Contact
```

Each gets unique:

- title
- description
- OG image
- keywords/topics
- canonical

Do not keyword-stuff.

Write for humans first.

---

# 33. Open Graph Images

Create:

```text
og-home.png
og-products.png
og-cambill-pos.png
og-about.png
og-vision.png
og-contact.png
```

Recommended size:

```text
1200 × 630
```

Use the same visual system as the website.

---

# 34. Favicon / App Icons

Provide:

```text
favicon.ico
favicon.svg
icon-192.png
icon-512.png
apple-touch-icon.png
```

Use the final approved SMVM icon.

---

# 35. PWA / Web App Metadata

Create `manifest.webmanifest`.

Include:

- name
- short_name
- start_url
- display
- theme_color
- background_color
- icons

Do not claim offline/PWA functionality unless it is implemented.

---

# 36. Security Rules

Never put these in frontend code:

- private API keys
- database credentials
- SMTP passwords
- admin secrets
- private tokens

Public environment variables are not secrets.

Use:

```text
.env
.env.example
```

and document required variables.

---

# 37. Analytics

Design an analytics abstraction.

Example events:

```text
page_view
product_view
product_cta_click
trial_click
contact_form_start
contact_form_submit
chat_open
chat_message
```

Do not hard-code a vendor throughout the application.

---

# 38. Conversion Tracking

Important CTAs should have stable identifiers:

```text
cta-home-products
cta-home-trial
cta-cambill-trial
cta-contact
```

This helps analytics and testing.

---

# 39. Testing Plan

### Unit

Test:

- utility functions
- validation
- product data
- SEO metadata generation
- theme behavior

### Component

Test:

- Header
- Mobile menu
- Product card
- Contact form
- Chat widget
- Theme switcher

### E2E

Test:

```text
Home → Products
Products → CamBill POS
CamBill POS → Trial CTA
Header navigation
Mobile menu
Contact form validation
Theme switch
404
```

---

# 40. Visual QA

Check at:

```text
320
375
390
430
768
1024
1280
1440
1920
```

Verify:

- no overflow
- no clipped text
- no broken images
- no layout shifts
- consistent spacing
- accessible contrast
- mobile menu
- footer
- dark/light themes

---

# 41. SEO QA

Before production:

```text
[ ] unique titles
[ ] unique descriptions
[ ] canonical URLs
[ ] sitemap
[ ] robots
[ ] OG images
[ ] structured data
[ ] alt text
[ ] semantic headings
[ ] clean URLs
[ ] no accidental noindex
[ ] 404 works
```

---

# 42. Performance QA

Check:

```text
[ ] image compression
[ ] lazy loading
[ ] responsive images
[ ] font optimization
[ ] JS bundle
[ ] unused dependencies
[ ] third-party scripts
[ ] CLS
[ ] LCP
[ ] INP
```

---

# 43. Git Workflow

Branches:

```text
main
develop
feature/*
fix/*
```

Commit examples:

```text
feat: add product detail architecture
feat: add responsive navigation
feat: add CamBill POS page
fix: correct mobile overflow
perf: optimize product screenshots
seo: add product structured data
```

---

# 44. Deployment Architecture

```text
GitHub
   |
   v
Vercel
   |
   +--> Production
   |
   +--> Preview deployments
```

Domain:

```text
www.smbmsoftware.com
```

Use the actual approved domain when available.

---

# 45. Environment Strategy

```text
.env.local
.env.example
```

Example:

```text
VITE_SITE_URL=
VITE_CONTACT_ENDPOINT=
VITE_CHAT_ENDPOINT=
VITE_ANALYTICS_ID=
```

Only variables genuinely required by the frontend should use the `VITE_` prefix.

---

# 46. Implementation Phases

## Phase 0 — Project Audit

- inspect repository
- inspect existing logo/icon assets
- inspect existing pages
- inspect existing dependencies
- identify reusable components
- identify broken code
- preserve working features

Deliverable:

```text
PROJECT-AUDIT.md
```

## Phase 1 — Foundation

- Vite/React/TypeScript baseline
- Tailwind
- routing
- theme system
- typography
- tokens
- global CSS
- ESLint/Prettier
- folder architecture

## Phase 2 — Brand System

- logo system
- favicon
- icons
- color tokens
- typography
- buttons
- cards
- spacing
- animation

## Phase 3 — Layout

- header
- navigation
- mobile menu
- footer
- page container
- section system
- CTA system

## Phase 4 — Pages

Implement in this order:

1. Home
2. Products
3. CamBill POS
4. About
5. Vision
6. Contact
7. 404
8. Legal pages

## Phase 5 — Interactions

- theme switch
- mobile navigation
- forms
- product interactions
- chatbot
- animations
- CTA tracking

## Phase 6 — SEO

- metadata
- JSON-LD
- sitemap
- robots
- OG
- canonical
- accessibility

## Phase 7 — Performance

- image optimization
- lazy loading
- code splitting
- bundle analysis
- font optimization

## Phase 8 — QA

- unit
- component
- E2E
- responsive
- accessibility
- SEO
- Lighthouse

## Phase 9 — Deployment

- GitHub
- Vercel
- environment variables
- domain
- production smoke test

---

# 47. Definition of Done

The project is not complete until:

```text
[ ] all primary routes work
[ ] all navigation works
[ ] responsive layouts work
[ ] dark/light/system themes work
[ ] product architecture is extensible
[ ] real assets are integrated
[ ] no placeholder asset remains unintentionally
[ ] contact form has defined behavior
[ ] chatbot has defined behavior
[ ] SEO metadata exists
[ ] sitemap exists
[ ] robots exists
[ ] structured data is valid
[ ] accessibility issues are addressed
[ ] Lighthouse has been reviewed
[ ] production build succeeds
[ ] Vercel deployment succeeds
[ ] no console errors
[ ] no broken links
[ ] 404 works
```

---

# 48. AI Coding Agent Instructions

When starting implementation:

1. Read every file in `/docs`.
2. Inspect the existing repository before changing it.
3. Do not rewrite working features without a reason.
4. Create an implementation checklist.
5. Build the foundation before page-specific styling.
6. Use reusable components.
7. Keep product content data-driven.
8. Use supplied SMVM assets.
9. Do not invent business claims.
10. After each phase, run the relevant tests/build.
11. Fix errors before proceeding.
12. Keep changes small and reviewable.
13. Maintain accessibility.
14. Maintain SEO.
15. Never leave temporary debug code.
16. Never expose secrets.
17. At the end, provide:
   - files changed
   - features implemented
   - tests run
   - remaining issues
   - deployment instructions

---

# 49. Final Instruction to the Coding AI

> Build SMVM Software as a production-quality modern software company website from this specification. Treat the documentation in `/docs` as the source of truth. First audit the repository and assets. Then implement the architecture in phases. Do not skip foundation, accessibility, SEO, responsive behavior, performance, testing, or deployment readiness merely to make the UI appear finished. Use real supplied assets wherever available. Where business information is missing, create clearly marked configuration placeholders rather than inventing facts. Keep the implementation modular and future-ready for additional products, APIs, CMS integration, analytics, and AI services.
