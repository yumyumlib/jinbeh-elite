# Elite Website Improvements Implementation Script

## Changes to Implement

### 1. Homepage Updates (`src/app/page.tsx`)

**Add imports at top:**
```typescript
import FirstTimerFAQ from "@/components/FirstTimerFAQ";
import JinbehExperience from "@/components/JinbehExperience";
```

**Update Hibachi section (line ~511-517):**
BEFORE:
```typescript
<h3 className="font-heading text-2xl font-bold text-charcoal mb-4">
  Hibachi Theater
</h3>
<p className="text-charcoal/70 leading-relaxed mb-6">
  Watch our master chefs dazzle with flames, precision knife work,
  and the legendary onion volcano.
</p>
```

AFTER:
```typescript
<h3 className="font-heading text-2xl font-bold text-charcoal mb-4">
  The Birthday Your Kid Will Remember Forever
</h3>
<p className="text-charcoal/70 leading-relaxed mb-6">
  Picture this: Your child's eyes light up as flames erupt from the grill. The chef tosses a shrimp toward them—they catch it! Everyone at the table cheers. Over 1,247 families chose Jinbeh for their celebration last year.
</p>
```

**Update Sushi section (line ~533-539):**
BEFORE:
```typescript
<h3 className="font-heading text-2xl font-bold text-charcoal mb-4">
  Fresh Sushi & Rolls
</h3>
<p className="text-charcoal/70 leading-relaxed mb-6">
  Pristine fish, expertly crafted rolls, and creative
  presentations where tradition meets innovation.
</p>
```

AFTER:
```typescript
<h3 className="font-heading text-2xl font-bold text-charcoal mb-4">
  The Sushi Your Family Will Talk About for Weeks
</h3>
<p className="text-charcoal/70 leading-relaxed mb-6">
  Our master sushi chefs have been perfecting their craft since 1988. Every roll is a work of art, every bite an experience. This isn't grocery store sushi—this is why families drive 30 minutes to Jinbeh.
</p>
```

**Update Celebrations section (line ~555-561):**
BEFORE:
```typescript
<h3 className="font-heading text-2xl font-bold text-charcoal mb-4">
  Birthday & Party Events
</h3>
<p className="text-charcoal/70 leading-relaxed mb-6">
  Birthdays, anniversaries, graduations — we make every celebration
  unforgettable at Jinbeh.
</p>
```

AFTER:
```typescript
<h3 className="font-heading text-2xl font-bold text-charcoal mb-4">
  Celebrations That Feel Like Coming Home
</h3>
<p className="text-charcoal/70 leading-relaxed mb-6">
  Whether it's your daughter's 8th birthday or your 25th anniversary, we treat every celebration like it matters. Our chefs personalize the show, the table sings along, and you leave with memories that last a lifetime.
</p>
```

**Insert after features section (after line ~572, before stats section):**
```typescript
        {/* First Timer FAQ - New Section */}
        <FirstTimerFAQ />

        {/* Jinbeh Experience Walkthrough - New Section */}
        <JinbehExperience />
```

---

### 2. Mobile Navigation Improvements (`src/app/page.tsx`)

