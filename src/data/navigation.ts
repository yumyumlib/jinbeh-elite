export interface DropdownItem {
    label: string;
    href: string;
    description?: string;
    isExternal?: boolean;
}

export interface MegaMenuSection {
    title: string;
    icon: string;
    items: DropdownItem[];
}

export interface NavItem {
    label: string;
    href: string;
    dropdown?: DropdownItem[];
    megaMenu?: MegaMenuSection[];
    footerLinks?: DropdownItem[];
}

export function getNavItems(loc: string): NavItem[] {
    return [
        {
            label: "Locations",
            href: "#",
            dropdown: [
                { label: "Jinbeh Frisco", href: "/frisco", description: "Near Stonebriar Centre • (214) 619-1200" },
                { label: "Jinbeh Lewisville", href: "/lewisville", description: "Off I-35E near Vista Ridge • (214) 488-2224" },
            ],
        },
        {
            label: "Menu",
            href: `/${loc}/menu`,
            dropdown: [
                { label: "Full Menu", href: `/${loc}/menu`, description: "Browse our complete menu" },
                { label: "Hibachi", href: `/${loc}/hibachi`, description: "Teppanyaki grilled tableside" },
                { label: "Sushi & Rolls", href: `/${loc}/sushi-rolls`, description: "Fresh rolls & nigiri" },
                { label: "Sashimi", href: `/${loc}/sashimi`, description: "Premium fresh cuts" },
                { label: "Appetizers", href: `/${loc}/appetizers`, description: "Start your experience" },
                { label: "Drinks & Sake", href: `/${loc}/cocktails`, description: "Full bar & sake selection" },
                { label: "Kids Menu", href: `/${loc}/kids-menu`, description: "For our younger guests" },
                { label: "Lunch Specials", href: "/lunch-specials", description: "Weekday specials" },
            ],
            footerLinks: [
                { label: "Hibachi Menu Guide", href: "/blog/hibachi-menu-guide", description: "How to order" },
                { label: "Types of Sushi", href: "/blog/types-of-sushi", description: "Visual guide" },
            ],
        },
        {
            label: "Dining",
            href: "#",
            dropdown: [
                { label: "Happy Hour", href: "/happy-hour", description: "Daily specials at the bar" },
                { label: "Private Dining", href: "/private-dining", description: "Groups & events" },
                { label: "Catering", href: "/catering", description: "Bring Jinbeh to you" },
                { label: "Order Online", href: "/order-online", description: "Delivery & takeout" },
            ],
            footerLinks: [
                { label: "Catering Guide", href: "/blog/hibachi-catering-dfw", description: "Plan your event" },
                { label: "Group Dining Tips", href: "/blog/group-dining-venues", description: "Venues & ideas" },
            ],
        },
        {
            label: "Celebrations",
            href: "/celebrations",
            dropdown: [
                { label: "All Celebrations", href: "/celebrations", description: "Browse all events" },
                { label: "Birthday Parties", href: "/celebrations/birthday", description: "Make it memorable" },
                { label: "Anniversary Dinners", href: "/celebrations/anniversary", description: "Romantic experiences" },
                { label: "Date Night", href: "/celebrations/date-night", description: "Perfect evening out" },
                { label: "Graduation", href: "/celebrations/graduation", description: "Celebrate achievements" },
                { label: "Corporate Events", href: "/celebrations/corporate-events", description: "Team building & parties" },
                { label: "Holiday Parties", href: "/celebrations/holiday-parties", description: "Seasonal celebrations" },
                { label: "Private Dining", href: "/private-dining", description: "Exclusive group dining" },
            ],
        },
        {
            label: "Explore",
            href: "/blog",
            megaMenu: [
                {
                    title: "Guides & Tips",
                    icon: "🍣",
                    items: [
                        { label: "Sushi Guides", href: "/blog?category=sushi" },
                        { label: "Hibachi Guides", href: "/blog?category=hibachi" },
                        { label: "Japanese Cuisine", href: "/blog?category=cuisine" },
                        { label: "Drinks & Happy Hour", href: "/blog?category=happy-hour" },
                    ],
                },
                {
                    title: "Celebrations",
                    icon: "🎉",
                    items: [
                        { label: "Birthday Dinners", href: "/blog?category=celebrations" },
                        { label: "Anniversaries", href: "/blog?category=celebrations" },
                        { label: "Corporate Events", href: "/blog?category=celebrations" },
                        { label: "Group Dining Tips", href: "/blog?category=celebrations" },
                    ],
                },
                {
                    title: "Local Areas",
                    icon: "📍",
                    items: [
                        { label: "Frisco Guide", href: "/blog?category=local-guide" },
                        { label: "Lewisville Guide", href: "/blog?category=local-guide" },
                        { label: "Best of DFW", href: "/blog?category=local-guide" },
                        { label: "Things to Do", href: "/blog?category=local-guide" },
                    ],
                },
                {
                    title: "Restaurant Info",
                    icon: "🏢",
                    items: [
                        { label: "About Jinbeh", href: "/about" },
                        { label: "VIP Rewards", href: "/vip" },
                        { label: "Gift Cards", href: "/gift-cards" },
                        { label: "Contact Us", href: "/contact" },
                    ],
                },
            ],
        },
        { label: "About", href: "/about" },
        { label: "VIP Club", href: "/vip" },
        { label: "Gift Cards", href: "/gift-cards" },
    ];
}
