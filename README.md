# Prime Estates – Real Estate Landing Page

Modern, responsive single-page site for a boutique real estate agency. Built with HTML, CSS, and vanilla JS—no build steps required.

## Structure
- `index.html` – page markup and sections (hero, listings, neighborhoods, testimonials, contact, footer).
- `assets/css/styles.css` – layout, typography, theme, and responsive rules.
- `assets/js/script.js` – listing category filter, demo search handler, contact form status messaging.

## Running locally
1) Open `index.html` directly in your browser, or  
2) Serve the folder for nicer caching/CORS defaults (example):
```bash
python -m http.server 8000
```
Then visit http://localhost:8000

## Editing
- Update copy/images in `index.html`.
- Adjust colors/spacing in `assets/css/styles.css`.
- Extend interactivity in `assets/js/script.js` (e.g., connect search to real data).

## Features
- Responsive layout with sticky topbar and hero search.
- Listing cards filterable by category.
- Contact form shows inline status confirmation.
- Dark, gradient-accented visual theme.

