import { whyCards } from '@/data/camstore';
import { Reveal, SectionHead } from './shared';

export function WhyCamStore() {
  return (
    <section className="cs-section cs-section--alt" aria-labelledby="cs-why-title">
      <div className="site-container">
        <Reveal>
          <SectionHead id="cs-why-title" align="center" eyebrow="Why Choose Us" title="Why CamStore POS?" />
        </Reveal>
        <Reveal delay={0.05}>
          <ul className="cs-why">
            {whyCards.map(({ number, title, copy, icon: Icon }) => (
              <li key={title} className="cs-why__card">
                <div className="cs-why__top"><span className="cs-icon cs-icon--sm"><Icon aria-hidden="true" /></span><em>{number}</em></div>
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
