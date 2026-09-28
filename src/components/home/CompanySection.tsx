import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Check, Compass, Layers3, Store } from 'lucide-react';
import { Link } from 'react-router-dom';

const aboutBenefits = [
  'Business-focused product thinking',
  'Clear, user-friendly experiences',
  'Technology designed to evolve',
] as const;

export function CompanySection() {
  return (
    <section className="about-vision-section overflow-hidden py-14 sm:py-16 lg:py-20">
      <div className="about-vision-grid" aria-hidden="true" />
      <div className="site-container relative z-10 grid gap-5 lg:grid-cols-[1.08fr_.92fr] xl:gap-6">
        <motion.article
          id="about"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.48, ease: 'easeOut' }}
          className="about-vision-card about-panel scroll-mt-24"
        >
          <div className="about-panel-layout">
            <div className="about-product-stage" aria-label="SMVM product ecosystem across desktop, tablet, and mobile">
              <div className="about-product-orbit" aria-hidden="true" />
              <img
                src="/images/products/cambill-pos-card.png"
                alt="CamBill POS workspace across desktop, tablet, mobile, and billing hardware"
                className="about-product-art"
                loading="lazy"
                decoding="async"
              />
              <div className="about-product-note about-product-note-one">
                <Store className="h-4 w-4" aria-hidden="true" />
                <span><strong>POS products</strong><small>Practical daily workflows</small></span>
              </div>
              <div className="about-product-note about-product-note-two">
                <Layers3 className="h-4 w-4" aria-hidden="true" />
                <span><strong>Custom systems</strong><small>Built around the business</small></span>
              </div>
            </div>

            <div className="about-panel-content">
              <p className="about-vision-eyebrow">About SMVM Softwares <span aria-hidden="true" /></p>
              <h2 className="about-vision-title">
                Building a smarter digital <span>tomorrow</span>
              </h2>
              <p className="about-vision-copy">
                Modern software solutions—from focused POS products to custom systems and automation.
              </p>

              <div className="about-benefit-list" aria-label="What guides SMVM Softwares">
                {aboutBenefits.map((item) => (
                  <div key={item} className="about-benefit-item">
                    <span aria-hidden="true"><Check className="h-3.5 w-3.5" /></span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <Link to="/about" className="about-vision-button about-vision-button-primary group">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.article>

        <motion.article
          id="vision"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.48, delay: 0.08, ease: 'easeOut' }}
          className="about-vision-card vision-panel scroll-mt-24"
        >
          <div className="vision-panel-mesh" aria-hidden="true" />
          <span className="vision-icon-badge" aria-hidden="true"><Compass className="h-6 w-6" /></span>

          <div className="vision-panel-content">
            <p className="about-vision-eyebrow">Our vision <span aria-hidden="true" /></p>
            <h2 className="about-vision-title">
              Empowering businesses with innovative <span>technology</span>
            </h2>
            <p className="about-vision-copy">
              Technology as a practical engine for clearer decisions, better workflows, and sustainable growth.
            </p>
            <Link to="/vision" className="about-vision-button about-vision-button-light group">
              Explore our vision
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="vision-art-stage">
            <div className="vision-art-glow" aria-hidden="true" />
            <img
              src="/images/company/vision-growth.png"
              alt="Futuristic ascending technology pillars and arrow representing sustainable business growth"
              className="vision-growth-art"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.article>
      </div>
    </section>
  );
}
