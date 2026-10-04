import type { CSSProperties } from 'react';
import { Briefcase, CheckCircle2, Mail, MapPin, MessageSquareText, Phone, Sparkles } from 'lucide-react';
import { contactConfig } from '@/config/contact';

const benefits = [
  { label: 'Business-first guidance', icon: Briefcase, accent: '22 119 255' },
  { label: 'Personal consultation', icon: MessageSquareText, accent: '126 76 255' },
  { label: 'Clear next steps', icon: CheckCircle2, accent: '0 187 171' },
] as const;

export function ContactHero() {
  const scrollToForm = () => document.querySelector('#project-enquiry')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <section className="contact-hero" aria-labelledby="contact-hero-title">
      <div className="contact-hero__grid" aria-hidden="true" />
      <div className="site-container contact-hero__layout">
        <div className="contact-hero__copy">
          <p className="contact-eyebrow"><Sparkles aria-hidden="true" /> Start a conversation</p>
          <h1 id="contact-hero-title">Let&apos;s turn your idea into <span>working software.</span></h1>
          <p className="contact-hero__lead">Tell us what you want to improve, build, or simplify. We&apos;ll help you understand the right product, service, and practical next step for your business.</p>

          <div className="contact-hero__actions">
            <button type="button" onClick={scrollToForm} className="contact-button contact-button--primary">
              <MessageSquareText aria-hidden="true" /> Discuss your project
            </button>
            <a href={`mailto:${contactConfig.email}`} className="contact-button contact-button--secondary">
              <Mail aria-hidden="true" /> Email our team
            </a>
          </div>

          <div className="contact-hero__benefits" aria-label="What to expect">
            {benefits.map(({ label, icon: Icon, accent }) => (
              <div key={label} style={{ '--contact-accent': accent } as CSSProperties}>
                <span><Icon aria-hidden="true" /></span>
                <strong>{label}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-hero__visual">
          <div className="contact-hero__halo" aria-hidden="true" />
          <div className="contact-hero__image-frame">
            <img src="/images/contact/contact-hero.png" alt="SMVM technology consultant ready to discuss a software project" fetchPriority="high" />
          </div>

          <div className="contact-hero__float contact-hero__float--email">
            <span><Mail aria-hidden="true" /></span>
            <div><small>Email us</small><strong>{contactConfig.email}</strong></div>
          </div>
          <div className="contact-hero__float contact-hero__float--phone">
            <span><Phone aria-hidden="true" /></span>
            <div><small>Call our team</small><strong>{contactConfig.phone.display}</strong></div>
          </div>
          <div className="contact-hero__float contact-hero__float--office">
            <span><MapPin aria-hidden="true" /></span>
            <div><small>Our office</small><strong>{contactConfig.office.label}</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}
