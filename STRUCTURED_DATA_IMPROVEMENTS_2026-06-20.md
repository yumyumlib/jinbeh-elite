# Structured Data & Content Quality Improvements — 2026-06-20

Audit of 9 key SEO pages. Findings organized by page, with specific code
changes needed.

---

## 1. `/frisco/hibachi` — "best hibachi frisco" / "teppanyaki near me frisco"

**File:** `src/app/frisco/hibachi/page.tsx`

**Status:** Strong. Title targets keyword well, long content, FAQ schema present,
Menu schema with 4 sections.

### Issues to fix

- **H1 mismatch with title intent.** Title says "Best Hibachi Restaurant in
  Frisco TX" but H1 is "Hibachi Menu, Frisco". Change H1 to:
  `Best Hibachi in Frisco, TX` or `Hibachi at Jinbeh Frisco — Since 1988`

- **Meta description too long (283 chars).** Google truncates at ~155. Rewrite:
  `"Experience Jinbeh Frisco's hibachi menu: land and ocean teppanyaki, tableside fire shows, and the famous onion volcano near Stonebriar Centre. Family-owned since 1988."`

- **Missing BreadcrumbList schema.** Has a visible breadcrumb nav but no JSON-LD
  for it. Add `BreadcrumbList` schema: Home > Frisco > Hibachi.

- **FAQ Q5 mentions prices.** The "How much does hibachi cost?" FAQ answer should
  NOT contain dollar amounts. Rewrite to: "Visit our menu page or call for current
  pricing. We offer land, ocean, combo, and children's options."

### Schema additions

- Add `HowTo` schema: "How to Order Hibachi at Jinbeh Frisco"
  - Step 1: Choose your protein (land, ocean, or combo)
  - Step 2: Reserve a table via OpenTable or call (972) 731-0333
  - Step 3: Arrive and enjoy tableside teppanyaki entertainment
  - Step 4: Watch your chef prepare your meal with the famous onion volcano

---

## 2. `/lewisville/hibachi` — "hibachi lewisville"

**File:** `src/app/lewisville/hibachi/page.tsx`

**Status:** Significantly behind Frisco counterpart. Still uses old 14-card grid
layout while Frisco was rebuilt with bulleted menu + photo gallery (May 2026).

### Issues to fix (HIGH PRIORITY — content parity)

- **Rebuild to match Frisco.** The Frisco hibachi page was rebuilt on 2026-05-05
  with a categorized bulleted menu (Land/Ocean/Combo/Children) + 8-photo gallery.
  Lewisville still has the old 14-card image grid. Rebuild using the same pattern
  but with Lewisville-specific content:
  - Electric grill (not gas)
  - Near Vista Ridge Mall, off Stemmons Freeway / I-35E
  - Nearby cities: Flower Mound, Highland Village, The Colony, Carrollton, Coppell

- **H1 weak.** "Hibachi Menu, Lewisville" — change to:
  `Best Hibachi in Lewisville, TX`

- **Missing BreadcrumbList schema.** Add JSON-LD: Home > Lewisville > Hibachi.

- **Menu schema is flat (1 section, 14 items).** Restructure to 4 sections
  matching Frisco (Land Entrees, Ocean Entrees, Combo Dinner Selection, Children).

- **Duplicate breadcrumb rendering.** `<BreadcrumbNav>` rendered at line 166 AND
  a hand-coded `<nav>` breadcrumb at lines 179-191. Remove one.

- **No photo gallery.** Add a gallery section using the same photoshoot images
  (or Lewisville-specific photos if available).

- **No landmark/nearby-city mentions in body copy.** Add paragraph mentioning
  Vista Ridge Mall, Stemmons Freeway, electric grill, and nearby cities.

### Schema additions

- Add `BreadcrumbList` schema
- Restructure `Menu` schema to 4 sections

---

## 3. `/private-dining` — "private dining frisco"

**File:** `src/app/private-dining/page.tsx`

**Status:** Good content depth, FAQ schema present, but quality issues.

### Issues to fix

