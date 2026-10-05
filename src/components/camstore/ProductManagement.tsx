
import { Reveal, SectionHead } from './shared';

export function ProductManagement() {
  return (
    <section className="cs-section cs-section--alt" aria-labelledby="cs-products-title">
      <div className="site-container">
        <Reveal>
          <SectionHead
            id="cs-products-title"
            align="center"
            title="Manage Every Product With Confidence"
            copy="Organize and track your complete camera store inventory — cameras, lenses, accessories and more."
          />
        </Reveal>
        
        <Reveal delay={0.1}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', marginTop: '40px', gap: '20px' }}>
            {[
              { label: 'Cameras', image: '/images/products/camstore/category_cameras_1791132277221.jpg' },
              { label: 'Lenses', image: '/images/products/camstore/category_lenses_1791132289131.jpg' },
              { label: 'Accessories', image: '/images/products/camstore/category_accessories_1791132502561.jpg' },
              { label: 'Tripods', image: '/images/products/camstore/category_tripods_1791132302292.jpg' },
              { label: 'Bags', image: '/images/products/camstore/category_bags_1791132456436.jpg' },
              { label: 'Memory Cards', image: '/images/products/camstore/category_sdcards_1791132468687.jpg' },
              { label: 'Batteries', image: '/images/products/camstore/category_batteries_1791132479315.jpg' },
              { label: 'Other Equipment', image: '/images/products/camstore/category_other_1791132515982.jpg' },
            ].map((cat, i) => (
              <div key={cat.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '16px', overflow: 'hidden', border: i === 0 ? '4px solid #3b82f6' : '1px solid #e2e8f0', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
                  <img src={cat.image} alt={cat.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <span style={{ fontSize: '13.5px', fontWeight: '700', color: i === 0 ? '#1e293b' : '#64748b', textAlign: 'center' }}>{cat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
