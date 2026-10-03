# Star Trans — Egypt Energy 2026 Landing Page

A bilingual (English / Arabic) marketing landing page for **Star Trans**, built to be
shared as a single link (e.g. by email) ahead of **Egypt Energy 2026**.

> "Transforming technology into reliable power solutions."

---

## 1. Project Goals

- Present Star Trans quickly and professionally to exhibition visitors and prospects.
- Communicate that the company works in **low voltage power solutions**.
- Feature the **Egypt Energy 2026** presence: Bronze Sponsor, dates, venue and booth
  number (**Hall 2 | Booth H2.G50**).
- Showcase the product range and the booth design.
- Offer a clear call-to-action at the end of the page: **download the full catalogue PDF**.
- Serve both English and Arabic audiences from the same single link.

---

## 2. Main Features

| Feature | Details |
|---|---|
| **Bilingual EN / AR** | One-click language toggle in the header. Switches all text, typography (Inter ↔ Cairo) and page direction (LTR ↔ RTL). Choice is remembered in `localStorage`. |
| **Animated hero** | Slow background drift, gradient scrim, technical grid overlay, floating product chips and animated title. |
| **Scroll progress bar** | Gradient bar across the top of the page. |
| **Floating header** | Transparent over the hero, then turns to a frosted-glass light bar once scrolled. |
| **Marquee strip** | Automatically scrolling band of product categories (pauses on hover). |
| **Product range** | 5 product families rendered from a data file, each with an image, description, model list and feature tags. |
| **Stat counters** | Numbers animate up when scrolled into view. |
| **Booth section** | 3D booth render with a location tag and four info cards (dates, venue, stand, sponsorship). |
| **Exhibition countdown** | Live days, hours, minutes and seconds countdown to 12 October 2026, fully translated in English and Arabic. |
| **Visit / RSVP question** | Interactive "Are you coming to Egypt Energy 2026?" prompt. Answering **Yes** shows a happy Star Trans engineer illustration with confetti and a CTA to the booth; answering **No** shows a sad engineer with a CTA to the catalogue. A reset button lets visitors answer again. |
| **Download CTA** | Dedicated dark block at the end of the page with a "Download PDF Catalogue" button. |
| **Responsive** | Breakpoints at 1080 / 900 / 640 px; mobile slide-down menu; touch-friendly throughout. |
| **Accessibility** | Semantic landmarks, ARIA labels/roles, visible focus, `prefers-reduced-motion` support, descriptive `alt` text. |

---

## 3. Functional Entry Points (URIs)

This is a **single-page static site** — all navigation is in-page anchors on one file.

| Path | Description |
|---|---|
| `/index.html` | The whole landing page. |
| `/index.html#hero` | Hero / top. |
| `/index.html#about` | About Star Trans + four pillars. |
| `/index.html#products` | The five product families. |
| `/index.html#why` | Why Star Trans (power quality, protection, reliability, medical). |
| `/index.html#booth` | Booth render and event info cards. |
| `/index.html#countdown` | Live countdown to Egypt Energy 2026. |
| `/index.html#visit` | **Interactive visit / RSVP question with the two engineer illustrations.** |
| `/index.html#download` | **Catalogue PDF download section.** |

**Query parameters:** none. **Language:** handled client-side via the header toggle
(persisted as the `startrans-lang` key in `localStorage`), not via a URL parameter.

### Catalogue download

The download button on `#download` points to the self-hosted catalogue PDF:

```
catalogue.pdf
```

The catalogue is included in the project so the download no longer depends on an external host.

---

## 4. File Structure

```
index.html                 Page markup and section structure
css/style.css              All styling, animations and responsive rules
js/data.js                 Content model (bilingual product data)
js/i18n.js                 Translation strings, language switching, RTL handling
js/main.js                 Rendering, reveal animations, counters, RSVP logic, nav
images/                    Product and campaign imagery
README.md                  This file
```

---

## 5. Data Model / Storage

There is **no database and no backend**. All content is static.