- **Keyword-stuffed subtitle.** Lines in the hero read: "As a premier private
  party venue Frisco and private event space Japanese-style, we welcome groups
  looking for restaurants with private rooms..." — rewrite naturally:
  `"Jinbeh's private dining spaces in Frisco and Lewisville are perfect for
  celebrations, corporate events, and group gatherings of any size."`

- **FAQ schema/page mismatch.** Schema has 9 FAQ items but the rendered FAQ
  section shows only 6. Google may flag hidden-content issues. Either:
  (a) render all 9 on the page, or (b) reduce schema to match the 6 visible.

- **LocalBusiness schema is too thin.** Missing address, phone, geo coordinates,
  openingHours. Either remove it (the global Restaurant schemas already cover
  this) or fill it out properly. The relative image path
  (`/images/food/hibachi-grill.jpg`) also won't validate — use absolute URL.

- **Title missing "frisco" as a standalone word.** Current: "Private Dining at
  Jinbeh | Exclusive Events in Frisco & Lewisville". Better:
  `"Private Dining Frisco TX | Jinbeh Japanese Restaurant Events"`

### Schema additions

- Fix or remove the thin `LocalBusiness` schema
- Add `Event` schema for private event availability (generic, recurring)

### New FAQ questions to add (keyword-targeted)

```
Q: "How many guests can Jinbeh accommodate for private dining?"
A: "Our Frisco location can seat 100+ guests when tables are coordinated. Lewisville offers tatami-style booths near the sushi bar for more intimate groups. Call us to discuss your group size."

Q: "Does Jinbeh offer private hibachi tables?"
A: "Yes. Our hibachi tables seat 7-8 guests each, and we can coordinate multiple tables for larger groups up to 40-50 people. Each table gets its own chef and full teppanyaki show."

Q: "Can I host a corporate event at Jinbeh?"
A: "Absolutely. Jinbeh hosts corporate dinners, team-building events, and client entertainment in Frisco and Lewisville. Hibachi entertainment makes business dinners memorable."
```

---

## 4. `/celebrations/birthday` — "birthday dinner frisco tx"

**File:** `src/app/celebrations/birthday/page.tsx`

**Status:** Good content, FAQ schema present, but H1 and structure could improve.

### Issues to fix

- **Generic H1.** "Birthday Parties" — no location, no brand. Change to:
  `Hibachi Birthday Parties at Jinbeh — Frisco & Lewisville`

- **Award badge above H1 in DOM.** The OpenTable Diners' Choice badge renders
  above the H1, making an h3 the first heading a crawler encounters. Move the
  badge BELOW the H1, or demote it to a `<div>` with `role="presentation"`.

- **Title missing "frisco tx" as a phrase.** Current: "Birthday Parties | Jinbeh
  Japanese Restaurant | Hibachi Birthday Celebration". Better:
  `"Birthday Dinner Frisco TX | Hibachi Birthday Party at Jinbeh"`

- **Meta description doesn't mention Frisco or Lewisville.** Add location:
  `"Celebrate your birthday at Jinbeh in Frisco or Lewisville! Hibachi entertainment, the famous onion volcano, and unforgettable moments for all ages. Reserve your table."`

### Schema additions

- Add `Event` schema for birthday celebration availability:
  ```json
  {
    "@type": "Event",
    "name": "Birthday Celebration at Jinbeh",
    "description": "Hibachi birthday dinner with tableside entertainment",
    "eventAttendanceMode": "OfflineEventAttendanceMode",
    "organizer": { "@id": "https://jinbeh.com/#organization" }
  }
  ```

### New FAQ questions to add

```
Q: "What does Jinbeh do for birthdays?"
A: "Every birthday guest receives our three-touch celebration: a birthday dessert, a photo with our team, and a special announcement. The hibachi chef also performs the famous onion volcano trick tableside."

Q: "Can I bring a birthday cake to Jinbeh?"
A: "Yes, you are welcome to bring your own cake. Let us know when you make your reservation so we can plan the celebration."

Q: "Is Jinbeh good for kids' birthday parties?"
A: "Jinbeh is one of the most popular kids birthday party venues in Frisco and Lewisville. Kids love the hibachi fire show, the onion volcano, and catching shrimp. We provide training chopsticks for younger guests."
```

