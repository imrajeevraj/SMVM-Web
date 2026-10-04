import { useEffect, useState, type CSSProperties, type KeyboardEvent } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  Activity,
  BarChart3,
  Boxes,
  Building2,
  CalendarClock,
  ClipboardList,
  FileText,
  HeartPulse,
  Layers3,
  LayoutGrid,
  Link2,
  PackageCheck,
  ReceiptText,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Store,
  Truck,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import './POSShowcase.css';

type ProductKey = 'cambill-pos' | 'medibill-pos' | 'medibill-pro';

type Module = { title: string; copy: string; icon: LucideIcon; accent: string };
type FlowStep = Module & { number: string };
type View = { id: string; title: string; description: string; icon: LucideIcon; image: string };
type ProductConfig = {
  name: string;
  audience: string;
  kicker: string;
  headline: string;
  highlight: string;
  description: string;
  image: string;
  imageAlt: string;
  accent: string;
  secondary: string;
  tertiary: string;
  signals: Array<{ title: string; caption: string; icon: LucideIcon; accent: string }>;
  visualNotes: Array<{ title: string; caption: string; icon: LucideIcon; accent: string }>;
  modulesTitle: string;
  modulesIntro: string;
  modules: Module[];
  flowEyebrow: string;
  flowTitle: string;
  flowIntro: string;
  flow: FlowStep[];
  ctaEyebrow: string;
  ctaTitle: string;
  views?: View[];
};

const cambillViews: View[] = [
  { id: 'dashboard', title: 'Dashboard', icon: LayoutGrid, image: '/images/products/cambill-pos/dashboard.png', description: 'A consolidated operating view for sales, purchases, products, customers and store activity.' },
  { id: 'billing', title: 'Billing', icon: ReceiptText, image: '/images/products/cambill-pos/billing.png', description: 'A focused sales workspace for building invoices and completing counter transactions.' },
  { id: 'inventory', title: 'Inventory', icon: Boxes, image: '/images/products/cambill-pos/inventory.png', description: 'Structured inventory screens keep product and stock information organised for daily operations.' },
  { id: 'products', title: 'Products', icon: PackageCheck, image: '/images/products/cambill-pos/products.png', description: 'A searchable product catalogue helps teams maintain items and find them quickly.' },
  { id: 'customers', title: 'Customers', icon: Users, image: '/images/products/cambill-pos/customers.png', description: 'Customer records stay connected to sales workflows and business follow-up.' },
  { id: 'reports', title: 'Reports', icon: BarChart3, image: '/images/products/cambill-pos/reports.png', description: 'Readable reporting views turn store activity into information your team can act on.' },
  { id: 'settings', title: 'Settings', icon: Settings, image: '/images/products/cambill-pos/settings.png', description: 'Configuration tools help adapt the workspace to users and operational requirements.' },
];

