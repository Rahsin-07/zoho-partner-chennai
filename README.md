# ZoFlowX — Zoho Partner Chennai (v7)

A premium, modern Next.js 14 landing page for ZoFlowX's Chennai Zoho Partner offering.

## What's new in v7

This is the **Chennai variant** of the v6 Bangalore site. Same UI identity, all-new content. Major enhancements over v6:

- **Tri-color brand emphasis everywhere.** The 3 colors from the X logo (blue `#2563eb`, red `#dc2626`, yellow `#f59e0b`) are now applied much more aggressively — tri-gradient top bars on every premium card, tri-color "dot trio" brand marks, tri-color pills/badges/step nodes that rotate through the palette in repeating sequence.
- **All Chennai content** — every section (Hero, WhyUs, Process, Services, Industries, Products, Developer Hire, Case Studies, Testimonials, Discovery Call, FAQ, Footer) is rewritten with the Chennai-targeted copy from the brief.
- **New Chennai-only additions:** 12-area service-area pill grid (Anna Nagar, T. Nagar, OMR, Velachery, etc.) in the Why Us section, and a **Chennai ↔ Tirunelveli map toggle** in the Contact section as requested in the brief.
- **Real case studies** pulled from actual recent work — Image Star (Chennai paper distributor Tally→Zoho Books migration), Brite Decking (Australia), and CoWorkFlowX.
- **Arul Raj's LinkedIn URL** wired into the Discovery Call section per the brief.
- **Premium polish:** new hover states with shine sweeps, glow pulses, lift transforms, animated tri-gradient text, scaleX bar reveals on every card, draw-line keyframes, focus-visible accessibility outlines.
- **18 sections** rendered in the same order as v6, with no breaking changes to the navbar, footer, or component structure.

## Run it

```bash
cd zoflowx-chennai-v7
npm install
npm run dev
```

Open <http://localhost:3000>.

## Tech stack

- Next.js 14.2.5 (app router)
- React 18
- Bootstrap 5.3.2 + bootstrap-icons 1.11.3
- No additional dependencies beyond v6 — drop-in compatible.

## Project structure

```
zoflowx-chennai-v7/
├── app/
│   ├── layout.js          # Root layout, font links, metadata
│   └── page.js            # Renders all 18 sections in order
├── components/            # 21 files: 19 sections + LogoMark + ScrollTop
│   ├── Navbar.jsx         # Sticky, blur-on-scroll, mobile menu, Zoho Authorized pill
│   ├── Hero.jsx           # H1 + 6 service hero cards
│   ├── TrustedBrands.jsx  # 8-brand marquee + stats strip
│   ├── Journey.jsx        # 2-card "where you are" decision
│   ├── Problem.jsx        # 7 costing-you-business problems
│   ├── WhyUs.jsx          # 3 reasons + Chennai service-area pills
│   ├── Process.jsx        # 6-step dark-themed timeline
│   ├── Services.jsx       # 5 services + dark CTA banner
│   ├── Industries.jsx     # 16-industry grid
│   ├── ZohoProducts.jsx   # 16 Zoho products
│   ├── DeveloperHire.jsx  # Hire-a-developer + profile mockup
│   ├── CustomBuild.jsx    # Dark CTA banner with tri-color dots
│   ├── CaseStudies.jsx    # 3 real case studies (Image Star first)
│   ├── Testimonials.jsx   # 3 Chennai testimonials
│   ├── DiscoveryCall.jsx  # Arul Raj founder card + Zoho Bookings + LinkedIn
│   ├── Resources.jsx      # 3 article cards
│   ├── Contact.jsx        # Chennai/Tirunelveli map toggle + form
│   ├── FAQ.jsx            # 14 FAQs + Related Pages
│   └── Footer.jsx         # Dark, tri-color top bar, Chennai HQ
├── styles/
│   └── globals.css        # Full CSS system with tri-color brand tokens
├── jsconfig.json          # @/ path alias
├── next.config.js
└── package.json
```

## Design system

CSS variables in `globals.css`:

- `--brand-blue: #2563eb`, `--brand-red: #dc2626`, `--brand-yellow: #f59e0b`
- `--grad-tri: linear-gradient(95deg, #2563eb 0%, #dc2626 55%, #f59e0b 100%)`
- `--grad-tri-radial` (multi-radial), `--shadow-tri`

Utility classes: `.grad-blue-red`, `.grad-red-yellow`, `.grad-blue-yellow`, `.grad-animated`, `.tri-dots`, `.pill-tri`, `.tri-top`, `.btn-gradient`, `.btn-accent`, `.btn-outline-white`, `.btn-primary-custom`, `.section-label`, `.section-title`, `.section-sub`, `.ahover`, `.lift`, `.shine`, `.fade-up`.

## Contact info wired in

- Email: `info@zoflowx.com`
- WhatsApp / Phone: `+91 8190 009 222`
- Booking: `https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation`
- LinkedIn: `https://www.linkedin.com/in/arulraj-inboxist/`

## Notes

- All sections use `IntersectionObserver`-driven `.fade-up` reveals.
- Fully responsive — mobile (single column, vertical Process timeline), tablet (2-column grids), desktop (3–4 column grids, horizontal Process timeline).
- The Chennai/Tirunelveli map embeds use Google Maps' free embed (no API key required).
- Form submission opens the user's mail client with a pre-filled message to `info@zoflowx.com`. Swap in an API endpoint when ready.
