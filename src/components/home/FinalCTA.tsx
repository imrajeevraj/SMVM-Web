import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FinalCTA() {
  return (
    <section className="bg-background px-4 pb-16 sm:px-6 sm:pb-20">
      <div className="cta-panel mx-auto max-w-[1240px] overflow-hidden rounded-[28px] px-6 py-10 sm:px-10 lg:py-12">
        <div className="cta-grid" />
        <div className="relative z-10 grid items-center gap-8 text-center lg:grid-cols-[.86fr_1.14fr] lg:text-left">
          <div>
          <p className="section-eyebrow text-cyan-300">Start a conversation</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-4xl">Let&apos;s build something smarter</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">From POS systems to custom software, we&apos;re here to help your business grow with technology.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:justify-start">
            <Link to="/contact" className="button-light"><Mail className="h-4 w-4" /> Contact Us</Link>
            <Link to="/products" className="button-secondary-dark">Explore Products <ArrowRight className="h-4 w-4" /></Link>
          </div>
          </div>
          <div className="cta-screen-frame"><img src="/images/products/cambill-pos/reports.png" alt="SMVM business reporting workspace" loading="lazy" /></div>
        </div>
      </div>
    </section>
  );
}

