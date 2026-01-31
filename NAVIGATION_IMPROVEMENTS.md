# Jinbeh Website Navigation Improvements Plan

## Current Issues Identified

### 1. Footer is Too Basic
Current footer only has 6 quick links. Missing:
- Blog categories
- Popular/Featured articles
- Nearby cities (12 cities have pages but no links)
- Gift cards, Private dining, Takeout
- Contact/FAQ

### 2. Blog Discoverability Problems
- Homepage blog dropdown links to `/blog/category/sushi` but actual categories use `/blog?category=cuisine`
- Header.tsx uses correct categories but homepage has mismatched links
- 63+ blog articles but hard to discover from navigation
- Pickleball article example: no navigation path from homepage

### 3. Navigation Inconsistency
- Homepage has inline header with different dropdown structure
- Other pages use Header.tsx component
- Category slugs don't match between components

### 4. Missing Contextual Links
- Blog posts don't link to related menu items
- Location pages don't feature relevant blogs
- Celebration pages don't link to related guides

## Implementation Plan

### Phase 1: Enhanced Footer (Priority: HIGH)
Create comprehensive footer with:
- **Explore Menu**: Hibachi, Sushi, Appetizers, Drinks, Happy Hour
- **Celebrations**: Birthday, Anniversary, Corporate, Holiday, All Events
- **Blog Categories**: Best Of, Celebrations, Cuisine, Local Guides, Beverages, Health
- **Popular Articles**: 4-6 featured articles
- **Service Areas**: Frisco, Lewisville, Plano, McKinney, Allen, The Colony, etc.
- **Information**: About, FAQ, Contact, Gift Cards, Catering, Private Dining

### Phase 2: Fix Header Navigation
- Align blog dropdown categories with actual data
- Update homepage header to match Header.tsx
- Add "Popular Articles" direct links

### Phase 3: Add Blog Sections to Key Pages
- Location pages: "Local Guides & Tips" section
- Celebration pages: "Planning Resources" section
- Menu category pages: "Learn More" section

### Phase 4: Contextual Cross-Links
- In blog articles: Link to relevant menu items, locations
- In menu items: Link to related guides
- In celebration pages: Link to blog guides

## Page Depth Analysis (All within 3 levels ✓)

| Path | Depth | Status |
|------|-------|--------|
| / | 0 | ✓ |
| /blog | 1 | ✓ |
| /blog/pickleball-restaurants-lewisville | 2 | ✓ |
| /frisco | 1 | ✓ |
| /frisco/hibachi | 2 | ✓ |
| /frisco/hibachi/filet-mignon | 3 | ✓ |
| /celebrations/birthday | 2 | ✓ |
| /nearby/plano | 2 | ✓ |

**Issue is DISCOVERY, not DEPTH**

## Files to Modify

1. `src/components/Footer.tsx` - Complete rewrite
2. `src/components/Header.tsx` - Fix blog categories
3. `src/app/page.tsx` - Fix homepage header blog dropdown
4. `src/app/frisco/page.tsx` - Add blog section
5. `src/app/lewisville/page.tsx` - Add blog section
6. `src/app/celebrations/page.tsx` - Add blog section
7. `src/data/blog-posts.json` - Add relatedPosts to empty articles
