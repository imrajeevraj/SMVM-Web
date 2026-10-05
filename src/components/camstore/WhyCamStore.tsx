import type { LucideIcon } from 'lucide-react';
import { BarChart3, Camera, Headset, IndianRupee, Settings, ShieldCheck, Star } from 'lucide-react';
import { AppScreen } from './screens';
import { Reveal } from './shared';

const whyFeatures: Array<{ number: string; title: string; description: string; icon: LucideIcon }> = [
  { number: '01', title: 'Built for Camera Stores', description: 'Designed specifically for cameras, lenses and accessories with real industry needs in mind.', icon: Camera },
  { number: '02', title: 'Easy to Use', description: 'Clean and simple interface that anyone on your team can learn quickly.', icon: Settings },
  { number: '03', title: 'Complete Business Control', description: 'Manage sales, inventory, customers and reports from one powerful platform.', icon: BarChart3 },
  { number: '04', title: 'Reliable and Accurate', description: 'Minimize billing errors with a stable, secure and accurate POS system.', icon: ShieldCheck },
  { number: '05', title: 'GST Ready', description: 'Create GST-compliant invoices with automatic tax and discount calculation.', icon: IndianRupee },
  { number: '06', title: 'Dedicated Support', description: 'Get expert support from a team that understands the camera industry.', icon: Headset },
];

function WhyFeatureCard({ feature }: { feature: (typeof whyFeatures)[number] }) {
  const Icon = feature.icon;
  return (
    <li className="cs-why-card">
      <span className="cs-why-card__icon"><Icon aria-hidden="true" /></span>
      <div className="cs-why-card__copy">
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
      <span className="cs-why-card__number" aria-hidden="true">{feature.number}</span>
    </li>
  );
}

function CenterProductShowcase() {
  return (
    <figure className="cs-why__showcase" aria-label="CamStore POS billing dashboard with camera products and a receipt printer">
      <div className="cs-why__monitor">
        <div className="cs-why__monitor-screen"><AppScreen id="billing" minScale={0.3} /></div>
      </div>
      <div className="cs-why__monitor-stand" aria-hidden="true" />
      <span className="cs-why__camera-products" role="img" aria-label="Camera and lenses" />
      <img className="cs-why__printer" src="/images/products/camstore/scanner-printer.jpg" alt="Receipt printer and barcode scanner" loading="lazy" />
    </figure>
  );
}

export function WhyCamStore() {
  return (
    <section className="cs-section cs-why-section" aria-labelledby="cs-why-title">
      <div className="cs-why__shell">
        <Reveal className="cs-why__heading">
          <span className="cs-why__badge"><Star aria-hidden="true" fill="currentColor" /> Why CamStore POS?</span>
          <h2 id="cs-why-title">Why <span>CamStore POS?</span></h2>
          <p>A complete, reliable and easy-to-use POS solution built specifically for camera stores.</p>
        </Reveal>
        <div className="cs-why__layout">
          <Reveal className="cs-why__side cs-why__side--left" delay={0.05}>
            <ol aria-label="CamStore POS advantages one through three">
              {whyFeatures.slice(0, 3).map((feature) => <WhyFeatureCard key={feature.number} feature={feature} />)}
            </ol>
          </Reveal>
          <Reveal className="cs-why__center" delay={0.1}><CenterProductShowcase /></Reveal>
          <Reveal className="cs-why__side cs-why__side--right" delay={0.15}>
            <ol start={4} aria-label="CamStore POS advantages four through six">
              {whyFeatures.slice(3).map((feature) => <WhyFeatureCard key={feature.number} feature={feature} />)}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
