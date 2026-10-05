import { useEffect, useState, type CSSProperties, type ElementType, type KeyboardEvent, type ReactNode } from 'react';
import {
  Aperture, BadgeIndianRupee, BarChart3, Barcode, BatteryCharging, Boxes, Briefcase,
  Camera, CheckCircle2, CloudCog, DatabaseBackup, FileCheck2, Gauge, Headphones,
  History, Layers3, LayoutDashboard, MemoryStick, PackageCheck, Pause, Play,
  PlayCircle, Printer, ReceiptIndianRupee, ScanBarcode, Settings, ShieldCheck,
  ShoppingCart, Store, Triangle, Truck, Undo2, Users, Wrench,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './CamBill.css';

const asset = '/images/products/cambill-generated';

type AccentItem = { title: string; copy: string; icon: ElementType; accent: string };
type ProductSlide = { id: string; label: string; title: string; copy: string; image: string; icon: ElementType };

const featureRail: AccentItem[] = [
  { title: 'Fast Billing', copy: 'Barcode-ready counter sales', icon: ReceiptIndianRupee, accent: '38 111 255' },
  { title: 'Inventory Control', copy: 'Stock, serials and pricing', icon: Boxes, accent: '14 165 233' },
  { title: 'Customer Management', copy: 'Profiles and purchase history', icon: Users, accent: '124 58 237' },
  { title: 'Purchase Management', copy: 'Suppliers and stock intake', icon: Truck, accent: '16 185 129' },
  { title: 'Service & Returns', copy: 'Track after-sales workflows', icon: Wrench, accent: '244 63 94' },
  { title: 'Reports & Insights', copy: 'Clear business intelligence', icon: BarChart3, accent: '245 158 11' },
];

const featureList = [
  'POS billing and GST invoices', 'Product, stock and serial tracking',
  'Purchase and supplier management', 'Customer accounts and history',
  'Returns and refund workflows', 'Role-based staff access',
  'Offline-first secure database', 'Backup, audit and diagnostics',
];
const billingList = [
  'Fast search, barcode scanning and keyboard shortcuts', 'Cash, UPI, card and split payment options',
  'Discount, tax and customer selection in one flow', 'A4 invoice, PDF and thermal receipt output',
];
const inventoryList = [
  'Central product catalogue and category control', 'Serial-number tracking for high-value equipment',
  'Live in-stock, low-stock and out-of-stock states', 'Cost, selling price and supplier visibility',
];

const categories = [
  { label: 'Cameras', icon: Camera, accent: '38 111 255' }, { label: 'Lenses', icon: Aperture, accent: '14 165 233' },
  { label: 'Accessories', icon: PackageCheck, accent: '124 58 237' }, { label: 'Tripods', icon: Triangle, accent: '16 185 129' },
  { label: 'Memory Cards', icon: MemoryStick, accent: '245 158 11' }, { label: 'Bags', icon: Briefcase, accent: '236 72 153' },
  { label: 'Batteries', icon: BatteryCharging, accent: '249 115 22' }, { label: 'Other Items', icon: Layers3, accent: '99 102 241' },
];

const gallery: ProductSlide[] = [
  { id: 'dashboard', label: 'Dashboard', title: 'The complete business overview', image: `${asset}/dashboard.png`, copy: 'Sales, inventory, customers, profit and operational health in one clear command center.', icon: LayoutDashboard },
  { id: 'billing', label: 'Billing', title: 'High-speed POS billing', image: `${asset}/pos-terminal.png`, copy: 'Search, scan, select serial units, apply GST and settle payments without slowing down the counter.', icon: ReceiptIndianRupee },
  { id: 'inventory', label: 'Inventory', title: 'Every stock unit accounted for', image: `${asset}/inventory.png`, copy: 'Track quantities, costs, suppliers, serial numbers and availability across the entire store.', icon: Boxes },
  { id: 'products', label: 'Products', title: 'A visual product catalogue', image: `${asset}/products.png`, copy: 'Manage camera bodies, lenses and accessories with rich product-level information.', icon: PackageCheck },
  { id: 'sales', label: 'Sales', title: 'Invoices and settlements together', image: `${asset}/sales.png`, copy: 'Review invoice history, tenders, payments, returns and profit from one searchable screen.', icon: BadgeIndianRupee },
  { id: 'customers', label: 'Customers', title: 'Customer context at every sale', image: `${asset}/customers.png`, copy: 'Keep GST profiles, contact information, lifetime value and purchase history easy to find.', icon: Users },
  { id: 'reports', label: 'Reports', title: 'Useful intelligence, not noise', image: `${asset}/reports.png`, copy: 'Understand sales, profit, products, inventory and customer trends visually.', icon: BarChart3 },
  { id: 'returns', label: 'Returns', title: 'Controlled return workflows', image: `${asset}/returns.png`, copy: 'Record conditions, reasons, refunds and stock reversals with a consistent audit trail.', icon: Undo2 },
  { id: 'backup', label: 'Backup', title: 'Resilient data protection', image: `${asset}/backup.png`, copy: 'Coordinate encrypted local, USB and cloud backups with visible recovery health.', icon: DatabaseBackup },
  { id: 'settings', label: 'Settings', title: 'Deep control when you need it', image: `${asset}/settings.png`, copy: 'Configure store identity, tax, billing, staff, hardware and system behaviour centrally.', icon: Settings },
];

const operationsSlides = gallery.filter(({ id }) => ['dashboard', 'sales', 'customers', 'reports'].includes(id));
const commerceSlides = gallery.filter(({ id }) => ['sales', 'inventory', 'products'].includes(id));
const lifecycleSlides = gallery.filter(({ id }) => ['customers', 'returns', 'sales'].includes(id));
const resilienceSlides = gallery.filter(({ id }) => ['settings', 'backup', 'returns', 'dashboard'].includes(id));

const whyItems: AccentItem[] = [
  { title: 'Industry Focused', copy: 'Purpose-built for camera and electronics stores, not adapted from a generic POS.', icon: Camera, accent: '38 111 255' },
  { title: 'Easy to Use', copy: 'Fast counter workflows, clear navigation and useful keyboard shortcuts.', icon: Gauge, accent: '16 185 129' },
  { title: 'Powerful & Reliable', copy: 'Offline-first operations, secure records and dependable local performance.', icon: ShieldCheck, accent: '124 58 237' },
  { title: 'Dedicated Support', copy: 'Practical onboarding and responsive product support from SMVM Softwares.', icon: Headphones, accent: '245 158 11' },
];

const workflow = [
  { title: 'Add Products', icon: PackageCheck }, { title: 'Manage Inventory', icon: Boxes },
  { title: 'Create Sales', icon: ShoppingCart }, { title: 'Print Invoices', icon: Printer },
  { title: 'Track Customers', icon: Users }, { title: 'Analyze Reports', icon: BarChart3 },
];

const CheckList = ({ items }: { items: string[] }) => (
  <ul className="cambill-checks">{items.map(item => <li key={item}><CheckCircle2 aria-hidden="true" />{item}</li>)}</ul>
);

const AppFrame = ({ src, alt, title, className = '' }: { src: string; alt: string; title: string; className?: string }) => (
  <figure className={`cambill-app-frame ${className}`}><figcaption><i /><i /><i /><b>{title}</b></figcaption><img src={src} alt={alt} loading="lazy" /></figure>
);

function ProductCarousel({ slides, label, dark = false, interval = 5200 }: { slides: ProductSlide[]; label: string; dark?: boolean; interval?: number }) {
  const [index, setIndex] = useState(0);
  const [manualPaused, setManualPaused] = useState(false);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const paused = manualPaused || interactionPaused;
  useEffect(() => {
    if (paused || slides.length < 2) return;
    const timer = window.setInterval(() => setIndex(current => (current + 1) % slides.length), interval);
    return () => window.clearInterval(timer);
  }, [interval, paused, slides.length]);
  const slide = slides[index];
  const Icon = slide.icon;
  return (
    <article className={`cambill-carousel-card${dark ? ' cambill-carousel-card--dark' : ''}`} aria-label={label} aria-roledescription="carousel" onMouseEnter={() => setInteractionPaused(true)} onMouseLeave={() => setInteractionPaused(false)} onFocusCapture={() => setInteractionPaused(true)} onBlurCapture={() => setInteractionPaused(false)}>
      <div className="cambill-carousel-card__stage"><img key={slide.id} src={slide.image} alt={`${slide.label} screen in CamBill POS`} loading="lazy" /><span className="cambill-carousel-card__label"><Icon aria-hidden="true" />{slide.label}</span></div>
      <div className="cambill-carousel-card__content" aria-live="polite">
        <div><span className="section-eyebrow">{String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span><h3>{slide.title}</h3><p>{slide.copy}</p></div>
        <div className="cambill-carousel-card__controls"><div className="cambill-carousel-card__dots" aria-label="Choose a screen">{slides.map((item, dotIndex) => <button key={item.id} type="button" className={dotIndex === index ? 'is-active' : ''} onClick={() => setIndex(dotIndex)} aria-label={`Show ${item.label}`} aria-pressed={dotIndex === index} />)}</div><button type="button" className="cambill-carousel-card__pause" onClick={() => setManualPaused(value => !value)} aria-label={manualPaused ? 'Play slideshow' : 'Pause slideshow'} aria-pressed={manualPaused}>{manualPaused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}</button></div>
      </div>
    </article>
  );
}

function FeatureCard({ eyebrow, title, copy, image, imageAlt, frameTitle, checks, reverse = false, children }: { eyebrow: string; title: string; copy: string; image: string; imageAlt: string; frameTitle: string; checks?: string[]; reverse?: boolean; children?: ReactNode }) {
  return (
    <article className={`cambill-unified-card${reverse ? ' cambill-unified-card--reverse' : ''}`}>
      <div className="cambill-unified-card__visual"><AppFrame src={image} alt={imageAlt} title={frameTitle} /></div>
      <div className="cambill-unified-card__copy"><span className="section-eyebrow">{eyebrow}</span><h2>{title}</h2><p>{copy}</p>{checks && <CheckList items={checks} />}{children}</div>
    </article>
  );
}

export function CamBill() {
  const [activeTab, setActiveTab] = useState(gallery[0].id);
  const selected = gallery.find(item => item.id === activeTab) ?? gallery[0];
  const navigateTabs = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % gallery.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + gallery.length) % gallery.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = gallery.length - 1;
    else return;
    event.preventDefault(); setActiveTab(gallery[next].id); document.getElementById(`cambill-tab-${gallery[next].id}`)?.focus();
  };

  return (
    <main className="cambill-page">
      <section className="cambill-hero" aria-labelledby="cambill-title"><div className="cambill-hero__gridlines" aria-hidden="true" /><div className="site-container cambill-hero__layout">
        <div className="cambill-hero__copy"><span className="cambill-kicker"><Store aria-hidden="true" /> Billing &amp; inventory software</span><h1 id="cambill-title">CamBill <span>POS</span></h1><h2>Smart billing &amp; inventory software for camera &amp; electronics stores</h2><p>Run billing, inventory, GST, customers, purchases, staff access and reports from one professional system built for high-value retail.</p><div className="cambill-actions"><Link to="/contact?product=cambill-pos&intent=demo" className="cambill-button cambill-button--primary">Request a demo</Link><a href="#cambill-gallery" className="cambill-button cambill-button--secondary"><PlayCircle aria-hidden="true" /> Explore the product</a></div><div className="cambill-proof"><span><ShieldCheck aria-hidden="true" /><b>Secure</b> offline-first</span><span><FileCheck2 aria-hidden="true" /><b>GST</b> ready</span><span><CloudCog aria-hidden="true" /><b>Backup</b> protected</span></div></div>
        <div className="cambill-hero__visual"><div className="cambill-hero__halo" aria-hidden="true" /><ProductCarousel slides={operationsSlides} label="CamBill POS highlights" interval={4600} /><div className="cambill-floating-card cambill-floating-card--top"><span><ScanBarcode aria-hidden="true" /></span><div><b>Barcode ready</b><small>Fast counter workflows</small></div></div><div className="cambill-floating-card cambill-floating-card--bottom"><span><ShieldCheck aria-hidden="true" /></span><div><b>Offline ready</b><small>Your store keeps moving</small></div></div></div>
      </div></section>

      <section className="cambill-trust"><div className="site-container cambill-trust__grid"><div><strong>1000+</strong><span>Stores trust us</span></div><div><strong>50+</strong><span>Powerful features</span></div><div><strong>Easy setup</strong><span>Get started quickly</span></div><div><strong>GST ready</strong><span>Compliant billing</span></div><div><strong>Lifetime updates</strong><span>Always up to date</span></div></div></section>

      <nav className="cambill-feature-rail" aria-label="CamBill POS feature navigation"><div className="site-container cambill-feature-rail__grid">{featureRail.map(({ title, copy, icon: Icon, accent }, index) => <a key={title} href={`#cambill-feature-${index + 1}`} style={{ '--cambill-card-rgb': accent } as CSSProperties}><span><Icon aria-hidden="true" /></span><div><b>{title}</b><small>{copy}</small></div></a>)}</div></nav>

      <section id="cambill-feature-1" className="cambill-section cambill-overview" aria-labelledby="cambill-overview-title"><div className="site-container"><div className="cambill-heading cambill-heading--center"><span className="section-eyebrow">All-in-one business control</span><h2 id="cambill-overview-title">Everything your business needs in one platform</h2><p>From daily counter sales to management reporting, every important CamBill workspace stays connected.</p></div><div className="cambill-overview-grid"><ProductCarousel slides={operationsSlides} label="Business operations slideshow" /><div className="cambill-copy cambill-copy--card"><span className="section-eyebrow">One connected system</span><h2>Operate with clarity from counter to back office</h2><p>Give every role the information it needs without duplicating records or breaking the customer journey.</p><CheckList items={featureList} /></div></div></div></section>

      <section id="cambill-feature-2" className="cambill-section cambill-billing" aria-labelledby="cambill-billing-title"><div className="site-container"><FeatureCard eyebrow="Fast & accurate" title="Quick and reliable billing experience" copy="Create accurate invoices in seconds with product search, barcode scanning, serial selection, GST and flexible settlement options." image={`${asset}/pos-terminal.png`} imageAlt="CamBill POS billing terminal with products and current sale" frameTitle="POS billing terminal" checks={billingList}><div className="cambill-pill-row"><span><Barcode aria-hidden="true" /> Barcode</span><span><Printer aria-hidden="true" /> Thermal print</span><span><BadgeIndianRupee aria-hidden="true" /> GST invoice</span></div></FeatureCard></div></section>

      <section id="cambill-feature-3" className="cambill-section cambill-inventory" aria-labelledby="cambill-inventory-title"><div className="site-container"><FeatureCard reverse eyebrow="Complete inventory control" title="Manage products, stock & serials easily" copy="Know exactly what is available, what needs attention and where every high-value unit came from." image={`${asset}/inventory.png`} imageAlt="CamBill POS full inventory view with stock and serial information" frameTitle="Full inventory workspace" checks={inventoryList} /></div></section>

      <section className="cambill-section cambill-categories" aria-labelledby="cambill-categories-title"><div className="site-container"><div className="cambill-heading cambill-heading--center"><span className="section-eyebrow">Product categories</span><h2 id="cambill-categories-title">Manage all your store products</h2><p>Organize cameras, electronics and accessories with category-aware cataloguing and stock rules.</p></div><div className="cambill-category-grid">{categories.map(({ label, icon: Icon, accent }) => <article key={label} style={{ '--cambill-card-rgb': accent } as CSSProperties}><span><Icon aria-hidden="true" /></span><h3>{label}</h3></article>)}</div></div></section>

      <section id="cambill-feature-4" className="cambill-section cambill-commerce" aria-labelledby="cambill-commerce-title"><div className="site-container"><div className="cambill-heading"><div><span className="section-eyebrow">Connected operations</span><h2 id="cambill-commerce-title">Sales and purchase management</h2></div><p>Revenue, settlements, incoming stock and supplier activity move through one source of truth.</p></div><ProductCarousel slides={commerceSlides} label="Sales and product operations slideshow" /></div></section>

      <section id="cambill-feature-5" className="cambill-section cambill-customers" aria-labelledby="cambill-customers-title"><div className="site-container"><FeatureCard eyebrow="Better customer relationships" title="Customer history ready when your team needs it" copy="Keep contact details, GST profiles, lifetime spend and previous purchases connected to every billing interaction." image={`${asset}/customers.png`} imageAlt="CamBill POS customer directory" frameTitle="Customer accounts" checks={['Fast name, phone and GSTIN lookup', 'Retail and business customer profiles', 'Purchase history and lifetime value', 'Quick customer selection during a sale']} /></div></section>

      <section id="cambill-feature-6" className="cambill-section cambill-analytics" aria-labelledby="cambill-analytics-title"><div className="site-container"><FeatureCard reverse eyebrow="Reports & analytics" title="Make better business decisions" copy="Turn daily transactions into useful management information across sales, profit, products, inventory, customers, payments and GST." image={`${asset}/reports.png`} imageAlt="CamBill POS reports and business analytics" frameTitle="Business intelligence"><div className="cambill-metric-grid"><div><b>₹4.34L</b><span>Revenue view</span></div><div><b>10+</b><span>Report areas</span></div><div><b>Live</b><span>Performance trends</span></div></div></FeatureCard></div></section>

      <section className="cambill-section cambill-service" aria-labelledby="cambill-service-title"><div className="site-container"><div className="cambill-heading cambill-heading--center"><span className="section-eyebrow">Customer lifecycle</span><h2 id="cambill-service-title">From first sale to after-sales support</h2><p>Customer, invoice and return screens move in a focused right-to-left showcase.</p></div><ProductCarousel slides={lifecycleSlides} label="Customer lifecycle slideshow" /></div></section>

      <section className="cambill-section cambill-invoice" aria-labelledby="cambill-invoice-title"><div className="site-container"><FeatureCard eyebrow="GST & invoice ready" title="Professional invoices, every time" copy="Create branded, itemized GST invoices with customer information, serial details, payment status and professional output." image={`${asset}/sales.png`} imageAlt="CamBill POS sales history and invoice records" frameTitle="Invoice records"><div className="cambill-output-grid"><span><FileCheck2 aria-hidden="true" /> A4 PDF</span><span><Printer aria-hidden="true" /> Thermal</span><span><BadgeIndianRupee aria-hidden="true" /> GST</span><span><History aria-hidden="true" /> Reprint</span></div></FeatureCard></div></section>

      <section className="cambill-security" aria-labelledby="cambill-security-title"><div className="site-container"><div className="cambill-security__heading"><span>Built for dependable retail</span><h2 id="cambill-security-title">Secure, resilient and ready for daily operations</h2><p>Four essential operational views are presented as a single dynamic slideshow instead of static image tiles.</p></div><ProductCarousel slides={resilienceSlides} label="Security and resilience slideshow" dark /></div></section>

      <section className="cambill-section cambill-why" aria-labelledby="cambill-why-title"><div className="site-container"><div className="cambill-heading cambill-heading--center"><span className="section-eyebrow">Built around retail reality</span><h2 id="cambill-why-title">Why choose CamBill POS?</h2></div><div className="cambill-why__grid">{whyItems.map(({ title, copy, icon: Icon, accent }) => <article key={title} style={{ '--cambill-card-rgb': accent } as CSSProperties}><span><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

      <section className="cambill-workflow" aria-labelledby="cambill-workflow-title"><div className="site-container"><div className="cambill-heading cambill-heading--center"><span className="section-eyebrow">One connected workflow</span><h2 id="cambill-workflow-title">From product setup to business insight</h2></div><ol>{workflow.map(({ title, icon: Icon }, index) => <li key={title}><b>{String(index + 1).padStart(2, '0')}</b><span><Icon aria-hidden="true" /></span><h3>{title}</h3></li>)}</ol></div></section>

      <section id="cambill-gallery" className="cambill-section cambill-gallery" aria-labelledby="cambill-gallery-title"><div className="site-container"><div className="cambill-heading"><div><span className="section-eyebrow">Explore the real product</span><h2 id="cambill-gallery-title">See CamBill POS in action</h2></div><p>Choose any generated CamBill workspace to inspect the full application experience.</p></div><div className="cambill-gallery__shell"><div className="cambill-gallery__tabs" role="tablist" aria-label="CamBill POS application screens">{gallery.map((item, index) => { const Icon = item.icon; const active = item.id === activeTab; return <button key={item.id} id={`cambill-tab-${item.id}`} type="button" role="tab" aria-selected={active} aria-controls={`cambill-panel-${item.id}`} tabIndex={active ? 0 : -1} onClick={() => setActiveTab(item.id)} onKeyDown={event => navigateTabs(event, index)}><Icon aria-hidden="true" />{item.label}</button>; })}</div><div id={`cambill-panel-${selected.id}`} role="tabpanel" aria-labelledby={`cambill-tab-${selected.id}`} className="cambill-gallery__panel" tabIndex={0}><div className="cambill-gallery__caption"><div><span><selected.icon aria-hidden="true" /></span><div><h3>{selected.title}</h3><p>{selected.copy}</p></div></div><a href={selected.image} target="_blank" rel="noreferrer">View full image</a></div><img key={selected.id} src={selected.image} alt={`${selected.label} screen in CamBill POS`} /></div></div></div></section>

      <section className="cambill-final" aria-labelledby="cambill-final-title"><div className="site-container cambill-final__panel"><div className="cambill-final__copy"><span>Ready to modernize your business?</span><h2 id="cambill-final-title">Get started with CamBill POS today</h2><p>Bring billing, inventory, customers, purchases, security and reporting into one professional retail platform.</p><div><Link to="/contact?product=cambill-pos" className="cambill-button cambill-button--primary">Get started</Link><Link to="/contact?product=cambill-pos&intent=consultation" className="cambill-button cambill-button--ghost">Contact us</Link></div></div><div className="cambill-final__visual"><img src={`${asset}/dashboard.png`} alt="CamBill POS dashboard" loading="lazy" /></div></div></section>
    </main>
  );
}
