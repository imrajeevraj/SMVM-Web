# Website interaction review

Reviewed and implemented on 4 October 2026. The existing visual artwork, responsive layouts, content, routes and contact details are preserved.

## Page-by-page decisions

| Page / area | Existing behavior and gaps | Enhancement applied |
| --- | --- | --- |
| Home | Product, service, Why Choose Us and About/Vision cards already had accent glows; smaller visual badges and controls were inconsistent. | Preserved the artwork accents, unified hover lift and glow timing, added subtle badge feedback, consistent button/focus states and section-heading entrances. |
| Products | Catalog cards already had individual product colors; comparison, consultation, hero chips and FAQs had limited feedback. | Product-matched hover glows, stable large-panel highlights, chip feedback, FAQ open/hover/focus styling and CTA press feedback. |
| Product details: CamStore POS, CamBill POS, MediBill POS, MediBill Pro | Preview frames and feature lists lacked consistent interactions; CamBill tabs were mouse-oriented. | Accent-matched preview glows and feature chips. CamBill tabs support arrow keys, Home/End, roving focus and a focusable content panel. Preview changes respect reduced motion. |
| Services | Major service/process/benefit cards had effects; technology badges, hero badges, FAQs and final CTA were inconsistent. | Existing colors retained; matching badge feedback, consistent FAQ and CTA states, restrained panel glows. |
| About | Main product/service cards had effects; process, purpose, technology and benefit cards were mostly static. | Matching color-specific glows, small lifts, padded benefit surfaces, restrained artwork zoom, FAQ and final CTA feedback. |
| Our Vision | Large purpose, belief and impact cards had individual colors; floating badges and statistics were inconsistent. A full-width hero overlay intercepted badge hover. | Consistent accent glows, stat-icon feedback, hero-overlay hit testing corrected; floating hero badges pause their animation while hovered. |
| Contact | Contact-detail cards had accents; enquiry/form panels, floating contact badges and controls had limited feedback. | Accent-matched glows, stable form-panel feedback, improved input focus and validation styling; email, phone, office and enquiry behavior unchanged. |
| Privacy, Terms, Cookies | Content panels had no interaction treatment. | Restrained panel glow, consistent links and page entrances, without making text containers appear clickable. |
| Not-found page | Basic recovery link only. | Consistent navigation-button feedback and route entrance. |
| Shared navigation, footer, search and chatbot | Mixed control transitions; dynamically inserted chat/search/menu actions needed coverage. | Shared link/button/focus feedback, footer icon glows and dynamic control decoration. Chatbot launch artwork stays transparent. Header/footer/chat remain mounted across page navigation. |

## Interaction rules

- Fine-pointer desktop: small cards lift by 4px, buttons by 2px; larger content/form panels remain stable. Glows follow each card's existing illustration or product accent.
- Light/dark themes: theme-aware shadow and glow intensity; no replacement of existing background art or image aspect ratios.
- Touch: no sticky hover transforms; buttons retain lightweight press feedback.
- Keyboard: visible focus rings, parent-card focus glow, keyboard-accessible CamBill tabs and existing FAQ controls.
- Reduced motion: page/heading entrances, CSS loops, card lifts and artwork scaling stop. Home device bobbing and product-tab motion also respect the preference.
- Page changes use a short 320ms entrance. Below-the-fold headings receive a one-time 420ms entrance; content is never hidden waiting for an observer.
- A scoped interaction registry covers audited surfaces, instead of attaching motion to every element. Dynamic additions are batched with requestAnimationFrame; observers are cleaned up on route changes.

## Verification

Browser inspection covers 14 routes: Home, Products, Services, About, Vision, Contact, four product details, three policy pages and the not-found page.

Test matrix: desktop light/dark at 1440px, touch tablet at 768px and touch mobile at 390px. Checks include horizontal overflow, image loading, transition coverage and real desktop hover shadow changes. Additional checks exercise FAQ expansion and keyboard focus, CamBill keyboard tabs, dynamic chatbot actions, contact validation, navigation entrances, hash scrolling and reduced-motion behavior.

Final result: **56 route/viewport/theme checks and 344 real desktop surface-hover checks passed**, with no runtime errors, horizontal overflow, broken loaded images or missing registered-surface transitions. The functional/keyboard/reduced-motion checks passed, as did the TypeScript + Vite production build.

Implementation files: `src/lib/useSiteInteractions.ts` and `src/styles/interactions.css`, with targeted changes to shared layout, product details, Home motion and chatbot actions. Production validation uses `npm run build` (TypeScript and Vite).
