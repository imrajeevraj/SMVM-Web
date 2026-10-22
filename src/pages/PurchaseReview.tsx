import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/site';
import { policies } from '../data/policies';
import { checkoutReadiness } from '../lib/commerce';
import './Legal.css';

export function PurchaseReview() {
  const [params] = useSearchParams();
  const [accepted, setAccepted] = useState(false);
  const product = products.find(item => item.slug === params.get('product'));
  const readiness = checkoutReadiness();
  const acceptedPolicies = policies.filter(item => ['terms', 'refund', 'license', 'delivery'].includes(item.id));
  return <article className="legal-page"><div className="site-container max-w-4xl">
    <header className="legal-hero"><p className="section-eyebrow">Purchase information</p><h1>Review before you buy</h1><p className="legal-lead">Online purchases are not available yet. Request a written quotation with confirmed pricing, licensing and delivery terms.</p></header>
    {!product ? <><p>Select a product to review the information required before purchase.</p><div className="legal-actions">{products.map(item => <Link className="button-outline" key={item.slug} to={`/checkout?product=${item.slug}`}>{item.name}</Link>)}</div></> : <>
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <dl className="purchase-summary">{[['Product', product.name], ['Edition / license type', 'To be confirmed in quotation'], ['Quantity', 'To be agreed'], ['Duration / devices / users', 'To be confirmed'], ['Base amount (INR)', 'Quotation required'], ['Discounts', 'Not determined'], ['Applicable taxes', 'As specified in your quotation'], ['Additional fees', 'Must be disclosed in quotation'], ['Final payable amount (INR)', 'Not available — no charge can be made'], ['Digital delivery', 'Method and timing require confirmation']].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      <p>Refund eligibility distinguishes software issues, duplicate payments and professional services. No blanket non-refundable rule applies. Read the policies below; statutory rights remain available.</p>
    </>}
    <div className="legal-body"><nav className="legal-related" aria-label="Purchase policies"><h2>Purchase policies</h2><div>{acceptedPolicies.map(policy => <Link to={policy.path} key={policy.id}>{policy.title}</Link>)}</div></nav></div>
    <label className="legal-check"><input type="checkbox" checked={accepted} onChange={e => setAccepted(e.target.checked)} /><span>I have reviewed the purchase policies listed above. This local review is not an order or binding purchase acceptance.</span></label>
    <p role="status" className="legal-status">{accepted ? 'Review noted for this screen only. It is not saved or sent to a server.' : 'Review acknowledgment is unchecked. No purchase can proceed.'}</p>
    <button type="button" className="button-primary" disabled={!readiness.enabled || !accepted} aria-describedby="checkout-unavailable">Payment unavailable</button>
    <p id="checkout-unavailable" className="mt-6">Online payment is currently unavailable. Please contact us for a quotation.</p>
    <div className="legal-actions"><Link className="button-outline" to={`/contact${product ? `?product=${product.slug}` : ''}`}>Request a quotation</Link><Link className="button-outline" to="/grievance">Payment or purchase support</Link></div>
  </div></article>;
}
