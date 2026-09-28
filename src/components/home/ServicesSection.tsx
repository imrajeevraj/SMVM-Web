import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '@/data/site';

export function ServicesSection() {
  return (
    <section id="services" className="services-showcase scroll-mt-20">
      <div className="services-showcase-grid" aria-hidden="true" />
      <div className="services-showcase-wave" aria-hidden="true" />

      <div className="services-shell relative z-10">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div className="max-w-[1120px]">
            <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[.24em] text-[#56b6ff]">
              What we do <span className="h-px w-10 bg-[#56b6ff]" />
            </p>
            <h2 className="services-heading mt-4 max-w-[1120px] text-balance text-4xl font-extrabold leading-[1.04] tracking-[-.045em] sm:text-5xl xl:text-[58px]">
              Beyond products — complete <span className="services-gradient-title">software solutions</span>
            </h2>
            <p className="services-intro mt-4 max-w-[1050px] text-base leading-7 sm:text-lg">
              From the first idea to an evolving digital system, we help businesses turn technology into useful, well-designed tools.
            </p>
          </div>

          <Link to="/contact" className="services-project-button">
            Discuss your project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: index * 0.07, duration: 0.46 }}
                className="service-card group"
                style={{ '--service-rgb': service.accent } as CSSProperties}
              >
                <div className="service-card-visual">
                  <span className="service-icon-badge"><Icon className="h-6 w-6" /></span>
                  <img
                    src={service.image}
                    alt={`${service.title} technology illustration`}
                    loading="lazy"
                    decoding="async"
                    className={`service-card-art service-card-art-${service.tone}`}
                    style={{ objectFit: service.artMode }}
                  />
                </div>

                <div className="service-card-content">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="service-card-title text-[17px] font-extrabold leading-[1.25]">{service.title}</h3>
                    <Link to="/contact" className="service-card-arrow" aria-label={`Discuss ${service.title}`}>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <p className="service-card-copy mt-2.5 text-[13px] leading-[1.55]">{service.description}</p>
                  <div className="mt-auto flex flex-nowrap gap-1.5 pt-5">
                    {service.features.map((feature) => <span key={feature} className="service-chip">{feature}</span>)}
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

