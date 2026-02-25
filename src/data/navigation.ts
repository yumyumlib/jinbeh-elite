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
                    title: "Cuisine & Sushi",
                    icon: "🍣",
                    items: [
                        { label: "How to Eat Sushi", href: "/blog/how-to-eat-sushi-guide" },
                        { label: "Types of Sushi", href: "/blog/types-of-sushi" },
                        { label: "Sushi Identification", href: "/blog/sushi-identification-chart" },
                        { label: "Beginner Sushi Tips", href: "/blog/beginner-sushi-tips" },
                        { label: "What is Omakase?", href: "/blog/omakase-dining-guide" },
                    ],
                },
                {
                    title: "Hibachi & Teppanyaki",
                    icon: "🔥",
                    items: [
                        { label: "Hibachi Menu Guide", href: "/blog/hibachi-menu-guide" },
                        { label: "Hibachi vs Teppanyaki", href: "/blog/hibachi-vs-teppanyaki-explained" },
                        { label: "The Hibachi Experience", href: "/blog/hibachi-dining-experience" },
                        { label: "Hibachi Calories Guide", href: "/blog/hibachi-calories-guide" },
                        { label: "Discover Teppanyaki", href: "/blog/discover-teppanyaki" },
                    ],
                },
                {
                    title: "Drinks & Sake",
                    icon: "🍶",
                    items: [
                        { label: "Types of Sake", href: "/blog/types-of-sake-explained" },
                        { label: "Sake Pairing Guide", href: "/blog/sake-pairing-guide" },
                        { label: "Japanese Whiskey", href: "/blog/japanese-whiskey-guide" },
                        { label: "Japanese Cocktails", href: "/blog/japanese-cocktails" },
                        { label: "Sake Taste Profiles", href: "/blog/sake-taste-profile" },
                    ],
                },
                {
                    title: "Local & Best Of",
                    icon: "📍",
                    items: [
                        { label: "Best Sushi Frisco", href: "/blog/best-sushi-frisco" },
                        { label: "Best Hibachi Dallas", href: "/blog/best-hibachi-dallas" },
                        { label: "Top Frisco Restaurants", href: "/blog/top-frisco-restaurants" },
                        { label: "Best Happy Hour Frisco", href: "/blog/best-happy-hour-frisco-tx" },
                        { label: "Things to Do Frisco", href: "/blog/things-to-do-frisco" },
                    ],
                },
            ],
        },
        { label: "About", href: "/about" },
        { label: "VIP Club", href: "/vip" },
        { label: "Gift Cards", href: "/gift-cards" },
    ];
}
