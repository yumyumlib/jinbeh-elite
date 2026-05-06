# jinbeh-elite-phase1 — Project Learnings

This file tracks notable findings, decisions, and tribal knowledge for the
jinbeh-elite-phase1 Next.js website. Add new entries at the top with a
date and short title.

## 2026-05-05 — /frisco/hibachi rebuild + 12-page Reserve-button contrast fix

### Frisco hibachi page: bulleted menu + photo gallery

Rebuilt `src/app/frisco/hibachi/page.tsx`:

1. **Replaced the 14-card image grid** (each card was a Link to a
   `/frisco/hibachi/[item]` subpage with a thumbnail) with a clean,
   categorized **bulleted list** sourced from the official Frisco dinner
   menu PDF (page 2, `Jinbeh-Frisco-Dinner.pdf`). Items are organized into
   four sections with gold horizontal-rule headers and a 2-column grid
   layout on desktop:
   - **Land Entrées** — The Vegetarian, Lemon Sesame Chicken, N.Y. Strip
     Steak, Teriyaki Steak, Filet Mignon, Black Angus Ribeye (10 oz.),
     Chateaubriand
   - **Ocean Entrées** — Yakisoba (Japanese Pasta), Hibachi Calamari,
     Hibachi Salmon, Colossal Shrimp, Jumbo Scallops, Grilled Mahi-Mahi,
     Twin Lobster Tails
   - **Combo Dinner Selection** — Jinbeh Double Delight, Surf N' Turf,
     Land and Sea, Tokyo Trio, Seafood Lover's Combo, Imperial Dinner for 2
   - **Children's Dinners** — chicken, steak, shrimp, filet mignon
     (no description, just the item name)
   Data lives at module scope as `hibachiMenu: HibachiMenuSection[]` for
   easy editing. **No prices** are rendered (per project policy — the PDFs
   are the source of truth for pricing).

2. **Added a "Hibachi Plates at Jinbeh Frisco" photo gallery** below the
   menu list using the eight `C060324` photoshoot photos already
   optimized in `/public/images/catalog/`:
   - `7-C060324-6447.jpg` — steak hibachi angled, blue plate
   - `8-C060324-6462.jpg` — steak hibachi overhead with Jinbeh logo plate
   - `9-C060324-6484.jpg` — shrimp + scallops angled, white plate
   - `10-C060324-6501.jpg` — shrimp + scallops overhead
   - `11-C060324-6544.jpg` — lobster + chicken combo angled
   - `12-C060324-6551.jpg` — lobster + chicken combo overhead
   - `13-C060324-6582.jpg` — three-plate spread overhead with sushi roll
   - `14-C060324-6596.jpg` — three-plate spread with hands and chopsticks
   Layout is a uniform `aspect-[3/2]` grid: 1 col mobile / 2 col tablet /
   4 col desktop. Each `<Image fill>` has proper `sizes` and the first
   four are `loading="eager"`. Data lives at module scope as
   `hibachiGallery`.

3. **Updated the JSON-LD `Menu` schema** to mirror the new
   four-section structure with the same descriptions, replacing the old
   single-section schema with the 14 made-up cards.

4. **Updated the `<title>` and metadata description** to drop the stale
   "14 hibachi options" line.

If new menu items get added, edit `hibachiMenu` and the matching
`hasMenuSection.hasMenuItem` array in `menuSchema` together. The
individual `/frisco/hibachi/[item]` subpages still exist as standalone
routes (filet-mignon, ny-strip, ribeye, chicken-teriyaki, shrimp,
scallops, lobster-tail, salmon, vegetable-tofu, combo-steak-shrimp,
combo-steak-chicken, combo-steak-lobster, combo-seafood, imperial-dinner)
and are not linked from the new bulleted list — they stay reachable via
search/SEO.

### Same Tailwind v4 cascade bug — invisible Reserve buttons (12 pages)

The user reported the **"Reserve a Table" button rendering white-on-white**
in the bottom CTA on `/frisco/hibachi` (text was invisible). Same root
cause as the May 4 hero fix: in Tailwind v4 utilities live in the
`utilities` cascade layer, which loses to unlayered base CSS like

