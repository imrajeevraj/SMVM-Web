# SMVM Web Portal — Architecture

## Architecture Overview

```text
                    ┌──────────────────────────┐
                    │        Visitor           │
                    └────────────┬─────────────┘
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │       React UI            │
                    │   Responsive + A11y       │
                    └────────────┬─────────────┘
                                 │
              ┌──────────────────┼──────────────────┐
              │                  │                  │
              ▼                  ▼                  ▼
        ┌───────────┐      ┌───────────┐      ┌────────────┐
        │  Content  │      │  Services │      │    SEO     │
        │   Data    │      │ Interfaces│      │   Layer    │
        └─────┬─────┘      └─────┬─────┘      └────────────┘
              │                  │
              ▼                  ▼
        Product Config      API/Mock Services
                                 │
                                 ▼
                         Future Backend/CMS
```

## Layering

### Presentation

Responsible for:

- pages
- layouts
- components
- accessibility
- animation

### Configuration

Responsible for:

- navigation
- site identity
- products
- SEO defaults
- feature flags

### Services

Responsible for:

- contact submission
- chatbot
- analytics
- future API calls

### Data

Responsible for:

- product content
- feature lists
- FAQs
- screenshots
- page content

---

## Dependency Direction

```text
Pages
  ↓
Feature Components
  ↓
Shared Components
  ↓
UI primitives

Pages
  ↓
Hooks
  ↓
Services

Pages
  ↓
Config/Data
```

Avoid circular dependencies.

---

## Rendering Strategy

Marketing pages should remain as lightweight as possible.

Prefer:

```text
Static content
+
minimal client interaction
```

Only interactive components should require client-side behavior.

---

## Future Backend

The frontend should be able to evolve into:

```text
React
  ↓
API Gateway
  ↓
Application Backend
  ├── Contact
  ├── Authentication
  ├── Products
  ├── Trial Management
  ├── Chat
  └── Analytics
```

No page should directly depend on a database.
