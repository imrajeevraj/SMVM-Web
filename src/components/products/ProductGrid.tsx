import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Package, Receipt, Users, Building2, BarChart3, ShieldCheck, HeartPulse, Pill, Calendar, LayoutDashboard, LayoutGrid, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '@/data/site';

function getFeatureIcon(featureName: string) {
  const normalized = featureName.toLowerCase();
  if (normalized.includes('inventory')) return Package;
  if (normalized.includes('billing')) return Receipt;
  if (normalized.includes('customer')) return Users;
  if (normalized.includes('multi-store')) return Building2;
  if (normalized.includes('analytics')) return BarChart3;
  if (normalized.includes('user roles')) return ShieldCheck;
  if (normalized.includes('medicine stock')) return HeartPulse;
  if (normalized.includes('batch tracking')) return Pill;
  if (normalized.includes('multi-branch')) return Building2;
  if (normalized.includes('expiry')) return Calendar;
  if (normalized.includes('reporting')) return BarChart3;
  if (normalized.includes('pos')) return LayoutDashboard;
  return LayoutGrid;
}

export function ProductGrid() {
  return (
    <section className="products-page-section products-catalog" id="product-catalog" aria-labelledby="product-catalog-title">
      <div className="products-page-shell">
        <div className="products-catalog-header">
          <div className="products-page-eyebrow-wrapper">
            <div className="eyebrow-line"></div>
            <p className="products-page-eyebrow">OUR PRODUCTS</p>
            <div className="eyebrow-line"></div>
          </div>
          
          <h2 id="product-catalog-title">Choose the right product for <span className="text-gradient">your workflow</span></h2>
          
          <div className="products-catalog-subtitle-row">
            <p>Four focused solutions, each shaped around a clear type of business.</p>
            <a className="products-compare-pill" href="#product-comparison">
              <Scale size={16} aria-hidden="true" /> Compare all products <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="products-catalog-grid">
          {products.map((product, index) => {
            const Icon = product.icon;
            
            const nameParts = product.name.split(' ');
            const lastNamePart = nameParts.pop();
            const firstParts = nameParts.join(' ');
            
            return (
              <motion.article
                className="products-catalog-card"
                key={product.slug}
                style={{ '--product-rgb': product.accent } as CSSProperties}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <div className="products-card-topline">
                  <span className="products-card-icon"><Icon aria-hidden="true" /></span>
                  <span className="products-card-tag">{product.tag}</span>
                </div>
                <h3>{firstParts} <span className="product-name-highlight">{lastNamePart}</span></h3>
                <p className="products-card-audience">{product.audience.toUpperCase()}</p>
                <p className="products-card-description">{product.description}</p>
                
                <div className="products-card-art">
                  <img src={product.image} alt={`${product.name} interface and compatible devices`} loading="lazy" />
                </div>
                
                <ul className="products-card-features-pills" aria-label={`${product.name} highlights`}>
                  {product.features.map((feature) => {
                    const FeatureIcon = getFeatureIcon(feature);
                    return (
                      <li key={feature}><FeatureIcon size={14} aria-hidden="true" /> {feature}</li>
                    );
                  })}
                </ul>

                <Link className="products-card-button" to={`/products/${product.slug}`}>
                  Explore {product.name} <ArrowRight size={16} aria-hidden="true" />
                </Link>
                
                <Link className="products-card-learn-more" to={`/products/${product.slug}`}>
                  Learn more <ExternalLink size={12} aria-hidden="true" />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
