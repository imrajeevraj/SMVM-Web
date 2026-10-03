import { useId, useState, type CSSProperties } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Atom, BarChart3, Blocks, Braces, ChevronDown, Code2, Eye, FileSearch, Headphones, HelpCircle, ShieldCheck, Smartphone, Sparkles, Target, UsersRound, Waves, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '@/data/site';
import './AboutPage.css';

const aboutServices = [
  { title: 'Web Development', description: 'Modern, responsive websites and web applications designed for performance, usability, and business growth.', icon: Code2, accent: '22 119 255' },
  { title: 'Custom Software Development', description: 'Tailored business software, management systems, POS solutions, and workflow automation.', icon: Blocks, accent: '142 70 242' },
  { title: 'Mobile & Android App Development', description: 'Mobile applications that help businesses connect with customers and simplify everyday operations.', icon: Smartphone, accent: '0 191 174' },
  { title: 'Consulting & Support', description: 'Technical guidance, implementation assistance, maintenance, and ongoing software support.', icon: Headphones, accent: '255 121 0' },
] as const;

const aboutBenefits = [
  { title: 'Business-Focused Solutions', description: 'We design technology around your business needs, workflows, and goals.', icon: UsersRound, accent: '22 119 255' },
  { title: 'Thoughtful Engineering', description: 'We focus on usability, maintainability, and practical implementation.', icon: Sparkles, accent: '0 191 174' },
  { title: 'Reliable Support', description: 'We provide technical assistance according to the agreed project and support scope.', icon: ShieldCheck, accent: '139 69 255' },
  { title: 'Built for Growth', description: 'We consider scalability and future improvements when designing solutions.', icon: BarChart3, accent: '255 121 0' },
] as const;

const approachSteps = [
  { number: '01', title: 'Discover & Analyze', description: 'Understand the business goals, users, requirements, workflows, and challenges.', icon: FileSearch, image: '/images/services/process-discover.png', accent: '22 119 255' },
  { number: '02', title: 'Plan & Design', description: 'Define the project scope, user experience, technical approach, and milestones.', icon: Target, image: '/images/services/process-plan-design.png', accent: '142 70 242' },
  { number: '03', title: 'Develop & Implement', description: 'Build, integrate, test, and refine the solution against the agreed requirements.', icon: Code2, image: '/images/services/process-develop.png', accent: '0 191 174' },
  { number: '04', title: 'Support & Grow', description: 'Assist with deployment, handover, maintenance, and future improvements as agreed.', icon: Headphones, image: '/images/services/process-support.png', accent: '255 121 0' },
] as const;

const technologies = [
  { name: 'React', icon: Atom, accent: '20 184 229' },
  { name: 'TypeScript', icon: Braces, accent: '49 120 198' },
  { name: 'Vite', icon: Zap, accent: '109 87 255' },
  { name: 'Node.js', icon: Blocks, accent: '71 160 69' },
  { name: 'Tailwind CSS', icon: Waves, accent: '6 182 212' },
  { name: 'PostCSS', icon: Code2, accent: '255 98 62' },
] as const;

const aboutFaqs = [
  { question: 'What does SMVM Softwares do?', answer: 'We build software products and services including business websites, custom software, mobile applications, POS solutions, consulting, and technical support.' },
  { question: 'What types of software do you develop?', answer: 'Our work includes websites, business management systems, workflow automation, mobile applications, and focused retail or pharmacy software solutions.' },
  { question: 'Can you build software specifically for my business?', answer: 'Yes. We can discuss your workflows, requirements, and goals to determine whether a custom software approach is suitable.' },
  { question: 'Do you provide Android application development?', answer: 'Yes. We develop Android and cross-platform mobile applications based on the needs of the project and its users.' },
  { question: 'Can you customize your existing POS products?', answer: 'Product requirements and available options can be discussed with our team to identify the most suitable solution for your business.' },
  { question: 'Do you provide maintenance and technical support?', answer: 'We provide implementation assistance, troubleshooting, maintenance, updates, and support according to the agreed service scope.' },
  { question: 'How can I discuss a project with your team?', answer: 'Use the contact page to share a short overview of your goals, and our team can discuss the relevant next steps with you.' },
] as const;

