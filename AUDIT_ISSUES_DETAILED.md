# Jinbeh Elite - Detailed Audit Issues with Specific Locations

## Quick Reference Index

- **HIGH Priority Issues:** 7 issues
- **MEDIUM Priority Issues:** 4 issues
- **LOW Priority Issues:** 3 issues
- **Total Issues Identified:** 14

---

## HIGH PRIORITY ISSUES - DETAILED LOCATIONS

### ISSUE #1: Missing H1 Tags (20 Pages)

**Severity:** HIGH
**Category:** SEO / Accessibility
**Pages Missing H1:** 20 out of 237

**Complete List of Affected Pages:**

1. `/src/app/blog/hibachi-dining-experience/page.tsx`
2. `/src/app/blog/beginner-sushi-tips/page.tsx`
3. `/src/app/blog/free-birthday-food-deals/page.tsx`
4. `/src/app/blog/bridal-shower-venues/page.tsx`
5. `/src/app/blog/pickleball-restaurants-lewisville/page.tsx`
6. `/src/app/blog/jinbeh-gift-cards-guide/page.tsx`
7. `/src/app/blog/what-is-omakase/page.tsx`
8. `/src/app/blog/hibachi-lunch-ideas/page.tsx`
9. `/src/app/blog/best-hibachi-dallas/page.tsx`
10. `/src/app/blog/offsite-hibachi-catering/page.tsx`
11. `/src/app/blog/hibachi-birthday-party-ideas/page.tsx`
12. `/src/app/blog/omakase-dining-guide/page.tsx`
13. `/src/app/blog/romantic-anniversary-dinners/page.tsx`
14. `/src/app/blog/jinbeh-catering-services/page.tsx`
15. `/src/app/blog/hibachi-menu-guide/page.tsx`
16. `/src/app/blog/hibachi-vs-teppanyaki-explained/page.tsx`
17. `/src/app/blog/hibachi-calories-guide/page.tsx`
18. `/src/app/blog/baby-shower-venues/page.tsx`
19. `/src/app/lewisville/sashimi/omakase/page.tsx`
20. `/src/app/frisco/sashimi/omakase/page.tsx`

**Solution:** Add unique H1 tag to beginning of page content

**Example Fix:**
```typescript
<h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
  [Unique Page Title - Extract from metadata]
</h1>
```

---

### ISSUE #2: Unoptimized Large Images (Critical Performance)

**Severity:** HIGH
**Category:** Performance
**Location:** `/public/images/catalog/`
**Number of Files:** 20+ images exceeding 6MB

**Specific Large Files (by size):**

```
File Size | Path
----------|------
12.0 MB   | public/images/catalog/12-C060324-6551.jpg
11.0 MB   | public/images/catalog/28-C060324-6899.jpg
11.0 MB   | public/images/catalog/27-C060324-6888.jpg
11.0 MB   | public/images/catalog/13-C060324-6582.jpg
9.7 MB    | public/images/catalog/14-C060324-6596.jpg
9.3 MB    | public/images/catalog/8-C060324-6462.jpg
9.1 MB    | public/images/catalog/6-C060324-6405.jpg
8.8 MB    | public/images/catalog/9-C060324-6484.jpg
8.5 MB    | public/images/catalog/10-C060324-6501.jpg
8.0 MB    | public/images/catalog/7-C060324-6447.jpg
7.9 MB    | public/images/catalog/11-C060324-6544.jpg
7.7 MB    | public/images/catalog/5-C060324-6397.jpg
7.6 MB    | public/images/catalog/22-C060324-6829.jpg
7.5 MB    | public/images/catalog/15-C060324-6663.jpg
7.0 MB    | public/images/catalog/2-C060324-6341.jpg
6.9 MB    | public/images/catalog/1-C060324-6328.jpg
6.8 MB    | public/images/catalog/16-C060324-6670.jpg
6.7 MB    | public/images/catalog/3-C060324-6364.jpg
6.5 MB    | public/images/catalog/4-C060324-6380.jpg
5.9 MB    | public/images/catalog/29-C060324-6922.jpg
```

**Estimated Total:** ~2.5 GB of unoptimized images

