MORROW STUDIO - WEBSITE PROJECT

FILES
- index.html: Home and product catalogue (first page of products is pre-rendered in the HTML)
- about.html, contact.html, login.html (noindex), signup.html (noindex)
- location.html: Karachi (Clifton Block 4) sample location with embedded map and a directions link
- product-details.html: Product details (product chosen by ?id=)
- style.css: styling, light/dark theme variables and responsive rules
- app.js: products, cart, forms, theme toggle (saved in localStorage), menu
- robots.txt, sitemap.xml, set-site-url.js: SEO files (see below)

RUN LOCALLY
Open the folder in VS Code and use Live Server on index.html.

PUBLISH ON GITHUB PAGES
Upload every file in this folder to the ROOT of the repository (index.html must be at the top level),
then Settings > Pages > Deploy from branch.

SEO - ONE STEP AFTER PUBLISHING
sitemap.xml currently contains a placeholder address because the real website address is not known yet.
Once published, run:   node set-site-url.js https://your-username.github.io/your-repository/
(or replace the placeholder text in sitemap.xml by hand and add a "Sitemap:" line to robots.txt).
Canonical and og:url tags are added automatically by app.js using the real address the page is served from
(never on localhost).

ACCESSIBILITY NOTES
- Hidden cart drawer and checkout dialog use the "inert" attribute, so they cannot receive keyboard focus.
- Esc closes the menu, bag and checkout. Focus returns to the button that opened them.
- Colour pairs were checked for WCAG AA contrast in both light and dark themes.
