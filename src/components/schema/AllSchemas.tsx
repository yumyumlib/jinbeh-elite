// Complete Schema Collection for Jinbeh Japanese Restaurant
// Implements LocalBusiness, Organization, and other critical schemas

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Jinbeh Japanese Restaurant",
    "alternateName": "Jinbeh Hibachi and Sushi Bar",
    "url": "https://jinbeh.com",
    "logo": "https://jinbeh.com/images/logos/jinbeh-logo.png",
    "foundingDate": "1988",
    "description": "Family-owned Japanese restaurant serving authentic hibachi and sushi in Frisco and Lewisville, TX since 1988. A warm welcome and a show with every meal.",
    "sameAs": [
      "https://www.instagram.com/jinbehfrisco/",
      "https://www.facebook.com/Jinbeh/",
      "https://www.yelp.com/biz/jinbeh-japanese-restaurant-frisco"
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "2693 Preston Rd Suite 1040",
        "addressLocality": "Frisco",
        "addressRegion": "TX",
        "postalCode": "75034",
        "addressCountry": "US"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "2440 S Stemmons Fwy #A",
        "addressLocality": "Lewisville",
        "addressRegion": "TX",
        "postalCode": "75067",
        "addressCountry": "US"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchemaFrisco() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Jinbeh Japanese Restaurant - Frisco",
    "image": [
      "https://jinbeh.com/images/exterior/JinbehFriscoStorefrontSign.jpg",
      "https://jinbeh.com/images/interior/JinbehFrisco_SushiBar.jpg",
      "https://jinbeh.com/images/photoshoot/hibachi-flame-action.jpg",
      "https://jinbeh.com/images/instagram/sushi-feast-flatlay.jpg"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2693 Preston Rd Suite 1040",
      "addressLocality": "Frisco",
      "addressRegion": "TX",
      "postalCode": "75034",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.1507,
      "longitude": -96.8236
    },
    "url": "https://jinbeh.com/frisco",
    "telephone": "+12146191200",
    "servesCuisine": ["Japanese", "Hibachi", "Sushi", "Teppanyaki", "Sashimi"],
    "priceRange": "$$",
    "acceptsReservations": true,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "11:00",
        "closes": "14:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "17:00",
        "closes": "21:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "17:00",
        "closes": "22:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "11:30",
        "closes": "22:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "11:30",
        "closes": "21:30"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.3",
      "reviewCount": "752",
      "bestRating": "5",
      "worstRating": "1"
    },
    "paymentAccepted": "Cash, Credit Card, Debit Card"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchemaLewisville() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Jinbeh Japanese Restaurant - Lewisville",
    "image": [
      "https://jinbeh.com/images/hibachi-lewisville-2026/jinbeh-hibachi-flame-show-lewisville-010-orig-IMG_1852-1200w.webp",
      "https://jinbeh.com/images/hibachi-lewisville-2026/jinbeh-hibachi-dinner-plate-lewisville-002-orig-IMG_2002-1200w.webp",
      "https://jinbeh.com/images/hibachi-lewisville-2026/jinbeh-japanese-restaurant-interior-lewisville-002-orig-IMG_1830-1200w.webp",
      "https://jinbeh.com/images/hibachi-lewisville-2026/jinbeh-sushi-presentation-lewisville-001-orig-IMG_1870-1200w.webp"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2440 S Stemmons Fwy #A",
      "addressLocality": "Lewisville",
      "addressRegion": "TX",
      "postalCode": "75067",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.0157,
      "longitude": -96.9903
    },
    "url": "https://jinbeh.com/lewisville",
    "telephone": "+12144882224",
    "servesCuisine": ["Japanese", "Hibachi", "Sushi", "Teppanyaki", "Sashimi"],
    "priceRange": "$$",
    "acceptsReservations": true,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "11:00",
        "closes": "14:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "17:00",
        "closes": "21:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "17:00",
        "closes": "22:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "11:30",
        "closes": "22:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "11:30",
        "closes": "21:30"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.3",
      "reviewCount": "901",
      "bestRating": "5",
      "worstRating": "1"
    },
    "paymentAccepted": "Cash, Credit Card, Debit Card"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function MenuSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "Jinbeh Menu",
    description: "Authentic Japanese hibachi and sushi menu featuring fresh seafood, premium steaks, and chef's special rolls",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Hibachi Entrees",
        description: "Teppanyaki-grilled entrees prepared tableside",
        hasMenuItem: [
          { "@type": "MenuItem", name: "Hibachi Filet Mignon", description: "Premium center-cut filet with seasonal vegetables and fried rice", offers: { "@type": "Offer", price: "34.95", priceCurrency: "USD" } },
          { "@type": "MenuItem", name: "Hibachi Shrimp", description: "Jumbo shrimp grilled to perfection with hibachi vegetables", offers: { "@type": "Offer", price: "26.95", priceCurrency: "USD" } },
          { "@type": "MenuItem", name: "Hibachi Chicken", description: "Tender chicken breast with signature hibachi seasonings", offers: { "@type": "Offer", price: "22.95", priceCurrency: "USD" } },
        ],
      },
      {
        "@type": "MenuSection",
        name: "Sushi Rolls",
        description: "Fresh, hand-crafted sushi rolls",
        hasMenuItem: [
          { "@type": "MenuItem", name: "Dragon Roll", description: "Eel and cucumber topped with avocado and eel sauce", offers: { "@type": "Offer", price: "16.95", priceCurrency: "USD" } },
          { "@type": "MenuItem", name: "Rainbow Roll", description: "California roll topped with assorted sashimi", offers: { "@type": "Offer", price: "18.95", priceCurrency: "USD" } },
          { "@type": "MenuItem", name: "Spicy Tuna Roll", description: "Fresh tuna with spicy mayo and green onion", offers: { "@type": "Offer", price: "12.95", priceCurrency: "USD" } },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Jinbeh Japanese Restaurant",
    "alternateName": "Jinbeh Hibachi and Sushi Bar",
    "url": "https://jinbeh.com",
    "description": "Family-owned Japanese restaurant serving authentic hibachi and sushi in Frisco and Lewisville, TX since 1988.",
    "publisher": {
      "@type": "Organization",
      "name": "Jinbeh Japanese Restaurant",
      "url": "https://jinbeh.com"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://jinbeh.com/blog?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "en-US"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
