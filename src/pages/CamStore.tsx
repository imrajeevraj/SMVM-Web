import {
  ArrowLeft,
  BarChart3,
  Boxes,
  CheckCircle2,
  ClipboardList,
  PackageCheck,
  ReceiptText,
  ScanLine,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react';
import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import './CamStore.css';

const capabilities = [
  {
    title: 'Fast, clear billing',
    copy: 'Keep everyday counter sales focused with a billing workspace designed for quick decisions.',
    icon: ReceiptText,
    accent: '255 143 26',
  },
  {
    title: 'Inventory visibility',
    copy: 'See products and stock information in one place, so routine inventory work stays organised.',
    icon: Boxes,
    accent: '43 139 255',
  },
  {
    title: 'Customer records',
    copy: 'Keep customer details connected to your store workflow without adding unnecessary complexity.',
    icon: Users,
    accent: '139 92 246',
  },
  {
    title: 'Sales overview',
    copy: 'Turn daily store activity into a readable overview that helps you understand performance.',
    icon: BarChart3,
    accent: '16 185 129',
  },
  {
    title: 'Product management',
    copy: 'Maintain a clean product catalogue that makes finding and managing items more straightforward.',
    icon: PackageCheck,
    accent: '6 182 212',
  },
  {
    title: 'Practical controls',
    copy: 'A structured workspace keeps important store actions easy to find and simple to follow.',
    icon: ShieldCheck,
    accent: '236 72 153',
  },
] as const;

const workflow = [
  {
    number: '01',
    title: 'Set up your store',
    copy: 'Organise products, inventory and customer information in one focused workspace.',
    icon: ClipboardList,
    accent: '43 139 255',
  },
  {
    number: '02',
    title: 'Run daily sales',
    copy: 'Use a clear billing flow at the counter while keeping stock information close at hand.',
    icon: ScanLine,
    accent: '255 143 26',
  },
  {
    number: '03',
    title: 'Review and improve',
    copy: 'Read sales and store activity through simple reports built for practical decisions.',
    icon: BarChart3,
    accent: '16 185 129',
  },
] as const;

export function CamStore() {
  return (
    <div className="camstore-page">
      <section className="camstore-hero" aria-labelledby="camstore-title">
        <div className="camstore-grid" aria-hidden="true" />
        <div className="site-container camstore-hero__shell">
          <Link to="/products" className="camstore-back"><ArrowLeft aria-hidden="true" /> All products</Link>

          <div className="camstore-hero__layout">
            <div className="camstore-hero__copy">
              <span className="camstore-kicker"><ShoppingBag aria-hidden="true" /> Retail POS for small businesses</span>
              <h1 id="camstore-title">Run your store with <span>clarity.</span></h1>
              <p>CamStore POS brings billing, inventory, customers and reports into one focused workspace—so your team can spend less time navigating software and more time serving customers.</p>

              <div className="camstore-hero__actions">
                <Link to="/contact?product=camstore-pos" className="button-primary">Request a demo</Link>
                <a href="#camstore-capabilities" className="button-outline">Explore capabilities</a>
              </div>

              <div className="camstore-signals" aria-label="CamStore POS highlights">
                <div className="camstore-signal" style={{ '--camstore-card-rgb': '43 139 255' } as CSSProperties}>
                  <Zap aria-hidden="true" /><span><strong>Simple workflow</strong><small>Easy to understand</small></span>
                </div>
                <div className="camstore-signal" style={{ '--camstore-card-rgb': '255 143 26' } as CSSProperties}>
                  <ScanLine aria-hidden="true" /><span><strong>Counter ready</strong><small>Built for daily sales</small></span>
                </div>
                <div className="camstore-signal" style={{ '--camstore-card-rgb': '16 185 129' } as CSSProperties}>
                  <BarChart3 aria-hidden="true" /><span><strong>Useful insights</strong><small>Clear store visibility</small></span>
                </div>
              </div>
            </div>

            <div className="camstore-hero__stage" aria-label="CamStore POS shown on desktop and mobile with retail equipment">
              <div className="camstore-stage__glow" aria-hidden="true" />
              <img src="/images/products/camstore-pos-card.png" alt="CamStore POS dashboard, mobile catalogue, billing printer and retail equipment" />
              <div className="camstore-visual-note camstore-visual-note--top" style={{ '--camstore-card-rgb': '43 139 255' } as CSSProperties}>
                <span><Sparkles aria-hidden="true" /></span><div><strong>One workspace</strong><small>Billing to reporting</small></div>
              </div>
              <div className="camstore-visual-note camstore-visual-note--bottom" style={{ '--camstore-card-rgb': '255 143 26' } as CSSProperties}>
                <span><CheckCircle2 aria-hidden="true" /></span><div><strong>Built for small shops</strong><small>Focused and practical</small></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="camstore-capabilities" className="camstore-capabilities" aria-labelledby="camstore-capabilities-title">
        <div className="site-container">
          <div className="camstore-section-heading">
            <div><span className="section-eyebrow">Everything your store needs</span><h2 id="camstore-capabilities-title">A clearer way to manage everyday retail</h2></div>
            <p>CamStore POS keeps the essential parts of a small retail business connected without making the experience feel heavy.</p>
          </div>

          <div className="camstore-capability-grid">
            {capabilities.map(({ title, copy, icon: Icon, accent }) => (
              <article key={title} className="camstore-capability" style={{ '--camstore-card-rgb': accent } as CSSProperties}>
                <span className="camstore-capability__icon"><Icon aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="camstore-workflow-section" aria-labelledby="camstore-workflow-title">
        <div className="site-container">
          <div className="camstore-workflow">
            <div className="camstore-workflow__heading">
              <span className="section-eyebrow">A simple retail rhythm</span>
              <h2 id="camstore-workflow-title">From setup to sales insights</h2>
              <p>A logical flow helps your team move from store setup to everyday selling and review.</p>
            </div>
            <div className="camstore-step-grid">
              {workflow.map(({ number, title, copy, icon: Icon, accent }) => (
                <article key={number} className="camstore-step" style={{ '--camstore-card-rgb': accent } as CSSProperties}>
                  <div className="camstore-step__top"><span>{number}</span><i><Icon aria-hidden="true" /></i></div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="camstore-cta" aria-labelledby="camstore-cta-title">
        <div className="site-container">
          <div className="camstore-cta__panel">
            <div><span>Ready to simplify your store?</span><h2 id="camstore-cta-title">Let’s find the right CamStore setup for your business.</h2></div>
            <div className="camstore-cta__actions"><Link to="/contact?product=camstore-pos" className="button-light">Talk to our team</Link><Link to="/products" className="button-secondary-dark">Compare products</Link></div>
          </div>
        </div>
      </section>
    </div>
  );
}
