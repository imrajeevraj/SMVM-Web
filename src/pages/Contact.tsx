import { FormEvent, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clipboard, MessageSquareText } from 'lucide-react';
import { Button } from '@/components/ui/Button';

type FormValues = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

const initialValues: FormValues = { name: '', email: '', company: '', subject: '', message: '' };

export function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'ready'>('idle');

  const enquiryText = useMemo(() => [
    `SMVM Softwares enquiry: ${values.subject}`,
    '',
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    values.company ? `Company: ${values.company}` : null,
    '',
    values.message,
  ].filter((line) => line !== null).join('\n'), [values]);

  const update = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setCopyState('idle');
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await navigator.clipboard.writeText(enquiryText);
      setCopyState('copied');
    } catch {
      setCopyState('ready');
    }
  };

  return (
    <div className="w-full bg-background">
      <section className="relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_10%,rgba(22,119,255,.13),transparent_32%),radial-gradient(circle_at_10%_90%,rgba(32,217,255,.08),transparent_28%)]" />
        <div className="site-container max-w-4xl text-center">
          <p className="section-eyebrow">Contact SMVM Softwares</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-[-.04em] text-text sm:text-6xl">Let&apos;s discuss what your business needs</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-text-muted">Tell us about the product, website, automation, or software workflow you are exploring.</p>
        </div>
      </section>

      <section className="pb-24 sm:pb-28">
        <div className="site-container grid max-w-6xl gap-8 lg:grid-cols-[.78fr_1.22fr]">
          <motion.aside initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="rounded-[28px] border border-border bg-[#06152f] p-8 text-white sm:p-10">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-cyan-300"><MessageSquareText className="h-7 w-7" /></span>
            <h2 className="mt-8 text-2xl font-bold">Prepare your enquiry</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">Official contact details have not yet been supplied for publication. This form prepares a clear enquiry you can copy and send through your established SMVM contact channel.</p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[.06] p-5">
              <p className="text-sm font-bold text-white">No message is sent automatically</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">Your details stay in this browser page. The button only copies the completed enquiry.</p>
            </div>
          </motion.aside>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="rounded-[28px] border border-border bg-surface p-6 shadow-[0_24px_70px_rgba(17,43,83,.08)] sm:p-10">
            <h2 className="text-2xl font-bold text-text">Enquiry details</h2>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Full name" id="name" required value={values.name} onChange={(value) => update('name', value)} autoComplete="name" />
                <Field label="Email address" id="email" required type="email" value={values.email} onChange={(value) => update('email', value)} autoComplete="email" />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Company" id="company" value={values.company} onChange={(value) => update('company', value)} autoComplete="organization" />
                <Field label="Subject" id="subject" required value={values.subject} onChange={(value) => update('subject', value)} />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-semibold text-text">Message <span aria-hidden="true" className="text-brand">*</span></label>
                <textarea id="message" required rows={6} value={values.message} onChange={(event) => update('message', event.target.value)} className="mt-3 w-full resize-y rounded-2xl border border-border bg-background p-4 text-base text-text outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30" placeholder="Tell us what you would like to build or improve." />
              </div>
              <Button type="submit" size="lg" className="h-14 rounded-xl px-8 text-base shadow-lg"><Clipboard className="mr-2 h-5 w-5" /> Copy enquiry</Button>
            </form>

            <div aria-live="polite" className="mt-6">
              {copyState === 'copied' && <p className="flex items-center gap-2 rounded-xl bg-success/10 px-4 py-3 text-sm font-semibold text-success"><CheckCircle2 className="h-5 w-5" /> Enquiry copied. Send it through your established SMVM contact channel.</p>}
              {copyState === 'ready' && <div className="rounded-xl border border-border bg-background p-4"><p className="text-sm font-semibold text-text">Copy this enquiry manually:</p><textarea readOnly value={enquiryText} className="mt-3 min-h-48 w-full resize-y rounded-xl border border-border bg-surface p-3 text-sm text-text" onFocus={(event) => event.currentTarget.select()} /></div>}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, id, value, onChange, required = false, type = 'text', autoComplete }: { label: string; id: string; value: string; onChange: (value: string) => void; required?: boolean; type?: string; autoComplete?: string }) {
  return <div><label htmlFor={id} className="text-sm font-semibold text-text">{label} {required && <span aria-hidden="true" className="text-brand">*</span>}</label><input id={id} required={required} type={type} value={value} onChange={(event) => onChange(event.target.value)} autoComplete={autoComplete} className="mt-3 h-12 w-full rounded-xl border border-border bg-background px-4 text-base text-text outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30" /></div>;
}
