import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '@/data/site';
import { SectionHeading } from './SectionHeading';

export function ProductsSection() {
  return (
    <section id="products" className="overflow-hidden bg-background py-14 scroll-mt-24 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <SectionHeading align="left" eyebrow="Our products" title="POS solutions for every business" description="Powerful, easy-to-use and future-ready POS software tailored for your business needs." />
          <Link to="/products" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-brand">View all products <ArrowRight className="h-4 w-4" /></Link>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
                  <div className="relative flex items-center gap-3 pr-20">
                    <div className="flex items-center gap-3">
                      <span className="product-icon"><Icon className="h-6 w-6" /></span>
                      <h3 className="text-xl font-extrabold tracking-tight text-text">{product.name}</h3>
                    </div>
                    <span className="product-badge">{product.tag}</span>
                  </div>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.1em] text-brand">{product.audience}</p>

                  <div className="product-card-body">
                    <p className="product-card-copy">{product.description}</p>
                    <div className="product-card-media product-card-media-cutout">
                      <img src={product.image} alt={`${product.name} software workspace`} loading="lazy" />
                    </div>
                  </div>

                  <div className="mt-auto flex items-center gap-3 pt-3">
                    <Link to={`/products/${product.slug}`} className="product-card-action" aria-label={`Explore ${product.name}`}>
                      Explore {product.name} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                  <div className="product-feature-strip">
                    {product.features.map((feature) => <span key={feature}><CheckCircle2 className="h-3.5 w-3.5" />{feature}</span>)}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

