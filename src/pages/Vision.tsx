import { motion } from 'framer-motion';
import { ArrowRight, Compass, Lightbulb, Scaling, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const principles = [
  { title: 'Practical innovation', description: 'Use modern technology where it makes work clearer, faster, or easier to manage.', icon: Lightbulb },
  { title: 'People-first design', description: 'Create software that respects how teams already think and work.', icon: Users },
  { title: 'Room to grow', description: 'Shape solutions that can evolve as requirements and operations change.', icon: Scaling },
];

export function Vision() {
  return (
    <div className="w-full bg-background">
      <section className="vision-section min-h-[680px] pt-24 text-white">
        <div className="vision-mesh" />
        <div className="site-container grid min-h-[590px] items-center gap-12 py-20 lg:grid-cols-[1fr_.65fr]">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}>
            <p className="section-eyebrow text-cyan-300">Our vision</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-extrabold tracking-[-.045em] sm:text-6xl lg:text-7xl">To empower businesses with innovative technology</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">We want technology to feel like a practical partner—helping businesses organise work, make clearer decisions, and move forward with confidence.</p>
            <Link to="/contact" className="button-light mt-9">Start a conversation <ArrowRight className="h-4 w-4" /></Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} className="relative mx-auto grid aspect-square w-full max-w-[380px] place-items-center rounded-full border border-white/10 bg-white/[.04] shadow-[0_0_100px_rgba(22,119,255,.25)] backdrop-blur-xl">
            <div className="absolute inset-8 rounded-full border border-dashed border-cyan-300/25" />
            <div className="absolute inset-20 rounded-full border border-white/10" />
            <Compass className="relative h-28 w-28 text-cyan-300" strokeWidth={1.2} />
          </motion.div>
        </div>
      </section>

      <section className="section-space bg-surface">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center"><p className="section-eyebrow">How we see the future</p><h2 className="section-title">Technology should make business work feel more natural</h2></div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">{principles.map(({ title, description, icon: Icon }, index) => <motion.article key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="rounded-[26px] border border-border bg-background p-8"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand/10 text-brand"><Icon className="h-7 w-7" /></span><h3 className="mt-7 text-xl font-bold text-text">{title}</h3><p className="mt-4 text-base leading-7 text-text-muted">{description}</p></motion.article>)}</div>
          <div className="mt-12 text-center"><Link to="/products" className="button-outline">Explore SMVM products <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </section>
    </div>
  );
}
