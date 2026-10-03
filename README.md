# SMVM Softwares Website

Official marketing website for **SMVM Softwares**, showcasing its POS products, software-development services, company information, and enquiry options.

[View the live website](https://smvm-softwares.rajeev-ranjan931425.chatgpt.site) · [GitHub repository](https://github.com/imrajeevraj/SMVM-Web)

## Overview

The website is a responsive React single-page application with light and dark themes. It presents SMVM's retail and medical POS products alongside web, mobile, automation, and consulting services.

Key experiences include:

- Product-focused homepage with animated visual sections
- Dedicated Products and Services pages
- CamStore POS, CamBill POS, MediBill POS, and MediBill Pro pages
- About Us, Our Vision, and Contact pages
- Responsive navigation and footer links
- Light and dark theme support
- Product search and keyboard-friendly interactions
- Floating support chatbot with local guided responses
- Responsive layouts for desktop, tablet, and mobile

## Technology Stack

- React 18
- TypeScript
- Vite 5
- React Router
- Tailwind CSS
- Framer Motion
- Lucide React icons
- PostCSS and Autoprefixer

The project is a static frontend application. It does not currently require a backend or database.

## Getting Started

### Requirements

- Node.js 18 or newer
- npm 9 or newer
- Windows PowerShell for the guarded development command

### Installation

```powershell
git clone https://github.com/imrajeevraj/SMVM-Web.git
cd "SMVM-Web"
npm install
```

### Start development

On Windows, use the guarded launcher:

```powershell
npm run dev:smvm
```

It starts the correct project on:

```text
http://127.0.0.1:5173
```

The launcher verifies the package identity, switches to the repository root, and uses a strict port so Vite cannot silently start on a different port.

The standard Vite command is also available:

```powershell
npm run dev
```

## Available Commands

| Command | Purpose |
| --- | --- |
| `npm run dev:smvm` | Start the guarded Windows development server on port 5173 |
| `npm run dev` | Start the standard Vite development server |
| `npm run build` | Run TypeScript validation and create the production build |
| `npm run preview` | Preview the generated production build locally |

## Application Routes

| Route | Page |
| --- | --- |
| `/` | Homepage |
| `/products` | Products overview |
| `/products/camstore-pos` | CamStore POS |
| `/products/cambill-pos` | CamBill POS |
| `/products/medibill-pos` | MediBill POS |
| `/products/medibill-pro` | MediBill Pro |
| `/services` | Software services |
| `/about` | About SMVM Softwares |
| `/vision` | Company vision |
| `/contact` | Contact and project enquiry |
| `/privacy` | Privacy policy placeholder |
| `/terms` | Terms of service placeholder |
| `/cookies` | Cookie policy placeholder |

Unknown routes render the custom not-found page.

## Project Structure

```text
SMVM-Web/
├── .openai/
│   └── hosting.json          # Static hosting configuration
├── public/
│   └── images/               # Product, service, and company visuals
├── scripts/
│   └── start-smvm-dev.ps1    # Root-locked Windows dev launcher
├── src/
│   ├── components/
│   │   ├── chat/             # Floating chatbot
│   │   ├── contact/          # Contact-page sections
│   │   ├── home/             # Homepage sections
│   │   ├── layout/           # Header, footer, and layout
│   │   ├── products/         # Products-page components
│   │   └── ui/               # Shared UI primitives
│   ├── config/               # Site and contact configuration
│   ├── data/                 # Product and service content
│   ├── lib/                  # Shared utilities
│   ├── pages/                # Route-level pages
│   ├── App.tsx               # Route definitions
│   ├── index.css             # Global design system and component styles
│   └── main.tsx              # Application entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Content and Design

Product and shared marketing data are primarily maintained in:

```text
src/data/site.ts
```

Global design tokens, responsive component styles, light/dark surfaces, glow treatments, and animation utilities are defined in:

```text
src/index.css
```

Some larger sections also use colocated CSS files next to their React components.

Images referenced with paths such as `/images/...` must be placed under `public/images/`.

## Production Build

Create an optimized static build with:

```powershell
npm run build
```

This command runs:

```text
tsc --noEmit && vite build
```

The generated website is written to `dist/`. The `dist/` directory is build output and is intentionally excluded from Git.

## Deployment

The website is hosted as a static Site. Hosting configuration is stored in `.openai/hosting.json`, with `dist` configured as the public directory.

Current production website:

```text
https://smvm-softwares.rajeev-ranjan931425.chatgpt.site
```

The GitHub `main` branch should contain every source file and asset required by a production build. Do not rely on uncommitted or stashed files for deployed designs.

## Reliable Development Workflow

To prevent an older version appearing after a restart:

1. Work from this repository, not an older duplicate directory.
2. Start the site with `npm run dev:smvm`.
3. Confirm the browser uses `http://127.0.0.1:5173` for local development.
4. Run `npm run build` before committing.
5. Commit new source files and images together.
6. Push the commit to `main` before publishing the production build.

Useful checks:

```powershell
git status --short
git branch --show-current
git log -5 --oneline
npm run build
```

If a new design disappears, check `git status` and `git stash list` before changing or restoring files. Never edit files inside `dist/`; update the source under `src/` or `public/` and rebuild.

## Current Limitations

- The enquiry experience is frontend-only; no server-side CRM or email integration is configured.
- The chatbot uses local guided responses rather than an external AI service.
- Legal pages contain placeholder content until approved policies are supplied.
- Automated unit and end-to-end tests have not yet been added.
- The project does not currently include an ESLint command.

## Contributing

1. Create a branch from `main`.
2. Make focused changes and preserve responsive light/dark behavior.
3. Run `npm run build`.
4. Review `git status --short` to ensure all required assets are tracked.
5. Commit the change and open a pull request.

## License

No open-source license has been added. Unless the repository owner states otherwise, all rights are reserved by SMVM Softwares.
