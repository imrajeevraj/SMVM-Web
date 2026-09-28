import { MessageSquareQuote, Puzzle, Route, SlidersHorizontal } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const indicators = [
  { label: 'Solutions for focused and multi-location operations', icon: Route },
  { label: 'Products and services under one technology partner', icon: Puzzle },
  { label: 'Workflows tailored to each business context', icon: SlidersHorizontal },
];

export function BusinessTrustSection() {
  return (
    <section className="bg-[#071b3a] py-7 text-white">
      <div className="site-container">
        <div className="grid gap-6 sm:grid-cols-3">
          {indicators.map(({ label, icon: Icon }) => <div key={label} className="trust-indicator-card"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-300/10 text-cyan-300"><Icon className="h-5 w-5" /></span><p className="text-sm font-semibold leading-6 text-slate-100">{label}</p></div>)}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-background py-14 sm:py-16">
      <div className="site-container">
        <div className="testimonial-panel grid gap-8 rounded-[28px] border border-border bg-surface p-7 sm:p-9 lg:grid-cols-[.8fr_1.2fr]">
          <SectionHeading align="left" eyebrow="Customer stories" title="Trust is earned through real outcomes" description="Verified customer stories and case studies will be published here after client approval." />
          <div className="testimonial-empty-card grid min-h-[210px] place-items-center rounded-[22px] border border-dashed border-border bg-background p-7 text-center">
            <div><span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand/10 text-brand"><MessageSquareQuote className="h-7 w-7" /></span><h3 className="mt-5 font-bold text-text">Customer stories coming soon</h3><p className="mx-auto mt-2 max-w-md text-base leading-7 text-text-muted">Approved client quotes and case studies will appear here as they become available.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

