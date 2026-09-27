import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FinalCTA() {
  return (
    <section className="bg-background px-4 pb-20 sm:px-6 sm:pb-24">
      <div className="cta-panel mx-auto max-w-[1240px] overflow-hidden rounded-[32px] px-6 py-16 text-center sm:px-10 lg:py-20">
        <div className="cta-grid" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="section-eyebrow text-cyan-300">Start a conversation</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">Let&apos;s build something smarter</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">From POS systems to custom software, we&apos;re here to help your business grow with technology.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/contact" className="button-light"><Mail className="h-4 w-4" /> Contact Us</Link>
            <Link to="/products" className="button-secondary-dark">Explore Products <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

