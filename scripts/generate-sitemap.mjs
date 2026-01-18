import fs from "fs";
import path from "path";

const SITE_URL = "https://www.raviaravind.com";

const pages = [
  "/",
  "/about",
  "/publications",
  "/contact",
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${SITE_URL}${page}</loc>
  </url>
`
  )
  .join("")}
</urlset>
`;

const outputPath = path.join(process.cwd(), "public", "sitemap.xml");
fs.writeFileSync(outputPath, sitemap.trim());

console.log("✅ sitemap.xml generated");