```css
a { color: inherit; ... }
```

(in `src/app/globals.css`). When a `<Link>` sits inside a parent with
`text-white` (e.g. the `bg-gradient-to-br from-accent-red to-deep-indigo
... text-white` CTA banner), the link inherits white from the parent and
its own `text-accent-red` utility cannot override the unlayered
`color: inherit` rule. Result: white text on white background.

**Canonical fix already exists in the codebase**: globals.css L242–256
defines `.btn[class*="text-accent-red"] { color: var(--accent-red)
!important; }` (and the same for `text-white`, `text-charcoal`,
`text-deep-indigo`). Adding the `btn` class to the Link's className
unlocks those `!important` overrides and defeats the inheritance.

The reference pattern lives in `src/components/MenuItemTemplate.tsx`
L304–310 (and `src/app/private-dining/page.tsx` L711, etc.):

```jsx
<Link className="btn bg-white text-accent-red hover:bg-warm-ivory ..." />
<a    className="btn bg-white/20 backdrop-blur text-white border-2 border-white/50 ..." />
```

**12 pages had the bug. All fixed with the canonical `btn` class:**

- `src/app/frisco/hibachi/page.tsx` (the originally reported page)
- `src/app/lewisville/hibachi/page.tsx`
- `src/app/frisco/{appetizers,sushi-rolls,sashimi,cocktails,kids-menu}/page.tsx`
- `src/app/lewisville/{appetizers,sushi-rolls,sashimi,cocktails,kids-menu}/page.tsx`

Both the primary "Reserve a Table" Link and the secondary "Call (xxx)" `<a>`
got the `btn` class for consistency. Where the secondary used the older
`bg-white/20 text-white border border-white/50` pattern, it was upgraded
to the modern `bg-white/20 backdrop-blur text-white border-2 border-white/50`
pattern that matches `MenuItemTemplate.tsx`.

**Future-proofing — search for the broken pattern before adding new
location pages:**
```bash
grep -rn '"bg-white text-accent-red hover:bg-warm-ivory' src/ \
  | grep -v 'btn bg-white'
```
Any hit needs the `btn` class added.

### Verification

- Targeted tsc on all 12 edited files (via `ts.createProgram` with
  `skipLibCheck`) returns clean. Full project tsc takes >90s and times
  out the bash sandbox; scoped check on changed files is the practical
  CI substitute.
- Visually: `text-accent-red` now renders red on white for the primary
  CTA across all 12 pages, matching the homepage / private-dining /
  takeout / dfw-moms canonical pattern.

## 2026-05-04 — Mobile homepage hero + nav fixes

Fixed left-edge text clipping in the homepage hero and tightened the mobile
nav drawer. Three bugs were compounding into the visible breakage:

### Root cause: bare `h1` selector beating Tailwind utilities

In Tailwind v4 (`@import "tailwindcss"`), utility classes live in the
`utilities` cascade layer, which has *lower* priority than unlayered CSS.
The mobile-only override in `src/app/globals.css`

```
@media (max-width: 640px) { h1 { font-size: 2rem; line-height: 1.1; } }
```

was therefore winning over `text-base sm:text-lg` on the hero `<h1>`,
forcing it to render at 32px. Combined with the rotating hook string
"When's the last time dinner was actually entertaining?" set to
`text-3xl` (30px) wrapped in a `WordRotate` span using `inline-block`
+ `overflow-hidden` (which sizes itself to its content with no max
width and *does not* allow word wrap), the centered hero content
became wider than the viewport and produced horizontal page overflow.
Because `<body>` had no `overflow-x: hidden`, the page got a real
horizontal scrollbar and the leftmost characters of every centered
element appeared "clipped" — "apanese, Hibachi…", "ly dinner that's
act…", "anese dining with a show…", "IBACHI IN FRISCO", etc.

### What changed

