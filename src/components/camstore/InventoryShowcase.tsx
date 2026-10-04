import { inventoryCategories } from '@/data/camstore';
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
          <ul className="cs-cats" aria-label="Product categories">
            {inventoryCategories.map(({ name, icon: Icon }) => (
              <li key={name}><span className="cs-icon cs-icon--sm"><Icon aria-hidden="true" /></span>{name}</li>
            ))}
          </ul>
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
