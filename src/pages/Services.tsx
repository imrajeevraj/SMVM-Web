import { useId, useState, type CSSProperties } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Blocks,
  CalendarDays,
  ChevronDown,
  Code2,
  FileSearch,
  Globe2,
  Headphones,
  Lightbulb,
  HelpCircle,
  Palette,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  UsersRound,
  Wrench,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServicesSection } from '@/components/home/ServicesSection';
import './ServicesPage.css';

const processSteps = [
  { number: '01', title: 'Discover & Analyze', description: 'We understand your goals, workflows, requirements, and challenges.', icon: FileSearch, image: '/images/services/process-discover.png', accent: '22 119 255' },
  { number: '02', title: 'Plan & Design', description: 'We define a clear scope, technical approach, milestones, and user experience.', icon: Target, image: '/images/services/process-plan-design.png', accent: '142 70 242' },
  { number: '03', title: 'Develop & Implement', description: 'We build, integrate, and test the solution around the agreed project scope.', icon: Code2, image: '/images/services/process-develop.png', accent: '5 190 174' },
  { number: '04', title: 'Support & Grow', description: 'We assist with deployment, handover, maintenance, and future improvements as agreed.', icon: Headphones, image: '/images/services/process-support.png', accent: '255 112 20' },
] as const;

const benefits = [
  { title: 'Experienced Team', description: 'Practical technical expertise with a focus on business requirements.', icon: UsersRound, accent: '22 119 255' },
  { title: 'Client-Focused Approach', description: 'Solutions tailored to individual business needs.', icon: Sparkles, accent: '0 191 174' },
  { title: 'Reliable Support', description: 'Assistance based on the agreed service and support scope.', icon: ShieldCheck, accent: '139 69 255' },
  { title: 'Long-Term Partnership', description: 'Technology designed to adapt as business needs evolve.', icon: BarChart3, accent: '255 121 0' },
] as const;

const technologies = [
  { name: 'React', icon: Sparkles },
  { name: 'TypeScript', icon: Code2 },
  { name: 'Vite', icon: Lightbulb },
  { name: 'Node.js', icon: Blocks },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'PostCSS', icon: Wrench },
] as const;

const serviceFaqs = [
  { question: 'What services does SMVM Softwares provide?', answer: 'We provide web development, custom software development, mobile application development, consulting, and technical support services.' },
  { question: 'How do you estimate project cost and timelines?', answer: 'We evaluate your requirements, project scope, features, complexity, and delivery milestones before providing a tailored estimate.' },
  { question: 'Can you build software tailored to our business?', answer: 'Yes. We develop custom software around your business workflows, operational needs, and long-term goals.' },
  { question: 'Do you develop Android and cross-platform mobile applications?', answer: 'Yes. We develop Android applications and cross-platform mobile solutions based on your requirements and target devices.' },
  { question: 'Can you integrate our existing systems or APIs?', answer: 'Yes. Where technically feasible, we integrate existing applications, databases, payment systems, and third-party APIs.' },
  { question: 'Do you provide maintenance and technical support?', answer: 'Yes. We can provide troubleshooting, maintenance, updates, implementation assistance, and ongoing technical support according to the agreed service scope.' },
  { question: 'Can I request a consultation before starting a project?', answer: 'Yes. Contact our team to discuss your requirements, explore possible solutions, and determine the next steps for your project.' },
] as const;

const trustPoints = [
  { label: 'Reliable Solutions', icon: ShieldCheck },
  { label: 'Expert Team', icon: UsersRound },
  { label: 'On-Time Delivery', icon: CalendarDays },
  { label: 'Long-Term Support', icon: Headphones },
] as const;

const serviceBadges = [
  { label: 'Web Development', icon: Globe2, className: 'services-hero-badge-web' },
  { label: 'Custom Software', icon: Blocks, className: 'services-hero-badge-software' },
  { label: 'Mobile & Android Apps', icon: Smartphone, className: 'services-hero-badge-mobile' },
  { label: 'Consulting & Support', icon: Headphones, className: 'services-hero-badge-support' },
] as const;

