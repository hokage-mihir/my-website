// scripts/generate-sitemap.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name using ES module syntax
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define your website URL
const BASE_URL = 'https://mihirchavan.in';

// Define your routes - update this with all your static routes
const routes = [
  {
    path: '/',
    lastmod: new Date().toISOString().split('T')[0], // Today's date in YYYY-MM-DD format
    priority: '1.0',
    changefreq: 'weekly'
  },
  {
    path: '/about',
    lastmod: new Date().toISOString().split('T')[0],
    priority: '0.8',
    changefreq: 'monthly'
  },
  {
    path: '/projects',
    lastmod: new Date().toISOString().split('T')[0],
    priority: '0.8',
    changefreq: 'monthly'
  }
  // Add any additional routes/pages here
];

// Create the XML sitemap content
const generateSitemapXML = () => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${route.path}</loc>\n`;
    xml += `    <lastmod>${route.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  return xml;
};

// Write the sitemap to a file
const writeSitemap = () => {
  const sitemap = generateSitemapXML();
  const publicDir = path.resolve(__dirname, '..', 'public');
  
  // Ensure the public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

writeSitemap();