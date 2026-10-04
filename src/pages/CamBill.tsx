import { useState, type CSSProperties, type KeyboardEvent } from 'react';
import {
  Activity,
  Aperture,
  BadgeIndianRupee,
  BarChart3,
  Barcode,
  BatteryCharging,
  Boxes,
  Briefcase,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  CloudCog,
  DatabaseBackup,
  FileCheck2,
  FileText,
  Gauge,
  Headphones,
  History,
  Layers3,
  LayoutDashboard,
  LockKeyhole,
  MemoryStick,
  PackageCheck,
  PlayCircle,
  Printer,
  ReceiptIndianRupee,
  ScanBarcode,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Store,
  Triangle,
  Truck,
  Undo2,
  Users,
  Wrench,
} from 'lucide-react';
import type { ElementType } from 'react';
import { Link } from 'react-router-dom';
import './CamBill.css';

const asset = '/images/products/cambill';

type AccentItem = {
  title: string;
  copy: string;
  icon: ElementType;
  accent: string;
};

const featureRail: AccentItem[] = [
  { title: 'Fast Billing', copy: 'Barcode-ready counter sales', icon: ReceiptIndianRupee, accent: '38 111 255' },
  { title: 'Inventory Control', copy: 'Stock, serials and pricing', icon: Boxes, accent: '14 165 233' },
  { title: 'Customer Management', copy: 'Profiles and purchase history', icon: Users, accent: '124 58 237' },
  { title: 'Purchase Management', copy: 'Suppliers and stock intake', icon: Truck, accent: '16 185 129' },
  { title: 'Service & Returns', copy: 'Track after-sales workflows', icon: Wrench, accent: '244 63 94' },
  { title: 'Reports & Insights', copy: 'Clear business intelligence', icon: BarChart3, accent: '245 158 11' },
];

const featureList = [
  'POS billing and GST invoices',
  'Product, stock and serial tracking',
  'Purchase and supplier management',
  'Customer accounts and history',
  'Returns and refund workflows',
  'Role-based staff access',
  'Offline-first secure database',
  'Backup, audit and diagnostics',
];

const billingList = [
  'Fast search, barcode scanning and keyboard shortcuts',
  'Cash, UPI, card and split payment options',
  'Discount, tax and customer selection in one flow',
  'A4 invoice, PDF and thermal receipt output',
];

const inventoryList = [
  'Central product catalogue and category control',
  'Serial-number tracking for high-value equipment',
  'Live in-stock, low-stock and out-of-stock states',
  'Cost, selling price and supplier visibility',
];

const categories = [
  { label: 'Cameras', icon: Camera, accent: '38 111 255' },
  { label: 'Lenses', icon: Aperture, accent: '14 165 233' },
  { label: 'Accessories', icon: PackageCheck, accent: '124 58 237' },
  { label: 'Tripods', icon: Triangle, accent: '16 185 129' },
  { label: 'Memory Cards', icon: MemoryStick, accent: '245 158 11' },
  { label: 'Bags', icon: Briefcase, accent: '236 72 153' },
  { label: 'Batteries', icon: BatteryCharging, accent: '249 115 22' },
  { label: 'Other Items', icon: Layers3, accent: '99 102 241' },
];

const whyItems: AccentItem[] = [
  { title: 'Industry Focused', copy: 'Purpose-built for camera and electronics stores, not adapted from a generic POS.', icon: Camera, accent: '38 111 255' },
  { title: 'Easy to Use', copy: 'Fast counter workflows, clear navigation and useful keyboard shortcuts.', icon: Gauge, accent: '16 185 129' },
  { title: 'Powerful & Reliable', copy: 'Offline-first operations, secure records and dependable local performance.', icon: ShieldCheck, accent: '124 58 237' },
  { title: 'Dedicated Support', copy: 'Practical onboarding and responsive product support from SMVM Softwares.', icon: Headphones, accent: '245 158 11' },
];

const workflow = [
  { title: 'Add Products', icon: PackageCheck },
  { title: 'Manage Inventory', icon: Boxes },
  { title: 'Create Sales', icon: ShoppingCart },
  { title: 'Print Invoices', icon: Printer },
  { title: 'Track Customers', icon: Users },
  { title: 'Analyze Reports', icon: BarChart3 },
];

