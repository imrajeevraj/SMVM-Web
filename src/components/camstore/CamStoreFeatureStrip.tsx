import { featureStrip } from '@/data/camstore';
import { Reveal } from './shared';

export function CamStoreFeatureStrip() {
  return (
    <section id="camstore-features" className="cs-section cs-section--tight" aria-label="CamStore POS at a glance">
      <div className="site-container">
        <Reveal>
          <ul className="cs-strip" style={{ gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
            {featureStrip.map(({ title, copy, icon: Icon, accent }) => (
              <li key={title} className="cs-strip__item" style={{ alignItems: 'center', textAlign: 'center', border: 'none', background: 'transparent', padding: '10px 0', minHeight: 'auto' }}>
                <span className="cs-icon" style={{ ...(accent ? { color: accent, background: `${accent}1A`, border: 'none', width: '56px', height: '56px', borderRadius: '16px' } : {}), marginBottom: '16px' }}><Icon aria-hidden="true" style={{ width: '28px', height: '28px' }} /></span>
                <h3 style={{ fontSize: '15px', marginBottom: '6px' }}>{title}</h3>
                <p style={{ fontSize: '13px' }}>{copy}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
