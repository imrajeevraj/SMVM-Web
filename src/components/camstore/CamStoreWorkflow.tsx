import { BarChart3, Boxes, Camera, ReceiptText, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { workflowSteps } from '@/data/camstore';
import { Reveal } from './shared';

const moduleDescriptions: Record<string, string> = {
  Products: 'Manage cameras, lenses and accessories.',
  Inventory: 'Track stock and serial numbers.',
  Purchase: 'Manage suppliers and purchases.',
  Billing: 'Create fast GST-ready invoices.',
  Customers: 'Manage customer details and history.',
  Service: 'Track repairs and service jobs.',
  Reports: 'Monitor sales and business performance.',
};

function ConnectedModuleCard({
  number,
  title,
  description,
  icon: Icon,
}: {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <li className="cs-ecosystem__module">
      <article className="cs-ecosystem__module-card">
        <span className="cs-ecosystem__module-number">{number}</span>
        <span className="cs-ecosystem__module-icon"><Icon aria-hidden="true" /></span>
        <h3>{title}</h3>
        <p>{description}</p>
      </article>
    </li>
  );
}

export function CamStoreWorkflow() {
  return (
    <section className="cs-section cs-ecosystem" aria-labelledby="cs-flow-title">
      <div className="site-container cs-ecosystem__container">
        <Reveal className="cs-ecosystem__heading">
          <span className="cs-ecosystem__eyebrow">One connected platform</span>
          <h2 id="cs-flow-title">Everything Connected in <span>One POS</span></h2>
          <p>From products to reports, CamStore POS connects all your camera store operations together.</p>
        </Reveal>

        <Reveal className="cs-ecosystem__network" delay={0.05}>
          <div className="cs-ecosystem__hub">
            <span className="cs-ecosystem__hub-icon"><Camera aria-hidden="true" /></span>
            <div className="cs-ecosystem__hub-copy">
              <span>CAMSTORE POS</span>
              <h3>One unified system</h3>
              <p>Every part of your camera store, working together.</p>
            </div>
            <div className="cs-ecosystem__hub-tools" aria-hidden="true">
              <span><Boxes /></span>
              <span><ReceiptText /></span>
              <span><Users /></span>
              <span><BarChart3 /></span>
            </div>
          </div>

          <svg className="cs-ecosystem__connectors" viewBox="0 0 1000 70" preserveAspectRatio="none" aria-hidden="true">
            <path d="M500 0V20H71.4M500 20H928.6M71.4 20V70M214.3 20V70M357.1 20V70M500 20V70M642.9 20V70M785.7 20V70M928.6 20V70" />
            <circle cx="71.4" cy="20" r="3" />
            <circle cx="214.3" cy="20" r="3" />
            <circle cx="357.1" cy="20" r="3" />
            <circle cx="500" cy="20" r="3" />
            <circle cx="642.9" cy="20" r="3" />
            <circle cx="785.7" cy="20" r="3" />
            <circle cx="928.6" cy="20" r="3" />
          </svg>

          <ol className="cs-ecosystem__modules">
            {workflowSteps.map(({ label, icon }, index) => (
              <ConnectedModuleCard
                key={label}
                number={String(index + 1).padStart(2, '0')}
                title={label}
                description={moduleDescriptions[label]}
                icon={icon}
              />
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
