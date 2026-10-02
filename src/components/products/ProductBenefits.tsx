import { motion } from 'framer-motion';
import { Layers3, MousePointer2, RefreshCw, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    title: 'Simple to adopt',
    description: 'Clear interfaces help teams get comfortable with everyday tasks.',
    icon: MousePointer2,
  },
  {
    title: 'Reliable by design',
    description: 'Thoughtful workflows keep important business operations organised.',
    icon: ShieldCheck,
  },
  {
    title: 'Built to scale',
    description: 'Choose a focused solution now and expand as your requirements grow.',
    icon: Layers3,
  },
  {
    title: 'Practical support',
    description: 'Get guidance for product selection, onboarding, and evolving needs.',
    icon: RefreshCw,
  },
];

export function ProductBenefits() {
  return (
    <section className="products-page-section products-benefits" aria-labelledby="products-benefits-title">
      <div className="products-page-shell">
        <div className="products-section-heading products-section-heading-centered">
          <div>
            <p className="products-page-eyebrow">Why choose SMVM</p>
            <h2 id="products-benefits-title">Software that works around your business</h2>
            <p>Focused product experiences, practical capabilities, and room to grow.</p>
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