1. `src/app/globals.css`
   - Added `overflow-x: hidden` + `max-width: 100vw` to `html` and
     `body` so any future overflow can't produce horizontal scroll.
   - Wrapped every bare-element heading rule (`h1`, `h2`, `h3`, `h4`)
     in `:where(...)` — both the unlayered base rules around L166
     and the `@media (max-width: 640px)` overrides around L1454 — so
     they have specificity 0 and Tailwind utilities reliably win.
     This is the right fix for v4: it preserves the global "default
     heading size" behavior for unstyled markdown content while
     letting components opt out with utilities.

2. `src/components/ui/WordRotate.tsx`
   - Outer span changed from `inline-block relative overflow-hidden`
     to `block relative w-full max-w-full text-balance break-words`,
     and inner span from `inline-block` to `block`. Long hooks now
     wrap inside the parent `<p>` instead of overflowing it.

3. `src/components/HeroSection.tsx`
   - Hero `<section>` got `w-full max-w-[100vw]` and reduced mobile
     vertical padding (`py-16 sm:py-24 md:py-32`).
   - H1: `text-sm sm:text-base md:text-lg` (was `text-base sm:text-lg`),
     plus `text-balance leading-snug`.
   - Rotating hook `<p>`: `text-[1.375rem] leading-tight sm:text-4xl
     md:text-6xl lg:text-7xl` (was `text-3xl sm:text-5xl md:text-7xl`).
     `min-h` scaled down to match (`3.5rem / 6rem / 9rem`). Added
     `text-balance` and `tracking-tight` on mobile so the longer
     question-style hooks read cleanly.
   - Subtitle: `text-sm sm:text-lg md:text-xl lg:text-2xl` (was
     `text-base sm:text-xl md:text-2xl`).
   - Both location cards: `max-w-[340px] sm:max-w-[300px]` — gives
     the "#1 Rated Hibachi in Frisco" badge breathing room on the
     smallest viewports.

4. `src/components/Header.tsx` (mobile drawer only)
   - Background changed from `bg-charcoal/95 backdrop-blur-xl` to
     solid `bg-charcoal` so the panel reads as a clearly dark surface
     rather than a translucent gray-beige wash.
   - Row height: every accordion trigger and plain link is now
     `py-2` `text-[13px]` (was `py-2.5` `text-sm`). Saves roughly
     6 rows × 8px = ~48px of vertical real estate.
   - Section dividers: each top-level `nav` item is wrapped with
     `border-t border-white/[0.06]` (skipping the first), so the
     menu reads as a list of distinct sections instead of relying
     on padding alone.
   - "Catering" (the only top-level item without a dropdown) now
     uses the same row template — uppercase tracking-wider + a right
     chevron — so it reads as a sibling of "Menu / Celebrations /
     Dining / Locations / Explore" rather than an orphaned tail.
   - Location switcher pill compressed to a single line with
     smaller font + tighter padding so it doesn't dominate the top
     of the drawer.
   - Caret SVGs use `text-white/60` so the dropdown affordance is
     visible without competing with the label.

### Verification

- `npx tsc --noEmit -p tsconfig.json` exits 0.
- The hero h1 now actually honors its Tailwind class because of the
  `:where()` change. On a 320px viewport the rotating hook renders
  at 22px (1.375rem) and wraps inside the centered `<p>` — no more
  off-canvas overflow, no more left-edge clipping cascade.

### To deploy to staging.jinbeh.com

Same flow as before: commit + push to `main`, then SSH to the
Hostinger VPS and run `bash /opt/jinbeh-elite/deploy-staging.sh`
(it pulls, `npm install`, `npm run build`, `docker compose up -d
--build`). Login is `YumYumJinbeh@gmail.com` (saved in Chrome).

## 2026-05-03 — Master-content edit pass + new World Cup / DFW Moms pages

A large content + branding pass was applied across the site based on a
crawl-style master document (`master-content.md`). 64 EDIT blocks were
processed in one pass, plus two new SEO-optimized celebration pages were
created.

### Pages edited (high-traffic + content)

- `/` (home): removed `Real crab.` lead-in from JinbehExperience hook;
  fixed the Mark L. Yelp testimonial quoting "this beats it" to
  "Jinbeh beats it" so the comparison subject is unambiguous.
