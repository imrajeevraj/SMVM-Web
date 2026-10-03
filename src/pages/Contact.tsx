import { CheckCircle2 } from 'lucide-react';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactInfoCards } from '@/components/contact/ContactInfoCards';
import { ProjectEnquiryForm } from '@/components/contact/ProjectEnquiryForm';

const reassurancePoints = [
  'Quick response from our team',
  'No spam, only relevant communication',
  'Your information is handled responsibly',
];

export function Contact() {
  return (
    <div className="contact-page overflow-hidden bg-background">
      <ContactHero />
      <ContactInfoCards />

      <section id="project-enquiry" className="scroll-mt-24 border-t border-border/70 bg-surface/55 py-20 sm:py-24">
        <div className="site-container grid items-start gap-12 lg:grid-cols-[.76fr_1.24fr] lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <p className="section-eyebrow flex items-center gap-3">Send us a message <span className="h-px w-9 bg-brand/50" /></p>
            <h2 className="mt-4 text-[2.55rem] font-extrabold leading-[1.02] tracking-[-.045em] text-text sm:text-5xl lg:text-6xl">
              Tell Us About <span className="text-brand">Your Project</span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-text-muted sm:text-lg">Share a few details about your requirements, and our team can understand how to help.</p>
            <ul className="mt-7 space-y-4">
              {reassurancePoints.map((point) => <li key={point} className="flex items-center gap-3 text-sm font-medium text-text-muted"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white"><CheckCircle2 className="h-4 w-4" /></span>{point}</li>)}
            </ul>
            <img src="/images/contact/project-enquiry.png" alt="Laptop project dashboard with chat bubbles and a paper plane" className="mt-8 w-full max-w-[520px] rounded-[26px] object-contain shadow-[0_20px_60px_rgba(22,119,255,.1)]" loading="lazy" />
          </div>

          <ProjectEnquiryForm />
        </div>
      </section>
    </div>
  );
}

