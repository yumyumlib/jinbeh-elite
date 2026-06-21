// Per-page unique SEO content (heading + paragraphs + FAQ), keyed by route.
// Targets each page's PRIMARY keyword, weaves its SECONDARY keywords naturally, and fills the
// page's specific SERP gap from the Jinbeh Hero/SEO audit. Brand voice: warm, family, authentic,
// both locations, no em-dashes, no prices (except Happy Hour), no AYCE, no omakase.
// Rendered by src/components/PageSeoBoost.tsx. Add routes in batches; pages without an entry render nothing.

export interface SeoFaq { q: string; a: string }
export interface SeoContentEntry { heading: string; paragraphs: string[]; faqs?: SeoFaq[]; image?: string; imageAlt?: string; imageCaption?: string }

const seoContent: Record<string, SeoContentEntry> = {
  "/frisco": {
    heading: "Why Jinbeh Is Frisco's Favorite Hibachi and Sushi Restaurant",
    paragraphs: [
      "Since 1988, Jinbeh has brought authentic teppanyaki to North Texas, and our Frisco location on Preston Road has become the go to spot for families searching for hibachi near me, a lively Japanese steakhouse in Frisco, or fresh sushi close to home. Every meal is a show. Your chef sears premium cuts like filet mignon, New York strip, and Black Angus ribeye on a blazing teppanyaki grill while the onion volcano erupts and the kids cheer.",
      "Jinbeh Frisco is more than hibachi. Our sushi bar rolls everything from a classic California roll to our signature specialty rolls, and our bar pours warm sake, Japanese whiskey, and cold drafts. Whether you are looking for teppanyaki near me for a birthday, a date night, or a family dinner, Jinbeh Frisco pairs an unforgettable show with food worth coming back for.",
    ],
    faqs: [
      { q: "Is Jinbeh the best hibachi in Frisco?", a: "Jinbeh has served Frisco since 1988 and is consistently rated among the top hibachi and Japanese steakhouses in the area, including an OpenTable Diners Choice recognition. We invite you to compare the show, the premium cuts, and the fresh sushi for yourself." },
      { q: "Does Jinbeh Frisco have a kids menu?", a: "Yes. Hibachi is a favorite for families, and our children's hibachi dinners keep younger guests entertained by the chef's tableside show. Many families choose Jinbeh for birthdays and celebrations because every child gets a front row seat to the flames." },
      { q: "Where is Jinbeh located in Frisco?", a: "Jinbeh Frisco is on Preston Road near Stonebriar Centre, just minutes from Plano, McKinney, Allen, and The Colony. Reservations are recommended on weekends." },
    ],
  },
  "/lewisville": {
    heading: "Hibachi and Sushi in Lewisville, Texas Since 1988",
    paragraphs: [
      "Jinbeh Lewisville is a North Texas original. Locals searching for hibachi Lewisville, sushi Lewisville, or a Japanese restaurant in Lewisville TX have made us their home for celebrations and weeknight dinners alike. Our chefs cook tableside on the teppanyaki grill, turning steak, shrimp, scallops, and salmon into dinner and a show in one.",
      "At the sushi bar, our chefs hand roll fresh nigiri, sashimi, and specialty rolls daily. Pair them with sake or a Japanese cocktail at the bar. Jinbeh Lewisville is rated number one for hibachi by local diners on Yelp and OpenTable, and we work every shift to keep it that way.",
    ],
    faqs: [
      { q: "Is Jinbeh good for sushi in Lewisville?", a: "Yes. While Jinbeh is known for hibachi, our Lewisville sushi bar serves fresh nigiri, sashimi, and creative specialty rolls hand made to order. Ask your sushi chef for the day's freshest fish." },
      { q: "Do I need a reservation at Jinbeh Lewisville?", a: "Reservations are strongly recommended on weekends and for groups, since hibachi tables seat parties together around the grill. Walk ins are welcome when seating allows." },
      { q: "How close is Jinbeh to Flower Mound and Highland Village?", a: "Jinbeh Lewisville is just minutes from Flower Mound, Highland Village, The Colony, Carrollton, and Coppell, making it an easy drive for hibachi and sushi near you." },
    ],
  },
  "/catering": {
    heading: "Japanese Catering for Frisco and Lewisville Events",
    paragraphs: [
      "Looking for Japanese catering near me, sushi catering, or hibachi catering in DFW? Jinbeh caters corporate lunches, office parties, graduations, and celebrations with restaurant quality food from a name North Texas has trusted since 1988. We deliver fresh sushi platters, hibachi favorites, and sides on beautiful presentation trays, ready to serve.",
      "Unlike mobile backyard chefs, Jinbeh catering brings the food to you while the full hibachi show stays at the restaurant, where it is at its best. For larger orders we ask for at least one week of notice so every platter is fresh. Tell us your headcount and occasion and we will build a package that fits.",
    ],
    faqs: [
      { q: "Does Jinbeh offer sushi platters for parties?", a: "Yes. Our sushi catering features party trays of rolls, nigiri, and sashimi sized for small gatherings up to large events. They are a favorite for office lunches, showers, and birthdays." },
      { q: "Do you cater corporate events in DFW?", a: "We regularly cater corporate lunches and company celebrations across Frisco, Lewisville, and the wider DFW area. Ask about volume options for sushi platters and hibachi favorites." },
      { q: "How much notice do you need for catering?", a: "Please give us at least one week of notice for larger catering orders so everything is prepared fresh. Smaller orders can often be arranged with less lead time." },
    ],
  },
  "/happy-hour": {
    heading: "Sushi Happy Hour in Frisco and Lewisville",
    paragraphs: [
      "Join us Monday through Friday from 5:00 to 6:30 PM for happy hour at Jinbeh. If you have been searching for sushi happy hour near me, happy hour for sushi, or the best happy hour in Frisco, our specials are made to share. Enjoy 4 dollar Japanese draft beer, 5 dollar small hot sake served in a tokkuri, and 6 dollar wine by the glass.",
      "Our bar is a relaxed place to unwind after work with a sake flight, a Japanese cocktail, or a cold draft alongside the sushi bar. It is an easy way to experience Jinbeh before dinner, or to make a night of it with friends.",
    ],
    faqs: [
      { q: "What are Jinbeh's happy hour times?", a: "Happy hour runs Monday through Friday from 5:00 to 6:30 PM at both the Frisco and Lewisville locations." },
      { q: "What is on the happy hour menu?", a: "Happy hour features 4 dollar Japanese draft beer, 5 dollar small hot sake, and 6 dollar wine by the glass. It is a great pairing with sushi from the bar." },
      { q: "Is Jinbeh a good sake bar in DFW?", a: "Yes. Jinbeh pours a curated selection of sake, from warm house sake to premium bottles, plus Japanese whiskey and cocktails, making it a favorite sake bar for the Frisco and Lewisville area." },
    ],
  },
  "/bar": {
    heading: "Sake, Japanese Whiskey, and Cocktails at Jinbeh",
    paragraphs: [
      "The bar at Jinbeh is built for guests who love sake near me, Japanese whiskey, and inventive Japanese cocktails. Our list spans warm and chilled sake, sparkling sake, and premium bottles, alongside Japanese whiskey and house cocktails like the Jinbeh Punch and a Tokyo Mule. It is a refined yet welcoming place to start an evening or settle in after work.",
      "Pair a sake flight with fresh sushi from the bar, or sip a Japanese whiskey while you wait for your hibachi table. Whether you are a longtime sake fan or trying it for the first time, our team is happy to guide you to the right pour.",
    ],
    faqs: [
      { q: "Does Jinbeh have a good sake selection?", a: "Yes. Jinbeh offers a curated sake list that ranges from approachable warm sake to premium and sparkling bottles, so there is a pour for every taste." },
      { q: "Can I get Japanese whiskey at Jinbeh?", a: "We carry Japanese whiskey for sipping neat or in cocktails. Ask the bartender for current bottles and recommendations." },
      { q: "Is there a happy hour at the bar?", a: "Yes. Monday through Friday from 5:00 to 6:30 PM you can enjoy 4 dollar draft beer, 5 dollar small hot sake, and 6 dollar wine." },
    ],
  },
  "/world-cup-2026": {
    heading: "Watch the 2026 World Cup at Jinbeh in DFW",
    paragraphs: [
      "The 2026 World Cup is coming to the Dallas Fort Worth area, and Jinbeh is the place to celebrate. If you are looking for a World Cup 2026 DFW dining spot, a Japan World Cup watch party, or somewhere to cheer Samurai Blue, our Frisco and Lewisville locations pair the energy of the tournament with hibachi, sushi, and sake. Gather your group around the grill and make every match a celebration.",
      "With both locations minutes from major venues and watch sites, Jinbeh is an easy choice for fans before or after the action. Reserve early for match days, since group seating fills quickly during the tournament.",
    ],
    faqs: [
      { q: "Is Jinbeh hosting World Cup 2026 watch events?", a: "Jinbeh welcomes fans throughout the 2026 World Cup at both Frisco and Lewisville. Reserve ahead for match days, especially for Japan and USA fixtures, since group tables fill fast." },
      { q: "Can Jinbeh host a group for a match?", a: "Yes. Hibachi seating is perfect for groups, and we can coordinate larger parties for a watch gathering. Contact us to plan your match day." },
      { q: "Where is Jinbeh located for World Cup fans?", a: "Jinbeh Frisco and Jinbeh Lewisville are both a short drive from major DFW venues and fan sites, making either an easy spot to eat and celebrate." },
    ],
  },
  "/private-dining": {
    heading: "Private Dining and Group Events at Jinbeh",
    paragraphs: [
      "Jinbeh is a natural fit for private dining and large group celebrations in Frisco and Lewisville. Searching for private dining in Frisco, group dining in DFW, or a restaurant for a large party? Our hibachi tables seat groups together around the grill, and when coordinated in advance we comfortably host parties of 100 or more for birthdays, corporate events, rehearsal dinners, and team celebrations.",
      "Every private event still includes the full tableside hibachi show, fresh sushi, and our welcoming hospitality. Tell us your date, headcount, and occasion, and our team will help you plan seating and menu so your group is taken care of.",
    ],
    faqs: [
      { q: "How large a group can Jinbeh host?", a: "Hibachi tables typically seat seven to eight guests, and by coordinating seating in advance we regularly host parties of 100 or more across the dining room. Reach out and we will plan the layout for your group." },
      { q: "Is Jinbeh good for corporate events?", a: "Yes. Companies choose Jinbeh for team dinners, client entertaining, and celebrations because the tableside show brings everyone together. We can coordinate group seating and menus." },
      { q: "Do you host rehearsal dinners and birthdays?", a: "Absolutely. Rehearsal dinners, milestone birthdays, graduations, and anniversaries are some of our most popular group occasions at both locations." },
    ],
  },
  "/events": {
    heading: "Celebrations and Events at Jinbeh",
    paragraphs: [
      "From birthdays and anniversaries to graduations and corporate gatherings, Jinbeh turns events into something guests remember. The tableside hibachi show makes every celebration interactive, and our sushi bar and sake list round out the experience. When seating is coordinated in advance, each Frisco and Lewisville location comfortably hosts groups of 100 or more.",
      "Looking for group dining in DFW or an event venue that does the entertainment for you? Let our team know your occasion and headcount, and we will help with seating and menu so you can simply enjoy the celebration with your guests.",
    ],
    faqs: [
      { q: "What kinds of events does Jinbeh host?", a: "Birthdays, anniversaries, graduations, rehearsal dinners, team building, and corporate celebrations are all favorites. The hibachi show keeps every guest engaged." },
      { q: "How do I plan a group event at Jinbeh?", a: "Contact your preferred location with your date, headcount, and occasion. We coordinate seating so larger parties are comfortable, including groups of 100 or more." },
    ],
  },
  "/frisco/sushi": {
    heading: "Fresh Sushi in Frisco at Jinbeh",
    paragraphs: [
      "When you search for sushi in Frisco or the best sushi near me, Jinbeh delivers fresh fish and creative rolls from chefs who have shaped our menu since 1988. Our Frisco sushi bar hand rolls classics like the California and spicy tuna roll along with signature specialty rolls, and we cut fresh nigiri and sashimi to order.",
      "Sushi at Jinbeh is meant to be shared, from a date night to a family table. Pair your rolls with sake or a Japanese cocktail from the bar, and ask your sushi chef which fish is freshest that day.",
    ],
    faqs: [
      { q: "Is the sushi fresh at Jinbeh Frisco?", a: "Yes. Our sushi chefs prepare nigiri, sashimi, and rolls to order using fish selected for freshness. Ask your chef for the day's recommendations." },
      { q: "What are Jinbeh's most popular sushi rolls?", a: "Guests love our signature specialty rolls along with classics like the California, spicy tuna, and dragon rolls. There is a roll for newcomers and longtime sushi fans alike." },
    ],
  },
  "/lewisville/sushi": {
    heading: "Fresh Sushi in Lewisville at Jinbeh",
    paragraphs: [
      "For sushi in Lewisville and the best sushi near me, Jinbeh has been a local favorite since 1988. Our Lewisville sushi bar hand rolls fresh nigiri, sashimi, and specialty rolls daily, made to order by chefs who take pride in their craft.",
      "Whether you are a sushi regular or just getting started, our team will guide you to the right rolls and the freshest fish. Pair them with sake or a Japanese cocktail and make a night of it at the bar.",
    ],
    faqs: [
      { q: "Does Jinbeh Lewisville have fresh sashimi?", a: "Yes. Our sushi chefs slice sashimi to order from fish chosen for freshness. Ask your chef which selections are best that day." },
      { q: "Is Jinbeh good for first time sushi eaters?", a: "Definitely. Our team is happy to recommend approachable rolls and cooked options, so newcomers and seasoned sushi lovers both feel at home." },
    ],
  },
  "/about": {
    heading: "Decades of Craft Behind the Hibachi Show",
    image: "/images/about/fuji-san-jinbeh-chef-portrait.jpg",
    imageAlt: "Fuji-san, Jinbeh's head sushi chef since 1993, with the traditional Japanese cookbooks that shaped his training",
    imageCaption: "Fuji-san, our head sushi chef since 1993, with the Japanese culinary texts behind his craft.",
    paragraphs: [
      "Behind Jinbeh's flames and colorful rolls is a sushi bar shaped by chefs who have spent decades perfecting their craft. Our longtime head sushi chef, known to regulars as Fuji-san, joined Jinbeh in 1993. He trained in tempura in Japan, learned hibachi in the United States, and led traditional Japanese menus, bringing a depth of experience that still guides our kitchens in Frisco and Lewisville.",
      "Ask him what he loves to prepare and he points to sashimi and clean, lightly seasoned fish, the quiet side of Japanese cooking where the ingredient speaks for itself. That standard, built over more than three decades, is why a meal at Jinbeh can be both a lively family celebration and a genuinely serious plate of food. He even left once for another kitchen and came back, because the people and the work here felt like home.",
    ],
    faqs: [
      { q: "How long has Jinbeh's head sushi chef worked here?", a: "Our head sushi chef, Fuji-san, joined Jinbeh in 1993 and has been part of the restaurant's growth across North Texas ever since, bringing decades of traditional Japanese training to the sushi bar." },
      { q: "What makes Jinbeh authentic?", a: "Jinbeh has been family run since 1988, and our kitchen is led by chefs trained in traditional Japanese techniques, from tempura and hibachi to sashimi and seasonal menu design. The focus is clean flavor, careful cutting, and presentation, not just elaborate rolls." },
      { q: "Did one chef create all of Jinbeh's rolls?", a: "No. Our specialty rolls were developed by several talented chefs over the years. Fuji-san's signature contribution was the original Jinbeh Special Roll, and his craft centers on traditional sashimi and clean, seasonal preparations." },
    ],
  },
  "/frisco/sashimi": {
    heading: "Why Great Sashimi Often Tastes Simple",
    paragraphs: [
      "For fresh sashimi in Frisco, Jinbeh leans on a tradition our head sushi chef has practiced for decades: let the fish speak. Sashimi is about the cut, the freshness, and light, careful seasoning rather than heavy sauces. Our chefs slice salmon, tuna, yellowtail, and more to order, chosen for quality and presented the traditional way.",
      "That restraint is the quiet craft behind Jinbeh's lively dining room. While the hibachi grill draws the eye, our sashimi is where decades of Japanese training show most clearly. Pair it with sake from the bar and ask your chef which selections are best that day.",
    ],
    faqs: [
      { q: "What sashimi does Jinbeh Frisco serve?", a: "Our sashimi selection includes salmon, tuna, yellowtail, octopus, and a chef's combination, all sliced to order. Ask your sushi chef for the freshest options on the day you visit." },
      { q: "What makes Jinbeh's sashimi different?", a: "Jinbeh's sashimi reflects traditional Japanese technique: clean flavor, precise cutting, and careful presentation, from chefs who have prepared it for decades. The goal is simply to taste the fish itself." },
      { q: "Is sashimi a healthy choice?", a: "Sashimi is fresh fish without rice or breading, so it is naturally light and high in protein. Salmon and tuna are especially rich in heart-healthy omega-3s." },
    ],
  },
  "/lewisville/sashimi": {
    heading: "Fresh Sashimi in Lewisville, the Traditional Way",
    paragraphs: [
      "For sashimi in Lewisville, Jinbeh draws on decades of traditional Japanese craft at the sushi bar. Sashimi is the purest test of a kitchen: fresh fish, a precise cut, and light seasoning so the natural flavor comes through. Our chefs slice salmon, tuna, yellowtail, and more to order.",
      "It is the quiet counterpart to our lively hibachi grill, and the place where our chefs' traditional training shows most. Pair your sashimi with sake or a Japanese cocktail, and ask which selections are freshest that evening.",
    ],
    faqs: [
      { q: "Does Jinbeh Lewisville have fresh sashimi?", a: "Yes. Our sushi chefs slice sashimi to order from fish chosen for quality and freshness. Ask your chef which selections are best that day." },
      { q: "What is the difference between sushi and sashimi?", a: "Sashimi is thin slices of fresh fish served on its own, while sushi pairs fish or other toppings with seasoned rice. Sashimi puts the spotlight entirely on the fish." },
      { q: "What should I pair with sashimi?", a: "Sashimi pairs beautifully with sake. Our bar pours warm and chilled sake along with Japanese whiskey, and our team is glad to recommend a match." },
    ],
  },
  "/catering/corporate": {
      "heading": "Corporate Catering in Frisco and Lewisville",
      "paragraphs": [
          "Searching for corporate catering in Frisco, japanese catering near me, or hibachi catering for the office? Jinbeh has fed North Texas companies since 1988 as the area's longest-running family-owned Japanese restaurant. We build catering packages by headcount, from a working lunch to a full company celebration, and an easy inquiry form gets your order started.",
          "Our sushi catering arrives on beautiful presentation trays ready to serve, with optional add-ons like extra rolls, edamame, and sides. Unlike mobile backyard chefs, Jinbeh delivers restaurant-quality food to your office while the live hibachi show stays at our Frisco and Lewisville dining rooms. Tell us your date and headcount, and we will handle the rest."
      ],
      "faqs": [
          {
              "q": "Does Jinbeh cater corporate lunches in Frisco?",
              "a": "Yes. We cater corporate lunches and company events across Frisco, Lewisville, and the wider DFW area. Share your headcount and we will recommend a sushi platter or hibachi-style package, with optional add-ons to round out the meal."
          },
          {
              "q": "How do I request a corporate catering quote?",
              "a": "Use our catering inquiry form with your date, headcount, and any dietary needs. For larger orders we ask for at least one week of notice so every tray is prepared fresh."
          },
          {
              "q": "What makes Jinbeh different from mobile catering?",
              "a": "Jinbeh is a sit-down restaurant that has served DFW since 1988, not a backyard pop-up. We deliver fresh sushi and hibachi favorites on trays, and the tableside show is best enjoyed at our Frisco or Lewisville locations."
          }
      ]
  },
  "/catering/party": {
      "heading": "Party Catering for DFW Celebrations",
      "paragraphs": [
          "Planning a birthday, shower, graduation, or backyard get-together and searching for party catering in Frisco, sushi catering near me, or a sushi platter for a party? Jinbeh caters celebrations across DFW with food North Texas has trusted since 1988. We size packages to your headcount so there is plenty to share without the guesswork.",
          "Choose colorful sushi platters, hibachi-style favorites, and sides delivered on ready-to-serve trays, with optional add-ons for bigger crowds. Jinbeh is a family-owned restaurant, not a mobile backyard chef, so the food is consistent and the live hibachi show stays at our Frisco and Lewisville grills. Start with a quick inquiry and we will build your menu."
      ],
      "faqs": [
          {
              "q": "Can Jinbeh cater a birthday party?",
              "a": "Absolutely. Sushi platters and hibachi favorites are crowd-pleasers for birthdays, showers, and graduations. Tell us your headcount and we will recommend a package, with add-ons available for larger groups."
          },
          {
              "q": "Do you make sushi platters for parties?",
              "a": "Yes. Our party trays feature an assortment of rolls, nigiri, and sashimi sized from small gatherings to large events, a favorite for any celebration in Frisco or Lewisville."
          },
          {
              "q": "How far in advance should I order party catering?",
              "a": "Please give at least one week of notice for larger orders so everything is fresh. Smaller trays can sometimes be arranged with less lead time."
          }
      ]
  },
  "/catering/wedding": {
      "heading": "Japanese Wedding Catering in DFW",
      "paragraphs": [
          "For couples searching for japanese wedding catering, sushi catering near me, or hibachi catering in DFW, Jinbeh brings a memorable Japanese table to your big day. Family-owned and serving North Texas since 1988, we cater rehearsal dinners, receptions, and showers with fresh sushi platters and hibachi favorites built around your guest count.",
          "Our team arranges everything on elegant presentation trays, ready to serve, with optional add-ons so the spread matches your headcount. Unlike mobile backyard chefs, Jinbeh delivers restaurant-quality food from our Frisco and Lewisville kitchens, where the live hibachi show is at its best for an in-restaurant rehearsal dinner. Reach out early and we will plan the menu together."
      ],
      "faqs": [
          {
              "q": "Does Jinbeh cater weddings?",
              "a": "Yes. We cater wedding receptions, rehearsal dinners, and showers across DFW with sushi platters and hibachi favorites, scaled to your guest count and served on presentation trays."
          },
          {
              "q": "Can we host a rehearsal dinner at Jinbeh?",
              "a": "We would love to host you. Our Frisco and Lewisville dining rooms offer the full tableside hibachi show, a fun and interactive option for a rehearsal dinner. Ask about group seating and reservations."
          },
          {
              "q": "How early should we book wedding catering?",
              "a": "Weddings book quickly, so reach out as far ahead as possible. For larger catering orders we need at least one week of notice, though more lead time helps us tailor your menu."
          }
      ]
  },
  "/frisco/legacy": {
      "heading": "A Japanese Restaurant Near Legacy West",
      "paragraphs": [
          "If you live or work near Legacy West and Plano and search for a japanese restaurant near Legacy West, hibachi near Legacy, or sushi near Legacy, Jinbeh Frisco is a short drive north. We have served DFW since 1988 as North Texas's longest-running family-owned Japanese restaurant, just minutes from Stonebriar Centre and The Star with easy directions.",
          "Jinbeh pairs a fresh sushi bar with the tableside teppanyaki show, where kids love the flames and the chef's tricks and little ones get training chopsticks. Reservations and current hours are easy to find online, and to-go and online ordering make weeknights simple. Book ahead for the best hibachi near you and bring the whole family."
      ],
      "faqs": [
          {
              "q": "How far is Jinbeh from Legacy West?",
              "a": "Jinbeh Frisco is a short drive north of Legacy West and Plano, near Stonebriar Centre and The Star. It is an easy trip for hibachi or sushi, and reservations are recommended on weekends."
          },
          {
              "q": "Is Jinbeh good for families near Legacy?",
              "a": "Yes. The tableside hibachi show is a hit with kids, who love the flames and the onion volcano, and we offer training chopsticks. It is a favorite family outing for the Frisco and Plano area."
          },
          {
              "q": "Can I order Jinbeh to go near Legacy?",
              "a": "Yes. Easy online ordering makes to-go and delivery simple when you want Jinbeh at home. For the full hibachi show, book a table at our Frisco location."
          }
      ]
  },
  "/frisco/starwood": {
      "heading": "Hibachi and Sushi Near Starwood in Frisco",
      "paragraphs": [
          "For Starwood neighbors searching for a japanese restaurant in Starwood Frisco, hibachi near Starwood, or sushi near Starwood, Jinbeh Frisco is just minutes away on Preston Road. We have served North Texas since 1988 as the area's longest-running family-owned Japanese restaurant, an easy drive from Stonebriar Centre and The Star with simple directions.",
          "Settle in for tableside teppanyaki, where the chef sears, flips, and lights the grill while kids cheer the flames and try their training chopsticks. Our sushi bar rolls fresh classics and signature specialties daily. Reservations and current hours are easy to find online, and to-go plus online ordering make a Starwood weeknight easy."
      ],
      "faqs": [
          {
              "q": "What is the closest Japanese restaurant to Starwood?",
              "a": "Jinbeh Frisco on Preston Road is just minutes from the Starwood neighborhood, near Stonebriar Centre. It is a convenient choice for hibachi and sushi, and reservations are recommended on weekends."
          },
          {
              "q": "Is Jinbeh near Starwood kid-friendly?",
              "a": "Very. The hibachi chef's tableside show, with flames and the onion volcano, delights children, and we offer training chopsticks. Families from Starwood and across Frisco make it a regular outing."
          },
          {
              "q": "Can I get Jinbeh to go in the Starwood area?",
              "a": "Yes. Easy online ordering makes to-go and delivery simple. When you want the full tableside show, book a hibachi table at our Frisco location."
          }
      ]
  },
  "/frisco/stonebriar": {
      "heading": "A Japanese Restaurant Minutes From Stonebriar Mall",
      "paragraphs": [
          "Shopping at Stonebriar Centre and searching for a japanese restaurant near Stonebriar, hibachi near Stonebriar, or sushi near Stonebriar? Jinbeh Frisco is just minutes from the mall on Preston Road. Family-owned and serving DFW since 1988, we are an easy stop before or after shopping, with simple directions and reservations you can book online.",
          "Watch the chef cook tableside on the teppanyaki grill, where the flames and onion volcano keep kids entertained and training chopsticks keep them happy. Our sushi bar hand-rolls fresh classics and specialty rolls daily. Current hours are easy to find, and online ordering makes to-go simple when you would rather take the best hibachi near you home."
      ],
      "faqs": [
          {
              "q": "How close is Jinbeh to Stonebriar Centre?",
              "a": "Jinbeh Frisco is just minutes from Stonebriar Centre on Preston Road, near The Star as well. It is a convenient choice for a shopping-day lunch or dinner, and reservations are recommended on weekends."
          },
          {
              "q": "Is Jinbeh near Stonebriar good for kids?",
              "a": "Yes. The tableside hibachi show is a favorite with children, who love the flames, and we offer training chopsticks, making it a great family stop near the mall."
          },
          {
              "q": "Can I order takeout near Stonebriar?",
              "a": "Yes. Easy online ordering makes to-go and delivery simple from our Frisco location near Stonebriar. For the full show, reserve a hibachi table."
          }
      ]
  },
  "/frisco/world-cup": {
      "heading": "Where to Watch the World Cup in Frisco",
      "paragraphs": [
          "Looking for where to watch the World Cup in Frisco? Jinbeh Frisco sits about three miles from the tournament base camp, a fun spot to gather for matches over hibachi and sushi. Serving DFW since 1988 as North Texas's longest-running family-owned Japanese restaurant, we are minutes from Stonebriar Centre and The Star with easy directions.",
          "Plan match-day around the tableside teppanyaki show, where kids love the flames and the onion volcano, with training chopsticks on hand. Make a reservation so your group has a table when the whistle blows, and check current hours online. Prefer to celebrate at home? Easy online ordering makes to-go and delivery simple."
      ],
      "faqs": [
          {
              "q": "Where can I watch World Cup matches in Frisco?",
              "a": "Jinbeh Frisco is a great gathering spot about three miles from the tournament base camp. Reserve a table for your group, enjoy hibachi and sushi, and check our current hours online before match day."
          },
          {
              "q": "Should I make a reservation for a World Cup match?",
              "a": "Yes. Match days draw crowds, so booking ahead helps your group sit together. Reservations and hours are easy to find online for our Frisco location."
          },
          {
              "q": "Is Jinbeh Frisco good for families during the World Cup?",
              "a": "Definitely. The tableside hibachi show entertains kids with flames and tricks, and we offer training chopsticks, making it an easy family outing between matches."
          }
      ]
  },
  "/lewisville/castle-hills": {
      "heading": "A Japanese Restaurant Near Castle Hills",
      "paragraphs": [
          "For Castle Hills families searching for a japanese restaurant in Castle Hills Lewisville, hibachi near Castle Hills, or sushi near Castle Hills, Jinbeh Lewisville is a short, easy drive. Family-owned and serving North Texas since 1988, we are a longtime favorite for hibachi and fresh sushi, minutes from Vista Ridge Mall with simple directions.",
          "Gather around the teppanyaki grill for the tableside show, where the chef's flames and onion volcano thrill kids and training chopsticks make the meal easy for little hands. Our sushi bar rolls fresh daily. Reservations and current hours are easy to find online, and online ordering makes to-go and delivery a breeze on busy nights."
      ],
      "faqs": [
          {
              "q": "What Japanese restaurant is near Castle Hills?",
              "a": "Jinbeh Lewisville is a short drive from Castle Hills, near Vista Ridge Mall. It is a longtime local favorite for hibachi and sushi, and reservations are recommended on weekends."
          },
          {
              "q": "Is Jinbeh near Castle Hills family-friendly?",
              "a": "Yes. The tableside hibachi show, with flames and the onion volcano, is a hit with kids, and we offer training chopsticks. Castle Hills families make it a regular outing."
          },
          {
              "q": "Can I order Jinbeh to go near Castle Hills?",
              "a": "Yes. Easy online ordering makes to-go and delivery simple from our Lewisville location. For the full tableside show, book a hibachi table."
          }
      ]
  },
  "/lewisville/vista-ridge": {
      "heading": "Hibachi and Sushi Near Vista Ridge Mall",
      "paragraphs": [
          "Searching for a japanese restaurant near Vista Ridge Mall, hibachi near Vista Ridge, or sushi near Vista Ridge? Jinbeh Lewisville is right in the neighborhood. We have served North Texas since 1988 as a family-owned original, an easy stop before or after shopping, with simple directions and reservations you can book online.",
          "Pull up to the teppanyaki grill for a tableside show the whole family enjoys, where kids love the flames and the chef's tricks and training chopsticks keep them comfortable. The sushi bar hand-rolls fresh classics and specialties daily. Current hours are easy to find, and online ordering makes to-go and delivery simple any night."
      ],
      "faqs": [
          {
              "q": "How close is Jinbeh to Vista Ridge Mall?",
              "a": "Jinbeh Lewisville is just minutes from Vista Ridge Mall, an easy choice for a shopping-day meal. Reservations are recommended on weekends, and hours are easy to find online."
          },
          {
              "q": "Is Jinbeh near Vista Ridge good for kids?",
              "a": "Yes. The tableside hibachi show delights children with flames and the onion volcano, and we offer training chopsticks, making it a favorite family stop near the mall."
          },
          {
              "q": "Can I get takeout near Vista Ridge Mall?",
              "a": "Yes. Easy online ordering makes to-go and delivery simple from our Lewisville location. For the full hibachi show, reserve a table."
          }
      ]
  },
  "/lewisville/world-cup": {
      "heading": "Where to Watch the World Cup in Lewisville",
      "paragraphs": [
          "Wondering where to watch the World Cup in Lewisville? Jinbeh Lewisville is a lively spot to gather for matches over hibachi and sushi. Serving North Texas since 1988 as a family-owned original, we are minutes from Vista Ridge Mall with easy directions, a comfortable home base between kickoffs for fans across the area.",
          "Build match-day around the tableside teppanyaki show, where kids love the flames and the onion volcano, with training chopsticks at the ready. Reserve a table so your group has seats when the whistle blows, and check current hours online. Want to host at home? Easy online ordering makes to-go and delivery simple."
      ],
      "faqs": [
          {
              "q": "Where can I watch the World Cup in Lewisville?",
              "a": "Jinbeh Lewisville is a fun gathering spot near Vista Ridge Mall. Reserve a table for your group, enjoy hibachi and sushi, and check our current hours online before match day."
          },
          {
              "q": "Do I need a reservation on match days?",
              "a": "Booking ahead is wise, since match days draw crowds and hibachi tables seat groups together. Reservations and hours are easy to find online for our Lewisville location."
          },
          {
              "q": "Is Jinbeh Lewisville family-friendly during the tournament?",
              "a": "Yes. The tableside hibachi show entertains kids with flames and tricks, and we offer training chopsticks, an easy family outing between World Cup matches."
          }
      ]
  },
  "/frisco/appetizers": {
      "heading": "Japanese Appetizers in Frisco",
      "paragraphs": [
          "Start your meal right with Japanese appetizers in Frisco at Jinbeh. If you are searching for sushi appetizers or gyoza near me, our starters set the tone, from pan-seared gyoza and crispy tempura to edamame and fresh sushi-bar bites. Serving North Texas since 1988, we make appetizers worth lingering over before the hibachi show.",
          "Appetizers are also a great way to sample the sushi bar before dinner. Pair tempura or gyoza with a roll, or share a few plates at the bar during happy hour. Whether you are warming up for teppanyaki or building a lighter meal, Jinbeh Frisco offers starters the whole table can enjoy together."
      ],
      "faqs": [
          {
              "q": "What appetizers does Jinbeh Frisco serve?",
              "a": "Our appetizer menu includes gyoza, tempura, edamame, and sushi-bar bites, plus seasonal favorites. They are an easy way to begin a hibachi dinner or share at the bar."
          },
          {
              "q": "Does Jinbeh have gyoza?",
              "a": "Yes. Our gyoza are a guest favorite, pan-seared and served hot. They pair well with a roll from the sushi bar or a drink during happy hour."
          },
          {
              "q": "Can appetizers be shared at the table?",
              "a": "Absolutely. Appetizers like tempura, edamame, and gyoza are made for sharing, a perfect start while your hibachi chef heats the grill."
          }
      ]
  },
  "/frisco/cocktails": {
      "heading": "Cocktails and Sake at Jinbeh Frisco",
      "paragraphs": [
          "For cocktails and sake in Frisco, Jinbeh's bar is a warm place to gather. Searching for sake near me, a sake set, or Japanese cocktails? Our list spans warm and chilled sake, premium pours like Dassai, and Japanese whiskey including Yamazaki and Hibiki, alongside classic and Japanese-inspired cocktails crafted to pair with sushi.",
          "Try a sake flight to explore styles side by side, or settle in for sushi happy hour Monday through Friday from 5:00 to 6:30 PM, with 4 dollar Japanese draft beer, 5 dollar small hot sake, and 6 dollar wine by the glass. Serving North Texas since 1988, our bar pairs an inviting room with drinks worth savoring."
      ],
      "faqs": [
          {
              "q": "What sake does Jinbeh Frisco offer?",
              "a": "Our list ranges from warm house sake to premium bottles like Dassai, plus sake sets and flights so you can compare styles. Ask your server for a recommendation to pair with your meal."
          },
          {
              "q": "Does Jinbeh have Japanese whiskey?",
              "a": "Yes. Our bar pours Japanese whiskey including Yamazaki and Hibiki, along with cocktails and sake. It is a favorite for whiskey fans across Frisco."
          },
          {
              "q": "When is happy hour at Jinbeh Frisco?",
              "a": "Happy hour runs Monday through Friday from 5:00 to 6:30 PM, with 4 dollar Japanese draft beer, 5 dollar small hot sake, and 6 dollar wine by the glass."
          }
      ]
  },
  "/frisco/hibachi": {
      "heading": "Hibachi in Frisco, Cooked Tableside Since 1988",
      "paragraphs": [
          "For hibachi in Frisco, Jinbeh has been the local original since 1988. If you are searching for hibachi near me, teppanyaki near me, or a japanese steakhouse in Frisco, our chefs cook your dinner tableside on a blazing grill, searing premium cuts like filet mignon, New York strip, Black Angus ribeye, chateaubriand, and twin lobster tails.",
          "Hibachi at Jinbeh is dinner and a show in one. The onion volcano, the flying shrimp, and the crackling grill make it a favorite for birthdays and family nights, and kids get a front-row seat to the flames. Reserve a table on Preston Road near Stonebriar and compare the show, the cuts, and the welcome for yourself."
      ],
      "faqs": [
          {
              "q": "What hibachi options does Jinbeh Frisco have?",
              "a": "Choose from premium cuts like filet mignon, New York strip, Black Angus ribeye, and chateaubriand, plus twin lobster tails, scallops, shrimp, chicken, and salmon, all cooked tableside on the teppanyaki grill."
          },
          {
              "q": "What is the difference between hibachi and teppanyaki?",
              "a": "At Jinbeh, the tableside grilling guests know as hibachi is technically teppanyaki, cooked on a flat iron grill while the chef performs. The result is the same fun, interactive dinner and a show."
          },
          {
              "q": "Is hibachi at Jinbeh good for kids?",
              "a": "Yes. Children love the flames, the onion volcano, and the chef's tricks, and we offer training chopsticks. Hibachi is a favorite for family celebrations in Frisco."
          }
      ]
  },
  "/frisco/kids-menu": {
      "heading": "A Kids Menu Frisco Families Love",
      "paragraphs": [
          "Searching for a kids menu in Frisco, kid-friendly restaurants in Frisco, or hibachi for kids? Jinbeh is built for families. Our children's hibachi dinners come with the chef's tableside show, where the flames and onion volcano turn dinner into entertainment, and we offer training chopsticks so even the youngest guests can join in.",
          "Beyond the show, parents appreciate that our fish is delivered regularly and cut to order, so kids' sushi and hibachi plates are fresh. When a night out is not in the cards, easy online ordering makes to-go and delivery simple. Jinbeh has welcomed North Texas families since 1988, and we love watching new ones grow up here."
      ],
      "faqs": [
          {
              "q": "Does Jinbeh Frisco have a kids menu?",
              "a": "Yes. Our children's hibachi dinners are sized for younger appetites and include the tableside show. We also offer training chopsticks to make the meal fun and easy for kids."
          },
          {
              "q": "Is Jinbeh a good family restaurant in Frisco?",
              "a": "Very. The interactive hibachi show keeps children entertained, and the menu has something for every age. Families have made Jinbeh a Frisco tradition since 1988."
          },
          {
              "q": "Can I order kids' meals to go?",
              "a": "Yes. Easy online ordering makes to-go and delivery simple for family dinners at home. For the full tableside show, book a hibachi table."
          }
      ]
  },
  "/frisco/menu": {
      "heading": "The Jinbeh Frisco Menu: Hibachi, Sushi, and More",
      "paragraphs": [
          "Browse the Jinbeh Frisco menu for hibachi, sushi, and Japanese favorites near Stonebriar. Whether you want a hibachi menu, a sushi menu in Frisco, or a full japanese steakhouse menu, our kitchen and sushi bar cover it all, from tableside teppanyaki with premium cuts to fresh rolls, nigiri, and sashimi made daily.",
          "Freshness is the foundation. Our fish is delivered regularly and cut to order by chefs who take pride in their craft. Serving North Texas since 1988, Jinbeh Frisco makes it easy to dine in for the show or use online ordering for to-go and delivery when you want hibachi and sushi at home."
      ],
      "faqs": [
          {
              "q": "What is on the Jinbeh Frisco menu?",
              "a": "The menu features tableside hibachi with premium cuts, a full sushi bar with rolls, nigiri, and sashimi, plus appetizers, soups, and salads. There is something for every taste and age."
          },
          {
              "q": "Can I order from the Frisco menu online?",
              "a": "Yes. Easy online ordering makes to-go and delivery simple. For the tableside teppanyaki show, reserve a hibachi table at our Frisco location."
          },
          {
              "q": "How fresh is the sushi at Jinbeh Frisco?",
              "a": "Our fish is delivered regularly and cut to order by experienced sushi chefs, so every roll and slice is fresh. Ask your chef for the day's best selections."
          }
      ]
  },
  "/frisco/specials": {
      "heading": "Specials and Deals at Jinbeh Frisco",
      "paragraphs": [
          "Looking for Frisco specials, lunch specials in Frisco, or a hibachi lunch deal? Jinbeh keeps it easy. Our Hibachi for Two lunch is 35 dollars for two hibachi entrees, Monday through Friday, a favorite for a quick midday treat with the tableside grill, and one of the best lunch values near Stonebriar.",
          "Pair lunch with sushi happy hour, Monday through Friday from 5:00 to 6:30 PM, featuring 4 dollar Japanese draft beer, 5 dollar small hot sake, and 6 dollar wine by the glass. Serving North Texas since 1988, Jinbeh Frisco makes weekday lunch and after-work drinks an easy, affordable outing."
      ],
      "faqs": [
          {
              "q": "What is the Hibachi for Two lunch special?",
              "a": "It is 35 dollars for two hibachi entrees, available Monday through Friday at lunch. The tableside show is included, making it a fun, affordable midday meal in Frisco."
          },
          {
              "q": "Does Jinbeh Frisco have happy hour?",
              "a": "Yes. Happy hour runs Monday through Friday from 5:00 to 6:30 PM, with 4 dollar Japanese draft beer, 5 dollar small hot sake, and 6 dollar wine by the glass."
          },
          {
              "q": "When are lunch specials available?",
              "a": "Lunch specials, including Hibachi for Two, run Monday through Friday. Reservations are recommended for larger midday groups at our Frisco location."
          }
      ]
  },
  "/frisco/sushi-rolls": {
      "heading": "Sushi Rolls in Frisco, Hand-Rolled Fresh",
      "paragraphs": [
          "For sushi rolls in Frisco, Jinbeh's sushi bar pairs fresh fish with traditional skill. Searching for the best sushi near me, fancy sushi, or a sushi platter near me? Our fish is delivered regularly and cut to order, and our rolls range from a classic California roll to colorful signature specialties worth a special trip.",
          "Much of that craft traces to our longtime head sushi chef, Fuji-san, with Jinbeh since 1993. His traditional Japanese training shows in clean flavor and precise cutting, and the original Jinbeh Special Roll was his signature. His story is featured in our Jinbeh sushi chef profile. Serving Frisco since 1988, our sushi bar is built on real technique."
      ],
      "faqs": [
          {
              "q": "Where can I find the best sushi rolls in Frisco?",
              "a": "Jinbeh's Frisco sushi bar hand-rolls everything from California rolls to signature specialties, using fish delivered regularly and cut to order. Ask your chef which selections are freshest that day."
          },
          {
              "q": "Who is the head sushi chef at Jinbeh?",
              "a": "Fuji-san has led the Jinbeh sushi bar since 1993. His traditional Japanese training brings clean flavor and precise cutting, and the original Jinbeh Special Roll was his signature."
          },
          {
              "q": "Does Jinbeh make sushi platters?",
              "a": "Yes. Our sushi platters feature an assortment of rolls and nigiri, a favorite for sharing at the table or taking to a party in the Frisco area."
          }
      ]
  },
  "/happy-hour/specials": {
      "heading": "Happy Hour Specials at Jinbeh",
      "paragraphs": [
          "Jinbeh's happy hour is an easy way to unwind. Searching for sushi happy hour near me, happy hour for sushi, or the best happy hour in Frisco? Join us Monday through Friday from 5:00 to 6:30 PM for 4 dollar Japanese draft beer, 5 dollar small hot sake served in a tokkuri, and 6 dollar wine by the glass.",
          "Pull up to the bar at our Frisco or Lewisville location for a sake flight, a Japanese cocktail, or a cold draft alongside fresh rolls from the sushi bar. As a favorite sake bar in DFW, Jinbeh makes it simple to gather after work. Reservations and current hours are easy to find online when you want to plan ahead."
      ],
      "faqs": [
          {
              "q": "What are Jinbeh's happy hour specials?",
              "a": "Happy hour features 4 dollar Japanese draft beer, 5 dollar small hot sake, and 6 dollar wine by the glass, Monday through Friday from 5:00 to 6:30 PM at both locations."
          },
          {
              "q": "Is Jinbeh a good sake bar in DFW?",
              "a": "Yes. Our bar pours warm and chilled sake, sake flights, Japanese whiskey, and cocktails, making Jinbeh a favorite sake bar for the Frisco and Lewisville area."
          },
          {
              "q": "Do I need a reservation for happy hour?",
              "a": "Walk-ins are welcome at the bar, but reservations are easy to book online and helpful for groups. Current hours are posted online too."
          }
      ]
  },
  "/lewisville/appetizers": {
      "heading": "Japanese Appetizers in Lewisville",
      "paragraphs": [
          "Begin your meal with Japanese appetizers in Lewisville at Jinbeh. If you are searching for sushi appetizers or gyoza near me, our starters deliver, from pan-seared gyoza and crispy tempura to edamame and fresh sushi-bar bites. A North Texas original since 1988, Jinbeh makes appetizers worth savoring before the tableside hibachi show.",
          "Starters are also a relaxed way to explore the sushi bar before dinner. Share tempura and gyoza with the table, or pair a few small plates with a drink during happy hour. Whether you are warming up for teppanyaki or keeping it light, Jinbeh Lewisville has appetizers everyone can enjoy."
      ],
      "faqs": [
          {
              "q": "What appetizers does Jinbeh Lewisville serve?",
              "a": "Our starters include gyoza, tempura, edamame, and sushi-bar bites, plus seasonal favorites. They are a great way to begin a hibachi dinner or share at the bar."
          },
          {
              "q": "Does Jinbeh Lewisville have gyoza?",
              "a": "Yes. Our pan-seared gyoza are a guest favorite, served hot. They pair nicely with a roll from the sushi bar or a happy hour drink."
          },
          {
              "q": "Are appetizers good for sharing?",
              "a": "Absolutely. Tempura, edamame, and gyoza are made for the table, a perfect start while your hibachi chef heats the grill."
          }
      ]
  },
  "/lewisville/cocktails": {
      "heading": "Cocktails and Sake at Jinbeh Lewisville",
      "paragraphs": [
          "For cocktails and sake in Lewisville, the Jinbeh bar is a welcoming spot. Searching for sake near me, a sake set, or Japanese cocktails? Our list features warm and chilled sake, premium pours like Dassai, and Japanese whiskey including Yamazaki and Hibiki, alongside classic and Japanese-inspired cocktails made to pair with fresh sushi.",
          "Order a sake flight to taste styles side by side, or join sushi happy hour Monday through Friday from 5:00 to 6:30 PM, with 4 dollar Japanese draft beer, 5 dollar small hot sake, and 6 dollar wine by the glass. A North Texas original since 1988, Jinbeh Lewisville pairs a warm room with drinks worth lingering over."
      ],
      "faqs": [
          {
              "q": "What sake does Jinbeh Lewisville offer?",
              "a": "From warm house sake to premium bottles like Dassai, plus sake sets and flights, our list has something for every taste. Ask your server to recommend a pairing."
          },
          {
              "q": "Does Jinbeh Lewisville have Japanese whiskey?",
              "a": "Yes. Our bar pours Japanese whiskey including Yamazaki and Hibiki, along with sake and cocktails, a favorite for whiskey fans in Lewisville."
          },
          {
              "q": "When is happy hour at Jinbeh Lewisville?",
              "a": "Happy hour runs Monday through Friday from 5:00 to 6:30 PM, with 4 dollar Japanese draft beer, 5 dollar small hot sake, and 6 dollar wine by the glass."
          }
      ]
  },
  "/lewisville/hibachi": {
      "heading": "Hibachi in Lewisville, the Local Number One",
      "paragraphs": [
          "For hibachi in Lewisville, Jinbeh is the name locals rank first, a top pick for hibachi on Yelp and OpenTable. Searching for hibachi near me, teppanyaki near me, or a japanese steakhouse in Lewisville? Our chefs cook tableside, searing premium cuts like filet mignon, New York strip, Black Angus ribeye, chateaubriand, and twin lobster tails.",
          "Every hibachi dinner is a show, with the onion volcano, flying shrimp, and a grill that crackles to life. It is a favorite for birthdays, date nights, and family gatherings, and kids get a front-row seat to the flames. A North Texas original since 1988, Jinbeh Lewisville has earned its top spot one dinner at a time."
      ],
      "faqs": [
          {
              "q": "Is Jinbeh the best hibachi in Lewisville?",
              "a": "Jinbeh is rated number one for hibachi by local diners on Yelp and OpenTable. We have cooked tableside in Lewisville since 1988 and work every shift to keep that reputation."
          },
          {
              "q": "What hibachi cuts does Jinbeh Lewisville serve?",
              "a": "Choose from premium cuts like filet mignon, New York strip, Black Angus ribeye, and chateaubriand, plus twin lobster tails, scallops, shrimp, chicken, and salmon, all grilled tableside."
          },
          {
              "q": "Is hibachi at Jinbeh Lewisville kid-friendly?",
              "a": "Yes. Children love the flames, the onion volcano, and the chef's tricks, and we offer training chopsticks, making hibachi a favorite for family celebrations."
          }
      ]
  },
  "/lewisville/kids-menu": {
      "heading": "A Kids Menu Lewisville Families Love",
      "paragraphs": [
          "Searching for a kids menu in Lewisville, kid-friendly restaurants in Lewisville, or hibachi for kids? Jinbeh is made for families. Our children's hibachi dinners come with the chef's tableside show, where the flames and onion volcano turn dinner into entertainment, and we offer training chopsticks so little ones can join in.",
          "Parents also appreciate that our fish is delivered regularly and cut to order, so kids' sushi and hibachi plates are always fresh. When staying in sounds better, easy online ordering makes to-go and delivery simple. Jinbeh has welcomed North Texas families since 1988, and we love seeing them return year after year."
      ],
      "faqs": [
          {
              "q": "Does Jinbeh Lewisville have a kids menu?",
              "a": "Yes. Our children's hibachi dinners are sized for younger appetites and include the tableside show, with training chopsticks to make the meal fun and easy."
          },
          {
              "q": "Is Jinbeh a good family restaurant in Lewisville?",
              "a": "Very. The interactive hibachi show entertains children, and there is something for every age. Families have made Jinbeh a Lewisville tradition since 1988."
          },
          {
              "q": "Can I order kids' meals to go in Lewisville?",
              "a": "Yes. Easy online ordering makes to-go and delivery simple for family dinners at home. For the full tableside show, reserve a hibachi table."
          }
      ]
  },
  "/lewisville/menu": {
      "heading": "The Jinbeh Lewisville Menu: Hibachi, Sushi, and More",
      "paragraphs": [
          "Explore the Jinbeh Lewisville menu for hibachi, sushi, and Japanese favorites near Vista Ridge Mall. Whether you want a hibachi menu, a sushi menu in Lewisville, or a full japanese steakhouse menu, our kitchen and sushi bar deliver, from tableside teppanyaki with premium cuts to fresh rolls, nigiri, and sashimi made daily.",
          "Freshness comes first. Our fish is delivered regularly and cut to order by chefs who take pride in their craft. A North Texas original since 1988, Jinbeh Lewisville makes it easy to dine in for the show or use online ordering for to-go and delivery when you want hibachi and sushi at home."
      ],
      "faqs": [
          {
              "q": "What is on the Jinbeh Lewisville menu?",
              "a": "The menu features tableside hibachi with premium cuts, a full sushi bar with rolls, nigiri, and sashimi, plus appetizers, soups, and salads, with options for every taste and age."
          },
          {
              "q": "Can I order from the Lewisville menu online?",
              "a": "Yes. Easy online ordering makes to-go and delivery simple. For the tableside teppanyaki show, reserve a hibachi table at our Lewisville location."
          },
          {
              "q": "How fresh is the sushi at Jinbeh Lewisville?",
              "a": "Our fish is delivered regularly and cut to order by experienced sushi chefs, so every roll and slice is fresh. Ask your chef for the day's best picks."
          }
      ]
  },
  "/lewisville/specials": {
      "heading": "Specials and Deals at Jinbeh Lewisville",
      "paragraphs": [
          "Looking for Lewisville specials, lunch specials in Lewisville, or a hibachi lunch deal? Jinbeh makes it easy. Our Hibachi for Two lunch is 35 dollars for two hibachi entrees, Monday through Friday, a favorite for a quick midday treat with the tableside grill, and one of the better lunch values near Vista Ridge Mall.",
          "Pair lunch with sushi happy hour, Monday through Friday from 5:00 to 6:30 PM, featuring 4 dollar Japanese draft beer, 5 dollar small hot sake, and 6 dollar wine by the glass. A North Texas original since 1988, Jinbeh Lewisville makes weekday lunch and after-work drinks an easy, affordable outing."
      ],
      "faqs": [
          {
              "q": "What is the Hibachi for Two lunch special?",
              "a": "It is 35 dollars for two hibachi entrees, available Monday through Friday at lunch, tableside show included. It is a fun, affordable midday meal in Lewisville."
          },
          {
              "q": "Does Jinbeh Lewisville have happy hour?",
              "a": "Yes. Happy hour runs Monday through Friday from 5:00 to 6:30 PM, with 4 dollar Japanese draft beer, 5 dollar small hot sake, and 6 dollar wine by the glass."
          },
          {
              "q": "When are lunch specials available?",
              "a": "Lunch specials, including Hibachi for Two, run Monday through Friday. Reservations are recommended for larger midday groups at our Lewisville location."
          }
      ]
  },
  "/lewisville/sushi-rolls": {
      "heading": "Sushi Rolls in Lewisville, Made With Care",
      "paragraphs": [
          "For sushi rolls in Lewisville, Jinbeh's sushi bar combines fresh fish with traditional craft. Searching for the best sushi near me, fancy sushi, or a sushi platter near me? Our fish is delivered regularly and cut to order, and our rolls span the classic California roll to colorful signature specialties. Easy online ordering brings them home, too.",
          "That craft runs deep. Our longtime head sushi chef, Fuji-san, has led the bar since 1993, and his traditional Japanese training shows in clean flavor and precise cutting. The original Jinbeh Special Roll was his signature, and his story is featured in our Jinbeh sushi chef profile. A North Texas original since 1988, Jinbeh Lewisville builds every roll on real skill."
      ],
      "faqs": [
          {
              "q": "Where can I find good sushi rolls in Lewisville?",
              "a": "Jinbeh's Lewisville sushi bar hand-rolls California rolls, signature specialties, and more, using fish delivered regularly and cut to order. Ask your chef which selections are freshest."
          },
          {
              "q": "Who leads the Jinbeh sushi bar?",
              "a": "Fuji-san has led the sushi bar since 1993. His traditional Japanese training brings clean flavor and precise cutting, and the original Jinbeh Special Roll was his signature."
          },
          {
              "q": "Can I order sushi rolls to go in Lewisville?",
              "a": "Yes. Easy online ordering makes to-go and delivery simple. For a sushi platter to share at a party, ask about our assorted trays."
          }
      ]
  },
};

export default seoContent;
