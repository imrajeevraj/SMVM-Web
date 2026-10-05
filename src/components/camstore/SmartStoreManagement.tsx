import type { CSSProperties } from 'react';
import { ArrowRight, BarChart3, Check } from 'lucide-react';
import { Reveal } from './shared';

const benefits = [
  'Fast billing with professional invoice printing',
  'Real-time inventory tracking with low-stock alerts',
  'Manage cameras, lenses, accessories and more',
  'Customer and purchase management',
  'Service and repair tracking',
  'Detailed reports for better business decisions',
];

const workflowSteps = [
  {
    number: '01',
    title: 'Manage Inventory',
    description: 'Add cameras, lenses, accessories and track real-time stock.',
    artLabel: 'Camera inventory and boxes illustration',
    position: '33.333% 0%',
  },
  {
    number: '02',
    title: 'Fast Billing',
    description: 'Create professional invoices and complete sales quickly.',
    artLabel: 'Invoice, calculator and rupee coin illustration',
    position: '0% 0%',
  },
  {
    number: '03',
    title: 'Detailed Reports',
    description: 'Understand sales, inventory and service performance.',
    artLabel: 'Business reports and analytics illustration',
    position: '66.667% 100%',
  },
];

export function SmartStoreManagement() {
  return (
    <section className="cs-section cs-smart" aria-labelledby="cs-smart-title">
      <div className="cs-smart__shell">
        <div className="cs-smart__main">
          <Reveal className="cs-smart__intro">
            <span className="cs-smart__badge"><BarChart3 aria-hidden="true" /> Smart Store Management</span>
            <h2 id="cs-smart-title">Everything Your<br /><span className="cs-smart__title-row"><strong>Camera Store</strong> Needs</span></h2>
            <p>Manage products, inventory, sales, purchases and services from one simple and powerful POS system.</p>
          </Reveal>

          <Reveal className="cs-smart__dashboard" delay={0.04}>
            <span className="cs-smart__dashboard-glow" aria-hidden="true" />
            <figure className="cs-smart__device">
              <img
                className="cs-smart__dashboard-image"
                src="/images/products/camstore/camstore-pos-dashboard-laptop.png"
                alt="CamStore POS dashboard displayed on a realistic laptop"
                loading="lazy"
              />
            </figure>
          </Reveal>

          <Reveal className="cs-smart__details" delay={0.08}>
            <ul className="cs-smart__benefits">
              {benefits.map((benefit) => (
                <li key={benefit}>
                  <span><Check aria-hidden="true" /></span>
                  {benefit}
                </li>
              ))}
            </ul>
            <span
              className="cs-smart__product-art"
              role="img"
              aria-label="Professional camera and lenses product illustration"
            />
          </Reveal>
        </div>

        <ol className="cs-smart__workflow" aria-label="CamStore POS workflow">
          {workflowSteps.map((step, index) => {
            const style = { '--smart-position': step.position } as CSSProperties;
            return (
              <li key={step.number}>
                <Reveal className="cs-smart-step" delay={0.04 * index}>
                  <span className="cs-smart-step__number">{step.number}</span>
                  <div className="cs-smart-step__copy">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                  <span className="cs-smart-step__art" style={style} role="img" aria-label={step.artLabel} />
                </Reveal>
                {index < workflowSteps.length - 1 ? <ArrowRight className="cs-smart-step__arrow" aria-hidden="true" /> : null}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
