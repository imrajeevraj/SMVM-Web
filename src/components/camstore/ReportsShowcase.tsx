import { reportTypes } from '@/data/camstore';
import { AppScreen } from './screens';
import { BrowserFrame, Reveal, SectionHead } from './shared';

export function ReportsShowcase() {
  return (
    <div aria-labelledby="cs-reports-title" style={{ width: "100%" }}>
      <div>
        <Reveal>
          <SectionHead
            id="cs-reports-title"
            title="Reports & Analytics"
            copy="Make better decisions with detailed business reports."
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
      </div></div>
  );
}
