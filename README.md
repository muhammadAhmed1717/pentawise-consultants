# Pentawise Consultants: Website (Next.js)

The approved home-page design, built with **Next.js 15 (App Router) + TypeScript**.
It uses no UI or animation libraries: just Next.js, React and plain CSS.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

Node 18.18+ (Node 20/22 recommended). Deploys as-is to Vercel or any Node host.

---

## Project structure

```
app/
  layout.tsx              fonts (self-hosted via next/font), SEO metadata
  page.tsx                page order: Hero → Destinations → Universities → Services
                          → Success Stories → Contact form → FAQ → Footer
  globals.css             all styles + animations (desktop first, phone ≤ 760px)
components/               one file per section
lib/
  content.ts              ALL text, phone, WhatsApp, email, socials, FAQs, countries
  destinations.ts         tile positions for the destination artwork (generated)
  universities.ts         partner logo list
  useInView.ts            tiny scroll observer used to trigger animations
public/
  images/                 optimised photos & logos (WebP)
  svg/                    headings, service icons/text, footer headings (vector)
```

**To change any text, number or link, edit `lib/content.ts`.**

---

## Layout rules (as approved)

- **Laptop/desktop (> 760px)** keeps exactly the same layout at every width. It
  scales fluidly: menu in the header, 3×2 services, the staggered destination
  artwork, the side-by-side boarding pass, the two-column FAQ and five footer columns.
- **Phone (≤ 760px)** has its own layout:
  - a menu button, and a smaller "Free Consultation" button
  - stats in one row
  - compact destination artwork whose countries swap one tile at a time
  - centred services
  - the boarding pass stacked vertically
  - a compact FAQ
  - a reorganised footer

## Interactions

| Element | Behaviour |
|---|---|
| "Book a free Expert Consultation" (header) and "Book a Call" (FAQ) | Open the **boarding-pass form in a popup**. It closes with ✕, Esc or a click outside, and locks page scroll while open. |
| Boarding-pass form (page + popup) | Validates required fields, submits directly to Web3Forms, shows a thank-you message. |
| WhatsApp button | Fixed bottom-right on every page and device. Opens `wa.me/923317922227`. |
| Phone menu | Dropdown with Home / Countries / Universities / Contact Us. |
| FAQ | Accordion (one open at a time), accessible (`aria-expanded`, regions). |

### Web3Forms email delivery
Create a Web3Forms access key for `pentawise.consultants@gmail.com` at
https://web3forms.com/, then set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` to that key
in your local `.env.local` and in the Vercel project's Environment Variables
(Production, Preview, and Development as needed). Redeploy after changing the
Vercel variable. The key is designed for browser use by Web3Forms; the form
submits directly to their API instead of proxying through a serverless route.

### Social links (TODO)
Add the Instagram, LinkedIn and Facebook URLs in `lib/content.ts → site.socials`.

---

## Animations (all CSS, no libraries)

- **Hero:**
  - the header drops in, and the headline reveals upwards with a light sheen sweeping across it
  - two glowing orbs drift behind the content
  - paper planes fly along dashed trails, with a separate version for phones (SVG `animateMotion`, no JS)
- **Stats:** the cards rise one by one, the numbers count up, an underline grows, and the gradient slowly shifts.
- **Destinations:**
  - tiles "deal" out from behind the heading into place, then float gently and lift on hover
  - on phones, tiles cross-fade to new countries one at a time
- **Universities and Success Stories:** endless smooth loops (they don't pause on hover). The story dots follow the loop.
- **Section headings and cards:** headings wipe in, and cards rise in a stagger as each section scrolls into view.
- **Boarding pass:** it tilts up into place, the dashed route marches, the plane bobs and a light scans the barcode.
- **WhatsApp:** the button pops in, with pulsing rings.
- **Reduced motion:** if a visitor has "reduce motion" turned on in their OS, everything is shown with no movement.

Animations only use `transform` / `opacity` / `clip-path`, so they run on the GPU
and don't cause layout shifts.

---

## Performance

- **Images:** every photo goes through `next/image`. It serves AVIF/WebP at the exact size
  needed for each screen (phones get smaller files), lazy-loads anything below the fold, and
  reserves space so nothing jumps. The source images in `/public/images` are already resized
  to 2× their display size and compressed (860 KB total for the whole site).
- **Vector art:** headings, icons and the service descriptions are optimised SVG
  (≈ 113 KB gzipped in total). They stay sharp on every screen. The real text is always
  in the HTML (`sr-only`) for SEO and screen readers.
- **Section backgrounds** start downloading only when the visitor scrolls near them.
- **Phone destination tiles:** each new country photo downloads just before it fades in.
- **Fonts:** self-hosted by `next/font`, with no request to Google at runtime and
  `font-display: swap`. The footer-only font isn't preloaded.
- **JavaScript:** a small amount, used only for the count-up, the scroll observer, the
  popup, the menu, the FAQ and the phone tile rotation. Everything else is server-rendered HTML.
- **Caching:** `next.config.mjs` caches `/images` and `/svg` for 1 year. If you replace a file,
  give it a new name.

### Fonts
| Use | Font |
|---|---|
| Service titles, form, FAQ | Jost (a free version of Futura, as in the design) |
| Navigation, buttons, small labels | Montserrat |
| Hero paragraph, stat labels | Roboto |
| Stat numbers | Unbounded |
| Footer links | Questrial |
| Headings and service descriptions | Exported from the design as SVG (originally Century Gothic, plus the design's display face) |

To render the service descriptions as live text, license **Century Gothic** as a web
font, add it with `next/font/local`, and set `liveServiceText: true` in `lib/content.ts`.

---

## Content notes
- Phone and WhatsApp: **+92 331 7922227**. Email: **info.pentawise@gmail.com**
  (switch to an address on your own domain if available).
- The Sweden photo was supplied as a small image (612×428). If it's an iStock preview,
  license it and replace `public/images/destinations/sweden.webp`. The country name is
  part of each destination image (as in the design).
- Next.js 16 note: if you upgrade, rename the `priority` prop on `<Image>` to `preload`.