- **Content model:** `js/data.js` exports a `DATA` object holding the marquee items,
  the five product families. Every user-facing string is
  bilingual in the form `{ en: "...", ar: "..." }`.
- **Copy / UI strings:** `js/i18n.js` holds the `TRANSLATIONS` map, keyed by
  `data-i18n="..."` attributes in `index.html`. The `pick()` helper selects the right
  language for objects coming from `data.js`.
- **Persistence:** only the visitor's language preference, in browser `localStorage`.
  Nothing is sent to a server.

### Images used

| File | Used for |
|---|---|
| `images/hero-main.png` | Hero background + hero artwork card |
| `images/product-transformers.jpg` | Low Voltage Transformers card |
| `images/product-stabilizers.jpg` | Voltage Stabilizers card |
| `images/product-reactors.png` | Reactors card |
| `images/product-lv-panels.jpg` | Low Voltage Panels card |
| `images/product-medical.jpg` | Medical Isolation card |
| `images/poster-booth.png` | Booth section |
| `images/engineer-happy.svg` | "Yes, I'll be there" answer illustration |
| `images/engineer-sad.svg` | "No, I can't make it" answer illustration |

---

## 6. External Dependencies (CDN)

Loaded over CDN; an internet connection is required for fonts and icons.

- **Google Fonts** — Inter (Latin) + Cairo (Arabic)
- **Font Awesome 6.4.0** — icons

---

## 7. Currently Completed

- [x] Full bilingual English / Arabic content with RTL support
- [x] Animated hero with event details (dates, venue, booth, sponsor tier)
- [x] Product range section — five families with models and tags
- [x] Why-Us feature grid
- [x] Booth section with 3D render and info cards
- [x] Live bilingual countdown to the exhibition opening day
- [x] Interactive visit / RSVP question with happy & sad engineer illustrations
- [x] Catalogue PDF download section
- [x] Responsive layout verified at desktop and mobile widths

---

## 8. Not Yet Implemented

- **Contact form / lead capture** — would need a backend or a third-party form service.
- **Enquiry tracking** — no analytics wired up.
- **Self-hosted PDF** — the catalogue is currently linked from an external URL.
- **Arabic product imagery** — the posters are English-only; Arabic text appears in the page copy.
- **Individual product detail pages** — the current build is a single page.

---

## 9. Recommended Next Steps

1. **Self-host the catalogue PDF** inside the project so the link never depends on an external file host.
2. **Add a lead-capture form** (name, company, email, interest) using the RESTful Table API so
   enquiries are stored and exportable — accompanied by clear copy explaining that it is not
   a secure channel for sensitive data.
3. **Add real contact details** (phone, email, address, website, social links) to the footer,
   as soon as the company supplies them.
4. **Produce Arabic versions of the key posters** for a fully localised experience.
5. **Add a QR code** of the page URL to printed stand materials.
6. **Post-event**: swap the RSVP question for a "Thanks for visiting" state and a next-steps CTA.

---

## 10. Notes for Maintainers

- **To change copy:** edit `js/i18n.js` (UI strings) and `js/data.js` (product/gallery content).
  Never hard-code bilingual text directly in `index.html` — use `data-i18n` keys.
- **To add a product:** append an entry to the `DATA.products` array in `js/data.js`;
  the card markup is generated automatically.
- **Do not inline complex JavaScript into `index.html`.** Keep scripts in `js/*.js`;
  inline scripts break if they contain the literal `</script>` sequence.
- **RSVP behaviour:** `showVisitResult()` in `js/main.js` swaps the illustration between
  `images/engineer-happy.svg` and `images/engineer-sad.svg`, sets the message and the CTA
  target, and triggers confetti on a "Yes" answer.
- **Illustrations are hand-authored SVG** (no external assets), so they are crisp at any size
  and load instantly. Their palette follows the brand tokens in `css/style.css`.

---

## 11. Public URLs

| Purpose | URL |
|---|---|
| Catalogue PDF (self-hosted) | `catalogue.pdf` |
| Published site | Publish via the **Publish tab** to obtain the live URL |

*No API endpoints are used by this project.*
