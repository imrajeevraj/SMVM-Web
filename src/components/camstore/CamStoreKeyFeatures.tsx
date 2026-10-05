import type { CSSProperties } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  BarChart3,
  Boxes,
  Camera,
  ClipboardList,
  LayoutGrid,
  ReceiptText,
  ShieldCheck,
  UsersRound,
  Wrench,
} from 'lucide-react';

type Feature = {
  title: string;
  description: string;
  artLabel: string;
  icon: LucideIcon;
  position: string;
  accent: string;
  soft: string;
  wash: string;
};

const features: Feature[] = [
  { title: 'Sales & Billing', description: 'Create professional invoices with tax, discount, and multiple payment options.', artLabel: 'Invoice, calculator and rupee coin illustration', icon: ReceiptText, position: '0% 0%', accent: '#1478ed', soft: '#dcecff', wash: '#eef6ff' },
  { title: 'Inventory Management', description: 'Track cameras, lenses, accessories with real-time stock updates and low stock alerts.', artLabel: 'Camera inventory with boxes and lens illustration', icon: Boxes, position: '33.333% 0%', accent: '#00a96f', soft: '#d8f7ea', wash: '#effbf6' },
  { title: 'Product Management', description: 'Manage camera models, lenses, accessories with categories, brands and HSN/GST.', artLabel: 'Camera, lenses and product tiles illustration', icon: Camera, position: '66.667% 0%', accent: '#f26621', soft: '#ffe4d5', wash: '#fff5ef' },
  { title: 'Service Management', description: 'Track service and repair status, customer details and complete service history.', artLabel: 'Camera repair tools and service mat illustration', icon: Wrench, position: '100% 0%', accent: '#8247e5', soft: '#ebddff', wash: '#f7f2ff' },
  { title: 'Purchase Management', description: 'Manage supplier purchases and keep track of purchase history with easy entries.', artLabel: 'Purchase order and supplier boxes illustration', icon: ClipboardList, position: '0% 100%', accent: '#d93379', soft: '#ffddeb', wash: '#fff1f6' },
  { title: 'Customer Management', description: 'Maintain customer database with purchase history, service records and loyalty information.', artLabel: 'Customer profile cards and user group illustration', icon: UsersRound, position: '33.333% 100%', accent: '#049cac', soft: '#d4f4f6', wash: '#effafb' },
  { title: 'Reports & Analytics', description: 'Get detailed sales, purchase, inventory and service reports to grow your business.', artLabel: 'Bar chart, trend line and pie chart illustration', icon: BarChart3, position: '66.667% 100%', accent: '#f1a400', soft: '#ffefc5', wash: '#fff9ec' },
  { title: 'Easy & Secure', description: 'Simple to use interface with data backup and secure access management.', artLabel: 'Security shield, cloud backup and database illustration', icon: ShieldCheck, position: '100% 100%', accent: '#146fe6', soft: '#dbeaff', wash: '#eff6ff' },
];

export function CamStoreKeyFeatures() {
  return (
    <section className="cs-section cs-key-section" aria-labelledby="cs-key-title">
      <div className="cs-key-shell">
        <header className="cs-key-head">
          <span className="cs-key-badge"><LayoutGrid aria-hidden="true" /> Key Features</span>
          <h2 id="cs-key-title">Everything You Need for Your <span>Camera Store</span></h2>
          <p>Powerful features designed for camera retailers, from inventory to invoicing and service management.</p>
        </header>

        <ul className="cs-key-grid">
          {features.map((feature) => {
            const Icon = feature.icon;
            const style = {
              '--key-accent': feature.accent,
              '--key-soft': feature.soft,
              '--key-wash': feature.wash,
              '--key-position': feature.position,
            } as CSSProperties;

            return (
              <li className="cs-key-card" style={style} key={feature.title}>
                <div className="cs-key-card__copy">
                  <span className="cs-key-card__icon"><Icon aria-hidden="true" /></span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
                <span className="cs-key-card__art" role="img" aria-label={feature.artLabel} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
