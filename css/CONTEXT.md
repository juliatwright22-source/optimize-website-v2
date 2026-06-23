# Optimize Strategic Advisors — Website Project Context

## Project Overview
Static multi-page website redesign for Optimize Strategic Advisors, a boutique strategic 
advisory firm based in Tulsa, Oklahoma. Small senior-level team, 2-10 employees.

**Website:** www.optimizestrategic.com
**Contact:** info@optimizestrategic.com | (918) 995-1088
**Project folder:** optimize-website-v2 (on desktop)

---

## Company Identity
- **Primary descriptor:** Fractional CFO · Commercial Excellence · Executive Coaching
- **Brand philosophy:** Built for the complexity you face.
- **Tone:** High-trust, experience-first, no fluff. Think boutique law firm or private equity.
- **Location:** Tulsa, Oklahoma
- **Key person:** Jonathan LaBoube — Founder & President

---

## Brand Guidelines
- Brand guidelines are provided via a PowerPoint file — always follow that file strictly
- **Colors:** Deep forest green (primary), copper/gold (accent), white (backgrounds)
- **Do not** use geometric triangle patterns (used on old site — not carried over)
- **Do not** use busy backgrounds
- Lots of white space, clean typography, restrained use of color

---

## Services
1. **Fractional CFO** — Cash Flow Management, Bank Covenant Compliance, Budgeting & 
   Forecasting, Financial Reporting & Analysis, M&A Due Diligence, Capital Deployment, 
   Scenario Modeling, KPIs, New Product Launches, Consumer Market Analysis, 
   Customer Profiles, Interim CFO
2. **Executive Coaching** — Enhance Leadership Skills, Uncover Blind Spots, Burn-out 
   Avoidance/Recovery, Succession Planning, Change Management, Organizational Culture, 
   Growth Planning, Goal Setting, Time Management, Talent Acquisition and Retention
3. **Commercial Excellence / Enterprise Advisory** — Strategic advisory, market research, 
   competitor analysis, data-driven growth strategies

---

## Company Values
Integrity · Resourcefulness · Diligence · Hard Work · Compassion

---

## Navigation Structure
- Home
- About Us (dropdown)
  - Our Story
  - Our Team
- Services
- News & Updates
- Contact Us

**Nav behavior:** Horizontal on desktop, hamburger menu on mobile (dropdown must work on mobile too)

---

## Page Structure & Design Rules
- Every page must be **concise and to the point** — one clear idea per section
- No repetitive paragraphs, no filler content, no padding pages to make them longer
- White space is intentional — do not fill it
- Visitor should be able to read each page quickly and leave with a clear understanding

### Home
- Hero: logo, descriptor, one strong headline, one short subheadline, one CTA button
- 3-column service snapshot: title + one sentence each
- "Why Optimize" statement — two to three sentences max
- One client testimonial

### About Us (main page)
- One concise opening statement about firm philosophy
- Key values listed cleanly
- Two teasers linking to Our Story and Our Team — no extra copy

### Our Story
- Founding narrative — no more than three short paragraphs
- One image placeholder

### Our Team
- One card per team member: photo placeholder, name, title, two to three sentence bio, LinkedIn
- No additional copy around cards

### Services
- Three sections (one per service): title, one short paragraph, bullet list of offerings
- Nothing more

### News & Updates
- Clean card layout: title, date, short excerpt, read more link
- No intro paragraph

### Contact Us
- One sentence inviting contact
- Custom styled contact form (see HubSpot integration below)
- Below form: email, phone, LinkedIn

---

## HubSpot Integration
- The contact form must submit directly to **HubSpot via the HubSpot Forms API**
- Do NOT use an embedded HubSpot form — use a fully custom styled form
- Use JavaScript to POST form data to the HubSpot API endpoint
- Leave clearly labeled comments in the code marking where to insert:
  - HubSpot Portal ID
  - HubSpot Form ID

---

## Design Reference
- Reference websites are provided by the client at the start of each session
- **These are the most important design input** — mirror their layout structure, spacing, 
  navigation style, section proportions, typography hierarchy, and overall elegance as 
  closely as possible
- Apply Optimize brand colors and fonts on top — but layout and design decisions must 
  reflect the reference sites, not a generic template
- Inspected HTML/CSS snippets from reference sites may also be provided — replicate 
  the layout structure exactly and apply brand guidelines on top

---