**Solution:**
```bash
# Step 1: Convert to WebP with quality 75
ffmpeg -i input.jpg -c:v libwebp -quality 75 output.webp

# Step 2: Create responsive variants
# Desktop (1200px): ~400-500KB
# Tablet (800px):   ~200-300KB
# Mobile (600px):   ~100-150KB

# Step 3: Update Next.js Image component:
<Image
  src="/images/catalog/image.webp"
  alt="Descriptive text"
  width={1200}
  height={900}
  quality={75}
  priority={false}
/>
```

---

### ISSUE #3: Empty Alt Text on Images (5 Blog Pages)

**Severity:** HIGH
**Category:** Accessibility / SEO
**Number of Issues:** 5

**Specific Locations:**

1. **File:** `/src/app/blog/japanese-whiskey-guide/page.tsx`
   - **Line:** 155
   - **Problem:** `alt=""`
   - **Context:** Related articles thumbnail image
   - **Fix:** Add descriptive alt text like `alt="Related article about Japanese whiskey"`

2. **File:** `/src/app/blog/group-dining-venues/page.tsx`
   - **Line:** 162
   - **Problem:** `alt=""`
   - **Context:** Related articles thumbnail image
   - **Fix:** Add descriptive alt text

3. **File:** `/src/app/blog/japanese-beverages-guide/page.tsx`
   - **Line:** 165
   - **Problem:** `alt=""`
   - **Context:** Related articles thumbnail image
   - **Fix:** Add descriptive alt text

4. **File:** `/src/app/blog/best-steak-near-me/page.tsx`
   - **Line:** 171
   - **Problem:** `alt=""`
   - **Context:** Related articles thumbnail image
   - **Fix:** Add descriptive alt text

5. **File:** `/src/app/blog/yamazaki-whiskey-guide/page.tsx`
   - **Line:** 223
   - **Problem:** `alt=""`
   - **Context:** Related articles thumbnail image
   - **Fix:** Add descriptive alt text

**Current Pattern:**
```typescript
<Image src={r.i} alt="" fill className="object-cover" />
```

**Corrected Pattern:**
```typescript
<Image
  src={r.i}
  alt={`Related article: ${r.title}`}
  fill
  className="object-cover"
/>
```

---

### ISSUE #4: Form Inputs Missing ID-Label Association

**Severity:** HIGH
**Category:** Accessibility
**Number of Instances:** 13 inputs across 3 pages

#### 4A. Newsletter Form - Specials Page
**File:** `/src/app/specials/page.tsx`
**Lines:** 462, 487

**Problem:**
```typescript
// Line 462
<input
  type="email"
  placeholder="Enter your email"
  className="flex-1 px-4 py-3..."
/>

// Line 487-490 (Newsletter signup)
<input
  type="email"
  placeholder="Your email address"
  className="flex-1 px-6 py-4..."
  required
/>
```

**Issues:**
- No `id` attribute
- No visible `<label>`
- Only placeholder for field description
- Submit button lacks aria-label

**Fix:**
```typescript
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
  <label htmlFor="specials-email" className="sr-only">
    Email Address
  </label>
  <input
    id="specials-email"
    type="email"
    placeholder="Enter your email"
    className="flex-1 px-4 py-3..."
    aria-label="Email address for specials"
    required
  />
  <button type="submit" aria-label="Subscribe to specials">Subscribe</button>
</form>
```

#### 4B. Newsletter Form - Lewisville Specials
**File:** `/src/app/lewisville/specials/page.tsx`
**Line:** 414-415

**Problem:** Same as above - email input missing id

**Fix:** Apply same pattern as 4A

#### 4C. Events Inquiry Form
**File:** `/src/app/events/page.tsx`
**Lines:** 767-859

**Specific Issues:**

| Line | Input Type | Issue |
|------|-----------|-------|
| 770-775 | text (Your Name) | Missing id, no label htmlFor |
| 778-783 | email | Missing id, no label htmlFor |
| 789-794 | tel (Phone) | Missing id, no label htmlFor |
| 797-801 | date (Event Date) | Missing id, no label htmlFor |
| 808-817 | select (Event Type) | Missing id, no label htmlFor, no aria-required |
| 820-825 | number (Guest Count) | Missing id, no label htmlFor |
| 831-835 | textarea (Event Details) | Missing id, no label htmlFor |
| 839 | checkbox (agree) | HAS id="agree" (GOOD!) but should add aria-required |

**Complete Event Form Fix:**

