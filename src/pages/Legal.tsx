import { Link } from 'react-router-dom';

export function Legal({ type }: { type: 'privacy' | 'terms' | 'cookies' }) {
  const title = type === 'privacy' ? 'Privacy Policy' : type === 'terms' ? 'Terms of Service' : 'Cookie Policy';
  const policyName = type === 'privacy' ? 'privacy policy' : type === 'terms' ? 'terms of service' : 'cookie policy';
  return (
    <div className="bg-background pb-24 pt-32 sm:pt-36">
      <article className="site-container max-w-3xl">
        <p className="section-eyebrow">Legal</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-text sm:text-5xl">{title}</h1>
        <div className="legal-content-card mt-9 rounded-3xl border border-border bg-surface p-7 sm:p-10">
          <p className="text-base leading-7 text-text-muted">The complete {policyName} has not yet been supplied for publication. We have left this page intentionally neutral instead of inventing legal details.</p>
          <p className="mt-5 text-base leading-7 text-text-muted">For questions about this website or how SMVM Softwares handles an enquiry, please use the official contact form.</p>
          <Link to="/contact" className="button-primary mt-8">Contact SMVM Softwares</Link>
        </div>
      </article>
    </div>
  );
}

