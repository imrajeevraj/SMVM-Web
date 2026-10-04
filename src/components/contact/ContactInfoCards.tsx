import type { CSSProperties } from 'react';
import { Clock3, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { contactConfig } from '@/config/contact';

const cards = [
  {
    title: 'Email our team',
    description: 'Best for project briefs, product enquiries, and detailed requirements.',
    value: contactConfig.email,
    href: `mailto:${contactConfig.email}`,
    action: 'Write an email',
    icon: Mail,
    accent: '22 119 255',
  },
  {
    title: 'Call us directly',
    description: 'Speak with our team when you need a quick conversation about your needs.',
    value: contactConfig.phone.display,
    href: `tel:${contactConfig.phone.dial}`,
    action: 'Call now',
    icon: Phone,
    accent: '126 76 255',
  },
  {
    title: 'Visit our office',
    description: 'Find our location and plan an in-person discussion with the SMVM team.',
    value: contactConfig.office.label,
    href: contactConfig.office.mapUrl,
    action: 'Open map',
    icon: MapPin,
    accent: '0 187 171',
    external: true,
  },
  {
    title: 'Business hours',
    description: 'Reach out during business hours for project and product conversations.',
    value: contactConfig.hours,
    href: '#project-enquiry',
    action: 'Send an enquiry',
    icon: Clock3,
    accent: '255 133 31',
  },
] as const;

export function ContactInfoCards() {
  return (
    <section className="contact-details" aria-labelledby="contact-details-title">
      <div className="site-container">
        <div className="contact-details__heading">
          <div>
            <p className="contact-eyebrow">Contact details</p>
            <h2 id="contact-details-title">Choose the easiest way to <span>reach us.</span></h2>
          </div>
          <p>Whether you already have a detailed brief or only an early idea, start with the channel that feels most convenient.</p>
        </div>

        <div className="contact-details__grid">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className="contact-detail-card" style={{ '--contact-accent': card.accent } as CSSProperties}>
                <div className="contact-detail-card__top">
                  <span className="contact-detail-card__icon"><Icon aria-hidden="true" /></span>
                  <span className="contact-detail-card__number">0{index + 1}</span>
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <strong>{card.value}</strong>
                <a href={card.href} target={'external' in card && card.external ? '_blank' : undefined} rel={'external' in card && card.external ? 'noreferrer' : undefined}>
                  {card.action} <ExternalLink aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
