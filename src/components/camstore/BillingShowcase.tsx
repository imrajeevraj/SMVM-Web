import type { CSSProperties } from 'react';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight, Check, CreditCard, ReceiptText, ShoppingCart } from 'lucide-react';
import { AppScreen } from './screens';
import { BrowserFrame, Reveal } from './shared';

const billingBenefits = [
  'Quick product search and selection',
  'Multiple payment options',
  'Automatic tax and discount calculation',
  'Professional invoice printing',
  'Customer and transaction history',
  'Faster checkout with fewer mistakes',
];

type BillingStep = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  artLabel: string;
  position?: string;
  printer?: boolean;
};

const billingSteps: BillingStep[] = [
  {
    number: '01',
    title: 'Select Products',
    description: 'Quickly search and add cameras, lenses and accessories to the bill.',
    icon: ShoppingCart,
    artLabel: 'Camera products ready to add to a sale',
    position: '66.667% 0%',
  },
  {
    number: '02',
    title: 'Complete Payment',
    description: 'Apply discounts, GST and choose the payment method.',
    icon: CreditCard,
    artLabel: 'Invoice, calculator and rupee payment illustration',
    position: '0% 0%',
  },
  {
    number: '03',
    title: 'Generate Invoice',
    description: 'Create and print a professional invoice instantly.',
    icon: ReceiptText,
    artLabel: 'Barcode scanner and thermal invoice printer',
    printer: true,
  },
];

export function BillingShowcase() {
  return (
    <section className="cs-section cs-billing" aria-labelledby="cs-billing-title">
      <div className="cs-billing__shell">
        <div className="cs-billing__main">
          <Reveal className="cs-billing__intro">
            <span className="cs-billing__badge"><ReceiptText aria-hidden="true" /> Smart Billing</span>
            <h2 id="cs-billing-title">Fast, Simple &amp;<br /><span>Reliable Billing</span></h2>
            <p>Create professional invoices, complete sales quickly and keep every transaction organized with a simple and powerful billing workflow.</p>
          </Reveal>

          <Reveal className="cs-billing__screen" delay={0.04}>
          <BrowserFrame title="CamStore POS — POS Billing">
              <AppScreen id="billing" minScale={0.3} />
          </BrowserFrame>
          </Reveal>

          <Reveal className="cs-billing__details" delay={0.08}>
            <ul className="cs-billing__benefits">
              {billingBenefits.map((benefit) => (
                <li key={benefit}>
                  <span><Check aria-hidden="true" /></span>
                  {benefit}
                </li>
              ))}
            </ul>
            <span className="cs-billing__product-visual" role="img" aria-label="Camera products with a professional billing invoice">
              <i className="cs-billing__product-camera" />
              <i className="cs-billing__product-invoice" />
            </span>
          </Reveal>
        </div>

        <ol className="cs-billing__workflow" aria-label="CamStore POS billing workflow">
          {billingSteps.map((step, index) => {
            const Icon = step.icon;
            const style = { '--billing-position': step.position } as CSSProperties;
            return (
              <li key={step.number}>
                <Reveal className="cs-billing-step" delay={index * 0.04}>
                  <span className="cs-billing-step__number">{step.number}</span>
                  <span className="cs-billing-step__icon"><Icon aria-hidden="true" /></span>
                  <div className="cs-billing-step__copy">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                  {step.printer ? (
                    <img className="cs-billing-step__printer" src="/images/products/camstore/scanner-printer.jpg" alt={step.artLabel} loading="lazy" />
                  ) : (
                    <span className="cs-billing-step__art" style={style} role="img" aria-label={step.artLabel} />
                  )}
                </Reveal>
                {index < billingSteps.length - 1 ? <ArrowRight className="cs-billing-step__arrow" aria-hidden="true" /> : null}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
