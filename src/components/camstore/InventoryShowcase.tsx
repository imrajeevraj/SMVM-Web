
import { AppScreen } from './screens';
import { BrowserFrame, Reveal, SectionHead } from './shared';

export function InventoryShowcase() {
  return (
    <section className="cs-section cs-section--alt" aria-labelledby="cs-inventory-title">
      <div className="site-container">
        <Reveal>
          <SectionHead
            id="cs-inventory-title"
            align="center"
            eyebrow="Inventory"
            title="Manage Every Product With Confidence"
            copy="Organize and track your complete camera-store inventory from one place."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', marginTop: '30px', gap: '20px' }}>
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
              <div key={cat.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '12px 0', border: i === 0 ? '1px solid rgb(var(--color-brand-rgb))' : '1px solid transparent', borderRadius: '12px', background: i === 0 ? 'rgba(var(--color-brand-rgb), 0.05)' : 'transparent' }}>
                <div style={{ width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={cat.image} alt={cat.label} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', mixBlendMode: 'darken' }} />
                </div>
                <span style={{ fontSize: '12.5px', fontWeight: '700', color: i === 0 ? 'rgb(var(--color-text-rgb))' : 'var(--color-text-muted)', textAlign: 'center' }}>{cat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="cs-wide">
          <BrowserFrame title="CamStore POS — Inventory">
            <AppScreen id="inventory" />
          </BrowserFrame>
        </Reveal>
      </div>
    </section>
  );
}