const configs: Record<ProductKey, ProductConfig> = {
  'cambill-pos': {
    name: 'CamBill POS',
    audience: 'For large stores and growing retail enterprises',
    kicker: 'Enterprise retail operations',
    headline: 'Scale every store from',
    highlight: 'one clear workspace.',
    description: 'CamBill POS connects billing, purchases, inventory, customers, suppliers and reporting in a structured workspace built for larger retail operations.',
    image: '/images/products/cambill-pos-card.png',
    imageAlt: 'CamBill POS shown across desktop, laptop, tablet and mobile with retail billing equipment',
    accent: '43 139 255',
    secondary: '98 84 255',
    tertiary: '255 143 26',
    signals: [
      { title: 'Multi-store ready', caption: 'Connected operations', icon: Building2, accent: '43 139 255' },
      { title: 'Central visibility', caption: 'Sales to inventory', icon: Activity, accent: '98 84 255' },
      { title: 'Structured access', caption: 'Clear team controls', icon: ShieldCheck, accent: '16 185 129' },
    ],
    visualNotes: [
      { title: 'One platform', caption: 'Across store operations', icon: Layers3, accent: '43 139 255' },
      { title: 'Enterprise insight', caption: 'Reports that stay useful', icon: BarChart3, accent: '98 84 255' },
    ],
    modulesTitle: 'The essential modules for larger retail operations',
    modulesIntro: 'Bring high-frequency store work into one consistent system, while keeping information clear for managers and teams.',
    modules: [
      { title: 'Multi-store operations', copy: 'Keep branch activity connected through a shared operating structure.', icon: Building2, accent: '43 139 255' },
      { title: 'POS billing', copy: 'Run clear counter-sales and invoice workflows for everyday transactions.', icon: ReceiptText, accent: '6 182 212' },
      { title: 'Inventory control', copy: 'Review products and stock information across a structured inventory workspace.', icon: Boxes, accent: '16 185 129' },
      { title: 'Product catalogue', copy: 'Maintain searchable product records for faster sales and inventory work.', icon: PackageCheck, accent: '255 143 26' },
      { title: 'Purchase & suppliers', copy: 'Keep purchase activity and supplier information connected to operations.', icon: Truck, accent: '139 92 246' },
      { title: 'Customer management', copy: 'Organise customer details alongside the retail sales journey.', icon: Users, accent: '236 72 153' },
      { title: 'Reports & analytics', copy: 'Turn store activity into readable summaries for practical decisions.', icon: BarChart3, accent: '43 139 255' },
      { title: 'Roles & configuration', copy: 'Shape user access and workspace settings around the way your team works.', icon: Settings, accent: '98 84 255' },
    ],
    flowEyebrow: 'A connected retail operating rhythm',
    flowTitle: 'From branch setup to enterprise insight',
    flowIntro: 'A shared system helps teams run each store consistently while giving decision-makers a clearer view of the whole business.',
    flow: [
      { number: '01', title: 'Connect operations', copy: 'Organise stores, users, products, customers and suppliers in a structured workspace.', icon: Building2, accent: '43 139 255' },
      { number: '02', title: 'Run everyday retail', copy: 'Keep billing, purchases and inventory moving through clear daily workflows.', icon: ShoppingCart, accent: '255 143 26' },
      { number: '03', title: 'Review the business', copy: 'Use reports and dashboards to understand performance and guide the next decision.', icon: BarChart3, accent: '16 185 129' },
    ],
    ctaEyebrow: 'Planning your retail setup?',
    ctaTitle: 'Let’s map CamBill POS to your stores, teams and workflows.',
    views: cambillViews,
  },
  'medibill-pos': {
    name: 'MediBill POS',
    audience: 'For independent medical stores and pharmacies',
    kicker: 'Focused pharmacy operations',
    headline: 'Make everyday pharmacy work',
    highlight: 'clear and dependable.',
    description: 'MediBill POS brings medicine inventory, pharmacy billing, batch handling, expiry visibility and customer records into one purpose-built workspace.',
    image: '/images/products/medibill-pos-card.png',
    imageAlt: 'MediBill POS pharmacy workspace shown on desktop and tablet with medicines and barcode scanner',
    accent: '5 166 105',
    secondary: '6 182 212',
    tertiary: '43 139 255',
    signals: [
      { title: 'Medicine ready', caption: 'Purpose-built stock', icon: HeartPulse, accent: '5 166 105' },
      { title: 'Batch aware', caption: 'Structured tracking', icon: Layers3, accent: '6 182 212' },
      { title: 'Expiry visibility', caption: 'Timely store review', icon: CalendarClock, accent: '255 143 26' },
    ],
    visualNotes: [
      { title: 'Pharmacy focused', caption: 'Stock to billing', icon: HeartPulse, accent: '5 166 105' },
      { title: 'Clear safeguards', caption: 'Batch and expiry view', icon: ShieldCheck, accent: '6 182 212' },
    ],
    modulesTitle: 'Pharmacy workflows designed around everyday accuracy',
    modulesIntro: 'Keep the information your team uses most—medicine stock, batches, expiry dates, billing and customer records—within easy reach.',
    modules: [
      { title: 'Medicine inventory', copy: 'Organise medicine and pharmacy stock in a focused inventory workspace.', icon: Boxes, accent: '5 166 105' },
      { title: 'Pharmacy billing', copy: 'Keep daily pharmacy sales and counter billing clear and efficient.', icon: ReceiptText, accent: '43 139 255' },
      { title: 'Batch tracking', copy: 'Maintain batch information alongside medicine and stock records.', icon: Layers3, accent: '6 182 212' },
      { title: 'Expiry visibility', copy: 'Surface expiry information so the team can review stock at the right time.', icon: CalendarClock, accent: '255 143 26' },
      { title: 'Purchases & suppliers', copy: 'Connect medicine purchases and supplier records to your pharmacy workflow.', icon: Truck, accent: '139 92 246' },
      { title: 'Prescription records', copy: 'Keep relevant prescription information organised with customer workflows.', icon: FileText, accent: '236 72 153' },
      { title: 'Customer records', copy: 'Maintain customer information in a simple, accessible workspace.', icon: Users, accent: '5 166 105' },
      { title: 'Pharmacy reports', copy: 'Review sales, stock and pharmacy activity through readable reports.', icon: BarChart3, accent: '43 139 255' },
    ],
    flowEyebrow: 'A focused pharmacy rhythm',
    flowTitle: 'From medicine receipt to informed review',
    flowIntro: 'A connected workflow helps pharmacy teams keep stock organised, billing clear and important medicine information visible.',
    flow: [
      { number: '01', title: 'Receive and organise', copy: 'Add medicines with the stock, supplier, batch and expiry information your team needs.', icon: ClipboardList, accent: '5 166 105' },
      { number: '02', title: 'Bill with context', copy: 'Use a pharmacy-focused sales workflow with medicine information close at hand.', icon: ReceiptText, accent: '43 139 255' },
      { number: '03', title: 'Review exceptions', copy: 'Check stock movement, batches, expiries and sales through practical reports.', icon: CalendarClock, accent: '255 143 26' },
    ],
    ctaEyebrow: 'Ready to simplify pharmacy work?',
    ctaTitle: 'Let’s shape MediBill POS around your medical store.',
  },
  'medibill-pro': {
    name: 'MediBill Pro',
    audience: 'For multi-branch and large-scale medical businesses',
    kicker: 'Enterprise pharmacy management',
    headline: 'Lead every branch with',
    highlight: 'one intelligent platform.',
    description: 'MediBill Pro brings multi-branch pharmacy operations, central inventory visibility, user controls, supplier workflows and enterprise reporting into one scalable platform.',
    image: '/images/products/medibill-pro-card.png',
    imageAlt: 'MediBill Pro enterprise pharmacy dashboard shown on desktop and mobile with medicine stock',
    accent: '139 92 246',
    secondary: '75 89 255',
    tertiary: '236 72 153',
    signals: [
      { title: 'Multi-branch view', caption: 'One operating picture', icon: Building2, accent: '139 92 246' },
      { title: 'Central controls', caption: 'Consistent processes', icon: ShieldCheck, accent: '75 89 255' },
      { title: 'Enterprise insight', caption: 'Branch-wise reporting', icon: BarChart3, accent: '236 72 153' },
    ],
    visualNotes: [
      { title: 'Built to scale', caption: 'Branch to enterprise', icon: Building2, accent: '139 92 246' },
      { title: 'Decision ready', caption: 'Central analytics', icon: BarChart3, accent: '236 72 153' },
    ],
    modulesTitle: 'Central control without losing branch-level clarity',
    modulesIntro: 'Give leadership a connected view of the business while keeping each branch equipped for dependable day-to-day pharmacy work.',
    modules: [
      { title: 'Multi-branch visibility', copy: 'Bring branch operations into one connected enterprise view.', icon: Building2, accent: '139 92 246' },
      { title: 'Central inventory', copy: 'Review stock information across locations through a shared control layer.', icon: Boxes, accent: '75 89 255' },
      { title: 'Batch & expiry control', copy: 'Keep batch and expiry information visible across the wider operation.', icon: CalendarClock, accent: '255 143 26' },
      { title: 'Branch-wise billing', copy: 'Support daily sales workflows while maintaining branch-level visibility.', icon: ReceiptText, accent: '6 182 212' },
      { title: 'Supplier management', copy: 'Coordinate supplier and purchase information across the business.', icon: Truck, accent: '16 185 129' },
      { title: 'User roles & access', copy: 'Structure access so teams see the tools relevant to their responsibilities.', icon: ShieldCheck, accent: '236 72 153' },
      { title: 'Enterprise reporting', copy: 'Compare performance and activity through central, readable reports.', icon: BarChart3, accent: '139 92 246' },
      { title: 'Integration ready', copy: 'Create a stronger foundation for connecting enterprise workflows.', icon: Link2, accent: '43 139 255' },
    ],
    flowEyebrow: 'A scalable pharmacy network',
    flowTitle: 'Standardise, monitor and grow with confidence',
    flowIntro: 'MediBill Pro creates a common operating foundation for branch teams and a clearer decision layer for leadership.',
    flow: [
      { number: '01', title: 'Standardise branches', copy: 'Create consistent product, stock, supplier and user structures across locations.', icon: Layers3, accent: '139 92 246' },
      { number: '02', title: 'Monitor operations', copy: 'Keep branch activity, inventory, batches and expiries visible in one view.', icon: Activity, accent: '75 89 255' },
      { number: '03', title: 'Guide growth', copy: 'Use central reports to compare performance and support better expansion decisions.', icon: BarChart3, accent: '236 72 153' },
    ],
    ctaEyebrow: 'Managing multiple pharmacy locations?',
    ctaTitle: 'Let’s plan a MediBill Pro setup that can grow with your network.',
  },
};

