import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '@/data/site';
import { SectionHeading } from './SectionHeading';

export function ProductsSection() {
  return (
    <section id="products" className="overflow-hidden bg-background py-14 scroll-mt-24 sm:py-16 lg:py-20">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <SectionHeading align="left" eyebrow="Our products" title="POS solutions for every business" description="Powerful, easy-to-use and future-ready POS software tailored for your business needs." />
          <Link to="/products" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-brand">View all products <ArrowRight className="h-4 w-4" /></Link>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <span className="product-icon"><Icon className="h-6 w-6" /></span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-text-muted">0{index + 1}</span>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-xl font-extrabold tracking-tight text-text">{product.name}</h3>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-brand">{product.audience}</p>
                    <p className="mt-3 text-sm leading-6 text-text-muted">{product.description}</p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.features.map((feature) => <span className="feature-chip" key={feature}>{feature}</span>)}
                  </div>

                  <div className="product-preview mt-5">
                    {product.image ? (
                      <img src={product.image} alt={`${product.name} software workspace`} loading="lazy" />
                    ) : (
                      <div className="product-preview-placeholder"><Icon className="h-12 w-12" /><span>Purpose-built medical workflow</span></div>
                    )}
                  </div>

                  <Link
                    to={`/products/${product.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-text transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
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

