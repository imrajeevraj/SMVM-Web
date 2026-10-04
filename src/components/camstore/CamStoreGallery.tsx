import { useRef, useState, type KeyboardEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryScreens } from '@/data/camstore';
import { AppScreen, type ScreenId } from './screens';
import { BrowserFrame, Reveal, SectionHead } from './shared';

const blurbs: Record<string, string> = {
  dashboard: 'Today’s sales, orders, low stock and top sellers at a glance.',
  billing: 'Scan or search products, apply discounts and GST, and take payment.',
  inventory: 'Every camera, lens and accessory with stock, price and status.',
  products: 'Full product records with SKU, HSN, GST, supplier and warranty.',
  customers: 'Customer history, repeat buyers and lifetime spend.',
  suppliers: 'Supplier contacts, purchases and balances due.',
  services: 'Repair jobs with status, expected date and assigned staff.',
  reports: 'Sales, purchase, stock, profit and service reports.',
  invoices: 'Print, download or share a GST tax invoice.',
};

export function CamStoreGallery() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const count = galleryScreens.length;
  const current = galleryScreens[active];

  const go = (index: number, focus = false) => {
    const next = (index + count) % count;
    setActive(next);
    if (focus) tabRefs.current[next]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') { event.preventDefault(); go(active + 1, true); }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') { event.preventDefault(); go(active - 1, true); }
    if (event.key === 'Home') { event.preventDefault(); go(0, true); }
    if (event.key === 'End') { event.preventDefault(); go(count - 1, true); }
  };

  return (
    <section id="camstore-gallery" className="cs-section cs-section--alt" aria-labelledby="cs-gallery-title">
      <div className="site-container">
        <Reveal>
          <SectionHead
            id="cs-gallery-title"
            align="center"
            eyebrow="Product Tour"
            title="See CamStore POS in Action"
            copy="Nine screens, one consistent workspace. Choose a screen to explore it."
          />
        </Reveal>

        <Reveal delay={0.05} className="cs-gallery">
          <div role="tablist" aria-label="CamStore POS screens" className="cs-gallery__tabs">
            {galleryScreens.map(({ id, number, title, icon: Icon }, i) => (
              <button
                key={id}
                ref={(el) => { tabRefs.current[i] = el; }}
                type="button"
                role="tab"
                id={`cs-tab-${id}`}
                aria-selected={i === active}
                aria-controls="cs-gallery-panel"
                tabIndex={i === active ? 0 : -1}
                className="cs-gallery__tab"
                onClick={() => setActive(i)}
                onKeyDown={onKeyDown}
              >
                <Icon aria-hidden="true" />
                <span><small>{number}</small>{title}</span>
              </button>
            ))}
          </div>

          <div id="cs-gallery-panel" role="tabpanel" aria-labelledby={`cs-tab-${current.id}`} className="cs-gallery__panel">
            <BrowserFrame title={`CamStore POS — ${current.title}`}>
              <AppScreen id={current.id as ScreenId} />
            </BrowserFrame>
            <div className="cs-gallery__caption">
              <p><b>{current.number} · {current.title}</b>{blurbs[current.id]}</p>
              <div className="cs-gallery__nav">
                <button type="button" aria-label="Previous screen" onClick={() => go(active - 1)}><ChevronLeft /></button>
                <span aria-live="polite">{current.number} / {String(count).padStart(2, '0')}</span>
                <button type="button" aria-label="Next screen" onClick={() => go(active + 1)}><ChevronRight /></button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
