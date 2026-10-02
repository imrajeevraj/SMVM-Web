import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '@/data/site';

export function ProductGrid() {
  return (
    <section className="products-page-section products-catalog" id="product-catalog" aria-labelledby="product-catalog-title">
      <div className="products-page-shell">
        <div className="products-section-heading">
          <div>
            <p className="products-page-eyebrow">Explore our range</p>
            <h2 id="product-catalog-title">Choose the right product for your workflow</h2>
            <p>Four focused solutions, each shaped around a clear type of business.</p>
          </div>
          <a className="products-text-link" href="#product-comparison">Compare all products <ArrowRight aria-hidden="true" /></a>
        </div>

        <div className="products-catalog-grid">
          {products.map((product, index) => {
            const Icon = product.icon;
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
                <h3>{product.name}</h3>
                <p className="products-card-audience">{product.audience}</p>
                <p className="products-card-description">{product.description}</p>
                <div className="products-card-art">
                  <img src={product.image} alt={`${product.name} interface and compatible devices`} loading="lazy" />
                </div>
                <Link className="products-card-link" to={`/products/${product.slug}`}>
                  Explore {product.name} <ArrowRight aria-hidden="true" />
                </Link>
                <ul className="products-card-features" aria-label={`${product.name} highlights`}>
                  {product.features.map((feature) => (
                    <li key={feature}><CheckCircle2 aria-hidden="true" /> {feature}</li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
