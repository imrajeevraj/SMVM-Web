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
| `/privacy` | Privacy policy review draft |
| `/terms` | Terms and Conditions review draft |
| `/cookies` | Canonical cookie and tracking policy draft |
| `/cookie-policy` | Redirect to `/cookies` |
| `/refund-policy` | Cancellation/refund draft and email request preparation |
| `/shipping-and-delivery` | Digital delivery policy draft |
| `/license-agreement` | Software EULA draft |
| `/acceptable-use` | Acceptable use policy draft |
| `/grievance` | Complaint/privacy/support email-draft tool |
| `/disclaimer` | Website/product disclaimer draft |
| `/checkout` | Purchase-information review; payments unavailable |

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

## Git Command Reference

Run these commands from the repository root in PowerShell. Replace placeholders such as `<branch-name>` and `<file>` with your values.

### Get the repository and check your work

```powershell
git clone https://github.com/imrajeevraj/SMVM-Web.git
cd "SMVM-Web"
git status
git status --short
git branch --show-current
git remote -v
```

### Review changes and history

```powershell
git diff
git diff --staged
git log -5 --oneline
git show --stat
```

### Create and switch branches

```powershell
git branch
git switch -c <branch-name>
git switch main
git branch -d <branch-name>
```

### Stage, commit, and publish changes

```powershell
git add <file>
git add -A
git diff --staged
git commit -m "Describe the change"
git push -u origin <branch-name>
git push
```

Use `git add <file>` to stage specific files, or `git add -A` to stage all changes after reviewing `git status`.

### Sync with the remote repository

```powershell
git fetch
git pull origin main
git push origin main
```

### Temporarily save and restore uncommitted changes

```powershell
git stash push -m "Describe the work"
git stash list
git stash pop
```

To remove a file from the staging area without discarding its edits:

```powershell
git restore --staged <file>
```

## Update your GitHub Repo with the latest changes

``` powershell
git push github main
```

## Current Limitations

- The enquiry experience is frontend-only; no server-side CRM or email integration is configured.
- The chatbot uses local guided responses rather than an external AI service.
- Legal pages contain versioned review drafts; merchant verification and qualified Indian legal approval are required before publication and live transactions.
- Automated policy/support and local HTTP route tests are available; browser end-to-end verification remains outstanding.
- The project does not currently include an ESLint command.

## Contributing

### Legal and payment review workflow

See [the final release report](SMVM_FINAL_RELEASE_REPORT.md), [acceptance matrix](SMVM_LEGAL_ACCEPTANCE_MATRIX.md), [approval checklist](SMVM_LEGAL_APPROVAL_REQUIRED.md) and [Railway checklist](SMVM_RAILWAY_DEPLOYMENT_CHECKLIST.md).

Internal merchant verification status and policy version live in `src/config/legal.json`; customer-facing policy text is in `src/data/policies.ts`. At the owner's request, public pages omit the merchant details table, verification placeholders and internal review notices. The footer retains its existing Privacy Policy, Terms of Service and Cookie Policy links without an additional policy section. Contact uses the existing email only; the owner requested no telephone contact. Checkout is unavailable by design: this repository does not process payments, persist orders, issue licenses or execute refunds. The `/checkout` acknowledgment is local review only, not recorded purchase acceptance.

`npm run build` now also prerenders legal HTML, creates an immutable full-text policy archive in `docs/legal/archive` for internal review, and generates sitemap/robots output. Archives are not copied into the published website or linked from policy pages. Existing archives cannot be overwritten under the same version. Increment `policyVersion` for changed archived text/identity, retain old files, and obtain explicit owner/legal approval for material changes. Draft policies remain noindex until approved. The configured canonical origin follows the supplied Railway URL; verify it before deployment.

Run `npm test` for policy/support tests and, after building, `npm run test:routes` for direct-route/static-host tests. Use `npm start` to serve the built site with SPA routing; `PORT` and `HOST` are the only runtime configuration. A reviewable Railway example is in `docs/railway.example.json`; the existing Sites manifest has not been replaced. No new production deployment is authorized by these scripts.

### Source contributions

1. Create a branch from `main`.
2. Make focused changes and preserve responsive light/dark behavior.
3. Run `npm run build`.
4. Review `git status --short` to ensure all required assets are tracked.
5. Commit the change and open a pull request.

## License

No open-source license has been added. Unless the repository owner states otherwise, all rights are reserved by SMVM Softwares.
