import fs from "fs";
import { sets } from "./data/sets.ts";

const baseUrl = "https://dpullpoint.com";

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

function addUrl(url, priority = "0.7") {
  xml += `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
}

// Páginas fijas
addUrl(`${baseUrl}/`, "1.0");
addUrl(`${baseUrl}/collections`, "0.9");
addUrl(`${baseUrl}/aviso-legal`, "0.4");
addUrl(`${baseUrl}/politica-privacidad`, "0.4");
addUrl(`${baseUrl}/politica-cookies`, "0.4");

// Sets dinámicos
sets.forEach((set) => {
  addUrl(`${baseUrl}/collections/${set.id}`, "0.8");
});

xml += `</urlset>`;

// Guardar archivo en /public
fs.writeFileSync("public/sitemap.xml", xml, "utf8");
console.log("✔ sitemap.xml generado correctamente");
