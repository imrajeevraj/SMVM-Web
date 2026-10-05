import { Camera, ChevronRight, Headphones, PackageCheck, Play, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CAMSTORE_CONTACT_PATH, CAMSTORE_DEMO_URL, CAMSTORE_IMAGES, trustIndicators } from '@/data/camstore';
import { scrollToId } from './shared';

const heroBenefits = [
  { title: 'Easy to Use', copy: 'Clean, simple interface', icon: Zap, tone: 'green' },
  { title: 'Complete Store Management', copy: 'Sales, stock & service', icon: PackageCheck, tone: 'violet' },
  { title: 'Built for Camera Retailers', copy: 'Cameras, lenses & more', icon: Camera, tone: 'orange' },
  { title: 'Reliable Support', copy: 'Help when you need it', icon: Headphones, tone: 'blue' },
] as const;

export function CamStoreHero() {
  const watchDemo = () => {
    if (CAMSTORE_DEMO_URL) window.open(CAMSTORE_DEMO_URL, '_blank', 'noopener,noreferrer');
    else scrollToId('camstore-gallery');
  };

  return (
    <section className="cs-hero" aria-labelledby="camstore-title">
      <div className="site-container">
        <nav className="cs-crumbs" aria-label="Breadcrumb">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li><ChevronRight aria-hidden="true" /><Link to="/products">Products</Link></li>
            <li aria-current="page"><ChevronRight aria-hidden="true" /><span>CamStore POS</span></li>
          </ol>
        </nav>

        <div className="cs-hero__card">
          <div className="cs-hero__ribbons" aria-hidden="true" />

          <div className="cs-hero__layout">
            <div className="cs-hero__copy">
              <span className="cs-eyebrow"><Camera aria-hidden="true" /> Camera Store Management Software</span>
              <h1 id="camstore-title">CamStore <span>POS</span></h1>
              <p className="cs-hero__sub">Complete POS &amp; Inventory Solution<br />for <strong>Camera Stores</strong></p>
              <p className="cs-hero__lead">
                Manage cameras, lenses, accessories and services with fast billing, real-time inventory,
                repair tracking and detailed reports—all in one place.
              </p>

              <div className="cs-hero__actions">
                <Link to={CAMSTORE_CONTACT_PATH} className="button-primary">Get Started Now</Link>
                <button type="button" className="button-outline" onClick={watchDemo}>
                  <Play aria-hidden="true" /> Watch Demo
                </button>
              </div>

              <ul className="cs-hero__benefits" aria-label="CamStore POS benefits">
                {heroBenefits.map((benefit) => (
                  <li key={benefit.title}>
                    <span className={`cs-hero__benefit-icon cs-hero__benefit-icon--${benefit.tone}`}>
                      <benefit.icon aria-hidden="true" />
                    </span>
                    <span><b>{benefit.title}</b><small>{benefit.copy}</small></span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="cs-hero__visual">
              <img
                src={CAMSTORE_IMAGES.hero}
                alt="CamStore POS dark dashboard displayed on a laptop beside a professional camera, lens, memory card and camera bag"
                width={1536}
                height={1024}
                fetchPriority="high"
              />
            </div>
          </div>

          <ul className="cs-trust" aria-label="CamStore POS highlights">
            {trustIndicators.map((item) => (
              <li key={item.label}>
                <item.icon aria-hidden="true" />
                <span><b>{item.value}</b><small>{item.label}</small></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
