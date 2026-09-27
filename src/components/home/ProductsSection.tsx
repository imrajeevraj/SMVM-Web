import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '@/data/site';
import { SectionHeading } from './SectionHeading';

export function ProductsSection() {
  return (
    <section id="products" className="section-space overflow-hidden bg-background scroll-mt-24">
      <div className="site-container">
        <SectionHeading
          eyebrow="Purpose-built POS"
          title="POS solutions for every business"
          description="Powerful, easy-to-use and future-ready POS software tailored for your business needs."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.article
                key={product.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                className={`product-card product-card-${product.tone} group`}
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <span className="product-icon"><Icon className="h-6 w-6" /></span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-text-muted">0{index + 1}</span>
                  </div>
                  <div className="mt-7 min-h-[125px]">
                    <h3 className="text-2xl font-extrabold tracking-tight text-text">{product.name}</h3>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-brand">{product.audience}</p>
                    <p className="mt-4 text-base leading-7 text-text-muted">{product.description}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {product.features.map((feature) => <span className="feature-chip" key={feature}>{feature}</span>)}
                  </div>

                  <Link
                    to={`/products/${product.slug}`}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-text transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                    aria-label={`Explore ${product.name}`}
                  >
                    Explore {product.name} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

