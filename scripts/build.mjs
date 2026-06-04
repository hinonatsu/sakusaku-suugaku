import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const siteUrl = (process.env.SITE_URL || "https://hinonatsu.github.io/sakusaku-suugaku")
  .replace(/\/+$/, "");
const today = new Date().toISOString().slice(0, 10);

await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });
await cp("index.html", "dist/index.html");
await cp("src", "dist/src", { recursive: true });
await cp("assets", "dist/assets", { recursive: true });
await writeFile(
  "dist/robots.txt",
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
);
await writeFile(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `  <url>\n` +
    `    <loc>${siteUrl}/</loc>\n` +
    `    <lastmod>${today}</lastmod>\n` +
    `    <changefreq>weekly</changefreq>\n` +
    `    <priority>1.0</priority>\n` +
    `  </url>\n` +
    `</urlset>\n`
);

console.log(`Built static site to dist/ for ${siteUrl}/`);
