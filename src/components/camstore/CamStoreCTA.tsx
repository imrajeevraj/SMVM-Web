import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CAMSTORE_CONTACT_PATH } from '@/data/camstore';
import { Reveal } from './shared';

export function CamStoreCTA() {
  return (
    <section className="cs-section cs-section--cta" aria-labelledby="cs-cta-title">
      <div className="site-container">
        <Reveal>
          <div className="cs-cta">
            <div className="cs-cta__copy">
              <h2 id="cs-cta-title">Ready to Upgrade Your Camera Store?</h2>
              <p>Manage inventory, billing, customers, purchases, services, and reports with CamStore POS.</p>
              <div className="cs-cta__actions">
                <Link to={CAMSTORE_CONTACT_PATH} className="button-light">Get Started <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
                <Link to="/contact" className="button-secondary-dark">Contact Us <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