---

## 5. `/happy-hour` — "sushi happy hour lewisville" / "sake bar frisco tx"

**File:** `src/app/happy-hour/page.tsx`

**Status:** Strong. FoodEvent schema with prices (allowed exception), good FAQ.

### Issues to fix

- **FoodEvent `endDate` expires 2026-12-31.** Either update annually or remove
  `endDate` / set it far in the future.

- **Keywords array has leading spaces.** Clean up: `" beer happy hour frisco"` →
  `"beer happy hour frisco"`.

- **No "lewisville" in title.** Current: "Happy Hour | Jinbeh Japanese Restaurant
  | Frisco & Lewisville TX". For the "sushi happy hour lewisville" keyword, consider:
  `"Happy Hour Frisco & Lewisville TX | $4 Beer $5 Sake $6 Wine | Jinbeh"`

- **VIP link uses `<a>` without `btn` class.** Potential invisible-text bug on
  gradient backgrounds (same Tailwind v4 cascade issue). Add `btn` class.

### Schema additions

- Add `BarOrNightClub` schema (supplementary to the global Restaurant) to target
  "sake bar frisco tx":
  ```json
  {
    "@type": "BarOrNightClub",
    "name": "Jinbeh Sake Bar",
    "description": "Full bar with Japanese beer, sake, wine, and craft cocktails",
    "url": "https://jinbeh.com/happy-hour",
    "parentOrganization": { "@id": "https://jinbeh.com/#organization" }
  }
  ```

### New FAQ questions to add

```
Q: "Does Jinbeh have a sake bar?"
A: "Yes. Both Jinbeh locations in Frisco and Lewisville have a full bar featuring Japanese draft beer (Sapporo, Asahi, Kirin), hot and cold sake, wine, and craft cocktails. Happy hour runs Monday through Friday from 5:00 to 6:30 PM."

Q: "What sushi is available during happy hour?"
A: "Our full sushi menu is available during happy hour. Pair your favorite rolls with $4 Japanese draft beer, $5 hot sake, or $6 wine."
```

---

## 6. `/world-cup-2026` — "world cup restaurants frisco"

**File:** `src/app/world-cup-2026/page.tsx`

**Status:** Strong content (890 lines), excellent FAQ schema (9 questions), good
keyword targeting.

### Issues to fix

- **Restaurant schema only covers Frisco.** Page promotes both locations. Add
  Lewisville Restaurant reference or use the global `@id` references.

- **No Twitter card metadata.** Add:
  ```typescript
  twitter: {
    card: "summary_large_image",
    title: "...",
    description: "...",
  }
  ```

- **Article `dateModified` is stale (2026-05-30).** Update to current date when
  content changes.

- **Missing "lewisville" keyword coverage.** Add "world cup watch party
  lewisville" to keywords array and mention Lewisville more prominently in body.

### Schema additions

- Add `SportsEvent` schema for World Cup watch party:
  ```json
  {
    "@type": "SportsEvent",
    "name": "FIFA World Cup 2026 Watch Party at Jinbeh",
    "startDate": "2026-06-11",
    "endDate": "2026-07-19",
    "location": [
      { "@id": "https://jinbeh.com/frisco#restaurant" },
      { "@id": "https://jinbeh.com/lewisville#restaurant" }
    ],
    "sport": "Soccer"
  }
  ```

---

## 7. `/catering` — "sushi catering frisco tx"

**File:** `src/app/catering/page.tsx`

**Status:** CRITICAL BUG in meta description. Content is medium length.

### Issues to fix (URGENT)

- **BROKEN meta description.** Current: `"...in Frisco, Lewisville, and the."`
  Sentence is truncated. Fix to:
  `"Bring Jinbeh to your event! Japanese catering for corporate events, weddings, and private parties in Frisco, Lewisville, and the DFW metroplex. Hibachi and sushi platters."`

- **Only 4 FAQ questions.** Thin compared to other pages. See additions below.

- **Irrelevant keyword.** Remove `"teppanyaki restaurant dallas"` — doesn't match
  catering intent.

