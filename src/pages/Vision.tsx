import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Building2, Eye, Globe2, Layers, Lightbulb, Rocket, Settings2, ShieldCheck, Target, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import './VisionPage.css';
import './VisionSections.css';

const beliefs = [
  { title: 'People First', description: 'We believe in building technology that truly helps people and businesses.', icon: UsersRound, accent: '22 119 255' },
  { title: 'Continuous Innovation', description: 'We embrace new ideas and modern technology to stay ahead.', icon: Rocket, accent: '0 191 174' },
  { title: 'Quality & Reliability', description: 'We are committed to building solutions that are reliable, maintainable, and built for the long term.', icon: ShieldCheck, accent: '139 69 255' },
  { title: 'Growth Together', description: 'We see our clients’ success as our success and strive to grow together.', icon: BarChart3, accent: '255 121 0' },
] as const;
const impacts = [
  { title: 'Empowering Businesses', description: 'Solutions that simplify operations and improve productivity.', icon: Building2, accent: '22 119 255' },
  { title: 'Enabling Growth', description: 'Technology designed to support long-term business growth.', icon: UsersRound, accent: '139 69 255' },
  { title: 'Driving Innovation', description: 'Modern solutions for tomorrow’s opportunities.', icon: Target, accent: '0 191 174' },
] as const;
const heroCards = [
  { label: 'Innovation', icon: Lightbulb, accent: '22 119 255', mod: 'innovation' },
  { label: 'Digital Future', icon: Globe2, accent: '139 69 255', mod: 'digital' },
  { label: 'Growth', icon: BarChart3, accent: '255 138 0', mod: 'growth' },
  { label: 'Better Businesses', icon: Building2, accent: '16 185 129', mod: 'business' },
] as const;
const heroStats = [
  { value: '100+', label: 'Happy Clients', icon: UsersRound },
  { value: '50+', label: 'Projects Delivered', icon: Layers },
  { value: '24/7', label: 'Support', icon: ShieldCheck },
] as const;
const reveal = { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-50px' }, transition: { duration: .45 } };

export function Vision() {
  return (
    <main className="vision-page">
      <section className="vision-hero" aria-labelledby="vision-hero-title">
        <div className="vision-hero__scene">
          <img className="vision-hero__image" src="/images/company/vision-hero-sky.jpg" alt="Mountain peak with a luminous connected path representing business progress" />
          <svg className="vision-hero__links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <line x1="52" y1="38" x2="70.5" y2="39" /><line x1="50" y1="66" x2="63.3" y2="68.8" /><line x1="85" y1="18" x2="74.6" y2="23" /><line x1="88" y1="46" x2="76" y2="48" />
          </svg>
          <span className="vision-hero__dot vision-hero__dot--innovation" aria-hidden="true" />
          <span className="vision-hero__dot vision-hero__dot--digital" aria-hidden="true" />
          <span className="vision-hero__dot vision-hero__dot--growth" aria-hidden="true" />
          <span className="vision-hero__dot vision-hero__dot--business" aria-hidden="true" />
          {heroCards.map(({ label, icon: Icon, accent, mod }, index) => (
            <motion.span key={label} className={`vision-hero__card vision-hero__card--${mod}`} style={{ '--card-rgb': accent } as CSSProperties} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25 + index * .1, duration: .45 }}>
              <span className="vision-hero__card-icon"><Icon aria-hidden="true" /></span>{label}
            </motion.span>
          ))}
        </div>
        <div className="vision-page__shell vision-hero__inner">
          <motion.div {...reveal} className="vision-hero__copy">
            <p className="vision-hero__eyebrow">Our vision</p>
            <h1 id="vision-hero-title">A Smarter,<br />More Connected <span>Tomorrow</span></h1>
            <p className="vision-hero__lead">We envision a future where technology empowers every business to work smarter, grow faster, and create meaningful impact in the digital world.</p>
            <div className="vision-hero__actions">
              <Link className="vision-hero__btn vision-hero__btn--primary" to="/services">Our Services <ArrowRight aria-hidden="true" /></Link>
              <Link className="vision-hero__btn vision-hero__btn--outline" to="/contact">Contact Us <ArrowRight aria-hidden="true" /></Link>
            </div>
            <ul className="vision-hero__stats">
              {heroStats.map(({ value, label, icon: Icon }) => (
                <li key={label}><span className="vision-hero__stat-icon"><Icon aria-hidden="true" /></span><span><strong>{value}</strong><small>{label}</small></span></li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="vision-page__section vision-page__purpose" aria-labelledby="vision-purpose-title">
        <div className="vision-page__shell">
          <header className="vision-purpose__head">
            <p className="vision-page__eyebrow">Our purpose</p>
            <h2 id="vision-purpose-title">Our Mission <span>and Vision</span></h2>
            <p>Guided by a clear purpose, we work every day to build technology that creates real value for businesses and a better digital future.</p>
          </header>
          <div className="vision-purpose__grid">
            <motion.article {...reveal} className="vision-purpose__card" style={{ '--purpose-rgb': '22 119 255' } as CSSProperties}>
              <div className="vision-purpose__card-content">
                <div className="vision-purpose__card-head"><span className="vision-purpose__icon"><Target aria-hidden="true" /></span><h3>Our Mission</h3></div>
                <p>To make useful technology accessible to businesses by building reliable, user-friendly, and scalable digital solutions that address real operational challenges.</p>
              </div>
              <img src="/images/company/mission-3d.png" alt="" className="vision-purpose__3d-art" aria-hidden="true" />
            </motion.article>
            <motion.article {...reveal} transition={{ delay: .08, duration: .45 }} className="vision-purpose__card" style={{ '--purpose-rgb': '124 77 255' } as CSSProperties}>
              <div className="vision-purpose__card-content">
                <div className="vision-purpose__card-head"><span className="vision-purpose__icon"><Eye aria-hidden="true" /></span><h3>Our Vision</h3></div>
                <p>To become a trusted technology partner for businesses seeking smarter workflows, better digital experiences, and sustainable growth through innovation.</p>
              </div>
              <img src="/images/company/vision-3d.png" alt="" className="vision-purpose__3d-art" aria-hidden="true" />
            </motion.article>
          </div>
        </div>
      </section>

      <section className="vision-page__brighter-full" aria-labelledby="vision-brighter-title">
        <div className="vision-page__shell vision-brighter__layout">
          <motion.div {...reveal} className="vision-brighter__copy">
            <p className="vision-page__eyebrow">Our vision</p>
            <h2 id="vision-brighter-title">Technology for a <span>Brighter Future</span></h2>
            <p>We aim to create a future where businesses of all sizes can leverage the right technology to simplify operations, enhance productivity, and deliver exceptional value to their customers.</p>
            <Link className="vision-page__button vision-page__button--primary" to="/about">About Us <ArrowRight aria-hidden="true" /></Link>
          </motion.div>
          <motion.div {...reveal} transition={{ delay: .08, duration: .45 }} className="vision-brighter__floating">
            <div className="vision-brighter__card vision-brighter__card--1">
              <span className="vision-brighter__icon vision-brighter__icon--blue"><Lightbulb aria-hidden="true" /></span>
              <span className="vision-brighter__text">Innovative<br/>Solutions</span>
            </div>
            <div className="vision-brighter__card vision-brighter__card--2">
              <span className="vision-brighter__icon vision-brighter__icon--orange"><BarChart3 aria-hidden="true" /></span>
              <span className="vision-brighter__text">Sustainable<br/>Growth</span>
            </div>
            <div className="vision-brighter__card vision-brighter__card--3">
              <span className="vision-brighter__icon vision-brighter__icon--purple"><Globe2 aria-hidden="true" /></span>
              <span className="vision-brighter__text">Global<br/>Opportunities</span>
            </div>
            <div className="vision-brighter__card vision-brighter__card--4">
              <span className="vision-brighter__icon vision-brighter__icon--green"><UsersRound aria-hidden="true" /></span>
              <span className="vision-brighter__text">Positive<br/>Impact</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="vision-page__beliefs-new" aria-labelledby="vision-beliefs-title">
        <div className="vision-page__shell">
          <header className="vision-beliefs__center">
            <p className="vision-page__eyebrow">OUR CORE BELIEFS</p>
            <h2 id="vision-beliefs-title">Values That <span>Drive Our Vision</span></h2>
            <p>Our vision is shaped by a set of core beliefs that guide how we think, build, and grow.</p>
          </header>
          <div className="vision-beliefs__grid">
            {beliefs.map(({ title, description, icon: Icon, accent }, index) => (
              <motion.article {...reveal} transition={{ delay: index * .06, duration: .42 }} key={title} className="vision-beliefs__card" style={{ '--belief-rgb': accent } as CSSProperties}>
                <div className="vision-beliefs__card-header">
                  <div className="vision-beliefs__icon-wrapper">
                    <div className="vision-beliefs__orb"></div>
                    <Icon aria-hidden="true" />
                  </div>
                  <span className="vision-beliefs__number">0{index + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="vision-beliefs__wave" aria-hidden="true"></div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="vision-ecosystem-new" aria-labelledby="vision-ecosystem-title">
        <div className="vision-ecosystem__layout">
          <div className="vision-ecosystem__copy">
            <p className="vision-page__eyebrow vision-page__eyebrow--line">OUR GOALS</p>
            <h2 id="vision-ecosystem-title">Building a <br/><span>Smarter Digital</span><br/> Ecosystem</h2>
            <p>We aim to help businesses adopt technology, streamline their operations, and unlock new opportunities in an increasingly digital world.</p>
            <Link className="vision-page__button vision-page__button--primary" to="/services">Our Services <ArrowRight aria-hidden="true" /></Link>
          </div>

          <div className="vision-ecosystem__globe-area" aria-label="Connected global digital ecosystem">
            {/* The background globe is part of the section's CSS background. These are the floating cards on top. */}
            <div className="vision-ecosystem__card vision-ecosystem__card--tl">
              <span className="vision-ecosystem__icon vision-ecosystem__icon--blue"><Settings2 aria-hidden="true" /></span>
              <span className="vision-ecosystem__text">Smarter<br/>Workflows</span>
              <div className="vision-ecosystem__connector vision-ecosystem__connector--tl"></div>
            </div>

            <div className="vision-ecosystem__card vision-ecosystem__card--bl">
              <span className="vision-ecosystem__icon vision-ecosystem__icon--purple"><Building2 aria-hidden="true" /></span>
              <span className="vision-ecosystem__text">Stronger<br/>Businesses</span>
              <div className="vision-ecosystem__connector vision-ecosystem__connector--bl"></div>
            </div>

            <div className="vision-ecosystem__card vision-ecosystem__card--tr">
              <span className="vision-ecosystem__icon vision-ecosystem__icon--green"><BarChart3 aria-hidden="true" /></span>
              <span className="vision-ecosystem__text">Scalable<br/>Solutions</span>
              <div className="vision-ecosystem__connector vision-ecosystem__connector--tr"></div>
            </div>

            <div className="vision-ecosystem__card vision-ecosystem__card--br">
              <span className="vision-ecosystem__icon vision-ecosystem__icon--orange"><Globe2 aria-hidden="true" /></span>
              <span className="vision-ecosystem__text">Global<br/>Presence</span>
              <div className="vision-ecosystem__connector vision-ecosystem__connector--br"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="vision-impact-new" aria-labelledby="vision-impact-title">
        <div className="vision-impact__layout">
          <div className="vision-impact__copy">
            <p className="vision-page__eyebrow vision-page__eyebrow--line">OUR IMPACT</p>
            <h2 id="vision-impact-title">Creating<br/>Opportunities<br/><span>Through<br/>Technology</span></h2>
            <p>We strive to make a positive impact by enabling businesses to work more efficiently, reach more customers, and achieve their long-term goals with the right digital solutions.</p>
            <Link className="vision-page__button vision-page__button--primary" to="/services">Our Services <ArrowRight aria-hidden="true" /></Link>
          </div>

          <div className="vision-impact__grid">
            {impacts.map(({ title, description, icon: Icon, accent }) => (
              <div className="vision-impact__card" key={title} style={{ '--impact-rgb': accent } as CSSProperties}>
                <div className="vision-impact__card-content">
                  <span className="vision-impact__icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>

                <div className="vision-impact__card-footer">
                  <span className="vision-impact__action">
                    <ArrowRight aria-hidden="true" />
                  </span>
                </div>
                <div className="vision-impact__wave"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="vision-page__final" aria-labelledby="vision-final-title"><div className="vision-page__shell"><div><p className="vision-page__eyebrow">Let&apos;s build a better tomorrow</p><h2 id="vision-final-title">Turn Your Vision Into Reality</h2><p>Partner with SMVM Softwares and let&apos;s create smarter, more innovative solutions together.</p><div><Link className="vision-page__button vision-page__button--light" to="/contact">Get in Touch <ArrowRight aria-hidden="true" /></Link><Link className="vision-page__button vision-page__button--dark-outline" to="/services">Explore Our Services <ArrowRight aria-hidden="true" /></Link></div></div><img src="/images/company/vision-hero-ecosystem.png" alt="" aria-hidden="true" /></div></section>
    </main>
  );
}