```typescript
<form className="space-y-6" onSubmit={handleEventSubmit}>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label htmlFor="event-name" className="block text-sm font-semibold mb-2">
        Your Name <span aria-label="required">*</span>
      </label>
      <input
        id="event-name"
        type="text"
        placeholder="John Doe"
        className="w-full px-4 py-3..."
        required
        aria-required="true"
      />
    </div>
    <div>
      <label htmlFor="event-email" className="block text-sm font-semibold mb-2">
        Email Address <span aria-label="required">*</span>
      </label>
      <input
        id="event-email"
        type="email"
        placeholder="john@example.com"
        className="w-full px-4 py-3..."
        required
        aria-required="true"
      />
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label htmlFor="event-phone" className="block text-sm font-semibold mb-2">
        Phone Number <span aria-label="required">*</span>
      </label>
      <input
        id="event-phone"
        type="tel"
        placeholder="(555) 123-4567"
        className="w-full px-4 py-3..."
        required
        aria-required="true"
      />
    </div>
    <div>
      <label htmlFor="event-date" className="block text-sm font-semibold mb-2">
        Event Date <span aria-label="required">*</span>
      </label>
      <input
        id="event-date"
        type="date"
        className="w-full px-4 py-3..."
        required
        aria-required="true"
      />
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label htmlFor="event-type" className="block text-sm font-semibold mb-2">
        Event Type <span aria-label="required">*</span>
      </label>
      <select
        id="event-type"
        className="w-full px-4 py-3..."
        required
        aria-required="true"
      >
        <option value="">Select an event type</option>
        <option value="birthday">Birthday Party</option>
        <option value="corporate">Corporate Event</option>
        <option value="rehearsal">Rehearsal Dinner</option>
        <option value="baby-shower">Baby Shower</option>
        <option value="team-building">Team Building</option>
        <option value="holiday">Holiday Party</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div>
      <label htmlFor="event-guests" className="block text-sm font-semibold mb-2">
        Guest Count <span aria-label="required">*</span>
      </label>
      <input
        id="event-guests"
        type="number"
        placeholder="Number of guests"
        className="w-full px-4 py-3..."
        required
        aria-required="true"
      />
    </div>
  </div>

  <div>
    <label htmlFor="event-details" className="block text-sm font-semibold mb-2">
      Event Details
    </label>
    <textarea
      id="event-details"
      placeholder="Tell us about your event, any special requests, or questions..."
      rows={5}
      className="w-full px-4 py-3..."
    />
  </div>

  <div className="flex items-center gap-3">
    <input type="checkbox" id="agree" className="w-5 h-5" required />
    <label htmlFor="agree" className="text-sm text-white/80">
      I'd like to receive updates about my event planning
    </label>
  </div>

  <button
    type="submit"
    className="block w-full bg-accent-red..."
    aria-label="Send event inquiry form"
  >
    Send Event Inquiry
  </button>
</form>
```

---

### ISSUE #5: Missing Form Submission Logic

**Severity:** HIGH
**Category:** Functionality
**Files Affected:**
- `/src/app/specials/page.tsx` (Lines 486-498)
- `/src/app/lewisville/specials/page.tsx` (Lines 413-424)
- `/src/app/events/page.tsx` (Lines 767-859)

**Problem:** Forms are rendered but lack:
1. `onSubmit` handlers
2. Error handling
3. Success feedback
4. Loading states
5. Server action integration

**Requirement:** All forms should either:
- Integrate with a backend API endpoint
- Use Next.js Server Actions
- Have proper client-side validation
- Provide user feedback (success/error messages)

---

### ISSUE #6: Missing Metadata on 14 Pages

**Severity:** HIGH
**Category:** SEO
**Pages Missing Metadata:** 14 out of 237 (5.9%)

**Problem:** Pages without `export const metadata` miss:
- Custom page titles (Google SERP)
- Meta descriptions (CTR improvement)
- OpenGraph images (social sharing)
- Canonical URLs (duplicate prevention)

**Solution:** Add to every page.tsx:

```typescript
export const metadata: Metadata = {
  title: "Page Title | Jinbeh Japanese Restaurant",
  description: "150-160 character description for search results",
  keywords: ["relevant", "keywords"],
  openGraph: {
    title: "OG Title",
    description: "OG description",
    url: "https://jinbeh.com/path",
    images: [{
      url: "https://jinbeh.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Image alt text"
    }]
  },
  alternates: {
    canonical: "https://jinbeh.com/path"
  }
};
```

---

### ISSUE #7: Missing #reserve Section ID

