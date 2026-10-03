import { motion } from 'framer-motion';
import { 
  AppWindow, 
  BarChart3, 
  Layers3, 
  List, 
  MousePointer2, 
  RefreshCw, 
  ShieldCheck, 
  SquareStack,
  ArrowRight
} from 'lucide-react';

const benefits = [
  {
    title: 'Easy to use',
    description: 'Modern and intuitive interfaces.',
    icon: MousePointer2,
    bgIcon: AppWindow,
    color: '30, 136, 229',
  },
  {
    title: 'Reliable performance',
    description: 'Stable and secure technology.',
    icon: ShieldCheck,
    bgIcon: SquareStack,
    color: '32, 193, 119',
  },
  {
    title: 'Scalable solutions',
    description: 'Grow with your business.',
    icon: Layers3,
    bgIcon: BarChart3,
    color: '154, 82, 255',
  },
  {
    title: 'Continuous updates',
    description: 'Regular improvements and new features.',
    icon: RefreshCw,
    bgIcon: List,
    color: '255, 140, 20',
  },
];

export function ProductBenefits() {
  return (
    <section className="products-page-section products-benefits" aria-labelledby="products-benefits-title">
      <div className="products-page-shell">
        <div className="products-section-heading products-section-heading-centered">
          <div>
            <div className="products-page-eyebrow-wrapper">
              <span className="eyebrow-line" aria-hidden="true" />
              <p className="products-page-eyebrow">Why choose our products</p>
              <span className="eyebrow-line" aria-hidden="true" />
            </div>
            <h2 id="products-benefits-title">
              Built for real <span className="benefit-text-gradient">business needs</span>
            </h2>
            <p>Our products are designed with a focus on simplicity, reliability, and long-term growth.</p>
          </div>
        </div>
        <div className="products-benefit-grid">
          {benefits.map(({ title, description, icon: Icon, bgIcon: BgIcon, color }, index) => (
            <motion.article
              className="products-benefit-card"
              key={title}
              style={{ '--benefit-rgb': color } as React.CSSProperties}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="benefit-card-visuals">
                <div className="benefit-icon-main">
                  <Icon aria-hidden="true" strokeWidth={2.5} />
                </div>
                <div className="benefit-icon-bg">
                  <BgIcon aria-hidden="true" strokeWidth={1.5} />
                </div>
              </div>
              <div className="benefit-card-content">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <div className="benefit-card-arrow" aria-hidden="true">
                <ArrowRight size={18} strokeWidth={2.5} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
