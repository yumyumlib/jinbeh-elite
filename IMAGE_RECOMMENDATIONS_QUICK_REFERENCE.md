# ARTICLE IMAGE AUDIT - QUICK REFERENCE GUIDE
**For implementing hero images in blog articles**

---

## TIER 1 - IMPLEMENT IMMEDIATELY (10 articles)

| Article Slug | Current | Recommended Image | Alt Text |
|---|---|---|---|
| best-hibachi-dallas-tx | ❌ None | `/images/photoshoot/hibachi-plate-shrimp.jpg` | `Premium hibachi shrimp plate prepared at top Dallas restaurant` |
| best-sushi-dallas | ❌ None | `/images/photoshoot/sushi-tower.jpg` | `Impressive sushi tower featuring specialty rolls` |
| best-sushi-frisco | ❌ None | `/images/photoshoot/specialty-roll.jpg` | `Artfully plated specialty sushi roll with fresh ingredients` |
| hibachi-birthday-party-ideas | ✓ Good | Keep `/images/celebrations/CelebrateYourBirthdayAtJinbeh.jpg` | No change needed |
| adult-birthday-party-ideas | ❌ None | `/images/celebrations/jinbeh_group.jpg` | `Adults celebrating birthday at hibachi table with friends` |
| birthday-celebration-restaurants | ❌ None | `/images/celebrations/jinbeh_group.jpg` | `Group celebrating special occasion at restaurant` |
| sushi-identification-chart | ❌ None | `/images/blog/16-C060324-6670.jpg` | `Visual guide showing variety of sushi types and presentations` |
| types-of-sushi | ❌ None | `/images/photoshoot/sushi-tower.jpg` | `Diverse selection of sushi types stacked in presentation` |
| jinbeh-catering-services | ❌ None | `/images/photoshoot/hibachi-plate-shrimp.jpg` | `Premium catered hibachi meal ready for home event` |
| top-frisco-restaurants | ✓ Good | Keep `/images/blog/8-C060324-6462.jpg` | No change needed |

---

## TIER 2 - ADD WITHIN 1 WEEK (8 articles)

| Article Slug | Recommended Image | Alt Text |
|---|---|---|
| best-salmon-sashimi | `/images/photoshoot/sashimi-platter.jpg` | `Premium salmon sashimi on artistic platter with garnish` |
| japanese-restaurants-lewisville | `/images/interior/JinbehFrisco_SushiBar.jpg` | `Authentic Japanese sushi bar at local restaurant` |
| bachelorette-restaurants-dallas | `/images/celebrations/jinbeh_group.jpg` | `Bachelorette party group celebrating at restaurant` |
| unique-kids-birthday-party-places | `/images/celebrations/CelebrateYourBirthdayAtJinbeh.jpg` | `Children's birthday celebration with hibachi chef` |
| sake-pairing-guide | `/images/beverages/LewisvilleBar.jpg` | `Premium sake bottles and cocktails displayed at bar` |
| discover-teppanyaki | `/images/photoshoot/hibachi-steak.jpg` | `Skilled teppanyaki chef cooking premium steak on griddle` |
| hibachi-catering-dfw | `/images/photoshoot/hibachi-flame-action.jpg` | `Hibachi chef performing flame cooking action for event` |
| thanksgiving-dining-guide | `/images/food/JinbehFriscoTables.jpg` | `Restaurant tables prepared for holiday dining celebration` |

---

## TIER 3 - ADD WITHIN 2-4 WEEKS (10 articles)

| Article Slug | Recommended Image | Alt Text |
|---|---|---|
| best-asian-food-dallas | `/images/photoshoot/specialty-roll.jpg` | `Premium sushi and Asian fusion cuisine plating` |
| asian-cuisine-dallas | `/images/photoshoot/specialty-roll.jpg` | `Artfully plated Asian fusion cuisine` |
| best-seafood-dallas | `/images/photoshoot/appetizers-spread.jpg` | `Premium fresh seafood selection at restaurant` |
| sushi-cooking-classes | `/images/blog/7-C060324-6447.jpg` | `Close-up of fresh sushi preparation showing technique` |
| japanese-restaurants-near-me | `/images/photoshoot/sushi-tower.jpg` | `Quality sushi presentation at Japanese restaurant` |
| types-of-sake-explained | `/images/blog/10-C060324-6501.jpg` | `Variety of sake bottles showing different types` |
| sake-alcohol-strength | `/images/beverages/LewisvilleBar.jpg` | `Sake bottles showing various alcohol content levels` |
| romantic-anniversary-dinners | `/images/interior/JinbehFrisco_SushiBar.jpg` | `Intimate sushi bar setting perfect for romantic dinner` |
| group-dining-venues | `/images/food/JinbehFriscoTables.jpg` | `Large group dining setup at restaurant` |
| bridal-shower-venues | `/images/celebrations/jinbeh_group.jpg` | `Women's bridal shower celebration at restaurant` |

---

## TIER 4 - LOWER PRIORITY (Remaining articles)

