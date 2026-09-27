import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, BarChart3, Boxes, CheckCircle2, ReceiptText, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const views = [
  { id: 'inventory', title: 'Inventory', icon: Boxes, image: '/images/products/cambill-pos/inventory.png', description: 'A structured inventory workspace for reviewing and managing product records.' },
  { id: 'billing', title: 'Billing', icon: ReceiptText, image: '/images/products/cambill-pos/billing.png', description: 'A focused billing interface designed for clear, efficient counter workflows.' },
  { id: 'reports', title: 'Reports', icon: BarChart3, image: '/images/products/cambill-pos/reports.png', description: 'Reporting views that bring business information into a readable workspace.' },
  { id: 'settings', title: 'Settings', icon: Settings, image: '/images/products/cambill-pos/settings.png', description: 'Configuration screens for adapting the workspace to business requirements.' },
] as const;

export function ProductDetail() {
  const [activeView, setActiveView] = useState<(typeof views)[number]['id']>('inventory');
  const selected = views.find((view) => view.id === activeView) ?? views[0];

  return (
    <div className="w-full bg-background">
      <section className="relative overflow-hidden pb-20 pt-32 sm:pt-40 lg:pb-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(22,119,255,.14),transparent_34%),radial-gradient(circle_at_20%_80%,rgba(124,58,237,.1),transparent_30%)]" />
        <div className="site-container">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-text-muted transition hover:text-brand"><ArrowLeft className="h-4 w-4" /> All products</Link>
          <div className="mt-10 grid items-center gap-14 lg:grid-cols-[.86fr_1.14fr]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="section-eyebrow">For large stores and enterprises</p>
              <h1 className="mt-4 text-5xl font-extrabold tracking-[-.045em] text-text sm:text-6xl">CamBill POS</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-text-muted">An advanced POS platform positioned for larger retail operations, with workspace areas for billing, inventory, reports, and administration.</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {['Multi-store operations', 'Enterprise inventory', 'Billing workflows', 'Reports and analytics'].map((item) => <li key={item} className="flex items-center gap-3 text-base font-semibold text-text"><CheckCircle2 className="h-5 w-5 text-brand" />{item}</li>)}
              </ul>
              <Link to="/contact" className="button-primary mt-9">Discuss CamBill POS <ArrowRight className="h-4 w-4" /></Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} className="relative">
              <div className="absolute inset-10 rounded-full bg-brand/20 blur-[100px]" />
              <div className="relative overflow-hidden rounded-[26px] border border-border bg-surface p-2 shadow-2xl">
                <div className="flex h-9 items-center gap-2 rounded-t-[18px] bg-[#101d32] px-4"><i className="h-2 w-2 rounded-full bg-rose-400" /><i className="h-2 w-2 rounded-full bg-amber-400" /><i className="h-2 w-2 rounded-full bg-emerald-400" /><span className="ml-2 text-[11px] font-semibold text-slate-400">CamBill POS workspace</span></div>
                <img src="/images/products/cambill-pos/camstore_pos.png" alt="CamBill POS workspace overview" className="w-full rounded-b-[18px]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-space border-y border-border bg-surface">
        <div className="site-container max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-eyebrow">Product workspace</p>
            <h2 className="section-title">Explore the supplied CamBill POS screens</h2>
            <p className="mt-5 text-lg leading-8 text-text-muted">These views use the product screenshots available in the project. Confirm exact feature availability with SMVM Softwares.</p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr]">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1" role="tablist" aria-label="CamBill POS workspace views">
              {views.map((view) => {
                const Icon = view.icon;
                const active = view.id === activeView;
                return <button key={view.id} type="button" role="tab" aria-selected={active} aria-controls={`panel-${view.id}`} id={`tab-${view.id}`} onClick={() => setActiveView(view.id)} className={`flex items-center gap-3 rounded-2xl border p-4 text-left text-base font-bold transition ${active ? 'border-brand/30 bg-brand/10 text-brand shadow-sm' : 'border-transparent text-text-muted hover:border-border hover:bg-background hover:text-text'}`}><span className="grid h-10 w-10 place-items-center rounded-xl bg-surface"><Icon className="h-5 w-5" /></span>{view.title}</button>;
              })}
            </div>

            <div className="overflow-hidden rounded-[28px] border border-border bg-background shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div key={selected.id} id={`panel-${selected.id}`} role="tabpanel" aria-labelledby={`tab-${selected.id}`} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }}>
                  <img src={selected.image} alt={`${selected.title} view in CamBill POS`} className="aspect-[1.75] w-full object-cover object-top" />
                  <div className="border-t border-border bg-surface p-6 sm:p-8"><h3 className="text-2xl font-bold text-text">{selected.title}</h3><p className="mt-3 text-base leading-7 text-text-muted">{selected.description}</p></div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background px-4 py-20 text-center sm:py-24">
        <div className="cta-panel relative mx-auto max-w-5xl overflow-hidden rounded-[32px] px-6 py-16 sm:px-10">
          <div className="cta-grid" />
          <h2 className="relative text-3xl font-extrabold text-white sm:text-5xl">Is CamBill POS the right fit?</h2>
          <p className="relative mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Share your store structure and workflow requirements with SMVM Softwares.</p>
          <Link to="/contact" className="button-light relative mt-8">Start a conversation <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </div>
  );
}
