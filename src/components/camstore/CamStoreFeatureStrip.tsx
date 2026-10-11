import {
  ArrowRight,
  BarChart3,
  Boxes,
  Camera,
  ReceiptText,
  Truck,
  Users,
  Wrench,
} from 'lucide-react';
import { Reveal } from './shared';

const featureCards = [
  { label: 'Products', icon: Camera },
  { label: 'Inventory', icon: Boxes },
  { label: 'Purchase', icon: Truck },
  { label: 'Billing', icon: ReceiptText },
  { label: 'Customers', icon: Users },
  { label: 'Service', icon: Wrench },
  { label: 'Reports', icon: BarChart3 },
];

export function CamStoreFeatureStrip() {
  return (
    <section id="camstore-features" className="cs-section cs-section--tight cs-feature-strip" aria-label="CamStore POS at a glance">
      <div className="site-container">
        <Reveal>
          <div className="cs-feature-strip__head">
            <h2>Everything Connected in One POS</h2>
            <p>From products to reports, CamStore POS connects all your camera store operations together.</p>
          </div>
          <ul className="cs-strip">
            {featureCards.map(({ label, icon: Icon }, index) => (
              <li key={label} className="cs-strip__item">
                <div className="cs-strip__card">
                  <span className="cs-strip__icon"><Icon aria-hidden="true" /></span>
                  {index < featureCards.length - 1 ? <ArrowRight className="cs-strip__arrow" aria-hidden="true" /> : null}
                </div>
                <span className="cs-strip__label">{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
