import { ArrowRight, Briefcase, Headphones, MessagesSquare } from 'lucide-react';

const benefits = [
  { label: 'Business-Focused Solutions', icon: Briefcase, tone: 'bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-300' },
  { label: 'Personalized Consultation', icon: MessagesSquare, tone: 'bg-violet-100 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300' },
  { label: 'Ongoing Technical Support', icon: Headphones, tone: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300' },
];

export function ContactHero() {
  const scrollToForm = () => document.querySelector('#project-enquiry')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <section className="relative overflow-hidden pb-10 pt-32 sm:pt-36 lg:pb-14">
      <div className="contact-page-glow" />
      <div className="site-container relative grid items-center gap-10 lg:grid-cols-[.92fr_1.08fr] lg:gap-12">
        <div className="min-w-0">
          <p className="section-eyebrow flex items-center gap-3">Get in touch <span className="h-px w-9 bg-brand/50" /></p>
          <h1 className="mt-4 max-w-2xl text-[2.65rem] font-extrabold leading-[1.02] tracking-[-.045em] text-text sm:text-6xl lg:text-[4.25rem]">
            Let&apos;s Build <span className="text-brand">Something Great</span> Together.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-text-muted sm:text-lg">
            Have a project in mind, need a custom software solution, or want to explore how technology can help your business grow? We&apos;d love to hear from you.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {benefits.map(({ label, icon: Icon, tone }) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl border border-border/70 bg-surface/70 p-3 shadow-sm backdrop-blur">
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${tone}`}><Icon className="h-5 w-5" /></span>
                <span className="text-xs font-bold leading-5 text-text">{label}</span>
              </div>
            ))}
          </div>

          <button type="button" onClick={scrollToForm} className="button-primary mt-8 w-full sm:w-auto">
            Tell Us About Your Project <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="relative min-w-0">
          <div className="absolute inset-[12%] rounded-full bg-blue-300/25 blur-[70px] dark:bg-blue-500/10" />
          <img
            src="/images/contact/contact-hero.png"
            alt="Technology consultant at a laptop with email, chat, phone, and analytics symbols"
            className="relative mx-auto w-full max-w-[720px] rounded-[32px] object-contain shadow-[0_28px_80px_rgba(26,92,180,.16)]"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
