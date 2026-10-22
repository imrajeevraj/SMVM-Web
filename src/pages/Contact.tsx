import { Link } from 'react-router-dom';
import './Legal.css';
import { CheckCircle2, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactInfoCards } from '@/components/contact/ContactInfoCards';
import { ProjectEnquiryForm } from '@/components/contact/ProjectEnquiryForm';
import { contactConfig } from '@/config/contact';
import './ContactPage.css';

const reassurancePoints = [
  'A focused response from the right SMVM team member',
  'Clear recommendations based on your actual requirement',
  'Your information is used only to discuss your enquiry',
] as const;

export function Contact() {
  return (
    <div className="contact-page">
      <ContactHero />
      <ContactInfoCards />
      <div className="site-container contact-legal"><p className="mt-6"><Link className="button-outline" to="/grievance#support-request">Refund, payment, license or privacy request</Link></p></div>

      <section id="project-enquiry" className="contact-enquiry" aria-labelledby="contact-enquiry-title">
        <div className="contact-enquiry__orb" aria-hidden="true" />
        <div className="site-container contact-enquiry__layout">
          <aside className="contact-enquiry__intro">
            <p className="contact-eyebrow"><Sparkles aria-hidden="true" /> Project enquiry</p>
            <h2 id="contact-enquiry-title">Share the goal. We&apos;ll help shape the <span>right solution.</span></h2>
            <p className="contact-enquiry__lead">A short overview is enough to begin. Tell us what your business needs, what is slowing you down, or what you want to launch next.</p>

            <ul className="contact-enquiry__assurances">
              {reassurancePoints.map((point) => (
                <li key={point}><span><CheckCircle2 aria-hidden="true" /></span>{point}</li>
              ))}
            </ul>

            <div className="contact-enquiry__visual">
              <img
                src="/images/contact/project-enquiry.webp"
                srcSet="/images/contact/project-enquiry-mobile.webp 480w, /images/contact/project-enquiry.webp 1200w"
                sizes="(max-width: 640px) 100vw, 480px"
                alt="Project dashboard prepared for a software enquiry"
                loading="lazy"
                decoding="async"
                width={800}
                height={500}
              />
              <div className="contact-enquiry__trust"><ShieldCheck aria-hidden="true" /><span><strong>Private by design</strong><small>Your details stay focused on this conversation.</small></span></div>
            </div>

            <div className="contact-enquiry__quick-links">
              <a href={`mailto:${contactConfig.email}`}><Mail aria-hidden="true" /><span><small>Email</small><strong>{contactConfig.email}</strong></span></a>
            </div>
          </aside>

          <ProjectEnquiryForm />
        </div>
      </section>
    </div>
  );
}