## Technical Requirements
- Static HTML/CSS/JS — no frameworks, no CMS
- All pages share one external CSS file (styles.css)
- Clean semantic HTML
- Fully mobile responsive
- Consistent styling across all pages

---

## Content Placeholder Rules
- Do NOT write real copy — use descriptive placeholders in brackets instead
- Placeholders must be specific to their section, e.g.:
  - [One powerful headline that captures what Optimize does for clients]
  - [Two to three sentences on why every engagement is led by a principal]
  - [One sentence describing what Fractional CFO services do for the client]
- All image placeholders = solid light gray box (background: #D9D9D9) with centered 
  label describing the intended image

---

## File Management
- All files live in the optimize-website-v2 folder on the desktop
- Do not touch any other project folders on the desktop
- File structure:
  - index.html (Home)
  - about.html (About Us)
  - our-story.html
  - our-team.html
  - services.html
  - news.html
  - contact.html
  - styles.css
  - script.js

---

## Session Log
*Update this section at the end of every working session with decisions made and changes.*

### Session 1
- Project initialized
- Prompt finalized
- CONTEXT.md created

### Session 2 — 2026-06-05
- Changed brand tagline from "Counsel without compromise. Boutique by design." to "Built for the complexity you face." — updated in all 7 HTML files and CONTEXT.md
- Rebuilt footer brand block on all 7 pages: merged "OPTIMIZE" and "Strategic Advisors" into one unified white bold element ("OPTIMIZE STRATEGIC ADVISORS") to match the top nav banner; added new `.footer-brand__tagline` class styled as Merriweather bold italic gold to match the header tagline; separated "Tulsa, Oklahoma" into its own `<p>` below the tagline
- Updated `css/styles.css`: replaced `.footer-brand__tag` with `.footer-brand__tagline` (Merriweather, 700, italic, gold, 0.65rem)
- Wired HubSpot form integration in `js/main.js`: inserted Portal ID `242578018` and Form GUID `83344a54-8958-46eb-a414-1ef8ebe8dba3` — no API key required (HubSpot Forms Submissions API is public by design)
- Confirmed HubSpot approach: fully custom-styled website form, data POSTed silently to HubSpot API — visitor never sees HubSpot branding
- **Still pending:** verify internal property name for the Message field in HubSpot (currently mapped as `message` in JS — needs confirmation); update LinkedIn URL to Jonathan's actual profile; update copyright year from 2025 to 2026; fill in all content placeholders; add real images

### Session 3 — 2026-06-08
- Confirmed HubSpot Message field internal property name is `message` — matches what was already in the code, no changes needed; form is fully wired and ready
- Updated LinkedIn URLs for all four team members: Jonathan LaBoube, Brett Reel, Jeremy Thomason, Julia Wright — each card now links to the correct individual profile
- Updated footer LinkedIn link on all 7 pages to the company page: linkedin.com/company/optimize-strategic-advisors
- Updated copyright year from 2025 to 2026 across all 7 pages
- Built out Our Team page: Jonathan LaBoube (Principal & Founder), Brett Reel (title TBD), Jeremy Thomason (title TBD), Julia Wright (Strategy & Innovation Analyst)
- Changed team grid from 3-column to 2-column layout to cleanly accommodate 4 members (2×2); single column on mobile confirmed working
- Increased nav banner height from 76px to 96px; increased logo image height from 44px to 60px for better visibility
- Briefly tested a gold bottom border on the banner — reverted at client's request; original subtle white line restored
- Discussed image/video placement: hero background, Our Story, team headshots, news cards are all placeholder slots ready for real assets
- Discussed free stock image/video sources: Unsplash, Pexels, Stocksnap (photos); Pexels Videos, Pixabay, Coverr (video)
- **Still pending:** Brett and Jeremy's titles; all content placeholders; real photos and images; News & Updates content; domain/hosting setup; live contact form test

### Session 4 — 2026-06-10
- Discussed sharing the site — confirmed files are local only; walked through Netlify Drop as a quick preview/sharing solution; helped locate the project folder via OneDrive path
- Filled in home page hero headline: "From financial leadership and operational improvement to executive coaching and growth planning, we help businesses move from potential to performance."
- Reduced hero h1 font size (clamp 1.4rem–2rem, weight 700) so headline is less dominant
- Filled in home page subheadline: "Built for the complexity you face. Focused on the results that matter."
- Filled in all three home page service snapshot descriptions (Fractional CFO, Commercial Excellence, Executive Coaching)
- Filled in "Why Optimize" blockquote with real copy
- Filled in Our Story page headline: "Built Through Experience. Not Theory."
- Filled in all three Our Story paragraphs with full founding narrative
- Briefly added scroll reveal (slide-in from left) animation to About Us and Our Story pages — reverted at client's request; pages restored to static display
- Discussed future upgrade path to membership/payment platform — recommended keeping marketing site separate and using Kajabi/Teachable for client portal when ready
- Discussed free stock image/video sources (confirmed from Session 3)
- **Still pending:** Brett and Jeremy's titles; About Us philosophy and values copy; team bios; hero background image; team headshots; News & Updates content; domain/hosting setup; live contact form test

### Session 5 — 2026-06-16
- Built and previewed a standalone `transition-demo.html` page showing 4 scroll transition options (Fade Only, Fade+Rise, Slide from Left, Soft Scale) — used to let client compare styles before committing to the real site
- Client selected Option 2 (Fade + Rise) and Option 3 (Gentle Slide from Left)
- Added two CSS classes to `css/styles.css`: `.reveal-rise` (fade + translateY 24px, 0.8s ease) and `.reveal-slide` (fade + translateX -24px, 1s ease); includes `prefers-reduced-motion` override to disable both for accessibility; added stagger delay (0.12s / 0.24s) for 2nd and 3rd siblings in grouped sets
- Added shared `IntersectionObserver` block to `js/main.js` that watches `.reveal-rise, .reveal-slide` and adds `.is-visible` once per element on scroll into view, then unobserves
- Applied `.reveal-slide` to the Home hero (`hero__content`), and to the `.page-hero .container` on all 6 inner pages (About, Our Story, Our Team, Services, News, Contact)
- Applied `.reveal-rise` to all 3 `.services-snapshot__item` blocks on Home; to `.story-text` and the image wrapper `<div>` on Our Story (explicitly excluding the page-hero banner); and to all 4 `.team-card` blocks on Our Team
- **Still pending:** Brett and Jeremy's titles; About Us philosophy and values copy; team bios; hero background image; team headshots; News & Updates content; domain/hosting setup; live contact form test; decide whether to delete transition-demo.html

### Session 6 — 2026-06-17
- Reduced home page hero height from `min-height: 100vh` to `min-height: 70vh` in `css/styles.css` — client wanted it less tall
- Replaced Jonathan's personal email (`jlaboube@optimizestrategic.com`) with the general inbox (`info@optimizestrategic.com`) across all 7 HTML files (footer contact column on every page, plus the Contact page's direct details section) and updated CONTEXT.md to match
- **Still pending:** Brett and Jeremy's titles; About Us philosophy and values copy; team bios; hero background image; team headshots; News & Updates content; domain/hosting setup; live contact form test; decide whether to delete transition-demo.html