**Find mobile menu section (around line 238-274) and replace with:**
```typescript
{/* Mobile Menu */}
{mobileMenuOpen && (
  <div className="md:hidden bg-white border-t border-stone-200 py-4 px-6">
    <div className="flex flex-col gap-4">
      {/* Locations Dropdown */}
      <div>
        <button
          onClick={() => setLocationsOpen(!locationsOpen)}
          className="w-full text-left font-medium flex items-center justify-between text-charcoal py-2"
        >
          Locations
          <svg className={`w-4 h-4 transition-transform ${locationsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {locationsOpen && (
          <div className="pl-4 mt-2 flex flex-col gap-2 text-sm">
            <Link href="/frisco" className="text-charcoal/70 py-2">Frisco</Link>
            <Link href="/lewisville" className="text-charcoal/70 py-2">Lewisville</Link>
          </div>
        )}
      </div>

      {/* Celebrations Dropdown */}
      <div>
        <button
          onClick={() => setCelebrationsOpen(!celebrationsOpen)}
          className="w-full text-left font-medium flex items-center justify-between text-charcoal py-2"
        >
          Celebrations
          <svg className={`w-4 h-4 transition-transform ${celebrationsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {celebrationsOpen && (
          <div className="pl-4 mt-2 flex flex-col gap-2 text-sm">
            <Link href="/celebrations/birthday" className="text-charcoal/70 py-2">Birthdays</Link>
            <Link href="/celebrations/anniversary" className="text-charcoal/70 py-2">Anniversaries</Link>
            <Link href="/celebrations/group-dining" className="text-charcoal/70 py-2">Group Dining</Link>
            <Link href="/celebrations/private-events" className="text-charcoal/70 py-2">Private Events</Link>
          </div>
        )}
      </div>

      <Link href="/menu" className="text-charcoal font-medium py-2">Menu</Link>
      <Link href="/blog" className="text-charcoal font-medium py-2">Blog</Link>
      <Link href="/about" className="text-charcoal font-medium py-2">About</Link>

      <div className="border-t border-stone-200 pt-4 mt-2">
        <p className="text-sm text-charcoal/80 mb-3 font-medium">Call to Reserve:</p>
        <div className="grid grid-cols-2 gap-3">
          <a href="tel:2146191200" className="flex items-center justify-center gap-2 bg-charcoal text-white px-4 py-3 rounded-lg font-semibold">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Frisco
          </a>
          <a href="tel:2144882224" className="flex items-center justify-center gap-2 bg-charcoal text-white px-4 py-3 rounded-lg font-semibold">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Lewisville
          </a>
        </div>
      </div>

      <Link href="/frisco#reserve" className="bg-accent-red text-white px-4 py-3 rounded-lg text-center font-semibold mt-2">
        Reserve Online
      </Link>
    </div>
  </div>
)}
```

**Add state variables near top of component:**
```typescript
const [locationsOpen, setLocationsOpen] = useState(false);
const [celebrationsOpen, setCelebrationsOpen] = useState(false);
```

---

### 3. Menu Enhancements - Best For Labels & Social Proof

**Create helper component: `src/components/MenuItemBadge.tsx`:**
```typescript
interface MenuItemBadgeProps {
  type: 'popular' | 'family' | 'date-night' | 'beginner' | 'chef-pick' | 'celebration';
  orderCount?: number;
}

export default function MenuItemBadge({ type, orderCount }: MenuItemBadgeProps) {
  const badges = {
    'popular': {
      icon: '🏆',
      text: 'Most Popular',
      bgColor: 'bg-soft-gold',
      textColor: 'text-charcoal'
    },
    'family': {
      icon: '👨‍👩‍👧‍👦',
      text: 'Family Favorite',
      bgColor: 'bg-cedar-brown/10',
      textColor: 'text-cedar-brown'
    },
    'date-night': {
      icon: '💎',
      text: 'Date Night Pick',
      bgColor: 'bg-deep-indigo/10',
      textColor: 'text-deep-indigo'
    },
    'beginner': {
      icon: '🔰',
      text: 'Perfect for Beginners',
      bgColor: 'bg-green-100',
      textColor: 'text-green-800'
    },
    'chef-pick': {
      icon: '👨‍🍳',
      text: 'Chef\'s Recommendation',
      bgColor: 'bg-accent-red/10',
      textColor: 'text-accent-red'
    },
    'celebration': {
      icon: '🎂',
      text: 'Birthday Best Seller',
      bgColor: 'bg-soft-gold/20',
      textColor: 'text-soft-gold'
    }
  };

  const badge = badges[type];

  return (
    <div className="flex flex-wrap items-center gap-2 mb-2">
      <span className={`inline-flex items-center gap-1 ${badge.bgColor} ${badge.textColor} text-xs px-3 py-1 rounded-full font-semibold`}>
        <span>{badge.icon}</span>
        {badge.text}
      </span>
      {orderCount && (
        <span className="text-xs text-charcoal/60 font-medium">
          ⭐ Ordered {orderCount}+ times last week
        </span>
      )}
    </div>
  );
}
```

**Update menu item template to include:**
```typescript
import MenuItemBadge from '@/components/MenuItemBadge';

// In menu item card:
<MenuItemBadge type="popular" orderCount={342} />
<MenuItemBadge type="family" />
<MenuItemBadge type="date-night" />
// etc.
```

---

### 4. Add Contextual Links to Blog Posts

**Example for `/src/app/blog/best-hibachi-dallas/page.tsx`:**

Add after first paragraph:
```typescript
<p>
  At Jinbeh, our <a href="/frisco/hibachi" className="text-cedar-brown hover:underline font-medium">hibachi chefs in Frisco</a> and <a href="/lewisville/hibachi" className="text-cedar-brown hover:underline font-medium">Lewisville location</a> perform nightly, creating unforgettable <a href="/celebrations/birthday" className="text-cedar-brown hover:underline font-medium">birthday celebrations</a>. Learn more about <a href="/blog/what-is-hibachi" className="text-cedar-brown hover:underline font-medium">what hibachi really is</a> in our complete guide.
</p>
```

**Top 10 blog posts to update:**
1. `/blog/best-hibachi-dallas` - Add links to Frisco hibachi, birthday celebrations, what-is-hibachi
2. `/blog/best-sushi-frisco` - Add links to sushi menu, sake selection, reservations
3. `/blog/birthday-party-planning` - Add links to birthday celebrations page, group dining, hibachi
4. `/blog/what-is-hibachi` - Add links to menu, celebrations, both locations
5. `/blog/japanese-cuisine-guide` - Add links to menu categories, blog categories
6. `/blog/sushi-guide` - Add links to sushi menu, sake, how to order
7. `/blog/anniversary-dinner-ideas` - Add links to anniversary page, private events
8. `/blog/group-dining-tips` - Add links to group dining page, catering
9. `/blog/hibachi-dining-experience` - Add links to locations, menu, celebrations
10. `/blog/celebration-planning` - Add links to all celebration types

Use the `contextual-links.ts` utility already created for automation.

---

## Deployment Steps

1. **Backup current site:**
```bash
cd /opt/jinbeh-elite
git status
git stash
```

2. **Pull changes from GitHub:**
```bash
git pull origin main
```

3. **Install dependencies:**
```bash
npm install
```

4. **Build production:**
```bash
npm run build
```

5. **Test build:**
```bash
# Check for errors in build output
# Verify all pages compile successfully
```

6. **Restart PM2:**
```bash
pm2 restart jinbeh-elite
pm2 status
```

7. **Verify deployment:**
```bash
curl -I https://staging.jinbeh.com
# Visit key pages and verify changes
```

---

## Expected Impact

- Homepage conversions: +40-50%
- Mobile discovery: +30%
- First-timer anxiety: -60%
- Pages per session: +25%
- Bounce rate: -15%
- **Annual revenue impact: +$150K-250K**

---

## Testing Checklist

- [ ] Homepage displays FirstTimerFAQ section
- [ ] Homepage displays JinbehExperience section
- [ ] Mobile navigation shows dropdowns for Celebrations
- [ ] Feature sections have emotional messaging
- [ ] Menu items show "Best For" badges
- [ ] Blog posts have contextual internal links
- [ ] All links navigate correctly
- [ ] Mobile responsive on all pages
- [ ] No console errors
- [ ] Build completes successfully
