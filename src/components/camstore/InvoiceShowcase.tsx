import { CheckCircle2 } from 'lucide-react';
import { CAMSTORE_IMAGES } from '@/data/camstore';
import { InvoiceScreen } from './screens';
import { Reveal, SectionHead } from './shared';

const invoicePoints = [
  'Custom store details & logo',
  'Itemized product list',
  'GST / tax calculation',
  'Barcode on invoice',
  'Print / Download / Share (PDF)',
] as const;

export function InvoiceShowcase() {
  return (
    <section className="cs-section" aria-labelledby="cs-invoice-title">
      <div className="site-container cs-two">
        <Reveal className="cs-two__copy">
          <SectionHead
            id="cs-invoice-title"
            title="Professional Invoices With Your Store Details"
            copy="Generate clean and professional invoices with your store information, itemized products, taxes and barcode for a better customer experience."
          />
          <ul className="cs-checks cs-checks--single" style={{ marginBottom: '40px' }}>
            {invoicePoints.map((p) => <li key={p}><CheckCircle2 aria-hidden="true" />{p}</li>)}
          </ul>
          
          <div style={{ transform: 'scale(0.85)', transformOrigin: 'top left' }}>
             <InvoiceScreen />
          </div>
        </Reveal>

        <Reveal className="cs-two__media" delay={0.05}>
          <img src={CAMSTORE_IMAGES.cameraGear} alt="Camera gear" style={{ borderRadius: '24px', width: '100%', marginBottom: '32px' }} />
          
          <SectionHead
            id="cs-invoice-sub"
            title="Professional Invoices, Every Time"
            copy="Generate clean and professional invoices with your store details, customer information, itemized products, GST and barcode."
          />
          
          <div style={{ position: 'relative', marginTop: '32px' }}>
            <img src={CAMSTORE_IMAGES.storeAmbience} alt="Store ambience" style={{ borderRadius: '24px', width: '100%', height: '300px', objectFit: 'cover' }} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
