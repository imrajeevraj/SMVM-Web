import type { ReactNode } from 'react';
import {
  Banknote,
  Barcode,
  Bell,
  Camera,
  CreditCard,
  Download,
  Plus,
  Printer,
  QrCode,
  Search,
  Smartphone,
} from 'lucide-react';
import {
  appNav,
  categorySplit,
  computeSale,
  customerRows,
  inr,
  inventoryCategories,
  inventoryRows,
  monthlyTrend,
  productFormFields,
  reportKpis,
  reportTypes,
  sampleSale,
  serviceBadges,
  serviceRows,
  supplierRows,
  type StockStatus,
} from '@/data/camstore';
import { ScaledScreen } from './shared';

/** Design size shared by every mock screen so they scale identically wherever they are used. */
export const SCREEN_W = 880;
export const SCREEN_H = 520;
export const INVOICE_W = 600;
export const INVOICE_H = 700;

const stockTone: Record<StockStatus, string> = { 'In Stock': 'green', 'Low Stock': 'amber', 'Out of Stock': 'red' };
const serviceTone = { Pending: 'amber', 'In Progress': 'blue', Completed: 'green' } as const;

function Badge({ tone, children }: { tone: string; children: ReactNode }) {
  return <span className={`cs-badge cs-badge--${tone}`}>{children}</span>;
}

/** Fixed CamStore POS application chrome: same sidebar, header, and colours on every screen. */
function AppFrame({
  active,
  title,
  action,
  children,
}: {
  active: string;
  title: string;
  action?: string;
  children: ReactNode;
}) {
  return (
    <div className="cs-app">
      <aside className="cs-app__side">
        <div className="cs-app__brand">
          <span><Camera /></span>
          <div><b>CamStore POS</b><small>For Camera Stores</small></div>
        </div>
        <nav>
          {appNav.map(({ id, label, icon: Icon }) => (
            <span key={id} className={id === active ? 'is-active' : undefined}><Icon />{label}</span>
          ))}
        </nav>
      </aside>
      <div className="cs-app__main">
        <header className="cs-app__top">
          <h4>{title}</h4>
          <div className="cs-app__search"><Search /> Search by name, SKU or barcode…</div>
          {action ? <span className="cs-app__action"><Plus />{action}</span> : null}
          <Bell className="cs-app__bell" />
          <span className="cs-app__avatar">AD</span>
        </header>
        <div className="cs-app__content">{children}</div>
      </div>
    </div>
  );
}

function Bars({ keys = ['sales'] as Array<'sales' | 'purchase'> }) {
  return (
    <div className="cs-bars">
      {monthlyTrend.map((m) => (
        <div key={m.month} className="cs-bars__col">
          <div className="cs-bars__pair">
            {keys.map((k) => <i key={k} className={`cs-bars__bar cs-bars__bar--${k}`} style={{ height: `${m[k]}%` }} />)}
          </div>
          <small>{m.month}</small>
        </div>
      ))}
    </div>
  );
}

function Kpi({ label, value, note, tone = 'blue' }: { label: string; value: string; note: string; tone?: string }) {
  return (
    <div className={`cs-kpi cs-kpi--${tone}`}>
      <small>{label}</small>
      <b>{value}</b>
      <em>{note}</em>
    </div>
  );
}

