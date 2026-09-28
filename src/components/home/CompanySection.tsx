import { motion } from 'framer-motion';
import { ArrowRight, Check, Compass, Layers3, Store } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from './SectionHeading';

export function CompanySection() {
  return (
      <section className="overflow-hidden bg-surface py-14 sm:py-16 lg:py-20">
        <div className="site-container grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
          <motion.div id="about" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="company-info-card grid gap-8 rounded-[28px] border border-border bg-background p-6 scroll-mt-24 sm:p-8 md:grid-cols-[.9fr_1.1fr] md:items-center">
            <div className="relative min-h-[300px]">
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
            </div>
            <div>
            <SectionHeading align="left" eyebrow="About SMVM Softwares" title="Building a smarter digital tomorrow" description="Modern software solutions—from focused POS products to custom systems and automation." />
            <div className="mt-7 space-y-3">
              {['Business-focused product thinking', 'Clear, user-friendly experiences', 'Technology designed to evolve'].map((item) => <div key={item} className="flex items-center gap-3 text-sm font-semibold text-text"><span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-500/10 text-emerald-500"><Check className="h-3.5 w-3.5" /></span>{item}</div>)}
            </div>
            <Link to="/about" className="button-outline mt-7">Learn more <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </motion.div>
          <motion.div id="vision" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="vision-section flex min-h-[420px] flex-col justify-between rounded-[28px] p-7 scroll-mt-20 sm:p-9">
            <div className="vision-mesh" />
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-cyan-300"><Compass className="h-6 w-6" /></span>
            <div className="relative z-10"><p className="section-eyebrow text-cyan-300">Our vision</p><h2 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] text-white sm:text-4xl">Empowering businesses with innovative technology</h2><p className="mt-4 text-base leading-7 text-slate-300">Technology as a practical engine for clearer decisions, better workflows, and sustainable growth.</p><Link to="/vision" className="button-light mt-7 w-fit">Explore our vision <Compass className="h-4 w-4" /></Link></div>
          </motion.div>
        </div>
      </section>
  );
}

