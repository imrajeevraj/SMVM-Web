import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import { ArrowRight, BarChart3, Building2, Calendar, ExternalLink, HeartPulse, LayoutDashboard, LayoutGrid, Package, Pill, Receipt, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '@/data/site';
import { SectionHeading } from './SectionHeading';
import './ProductsSectionBackground.css';

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

export function ProductsSection() {
  return (
    <section id="products" className="product-showcase-section overflow-hidden py-14 scroll-mt-24 sm:py-16 lg:py-20">
      <span className="product-section-orbit product-section-orbit-one" aria-hidden="true" />
      <span className="product-section-orbit product-section-orbit-two" aria-hidden="true" />
      <span className="product-section-dots" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <SectionHeading align="left" eyebrow="Our products" title="POS solutions for every business" description="Powerful, easy-to-use and future-ready POS software tailored for your business needs." />
          <Link to="/products" className="home-text-action inline-flex shrink-0 items-center gap-2 text-sm font-bold text-brand">View all products <ArrowRight className="h-4 w-4" /></Link>
        </div>

        <div className="products-catalog-grid mt-9">
          {products.map((product, index) => {
            const Icon = product.icon;
            const nameParts = product.name.split(' ');
            const lastNamePart = nameParts.pop();
            const firstParts = nameParts.join(' ');

            return (
              <motion.article
                key={product.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                className="products-catalog-card"
                style={{ '--product-rgb': product.accent } as CSSProperties}
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
                    return <li key={feature}><FeatureIcon size={14} aria-hidden="true" /> {feature}</li>;
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
