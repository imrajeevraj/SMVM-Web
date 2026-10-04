import { ArrowRight, ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CAMSTORE_DEMO_URL, CAMSTORE_IMAGES, trustIndicators } from '@/data/camstore';
import { scrollToId } from './shared';

export function CamStoreHero() {
  const watchDemo = () => {
    if (CAMSTORE_DEMO_URL) window.open(CAMSTORE_DEMO_URL, '_blank', 'noopener,noreferrer');
    else scrollToId('camstore-gallery');
  };

  return (
    <section className="cs-hero" aria-labelledby="camstore-title">
      <div className="cs-hero__bg" aria-hidden="true" />
      <div className="site-container">
        <nav className="cs-crumbs" aria-label="Breadcrumb">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li><ChevronRight aria-hidden="true" /><Link to="/products">Products</Link></li>
            <li aria-current="page"><ChevronRight aria-hidden="true" /><span>CamStore POS</span></li>
          </ol>
        </nav>

        <div className="cs-hero__layout">
          <div className="cs-hero__copy">
            <span className="cs-eyebrow">Camera Store POS Software</span>
            <h1 id="camstore-title">CamStore <span>POS</span></h1>
            <p className="cs-hero__sub">Complete POS &amp; Inventory Solution for Camera Stores</p>
            <p className="cs-hero__lead">
              CamStore POS is a modern and easy-to-use software solution designed specifically for camera stores. Manage products,
              inventory, billing, customers, purchases, services, and business reports from one powerful platform.
            </p>

            <div className="cs-hero__actions">
              <a href="#camstore-features" className="button-primary" onClick={(e) => { e.preventDefault(); scrollToId('camstore-features'); }}>
                Explore CamStore POS <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
              <button type="button" className="button-outline" onClick={watchDemo}>
                <Play aria-hidden="true" className="h-4 w-4" /> Watch Demo
              </button>
            </div>

            <ul className="cs-trust" aria-label="CamStore POS highlights">
              {trustIndicators.map((t) => (
                <li key={t.label}><b>{t.value}</b><span>{t.label}</span></li>
              ))}
            </ul>
          </div>

          <div className="cs-hero__visual">
            <img
              src={CAMSTORE_IMAGES.hero}
              alt="CamStore POS dashboard on desktop and tablet, with a camera, lenses, memory cards, barcode scanner and thermal receipt printer"
              width={1536}
              height={1024}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
