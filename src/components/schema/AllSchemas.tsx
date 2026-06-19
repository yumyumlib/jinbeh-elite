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
    "@id": "https://jinbeh.com/frisco#restaurant",
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
    "menu": "https://jinbeh.com/menu",
    "hasMenu": "https://jinbeh.com/menu",
    "hasMap": "https://www.google.com/maps/search/?api=1&query=Jinbeh%20Japanese%20Restaurant%20Frisco%20TX",
    "sameAs": [
      "https://www.instagram.com/jinbehfrisco/",
      "https://www.facebook.com/Jinbeh/",
      "https://www.yelp.com/biz/jinbeh-japanese-restaurant-frisco"
    ],
    "areaServed": [
      { "@type": "City", "name": "Frisco" },
      { "@type": "City", "name": "Plano" },
      { "@type": "City", "name": "McKinney" },
      { "@type": "City", "name": "Allen" },
      { "@type": "City", "name": "The Colony" },
      { "@type": "City", "name": "Little Elm" },
      { "@type": "City", "name": "Prosper" }
    ],
    "servesCuisine": ["Japanese", "Hibachi", "Sushi", "Teppanyaki", "Sashimi"],
    "priceRange": "$$",
    "acceptsReservations": true,
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Hibachi teppanyaki tableside cooking", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Sushi bar", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Full bar with sake, Japanese beer & cocktails", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Private dining & party rooms", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Catering", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Takeout", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Happy hour", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Family & kid friendly", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Wheelchair accessible", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Free parking", "value": true }
    ],
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
      "ratingValue": "4.2",
      "reviewCount": "752",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "MyVisit MyView" },
        "datePublished": "2026-05-15",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "The food was excellent—everything from the chicken and steak to the seafood was well prepared and flavorful. There were also great vegetarian options, which was appreciated. The hibachi show made the evening even more enjoyable and added a fun, interactive element to dinner. The menu had a nice variety, and the craft cocktails and beer selection were also impressive. Overall, it was a great night out with delicious food and entertaining service. I would definitely go back."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Karie P" },
        "datePublished": "2026-01-15",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "We went here for the first time on Christmas. The portions were big, the salad dressing and dipping sauces were divine. Steak (NY strip and filet) and shrimp were perfect. We really enjoyed our sweet and accurate server and her speedy service. It made for a very enjoyable Christmas. Thank you!"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "taylor thrash" },
        "datePublished": "2026-03-15",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "Consistently the best hibachi experience in the DFW. Christine, Ryan, Justin, and all of the chefs/staff make this an incredible place to enjoy incredible food with friends and family. Thank you for always taking such great care of all of us, one of our favorite restaurants."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Linda Filippi" },
        "datePublished": "2025-06-15",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "We had a 5 pm reservation to celebrate our wedding anniversary. We were served drinks, salad, and soup right away. Our host was very welcoming, as well as our server. I have a dairy and shrimp allergy, which our chef accommodated by cooking the shrimp appetizer last. The food was delicious, more than we could eat. Our chef put on a great show too. Highly recommend Jinbeh. We will be back."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Chantal" },
        "datePublished": "2025-06-15",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "Went here for my daughter's 18th and 20th birthdays and loved both experiences. The staff and chef were amazing hosts. They accommodated our birthday party by letting us bring in our gifts and cake we bought elsewhere. They surprised my daughter with our cake and sang her happy birthday. Special shout out to Pancho, our chef! Amazing filet mignon, fish, rice, veggies. They are also kid and baby friendly."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Eli E" },
        "datePublished": "2026-05-20",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "They sent me a birthday giftcard, despite the fact that I had never been to or heard of the restaurant before, so I went to check them out and genuinely one of the best birthday gifts I got this year was the meal I got here. Unlike most places these days, the price is very much worth it."
      }
    ],
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
    "@id": "https://jinbeh.com/lewisville#restaurant",
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
    "menu": "https://jinbeh.com/menu",
    "hasMenu": "https://jinbeh.com/menu",
    "hasMap": "https://www.google.com/maps/search/?api=1&query=Jinbeh%20Japanese%20Restaurant%20Lewisville%20TX",
    "sameAs": [
      "https://www.facebook.com/Jinbeh/"
    ],
    "areaServed": [
      { "@type": "City", "name": "Lewisville" },
      { "@type": "City", "name": "Flower Mound" },
      { "@type": "City", "name": "Highland Village" },
      { "@type": "City", "name": "The Colony" },
      { "@type": "City", "name": "Carrollton" },
      { "@type": "City", "name": "Coppell" },
      { "@type": "City", "name": "Grapevine" },
      { "@type": "City", "name": "Denton" }
    ],
    "servesCuisine": ["Japanese", "Hibachi", "Sushi", "Teppanyaki", "Sashimi"],
    "priceRange": "$$",
    "acceptsReservations": true,
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Hibachi teppanyaki tableside cooking", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Sushi bar", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Full bar with sake, Japanese beer & cocktails", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Private dining & party rooms", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Catering", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Takeout", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Happy hour", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Family & kid friendly", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Wheelchair accessible", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Free parking", "value": true }
    ],
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
      "reviewCount": "901",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Joycelyn Lawson" },
        "datePublished": "2026-03-15",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "The service was quick and professional. Our wait time for lunch was less than 5 minutes. The food was great! We received a large portion at a great price. I loved that bean sprouts were included as well. The atmosphere was mellow and quiet enough to have conversations. Highly recommend for vegetarians, and I'm allergic to shellfish and they didn't have any issues accommodating it. I enjoyed the service and will be back."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Rita Matzrafi" },
        "datePublished": "2025-10-15",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "Great menu of sushi rolls. Some combinations I've never had before. The Dallas roll was a great choice. Always a favorite of mine is the Volcano roll. Great friendly service."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "MissReedme" },
        "datePublished": "2026-05-15",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "We came to this location for our daughter's 8th birthday and we had a great time! The food was good and not overcooked like some hibachi restaurants I've been to. The crab Rangoon were some of the best I've had in years! The staff were friendly and accommodating. Overall my baby girl had an amazing birthday and enjoyed her dinner."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Zachary Shepherd" },
        "datePublished": "2025-06-15",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "This was requested for a birthday and they took great care of us. I had made a reservation to ensure we had a table. We were seated quickly and got our food and drink orders taken. The portions were generous and we had plenty for leftovers. Great way to celebrate a special occasion."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "O" },
        "datePublished": "2025-12-15",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "From start to finish the experience here was amazing. Every single staff member here was very attentive. The manager and the staff were very friendly and welcoming. Everything was extremely clean and inside looked straight from Japan. I am extremely impressed with all the great food and the service. I will definitely come back soon!"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Mark Henderson" },
        "datePublished": "2019-06-15",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "Lunch specials are awesome and a pretty good deal for the price. Normally this is a night time place but I highly recommend lunch now that I've experienced it. Food is top notch and tasted amazing. The dipping sauces are great. Our hibachi chef was great and super friendly; knife and cooking skills were entertaining and his cleanliness was top notch too."
      }
    ],
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
    url: "https://jinbeh.com/menu",
    inLanguage: "en-US",
    description: "Authentic Japanese hibachi and sushi menu featuring fresh seafood, premium steaks, and chef's special rolls",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Hibachi Entrees",
        description: "Teppanyaki-grilled entrees prepared tableside",
        hasMenuItem: [
          { "@type": "MenuItem", name: "Hibachi Filet Mignon", description: "Premium center-cut filet with seasonal vegetables and fried rice" },
          { "@type": "MenuItem", name: "Hibachi Shrimp", description: "Jumbo shrimp grilled to perfection with hibachi vegetables" },
          { "@type": "MenuItem", name: "Hibachi Chicken", description: "Tender chicken breast with signature hibachi seasonings" },
          { "@type": "MenuItem", name: "Hibachi Vegetable & Tofu", description: "Fresh seasonal vegetables and crispy tofu grilled teppanyaki-style", suitableForDiet: "https://schema.org/VegetarianDiet" },
        ],
      },
      {
        "@type": "MenuSection",
        name: "Sushi Rolls",
        description: "Fresh, hand-crafted sushi rolls",
        hasMenuItem: [
          { "@type": "MenuItem", name: "Dragon Roll", description: "Eel and cucumber topped with avocado and eel sauce" },
          { "@type": "MenuItem", name: "Rainbow Roll", description: "California roll topped with assorted sashimi" },
          { "@type": "MenuItem", name: "Spicy Tuna Roll", description: "Fresh tuna with spicy mayo and green onion" },
        ],
      },
      {
        "@type": "MenuSection",
        name: "Sashimi",
        description: "Premium fresh fish, sliced to order",
        hasMenuItem: [
          { "@type": "MenuItem", name: "Salmon Sashimi", description: "Fresh Atlantic salmon, sliced to perfection", suitableForDiet: "https://schema.org/GlutenFreeDiet" },
          { "@type": "MenuItem", name: "Tuna Sashimi", description: "Premium ahi tuna, melt-in-your-mouth tender", suitableForDiet: "https://schema.org/GlutenFreeDiet" },
          { "@type": "MenuItem", name: "Chirashi Bowl", description: "Assorted chef's-selection sashimi over seasoned sushi rice" },
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
