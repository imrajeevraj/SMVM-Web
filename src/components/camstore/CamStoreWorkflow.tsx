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
            eyebrow="Connected Workflow"
            title="Everything Connected in One POS"
            copy="From the first product entry to the final report, every step shares the same data."
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
