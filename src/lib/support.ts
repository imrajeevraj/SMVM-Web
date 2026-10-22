export type SupportRequest = {
  category: string; email: string; product: string; orderReference: string; paymentReference: string; reason: string; consent: boolean;
};

export function prepareSupport(request: SupportRequest) {
  if (!request.consent) throw new Error('Please agree to use your details to prepare this support request.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(request.email.trim())) throw new Error('Enter a valid contact email.');
  if (!request.product.trim() || request.product.length > 120) throw new Error('Enter a product or service (up to 120 characters).');
  if (request.reason.trim().length < 20 || request.reason.length > 2000) throw new Error('Describe your request in 20 to 2000 characters.');
  if (request.email.length > 254 || request.orderReference.length > 100 || request.paymentReference.length > 100) throw new Error('Please shorten the email or reference fields.');
  const subject = `SMVM support: ${request.category}`;
  const body = [subject, `Reply email: ${request.email.trim()}`, `Product / service: ${request.product.trim()}`,
    `Order reference: ${request.orderReference.trim() || 'Not available'}`,
    `Payment reference: ${request.paymentReference.trim() || 'Not available'}`, '', request.reason.trim(), '',
    'I agree to the use of these details to handle this request.',
    'Prepared locally. This is not a ticket, order or refund confirmation.'].join('\n');
  return { subject, body };
}

export function supportMailto(recipient: string, draft: { subject: string; body: string }) {
  return `mailto:${recipient}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`;
}
