import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createServer } from 'vite';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server.js';

const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
after(() => vite.close());
const { policies, policyMetadata } = await vite.ssrLoadModule('/src/data/policies.ts');
const { checkoutReadiness } = await vite.ssrLoadModule('/src/lib/commerce.ts');
const { prepareSupport, supportMailto } = await vite.ssrLoadModule('/src/lib/support.ts');
const { renderPolicies } = await vite.ssrLoadModule('/src/prerender.tsx');
const identity = JSON.parse(await readFile('src/config/legal.json', 'utf8'));
const valid = { category: 'Refund request', email: 'test@example.com', product: 'CamStore POS', orderReference: '', paymentReference: '', reason: 'Software has not been delivered; please investigate.', consent: true };

test('all nine legal documents have unique routes, complete metadata and unique section anchors', () => {
  assert.equal(policies.length, 9);
  assert.equal(new Set(policies.map(p => p.path)).size, policies.length);
  for (const policy of policies) {
    assert.equal(new Set(policy.sections.map(s => s.id)).size, policy.sections.length);
    assert.ok(policy.sections.length >= 4);
    const metadata = policyMetadata(policy);
    assert.equal(metadata.effectiveDate, 'LEGAL_APPROVAL_REQUIRED');
    assert.equal(metadata.version, identity.policyVersion);
    assert.equal(metadata.publicUrl, identity.websiteUrl + policy.path);
    for (const section of policy.sections) assert.ok(section.paragraphs.every(p => p.length > 40));
  }
});
test('unverified merchant and approval cannot enable production checkout', () => {
  assert.equal(identity.productionCheckoutEnabled, false);
  assert.equal(checkoutReadiness().enabled, false);
  assert.ok(checkoutReadiness().blockers.length >= 6);
  assert.equal(identity.supportTelephone.value, null);
  assert.equal(identity.supportEmail.status, 'BUSINESS_VERIFICATION_REQUIRED');
});
test('refund draft requires consent and a valid email, product and explanation', () => {
  for (const patch of [{ consent: false }, { email: 'invalid' }, { product: '' }, { reason: 'Short' }, { reason: 'x'.repeat(2001) }, { orderReference: 'x'.repeat(101) }]) {
    assert.throws(() => prepareSupport({ ...valid, ...patch }));
  }
});
test('missing payment references do not prevent raising a complaint; no success or ticket fabricated', () => {
  const draft = prepareSupport(valid);
  assert.match(draft.body, /Order reference: Not available/);
  assert.match(draft.body, /not a ticket, order or refund confirmation/);
  assert.ok(!draft.body.includes('REFUNDED'));
});
test('email content is percent-encoded; special characters cannot inject mailto headers', () => {
  const draft = prepareSupport({ ...valid, reason: 'Please investigate &bcc=attacker@example.com\nSubject: forged <script>alert(1)</script>' });
  const uri = supportMailto(identity.supportEmail.value, draft);
  assert.equal(uri.split('&').length, 2);
  assert.ok(!uri.includes('<script>'));
  assert.equal(new URL(uri).searchParams.get('body'), draft.body);
});
test('policy rendering contains customer terms and working anchors without internal verification details', () => {
  for (const page of renderPolicies().pages) {
    assert.doesNotMatch(page.html, /BUSINESS_VERIFICATION_REQUIRED|LEGAL_APPROVAL_REQUIRED|Merchant and support details|merchant-details|Draft for merchant and legal review|legal\/archive/);
    assert.match(page.html, /Last updated/);
    const footer = page.html.match(/<footer[\s\S]*?<\/footer>/)?.[0];
    assert.ok(footer);
    assert.match(footer, /href="\/privacy"/);
    assert.match(footer, /href="\/terms"/);
    assert.doesNotMatch(footer, /href="\/refund-policy"|href="\/grievance"|footer-policies/);
    assert.ok(!page.html.includes('tel:'));
    assert.equal((page.html.match(/<h1[ >]/g) || []).length, 1);
    const ids = [...page.html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]);
    assert.equal(new Set(ids).size, ids.length);
    for (const match of page.html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(match[1]));
  }
});
test('refund form starts unchecked and describes handoff rather than receipt', () => {
  const html = renderPolicies().pages.find(p => p.path === '/refund-policy').html;
  assert.match(html, /type="checkbox" required=""/);
  assert.ok(!html.includes('checked=""'));
  assert.match(html, /does not create a ticket or confirm receipt/);
});
test('published merchant phone and form telephone collection are removed', async () => {
  for (const file of ['src/config/contact.ts', 'src/pages/Contact.tsx', 'src/components/contact/ContactHero.tsx', 'src/components/contact/ContactInfoCards.tsx', 'src/components/contact/ProjectEnquiryForm.tsx']) {
    const source = await readFile(file, 'utf8');
    assert.ok(!/contactConfig\.phone|tel:|type="tel"/.test(source), file);
  }
  const { Contact } = await vite.ssrLoadModule('/src/pages/Contact.tsx');
  const html = renderToString(React.createElement(StaticRouter, { location: '/contact' }, React.createElement(Contact)));
  assert.match(html, /smvmsoftware@gmail\.com/);
  assert.doesNotMatch(html, /BUSINESS_VERIFICATION_REQUIRED|LEGAL_APPROVAL_REQUIRED|Merchant and support details|Merchant details|Business hours|verification pending/);
});
test('purchase screen rejects a forged browser success and keeps unchecked acknowledgment and payment disabled', async () => {
  const { PurchaseReview } = await vite.ssrLoadModule('/src/pages/PurchaseReview.tsx');
  const html = renderToString(React.createElement(StaticRouter, { location: '/checkout?product=camstore-pos&payment_status=paid&amount=1' }, React.createElement(PurchaseReview)));
  assert.match(html, /CamStore POS/);
  assert.match(html, /disabled=""[^>]*>Payment unavailable/);
  assert.ok(!html.includes('checked=""'));
  assert.ok(!html.includes('Payment successful'));
  assert.doesNotMatch(html, /BUSINESS_VERIFICATION_REQUIRED|LEGAL_APPROVAL_REQUIRED|verification pending/);
  assert.match(html, /not an order or binding purchase acceptance/);
});
