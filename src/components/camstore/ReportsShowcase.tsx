import { reportTypes } from '@/data/camstore';
import { AppScreen } from './screens';
import { BrowserFrame, Reveal, SectionHead } from './shared';

export function ReportsShowcase() {
  return (
    <section className="cs-section" aria-labelledby="cs-reports-title">
      <div className="site-container">
        <Reveal>
          <SectionHead
            id="cs-reports-title"
            align="center"
            eyebrow="Reports & Analytics"
            title="Understand Your Business Better"
            copy="Seven focused reports turn daily sales, purchases, stock, and services into clear numbers."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <ul className="cs-tags cs-tags--center" aria-label="Available reports">
            {reportTypes.map((r) => <li key={r}>{r}</li>)}
          </ul>
        </Reveal>

        <Reveal delay={0.08} className="cs-wide cs-wide--md">
          <BrowserFrame title="CamStore POS — Reports">
            <AppScreen id="reports" />
          </BrowserFrame>
        </Reveal>
      </div>
    </section>
  );
}
