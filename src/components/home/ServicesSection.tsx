import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '@/data/site';
import { SectionHeading } from './SectionHeading';

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-surface py-14 scroll-mt-20 sm:py-16 lg:py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="site-container">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="What we do"
            title="Beyond products — complete software solutions"
            description="From the first idea to an evolving digital system, we help businesses turn technology into useful, well-designed tools."
          />
          <Link to="/contact" className="button-outline w-fit">Discuss your project <ArrowUpRight className="h-4 w-4" /></Link>
        </div>

        <div className="mt-9 grid gap-px overflow-hidden rounded-[24px] border border-border bg-border sm:grid-cols-2 xl:grid-cols-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="service-card group"
              >
                <span className="service-icon"><Icon className="h-6 w-6" /></span>
                <h3 className="mt-5 text-base font-bold text-text">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-text-muted">{service.description}</p>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-brand" aria-label={`Discuss ${service.title}`}>
                  Discuss this service <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

