// generate-sitemap.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file's directory with ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define your website URL
const BASE_URL = 'https://mihirchavan.in';

// Define your routes
const routes = [
  {
    path: '/',
    lastmod: new Date().toISOString().split('T')[0],
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
];

// Create the XML sitemap content
function generateSitemapXML() {
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
}

// Get the dist directory path
const distDir = path.resolve(__dirname, 'dist');

// Write the sitemap directly to the build directory
try {
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), generateSitemapXML());
    console.log('Sitemap generated successfully in dist/sitemap.xml');
    
    // Also copy robots.txt to dist if it exists in public folder
    const publicRobotsPath = path.resolve(__dirname, 'public', 'robots.txt');
    const distRobotsPath = path.resolve(distDir, 'robots.txt');
    
    if (fs.existsSync(publicRobotsPath) && !fs.existsSync(distRobotsPath)) {
      fs.copyFileSync(publicRobotsPath, distRobotsPath);
      console.log('robots.txt copied to dist directory');
    }
  } else {
    console.error('Error: dist directory does not exist');
  }
} catch (err) {
  console.error('Error generating sitemap:', err);
}