- **Title doesn't contain "sushi catering frisco".** Current: "Catering | Jinbeh
  Japanese Restaurant | Hibachi & Sushi Catering DFW". Better:
  `"Sushi & Hibachi Catering Frisco TX | Jinbeh Japanese Restaurant"`

- **Both reserve CTAs link to generic `/reservations`.** Differentiate with
  location-specific OpenTable links (or anchor links).

- **No `FoodEstablishment` or `CateringService` schema.** This is a major gap
  for a catering page.

### Schema additions

- Add `FoodEstablishment` with `makesOffer` for catering:
  ```json
  {
    "@type": "FoodEstablishment",
    "name": "Jinbeh Catering",
    "description": "Japanese catering for corporate events, weddings, and private parties in DFW",
    "areaServed": ["Frisco", "Lewisville", "Plano", "McKinney", "Flower Mound", "Dallas-Fort Worth"],
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "FoodService",
        "serviceType": "Catering"
      }
    }
  }
  ```

### New FAQ questions to add (6 total, replacing the thin 4)

```
Q: "Does Jinbeh offer sushi catering in Frisco?"
A: "Yes. Jinbeh provides sushi platter catering for events in Frisco, Lewisville, and across the DFW metroplex. Choose from our signature rolls, sashimi platters, and appetizer trays."

Q: "How far in advance should I order catering?"
A: "We recommend at least one week of lead time for catering orders, especially for larger events. Contact us to discuss your timeline."

Q: "Does Jinbeh cater corporate events?"
A: "Absolutely. Jinbeh caters corporate lunches, team dinners, client events, and office celebrations throughout DFW. Our presentation trays make a polished impression."

Q: "Can Jinbeh cater a wedding?"
A: "Yes. Jinbeh provides wedding catering with sushi platters, hibachi entrees, and appetizer trays. We deliver on presentation trays. Note that live hibachi shows are available only at our restaurant locations."

Q: "What is included in Jinbeh's catering packages?"
A: "Our catering includes sushi platters, hibachi entrees, appetizer selections, and sides delivered on professional presentation trays. Contact us to customize your order."

Q: "Does Jinbeh do live hibachi catering at off-site events?"
A: "Jinbeh's off-site catering is delivered on presentation trays. Live tableside hibachi shows are available only at our Frisco and Lewisville restaurants. Book a private dining event for the full experience."
```

---

## 8. `/blog/group-dining-venues` — "group dining frisco tx"

**File:** `src/app/blog/group-dining-venues/page.tsx`

**Status:** Multiple structured data BUGS. Needs cleanup.

### Issues to fix (BUGS)

- **ItemList schema has broken template variable.** Position 1 name is literally
  `"{x.t}"` — an unresolved template variable. Fix or remove the ItemList schema.

- **Duplicate BreadcrumbList entries.** Positions 2 and 3 are both "Blog" pointing
  to `/blog`. Fix position 3 to: `{ name: "Group Dining", item: "https://jinbeh.com/blog/group-dining-venues" }`

- **DidYouKnow stat is incomplete.** Text reads "an average of per person" —
  missing the dollar amount. Since we follow no-price policy, either remove the
  stat or rewrite: "Hibachi group dining creates a shared experience that
  traditional restaurant seating cannot match."

- **Cost comparison table has a missing `<td>`.** The Hibachi row is missing the
  "Private Space" cell, misaligning the table. Add the missing cell.

### Schema fixes

- Fix ItemList position 1 name (replace `"{x.t}"` with actual venue name)
- Fix BreadcrumbList position 3

### New FAQ questions to add

```
Q: "What is the best restaurant for large groups in Frisco?"
A: "Jinbeh is one of the best group dining venues in Frisco. Our hibachi tables seat 7-8 guests each, and we can coordinate multiple tables for parties of 40-50. The interactive teppanyaki show keeps everyone entertained."

Q: "Can I book a private room for a group dinner at Jinbeh?"
A: "Yes. Contact us to reserve space for your group. Our Frisco location near Stonebriar Centre and our Lewisville location near Vista Ridge Mall both accommodate large parties."
```

---

