// Menu Item Badge - Best For Labels & Social Proof
// Shows "Most Popular", "Family Favorite", order counts, etc.

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
      text: 'Perfect for Date Night',
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
      text: "Chef's Recommendation",
      bgColor: 'bg-accent-red/10',
      textColor: 'text-accent-red'
    },
    'celebration': {
      icon: '🎂',
      text: 'Birthday Best Seller',
      bgColor: 'bg-soft-gold/20',
      textColor: 'text-cedar-brown'
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
