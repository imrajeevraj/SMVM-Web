import { motion } from 'framer-motion';
import { reasons } from '@/data/site';
import { SectionHeading } from './SectionHeading';

export function WhyChooseSection() {
  return (
    <section className="bg-background py-14 sm:py-16">
      <div className="site-container">
        <SectionHeading align="left" eyebrow="Why choose SMVM Softwares" title="Software shaped around the way business works" description="A clear, practical approach to products and services that remain useful as your business changes." />
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div key={reason.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand/10 text-brand"><Icon className="h-5 w-5" /></span>
                <div><h3 className="font-bold text-text">{reason.title}</h3><p className="mt-2 text-sm leading-6 text-text-muted">{reason.description}</p></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

