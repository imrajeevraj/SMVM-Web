import { motion } from 'framer-motion';
import { Layers3, MousePointer2, RefreshCw, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    title: 'Easy to use',
    description: 'Modern and intuitive interfaces.',
    icon: MousePointer2,
  },
  {
    title: 'Reliable performance',
    description: 'Stable and secure technology.',
    icon: ShieldCheck,
  },
  {
    title: 'Scalable solutions',
    description: 'Grow with your business.',
    icon: Layers3,
  },
  {
    title: 'Continuous updates',
    description: 'Regular improvements and new features.',
    icon: RefreshCw,
  },
];

export function ProductBenefits() {
  return (
    <section className="products-page-section products-benefits" aria-labelledby="products-benefits-title">
      <div className="products-page-shell">
        <div className="products-section-heading products-section-heading-centered">
          <div>
            <p className="products-page-eyebrow">Why choose our products</p>
            <h2 id="products-benefits-title">Built for real business needs</h2>
            <p>Our products are designed with a focus on simplicity, reliability, and long-term growth.</p>
          </div>
        </div>
        <div className="products-benefit-grid">
          {benefits.map(({ title, description, icon: Icon }, index) => (
            <motion.article
              className="products-benefit-card"
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <span><Icon aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
