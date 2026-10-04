import { CheckCircle2 } from 'lucide-react';
import { CAMSTORE_IMAGES } from '@/data/camstore';
import { AppScreen } from './screens';
import { BrowserFrame, Reveal, SectionHead } from './shared';

const billingPoints = [
  'Quick product search',
  'Barcode scanner support',
  'Discounts & GST handled automatically',
  'Multiple payment options',
  'Thermal & PDF invoice printing',
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
            eyebrow="POS Billing"
            title="Fast, Simple & Reliable Billing"
            copy="Process camera-store sales quickly with product search, barcode scanning, discounts, GST, and multiple payment options."
          />
          <ul className="cs-checks cs-checks--single">
            {billingPoints.map((p) => <li key={p}><CheckCircle2 aria-hidden="true" />{p}</li>)}
          </ul>
          <figure className="cs-photo cs-photo--light">
            <img
              src={CAMSTORE_IMAGES.scannerPrinter}
              alt="Handheld barcode scanner in its stand beside a thermal receipt printer"
              width={1200}
              height={896}
              loading="lazy"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
