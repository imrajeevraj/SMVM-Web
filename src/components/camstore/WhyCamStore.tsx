import { whyCards } from '@/data/camstore';
import { Reveal, SectionHead } from './shared';

export function WhyCamStore() {
  return (
    <section className="cs-section cs-section--alt" aria-labelledby="cs-why-title">
      <div className="site-container">
        <Reveal>
          <SectionHead id="cs-why-title" align="left" title="Why CamStore POS?" />
        </Reveal>
        <Reveal delay={0.05}>
          <ul className="cs-why">
            {whyCards.map(({ title, copy, icon: Icon, accent }) => (
              <li key={title} className="cs-why__card">
                <div className="cs-why__top"><span className="cs-icon cs-icon--sm" style={{ color: accent, backgroundColor: `${accent}1A` }}><Icon aria-hidden="true" /></span></div>
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
