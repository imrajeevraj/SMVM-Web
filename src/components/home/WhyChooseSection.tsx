import { motion } from 'framer-motion';
import { reasons } from '@/data/site';
import { SectionHeading } from './SectionHeading';

export function WhyChooseSection() {
  return (
    <section className="section-space bg-background">
      <div className="site-container">
        <SectionHeading eyebrow="Why SMVM" title="Software shaped around the way business works" description="A clear, practical approach to products and services that need to remain useful as your business changes." />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div key={reason.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="relative border-l border-border pl-6">
                <span className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-brand"><Icon className="h-6 w-6" /></span>
                <h3 className="font-bold text-text">{reason.title}</h3>
                <p className="mt-3 text-base leading-7 text-text-muted">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

