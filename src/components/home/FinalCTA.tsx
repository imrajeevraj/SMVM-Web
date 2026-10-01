import { ArrowRight, BarChart3, Box, Mail, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FinalCTA() {
  return (
    <section id="start-conversation" className="scroll-mt-24 bg-background px-4 pb-16 sm:px-6 sm:pb-20">
      <div className="cta-panel cta-showcase-panel mx-auto max-w-[1240px] overflow-hidden rounded-[28px]">
        <div className="cta-grid" />
        <span className="cta-aurora cta-aurora-one" aria-hidden="true" />
        <span className="cta-aurora cta-aurora-two" aria-hidden="true" />

        <div className="cta-showcase-grid">
          <div className="cta-showcase-copy">
            <p className="cta-eyebrow">Start a conversation <span aria-hidden="true" /></p>
            <h2>Let&apos;s build something <span>smarter</span></h2>
            <p>From POS systems to custom software, we&apos;re here to help your business grow with technology.</p>
            <div className="cta-actions">
              <Link to="/contact" className="cta-action cta-action-primary"><Mail className="h-5 w-5" /> Contact Us <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/products" className="cta-action cta-action-secondary">Explore Products <ArrowRight className="h-5 w-5" /></Link>
            </div>
          </div>

          <div className="cta-visual-stage">
            <span className="cta-floating-icon cta-floating-chart" aria-hidden="true"><BarChart3 /></span>
            <span className="cta-floating-icon cta-floating-product" aria-hidden="true"><Box /></span>
            <span className="cta-floating-icon cta-floating-cart" aria-hidden="true"><ShoppingCart /></span>
            <img src="/images/products/cambill-pos-card.png" alt="CamBill POS workspace across desktop, laptop, tablet, and mobile devices" className="cta-product-art" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

