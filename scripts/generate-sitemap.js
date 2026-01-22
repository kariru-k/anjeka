const fs = require('fs');
const path = require('path');

const siteUrl = process.env.SITE_URL || 'https://example.com';
const pages = [
  '/',
  // Add known routes here. For dynamic route sets, extend this script to read your routes or a route manifest.
];

const urls = pages.map((p) => `  <url>\n    <loc>${siteUrl.replace(/\/$/, '')}${p}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

const out = path.join(process.cwd(), 'dist', 'sitemap.xml');
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, xml);
console.log('sitemap written to', out);

