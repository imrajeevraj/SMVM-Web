import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { server } from '../scripts/serve.mjs';
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
after(() => new Promise(resolve => server.close(resolve)));
const base = `http://127.0.0.1:${server.address().port}`;
const policyPaths = ['/terms', '/privacy', '/refund-policy', '/shipping-and-delivery', '/license-agreement', '/cookies', '/acceptable-use', '/grievance', '/disclaimer'];
test('all legal routes load directly and on repeat requests with prerendered text and canonical metadata', async () => {
  for (const route of policyPaths) for (let i = 0; i < 2; i++) {
    const response = await fetch(base + route);
    assert.equal(response.status, 200, route);
    assert.equal(response.headers.get('x-content-type-options'), 'nosniff');
    const html = await response.text();
    assert.doesNotMatch(html, /BUSINESS_VERIFICATION_REQUIRED|LEGAL_APPROVAL_REQUIRED|Merchant and support details|Draft for merchant and legal review/);
    assert.ok(html.includes(`https://smvmsoftwares.up.railway.app${route}`));
    assert.match(html, /noindex, follow/);
    assert.match(html, /<h1>/);
  }
});
test('existing marketing and all product/service routes retain SPA entry', async () => {
  for (const route of ['/', '/products', '/services', '/about', '/vision', '/contact', '/checkout', '/products/camstore-pos', '/products/cambill-pos', '/products/medibill-pos', '/products/medibill-pro', '/services/web-development', '/services/custom-software-development', '/services/mobile-android-app-development', '/services/consulting-support']) {
    const response = await fetch(base + route);
    assert.equal(response.status, 200, route);
    assert.match(await response.text(), /id="root"/);
  }
});
test('legacy cookie alias redirects to the existing canonical route', async () => {
  const response = await fetch(base + '/cookie-policy', { redirect: 'manual' });
  assert.equal(response.status, 308); assert.equal(response.headers.get('location'), '/cookies');
});
test('forged/repeated callbacks and checkout POSTs fail closed without creating payment state', async () => {
  for (const route of ['/api/checkout', '/api/payments/webhook', '/api/payments/return?status=Credit&payment_status=paid', '/api/refunds']) {
    for (let i = 0; i < 2; i++) {
      const response = await fetch(base + route, { method: 'POST', body: 'status=Credit&amount=1&mac=forged' });
      assert.equal(response.status, 503);
      assert.equal((await response.json()).error, 'COMMERCE_UNAVAILABLE');
    }
  }
});
test('private paths, missing assets and unsupported writes are not served as success', async () => {
  for (const route of ['/.env', '/src/config/legal.json', '/.git/config', '/assets/missing.js', '/unknown-page', '/%5C..%5C.env']) assert.equal((await fetch(base + route)).status, 404, route);
  assert.equal((await fetch(base + '/terms', { method: 'POST' })).status, 405);
  assert.equal((await fetch(base + '/%ZZ')).status, 400);
});
test('review archives remain internal and draft pages are not listed in the sitemap', async () => {
  const identity = JSON.parse(await readFile('src/config/legal.json', 'utf8'));
  const response = await fetch(base + `/legal/archive/${identity.policyVersion}.json`);
  assert.equal(response.status, 404);
  assert.equal((await fetch(base + '/legal/archive/2026-10-22-draft.1.json')).status, 404);
  const archive = JSON.parse(await readFile(`docs/legal/archive/${identity.policyVersion}.json`, 'utf8'));
  assert.equal(archive.policies.length, 9);
  const sitemap = await (await fetch(base + '/sitemap.xml')).text();
  assert.ok(sitemap.includes('/products/camstore-pos'));
  assert.ok(!sitemap.includes('/terms'));
});