- `/about`: removed the "never cooked a day in his life" line from Ben
  Matsuda's bio; reworked the head sushi chef bio to use "Fuji San" by
  name; replaced the Floor Captain card with "A Team That Stays" copy;
  rewrote the longest-tenured employee card as "Hibachi Excellence";
  softened "Every child gets" → "Sometimes kids get" for the origami
  crane copy (in two places); removed the unverified second-dad
  pull-quote; updated Diners' Choice copy to be evergreen
  ("Over the restaurant's lifetime…"); dropped "updated monthly".
- `/accessibility`: removed the 3-5 business day SLA promise.
- `/blog/asian-cuisine-dallas`: replaced the "Uchi Dallas" entry with a
  Jinbeh-focused entry (and removed the duplicate Jinbeh entry below);
  added Jinbeh mention in the traditional Asian section + closing
  paragraph.
- `/blog/ayce-sushi-vs-traditional`: removed em-dashes; added a
  superscript footnote (`<sup>1</sup>` linking to a `#fn-1` anchor at
  the bottom) for the D Magazine "Best Neighborhood Restaurants (2008)"
  award; rewrote AYCE labor-cost bullet; trimmed the documentation
  sentence from the FDA freezing-standards paragraph.
- `/blog/baby-shower-venues`: replaced the unverified guest quote with
  brand-aligned aspirational copy + private-dining link; "Customizable
  menus" → "Menus that accommodate dietary preferences"; "per person"
  → "per entree".
- `/blog/bachelorette-restaurants-dallas`: "customizable group menus"
  → "fun hibachi, sushi, and drink menus".
- `/blog/beer-hard-seltzer`: rewrote the wine-selection blurb to be
  positive instead of self-deprecating; broke the Japanese-beer em-dash
  into two sentences.
- `/blog/best-hibachi-dallas`: dropped "Corporate atmosphere" bullet
  from the chain-hibachi comparison; the broken
  "lunch specials start at just" sentence now references the **Hibachi
  for Two** ($35 Mon–Fri lunch) special.
- `/blog/free-birthday-food-deals`: added an SEO-rich Jinbeh birthday
  paragraph after the "supporting local businesses" section, calling out
  three-touch birthday treatment + linking to /celebrations/birthday +
  /blog/hibachi-birthday-party-ideas + /frisco + /lewisville.
- `/blog/how-to-eat-sushi-guide`: added a "Try Fresh Sushi at Jinbeh:
  Beginners Welcome" section above the bottom CTAs; calls out training
  chopsticks for kids.
- `/blog/jinbeh-gift-cards-guide`: rewrote two newsletter prompts to
  surface the **VIP Birthday Club** at /vip; the lunch-card paragraph
  now references the Hibachi-for-Two special.
- `/blog/offsite-hibachi-catering`: substantial rewrite — Jinbeh does
  **not** do live offsite hibachi shows; offsite catering is delivered
  on presentation trays. Added a clear disclaimer block, rewrote the
  "what's included" section, and added a "live show is at the restaurant
  only" CTA repeatedly. Added a note that catering needs ≥1 week of
  lead time.
- `/blog/omakase-dining-guide`: added "The Omakase Spirit at Jinbeh"
  block that captures the chef's-choice spirit *without* claiming
  Jinbeh offers an omakase menu (per Obsidian rule: omakase is removed
  from the website).
- `/blog/pickleball-restaurants-lewisville`: corrected the grill type
  — Lewisville is **electric**, Frisco is **gas** (it was reversed).
- `/blog/ramune-soda-guide`: added a Jinbeh-first paragraph above the
  "where to buy" section, encouraging guests to enjoy Ramune in-store.
- `/blog/restaurants-private-rooms`: rewrote the Jinbeh paragraph to
  match reality — Lewisville has tatami-style booths near the sushi
  bar, Frisco has a small number of partitioned booths in the back.
- `/blog/sake-pairing-guide` + `/blog/sake-sushi-menu-pairings` +
  `/blog/sake-taste-profile`: added Jinbeh-sake tout blocks that link
  to /happy-hour and both location pages.
