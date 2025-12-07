# Supreme Court of Justice and Law — Static Site

This scaffold contains a dark, stately, responsive static site to present an officially drafted Constitution in English and Urdu. Each law has its own HTML and CSS files so you can add new laws easily.

Files created:
- `index.html` — Landing page
- `constitution.html` — Constitution viewer with TOC
- `law-001.html`, `law-001.css` — First law (Article 001)
- `signatories.html` — Signatories
- `version-history.html` — Version history
- `contact.html` — Contact form (placeholder)
- `download.html` — PDF download page (placeholder)
- `components.css` — Shared theme & components
- `styles.css` — Utility / overrides
- `scripts.js` — Minimal interactive behavior
- `assets/seal.svg` — Court seal
 - `assets/seal.svg` — Court seal
 - `assets/gavel.svg` — Decorative gavel used for animated backgrounds

How to add a new law:
1. Copy `law-001.html` to `law-00X.html`.
2. Create `law-00X.css` and adjust content.
3. Add a link in `constitution.html` TOC.

Notes:
- Replace `assets/signature-placeholder.png` and `law-001.pdf` with official files.
- For bilingual Urdu display, edit `law-00X.html` and include Urdu text with `dir="rtl"` and a Nastaliq font.

Translation & Animations:
- The site includes an animated "Translate" UI as a visual/UX placeholder (`scripts.js` -> `showTranslateOverlay`). Replace or hook this to a translation API (server-side or Google Translate widget) for real translations.
- Pages have reveal and floating animations (CSS keyframes in `components.css`) for a premium, authoritative look.
