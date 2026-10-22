import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif', '.ico': 'image/x-icon', '.webmanifest': 'application/manifest+json' };
const marketing = new Set(['/', '/products', '/services', '/about', '/vision', '/contact', '/checkout', '/products/camstore-pos', '/products/cambill-pos', '/products/medibill-pos', '/products/medibill-pro', '/services/web-development', '/services/custom-software-development', '/services/mobile-android-app-development', '/services/consulting-support']);
export const server = http.createServer(async (req, res) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  // No payment API exists. Fail closed for browser redirects, forged callbacks and POSTs.
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400); res.end('Invalid path'); return; }
  if (pathname.startsWith('/api/')) { res.writeHead(503, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }); res.end(JSON.stringify({ error: 'COMMERCE_UNAVAILABLE', message: 'No payment or order service is enabled.' })); return; }
  if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405, { Allow: 'GET, HEAD' }); res.end(); return; }
  if (pathname.replace(/\/$/, '') === '/cookie-policy') { res.writeHead(308, { Location: '/cookies' }); res.end(); return; }
  // Serve only dist; never expose source, hidden files, environment files or arbitrary SPA asset fallbacks.
  if (pathname.includes('\\') || pathname.includes('\0') || pathname.split('/').some(part => part.startsWith('.'))) { res.writeHead(404); res.end('Not found'); return; }
  const target = path.resolve(root, '.' + pathname);
  if (target !== root && !target.startsWith(root + path.sep)) { res.writeHead(404); res.end('Not found'); return; }
  try {
    let file = target;
    let status = 200;
    try { if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html'); }
    catch { file = path.join(root, 'index.html'); if (!marketing.has(pathname.replace(/\/$/, '') || '/')) status = 404; }
    // Missing assets must be 404, not the SPA HTML.
    if (status === 404 && path.extname(pathname)) { res.writeHead(404); res.end('Not found'); return; }
    const data = await readFile(file);
    const extension = path.extname(file);
    res.writeHead(status, { 'Content-Type': mime[extension] ?? 'application/octet-stream', 'Cache-Control': (pathname.startsWith('/assets/') || pathname.startsWith('/images/')) ? 'public, max-age=31536000, immutable' : 'no-cache' });
    res.end(req.method === 'HEAD' ? undefined : data);
  } catch { res.writeHead(404); res.end('Not found'); }
});
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  server.listen(Number(process.env.PORT || 4173), process.env.HOST || '0.0.0.0', () => console.log(`SMVM preview: http://127.0.0.1:${server.address().port}`));
}