- `/blog/seafood-lewisville`: added two paragraphs about the bluefin
  tuna and salmon, plus the sake-and-happy-hour tout.
- `/blog/sushi-identification-chart`: added a Jinbeh sushi tout block,
  rewrote the omakase mention in the ProTip to "ask for the chef's
  favorite signature rolls" (omakase removal).
- `/blog/thanksgiving-dining-guide`: added a "Spend Thanksgiving With
  Jinbeh" block. Cleaned up the existing ProTip tone.
- `/blog/things-to-do-frisco`: added a "Best Thing to Do in Frisco"
  Jinbeh closer with internal links to /blog/best-hibachi-dallas,
  /blog/best-restaurants-stonebriar, and /frisco.
- `/blog/unique-kids-birthday-party-places`: added a "Why Jinbeh Is
  the Best Place for Kids' Birthday Parties" block with the
  three-touch detail + training chopsticks.
- `/careers`: added a paragraph explaining how Jinbeh prioritizes its
  team and how that shows up in guest hospitality.
- `/catering/corporate`: replaced the unsubstantiated "Trusted by major
  corporations" stat strapline with a more concrete description.
- `/catering/wedding`: added an entirely new "Why Jinbeh Is the Best
  Choice for Wedding Catering in DFW" charcoal-bg section with a
  bulleted list and SEO keyword density (Jinbeh, Frisco, Lewisville,
  catering, hibachi, sushi). Notes the offsite-no-show rule explicitly.
- `/celebrations` (index): removed the unverified anniversary review;
  broke 6 em-dashes into clean sentences; added a "Why Jinbeh is the
  best for celebrations in DFW" lead paragraph.
- `/celebrations/asian-restaurant-month`: broke em-dashes; added an
  SEO-rich paragraph about being one of the longest-running Asian-owned
  family-operated Japanese restaurants in North Texas, with location
  links.
- `/celebrations/birthday`: broke em-dashes; added a "Why Jinbeh Is the
  Top Choice for a Birthday Dinner in DFW" block.
- `/celebrations/christmas`: added an "open on Christmas Day" paragraph
  + the no-cooking/no-cleaning Christmas value prop; broke 8 em-dashes.
- `/celebrations/graduation`: removed all references to custom pricing,
  custom menus, and Custom Pricing $0 strings; rewrote FAQ schema +
  page packages to reflect the standard menu reality; gated the price
  rendering with `pkg.price && (...)`.
- `/celebrations/mothers-day`: added "Why Jinbeh is the best place for
  a Mother's Day dinner in DFW" paragraph with cross-link to the new
  /celebrations/dfw-moms page; replaced the omakase reference with
  "Samurai Roll: a Jinbeh signature".
- `/celebrations/team-building`: clarified ideal hibachi-table size
  (7-8) and that we've regularly hosted 40-50 by joining tables.
- `/celebrations/thanksgiving`: added the no-cooking/festive-atmosphere
  paragraph + reservation CTA; broke 7 em-dashes.
- `/delivery`: broke em-dashes; added a Grub Hub / Uber Eats vs.
  catering note that explicitly asks for ≥1 week of lead time for
  catering deliveries.
- `/events`: rewrote the capacity FAQ schema entry to say each location
  comfortably hosts 100+ when seating is coordinated; rewrote the
  events-we-host paragraph; updated the private-dining-rooms paragraph
  to acknowledge the offsite-no-live-show rule.
- `/frisco/appetizers`: removed the price-range FAQ; added a "Why
  Jinbeh Is the Best for Japanese Appetizers in Frisco" closing
  section with internal cross-links to sushi-rolls, hibachi, and bar.

### New pages created

1. **`/celebrations/world-cup`** — `src/app/celebrations/world-cup/page.tsx`.
   FIFA World Cup 2026 (June 11 – July 19, 2026) celebration page with
   a featured section on **Chioma Ubogagu** linking to her Instagram
   featurette: <https://www.instagram.com/reels/DVmJ3XBjZch/>. Metadata
   targets keywords: world cup 2026 frisco, world cup 2026 dfw, fifa
   world cup 2026 dallas, att stadium world cup restaurant, japan world
   cup watch party, samurai blue dfw, world cup catering dfw, etc. Has
   FAQPage schema, hero with Frisco/Lewisville OpenTable CTAs, "Why
   Jinbeh for the World Cup" bulleted list, match-day planning grid,
   and a Related Pages footer linking /celebrations, /events, /catering.
   The page also notes the offsite-catering ≥1 week notice rule and
   the no-live-show-offsite rule.