function DashboardScreen() {
  const top = [
    ['Canon EOS R50 Kit', 45],
    ['Sony Alpha ZV-E10', 38],
    ['Nikon Z 50mm f/1.8', 32],
    ['Sigma 56mm f/1.4', 28],
  ] as const;
  return (
    <AppFrame active="dashboard" title="Dashboard" action="New Sale">
      <div className="cs-grid cs-grid--4">
        <Kpi label="Today's Sales" value="₹54,230" note="▲ 12% vs yesterday" />
        <Kpi label="Total Orders" value="125" note="▲ 8% this week" tone="green" />
        <Kpi label="Total Products" value="342" note="Cameras, lenses & more" tone="amber" />
        <Kpi label="Low Stock" value="14" note="Reorder suggested" tone="red" />
      </div>
      <div className="cs-split cs-split--2-1">
        <section className="cs-card">
          <h5>Sales Overview <small>Last 6 months</small></h5>
          <Bars />
        </section>
        <section className="cs-card">
          <h5>Top Selling Products</h5>
          <ul className="cs-rank">
            {top.map(([name, sold]) => (
              <li key={name}><span>{name}</span><div><i style={{ width: `${(sold / 45) * 100}%` }} /></div><b>{sold}</b></li>
            ))}
          </ul>
        </section>
      </div>
      <section className="cs-card">
        <h5>Recent Sales <small>View all</small></h5>
        <table className="cs-table">
          <thead><tr><th>Invoice</th><th>Customer</th><th>Items</th><th>Payment</th><th className="r">Amount</th></tr></thead>
          <tbody>
            <tr><td>CSP-2026-0148</td><td>Rahul Verma</td><td>3</td><td>UPI</td><td className="r">{inr(computeSale().total)}</td></tr>
            <tr><td>CSP-2026-0147</td><td>Priya Nair</td><td>1</td><td>Card</td><td className="r">{inr(47500)}</td></tr>
            <tr><td>CSP-2026-0146</td><td>Walk-in</td><td>2</td><td>Cash</td><td className="r">{inr(6498)}</td></tr>
          </tbody>
        </table>
      </section>
    </AppFrame>
  );
}

