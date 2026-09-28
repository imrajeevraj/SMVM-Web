import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { highlights } from '@/data/site';

export function Hero() {
  const [tourOpen, setTourOpen] = useState(false);
  const [tourStep, setTourStep] = useState(0);
  const tourButtonRef = useRef<HTMLButtonElement>(null);
  const tourDialogRef = useRef<HTMLDivElement>(null);

  const tourSlides = [
    { src: '/images/products/cambill-pos/dashboard.png', title: 'Business overview', alt: 'CamStore POS dashboard with sales, inventory and reporting panels' },
    { src: '/images/products/cambill-pos/billing.png', title: 'Fast billing workflow', alt: 'CamStore POS billing workspace' },
    { src: '/images/products/cambill-pos/reports.png', title: 'Clear reporting', alt: 'CamStore POS reporting workspace' },
  ];

  useEffect(() => {
    if (!tourOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setTourOpen(false);
      if (event.key === 'ArrowRight') setTourStep((step) => (step + 1) % tourSlides.length);
      if (event.key === 'ArrowLeft') setTourStep((step) => (step - 1 + tourSlides.length) % tourSlides.length);
      if (event.key !== 'Tab' || !tourDialogRef.current) return;
      const focusable = Array.from(tourDialogRef.current.querySelectorAll<HTMLElement>('button, [href], [tabindex]:not([tabindex="-1"])'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    window.setTimeout(() => tourDialogRef.current?.querySelector<HTMLElement>('button')?.focus(), 50);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
      tourButtonRef.current?.focus();
    };
  }, [tourOpen, tourSlides.length]);

  return (
    <section className="hero-shell relative isolate overflow-hidden pb-14 pt-28 sm:pt-32 lg:min-h-[650px] lg:pb-16 lg:pt-32">
      <div className="hero-grid absolute inset-0 -z-20" />
      <img
        src="/images/brand/hero-retail-showroom.png"
        alt=""
        aria-hidden="true"
        className="hero-store-scene absolute inset-y-0 right-0 -z-[15] hidden h-full w-[72%] object-cover object-right lg:block"
      />
      <div className="hero-store-shade absolute inset-0 -z-10 hidden lg:block" />
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <div className="site-container grid items-center gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-7">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-300/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-100 backdrop-blur-md sm:text-[11px]">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(32,217,255,.9)]" />
            Powering businesses with smart software
          </div>

          <h1 className="max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-[3.65rem] xl:text-[4rem]">
            <span className="block sm:whitespace-nowrap">Where Creativity</span>
            <span className="mt-1 block sm:whitespace-nowrap">Meets <span className="hero-gradient-text">Innovation</span></span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            We build modern software solutions to simplify business, power growth and create a smarter digital future.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link className="button-primary group" to="/products">
              Explore Our Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <button ref={tourButtonRef} className="button-secondary-dark group" type="button" onClick={() => setTourOpen(true)} aria-haspopup="dialog">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white/10">
                <Play className="h-3.5 w-3.5 fill-current" />
              </span>
              View Product Tour
            </button>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-3 border-t border-white/10 pt-5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {highlights.map(({ title, icon: Icon }) => (
              <div key={title} className="flex items-center gap-2.5 text-xs font-medium text-slate-300">
                <Icon className="h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                <span>{title}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-[760px] lg:translate-x-10 lg:translate-y-3"
          aria-label="CamStore POS interface displayed across desktop, tablet, and mobile devices"
        >
          <div className="absolute left-[12%] top-[8%] h-[72%] w-[72%] rounded-full bg-blue-500/25 blur-[100px]" />
          <div className="device-monitor relative z-10">
            <div className="device-topbar">
              <div className="flex gap-1.5"><i /><i /><i /></div>
              <span>SMVM POS workspace</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </div>
            <div className="overflow-hidden bg-slate-100">
              <img
                src="/images/products/cambill-pos/dashboard.png"
                alt="CamStore POS dashboard showing sales, inventory and reporting panels"
                className="aspect-[1.78] w-full object-cover object-top"
              />
            </div>
            <div className="monitor-neck" /><div className="monitor-base" />
          </div>

          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="device-tablet"
          >
            <img src="/images/products/cambill-pos/billing.png" alt="CamStore POS billing interface on a tablet" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="device-phone"
          >
            <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-slate-600" />
            <img src="/images/products/cambill-pos/reports.png" alt="CamStore POS reporting interface on mobile" />
          </motion.div>

          <div className="device-status-card">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-400/15 text-emerald-300">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div><strong>Retail focused</strong><span>Designed for everyday workflows</span></div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {tourOpen && (
          <motion.div
            ref={tourDialogRef}
            className="fixed inset-0 z-[100] grid place-items-center bg-[#020817]/85 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            role="dialog" aria-modal="true" aria-labelledby="tour-title"
            onMouseDown={(event) => event.currentTarget === event.target && setTourOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16 }}
              className="w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/15 bg-[#07152d] shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 text-white">
                <div><p className="text-xs font-bold uppercase tracking-widest text-cyan-300">Product tour</p><h2 id="tour-title" className="mt-1 font-bold">A closer look at the SMVM POS workspace</h2></div>
                <button type="button" onClick={() => setTourOpen(false)} className="home-icon-button rounded-full p-2 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300" aria-label="Close product tour"><X /></button>
              </div>
              <div className="relative bg-slate-950">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={tourSlides[tourStep].src}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -18 }}
                    src={tourSlides[tourStep].src}
                    alt={tourSlides[tourStep].alt}
                    className="aspect-[1.75] w-full object-cover object-top"
                  />
                </AnimatePresence>
                <button type="button" onClick={() => setTourStep((tourStep - 1 + tourSlides.length) % tourSlides.length)} className="tour-nav-button absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-[#06152f]/85 text-white backdrop-blur hover:bg-[#0b2a66]" aria-label="Previous product view"><ChevronLeft /></button>
                <button type="button" onClick={() => setTourStep((tourStep + 1) % tourSlides.length)} className="tour-nav-button absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-[#06152f]/85 text-white backdrop-blur hover:bg-[#0b2a66]" aria-label="Next product view"><ChevronRight /></button>
              </div>
              <div className="flex flex-col gap-3 border-t border-white/10 px-5 py-4 text-white sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-semibold">{tourSlides[tourStep].title}</p>
                <div className="flex gap-2" aria-label={`View ${tourStep + 1} of ${tourSlides.length}`}>
                  {tourSlides.map((slide, index) => <button type="button" key={slide.src} onClick={() => setTourStep(index)} className={`tour-dot h-2.5 rounded-full transition-all ${index === tourStep ? 'w-8 bg-cyan-300' : 'w-2.5 bg-white/30 hover:bg-white/60'}`} aria-label={`Show ${slide.title}`} aria-current={index === tourStep ? 'true' : undefined} />)}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

