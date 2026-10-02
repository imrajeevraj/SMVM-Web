import { motion } from 'framer-motion';
import { BarChart3, Cloud, Home, MousePointer2, ShieldCheck, Sparkles, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';

const trustItems = [
  { title: 'Easy to use', detail: 'Simple and intuitive', icon: MousePointer2 },
  { title: 'Reliable', detail: 'Built for your business', icon: ShieldCheck },
  { title: 'Future ready', detail: 'Always evolving', icon: Sparkles },
];

export function ProductsHero() {
  return (
    <section className="products-hero" aria-labelledby="products-page-title">
      <div className="products-page-shell">
        <nav className="products-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><Link to="/"><Home aria-hidden="true" /> Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">Products</li>
          </ol>
        </nav>

        <div className="products-hero-grid">
          <motion.div
            className="products-hero-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="products-page-eyebrow">Our products</p>
            <h1 id="products-page-title">
              Powerful solutions
              <span>for every business</span>
            </h1>
            <p className="products-hero-description">
              Modern, easy-to-use and future-ready software products designed to simplify your business operations and drive growth.
            </p>
            <div className="products-hero-actions">
              <Link className="products-button products-button-primary" to="/contact">
                Get a Quote <span aria-hidden="true">→</span>
              </Link>
              <Link className="products-button products-button-secondary" to="/contact">
                <UsersRound aria-hidden="true" /> Talk to Our Team
              </Link>
            </div>

            <div className="products-trust-row" aria-label="Product qualities">
              {trustItems.map(({ title, detail, icon: Icon }) => (
                <div className="products-trust-item" key={title}>
                  <span className="products-trust-icon"><Icon aria-hidden="true" /></span>
                  <span><strong>{title}</strong><small>{detail}</small></span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="products-hero-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            aria-label="CamStore POS shown across desktop and mobile devices with retail billing equipment"
          >
            <div className="products-hero-orbit" aria-hidden="true" />
            <div className="products-hero-chip products-hero-chip-insights">
              <span><BarChart3 aria-hidden="true" /></span>
              <span><strong>Live insights</strong><small>For better decisions</small></span>
            </div>
            <div className="products-hero-chip products-hero-chip-platform">
              <span><Cloud aria-hidden="true" /></span>
              <span><strong>One platform</strong><small>Multiple possibilities</small></span>
            </div>
            <div className="products-hero-chip products-hero-chip-secure">
              <span><ShieldCheck aria-hidden="true" /></span>
              <span><strong>Secure &amp; reliable</strong><small>Your data, our priority</small></span>
            </div>
            <div className="products-hero-analytics" aria-hidden="true"><BarChart3 /></div>
            <img
              src="/images/products/camstore-pos-card.png"
              alt="CamStore POS dashboard with desktop display, mobile device, receipt printer and barcode scanner"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
