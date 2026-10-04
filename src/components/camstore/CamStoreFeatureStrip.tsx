import { featureStrip } from '@/data/camstore';
import { Reveal } from './shared';

export function CamStoreFeatureStrip() {
  return (
    <section id="camstore-features" className="cs-section cs-section--tight" aria-label="CamStore POS at a glance">
      <div className="site-container">
        <Reveal>
          <ul className="cs-strip">
            {featureStrip.map(({ title, copy, icon: Icon }) => (
              <li key={title} className="cs-strip__item">
                <span className="cs-icon"><Icon aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
