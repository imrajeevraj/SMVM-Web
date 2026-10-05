import { CheckCircle2 } from 'lucide-react';
import { CAMSTORE_IMAGES } from '@/data/camstore';
import { AppScreen } from './screens';
import { BrowserFrame, Reveal, SectionHead } from './shared';

const billingPoints = [
  'Quick product search',
  'Barcode scanner support',
  'Discount & GST handling',
  'Multiple payment methods',
  'Thermal / PDF invoice printing',
] as const;

export function BillingShowcase() {
  return (
    <section className="cs-section" aria-labelledby="cs-billing-title">
      <div className="site-container cs-two cs-two--media-wide">
        <Reveal className="cs-two__media">
          <BrowserFrame title="CamStore POS — POS Billing">
            <AppScreen id="billing" />
          </BrowserFrame>
        </Reveal>

        <Reveal className="cs-two__copy" delay={0.05}>
          <SectionHead
            id="cs-billing-title"
            title="Fast, Simple & Reliable Billing"
            copy="CamStore POS brings with product search, barcode scanning, discount, GST and multiple payment platform."
          />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', marginTop: '20px' }}>
            <ul className="cs-checks cs-checks--single" style={{ flex: 1 }}>
              {billingPoints.map((p) => <li key={p}><CheckCircle2 aria-hidden="true" />{p}</li>)}
            </ul>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <img
                src={CAMSTORE_IMAGES.scannerPrinter}
                alt="Handheld barcode scanner in its stand beside a thermal receipt printer"
                style={{ width: '100%', maxWidth: '240px', mixBlendMode: 'darken' }}
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