const gallery = [
  { id: 'dashboard', label: 'Dashboard', image: `${asset}/dashboard.png`, copy: 'A command center for sales, inventory, profit, returns and daily operations.', icon: LayoutDashboard },
  { id: 'billing', label: 'Billing', image: `${asset}/pos-terminal.png`, copy: 'A high-speed billing terminal with search, serial selection, GST and multiple tenders.', icon: ReceiptIndianRupee },
  { id: 'inventory', label: 'Inventory', image: `${asset}/inventory.png`, copy: 'Full stock visibility across categories, serials, costs, suppliers and availability.', icon: Boxes },
  { id: 'products', label: 'Products', image: `${asset}/products.png`, copy: 'A rich product catalogue for serialized equipment and bulk accessories.', icon: PackageCheck },
  { id: 'sales', label: 'Sales', image: `${asset}/sales.png`, copy: 'Searchable invoice history with settlement, tender and profit information.', icon: BadgeIndianRupee },
  { id: 'customers', label: 'Customers', image: `${asset}/customers.png`, copy: 'Customer accounts, GST profiles and lifetime purchase history in one place.', icon: Users },
  { id: 'reports', label: 'Reports', image: `${asset}/reports.png`, copy: 'Sales, profit, inventory and customer intelligence with visual trends.', icon: BarChart3 },
  { id: 'settings', label: 'Settings', image: `${asset}/settings.png`, copy: 'Deep store, tax, billing, security, hardware and system configuration.', icon: Settings },
];

const CheckList = ({ items }: { items: string[] }) => (
  <ul className="cambill-checks">
    {items.map(item => <li key={item}><CheckCircle2 aria-hidden="true" />{item}</li>)}
  </ul>
);

