import {
  Aperture,
  Archive,
  Backpack,
  BarChart3,
  BatteryCharging,
  Boxes,
  Camera,
  CheckCircle2,
  CircleDollarSign,
  ClipboardList,
  Contact,
  DatabaseBackup,
  FileText,
  Gauge,
  LockKeyhole,
  MemoryStick,
  Package,
  PlayCircle,
  Printer,
  ReceiptText,
  ScanLine,
  Settings2,
  ShoppingCart,
  Triangle,
  Users,
  Wrench,
} from 'lucide-react';
import type { CSSProperties, ElementType } from 'react';
import { Link } from 'react-router-dom';
import './CamStore.css';

const asset = '/images/products/camstore';

type AccentItem = {
  title: string;
  copy: string;
  accent: string;
  icon: ElementType;
};

const capabilities: AccentItem[] = [
  { title: 'Easy Billing', copy: 'Fast and reliable POS billing', icon: ShoppingCart, accent: '255 110 94' },
  { title: 'Inventory Management', copy: 'Track cameras, lenses and accessories', icon: Boxes, accent: '30 184 139' },
  { title: 'Customer Management', copy: 'Maintain complete customer records', icon: Users, accent: '52 110 246' },
  { title: 'Purchase Management', copy: 'Manage suppliers and purchases', icon: ClipboardList, accent: '139 92 246' },
  { title: 'Service Management', copy: 'Track repairs and services', icon: Wrench, accent: '236 72 153' },
  { title: 'Detailed Reports', copy: 'Sales, stock and profit insights', icon: BarChart3, accent: '245 158 11' },
];

const inventoryFeatures = [
  'Product and stock management',
  'Camera, lens and accessory categories',
  'POS billing and purchase management',
  'Sales and customer records',
  'Barcode scanning support',
  'Service and repair management',
  'GST and tax invoice support',
  'Detailed reports and analytics',
  'Low-stock monitoring',
  'Secure user and role controls',
];

const billingFeatures = [
  'Quick product search',
  'Barcode scanner support',
  'Discount and GST handling',
  'Multiple payment methods',
  'Thermal and PDF invoice printing',
];

const categories = [
  { label: 'Cameras', icon: Camera, accent: '43 139 255' },
  { label: 'Lenses', icon: Aperture, accent: '37 99 235' },
  { label: 'Accessories', icon: Package, accent: '99 102 241' },
  { label: 'Tripods', icon: Triangle, accent: '139 92 246' },
  { label: 'Bags', icon: Backpack, accent: '168 85 247' },
  { label: 'Memory Cards', icon: MemoryStick, accent: '236 72 153' },
  { label: 'Batteries', icon: BatteryCharging, accent: '245 158 11' },
  { label: 'Other Equipment', icon: Boxes, accent: '20 184 166' },
];

const whyItems: AccentItem[] = [
  { title: 'Built for Camera Stores', copy: 'Designed around the real workflows of camera and photography businesses.', icon: Camera, accent: '244 63 94' },
  { title: 'Simple & Fast', copy: 'A clear interface that makes everyday billing and inventory easier.', icon: Gauge, accent: '124 58 237' },
  { title: 'Powerful Inventory Control', copy: 'Track cameras, lenses, accessories, stock levels and product information.', icon: Boxes, accent: '20 184 166' },
  { title: 'Ready to Grow', copy: 'Built to support growing stores and expanding product catalogues.', icon: BarChart3, accent: '249 115 22' },
];

const connected = [
  { label: 'Products', icon: Package },
  { label: 'Inventory', icon: Boxes },
  { label: 'Purchase', icon: ClipboardList },
  { label: 'Billing', icon: ShoppingCart },
  { label: 'Customers', icon: Users },
  { label: 'Service', icon: Wrench },
  { label: 'Reports', icon: BarChart3 },
];

const administration = [
  { title: 'User roles & access', copy: 'Give every admin and seller the right level of access.', image: `${asset}/app-users.png`, icon: LockKeyhole, accent: '124 58 237' },
  { title: 'Backup & recovery', copy: 'Keep offline-first business data protected and recoverable.', image: `${asset}/app-backup.png`, icon: DatabaseBackup, accent: '16 185 129' },
  { title: 'Audit & archive', copy: 'Review system activity and preserve historical records.', image: `${asset}/app-audit.png`, icon: Archive, accent: '249 115 22' },
  { title: 'Configuration center', copy: 'Control invoices, tax, security and store preferences.', image: `${asset}/app-settings.png`, icon: Settings2, accent: '43 139 255' },
];

const FeatureList = ({ items }: { items: string[] }) => (
  <ul className="camstore-check-list">
    {items.map((item) => <li key={item}><CheckCircle2 aria-hidden="true" />{item}</li>)}
  </ul>
);

