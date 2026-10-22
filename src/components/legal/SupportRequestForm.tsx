import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import identity from '../../config/legal.json';
import { prepareSupport, supportMailto, type SupportRequest } from '../../lib/support';

export function SupportRequestForm({ category = 'Complaint' }: { category?: string }) {
  const [values, setValues] = useState<SupportRequest>({ category, email: '', product: '', orderReference: '', paymentReference: '', reason: '', consent: false });
  const [draft, setDraft] = useState<ReturnType<typeof prepareSupport> | null>(null);
  const [message, setMessage] = useState('');
  const update = (key: keyof SupportRequest, value: string | boolean) => {
    setValues(current => ({ ...current, [key]: value })); setDraft(null); setMessage('');
  };
  function submit(event: FormEvent) {
    event.preventDefault();
    try { setDraft(prepareSupport(values)); setMessage('Draft prepared on this device. Nothing has been submitted. Review it below, then send it using your email service.'); }
    catch (error) { setMessage(error instanceof Error ? error.message : 'Check your entries.'); }
  }
  async function copy() {
    try { await navigator.clipboard.writeText(draft!.body); setMessage('Copied. Paste into an email and send it to the displayed support address.'); }
    catch { setMessage('Clipboard access is unavailable. Select and copy the text in the draft box below.'); }
  }
  return <section id="support-request" className="support-request" aria-labelledby="support-request-title">
    <h2 id="support-request-title">Prepare a support request</h2>
    <p>This tool prepares an email; it does not create a ticket or confirm receipt. Email: <a href={`mailto:${identity.supportEmail.value}`}>{identity.supportEmail.value}</a>.</p>
    <form onSubmit={submit} className="legal-form">
      <label>Request type<select value={values.category} onChange={e => update('category', e.target.value)}>{['Complaint', 'Refund request', 'Payment failure or incorrect charge', 'License or activation issue', 'Delivery or technical issue', 'Purchase question', 'Privacy request', 'Security report'].map(item => <option key={item}>{item}</option>)}</select></label>
      <label>Your email<input type="email" autoComplete="email" required maxLength={254} value={values.email} onChange={e => update('email', e.target.value)} /></label>
      <label>Product or service<input required maxLength={120} value={values.product} onChange={e => update('product', e.target.value)} /></label>
      <label>Order reference (optional)<input maxLength={100} value={values.orderReference} onChange={e => update('orderReference', e.target.value)} /></label>
      <label>Payment reference (optional)<input maxLength={100} value={values.paymentReference} onChange={e => update('paymentReference', e.target.value)} /></label>
      <label className="legal-form-wide">Reason and requested outcome<textarea required minLength={20} maxLength={2000} rows={5} value={values.reason} onChange={e => update('reason', e.target.value)} aria-describedby="support-sensitive-notice" /></label>
      <p id="support-sensitive-notice" className="legal-form-wide">Do not include card numbers, CVV, OTPs, passwords, health records or sensitive attachments. References are optional if unavailable.</p>
      <label className="legal-check legal-form-wide"><input type="checkbox" required checked={values.consent} onChange={e => update('consent', e.target.checked)} /><span>I agree to use these details to prepare and share this request with SMVM support. Read the <Link to="/privacy">Privacy Policy</Link>. This is not marketing consent.</span></label>
      <button type="submit" className="button-primary">Prepare email draft</button>
    </form>
    <p role="status" className="legal-status">{message}</p>
    {draft && <div className="support-draft"><label>Review your draft<textarea readOnly rows={12} value={draft.body} onFocus={e => e.target.select()} /></label><div className="legal-actions"><a className="button-primary" href={supportMailto(identity.supportEmail.value, draft)}>Open email app</a><button type="button" className="button-outline" onClick={copy}>Copy draft</button></div><p>If your email app does not open or the draft is truncated, copy the complete text above into your email service. You must send it there. No complaint reference or refund approval is generated here.</p></div>}
  </section>;
}
