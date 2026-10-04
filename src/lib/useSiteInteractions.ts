import { useEffect } from 'react';

type SurfaceRule = {
  selector: string;
  kind: 'card' | 'panel' | 'badge';
  accent?: string;
  lift?: boolean;
  existing?: boolean;
};

// Explicitly reviewed surfaces: avoid treating every div or illustration as a button.
export const surfaceRules: SurfaceRule[] = [
  { selector: '.product-card, .products-catalog-card', kind: 'card', accent: '--product-rgb', existing: true },
  { selector: '.service-card', kind: 'card', accent: '--service-rgb', existing: true },
  { selector: '.why-card', kind: 'card', accent: '--why-rgb', existing: true },
  { selector: '.about-vision-card', kind: 'panel', existing: true },
  { selector: '.vision-panel', kind: 'panel', accent: '124 77 255', existing: true },
  { selector: '.trust-indicator-card', kind: 'card', accent: '--trust-rgb', existing: true },
  { selector: '.testimonial-panel, .testimonial-empty-card, .cta-panel', kind: 'panel', existing: true },
  { selector: '.device-status-card', kind: 'badge', accent: '52 211 153', existing: true },
  { selector: '.about-product-note, .cta-floating-icon', kind: 'badge', lift: true, existing: true },
  { selector: '.about-page__service-grid article, .about-page__product-grid article', kind: 'card', accent: '--about-rgb', existing: true },
  { selector: '.about-page__benefit-grid article, .about-page__process-grid article', kind: 'card', accent: '--about-rgb', lift: true },
  { selector: '.about-page__purpose-card', kind: 'card', accent: '--purpose-rgb', lift: true },
  { selector: '.about-page__technology li', kind: 'badge', accent: '--tech-rgb', lift: true },
  { selector: '.about-page__hero-benefits li, .about-page__who-highlights li', kind: 'badge', lift: true },
  { selector: '.about-page__faq-list article, .services-faq-list article, .products-faq-item', kind: 'panel' },
  { selector: '.about-page__cta > .about-page__shell, .services-final-cta > .services-page-shell, .vision-page__final > .vision-page__shell', kind: 'panel' },
  { selector: '.services-process-list article', kind: 'card', accent: '--process-rgb', existing: true },
  { selector: '.services-benefit-grid article', kind: 'card', accent: '--benefit-rgb', existing: true },
  { selector: '.services-tech-layout li', kind: 'badge', lift: true, existing: true },
  { selector: '.services-hero-badge', kind: 'badge', accent: '32 217 255', lift: true },
  { selector: '.products-benefit-card', kind: 'card', accent: '--benefit-rgb', existing: true },
  { selector: '.products-consultation-card, .products-comparison-scroll', kind: 'panel' },
  { selector: '.products-hero-chip', kind: 'badge', lift: true },
  { selector: '.products-trust-icon, .products-consultation-benefits li > span', kind: 'badge', lift: true },
  { selector: '.product-detail-preview', kind: 'panel' },
  { selector: '.product-feature-chip', kind: 'badge', lift: true },
  { selector: '.vision-purpose__card', kind: 'card', accent: '--purpose-rgb', existing: true },
  { selector: '.vision-beliefs__card', kind: 'card', accent: '--belief-rgb', existing: true },
  { selector: '.vision-impact__card', kind: 'card', accent: '--impact-rgb', existing: true },
  { selector: '.vision-hero__card', kind: 'badge', accent: '--card-rgb', existing: true },
  { selector: '.vision-brighter__card, .vision-ecosystem__card', kind: 'badge', existing: true },
  { selector: '.vision-hero__stat-icon', kind: 'badge', lift: true },
  { selector: '.contact-detail-card', kind: 'card', accent: '--contact-accent', existing: true },
  { selector: '.contact-hero__benefits > div', kind: 'badge', accent: '--contact-accent', lift: true },
  { selector: '.contact-hero__float', kind: 'badge', lift: true },
  { selector: '.contact-form, .contact-enquiry__visual, .contact-hero__image-frame, .contact-enquiry__trust', kind: 'panel' },
  { selector: '.legal-content-card', kind: 'panel' },
  { selector: '.footer-feature > span', kind: 'badge', accent: '32 217 255', lift: true, existing: true },
];

const actionSelector = [
  'button:not([role="tab"]):not([aria-expanded])',
  'button[aria-label*="SMVM Assistant"]',
  'a[class*="button"]', 'a[class*="btn"]', 'a[class*="action"]',
  '.service-card-arrow', '.why-card-arrow', '.products-compare-pill',
  '.contact-detail-card > a', '.contact-enquiry__quick-links a',
  '.footer-social-row > a', '.about-page__product-grid a', '.about-page__service-grid a',
].join(',');

const linkSelector = 'a[href], button[aria-expanded], button[role="tab"]';
const headingSelector = '.site-route section h2, .site-route section h3';

export function useSiteInteractions(pathname: string) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('.smvm-site');
    if (!root) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        if (!preference.matches) target.classList.add('smvm-revealed');
        revealObserver?.unobserve(target);
      });
    }, { threshold: 0.12 }) : null;

    function findElements(node: Element, selector: string) {
      return [...(node.matches(selector) ? [node as HTMLElement] : []), ...node.querySelectorAll<HTMLElement>(selector)];
    }

    function decorate(node: Element) {
      surfaceRules.forEach(rule => {
        findElements(node, rule.selector).forEach(element => {
          if (element.dataset.smvmSurface) return;
          element.dataset.smvmSurface = rule.kind;
          if (rule.lift) element.dataset.smvmLift = 'true';
          if (rule.existing) element.dataset.smvmExisting = 'true';
          if (rule.accent) {
            const value = rule.accent.startsWith('--') ? getComputedStyle(element).getPropertyValue(rule.accent) : rule.accent;
            const rgb = value.trim().replace(/,/g, ' ');
            if (/^\d+(?:\.\d+)?\s+\d+(?:\.\d+)?\s+\d+(?:\.\d+)?$/.test(rgb)) element.style.setProperty('--smvm-rgb', rgb);
          }
        });
      });
      findElements(node, actionSelector).forEach(element => { element.dataset.smvmControl = 'action'; });
      findElements(node, linkSelector).forEach(element => {
        if (!element.dataset.smvmControl) element.dataset.smvmControl = 'link';
      });
      findElements(node, headingSelector).forEach(element => {
        if (element.classList.contains('smvm-revealed')) return;
        element.dataset.smvmObserved = 'true';
        // Never hide content while waiting for an observer or browser support.
        if (element.getBoundingClientRect().top > window.innerHeight && !preference.matches) revealObserver?.observe(element);
      });
    }

    decorate(root);
    // Menus, search results and chat actions are inserted after the page loads.
    const pending = new Set<Element>();
    let frame = 0;
    const mutationObserver = new MutationObserver(records => {
      records.forEach(record => record.addedNodes.forEach(node => { if (node instanceof Element) pending.add(node); }));
      if (!pending.size || frame) return;
      frame = window.requestAnimationFrame(() => {
        pending.forEach(node => { if (root.contains(node)) decorate(node); });
        pending.clear();
        frame = 0;
      });
    });
    mutationObserver.observe(root, { childList: true, subtree: true });
    return () => {
      mutationObserver.disconnect();
      revealObserver?.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [pathname]);
}
