# Broken Links - Exact Locations & Code Context

## Overview
This document shows the exact location and code context of all broken internal links found in the Jinbeh site.

---

## File: src/app/page.tsx - Homepage

### Broken Link #1 - Line 552
**Issue:** Hibachi category link

```tsx
<Link href="/blog/category/hibachi" className="group block feature-card text-center">
  <div className="icon-circle icon-circle-fire mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
    <span className="text-4xl filter drop-shadow-md">🔥</span>
  </div>
  <h3 className="font-heading text-2xl font-bold text-charcoal mb-4">
    The Birthday Your Kid Will Remember Forever
  </h3>
  <p className="text-charcoal/70 leading-relaxed mb-6">
    Picture this: Your child's eyes light up as flames erupt from the grill...
  </p>
  <span className="inline-flex items-center text-accent-red font-semibold text-sm group-hover:gap-3 transition-all">
    Hibachi Dining Guide
    <svg>...</svg>
  </span>
</Link>
```

**Link Target:** `/blog/category/hibachi`
**Status:** ❌ BROKEN
**Section:** Featured blog category cards (top of featured section)

---

### Broken Link #2 - Line 573
**Issue:** Sushi category link

```tsx
<Link href="/blog/category/sushi" className="group block feature-card text-center">
  <div className="icon-circle icon-circle-sushi mx-auto mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
    <span className="text-4xl filter drop-shadow-md">🍣</span>
  </div>
  <h3 className="font-heading text-2xl font-bold text-charcoal mb-4">
    The Sushi Your Family Will Talk About for Weeks
  </h3>
  <p className="text-charcoal/70 leading-relaxed mb-6">
    Our master sushi chefs have been perfecting their craft since 1988...
  </p>
  <span className="inline-flex items-center text-accent-red font-semibold text-sm group-hover:gap-3 transition-all">
    Sushi Menu & Guide
    <svg>...</svg>
  </span>
</Link>
```

**Link Target:** `/blog/category/sushi`
**Status:** ❌ BROKEN
**Section:** Featured blog category cards (middle of featured section)

---

### Broken Link #3 - Line 594
**Issue:** Celebrations category link

```tsx
<Link href="/blog/category/celebrations" className="group block feature-card text-center">
  <div className="icon-circle icon-circle-celebration mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
    <span className="text-4xl filter drop-shadow-md">🎉</span>
  </div>
  <h3 className="font-heading text-2xl font-bold text-charcoal mb-4">
    Celebrations That Feel Like Coming Home
  </h3>
  <p className="text-charcoal/70 leading-relaxed mb-6">
    Whether it's your daughter's 8th birthday or your 25th anniversary...
  </p>
  <span className="inline-flex items-center text-accent-red font-semibold text-sm group-hover:gap-3 transition-all">
    Plan a Celebration
```

**Link Target:** `/blog/category/celebrations`
**Status:** ❌ BROKEN
**Section:** Featured blog category cards (right of featured section)

---

## Impact Analysis

### User-Facing Impact
These are **prominent links on the homepage** in a featured section. Users see three large cards with:
- Emoji icons (🔥, 🍣, 🎉)
- Descriptive headlines
- Persuasive content
- Call-to-action links

When users click these cards, they expect to see category pages with relevant blog articles but will instead get a 404 error.

### SEO Impact
- Internal links on homepage are important for SEO
- Broken links negatively impact search rankings
- Google crawlers will find 404s and note them

### User Experience Impact
- Users leave the site due to broken navigation
- Reduces blog visibility and traffic
- Users can't browse content by category
- Negative impression of site quality

---

## Related Configuration Files

### File: src/app/blog/category/[category]/page.tsx
**Status:** Exists ✓
**Purpose:** Dynamic route handler for blog categories
**Line 54:** Defines "large-group-dining" in celebrations category

This file contains the category route logic and should be serving pages at:
- `/blog/category/sushi`
- `/blog/category/hibacci`
- `/blog/category/celebrations`
- `/blog/category/happy-hour`
- `/blog/category/local-guide`

**Issue:** The dynamic route may not be generating these static pages correctly.

---

## Quick Fix Checklist

- [ ] Test broken links in browser (if deployed)
- [ ] Check npm run build output for warnings
- [ ] Verify generateStaticParams() in [category]/page.tsx
- [ ] Check next.config.ts for route restrictions
- [ ] Verify no middleware is blocking these routes
- [ ] Check if dynamicParams is set correctly
- [ ] Clear .next directory and rebuild
- [ ] Test after fixes

---

## How These Sections Appear on the Homepage

The broken links are in a prominent featured section showing three blog category cards in a grid layout:

```
┌─────────────────────────────────────────────────────┐
│          FEATURED BLOG CATEGORIES SECTION            │
├─────────────────────────────────────────────────────┤
│                                                       │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐           │
│  │   🔥     │  │   🍣     │  │   🎉     │           │
│  │ Hibachi  │  │  Sushi   │  │Celebrations
│  │  Guide   │  │  Guide   │  │  Guide   │           │
│  │  BROKEN  │  │  BROKEN  │  │  BROKEN  │           │
│  └──────────┘  └──────────┘  └──────────┘           │
│                                                       │
└─────────────────────────────────────────────────────┘
```

Each card has:
- An emoji icon
- A compelling headline
- Descriptive text
- A "Read More" style link with an arrow

All three links go to `/blog/category/*` routes which are currently broken.

---

## Summary Statistics for This File

**File:** src/app/page.tsx
**Total Links Reviewed:** 50+
**Broken Links:** 3
**Broken Link Type:** Blog category navigation
**Lines Affected:** 552, 573, 594
**Severity:** HIGH (homepage visibility)
**User Impact:** Users cannot navigate to blog categories from homepage

---

**Report Generated:** February 3, 2026
**Next Action:** Fix the blog category routes
