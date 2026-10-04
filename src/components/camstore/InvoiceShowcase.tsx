import { CheckCircle2, Download, Printer } from 'lucide-react';
import { InvoiceScreen } from './screens';
import { BrowserFrame, Reveal, SectionHead } from './shared';

const invoicePoints = [
  'GST-ready tax invoice with HSN codes',
  'A4 PDF and 80mm thermal printing',
  'QR code and barcode on every bill',
  'Store details, customer details and payment mode',
] as const;

export function InvoiceShowcase() {
  return (
    <section className="cs-section" aria-labelledby="cs-invoice-title">
      <div className="site-container cs-two cs-two--invoice">
        <Reveal className="cs-two__copy">
          <SectionHead
            id="cs-invoice-title"
            eyebrow="Invoices"
            title="Professional Invoices, Every Time"
            copy="Generate clear, GST-ready invoices in seconds. Reprint a bill, share a PDF, or print to a thermal printer right from the counter."
          />
          <ul className="cs-checks cs-checks--single">
            {invoicePoints.map((p) => <li key={p}><CheckCircle2 aria-hidden="true" />{p}</li>)}
          </ul>
          {/* Illustrative of the actions available on an invoice; the buttons live inside the product, not on this page. */}
          <p className="cs-note">Sample invoice shown. Available actions inside CamStore POS:</p>
          <div className="cs-pillrow" aria-hidden="true">
            <span><Printer />Print Invoice</span>
            <span><Download />Download PDF</span>
          </div>
        </Reveal>

        <Reveal className="cs-two__media cs-two__media--invoice" delay={0.05}>
          <BrowserFrame title="CamStore POS — Invoice">
            <InvoiceScreen />
          </BrowserFrame>
        </Reveal>
      </div>
    </section>
  );
}