const reveal = { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-50px' }, transition: { duration: .45 } };

export function About() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const idPrefix = useId();
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="about-page">
      <section className="about-page__hero" aria-labelledby="about-hero-title">
        <div className="about-page__shell about-page__hero-layout">
          <motion.div {...reveal} initial={false} className="about-page__hero-copy">
            <p className="about-page__eyebrow">About SMVM Softwares</p>
            <h1 id="about-hero-title"><span className="about-page__hero-line">We Turn Ideas</span><span className="about-page__hero-line">Into Powerful</span><span className="about-page__hero-line about-page__hero-line--gradient">Digital Solutions</span></h1>
            <p>We build practical, scalable, and reliable software solutions that help businesses simplify operations, improve productivity, and grow with technology.</p>
            <ul className="about-page__hero-benefits" aria-label="What we bring to every project">
              <li><span><Sparkles aria-hidden="true" /></span><strong>Innovative Solutions</strong></li>
              <li><span><ShieldCheck aria-hidden="true" /></span><strong>Reliable Technology</strong></li>
              <li><span><BarChart3 aria-hidden="true" /></span><strong>Business Growth</strong></li>
            </ul>
            <div className="about-page__hero-actions"><Link className="about-page__button about-page__button--primary" to="/contact">Let&apos;s Talk <ArrowRight aria-hidden="true" /></Link><Link className="about-page__button about-page__button--outline" to="/services">Explore Our Services <ArrowRight aria-hidden="true" /></Link></div>
          </motion.div>
          <motion.div initial={false} animate={{ opacity: 1, scale: 1 }} transition={{ duration: shouldReduceMotion ? 0 : .55 }} className="about-page__hero-art"><img src="/images/about/about-hero-transparent.png" alt="Laptop development workspace with code, cloud, media, and analytics panels" /></motion.div>
        </div>
      </section>

      <section id="who-we-are" className="about-page__section about-page__who" aria-labelledby="about-who-title">
        <div className="about-page__shell about-page__who-layout">
          <motion.div {...reveal} initial={false} className="about-page__who-art"><img src="/images/about/about-who-technology-transparent.png" alt="Connected laptop and mobile development workspace with cloud, analytics, database, and automation tools" /></motion.div>
          <motion.div {...reveal} initial={false} className="about-page__who-copy">
            <p className="about-page__eyebrow">Who we are</p>
            <h2 id="about-who-title"><span className="about-page__who-line">Technology Built</span><span className="about-page__who-line">Around Your</span><span className="about-page__who-line about-page__who-line--gradient">Business</span></h2>
            <p>SMVM Softwares develops digital products and tailored technology solutions for businesses with different needs. From business websites and mobile applications to custom software and management systems, we focus on solving real problems through thoughtful engineering.</p>
            <p>Our goal is to help businesses adopt the right technology, streamline their operations, and achieve long-term growth with reliable and scalable solutions.</p>
            <Link className="about-page__button about-page__button--primary about-page__who-button" to="/services">Learn More About Us <ArrowRight aria-hidden="true" /></Link>
            <ul className="about-page__who-highlights" aria-label="How we work with businesses">
              <li><span><Sparkles aria-hidden="true" /></span><strong>Innovative Solutions</strong></li>
              <li><span><Target aria-hidden="true" /></span><strong>Business Focused</strong></li>
              <li><span><UsersRound aria-hidden="true" /></span><strong>Long-Term Partnership</strong></li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section id="what-we-do" className="about-page__section about-page__services" aria-labelledby="about-services-title"><div className="about-page__shell"><header className="about-page__center-heading"><p className="about-page__eyebrow">What we do</p><h2 id="about-services-title">Solutions for Every Stage of <span>Your Digital Journey</span></h2></header><div className="about-page__service-grid">{aboutServices.map(({ title, description, icon: Icon, accent }, index) => <motion.article {...reveal} initial={false} transition={{ delay: index * .06, duration: .42 }} key={title} style={{ '--about-rgb': accent } as CSSProperties}><span><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{description}</p><Link to="/services">Learn More <ArrowRight aria-hidden="true" /></Link></motion.article>)}</div></div></section>

      <section id="mission-vision" className="about-page__section about-page__mission" aria-label="Our mission and vision"><div className="about-page__shell about-page__mission-grid"><motion.article {...reveal} initial={false} className="about-page__purpose-card about-page__purpose-card--mission"><span><Target aria-hidden="true" /></span><div><h2>Our <span>Mission</span></h2><p>To make useful technology accessible to businesses by building reliable, user-friendly, and scalable digital solutions that address real operational challenges.</p></div></motion.article><motion.article {...reveal} initial={false} transition={{ delay: .08, duration: .45 }} className="about-page__purpose-card about-page__purpose-card--vision"><span><Eye aria-hidden="true" /></span><div><h2>Our <span>Vision</span></h2><p>To become a trusted technology partner for businesses seeking smarter workflows, better digital experiences, and sustainable growth through innovation.</p></div></motion.article></div></section>

      <section id="why-choose-us" className="about-page__section about-page__benefits" aria-labelledby="about-benefits-title"><div className="about-page__shell"><header className="about-page__center-heading"><p className="about-page__eyebrow">Why choose us</p><h2 id="about-benefits-title">More Than Just <span>Development</span></h2><p>We focus on long-term partnerships and deliver solutions that create real value for your business.</p></header><div className="about-page__benefit-grid">{aboutBenefits.map(({ title, description, icon: Icon, accent }) => <article key={title} style={{ '--about-rgb': accent } as CSSProperties}><span><Icon aria-hidden="true" /></span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div></section>

      <section id="how-we-work" className="about-page__section about-page__process" aria-labelledby="about-process-title"><div className="about-page__shell"><header className="about-page__center-heading"><p className="about-page__eyebrow">How we work</p><h2 id="about-process-title">From Idea to Implementation</h2></header><ol className="about-page__process-grid">{approachSteps.map(({ number, title, description, icon: Icon, image, accent }, index) => <li key={number} style={{ '--about-rgb': accent } as CSSProperties}><article><div><span><Icon aria-hidden="true" /></span><strong>{number}</strong></div><img src={image} alt="" loading="lazy" /><h3>{title}</h3><p>{description}</p></article>{index < approachSteps.length - 1 && <ArrowRight className="about-page__process-arrow" aria-hidden="true" />}</li>)}</ol></div></section>

      <section id="software-ecosystem" className="about-page__section about-page__products" aria-labelledby="about-products-title">
        <div className="about-page__shell">
          <header className="about-page__center-heading">
            <p className="about-page__eyebrow">Our software ecosystem</p>
            <h2 id="about-products-title">Purpose-Built Software for Different Industries</h2>
          </header>
          <div className="about-page__product-grid">
            {products.map(({ slug, name, audience, image, icon: Icon, accent }) => (
              <article key={slug} style={{ '--about-rgb': accent } as CSSProperties}>
                <span><Icon aria-hidden="true" /></span>
                <img src={image} alt={`${name} software workspace`} loading="lazy" />
                <h3>{name}</h3>
                <p>{audience}.</p>
                <Link to={`/products/${slug}`}>Explore Product <ArrowRight aria-hidden="true" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="technologies" className="about-page__section about-page__technology" aria-labelledby="about-tech-title">
        <div className="about-page__shell about-page__technology-layout">
          <div className="about-page__technology-copy">
            <p className="about-page__eyebrow">Technology that powers our solutions</p>
            <h2 id="about-tech-title"><span>Modern Technologies,</span><span><em>Powerful</em> Solutions</span></h2>
            <p>We use appropriate modern tools and technologies to build secure, maintainable, and scalable digital solutions.</p>
            <ul>
              {technologies.map(({ name, icon: Icon, accent }) => (
                <li key={name} style={{ '--tech-rgb': accent } as CSSProperties}><Icon aria-hidden="true" />{name}</li>
              ))}
            </ul>
          </div>
          <motion.figure {...reveal} initial={false} className="about-page__technology-art">
            <img src="/images/about/about-technologies-transparent.png" alt="Connected technology platform with React, TypeScript, JavaScript, utility CSS, and development symbols" loading="lazy" />
          </motion.figure>
        </div>
      </section>

      <section className="about-page__section about-page__faq" aria-labelledby="about-faq-title"><div className="about-page__shell about-page__faq-layout"><div><p className="about-page__eyebrow">Frequently asked questions</p><h2 id="about-faq-title">Questions about <span>our services?</span></h2><p>Find quick answers to common questions about our service offerings.</p><Link className="about-page__text-link" to="/contact">Talk to our team <ArrowRight aria-hidden="true" /></Link><img src="/images/faq-support-illustration.png" alt="" aria-hidden="true" /></div><div className="about-page__faq-list">{aboutFaqs.map((faq, index) => { const isOpen = openFaq === index; const buttonId = `${idPrefix}-faq-button-${index}`; const panelId = `${idPrefix}-faq-panel-${index}`; return <article className={isOpen ? 'is-open' : ''} key={faq.question}><h3><button id={buttonId} type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenFaq(isOpen ? null : index)}><span><HelpCircle aria-hidden="true" />{faq.question}</span><ChevronDown aria-hidden="true" /></button></h3><AnimatePresence initial={false}>{isOpen && <motion.div id={panelId} role="region" aria-labelledby={buttonId} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: shouldReduceMotion ? 0 : .2 }}><p>{faq.answer}</p></motion.div>}</AnimatePresence></article>; })}</div></div></section>

      <section className="about-page__cta" aria-labelledby="about-cta-title"><div className="about-page__shell"><div><p className="about-page__eyebrow">Let&apos;s build something great</p><h2 id="about-cta-title">Have an Idea? Let&apos;s Bring It to Life.</h2><p>Tell us about your business goals and we&apos;ll help you explore the right digital solution.</p><div><Link className="about-page__button about-page__button--primary" to="/contact">Get in Touch <ArrowRight aria-hidden="true" /></Link><Link className="about-page__button about-page__button--dark-outline" to="/services">Explore Our Services <ArrowRight aria-hidden="true" /></Link></div></div><img src="/images/services/web-development.png" alt="" aria-hidden="true" /></div></section>
    </main>
  );
}