export function POSShowcase({ product }: { product: ProductKey }) {
  const config = configs[product];
  const views = config.views ?? [];
  const [activeView, setActiveView] = useState(views[0]?.id ?? '');
  const reducedMotion = useReducedMotion();

  useEffect(() => setActiveView(views[0]?.id ?? ''), [product]);

  const selectedView = views.find(view => view.id === activeView) ?? views[0];
  const pageStyle = {
    '--pos-rgb': config.accent,
    '--pos-secondary-rgb': config.secondary,
    '--pos-tertiary-rgb': config.tertiary,
  } as CSSProperties;

  const navigateTabs = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % views.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + views.length) % views.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = views.length - 1;
    else return;
    event.preventDefault();
    setActiveView(views[next].id);
    document.getElementById(`${product}-tab-${views[next].id}`)?.focus();
  };

  return (
    <div className={`pos-showcase-page pos-showcase-page--${product}`} style={pageStyle}>
      <section className="pos-showcase-hero" aria-labelledby={`${product}-title`}>
        <div className="pos-showcase-hero__background" aria-hidden="true" />
        <div className="site-container pos-showcase-hero__shell">
          <Link to="/products" className="pos-showcase-back"><LayoutGrid aria-hidden="true" /> All products</Link>
          <div className="pos-showcase-hero__grid">
            <div className="pos-showcase-hero__copy">
              <span className="pos-showcase-kicker"><Store aria-hidden="true" /> {config.kicker}</span>
              <h1 id={`${product}-title`}>{config.headline} <span>{config.highlight}</span></h1>
              <p>{config.description}</p>
              <div className="pos-showcase-actions">
                <Link to={`/contact?product=${product}`} className="button-primary">Request a demo</Link>
                <a href={`#${product}-features`} className="button-outline">Explore features</a>
              </div>
              <div className="pos-signal-grid" aria-label={`${config.name} highlights`}>
                {config.signals.map(({ title, caption, icon: Icon, accent }) => (
                  <div key={title} className="pos-signal" style={{ '--card-rgb': accent } as CSSProperties}>
                    <Icon aria-hidden="true" /><span><strong>{title}</strong><small>{caption}</small></span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pos-showcase-hero__visual">
              <div className="pos-showcase-visual__glow" aria-hidden="true" />
              <img src={config.image} alt={config.imageAlt} />
              <div className="pos-visual-note pos-visual-note--top" style={{ '--card-rgb': config.visualNotes[0].accent } as CSSProperties}>
                {(() => { const Icon = config.visualNotes[0].icon; return <span><Icon aria-hidden="true" /></span>; })()}
                <div><strong>{config.visualNotes[0].title}</strong><small>{config.visualNotes[0].caption}</small></div>
              </div>
              <div className="pos-visual-note pos-visual-note--bottom" style={{ '--card-rgb': config.visualNotes[1].accent } as CSSProperties}>
                {(() => { const Icon = config.visualNotes[1].icon; return <span><Icon aria-hidden="true" /></span>; })()}
                <div><strong>{config.visualNotes[1].title}</strong><small>{config.visualNotes[1].caption}</small></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id={`${product}-features`} className="pos-showcase-modules" aria-labelledby={`${product}-features-title`}>
        <div className="site-container">
          <div className="pos-showcase-heading">
            <div><span className="section-eyebrow">Complete product capabilities</span><h2 id={`${product}-features-title`}>{config.modulesTitle}</h2></div>
            <p>{config.modulesIntro}</p>
          </div>
          <div className="pos-module-grid">
            {config.modules.map(({ title, copy, icon: Icon, accent }) => (
              <article key={title} className="pos-module-card" style={{ '--card-rgb': accent } as CSSProperties}>
                <span><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedView ? (
        <section className="pos-workspace-section" aria-labelledby={`${product}-workspace-title`}>
          <div className="site-container">
            <div className="pos-showcase-workspace">
              <div className="pos-workspace-heading">
                <span className="section-eyebrow">Interactive product workspace</span>
                <h2 id={`${product}-workspace-title`}>Explore CamBill POS screens</h2>
                <p>Select a module to see how key retail work is organised across the product workspace.</p>
              </div>
              <div className="pos-workspace-layout">
                <div className="pos-workspace-tabs" role="tablist" aria-label="CamBill POS workspace views">
                  {views.map((view, index) => {
                    const Icon = view.icon;
                    const active = view.id === activeView;
                    return (
                      <button key={view.id} className="pos-workspace-tab" type="button" role="tab" aria-selected={active} aria-controls={`${product}-panel-${view.id}`} id={`${product}-tab-${view.id}`} tabIndex={active ? 0 : -1} onClick={() => setActiveView(view.id)} onKeyDown={event => navigateTabs(event, index)}>
                        <span><Icon aria-hidden="true" /></span>{view.title}
                      </button>
                    );
                  })}
                </div>
                <div className="pos-workspace-preview">
                  <AnimatePresence mode="wait">
                    <motion.div key={selectedView.id} id={`${product}-panel-${selectedView.id}`} role="tabpanel" tabIndex={0} aria-labelledby={`${product}-tab-${selectedView.id}`} initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reducedMotion ? 0 : -8 }} transition={{ duration: reducedMotion ? 0 : .22 }}>
                      <img src={selectedView.image} alt={`${selectedView.title} workspace in ${config.name}`} />
                      <div><h3>{selectedView.title}</h3><p>{selectedView.description}</p></div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="pos-flow-section" aria-labelledby={`${product}-flow-title`}>
        <div className="site-container">
          <div className="pos-showcase-flow">
            <div className="pos-flow-heading"><span className="section-eyebrow">{config.flowEyebrow}</span><h2 id={`${product}-flow-title`}>{config.flowTitle}</h2><p>{config.flowIntro}</p></div>
            <div className="pos-flow-grid">
              {config.flow.map(({ number, title, copy, icon: Icon, accent }) => (
                <article key={number} className="pos-flow-card" style={{ '--card-rgb': accent } as CSSProperties}>
                  <div><b>{number}</b><span><Icon aria-hidden="true" /></span></div><h3>{title}</h3><p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pos-showcase-cta" aria-labelledby={`${product}-cta-title`}>
        <div className="site-container">
          <div className="pos-showcase-cta__panel">
            <div><span>{config.ctaEyebrow}</span><h2 id={`${product}-cta-title`}>{config.ctaTitle}</h2></div>
            <div><Link to={`/contact?product=${product}`} className="button-light">Talk to our team</Link><Link to="/products" className="button-secondary-dark">Compare products</Link></div>
          </div>
        </div>
      </section>
    </div>
  );
}
