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


        <Reveal className="cs-two__media" delay={0.05}>
          <BrowserFrame title="CamStore POS — Reports">
            <AppScreen id="reports" />
          </BrowserFrame>
        </Reveal>
      </div></div>
  );
}