const AppFrame = ({ src, alt, title, className = '' }: { src: string; alt: string; title: string; className?: string }) => (
  <figure className={`cambill-app-frame ${className}`}>
    <figcaption><i /><i /><i /><b>{title}</b></figcaption>
    <img src={src} alt={alt} loading="lazy" />
  </figure>
);

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
    event.preventDefault();
    setActiveTab(gallery[next].id);
    document.getElementById(`cambill-tab-${gallery[next].id}`)?.focus();
  };

  return (
    <main className="cambill-page">
      <section className="cambill-hero" aria-labelledby="cambill-title">
        <div className="cambill-hero__gridlines" aria-hidden="true" />
        <div className="site-container cambill-hero__layout">
          <div className="cambill-hero__copy">
            <span className="cambill-kicker"><Store aria-hidden="true" /> Billing &amp; inventory software</span>
            <h1 id="cambill-title">CamBill <span>POS</span></h1>
            <h2>Smart billing &amp; inventory software for camera &amp; electronics stores</h2>
            <p>Run billing, inventory, GST, customers, purchases, staff access and reports from one professional system built for high-value retail.</p>
            <div className="cambill-actions">
              <Link to="/contact?product=cambill-pos&intent=demo" className="cambill-button cambill-button--primary">Request a demo</Link>
              <a href="#cambill-gallery" className="cambill-button cambill-button--secondary"><PlayCircle aria-hidden="true" /> Explore the product</a>
            </div>
            <div className="cambill-proof" aria-label="CamBill POS trust signals">
              <span><ShieldCheck aria-hidden="true" /><b>Secure</b> offline-first</span>
              <span><FileCheck2 aria-hidden="true" /><b>GST</b> ready</span>
              <span><CloudCog aria-hidden="true" /><b>Backup</b> protected</span>
            </div>
          </div>

          <div className="cambill-hero__visual" aria-label="CamBill POS dashboard preview">
            <div className="cambill-hero__halo" aria-hidden="true" />
            <AppFrame src={`${asset}/dashboard.png`} alt="CamBill POS dashboard with sales, inventory, customer and profit information" title="CamBill POS — business overview" className="cambill-app-frame--hero" />
            <div className="cambill-floating-card cambill-floating-card--top"><span><ScanBarcode aria-hidden="true" /></span><div><b>Barcode ready</b><small>Fast counter workflows</small></div></div>
            <div className="cambill-floating-card cambill-floating-card--bottom"><span><ShieldCheck aria-hidden="true" /></span><div><b>Offline ready</b><small>Your store keeps moving</small></div></div>
          </div>
        </div>
      </section>

      <section className="cambill-trust" aria-label="CamBill POS product highlights">
        <div className="site-container cambill-trust__grid">
          <div><strong>1000+</strong><span>Stores trust us</span></div>
          <div><strong>50+</strong><span>Powerful features</span></div>
          <div><strong>Easy setup</strong><span>Get started quickly</span></div>
          <div><strong>GST ready</strong><span>Compliant billing</span></div>
          <div><strong>Lifetime updates</strong><span>Always up to date</span></div>
        </div>
      </section>

      <nav className="cambill-feature-rail" aria-label="CamBill POS feature navigation">
        <div className="site-container cambill-feature-rail__grid">
          {featureRail.map(({ title, copy, icon: Icon, accent }, index) => (
            <a key={title} href={`#cambill-feature-${index + 1}`} style={{ '--cambill-card-rgb': accent } as CSSProperties}>
              <span><Icon aria-hidden="true" /></span><div><b>{title}</b><small>{copy}</small></div>
            </a>
          ))}
        </div>
      </nav>

      <section id="cambill-feature-1" className="cambill-section cambill-overview" aria-labelledby="cambill-overview-title">
        <div className="site-container cambill-split cambill-split--copy-first">
          <div className="cambill-copy">
            <span className="section-eyebrow">All-in-one business control</span>
            <h2 id="cambill-overview-title">Everything your business needs in one platform</h2>
            <p>From daily counter sales to management reporting, CamBill POS connects every important operation without adding complexity for your team.</p>
            <CheckList items={featureList} />
          </div>
          <AppFrame src={`${asset}/dashboard.png`} alt="CamBill POS business dashboard" title="Live business dashboard" className="cambill-app-frame--lifted" />
        </div>
      </section>

      <section id="cambill-feature-2" className="cambill-section cambill-billing" aria-labelledby="cambill-billing-title">
        <div className="site-container cambill-split">
          <AppFrame src={`${asset}/pos-terminal.png`} alt="CamBill POS billing terminal with products and current sale" title="POS billing terminal" />
          <div className="cambill-copy cambill-copy--card">
            <span className="section-eyebrow">Fast &amp; accurate</span>
            <h2 id="cambill-billing-title">Quick and reliable billing experience</h2>
            <p>Create accurate invoices in seconds with product search, barcode scanning, serial selection, GST and flexible settlement options.</p>
            <CheckList items={billingList} />
            <div className="cambill-pill-row"><span><Barcode aria-hidden="true" /> Barcode</span><span><Printer aria-hidden="true" /> Thermal print</span><span><BadgeIndianRupee aria-hidden="true" /> GST invoice</span></div>
          </div>
        </div>
      </section>

      <section id="cambill-feature-3" className="cambill-section cambill-inventory" aria-labelledby="cambill-inventory-title">
        <div className="site-container cambill-split cambill-split--copy-first">
          <div className="cambill-copy">
            <span className="section-eyebrow">Complete inventory control</span>
            <h2 id="cambill-inventory-title">Manage products, stock &amp; serials easily</h2>
            <p>Know exactly what is available, what needs attention and where every high-value unit came from.</p>
            <CheckList items={inventoryList} />
          </div>
          <AppFrame src={`${asset}/inventory.png`} alt="CamBill POS full inventory view with stock and serial information" title="Full inventory workspace" />
        </div>
      </section>

      <section className="cambill-section cambill-categories" aria-labelledby="cambill-categories-title">
        <div className="site-container">
          <div className="cambill-heading cambill-heading--center"><span className="section-eyebrow">Product categories</span><h2 id="cambill-categories-title">Manage all your store products</h2><p>Organize cameras, electronics and accessories with category-aware cataloguing and stock rules.</p></div>
          <div className="cambill-category-grid">
            {categories.map(({ label, icon: Icon, accent }) => (
              <article key={label} style={{ '--cambill-card-rgb': accent } as CSSProperties}><span><Icon aria-hidden="true" /></span><h3>{label}</h3></article>
            ))}
          </div>
        </div>
      </section>

      <section id="cambill-feature-4" className="cambill-section cambill-commerce" aria-labelledby="cambill-commerce-title">
        <div className="site-container">
          <div className="cambill-heading"><div><span className="section-eyebrow">Connected operations</span><h2 id="cambill-commerce-title">Sales and purchase management</h2></div><p>Keep revenue, settlements, incoming stock and supplier activity connected to the same source of truth.</p></div>
          <div className="cambill-commerce-grid">
            <article className="cambill-commerce-card cambill-commerce-card--sales">
              <div><span><ReceiptIndianRupee aria-hidden="true" /></span><h3>Sales management</h3><p>Search invoices, review payments, monitor margins and handle returns from one clear workstation.</p></div>
              <img src={`${asset}/sales.png`} alt="CamBill POS sales and invoice history" loading="lazy" />
            </article>
            <article className="cambill-commerce-card cambill-commerce-card--purchase">
              <div><span><Truck aria-hidden="true" /></span><h3>Purchase management</h3><p>Control stock intake, supplier references, costs and product movement with consistent records.</p></div>
              <img src={`${asset}/seller-inventory.png`} alt="CamBill POS inventory catalogue used for purchase and stock operations" loading="lazy" />
            </article>
          </div>
        </div>
      </section>

      <section id="cambill-feature-5" className="cambill-section cambill-customers" aria-labelledby="cambill-customers-title">
        <div className="site-container cambill-split">
          <div className="cambill-customer-stack">
            <AppFrame src={`${asset}/customers.png`} alt="CamBill POS customer directory" title="Customer accounts" />
            <img src={`${asset}/customer-lookup.png`} alt="CamBill POS fast customer lookup for billing" loading="lazy" />
          </div>
          <div className="cambill-copy cambill-copy--card">
            <span className="section-eyebrow">Better customer relationships</span>
            <h2 id="cambill-customers-title">Customer history ready when your team needs it</h2>
            <p>Keep contact details, GST profiles, lifetime spend and previous purchases connected to every billing interaction.</p>
            <CheckList items={['Fast name, phone and GSTIN lookup', 'Retail and business customer profiles', 'Purchase history and lifetime value', 'Quick customer selection during a sale']} />
          </div>
        </div>
      </section>

      <section id="cambill-feature-6" className="cambill-section cambill-analytics" aria-labelledby="cambill-analytics-title">
        <div className="site-container cambill-split cambill-split--copy-first">
          <div className="cambill-copy">
            <span className="section-eyebrow">Reports &amp; analytics</span>
            <h2 id="cambill-analytics-title">Make better business decisions</h2>
            <p>Turn daily transactions into useful management information across sales, profit, products, inventory, customers, payments and GST.</p>
            <div className="cambill-metric-grid"><div><b>₹4.34L</b><span>Revenue view</span></div><div><b>10+</b><span>Report areas</span></div><div><b>Live</b><span>Performance trends</span></div></div>
          </div>
          <AppFrame src={`${asset}/reports.png`} alt="CamBill POS reports and business analytics" title="Business intelligence" />
        </div>
      </section>

      <section className="cambill-section cambill-service" aria-labelledby="cambill-service-title">
        <div className="site-container">
          <div className="cambill-heading cambill-heading--center"><span className="section-eyebrow">Service &amp; returns</span><h2 id="cambill-service-title">Support the full customer lifecycle</h2><p>Handle after-sales interactions with the same clarity as billing and inventory.</p></div>
          <div className="cambill-service-grid">
            <article><div><span><Wrench aria-hidden="true" /></span><h3>Service management</h3><p>Keep customer context, equipment details and service follow-up easy to find.</p></div><img src={`${asset}/customer-lookup.png`} alt="Customer lookup used for service workflows" loading="lazy" /></article>
            <article><div><span><Undo2 aria-hidden="true" /></span><h3>Returns &amp; refunds</h3><p>Record item condition, reason, refund method and inventory reversal in a controlled flow.</p></div><img src={`${asset}/returns.png`} alt="CamBill POS returns and refund management" loading="lazy" /></article>
          </div>
        </div>
      </section>

      <section className="cambill-section cambill-invoice" aria-labelledby="cambill-invoice-title">
        <div className="site-container cambill-invoice__grid">
          <div className="cambill-invoice__visual">
            <AppFrame src={`${asset}/seller-sales.png`} alt="CamBill POS invoice and sales history" title="Invoice records" />
            <article className="cambill-paper" aria-label="Example CamBill POS GST invoice">
              <header><span><ReceiptIndianRupee aria-hidden="true" /></span><div><b>CamBill POS</b><small>Tax Invoice</small></div></header>
              <div className="cambill-paper__meta"><span>Invoice #CB-2026-00124</span><span>GSTIN: 22ABCDE1234F1Z5</span></div>
              <table><tbody><tr><td>Camera equipment</td><td>₹2,09,990</td></tr><tr><td>GST (18%)</td><td>₹32,032</td></tr></tbody></table>
              <footer><b>Grand Total</b><strong>₹2,09,990</strong></footer>
            </article>
          </div>
          <div className="cambill-copy cambill-copy--card">
            <span className="section-eyebrow">GST &amp; invoice ready</span>
            <h2 id="cambill-invoice-title">Professional invoices, every time</h2>
            <p>Create branded, itemized GST invoices with customer information, serial details, payment status and professional output.</p>
            <div className="cambill-output-grid"><span><FileText aria-hidden="true" /> A4 PDF</span><span><Printer aria-hidden="true" /> Thermal</span><span><BadgeIndianRupee aria-hidden="true" /> GST</span><span><History aria-hidden="true" /> Reprint</span></div>
          </div>
        </div>
      </section>

      <section className="cambill-security" aria-labelledby="cambill-security-title">
        <div className="site-container">
          <div className="cambill-security__heading"><span>Built for dependable retail</span><h2 id="cambill-security-title">Secure, resilient and ready for daily operations</h2><p>CamBill POS protects critical retail records while keeping stores productive—even when connectivity is unreliable.</p></div>
          <div className="cambill-security__grid">
            {[
              { title: 'Role-based access', copy: 'Control staff permissions and active sessions.', icon: LockKeyhole, image: 'users.png' },
              { title: 'Backup & sync', copy: 'Encrypted local, USB and cloud recovery.', icon: DatabaseBackup, image: 'backup.png' },
              { title: 'Immutable audit', copy: 'Review sensitive actions and system events.', icon: ClipboardCheck, image: 'audit.png' },
              { title: 'System health', copy: 'Monitor database, hardware and performance.', icon: Activity, image: 'health.png' },
            ].map(({ title, copy, icon: Icon, image }) => (
              <article key={title}><div><span><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{copy}</p></div><img src={`${asset}/${image}`} alt={`CamBill POS ${title} screen`} loading="lazy" /></article>
            ))}
          </div>
        </div>
      </section>

      <section className="cambill-section cambill-why" aria-labelledby="cambill-why-title">
        <div className="site-container">
          <div className="cambill-heading cambill-heading--center"><span className="section-eyebrow">Built around retail reality</span><h2 id="cambill-why-title">Why choose CamBill POS?</h2></div>
          <div className="cambill-why__grid">
            {whyItems.map(({ title, copy, icon: Icon, accent }) => <article key={title} style={{ '--cambill-card-rgb': accent } as CSSProperties}><span><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="cambill-workflow" aria-labelledby="cambill-workflow-title">
        <div className="site-container">
          <div className="cambill-heading cambill-heading--center"><span className="section-eyebrow">One connected workflow</span><h2 id="cambill-workflow-title">From product setup to business insight</h2></div>
          <ol>
            {workflow.map(({ title, icon: Icon }, index) => <li key={title}><b>{String(index + 1).padStart(2, '0')}</b><span><Icon aria-hidden="true" /></span><h3>{title}</h3></li>)}
          </ol>
        </div>
      </section>

      <section id="cambill-gallery" className="cambill-section cambill-gallery" aria-labelledby="cambill-gallery-title">
        <div className="site-container">
          <div className="cambill-heading"><div><span className="section-eyebrow">Explore the real product</span><h2 id="cambill-gallery-title">See CamBill POS in action</h2></div><p>Choose a workspace to explore the actual application interface used by administrators and sellers.</p></div>
          <div className="cambill-gallery__shell">
            <div className="cambill-gallery__tabs" role="tablist" aria-label="CamBill POS application screens">
              {gallery.map((item, index) => {
                const Icon = item.icon;
                const active = item.id === activeTab;
                return <button key={item.id} id={`cambill-tab-${item.id}`} type="button" role="tab" aria-selected={active} aria-controls={`cambill-panel-${item.id}`} tabIndex={active ? 0 : -1} onClick={() => setActiveTab(item.id)} onKeyDown={event => navigateTabs(event, index)}><Icon aria-hidden="true" />{item.label}</button>;
              })}
            </div>
            <div id={`cambill-panel-${selected.id}`} role="tabpanel" aria-labelledby={`cambill-tab-${selected.id}`} className="cambill-gallery__panel" tabIndex={0}>
              <div className="cambill-gallery__caption"><div><span><selected.icon aria-hidden="true" /></span><div><h3>{selected.label}</h3><p>{selected.copy}</p></div></div><a href={selected.image} target="_blank" rel="noreferrer">View full image</a></div>
              <img key={selected.id} src={selected.image} alt={`${selected.label} screen in CamBill POS`} />
            </div>
          </div>
        </div>
      </section>

      <section className="cambill-final" aria-labelledby="cambill-final-title">
        <div className="site-container cambill-final__panel">
          <div className="cambill-final__copy"><span>Ready to modernize your business?</span><h2 id="cambill-final-title">Get started with CamBill POS today</h2><p>Bring billing, inventory, customers, purchases, security and reporting into one professional retail platform.</p><div><Link to="/contact?product=cambill-pos" className="cambill-button cambill-button--primary">Get started</Link><Link to="/contact?product=cambill-pos&intent=consultation" className="cambill-button cambill-button--ghost">Contact us</Link></div></div>
          <div className="cambill-final__visual"><img src={`${asset}/login.png`} alt="CamBill POS login screen" loading="lazy" /></div>
        </div>
      </section>
    </main>
  );
}