export function CamStore() {
  return (
    <main className="camstore-page">
      <section className="camstore-hero" aria-labelledby="camstore-title">
        <div className="camstore-ambient" aria-hidden="true" />
        <div className="site-container camstore-hero__layout">
          <div className="camstore-hero__copy">
            <span className="camstore-kicker"><Camera aria-hidden="true" /> Camera store POS software</span>
            <h1 id="camstore-title">CamStore <span>POS</span></h1>
            <h2>Complete POS &amp; inventory solution for camera stores</h2>
            <p>CamStore POS is a powerful, easy-to-use software suite designed specifically for camera stores. Manage products, inventory, billing, customers, purchases, services and business reports—all in one unified platform.</p>
            <div className="camstore-hero__actions">
              <Link to="/contact?product=camstore-pos" className="button-primary">Explore CamStore POS</Link>
              <a href="#camstore-demo" className="button-outline"><PlayCircle aria-hidden="true" /> Watch demo</a>
            </div>
            <div className="camstore-stats" aria-label="CamStore POS product highlights">
              <div><strong>1000+</strong><span>Stores ready</span></div>
              <div><strong>50+</strong><span>Powerful features</span></div>
              <div><strong>Easy setup</strong><span>Quick installation</span></div>
              <div><strong>Lifetime updates</strong><span>Always up to date</span></div>
            </div>
          </div>

          <div className="camstore-hero__visual" aria-label="CamStore POS dashboard with camera store equipment">
            <div className="camstore-screen camstore-screen--hero">
              <span className="camstore-screen__bar"><i /><i /><i /><b>CamStore POS dashboard</b></span>
              <img src={`${asset}/app-dashboard.png`} alt="CamStore POS dashboard showing sales, products and store insights" />
            </div>
            <img className="camstore-hero__equipment" src="/images/products/camstore-pos-card.png" alt="Camera, retail printer, scanner and CamStore POS devices" />
          </div>
        </div>
      </section>

      <section className="camstore-feature-rail" aria-label="CamStore POS core capabilities">
        <div className="site-container camstore-feature-rail__grid">
          {capabilities.map(({ title, copy, icon: Icon, accent }) => (
            <article key={title} className="camstore-mini-card" style={{ '--camstore-card-rgb': accent } as CSSProperties}>
              <span><Icon aria-hidden="true" /></span><div><h3>{title}</h3><p>{copy}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section id="camstore-demo" className="camstore-showcase camstore-showcase--features" aria-labelledby="camstore-features-title">
        <div className="site-container camstore-split camstore-split--visual-first">
          <div className="camstore-screen camstore-screen--large">
            <span className="camstore-screen__bar"><i /><i /><i /><b>Live inventory workspace</b></span>
            <img src={`${asset}/app-inventory.png`} alt="CamStore POS inventory management screen" loading="lazy" />
          </div>
          <div className="camstore-copy-panel">
            <span className="section-eyebrow">Key features</span>
            <h2 id="camstore-features-title">Everything your camera store needs</h2>
            <p>CamStore POS brings billing, inventory, purchasing, customers, services and reporting together in one powerful platform.</p>
            <FeatureList items={inventoryFeatures} />
          </div>
        </div>
      </section>

      <section className="camstore-showcase camstore-showcase--billing" aria-labelledby="camstore-billing-title">
        <div className="site-container camstore-split camstore-split--visual-first">
          <div className="camstore-screen camstore-screen--large camstore-screen--pos">
            <span className="camstore-screen__bar"><i /><i /><i /><b>Seller POS terminal</b></span>
            <img src={`${asset}/app-pos-billing.png`} alt="CamStore seller POS billing terminal" loading="lazy" />
          </div>
          <div className="camstore-copy-panel camstore-copy-panel--billing">
            <span className="camstore-icon-chip"><ReceiptText aria-hidden="true" /></span>
            <h2 id="camstore-billing-title">Fast, simple &amp; reliable billing</h2>
            <p>Bring product search, barcodes, customer selection, discounts, GST and multiple payment methods into one clean counter workflow.</p>
            <FeatureList items={billingFeatures} />
            <div className="camstore-hardware-row" aria-label="Billing hardware support">
              <span><ScanLine aria-hidden="true" /> Barcode ready</span>
              <span><Printer aria-hidden="true" /> Thermal printing</span>
            </div>
          </div>
        </div>
      </section>

      <section className="camstore-categories" aria-labelledby="camstore-categories-title">
        <div className="site-container">
          <div className="camstore-section-heading">
            <div><span className="section-eyebrow">Complete product control</span><h2 id="camstore-categories-title">Manage every product with confidence</h2></div>
            <p>Organize and track your full camera store inventory—cameras, lenses, accessories and more.</p>
          </div>
          <div className="camstore-category-grid">
            {categories.map(({ label, icon: Icon, accent }) => (
              <article key={label} className="camstore-category" style={{ '--camstore-card-rgb': accent } as CSSProperties}>
                <span><Icon aria-hidden="true" /></span><h3>{label}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="camstore-invoices" aria-labelledby="camstore-invoices-title">
        <div className="site-container camstore-invoice-grid">
          <div className="camstore-invoice-stack">
            <div className="camstore-screen camstore-screen--invoice-ui">
              <img src={`${asset}/app-sales-admin.png`} alt="CamStore sales and invoice management screen" loading="lazy" />
            </div>
            <img className="camstore-a4-invoice" src={`${asset}/camstore-a4-invoice.png`} alt="Professional A4 tax invoice created with CamStore POS" loading="lazy" />
          </div>
          <div className="camstore-invoice-story">
            <div className="camstore-invoice-photo">
              <img src="/images/products/camstore-pos-card.png" alt="Camera store equipment connected to CamStore POS" loading="lazy" />
            </div>
            <span className="section-eyebrow">Professional output</span>
            <h2 id="camstore-invoices-title">Professional invoices, every time</h2>
            <p>Generate clean, branded invoices with your store details, customer information, itemized products, GST, payment status and barcode-ready records.</p>
            <div className="camstore-document-tags"><span><FileText aria-hidden="true" /> A4 PDF</span><span><Printer aria-hidden="true" /> Thermal</span><span><CircleDollarSign aria-hidden="true" /> GST ready</span></div>
          </div>
        </div>
      </section>

      <section className="camstore-operations" aria-labelledby="camstore-operations-title">
        <div className="site-container">
          <div className="camstore-section-heading camstore-section-heading--center">
            <div><span className="section-eyebrow">Daily operations</span><h2 id="camstore-operations-title">Service, customers and insights stay connected</h2></div>
          </div>
          <div className="camstore-operation-grid">
            <article className="camstore-operation-card" style={{ '--camstore-card-rgb': '43 139 255' } as CSSProperties}>
              <div className="camstore-operation-card__copy"><span><Contact aria-hidden="true" /></span><h3>Customer management</h3><p>Keep customer profiles and purchase history ready for faster, more personal service.</p></div>
              <img src={`${asset}/app-customers.png`} alt="CamStore POS customer management screen" loading="lazy" />
            </article>
            <article className="camstore-operation-card" style={{ '--camstore-card-rgb': '16 185 129' } as CSSProperties}>
              <div className="camstore-operation-card__copy"><span><BarChart3 aria-hidden="true" /></span><h3>Reports &amp; analytics</h3><p>See revenue, orders, units sold and store performance in clear business reports.</p></div>
              <img src={`${asset}/app-reports.png`} alt="CamStore POS sales reports and analytics screen" loading="lazy" />
            </article>
            <article className="camstore-operation-card camstore-operation-card--wide" style={{ '--camstore-card-rgb': '139 92 246' } as CSSProperties}>
              <div className="camstore-operation-card__copy"><span><ReceiptText aria-hidden="true" /></span><h3>Sales history &amp; invoice records</h3><p>Find past transactions, review customer orders and regenerate invoices whenever you need them.</p></div>
              <img src={`${asset}/app-sales-history.png`} alt="CamStore POS sales history and invoice records" loading="lazy" />
            </article>
          </div>
        </div>
      </section>

      <section className="camstore-admin" aria-labelledby="camstore-admin-title">
        <div className="site-container">
          <div className="camstore-section-heading">
            <div><span className="section-eyebrow">Control &amp; protection</span><h2 id="camstore-admin-title">A complete back office for your business</h2></div>
            <p>CamStore POS includes the administration, data protection and governance tools needed to run with confidence.</p>
          </div>
          <div className="camstore-admin-grid">
            {administration.map(({ title, copy, image, icon: Icon, accent }) => (
              <article key={title} className="camstore-admin-card" style={{ '--camstore-card-rgb': accent } as CSSProperties}>
                <div><span><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{copy}</p></div>
                <img src={image} alt={`CamStore POS ${title} screen`} loading="lazy" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="camstore-why" aria-labelledby="camstore-why-title">
        <div className="site-container">
          <div className="camstore-section-heading camstore-section-heading--center"><div><span className="section-eyebrow">Designed for retail reality</span><h2 id="camstore-why-title">Why CamStore POS?</h2></div></div>
          <div className="camstore-why-grid">
            {whyItems.map(({ title, copy, icon: Icon, accent }) => (
              <article key={title} className="camstore-why-card" style={{ '--camstore-card-rgb': accent } as CSSProperties}>
                <span><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="camstore-connected">
            <div><h3>Everything connected in one POS</h3><p>From products to reports, CamStore POS connects every camera-store operation.</p></div>
            <ol>
              {connected.map(({ label, icon: Icon }) => <li key={label}><span><Icon aria-hidden="true" /></span><b>{label}</b></li>)}
            </ol>
          </div>
        </div>
      </section>

      <section className="camstore-cta" aria-labelledby="camstore-cta-title">
        <div className="site-container">
          <div className="camstore-cta__panel">
            <div className="camstore-cta__copy">
              <span className="section-eyebrow">Start your camera store upgrade</span>
              <h2 id="camstore-cta-title">Ready to upgrade your camera store?</h2>
              <p>Manage inventory, billing, customers, purchases, service and reports with CamStore POS.</p>
              <div><Link to="/contact?product=camstore-pos" className="button-primary">Get started</Link><Link to="/contact?product=camstore-pos&intent=demo" className="button-outline">Contact us</Link></div>
            </div>
            <div className="camstore-cta__visual">
              <img src={`${asset}/app-login.png`} alt="CamStore POS login and camera store interface" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