### Session 7 — 2026-06-18
- Updated all four team member names and titles in `our-team.html`:
  - Jonathan LaBoube, CPA — Principal & Founder
  - Brett Reel — Executive Director, Commercial Excellence
  - Jeremy Thomason, CPA, MAcc — Executive Director, Financial Leadership
  - Julia Wright — Strategy & Innovation Analyst
- Discussed headshot backgrounds: client has floating-head cutout photos; recommended using Canva (free) to add a professional backdrop — suggested warm off-white/light gray as the most natural-looking option for the site's style
- Assigned `images/brettimage.jpg` to Brett Reel's team card photo slot
- Fixed `.team-card__photo` CSS: added `overflow: hidden` to container and `object-fit: cover` to `img` so photos fill the full square with no grey border showing around the edges
- **Still pending:** Jonathan, Jeremy, and Julia headshots; About Us philosophy and values copy; team bios; hero background image; News & Updates content; domain/hosting setup; live contact form test; decide whether to delete transition-demo.html

### Session 8 — 2026-06-22
- Populated all three service sections in `services.html` with real content drawn from COMPANY INFORMATION.pdf (company pamphlet, employee LinkedIn profiles, client testimonial):
  - **Fractional CFO**: wrote 3-sentence intro paragraph + 9 real bullets (cash flow, budgeting/forecasting, financial reporting & KPIs, M&A due diligence, bank covenant compliance, capital deployment, go-to-market financial planning, consumer market analysis, Interim CFO)
  - **Executive Coaching**: wrote 3-sentence intro paragraph + 8 real bullets (one-on-one development, blind spots, burnout avoidance, succession planning, change management & culture, growth planning, time management, talent advisory)
  - **Commercial Excellence & Enterprise Advisory**: wrote 3-sentence intro paragraph + 8 real bullets (sales team coaching, VP of Sales advisory, sales culture development, go-to-market strategy, revenue & pricing, sales org design, strategic planning, market research)
