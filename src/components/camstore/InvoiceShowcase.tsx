import { CAMSTORE_IMAGES } from '@/data/camstore';
import { InvoiceScreen } from './screens';
import { Reveal, SectionHead } from './shared';

export function InvoiceShowcase() {
  return (
    <section className="cs-section" aria-labelledby="cs-invoice-title">
      <div className="site-container cs-two cs-two--media-wide">
        <Reveal className="cs-two__media">
          <div style={{ position: 'relative', minHeight: '600px', width: '100%' }}>
            <div style={{ position: 'absolute', top: 0, left: '5%', transform: 'scale(0.85)', transformOrigin: 'top left', zIndex: 2, boxShadow: '0 24px 50px rgba(0,0,0,0.1)' }}>
              <InvoiceScreen />
            </div>
            <div style={{ position: 'absolute', top: '100px', left: 0, transform: 'scale(0.85)', transformOrigin: 'top left', zIndex: 1, filter: 'blur(2px) grayscale(50%)', opacity: 0.6 }}>
              <InvoiceScreen />
            </div>
          </div>
        </Reveal>

        <Reveal className="cs-two__copy" delay={0.05}>
          <img src={CAMSTORE_IMAGES.cameraGear} alt="Camera gear" style={{ borderRadius: '24px', width: '100%', marginBottom: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }} />
          
          <SectionHead
            id="cs-invoice-sub"
            title="Professional Invoices, Every Time"
            copy="Generate clean and professional invoices with your store details, customer information, itemized products, GST and barcode."
          />
        </Reveal>
      </div>
    </section>
  );
}
