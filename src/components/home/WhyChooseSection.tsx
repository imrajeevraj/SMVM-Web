import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { reasons } from '@/data/site';

interface WhyChooseCardProps {
  reason: (typeof reasons)[number];
  index: number;
}

function WhyChooseCard({ reason, index }: WhyChooseCardProps) {
  const Icon = reason.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className={`why-card why-card-${reason.tone} group`}
    >
      <div className="why-card-glow" aria-hidden="true" />
      <span className="why-card-icon" aria-hidden="true">
        <Icon className="h-6 w-6" />
      </span>

      <div className="why-card-visual">
        <img
          src={reason.image}
          alt={reason.imageAlt}
          loading="lazy"
          decoding="async"
          className="why-card-art"
        />
      </div>

      <div className="why-card-content">
        <h3 className="why-card-title">{reason.title}</h3>
        <p className="why-card-copy">{reason.description}</p>
        <div className="why-card-footer">
          <div className="why-card-tags" aria-label={`${reason.title} qualities`}>
            {reason.features.map((feature) => (
              <span key={feature} className="why-card-tag">{feature}</span>
            ))}
          </div>
          <Link to="/contact" className="why-card-arrow" aria-label={`Discuss ${reason.title}`}>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="why-choose-showcase scroll-mt-20" aria-labelledby="why-choose-title">
      <div className="why-choose-grid" aria-hidden="true" />
      <div className="why-choose-wave" aria-hidden="true" />

      <div className="why-choose-shell relative z-10">
        <div className="max-w-[1080px]">
          <p className="why-choose-eyebrow">
            Why choose SMVM Softwares <span aria-hidden="true" />
          </p>
          <h2 id="why-choose-title" className="why-choose-heading">
            Software shaped around<br className="hidden sm:block" /> the way <span>business works</span>
          </h2>
          <p className="why-choose-intro">
            A clear, practical approach to products and services that remain useful as your business changes.
          </p>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
          {reasons.map((reason, index) => (
            <WhyChooseCard key={reason.title} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

