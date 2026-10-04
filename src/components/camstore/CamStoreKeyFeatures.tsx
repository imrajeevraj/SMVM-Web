import { CheckCircle2 } from 'lucide-react';
import { keyFeatureList } from '@/data/camstore';
import { AppScreen } from './screens';
import { BrowserFrame, Reveal, SectionHead } from './shared';

export function CamStoreKeyFeatures() {
  return (
    <section className="cs-section" aria-labelledby="cs-key-title">
      <div className="site-container cs-two">
        <Reveal className="cs-two__media">
          <BrowserFrame title="CamStore POS — Dashboard">
            <AppScreen id="dashboard" />
          </BrowserFrame>
        </Reveal>

        <Reveal className="cs-two__copy" delay={0.05}>
          <SectionHead
            id="cs-key-title"
            eyebrow="Key Features"
            title="Everything Your Camera Store Needs"
            copy="CamStore POS brings billing, inventory, purchasing, customers, services, and business reporting together in one powerful platform."
          />
          <ul className="cs-checks">
            {keyFeatureList.map((feature) => (
              <li key={feature}><CheckCircle2 aria-hidden="true" />{feature}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
