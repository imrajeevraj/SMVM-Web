import { AppScreen } from './screens';
import { BrowserFrame, Reveal, SectionHead } from './shared';

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

        </Reveal>

        <Reveal className="cs-two__media" delay={0.05}>
          <BrowserFrame title="CamStore POS — Services">
            <AppScreen id="services" />
          </BrowserFrame>
        </Reveal>
      </div></div>
  );
}