2. **`/celebrations/dfw-moms`** — `src/app/celebrations/dfw-moms/page.tsx`.
   Family-friendly page positioning Jinbeh as DFW moms' favorite
   hibachi/sushi spot. Includes a featured section linking to the DFW
   moms Instagram reel: <https://www.instagram.com/reels/DXmPlsfgvqW/>.
   Metadata targets: dfw moms, frisco moms, lewisville moms, family
   friendly restaurant frisco, mothers day restaurant frisco, kids
   birthday hibachi frisco, mom approved restaurant frisco, etc.
   Includes FAQPage schema and CTAs for both locations + VIP
   Birthday Club.

### Internal linking updates for the new pages

- `/celebrations` index now lists both **FIFA World Cup 2026** and
  **DFW Moms Love Jinbeh** in the cultural celebrations array.
- `/events` Event-Planning-Resources grid now includes a FIFA 2026 card
  linking to the new World Cup page.
- `/celebrations/mothers-day` now cross-links the DFW Moms page from
  its lead paragraph.

### Voice + brand rules applied throughout

- **No em-dashes (—) in body content.** Replaced with periods, commas,
  colons, or split sentences across all the celebration pages, blog
  posts, and other edits. The brand guide explicitly bans em-dashes.
- **No prices.** Maintained the no-pricing policy across all edits.
  The only two exceptions remain: Happy Hour and Hibachi-for-Two.
- **No omakase as a current offering.** Per the Obsidian vault rule,
  omakase has been removed from the website. Where the master content
  referenced omakase, copy was rewritten to capture the chef's-choice
  spirit without claiming Jinbeh offers an omakase menu.
- **No live offsite hibachi shows.** Wherever offsite catering pages
  promised tableside theatrics, the copy now clarifies: live show is
  at the restaurant; offsite catering is delivered on presentation
  trays; ≥1 week notice for larger orders.
- **Both locations.** Edits surface Frisco and Lewisville links
  consistently.
- **Internal linking.** New blog/celebration sections link out to
  /frisco, /lewisville, /happy-hour, /vip, /menu, and other relevant
  pages to strengthen SEO and conversion paths.

### Verification

- `npx tsc --noEmit -p tsconfig.json` exits 0 (clean).
- The remaining em-dashes in celebration pages are all in OG image
  `alt` text ("Jinbeh Japanese Restaurant — Celebrations Birthday"),
  which is the canonical brand pattern and intentionally preserved.

### Working artifacts left in outputs

- `outputs/edits.json` and `outputs/edits_clean.json` — structured
  extraction of all 64 EDIT blocks from the master content document.
  Useful for future passes if more edits land in `master-content.md`.
- `outputs/extract_edits.py` — the Python script that parsed the file.

## 2026-05-03 — Hibachi for Two ($35) lunch-only special added

A new featured promotion was added to the specials pages — the **second
exception to the no-price policy** (alongside Happy Hour).

**Canonical Hibachi-for-Two copy (use exactly):**
- **$35** for two hibachi entrees
- Available **Monday through Friday** at **lunch only** (11:00 AM – 2:00 PM)
- Choose any two proteins: 🥦 **Veggie**, 🍗 **Chicken**, 🥩 **Steak**, 🍤 **Shrimp**, 🍣 **Salmon**
- Each plate includes: onion soup, house salad with ginger dressing,
  grilled vegetables, and steamed white rice
- Optional upgrade: **+$5 per person** to swap white rice for hibachi
  fried rice
- Dine-in only • Two-person minimum • Not combinable with other promos
- **Not available** on weekends or at dinner