function BillingScreen() {
  const { subtotal, gst, total } = computeSale();
  return (
    <AppFrame active="billing" title="POS Billing">
      <div className="cs-split cs-split--bill">
        <div className="cs-stack">
          <div className="cs-scanbar">
            <span><Search /> Search product by name or SKU…</span>
            <span className="cs-scanbar__scan"><Barcode /> Scan barcode</span>
          </div>
          <section className="cs-card cs-card--flush">
            <table className="cs-table">
              <thead><tr><th>Product</th><th className="c">Qty</th><th className="r">Price</th><th className="r">Amount</th></tr></thead>
              <tbody>
                {sampleSale.lines.map((l) => (
                  <tr key={l.product}>
                    <td>{l.product}<small>HSN {l.hsn}</small></td>
                    <td className="c"><span className="cs-qty">− {l.qty} +</span></td>
                    <td className="r">{inr(l.price)}</td>
                    <td className="r">{inr(l.qty * l.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          <div className="cs-chips">
            {['Cameras', 'Lenses', 'Accessories', 'Memory Cards', 'Batteries'].map((c, i) => (
              <span key={c} className={i === 0 ? 'is-on' : undefined}>{c}</span>
            ))}
          </div>
        </div>
        <section className="cs-card cs-sum">
          <div className="cs-sum__field"><small>Customer</small><b>{sampleSale.customer.name}</b></div>
          <div className="cs-sum__pay">
            <small>Payment method</small>
            <div>
              <span className="is-on"><Smartphone /> UPI</span>
              <span><CreditCard /> Card</span>
              <span><Banknote /> Cash</span>
            </div>
          </div>
          <dl>
            <div><dt>Subtotal</dt><dd>{inr(subtotal, 2)}</dd></div>
            <div><dt>Discount</dt><dd>− {inr(sampleSale.discount, 2)}</dd></div>
            <div><dt>GST ({sampleSale.gstRate}%)</dt><dd>{inr(gst, 2)}</dd></div>
            <div className="cs-sum__total"><dt>Grand Total</dt><dd>{inr(total, 2)}</dd></div>
          </dl>
          <span className="cs-btn cs-btn--primary">Complete Sale</span>
          <span className="cs-btn"><Printer /> Print Invoice</span>
        </section>
      </div>
    </AppFrame>
  );
}

function InventoryTable({ rows = inventoryRows }: { rows?: typeof inventoryRows }) {
  return (
    <table className="cs-table cs-table--dense">
      <thead>
        <tr>
          <th>Product</th><th>SKU</th><th>Category</th><th>Brand</th><th className="c">Stock</th>
          <th className="r">Purchase</th><th className="r">Selling</th><th className="c">GST</th><th>Status</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.sku}>
            <td>{r.product}</td><td className="mono">{r.sku}</td><td>{r.category}</td><td>{r.brand}</td>
            <td className="c">{r.stock}</td><td className="r">{inr(r.purchase)}</td><td className="r">{inr(r.selling)}</td>
            <td className="c">{r.gst}%</td><td><Badge tone={stockTone[r.status]}>{r.status}</Badge></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function InventoryScreen() {
  return (
    <AppFrame active="inventory" title="Inventory" action="Add Product">
      <div className="cs-chips">
        {['All', ...inventoryCategories.slice(0, 6).map((c) => c.name)].map((c, i) => (
          <span key={c} className={i === 0 ? 'is-on' : undefined}>{c}</span>
        ))}
      </div>
      <section className="cs-card cs-card--flush"><InventoryTable /></section>
    </AppFrame>
  );
}

function ProductsScreen() {
  return (
    <AppFrame active="products" title="Product Details" action="Save Product">
      <div className="cs-split cs-split--nav">
        <section className="cs-card cs-catnav">
          <h5>Categories</h5>
          <ul>
            {inventoryCategories.map(({ name, icon: Icon }, i) => (
              <li key={name} className={i === 0 ? 'is-on' : undefined}><Icon />{name}</li>
            ))}
          </ul>
        </section>
        <section className="cs-card">
          <h5>Edit Product <Badge tone="green">Active</Badge></h5>
          <div className="cs-form">
            {productFormFields.map((f) => (
              <label key={f.label} className={f.wide ? 'is-wide' : undefined}>
                <small>{f.label}</small>
                <span>{f.value}</span>
              </label>
            ))}
          </div>
        </section>
      </div>
    </AppFrame>
  );
}

function CustomersScreen() {
  return (
    <AppFrame active="customers" title="Customers" action="Add Customer">
      <div className="cs-grid cs-grid--3">
        <Kpi label="Total Customers" value="86" note="▲ 10% this month" />
        <Kpi label="Repeat Buyers" value="41" note="48% of customers" tone="green" />
        <Kpi label="Open Service Jobs" value="7" note="Linked to customers" tone="amber" />
      </div>
      <section className="cs-card cs-card--flush">
        <table className="cs-table">
          <thead><tr><th>Customer</th><th>Phone</th><th className="c">Orders</th><th>Last Purchase</th><th className="r">Total Spend</th></tr></thead>
          <tbody>
            {customerRows.map((c) => (
              <tr key={c.name}><td>{c.name}</td><td>{c.phone}</td><td className="c">{c.orders}</td><td>{c.last}</td><td className="r">{inr(c.spend)}</td></tr>
            ))}
          </tbody>
        </table>
      </section>
    </AppFrame>
  );
}

function SuppliersScreen() {
  return (
    <AppFrame active="suppliers" title="Suppliers" action="Add Supplier">
      <div className="cs-grid cs-grid--3">
        <Kpi label="Active Suppliers" value="12" note="Cameras, lenses, accessories" />
        <Kpi label="Purchases (Oct)" value="₹8,36,320" note="▲ 6.1% vs Sep" tone="violet" />
        <Kpi label="Payments Due" value="₹2,43,500" note="3 suppliers" tone="amber" />
      </div>
      <section className="cs-card cs-card--flush">
        <table className="cs-table">
          <thead><tr><th>Supplier</th><th>Contact</th><th>City</th><th>Last Purchase</th><th className="r">Balance Due</th></tr></thead>
          <tbody>
            {supplierRows.map((s) => (
              <tr key={s.name}>
                <td>{s.name}</td><td>{s.contact}</td><td>{s.city}</td><td>{s.last}</td>
                <td className="r">{s.due ? inr(s.due) : <Badge tone="green">Settled</Badge>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </AppFrame>
  );
}

function ServicesTable() {
  return (
    <table className="cs-table cs-table--dense">
      <thead>
        <tr><th>Service ID</th><th>Customer</th><th>Product</th><th>Issue</th><th>Status</th><th>Expected</th><th>Assigned</th></tr>
      </thead>
      <tbody>
        {serviceRows.map((s) => (
          <tr key={s.id}>
            <td className="mono">{s.id}</td><td>{s.customer}</td><td>{s.product}</td><td>{s.issue}</td>
            <td><Badge tone={serviceTone[s.status]}>{s.status}</Badge></td><td>{s.expected}</td><td>{s.staff}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function ServicesScreen() {
  return (
    <AppFrame active="services" title="Service Management" action="New Service">
      <div className="cs-chips">
        {['All', ...serviceBadges].map((c, i) => <span key={c} className={i === 0 ? 'is-on' : undefined}>{c}</span>)}
      </div>
      <section className="cs-card cs-card--flush"><ServicesTable /></section>
    </AppFrame>
  );
}

function ReportsScreen() {
  const tone = { blue: 'blue', violet: 'violet', green: 'green', amber: 'amber' } as const;
  return (
    <AppFrame active="reports" title="Reports & Analytics">
      <div className="cs-chips">
        {reportTypes.map((c, i) => <span key={c} className={i === 0 ? 'is-on' : undefined}>{c}</span>)}
      </div>
      <div className="cs-grid cs-grid--4">
        {reportKpis.map((k) => <Kpi key={k.label} label={k.label} value={k.value} note={k.delta} tone={tone[k.tone]} />)}
      </div>
      <div className="cs-split cs-split--2-1">
        <section className="cs-card">
          <h5>Sales vs Purchase <small>Last 6 months</small></h5>
          <Bars keys={['sales', 'purchase']} />
        </section>
        <section className="cs-card">
          <h5>Sales by Category</h5>
          <ul className="cs-rank">
            {categorySplit.map((c) => (
              <li key={c.name}><span>{c.name}</span><div><i style={{ width: `${c.pct * 2}%` }} /></div><b>{c.pct}%</b></li>
            ))}
          </ul>
        </section>
      </div>
    </AppFrame>
  );
}

/** Deterministic pseudo-QR so the invoice looks real without bundling an image. */
function QrMock() {
  const n = 21;
  let seed = 7;
  const next = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) >> 8) % 100;
  const finder = (x: number, y: number) => (x < 7 && y < 7) || (x >= n - 7 && y < 7) || (x < 7 && y >= n - 7);
  const finderOn = (x: number, y: number) => {
    const lx = x >= n - 7 ? x - (n - 7) : x;
    const ly = y >= n - 7 ? y - (n - 7) : y;
    return lx === 0 || lx === 6 || ly === 0 || ly === 6 || (lx >= 2 && lx <= 4 && ly >= 2 && ly <= 4);
  };
  const cells: ReactNode[] = [];
  for (let y = 0; y < n; y += 1) {
    for (let x = 0; x < n; x += 1) {
      const on = finder(x, y) ? finderOn(x, y) : next() > 52;
      if (on) cells.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />);
    }
  }
  return <svg viewBox={`0 0 ${n} ${n}`} className="cs-qr" shapeRendering="crispEdges" aria-hidden="true">{cells}</svg>;
}

function BarcodeMock() {
  let seed = 11;
  const next = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) >> 8) % 4;
  const bars: ReactNode[] = [];
  let x = 0;
  for (let i = 0; i < 46; i += 1) {
    const w = next() + 1;
    if (i % 2 === 0) bars.push(<rect key={i} x={x} y="0" width={w} height="30" />);
    x += w;
  }
  return <svg viewBox={`0 0 ${x} 30`} preserveAspectRatio="none" className="cs-barcode" aria-hidden="true">{bars}</svg>;
}

export function InvoiceDocument() {
  const { subtotal, gst, total } = computeSale();
  const taxable = subtotal - sampleSale.discount;
  return (
    <div className="cs-invoice">
      <header>
        <div>
          <span className="cs-invoice__logo"><Camera /> CamStore POS</span>
          <b>{sampleSale.store.name}</b>
          <small>{sampleSale.store.address}</small>
          <small>{sampleSale.store.gstin} · {sampleSale.store.phone}</small>
        </div>
        <div className="cs-invoice__title">
          <strong>TAX INVOICE</strong>
          <small>Invoice No: <b>{sampleSale.invoiceNo}</b></small>
          <small>Date: <b>{sampleSale.date}</b></small>
        </div>
      </header>
      <div className="cs-invoice__bill">
        <div><small>Bill To</small><b>{sampleSale.customer.name}</b><span>{sampleSale.customer.phone}</span><span>{sampleSale.customer.city}</span></div>
        <div><small>Payment</small><b>{sampleSale.payment}</b><span>Status: Paid</span></div>
      </div>
      <table className="cs-table">
        <thead><tr><th>#</th><th>Product</th><th>HSN</th><th className="c">Qty</th><th className="r">Price</th><th className="c">GST</th><th className="r">Amount</th></tr></thead>
        <tbody>
          {sampleSale.lines.map((l, i) => (
            <tr key={l.product}>
              <td>{i + 1}</td><td>{l.product}</td><td className="mono">{l.hsn}</td><td className="c">{l.qty}</td>
              <td className="r">{inr(l.price, 2)}</td><td className="c">{sampleSale.gstRate}%</td><td className="r">{inr(l.qty * l.price, 2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cs-invoice__foot">
        <div className="cs-invoice__codes">
          <QrMock />
          <div><BarcodeMock /><small>{sampleSale.invoiceNo}</small></div>
        </div>
        <dl>
          <div><dt>Subtotal</dt><dd>{inr(subtotal, 2)}</dd></div>
          <div><dt>Discount</dt><dd>− {inr(sampleSale.discount, 2)}</dd></div>
          <div><dt>Taxable Value</dt><dd>{inr(taxable, 2)}</dd></div>
          <div><dt>CGST (9%)</dt><dd>{inr(gst / 2, 2)}</dd></div>
          <div><dt>SGST (9%)</dt><dd>{inr(gst / 2, 2)}</dd></div>
          <div className="cs-sum__total"><dt>Grand Total</dt><dd>{inr(total, 2)}</dd></div>
        </dl>
      </div>
      <div className="cs-invoice__closing">
        <div>
          <b>Terms &amp; Conditions</b>
          <span>Warranty and returns are subject to store policy.</span>
          <span>Please retain this invoice for your records.</span>
        </div>
        <div className="cs-invoice__signature"><i>CamStore</i><span>Authorized Signatory</span></div>
      </div>
      <footer>Thank you for shopping with us. Warranty as per manufacturer terms. · Generated by CamStore POS</footer>
    </div>
  );
}

function InvoicesScreen() {
  return (
    <AppFrame active="invoices" title="Invoice Preview">
      <div className="cs-invoice-stage">
        <div className="cs-invoice-stage__doc"><InvoiceDocument /></div>
        <div className="cs-invoice-stage__actions">
          <span className="cs-btn cs-btn--primary"><Printer /> Print Invoice</span>
          <span className="cs-btn"><Download /> Download PDF</span>
          <span className="cs-btn"><QrCode /> Share</span>
        </div>
      </div>
    </AppFrame>
  );
}

export const screenRegistry = {
  dashboard: { label: 'CamStore POS dashboard with sales overview, top selling cameras and recent sales', node: <DashboardScreen /> },
  billing: { label: 'CamStore POS billing screen with product search, barcode scan, cart, GST and payment options', node: <BillingScreen /> },
  inventory: { label: 'CamStore POS inventory table listing cameras, lenses and accessories with stock and price', node: <InventoryScreen /> },
  products: { label: 'CamStore POS product management form with category navigation', node: <ProductsScreen /> },
  customers: { label: 'CamStore POS customer list with purchase history and total spend', node: <CustomersScreen /> },
  suppliers: { label: 'CamStore POS supplier list with balances due', node: <SuppliersScreen /> },
  services: { label: 'CamStore POS service management table with repair status badges', node: <ServicesScreen /> },
  reports: { label: 'CamStore POS reports with sales, purchase and profit summary charts', node: <ReportsScreen /> },
  invoices: { label: 'CamStore POS invoice preview with print and download actions', node: <InvoicesScreen /> },
} as const;

export type ScreenId = keyof typeof screenRegistry;

/** Convenience wrapper: any mock screen, scaled to its container, with accessible description. */
export function AppScreen({ id, minScale }: { id: ScreenId; minScale?: number }) {
  const { label, node } = screenRegistry[id];
  return <ScaledScreen width={SCREEN_W} height={SCREEN_H} label={label} minScale={minScale}>{node}</ScaledScreen>;
}

export function InvoiceScreen({ minScale = 0.62 }: { minScale?: number }) {
  return (
    <ScaledScreen width={INVOICE_W} height={INVOICE_H} minScale={minScale} label="Sample CamStore POS tax invoice with items, GST, totals, QR code and barcode">
      <InvoiceDocument />
    </ScaledScreen>
  );
}

export { InventoryTable, ServicesTable, Bars, Kpi, Badge };
