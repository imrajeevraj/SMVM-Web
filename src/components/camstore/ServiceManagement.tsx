import { serviceBadges } from '@/data/camstore';
import { AppScreen, Badge } from './screens';
import { BrowserFrame, Reveal, SectionHead } from './shared';

const tone = { Pending: 'amber', 'In Progress': 'blue', Completed: 'green' } as const;

export function ServiceManagement() {
  return (
    <section className="cs-section cs-section--alt" aria-labelledby="cs-service-title">
      <div className="site-container cs-two cs-two--media-wide">
        <Reveal className="cs-two__copy">
          <SectionHead
            id="cs-service-title"
            eyebrow="Service & Repairs"
            title="Keep Camera Services Organized"
            copy="Track camera and lens repairs, service requests, customer history, and service status from one place."
          />
          <ul className="cs-statuses" aria-label="Service statuses">
            {serviceBadges.map((s) => (
              <li key={s}><Badge tone={tone[s]}>{s}</Badge></li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="cs-two__media" delay={0.05}>
          <BrowserFrame title="CamStore POS — Services">
            <AppScreen id="services" />
          </BrowserFrame>
        </Reveal>
      </div>
    </section>
  );
}