## 9. `/blog/japanese-steakhouse-near-me-dfw` — "japanese steakhouse frisco"

**File:** `src/app/blog/japanese-steakhouse-near-me-dfw/page.tsx`

**Status:** Cleanest of the blog pages. Good FAQ (8 questions), Article schema,
Twitter cards present.

### Issues to fix

- **Em-dash in body content.** Line ~113: `"Combination plates &mdash; steak &
  shrimp"` — violates brand guide. Change to a comma or period.

- **FAQ mentions specific prices ($25-$95).** Violates no-price policy. Rewrite:
  "Jinbeh offers a range of hibachi options from single proteins to premium
  combo dinners. Visit the menu page or call for current pricing."

- **BreadcrumbList position 3 points to non-existent URL.**
  `https://jinbeh.com/blog/category/local-guide` — verify this page exists. If
  not, remove position 3 or point to `/blog`.

- **Title could be stronger for "japanese steakhouse frisco".** Current:
  "Japanese Steakhouse Near Me DFW: Where to Go | Jinbeh". Consider:
  `"Best Japanese Steakhouse in Frisco TX | Jinbeh Near Stonebriar"`

---

## GLOBAL SCHEMA IMPROVEMENTS (AllSchemas.tsx)

**File:** `src/components/schema/AllSchemas.tsx`

These changes benefit ALL pages:

1. **Add `@id` to Organization schema:**
   `"@id": "https://jinbeh.com/#organization"`

2. **Add `@id` to WebSite schema:**
   `"@id": "https://jinbeh.com/#website"`

3. **Add `@id` to MenuSchema:**
   `"@id": "https://jinbeh.com/#menu"`

4. **Lewisville `sameAs` is incomplete.** Frisco has 3 entries (Instagram,
   Facebook, Yelp). Lewisville only has Facebook. Add Instagram and Yelp for
   Lewisville.

5. **Fix `menu/layout.tsx` double-render.** Root layout already renders
   `<MenuSchema/>`. The `src/app/menu/layout.tsx` file also renders it, causing
   duplicate Menu schema on `/menu`. Make `menu/layout.tsx` a pass-through
   (same fix pattern as the frisco/lewisville layout fix from Jun 19).

---

## PRIORITY ORDER

### P0 — Bugs (fix immediately)
1. `/catering` truncated meta description ("and the.")
2. `/blog/group-dining-venues` ItemList `"{x.t}"` broken template
3. `/blog/group-dining-venues` duplicate BreadcrumbList entries
4. `/blog/group-dining-venues` incomplete DidYouKnow stat
5. `/blog/group-dining-venues` missing table cell
6. `/blog/japanese-steakhouse-near-me-dfw` em-dash violation

### P1 — High-impact SEO (this week)
7. `/lewisville/hibachi` rebuild to match Frisco (content parity)
8. All pages: H1 improvements to include target keywords
9. `/catering` add FoodEstablishment schema + expand FAQ to 6 questions
10. `/private-dining` fix keyword-stuffed subtitle
11. `/private-dining` fix FAQ schema/page mismatch (9 schema vs 6 rendered)
12. `/celebrations/birthday` add location to title/H1/description

### P2 — Schema enrichment (this sprint)
13. Global: add `@id` to Organization, WebSite, Menu schemas
14. Global: add Lewisville sameAs (Instagram, Yelp)
15. Global: fix menu/layout.tsx double MenuSchema render
16. `/happy-hour` fix FoodEvent endDate expiry
17. `/world-cup-2026` add SportsEvent schema + Twitter cards
18. `/frisco/hibachi` add BreadcrumbList schema + HowTo schema
19. `/lewisville/hibachi` add BreadcrumbList schema
20. FAQ expansions on all pages per the questions listed above

### P3 — Content improvements (next sprint)
21. `/private-dining` remove or complete thin LocalBusiness schema
22. `/happy-hour` clean up keyword leading spaces
23. `/blog/japanese-steakhouse-near-me-dfw` remove prices from FAQ
24. `/blog/japanese-steakhouse-near-me-dfw` fix breadcrumb URL
25. `/celebrations/birthday` move award badge below H1 in DOM