| Article Slug | Recommended Image |
|---|---|
| best-steak-near-me | `/images/photoshoot/hibachi-steak.jpg` |
| pickleball-restaurants-lewisville | `/images/interior/JinbehFriscoTables.jpg` |
| popular-japanese-culture | `/images/photoshoot/hibachi-plate-shrimp.jpg` |
| free-birthday-food-deals | `/images/celebrations/jinbeh_group.jpg` |
| jinbeh-gift-cards-guide | `/images/photoshoot/sushi-tower.jpg` |
| how-to-eat-sushi-guide | `/images/food/jinbeh_sushi_photo.jpg` |
| sashimi-vs-sushi | Keep `/images/blog/17-C060324-6708.jpg` (already has) |

---

## ARTICLES THAT ALREADY HAVE IMAGES ✓

No changes needed for these articles:

- ✓ hibachi-birthday-party-ideas
- ✓ best-hibachi-dallas
- ✓ hibachi-dining-experience
- ✓ hibachi-lunch-ideas
- ✓ hibachi-menu-guide
- ✓ hibachi-calories-guide
- ✓ hibachi-vs-teppanyaki-explained
- ✓ japanese-beverages-guide
- ✓ japanese-cocktails
- ✓ japanese-whiskey-guide
- ✓ yamazaki-whiskey-guide
- ✓ ramune-soda-guide
- ✓ sake-sushi-menu-pairings
- ✓ sake-taste-profile
- ✓ large-group-dining
- ✓ date-night-restaurants-frisco
- ✓ fine-dining-frisco
- ✓ restaurants-private-rooms
- ✓ seafood-lewisville
- ✓ omakase-dining-guide
- ✓ what-is-omakase
- ✓ best-happy-hour-frisco-tx

---

## HOW TO IMPLEMENT

### Step 1: Locate Article File
```bash
# Example: best-sushi-dallas
src/app/blog/best-sushi-dallas/page.tsx
```

### Step 2: Find ArticleLayout Component
Look for the component that looks like this:
```tsx
<ArticleLayout
  title="Article Title"
  metaDescription="..."
  // Add these two lines if missing:
  heroImage="/images/photoshoot/sushi-tower.jpg"
  heroAlt="Impressive sushi tower featuring specialty rolls"
  category="Category"
  // ... other props
>
```

### Step 3: Add Hero Image Props
If heroImage is missing, add:
```tsx
heroImage="/images/photoshoot/sushi-tower.jpg"
heroAlt="Impressive sushi tower featuring specialty rolls"
```

### Step 4: Test
- View article in browser at `localhost:3000/blog/article-slug`
- Verify image displays above article title
- Check mobile view (responsive)
- Check alt text accessibility

---

## COMMON IMAGE PATHS

### Hibachi Images
- `/images/photoshoot/hibachi-flame-action.jpg` - Flame performance
- `/images/photoshoot/hibachi-plate-shrimp.jpg` - Plated dish
- `/images/photoshoot/hibachi-steak.jpg` - Steak specialty
- `/images/photoshoot/hibachi-chicken.jpg` - Chicken dish
- `/images/food/onion-volcano.jpg` - Iconic volcano

### Sushi Images
- `/images/photoshoot/sushi-tower.jpg` - Multi-tiered tower
- `/images/photoshoot/specialty-roll.jpg` - Specialty roll
- `/images/food/jinbeh_sushi_photo.jpg` - Professional sushi photo
- `/images/blog/7-C060324-6447.jpg` - Sushi presentation
- `/images/blog/16-C060324-6670.jpg` - Sushi variety

### Sashimi Images
- `/images/photoshoot/sashimi-platter.jpg` - Premium platter
- `/images/blog/17-C060324-6708.jpg` - Sashimi detail
- `/images/blog/20-C060324-6766.jpg` - Alternative presentation

### Celebration Images
- `/images/celebrations/CelebrateYourBirthdayAtJinbeh.jpg` - Birthday party
- `/images/celebrations/jinbeh_group.jpg` - Group celebration
- `/images/food/JinbehFriscoTables.jpg` - Dining tables

### Beverage Images
- `/images/beverages/JapaneseWhiskey.webp` - Whiskey
- `/images/beverages/JinbehPunch.jpg` - Signature punch
- `/images/beverages/LewisvilleBar.jpg` - Bar setting
- `/images/beverages/RamuneSoda.webp` - Ramune drink

### Interior Images
- `/images/interior/JinbehFrisco_SushiBar.jpg` - Sushi bar
- `/images/interior/JinbehFriscoTables.jpg` - Dining tables
- `/images/frisco/JinbehFriscoStorefrontSign.jpg` - Storefront

---

## SUMMARY STATISTICS

| Metric | Count |
|--------|-------|
| **Total Articles** | 60 |
| **Articles with Images** | 16 (27%) |
| **Articles Missing Images** | 44 (73%) |
| **Tier 1 Priority** | 10 articles |
| **Tier 2 Priority** | 8 articles |
| **Tier 3 Priority** | 10 articles |
| **Tier 4 Priority** | 16 articles |
| **Estimated Implementation Time** | 2-3 hours |

---

## SUCCESS METRICS

After implementing hero images, track these metrics:

- **Click-through rate from search** (Target: +15-25%)
- **Bounce rate** (Target: -10-20%)
- **Time on page** (Target: +30 seconds)
- **Page load time** (Target: <3 seconds)
- **Mobile engagement** (Target: +25%)

Review performance 30 days after implementation and adjust image choices if needed.

---

**Last Updated:** February 3, 2026
**Next Review:** After implementation completion + 30 days
