import { createServer } from 'vite';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

// Render the same policy components/data used by the SPA. No separate legal copy.
const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { renderPolicies } = await vite.ssrLoadModule('/src/prerender.tsx');
  const { pages, archive, origin } = renderPolicies();
  const template = await readFile('dist/index.html', 'utf8');
  const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  for (const page of pages) {
    const html = template.replace(/<title>.*?<\/title>/s, `<title>${escape(page.title)}</title>`)
      .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${escape(page.description)}" />`)
      .replace('</head>', `<link rel="canonical" href="${origin}${page.path}" /><meta name="robots" content="noindex, follow" /></head>`)
      .replace('<div id="root"></div>', `<div id="root">${page.html}</div>`);
    const directory = path.join('dist', page.path.slice(1));
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, 'index.html'), html);
  }
  const archivePath = `docs/legal/archive/${archive.version}.json`;
  const content = JSON.stringify(archive, null, 2) + '\n';
  await mkdir('docs/legal/archive', { recursive: true });
  let previous;
  try { previous = await readFile(archivePath, 'utf8'); } catch (error) { if (error.code !== 'ENOENT') throw error; }
  if (previous && previous !== content) throw new Error('Policy archive is immutable: increment policyVersion before changing archived legal content or identity.');
  if (!previous) await writeFile(archivePath, content);
  // Internal review snapshots stay in docs and are not published with the website.
  // Draft policies are crawlable via links, but excluded from indexing and sitemap until approved.
  const routes = ['/', '/products', '/products/camstore-pos', '/products/cambill-pos', '/products/medibill-pos', '/products/medibill-pro', '/services', '/services/web-development', '/services/custom-software-development', '/services/mobile-android-app-development', '/services/consulting-support', '/about', '/vision', '/contact'];
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(route => `<url><loc>${origin}${route}</loc></url>`).join('')}</urlset>\n`);
  await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
  console.log(`Prerendered ${pages.length} legal routes; archived ${archive.version}; generated sitemap and robots.txt.`);
} finally { await vite.close(); }