**Pages where it appears (full featured section + AggregateOffer schema):**
- `/specials` — top quick-nav card (with "Mon-Fri Lunch • 11am-2pm" time
  label) + full featured section + two FAQ entries + AggregateOffer schema
- `/frisco/specials` — full featured section above Main Specials +
  AggregateOffer schema (location-specific URL)
- `/lewisville/specials` — same as Frisco, location-specific URL
- `/lunch-specials` — split-card "Featured Lunch Special" callout right
  after the hero (cross-references back to `/specials#hibachi-for-two`)

**Visual treatment** (matches Happy Hour design language for consistency):
- Dark `from-charcoal via-deep-indigo to-charcoal` gradient background
  with low-opacity hibachi-grill image overlay
- 7xl-8xl gold `$35` price as the visual anchor
- **Schedule chip** below the price — clock icon + "Lunch only • Mon–Fri •
  11:00 AM – 2:00 PM" in a frosted-glass pill with gold border
- Five-protein selection grid (2 cols mobile / 3 sm / 5 lg)
- Two-column "Includes" + "Optional Upgrade" callout pair (gold ring on
  the upgrade card matches the "Most Popular" treatment used for sake)
- Twin CTAs: location-specific Call button (gold) + Reserve a Table
- Discreet legal disclaimer below CTAs explicitly stating lunch-only window

**Shared data:** `hibachiForTwoProteins` const is defined inline in each of
the three /specials pages (not yet extracted to a shared module). When the
protein list changes, update all three. If this list grows, factor it into
`src/data/specials.ts`.

**Schema notes:**
- The `Offer` uses `eligibleQuantity: { value: 2, unitText: "guests" }`
  to make it clear this is a two-person price, not a single-item price.
- The lunch-only window is encoded three ways in JSON-LD for maximum
  search-engine compatibility:
  1. In the offer `name` ("Lunch Hibachi for Two")
  2. In the offer `description`
  3. As `availabilityStarts: "11:00"` / `availabilityEnds: "14:00"` plus a
     nested `availableAtOrFrom.openingHoursSpecification` listing
     Monday–Friday — Google Search uses the OpeningHoursSpecification
     for time-restricted offer rich results.
- Each page's URL anchor is `#hibachi-for-two` for deep-linking from
  the quick-nav card and external campaigns.

When the special ends, search for `hibachi-for-two` and remove the section,
the schema offer, and the FAQ entries — also delete the quick-nav card on
`/specials`, the lunch-specials callout, and the metadata description
references on all four pages.

## 2026-05-03 — Happy Hour pricing restored (exception to no-price policy)

After the site-wide price strip below, **Happy Hour pricing was restored**
because it's a promotional draw (a price IS the marketing message here).
The canonical numbers and copy live in seven pages:

- `/happy-hour` (hero chips + spotlight cards + FAQ + EventSchema offers)
- `/happy-hour/specials` (specials array + drink categories + schedule)
- `/specials` (AggregateOffer schema + specials category card + Happy Hour
  section heading + FAQ)
- `/frisco/specials` (per-location items list)
- `/lewisville/specials` (per-location items list)
- `/bar` (bar pricing chips + FAQ)
- `/blog/best-happy-hour-frisco-tx` (metadata + FAQ + comparison table
  + 3-tile pricing card)

**Canonical Happy Hour copy (use exactly):**
- Mon–Fri • 5:00 to 6:30 PM
- **$4** Japanese Draft Beer (Sapporo, Asahi, Kirin)
- **$5** Small Hot Sake (house sake served warm in a tokkuri)
- **$6** Wine (curated by the glass)

If the prices change, update all seven pages above (one grep for `\$4|\$5|\$6`
inside the happy-hour-related files surfaces the spots) and remember to
update the schema `Offer` objects too — Google uses them for rich results.

The "Most Popular" gold ring on the sake card is intentional visual
hierarchy — it's the highest-margin item and the most-searched of the
three.

## 2026-05-03 — Site-wide pricing removal + menu redesign + ramune image

### What changed

