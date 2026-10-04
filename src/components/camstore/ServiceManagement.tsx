import { serviceBadges } from '@/data/camstore';
import { AppScreen, Badge } from './screens';
import { BrowserFrame, Reveal, SectionHead } from './shared';

const tone = { Pending: 'amber', 'In Progress': 'blue', Completed: 'green' } as const;

export function ServiceManagement() {
  return (
    <div aria-labelledby="cs-service-title" style={{ width: "100%" }}>
      <div>
        <Reveal className="cs-two__copy">
          <SectionHead
            id="cs-service-title"
            title="Service Management"
            copy="Keep camera repairs and service requests organized."
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
      </div></div>
  );
}
