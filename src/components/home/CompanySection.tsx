import { motion } from 'framer-motion';
import { ArrowRight, Check, Compass, Layers3, Store } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from './SectionHeading';

export function CompanySection() {
  return (
    <>
      <section id="about" className="section-space overflow-hidden bg-surface scroll-mt-24">
        <div className="site-container grid items-center gap-14 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative min-h-[430px]">
            <div className="company-visual">
              <div className="company-screen">
                <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 text-[10px] font-bold text-slate-500">
                  <span>SMVM PRODUCT WORKSPACE</span><span className="h-2 w-2 rounded-full bg-emerald-400" />
                </div>
                <img src="/images/products/cambill-pos/inventory.png" alt="SMVM POS inventory workspace" className="h-full w-full object-cover object-top" loading="lazy" />
              </div>
              <div className="company-float-card company-float-one"><Store className="h-5 w-5 text-blue-500" /><span><strong>Retail workflows</strong><small>Simple, connected operations</small></span></div>
              <div className="company-float-card company-float-two"><Layers3 className="h-5 w-5 text-violet-500" /><span><strong>Custom systems</strong><small>Built around the business</small></span></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <SectionHeading align="left" eyebrow="About SMVM Softwares" title="Building a smarter digital tomorrow" description="SMVM Softwares creates modern software solutions for businesses of different sizes—from focused POS products to custom digital systems and automation." />
            <div className="mt-7 space-y-3">
              {['Business-focused product thinking', 'Clear, user-friendly experiences', 'Technology designed to evolve'].map((item) => <div key={item} className="flex items-center gap-3 text-sm font-semibold text-text"><span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-500/10 text-emerald-500"><Check className="h-3.5 w-3.5" /></span>{item}</div>)}
            </div>
            <Link to="/about" className="button-outline mt-9">Learn more about us <ArrowRight className="h-4 w-4" /></Link>
          </motion.div>
        </div>
      </section>

      <section id="vision" className="vision-section scroll-mt-20">
        <div className="vision-mesh" />
        <div className="site-container relative z-10 grid gap-10 py-20 lg:grid-cols-[1fr_auto] lg:items-center lg:py-24">
          <div className="max-w-3xl">
            <p className="section-eyebrow text-cyan-300">Our vision</p>
            <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.035em] text-white sm:text-5xl">To empower businesses with innovative technology</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">We see technology as a practical engine for clearer decisions, better workflows, and sustainable business growth.</p>
          </div>
          <Link to="/vision" className="button-light w-fit">Explore our vision <Compass className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  );
}

