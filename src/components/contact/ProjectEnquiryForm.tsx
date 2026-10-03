import { FormEvent, ReactNode, useRef, useState } from 'react';
import { AlertTriangle, ArrowRight, CheckCircle2, Loader2, LockKeyhole, MailCheck } from 'lucide-react';
import { contactConfig } from '@/config/contact';

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  details: string;
  consent: boolean;
};

type FormStatus = 'idle' | 'success' | 'error' | 'handoff';

const initialValues: FormValues = {
  fullName: '', email: '', phone: '', company: '', service: '', budget: '', timeline: '', details: '', consent: false,
};

const fieldClass = 'mt-2 min-h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-text outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10 aria-[invalid=true]:border-danger aria-[invalid=true]:ring-danger/10';

export function ProjectEnquiryForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>('idle');

  const update = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
    if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }));
    if (status !== 'idle') setStatus('idle');
  };

  const validate = () => {
    const next: Partial<Record<keyof FormValues, string>> = {};
    if (!values.fullName.trim()) next.fullName = 'Please enter your full name.';
    if (!values.email.trim()) next.email = 'Please enter your work email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Enter a valid email address.';
    if (!values.service) next.service = 'Please choose a service.';
    if (!values.details.trim()) next.details = 'Please tell us a little about your project.';
    else if (values.details.trim().length < 20) next.details = 'Please add at least 20 characters so we can understand the request.';
    if (!values.consent) next.consent = 'Consent is required before we can prepare your enquiry.';
    return next;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      window.requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');
    try {
      if (contactConfig.submissionEndpoint) {
        const response = await fetch(contactConfig.submissionEndpoint, {
          method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values),
        });
        if (!response.ok) throw new Error('The enquiry endpoint did not accept the request.');
        setStatus('success');
        setValues(initialValues);
      } else {
        await new Promise((resolve) => window.setTimeout(resolve, 450));
        const subject = encodeURIComponent(`Project enquiry from ${values.fullName}`);
        const body = encodeURIComponent([
          `Name: ${values.fullName}`, `Work email: ${values.email}`, `Phone: ${values.phone || 'Not provided'}`,
          `Company: ${values.company || 'Not provided'}`, `Service: ${values.service}`, `Budget: ${values.budget || 'Not specified'}`,
          `Timeline: ${values.timeline || 'Not specified'}`, '', 'Project details:', values.details,
        ].join('\n'));
        setStatus('handoff');
        window.location.href = `mailto:${contactConfig.email}?subject=${subject}&body=${body}`;
      }
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="rounded-[28px] border border-border bg-surface p-5 shadow-[0_24px_70px_rgba(19,68,132,.1)] sm:p-8" aria-label="Project enquiry form">
      <h3 className="text-2xl font-extrabold text-text">Project Enquiry Form</h3>
      <p className="mt-2 text-sm text-text-muted">Fill in the details below and we&apos;ll get back to you.</p>

      <div className="mt-7 grid gap-x-5 gap-y-5 sm:grid-cols-2">
        <FormField id="fullName" label="Full Name" required error={errors.fullName}>
          <input id="fullName" name="fullName" autoComplete="name" value={values.fullName} onChange={(e) => update('fullName', e.target.value)} className={fieldClass} aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? 'fullName-error' : undefined} placeholder="Enter your full name" />
        </FormField>
        <FormField id="email" label="Work Email" required error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={(e) => update('email', e.target.value)} className={fieldClass} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} placeholder="Enter your email address" />
        </FormField>
        <FormField id="phone" label="Phone Number" error={errors.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={(e) => update('phone', e.target.value)} className={fieldClass} aria-invalid={Boolean(errors.phone)} placeholder="Enter your phone number" />
        </FormField>
        <FormField id="company" label="Company / Organization" error={errors.company}>
          <input id="company" name="company" autoComplete="organization" value={values.company} onChange={(e) => update('company', e.target.value)} className={fieldClass} aria-invalid={Boolean(errors.company)} placeholder="Enter company name" />
        </FormField>
        <FormField id="service" label="Service Interested In" required error={errors.service}>
          <select id="service" name="service" value={values.service} onChange={(e) => update('service', e.target.value)} className={fieldClass} aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? 'service-error' : undefined}>
            <option value="">Select a service</option><option>Web Development</option><option>Custom Software Development</option><option>Mobile & Android App Development</option><option>Consulting & Technical Support</option><option>Other</option>
          </select>
        </FormField>
        <FormField id="budget" label="Project Budget" error={errors.budget}>
          <select id="budget" name="budget" value={values.budget} onChange={(e) => update('budget', e.target.value)} className={fieldClass} aria-invalid={Boolean(errors.budget)}>
            <option value="">Select budget range</option><option>Not decided yet</option><option>Under ₹25,000</option><option>₹25,000–₹50,000</option><option>₹50,000–₹1,00,000</option><option>₹1,00,000+</option><option>Discuss with us</option>
          </select>
        </FormField>
        <FormField id="timeline" label="Project Timeline" error={errors.timeline}>
          <select id="timeline" name="timeline" value={values.timeline} onChange={(e) => update('timeline', e.target.value)} className={fieldClass} aria-invalid={Boolean(errors.timeline)}>
            <option value="">Select timeline</option><option>As soon as possible</option><option>Within 2–4 weeks</option><option>Within 1–3 months</option><option>Flexible / To be discussed</option>
          </select>
        </FormField>
      </div>

      <div className="mt-5">
        <FormField id="details" label="Project Details" required error={errors.details}>
          <textarea id="details" name="details" rows={5} value={values.details} onChange={(e) => update('details', e.target.value)} className={`${fieldClass} resize-y py-3`} aria-invalid={Boolean(errors.details)} aria-describedby={errors.details ? 'details-error' : undefined} placeholder="Tell us about your project requirements…" />
        </FormField>
      </div>

      <div className="mt-5">
        <label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-text">
          <input type="checkbox" checked={values.consent} onChange={(e) => update('consent', e.target.checked)} className="mt-0.5 h-4 w-4 rounded border-border text-brand focus:ring-brand" aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? 'consent-error' : undefined} />
          <span>I agree to share my information with SMVM Softwares for the purpose of discussing my project.</span>
        </label>
        {errors.consent && <p id="consent-error" className="mt-2 text-xs font-semibold text-danger">{errors.consent}</p>}
      </div>

      <button type="submit" disabled={isSubmitting} className="button-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70">
        {isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Preparing enquiry…</> : <>Send Project Enquiry <ArrowRight className="h-4 w-4" /></>}
      </button>

      <p className="mt-4 flex items-start justify-center gap-2 text-center text-[11px] leading-5 text-text-muted"><LockKeyhole className="mt-0.5 h-3.5 w-3.5 shrink-0" /> Your information will be used only to respond to your enquiry.</p>
      {!contactConfig.submissionEndpoint && <p className="mt-2 text-center text-[11px] leading-5 text-text-muted">Online submission is not connected yet. This form prepares an email draft for you to review and send.</p>}

      <div className="mt-4" aria-live="polite">
        {status === 'handoff' && <StatusMessage icon={MailCheck} tone="text-brand bg-brand/10" text="Your email app should open with a prepared draft. Review it and choose Send there to complete the enquiry." />}
        {status === 'success' && <StatusMessage icon={CheckCircle2} tone="text-emerald-600 bg-emerald-500/10" text="Your project enquiry was accepted. We’ll use the details only to respond to your request." />}
        {status === 'error' && <StatusMessage icon={AlertTriangle} tone="text-danger bg-danger/10" text={`We couldn't prepare your enquiry. Your entries are still here; please try again or email ${contactConfig.email}.`} />}
      </div>
    </form>
  );
}

function FormField({ id, label, required, error, children }: { id: string; label: string; required?: boolean; error?: string; children: ReactNode }) {
  return <div><label htmlFor={id} className="text-xs font-bold text-text">{label}{required && <span className="text-danger"> *</span>}</label>{children}{error && <p id={`${id}-error`} className="mt-1.5 text-xs font-semibold text-danger">{error}</p>}</div>;
}

function StatusMessage({ icon: Icon, tone, text }: { icon: typeof CheckCircle2; tone: string; text: string }) {
  return <div className={`flex items-start gap-3 rounded-xl p-3 text-xs font-medium leading-5 ${tone}`}><Icon className="mt-0.5 h-4 w-4 shrink-0" />{text}</div>;
}
