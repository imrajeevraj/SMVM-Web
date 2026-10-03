import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import { ArrowRight, BadgeCheck, Blocks, Code2, Headphones, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ServicesSection.css';

const homeServices = [
  {
    title: 'Web Development',
    description: 'Modern, responsive, and high-performance websites built to strengthen your online presence and support business growth.',
    features: ['Responsive website design', 'Business & corporate websites', 'E-commerce development', 'Performance and SEO fundamentals'],
    image: '/images/services/web-development-home.png',
    accent: '22 119 255',
    Icon: Code2,
  },
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed around your workflows, helping streamline operations, improve productivity, and support growth.',
    features: ['Business management systems', 'Inventory & billing workflows', 'POS & administrative systems', 'API & database integration'],
    image: '/images/services/custom-software-development-home.png',
    accent: '142 70 242',
    Icon: Blocks,
  },
  {
    title: 'Mobile & Android App Development',
    description: 'Feature-rich mobile applications that help you connect with customers, simplify daily operations, and extend digital services.',
    features: ['Native Android applications', 'Cross-platform mobile apps', 'API integration', 'Testing & deployment support'],
    image: '/images/services/mobile-app-development-home.png',
    accent: '5 190 151',
    Icon: Smartphone,
  },
  {
    title: 'Consulting & Support',
    description: 'Practical technical guidance, implementation assistance, and ongoing support to keep your technology useful and reliable.',
    features: ['Technical consultation', 'Implementation guidance', 'Troubleshooting & maintenance', 'Updates & ongoing support'],
    image: '/images/services/consulting-support-home.png',
    accent: '255 122 20',
    Icon: Headphones,
  },
] as const;

export function ServicesSection() {
  return (
    <section id="services" className="home-services scroll-mt-20" aria-labelledby="home-services-title">
      <div className="home-services__grid-pattern" aria-hidden="true" />
      <div className="home-services__dots" aria-hidden="true" />

      <div className="home-services__shell">
        <header className="home-services__heading">
          <div>
            <p className="home-services__eyebrow">What we offer <span /></p>
            <h2 id="home-services-title">Our <span>Services</span></h2>
            <p className="home-services__intro">Practical, scalable, and reliable technology services tailored to your business goals.</p>
          </div>
          <p className="home-services__side-copy">We combine technical expertise with thoughtful delivery to build useful solutions around real business needs.</p>
        </header>

        <div className="home-services__cards">
          {homeServices.map((service, index) => {
            const Icon = service.Icon;
            const serviceSlug = service.title.toLowerCase().replace(/&/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

            return (
              <motion.article
                key={service.title}
                id={`service-${serviceSlug}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.07, duration: 0.46 }}
                className="home-service-card"
                style={{ '--service-rgb': service.accent } as CSSProperties}
              >
                <div className="home-service-card__visual">
                  <span className="home-service-card__icon" aria-hidden="true"><Icon /></span>
                  <img src={service.image} alt={`${service.title} illustration`} loading="lazy" decoding="async" />
                </div>

                <div className="home-service-card__body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.features.map((feature) => (
                      <li key={feature}><BadgeCheck aria-hidden="true" />{feature}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className="home-service-card__cta" aria-label={`Explore ${service.title}`}>
                    <span>Explore {service.title}</span>
                    <ArrowRight aria-hidden="true" />
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