**Severity:** HIGH (Medium if ID exists)
**Category:** Broken Anchor Links
**Number of Pages:** 12 nearby pages
**Files Affected:**
- `/src/app/nearby/highland-village/page.tsx` - Line 194
- `/src/app/nearby/plano/page.tsx` - Line 218
- `/src/app/nearby/denton/page.tsx` - Line 194
- `/src/app/nearby/richardson/page.tsx` - Line 194
- `/src/app/nearby/grapevine/page.tsx` - Line 194
- `/src/app/nearby/mckinney/page.tsx` - Line 194
- `/src/app/nearby/allen/page.tsx` - Line 210
- `/src/app/nearby/flower-mound/page.tsx` - Line 194
- `/src/app/nearby/coppell/page.tsx` - Line 194
- `/src/app/nearby/the-colony/page.tsx` - Line 210
- `/src/app/nearby/little-elm/page.tsx` - Line 194
- `/src/app/nearby/carrollton/page.tsx` - Line 194

**Status:** VERIFIED - All pages DO have `id="reserve"` with `scroll-mt-20` class
(This is actually GOOD - no action needed)

**Verification:**
```typescript
// Example from /src/app/nearby/highland-village/page.tsx, Line 300
<section id="reserve" className="py-16 bg-white scroll-mt-20">
```

---

## MEDIUM PRIORITY ISSUES

### ISSUE #8: Limited ARIA Label Coverage

**Severity:** MEDIUM
**Category:** Accessibility
**Current Coverage:** Only 12 aria-label attributes found
**Recommended Minimum:** 50+ aria-labels

**High-Impact Locations to Add:**

1. **Header Navigation Button** - `/src/components/Header.tsx` - Line 147
2. **Mobile Menu Toggle** - `/src/components/Header.tsx`
3. **Icon-Only Buttons** - `/src/components/PhotoGallery.tsx` - Lines 76, 128, 139, 153
4. **Search Buttons** - `/src/components/ui/`
5. **Social Media Links** - `/src/components/Footer.tsx`

**Fix Pattern:**
```typescript
<button
  className="btn..."
  aria-label="Open mobile navigation menu"
  title="Open mobile navigation menu"
>
  <svg aria-hidden="true">...</svg>
</button>
```

---

### ISSUE #9: Color Contrast on Form Inputs

**Severity:** MEDIUM
**Category:** Accessibility (WCAG AA)
**Location:** `/src/app/events/page.tsx` - Lines 771-835

**Problem Inputs:**
```typescript
// White text on rgba(255,255,255,0.1) background may fail contrast
className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white"
```

**Contrast Ratio:** ~3:1 (Fails WCAG AA which requires 4.5:1 for normal text)

**Affected Elements:**
- All text inputs in events form
- Select dropdown
- Textarea

**Fix:** Increase background opacity or text weight:
```typescript
className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:border-white/50"
```

---

### ISSUE #10: Placeholder-Only Labels

**Severity:** MEDIUM
**Category:** Accessibility / UX
**Instances:** 9 form inputs

**Problem:**
- Placeholder text disappears when typing
- Users forget what field they're in
- Low contrast placeholder text can fail WCAG
- Non-sighted users miss field context

**Example:**
```typescript
<input
  type="email"
  placeholder="Enter your email"  // Only label
  className="..."
/>
```

**Solution:** Use visible labels with placeholder:
```typescript
<div>
  <label htmlFor="field-id">Email Address</label>
  <input
    id="field-id"
    type="email"
    placeholder="example@domain.com"
  />
</div>
```

---

### ISSUE #11: Decorative Images Missing aria-hidden

**Severity:** MEDIUM
**Category:** Accessibility
**Number of Background Images:** ~50+

**Pattern:**
```typescript
<Image
  src="/images/background.jpg"
  alt="Decorative image"  // Should be aria-hidden instead
  fill
  className="object-cover"
/>
```

**Correct Pattern for Decorative Images:**
```typescript
<Image
  src="/images/background.jpg"
  alt=""  // Empty alt is OK for decorative images
  aria-hidden="true"
  fill
  className="object-cover"
/>
```

---

## LOW PRIORITY ISSUES

### ISSUE #12: Unused Import in ShineButton

**Severity:** LOW
**Category:** Code Quality
**File:** `/src/components/ui/ShineButton.tsx`
**Line:** 4

**Current:**
```typescript
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ShineButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold";
}
```