- Attempted Higgsfield AI image generation for a downtown Tulsa hero — account is at 0 credits on free plan; generation not possible without purchasing credits
- Swapped home page hero background from `tulsa2.jpg` to `pexels-tomfisk-12124482.jpg` (Pexels photo of downtown Tulsa provided by client)
- **Still pending:** About Us philosophy and values copy; News & Updates content (dates, headlines, excerpts for all 6 cards); Our Story founder photo; contact page hero sub-sentence; domain/hosting setup; live contact form test; decide whether to delete transition-demo.html; Higgsfield credits if AI images wanted in future

### Session 9 — 2026-06-23
- Executed full visual design overhaul in `css/styles.css` — premium architectural style inspired by high-end law and asset management firms:
  - Typography: `body` updated to 15.5px / 1.85 line-height / `#2d2d2d` charcoal; `h2` tighter clamp + `-0.02em` letter-spacing; `h3` weight 600 + `-0.01em` letter-spacing; `.btn` 1px border, `border-radius: 2px`, cubic-bezier transition
  - Structural framing: `.section` gained faint green bottom border; `.section--off` gained crisp top + bottom border lines
  - `.why-section blockquote` restyled as framed callout box: white background, 40px padding, soft shadow, gold left accent, `border-radius: 0 4px 4px 0`
  - `.testimonial-section__inner` upgraded: 800px max-width, glass overlay background, gold frame border, 50px/40px padding
  - `.team-card` and `.news-card` rewritten as floating cards: borderless, `border-radius: 4px`, layered soft shadow, lift + deep-green tint shadow on hover
  - `.story-image-placeholder` and `.team-card__photo` gained offset geometric shadow frame: `box-shadow: 6px 6px 0px var(--green-dark)`; `.team-card__photo img` gained `border: 1px solid var(--border)`
- Replaced all structural placeholders with real Unsplash images across 4 pages:
  - `index.html`: hero background swapped to Unsplash corporate architecture photo (1600px)
  - `our-story.html`: gray placeholder div replaced with real collaborative session photo (`object-fit: cover`)
  - `our-team.html`: all 4 headshots kept local files as primary; added `onerror` fallback to Unsplash corporate portraits (with `transform: none` reset on fallback)
  - `news.html`: all 6 cards now have real images — cards 1–3 swapped local files for Unsplash editorial photos; cards 4–6 replaced text placeholders with `<img>` tags
- Populated `about.html` with all real content drawn from COMPANY INFORMATION.pdf and company LinkedIn:
  - Page hero: "Most advisory firms will tell you they're different. We'd rather show you."
  - Philosophy headline: "The Best Counsel Is Personal, Precise, and Earned."
  - Philosophy paragraph: mid-market inflection point framing from company LinkedIn overview
  - All 5 core values (Integrity, Resourcefulness, Diligence, Hard Work, Compassion) with one-sentence descriptions
  - Our Story teaser and Our Team teaser
- Clarified that About Us parent nav link is correct behavior — clicking goes to `about.html`, hovering reveals dropdown (standard pattern for professional sites)
- News & Updates page — client putting a pin in this; will decide later what to replace placeholder articles with
- Home page testimonial (Nick O., VP of Sales & Marketing, Hershey's Metal Meister) still pending — content exists in PDF, not yet placed
- Contact page hero sub-sentence still placeholder
- Initialized git repository in `optimize-website-v2` folder; made initial commit of all 25 files
- Pushed project to GitHub: https://github.com/juliatwright22-source/optimize-website-v2.git
- Provided GitHub Pages setup instructions for getting a live preview URL
- Confirmed workflow: changes do NOT auto-push to GitHub — must manually push at end of each session; I will handle push commands when asked
- **Still pending:** Home page testimonial; News & Updates page content (client deciding approach); contact page hero sub-sentence; GitHub Pages setup; domain connection (client not ready yet); live contact form test