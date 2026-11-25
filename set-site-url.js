// Usage: node set-site-url.js https://username.github.io/repository/
// Writes your real published address into sitemap.xml and robots.txt (nothing else is changed).
const fs = require('fs');
let base = process.argv[2];
if (!/^https:\/\/[^\s]+$/.test(base || '')) { console.error('Please give the full https address, e.g. https://username.github.io/repository/'); process.exit(1); }
if (!base.endsWith('/')) base += '/';
let sm = fs.readFileSync('sitemap.xml', 'utf8').replace(/https:\/\/YOUR-USERNAME\.github\.io\/YOUR-REPOSITORY\//g, base).replace(/<!--[\s\S]*?-->\n?/, '');
fs.writeFileSync('sitemap.xml', sm);
let rb = fs.readFileSync('robots.txt', 'utf8').replace(/\n# After publishing[^\n]*\n?/, '').trimEnd() + '\n\nSitemap: ' + base + 'sitemap.xml\n';
fs.writeFileSync('robots.txt', rb);
console.log('Done. sitemap.xml and robots.txt now use', base);
