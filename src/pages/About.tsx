import { motion } from 'framer-motion';
import { ArrowRight, Blocks, Code2, Store, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { reasons } from '@/data/site';

const focusAreas = [
  { title: 'POS products', description: 'Retail and pharmacy software positioned around distinct business needs.', icon: Store },
  { title: 'Web development', description: 'Responsive websites and web applications shaped around clear goals.', icon: Code2 },
  { title: 'Custom software', description: 'Purpose-built systems designed around a business workflow.', icon: Blocks },
  { title: 'Business automation', description: 'Connected processes intended to reduce repetitive operational work.', icon: Workflow },
];

export function About() {
  return (
    <div className="w-full bg-background">
      <section className="relative overflow-hidden pb-20 pt-32 sm:pt-40 lg:pb-28">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(22,119,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(22,119,255,.06)_1px,transparent_1px),radial-gradient(circle_at_80%_20%,rgba(32,217,255,.12),transparent_30%)] bg-[size:42px_42px,42px_42px,auto]" />
        <div className="site-container grid items-center gap-14 lg:grid-cols-[1fr_.78fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="section-eyebrow">About SMVM Softwares</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-extrabold tracking-[-.045em] text-text sm:text-6xl">Building a smarter digital tomorrow</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">SMVM Softwares focuses on POS products, custom software, web development, business automation, and technology services for businesses of different sizes.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link to="/products" className="button-primary">Explore products <ArrowRight className="h-4 w-4" /></Link><Link to="/contact" className="button-outline">Discuss a project</Link></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} className="relative mx-auto max-w-md">
            <div className="absolute inset-10 rounded-full bg-brand/20 blur-[90px]" />
            <img src="/images/brand/smvm-logo-stacked-3d.png" alt="SMVM Softwares" className="relative w-full drop-shadow-2xl" />
          </motion.div>
        </div>
      </section>

      <section className="section-space border-y border-border bg-surface">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center"><p className="section-eyebrow">What we focus on</p><h2 className="section-title">Products and services shaped around business work</h2></div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map(({ title, description, icon: Icon }, index) => <motion.article key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .07 }} className="rounded-[24px] border border-border bg-background p-7"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-brand"><Icon className="h-6 w-6" /></span><h3 className="mt-6 text-xl font-bold text-text">{title}</h3><p className="mt-3 text-base leading-7 text-text-muted">{description}</p></motion.article>)}
          </div>
        </div>
      </section>

      <section className="section-space bg-background">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center"><p className="section-eyebrow">Our approach</p><h2 className="section-title">Clear, practical and ready to evolve</h2></div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{reasons.map(({ title, description, icon: Icon }) => <div key={title} className="border-l border-border pl-6"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-brand"><Icon className="h-6 w-6" /></span><h3 className="mt-6 font-bold text-text">{title}</h3><p className="mt-3 text-base leading-7 text-text-muted">{description}</p></div>)}</div>
        </div>
      </section>
    </div>
  );
}
