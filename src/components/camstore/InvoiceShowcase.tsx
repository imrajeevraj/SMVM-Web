import type { LucideIcon } from 'lucide-react';
import { Calculator, Check, FileCheck2, FileText, History, Printer } from 'lucide-react';
import { InvoiceScreen } from './screens';
import { Reveal } from './shared';

const invoiceBenefits = [
  'GST-ready professional invoices',
  'Automatic tax and discount calculation',
  'Complete customer and product details',
  'Invoice numbering and transaction history',
  'Print or save invoices digitally',
  'Clear totals and payment information',
];

const invoiceCapabilities: Array<{
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  { number: '01', title: 'GST Ready', description: 'Generate GST-compliant invoices automatically.', icon: FileCheck2 },
  { number: '02', title: 'Auto Calculation', description: 'Automatic tax, discount and total calculation.', icon: Calculator },
  { number: '03', title: 'Print & PDF', description: 'Print or save invoices as PDF instantly.', icon: Printer },
  { number: '04', title: 'Invoice History', description: 'Keep track of all invoices and transactions.', icon: History },
];

export function InvoiceShowcase() {
  return (
    <section className="cs-section cs-invoicing" aria-labelledby="cs-invoice-title">
      <div className="cs-invoicing__shell">
        <div className="cs-invoicing__main">
          <Reveal className="cs-invoicing__intro">
            <span className="cs-invoicing__badge"><FileText aria-hidden="true" /> Professional Invoicing</span>
            <h2 id="cs-invoice-title">Professional <span>Invoices</span>,<br />Every Time</h2>
            <p>Create clean, professional and GST-ready invoices for every camera-store sale, with all the information your customers need.</p>
          </Reveal>

          <Reveal className="cs-invoicing__visual" delay={0.04}>
            <div className="cs-invoicing__paper-stack">
              <div className="cs-invoicing__paper-back" aria-hidden="true" />
              <div className="cs-invoicing__paper" aria-label="CamStore POS sample tax invoice">
                <InvoiceScreen minScale={0.35} />
              </div>
              <span className="cs-invoicing__camera" role="img" aria-label="Professional camera and lenses" />
              <img className="cs-invoicing__printer" src="/images/products/camstore/scanner-printer.jpg" alt="Receipt printer and barcode scanner" loading="lazy" />
            </div>
          </Reveal>

          <Reveal className="cs-invoicing__details" delay={0.08}>
            <ul className="cs-invoicing__benefits">
              {invoiceBenefits.map((benefit) => (
                <li key={benefit}><span><Check aria-hidden="true" /></span>{benefit}</li>
              ))}
            </ul>
            <span className="cs-invoicing__receipt" role="img" aria-label="Invoice and rupee illustration" />
          </Reveal>
        </div>

        <ol className="cs-invoicing__capabilities" aria-label="CamStore POS invoice capabilities">
          {invoiceCapabilities.map(({ number, title, description, icon: Icon }, index) => (
            <li key={number}>
              <Reveal className="cs-invoicing-card" delay={index * 0.04}>
                <span className="cs-invoicing-card__number">{number}</span>
                <span className="cs-invoicing-card__icon"><Icon aria-hidden="true" /></span>
                <div className="cs-invoicing-card__copy"><h3>{title}</h3><p>{description}</p></div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
