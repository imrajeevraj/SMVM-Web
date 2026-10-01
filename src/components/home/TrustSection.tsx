import { MessageSquareQuote, Puzzle, Route, SlidersHorizontal } from 'lucide-react';

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
    <section id="customer-stories" className="testimonials-section scroll-mt-24 py-14 sm:py-16">
      <div className="site-container">
        <div className="testimonial-panel testimonial-showcase-grid">
          <div className="testimonial-copy">
            <p className="testimonial-eyebrow">Customer stories <span aria-hidden="true" /></p>
            <h2 className="testimonial-title">Trust is earned<br />through <span>real outcomes</span></h2>
            <p className="testimonial-description">Verified customer stories and case studies will be published here after client approval.</p>
          </div>

          <div className="testimonial-empty-card">
            <span className="testimonial-orb testimonial-orb-one" aria-hidden="true" />
            <span className="testimonial-orb testimonial-orb-two" aria-hidden="true" />
            <div className="testimonial-empty-content">
              <span className="testimonial-quote-icon"><MessageSquareQuote className="h-7 w-7" /></span>
              <h3>Customer stories coming soon</h3>
              <p>Approved client quotes and case studies will appear here<br className="hidden sm:block" /> as they become available.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