export function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const idPrefix = useId();
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="services-page">
      <section className="services-page-hero" aria-labelledby="services-page-title">
        <div className="services-page-shell services-hero-layout">
          <div className="services-hero-copy">
            <p className="services-eyebrow">Our services</p>
            <h1 id="services-page-title">Technology Services for a <span>Smarter Business</span></h1>
            <p>From idea to implementation and beyond, we provide end-to-end technology services to help your business grow with confidence.</p>
            <div className="services-hero-actions">
              <Link className="services-primary-button" to="/contact">Get a Free Consultation <ArrowRight aria-hidden="true" /></Link>
              <a className="services-secondary-button" href="#services">Explore Our Services <ArrowRight aria-hidden="true" /></a>
            </div>
            <ul className="services-hero-trust" aria-label="Service commitments">
              {trustPoints.map(({ label, icon: Icon }) => <li key={label}><Icon aria-hidden="true" />{label}</li>)}
            </ul>
          </div>
          <div className="services-hero-art" aria-label="Software development and business technology illustration">
            <span className="services-hero-orbit" aria-hidden="true" />
            {serviceBadges.map(({ label, icon: Icon, className }) => <span className={`services-hero-badge ${className}`} key={label}><Icon aria-hidden="true" /><small>{label}</small></span>)}
            <img src="/images/services/web-development.png" alt="Software development workspace displayed on a laptop" />
          </div>
        </div>
      </section>

      <ServicesSection />

      <section className="services-section services-process" aria-labelledby="services-process-title">
        <div className="services-page-shell">
          <div className="services-section-heading services-process-heading"><div><p className="services-eyebrow">How we work</p><h2 id="services-process-title">Our <span>Service Process</span></h2><p>A transparent and collaborative process to deliver the right solution for your business.</p></div><p>We follow a clear and collaborative approach to understand, build, and support solutions that create real value for your business.</p></div>
          <ol className="services-process-list">
            {processSteps.map(({ number, title, description, icon: Icon, image, accent }, index) => <li key={number} style={{ '--process-rgb': accent } as CSSProperties}><article><div className="services-process-card-top"><span className="services-process-icon"><Icon aria-hidden="true" /></span><strong>{number}</strong></div><div className="services-process-visual"><img src={image} alt={`${title} process illustration`} loading="lazy" /></div><div className="services-process-copy"><h3>{title}</h3><p>{description}</p></div><span className="services-process-progress" aria-hidden="true"><span /></span></article>{index < processSteps.length - 1 && <span className="services-process-connector" aria-hidden="true"><span /><ArrowRight /></span>}</li>)}
          </ol>
        </div>
      </section>

      <section className="services-section services-why" aria-labelledby="services-why-title">
        <div className="services-page-shell">
          <div className="services-why-heading"><div><p className="services-eyebrow">Why choose SMVM Softwares</p><h2 id="services-why-title">More Than Just <span>Development</span></h2><p>We focus on long-term partnerships and deliver solutions that create real value for your business.</p></div><Link className="services-why-button" to="/contact">Talk to Our Team <ArrowRight aria-hidden="true" /></Link></div>
          <div className="services-benefit-grid">{benefits.map(({ title, description, icon: Icon, accent }) => <article key={title} style={{ '--benefit-rgb': accent } as CSSProperties}><div className="services-benefit-card-top"><span><Icon aria-hidden="true" /></span><ArrowRight aria-hidden="true" /></div><h3>{title}</h3><p>{description}</p></article>)}</div>
        </div>
      </section>

      <section className="services-section services-technologies" aria-labelledby="services-tech-title">
        <div className="services-page-shell services-tech-layout"><div><p className="services-eyebrow">Technologies we work with</p><h2 id="services-tech-title">Modern Technologies,<span>Powerful Solutions</span></h2></div><p>We use modern tools and technologies to build secure, scalable, and future-ready solutions.</p><ul>{technologies.map(({ name, icon: Icon }) => <li key={name}><span className="services-tech-icon"><Icon aria-hidden="true" /></span><span>{name}</span></li>)}</ul></div>
      </section>

      <section className="services-section services-faq" aria-labelledby="services-faq-title">
        <div className="services-page-shell services-faq-layout">
          <div className="services-faq-intro"><p className="services-eyebrow">Frequently asked questions</p><h2 id="services-faq-title">Questions about <span>our services?</span></h2><p>Find quick answers to common questions about our service offerings.</p><Link className="services-faq-team-link" to="/contact">Talk to our team <ArrowRight aria-hidden="true" /></Link><div className="services-faq-art" aria-hidden="true"><img src="/images/faq-support-illustration.png" alt="" /></div></div>
          <div className="services-faq-list">{serviceFaqs.map((faq, index) => {
            const isOpen = openFaq === index;
            const buttonId = `${idPrefix}-service-faq-button-${index}`;
            const panelId = `${idPrefix}-service-faq-panel-${index}`;
            return <article className={isOpen ? 'is-open' : ''} key={faq.question}><h3><button id={buttonId} type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenFaq(isOpen ? null : index)}><span><HelpCircle aria-hidden="true" />{faq.question}</span><ChevronDown aria-hidden="true" /></button></h3><AnimatePresence initial={false}>{isOpen && <motion.div id={panelId} role="region" aria-labelledby={buttonId} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}><p>{faq.answer}</p></motion.div>}</AnimatePresence></article>;
          })}</div>
        </div>
      </section>

      <section className="services-final-cta" aria-labelledby="services-cta-title"><div className="services-page-shell"><div><p className="services-eyebrow">Have a project in mind?</p><h2 id="services-cta-title">Let&apos;s Build Something Great Together</h2><p>Tell us about your goals, and let&apos;s discuss how the right technology can help your business move forward.</p></div><div><Link className="services-primary-button" to="/contact">Get a Free Consultation <ArrowRight aria-hidden="true" /></Link><a className="services-secondary-button" href="#services">Explore Our Services <ArrowRight aria-hidden="true" /></a></div></div></section>
    </main>
  );
}
