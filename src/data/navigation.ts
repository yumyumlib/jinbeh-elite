export interface DropdownItem {
    label: string;
    href: string;
    description?: string;
    isExternal?: boolean;
    sectionHeader?: string; // Optional section header displayed above this item
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
            label: "Celebrations",
            href: "/celebrations",
            dropdown: [
                { label: "All Celebrations", href: "/celebrations", description: "Browse all events" },
                { label: "Birthday Parties", href: "/celebrations/birthday", description: "Make it memorable", sectionHeader: "Life Events" },
                { label: "Anniversary Dinners", href: "/celebrations/anniversary", description: "Romantic experiences" },
                { label: "Graduation", href: "/celebrations/graduation", description: "Celebrate achievements" },
                { label: "Baby Shower", href: "/celebrations/baby-shower", description: "Welcome the newest arrival" },
                { label: "Rehearsal Dinner", href: "/celebrations/rehearsal-dinner", description: "The night before the big day" },
                { label: "Date Night", href: "/celebrations/date-night", description: "Perfect evening out", sectionHeader: "Date & Social" },
                { label: "Family Gatherings", href: "/celebrations/family-gatherings", description: "Bring the family together" },
                { label: "Team Building", href: "/celebrations/team-building", description: "Bond with your team" },
                { label: "Valentine's Day", href: "/celebrations/valentines-day", description: "Romance & roses", sectionHeader: "Holidays" },
                { label: "Mother's Day", href: "/celebrations/mothers-day", description: "Celebrate mom" },
                { label: "Father's Day", href: "/celebrations/fathers-day", description: "Celebrate dad" },
                { label: "Thanksgiving", href: "/celebrations/thanksgiving", description: "Gather & give thanks" },
                { label: "Christmas", href: "/celebrations/christmas", description: "Holiday feast" },
                { label: "Lunar New Year", href: "/celebrations/lunar-new-year", description: "Ring in the new year" },
                { label: "Diwali", href: "/celebrations/diwali", description: "Festival of lights" },
                { label: "Mid-Autumn Festival", href: "/celebrations/mid-autumn-festival", description: "Harvest celebration" },
                { label: "Corporate Events", href: "/celebrations/corporate-events", description: "Team building & parties", sectionHeader: "Corporate" },
                { label: "Holiday Parties", href: "/celebrations/holiday-parties", description: "Seasonal celebrations" },
                { label: "Asian Restaurant Month", href: "/celebrations/asian-restaurant-month", description: "Celebrate culinary heritage", sectionHeader: "Special Events" },
                { label: "National Fried Rice Day", href: "/celebrations/national-fried-rice-day", description: "A day for fried rice lovers" },
            ],
            footerLinks: [
                { label: "Private Dining", href: "/private-dining", description: "Exclusive group dining" },
            ],
        },
        {
            label: "Dining",
            href: "#",
            dropdown: [
                { label: "Happy Hour", href: "/happy-hour", description: "Daily specials at the bar" },
                { label: "Catering", href: "/catering", description: "Bring Jinbeh to your event" },
                { label: "Private Dining", href: "/private-dining", description: "Groups & exclusive events" },
                { label: "Order Online", href: "/order-online", description: "Delivery & takeout" },
                { label: "Gift Cards", href: "/gift-cards", description: "The perfect present" },
            ],
            footerLinks: [
                { label: "Catering Guide", href: "/blog/hibachi-catering-dfw", description: "Plan your event" },
                { label: "Group Dining Tips", href: "/blog/group-dining-venues", description: "Venues & ideas" },
            ],
        },
        {
            label: "Locations",
            href: "#",
            dropdown: [
                { label: "Jinbeh Frisco", href: "/frisco", description: "Near Stonebriar Centre • (214) 619-1200" },
                { label: "Jinbeh Lewisville", href: "/lewisville", description: "Off I-35E near Vista Ridge • (214) 488-2224" },
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
        { label: "Catering", href: "/catering" },
    ];
}
