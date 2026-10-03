import { ArrowRight, Clock3, Mail, MapPin, Phone } from 'lucide-react';
import { contactConfig } from '@/config/contact';

const cards = [
  {
    title: 'Email Us',
    description: 'Send us your project requirements or general enquiries.',
    value: contactConfig.email,
    href: `mailto:${contactConfig.email}`,
    action: 'Send an Email',
    icon: Mail,
    tone: 'bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-300',
  },
  {
    title: 'Call Us',
    description: 'Talk to our team about your requirements.',
    value: contactConfig.phone.display,
    href: `tel:${contactConfig.phone.dial}`,
    action: 'Call Our Team',
    icon: Phone,
    tone: 'bg-violet-100 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300',
    note: contactConfig.phone.verified ? undefined : 'Placeholder — verify before launch',
  },
  {
    title: 'Our Office',
    description: 'Find our business location and connect with our team.',
    value: contactConfig.office.label,
    href: contactConfig.office.mapUrl,
    action: 'View on Map',
    icon: MapPin,
    tone: 'bg-teal-100 text-teal-600 dark:bg-teal-500/15 dark:text-teal-300',
    external: true,
  },
  {
    title: 'Business Hours',
    description: 'Know when to reach us for enquiries and project discussions.',
    value: contactConfig.hours,
    href: '#project-enquiry',
    action: 'Get in Touch',
    icon: Clock3,
    tone: 'bg-orange-100 text-orange-600 dark:bg-orange-500/15 dark:text-orange-300',
  },
] as const;

export function ContactInfoCards() {
  return (
    <section className="site-container pb-20 sm:pb-24">
      <h2 className="sr-only">Contact information</h2>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <article key={card.title} className="group flex min-h-[310px] flex-col rounded-[24px] border border-border bg-surface p-6 shadow-[0_16px_45px_rgba(24,75,140,.07)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-brand/25 hover:shadow-[0_22px_55px_rgba(22,119,255,.12)]">
              <span className={`grid h-14 w-14 place-items-center rounded-2xl ${card.tone}`}><Icon className="h-6 w-6" /></span>
              <h3 className="mt-5 text-xl font-extrabold text-text">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-text-muted">{card.description}</p>
              <p className="mt-4 text-sm font-bold leading-6 text-brand">{card.value}</p>
              {'note' in card && card.note && <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-300">{card.note}</p>}
              <a href={card.href} target={'external' in card && card.external ? '_blank' : undefined} rel={'external' in card && card.external ? 'noreferrer' : undefined} className="mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-brand/35 px-4 py-2.5 text-xs font-bold text-brand transition-colors hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
                {card.action} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
