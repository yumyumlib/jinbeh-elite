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
      "https://jinbeh.com/images/locations/frisco-exterior.jpg",
      "https://jinbeh.com/images/locations/frisco-interior.jpg",
      "https://jinbeh.com/images/food/hibachi-action.jpg",
      "https://jinbeh.com/images/food/sushi-platter.jpg"
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
      "ratingValue": "4.5",
      "reviewCount": "1247",
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
      "https://jinbeh.com/images/hibachi-lewisville-2026/jinbeh-hibachi-flame-show-lewisville-006-orig-IMG_1848-1200w.webp",
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
      "ratingValue": "4.5",
      "reviewCount": "1247",
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