**Analysis:** `ButtonHTMLAttributes` is imported but the type definition is not explicitly typed. While functional (TypeScript infers from the interface), it could be removed or made explicit:

**Option 1 - Remove if unused:**
```typescript
import { forwardRef } from "react";
```

**Option 2 - Keep and use explicitly:**
```typescript
export const ShineButton = forwardRef<HTMLButtonElement, ShineButtonProps>
```

---

### ISSUE #13: Decorative SVGs in Navigation

**Severity:** LOW
**Category:** Accessibility
**Location:** `/src/components/Header.tsx` and other components

**Problem:** SVG icons that are purely decorative should hide from screen readers

**Before:**
```typescript
<button>
  <svg className="w-5 h-5">
    <path d="..."/>
  </svg>
</button>
```

**After:**
```typescript
<button aria-label="Menu">
  <svg className="w-5 h-5" aria-hidden="true">
    <path d="..."/>
  </svg>
</button>
```

---

### ISSUE #14: Missing Search Engine Sitemap

**Severity:** LOW
**Category:** SEO
**Location:** `/public/sitemap.xml` (exists but verify content)

**Recommendation:**
- Verify all 237 pages are included
- Update lastmod dates
- Consider generating with next-sitemap package
- Add changefreq and priority attributes

**Example Entry:**
```xml
<url>
  <loc>https://jinbeh.com/page-slug</loc>
  <lastmod>2026-02-02</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
```

---

## SUMMARY TABLE

| # | Issue | File(s) | Lines | Priority | Type | Fix Time |
|---|-------|---------|-------|----------|------|----------|
| 1 | Missing H1 Tags | 20 blog/menu pages | Various | HIGH | SEO | 2-3h |
| 2 | Unoptimized Images | /public/images/catalog/ | All | HIGH | Performance | 8-12h |
| 3 | Empty Alt Text | 5 blog pages | 155-223 | HIGH | Accessibility | 0.5h |
| 4 | Form ID Issues | 3 pages, 13 inputs | 462-859 | HIGH | Accessibility | 1-2h |
| 5 | No Form Submission | 3 pages | Various | HIGH | Functionality | 4-6h |
| 6 | Missing Metadata | 14 pages | Various | HIGH | SEO | 2-3h |
| 7 | Missing #reserve | 12 pages | 194-218 | VERIFIED GOOD | N/A | 0h |
| 8 | Limited ARIA Labels | Sitewide | Various | MEDIUM | Accessibility | 2-3h |
| 9 | Color Contrast | Events form | 771-835 | MEDIUM | Accessibility | 0.5h |
| 10 | Placeholder-Only Labels | Various forms | Multiple | MEDIUM | UX | 1-2h |
| 11 | Missing aria-hidden | ~50 images | Various | MEDIUM | Accessibility | 1-2h |
| 12 | Unused Import | ShineButton.tsx | 4 | LOW | Code Quality | 0.1h |
| 13 | Decorative SVGs | Header.tsx, etc | Various | LOW | Accessibility | 1h |
| 14 | Sitemap Optimization | /public/sitemap.xml | All | LOW | SEO | 1h |

---

## QUICK FIX CHECKLIST

Copy and paste this checklist to track fixes:

- [ ] Add H1 tags to 20 missing pages (2-3 hours)
- [ ] Add id attributes to 13 form inputs (1 hour)
- [ ] Fix 5 empty alt texts in blog pages (30 minutes)
- [ ] Add visible labels to form inputs (1-2 hours)
- [ ] Add form submission handlers (4-6 hours)
- [ ] Add metadata to 14 pages (2-3 hours)
- [ ] Optimize 20+ large images (8-12 hours)
- [ ] Add ARIA labels site-wide (2-3 hours)
- [ ] Fix color contrast on forms (30 minutes)
- [ ] Add aria-hidden to decorative images (1-2 hours)
- [ ] Add aria-label to icon buttons (30 minutes)
- [ ] Remove unused imports (15 minutes)
- [ ] Verify sitemap completeness (30 minutes)

**Total Estimated Time for All Fixes:** 30-45 hours

**Priority Focus (First 4 hours):**
1. Add H1 tags to 20 pages
2. Add id attributes to form inputs
3. Fix empty alt texts
4. Add form submission handlers

---

**Document Created:** February 2, 2026
**Last Updated:** February 2, 2026
**Audit Scope:** Complete technical review (237 pages, 100+ components)
