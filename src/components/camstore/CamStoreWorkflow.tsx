import { ArrowRight } from 'lucide-react';
import { Fragment } from 'react';
import { workflowSteps } from '@/data/camstore';
import { Reveal, SectionHead } from './shared';

export function CamStoreWorkflow() {
  return (
    <section className="cs-section" aria-labelledby="cs-flow-title">
      <div className="site-container">
        <Reveal>
          <SectionHead
            id="cs-flow-title"
            align="center"
            title="Everything Connected in One POS"
            copy="From products to reports, CamStore POS connects all your camera store operations together."
          />
        </Reveal>
        <Reveal delay={0.05}>
          <ol className="cs-flow">
            {workflowSteps.map(({ label, icon: Icon }, i) => (
              <Fragment key={label}>
                <li className="cs-flow__step">
                  <span className="cs-icon"><Icon aria-hidden="true" /></span>
                  <b>{label}</b>
                </li>
                {i < workflowSteps.length - 1 ? <li className="cs-flow__arrow" aria-hidden="true"><ArrowRight /></li> : null}
              </Fragment>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