1. **Removed all visible & schema pricing across the site.** Per business decision
   (matches the live site's clean look), prices are no longer shown on any
   menu item, category landing, blog, or specials page.
   - Stripped `offers: { "@type": "Offer", "price": "...", "priceCurrency": "USD" }`
     blocks from MenuItem JSON-LD.
   - Removed visible `<span ... text-accent-red ...>$XX.XX</span>` price
     spans from category pages (sushi-rolls, hibachi, sashimi, appetizers,
     cocktails) at both Frisco and Lewisville.
   - Rewrote FAQ answers and metadata descriptions to drop quoted dollar
     amounts (e.g., "Ribeye ($35.95) is priced higher than NY Strip ($32.95)"
     became "Ribeye is priced higher than NY Strip").
   - Cleared empty schema `"price"` keys to `""` where they remained.
   - Cleared inline JSX dollar elements on `/happy-hour` and `/specials`
     (e.g., `<p>$4</p>` removed; descriptive text/headings retained).
   - Totals: 263 files modified, 210 offers blocks + 94 price spans + 92
     parenthetical prices + 517 inline dollar amounts removed across
     two passes.

2. **Redesigned `/frisco/menu` and `/lewisville/menu`.**
   - Replaced the 4-card BentoGrid (hibachi/sushi/lunch/drinks) with a
     simple 3-button "Menus" section: Lunch, Dinner, Sushi — each linking
     to the per-location PDF in `/public/menus/{frisco,lewisville}/`.
   - Matches the layout the live jinbeh.com/frisco/ page uses (clean PDF
     buttons, no per-item lists).
   - PDFs already existed at `/public/menus/{location}/{lunch,dinner,sushi}-menu.pdf`.

3. **Hardened the ramune-soda-guide page.**
   - Added `sizes="100vw"` to the hero `<Image fill>` so Next.js serves a
     correctly-sized image (without it, the optimizer may pick a too-small
     variant and the picture appears missing/blurry).
   - Set `bg-charcoal` on the hero `<section>` so there's a visible
     background even if image fetch is delayed.
   - Added a second in-body `<figure>` with the ramune image and caption
     so the picture is guaranteed to display somewhere even if the hero
     has any rendering issue.
   - Image source remains `/images/beverages/RamuneSoda.webp`
     (1600×1530 valid WebP, 453KB — verified file integrity is fine).

4. **Bug fix in `src/app/faq/page.tsx`** — `category.title.toLowerCase` was
   missing parens; corrected to `category.title.toLowerCase()`. Caught by
   `tsc --noEmit` while verifying the price-strip changes.

### Tools / scripts

The price-strip work was done with two Python scripts in `outputs/`:

- `strip_prices.py` — round 1: targets JSON-LD `offers` blocks, the
  "text-accent-red" price span pattern, parenthetical prices like
  `(\$16.95)`, and inline dollar amounts inside string literals.
- `strip_prices_round2.py` — round 2: targets schema `Offer` rows on
  `/specials` and `/happy-hour`, JSX elements whose entire content is a
  price (`<p>$4</p>`), inline body-text dollars, and lingering
  schema `"price"` keys.

Both write JSON reports (`price-strip-report.json`,
`price-strip-round2.json`) detailing every file touched.

### Ground truth checks

- `npx tsc --noEmit -p tsconfig.json` passes after the strip + faq fix.
- `grep -rE '\$\d+(\.\d+)?' src/app src/data` returns no matches outside
  `src/data/happyHour.ts` (kept — internal data file, not displayed).
- `grep -rE '"price"\s*:\s*"[\d.]+"' src/app src/data` returns no
  populated price values.

### Notes for future contributors

- **Don't put prices in the codebase.** Menus live as PDFs in
  `/public/menus/...`. If pricing changes, update the PDFs.
- **Never re-add `offers` to MenuItem JSON-LD.** The site's policy is no
  visible or structured pricing — drives traffic to the PDF/in-house
  experience rather than competing on quoted price.
- **Hero `<Image fill>` always needs a `sizes` prop.** Otherwise Next.js
  warns and may serve a tiny variant that looks broken.
- **The /happy-hour page describes deals without quoting prices** — keep
  it that way; pricing is meant to be discovered in-store or via the
  PDFs.
