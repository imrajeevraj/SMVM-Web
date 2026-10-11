import type { LucideIcon } from 'lucide-react';
import { Camera, Download, Headphones, Rocket, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CAMSTORE_CONTACT_PATH, CAMSTORE_IMAGES } from '@/data/camstore';

const heroBenefits: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  { title: 'New & Growing', description: 'Built for modern camera stores.', icon: Rocket },
  { title: 'Easy Setup', description: 'Quick installation and ready to use.', icon: Zap },
  { title: '99% Secure', description: 'Your data is safe and protected.', icon: ShieldCheck },
  { title: '24/5 Expert Support', description: 'Always here to help you.', icon: Headphones },
];

function HeroBenefits() {
  return (
    <ul className="cs-hero__benefits" aria-label="CamStore POS benefits">
      {heroBenefits.map(({ title, description, icon: Icon }, index) => (
        <li className={`cs-hero__benefit cs-hero__benefit--${index + 1}`} key={title}>
          <span className="cs-hero__benefit-icon"><Icon aria-hidden="true" /></span>
          <span className="cs-hero__benefit-copy">
            <b>{title}</b>
            <span>{description}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

export function CamStoreHero() {
  return (
    <section className="cs-hero" aria-labelledby="camstore-title">
      <div className="cs-hero__inner">
        <div className="cs-hero__main">
          <div className="cs-hero__copy">
            <span className="cs-hero__badge"><Camera aria-hidden="true" /> Camera Store Management Software</span>
            <h1 id="camstore-title">CamStore <span>POS</span></h1>
            <p className="cs-hero__sub">
              Complete POS &amp; Inventory Solution
              <br />
              for <strong>Camera Stores</strong>
            </p>
            <p className="cs-hero__lead">
              Manage cameras, lenses, accessories and services with fast billing, real-time inventory, repair tracking
              and detailed reports—all in one place.
            </p>

            <div className="cs-hero__actions">
              <Link to={CAMSTORE_CONTACT_PATH} className="button-primary">
                <Download aria-hidden="true" /> Download Now
              </Link>
              <Link to="/contact" className="button-outline">
                <Headphones aria-hidden="true" /> Contact Us
              </Link>
            </div>
          </div>

          <div className="cs-hero__visual">
            <span className="cs-hero__visual-orbit" aria-hidden="true" />
            <img
              src={CAMSTORE_IMAGES.hero}
              alt="CamStore POS dashboard on a laptop alongside a camera, lenses, memory card and camera bag"
              width={1152}
              height={768}
            />
            <span className="cs-hero__callout cs-hero__callout--inventory"><Camera aria-hidden="true" /> Manage Inventory</span>
            <span className="cs-hero__callout cs-hero__callout--billing"><Zap aria-hidden="true" /> Fast Billing</span>
            <span className="cs-hero__callout cs-hero__callout--reports"><ShieldCheck aria-hidden="true" /> Detailed Reports</span>
          </div>
        </div>

        <HeroBenefits />
      </div>
    </section>
  );
}
