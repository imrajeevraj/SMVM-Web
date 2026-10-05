import { Camera, ChevronRight, Headphones, PackageCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CAMSTORE_CONTACT_PATH, CAMSTORE_IMAGES } from '@/data/camstore';

const heroBenefits = [
  { title: 'Easy to Use', icon: Zap, tone: 'green' },
  { title: 'Complete Store Management', icon: PackageCheck, tone: 'violet' },
  { title: 'Build for Camera Retails', icon: Camera, tone: 'orange' },
  { title: 'Reliable Support', icon: Headphones, tone: 'blue' },
] as const;

type HeroBenefit = (typeof heroBenefits)[number];

function FeatureCard({ title, icon: Icon, tone }: HeroBenefit) {
  return (
    <li className="cs-hero__feature-card">
      <span className={`cs-hero__benefit-icon cs-hero__benefit-icon--${tone}`}>
        <Icon aria-hidden="true" />
      </span>
      <b>{title}</b>
    </li>
  );
}

export function CamStoreHero() {
  return (
    <section className="cs-hero" aria-labelledby="camstore-title">
      <div className="cs-hero__ribbons" aria-hidden="true" />

      <nav className="cs-crumbs" aria-label="Breadcrumb">
        <ol>
          <li><Link to="/">Home</Link></li>
          <li><ChevronRight aria-hidden="true" /><Link to="/products">Products</Link></li>
          <li aria-current="page"><ChevronRight aria-hidden="true" /><span>CamStore POS</span></li>
        </ol>
      </nav>

      <div className="cs-hero__layout">
        <div className="cs-hero__copy">
          <span className="cs-eyebrow"><Camera aria-hidden="true" /> Camera Store Management Software</span>
          <h1 id="camstore-title">CamStore <span>POS</span></h1>
          <p className="cs-hero__sub">Complete POS &amp; Inventory Solution<br />for <strong>Camera Stores</strong></p>
          <p className="cs-hero__lead">
            <strong>Manage cameras, lenses, accessories and services with fast billing, real-time inventory,
            repair tracking and detailed reports—all in one place.</strong>
          </p>

          <div className="cs-hero__actions">
            <Link to={CAMSTORE_CONTACT_PATH} className="button-primary">Download Now</Link>
            <Link to="/contact" className="button-outline">
              <Headphones aria-hidden="true" /> Contact Us
            </Link>
          </div>
        </div>

        <div className="cs-hero__visual">
          <img
            src={CAMSTORE_IMAGES.hero}
            alt="CamStore POS dark dashboard displayed on a laptop beside a professional camera, lens, memory card and camera bag"
            width={1536}
            height={1024}
          />
        </div>
      </div>

      <ul className="cs-hero__benefits" aria-label="CamStore POS benefits">
        {heroBenefits.map((benefit) => <FeatureCard key={benefit.title} {...benefit} />)}
      </ul>
    </section>
  );
}
