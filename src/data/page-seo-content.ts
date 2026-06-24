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
  "/lewisville/vegetarian": {
    heading: "Vegetarian and Gluten-Free Japanese Dining in Lewisville",
    paragraphs: [
      "As a vegetarian Japanese restaurant in Lewisville, Jinbeh makes it easy to eat well. Our tofu hibachi is grilled tableside with seasonal vegetables, fried rice, and noodles, and the sushi bar rolls vegetarian sushi in Lewisville like avocado, cucumber, and sweet potato. Guests searching for vegetarian Japanese food in DFW find flavorful options that never feel like an afterthought.",
      "We clearly label gluten-free and vegetarian dishes, and our chefs are glad to accommodate celiac and allergy needs when you let your server know. From the teppanyaki grill to the sushi bar, Jinbeh has served North Texas families since 1988, and we welcome every diet to the table in Lewisville and Frisco.",
    ],
    faqs: [
      { q: "Does Jinbeh have vegetarian hibachi?", a: "Yes. Our tofu hibachi is cooked tableside with fresh vegetables, so you can build a meatless meal around grilled veggies, fried rice, and noodles. It is a favorite for vegetarians who still want the full hibachi show." },
      { q: "Is there gluten-free food at Jinbeh Lewisville?", a: "We label gluten-free options and our chefs can adapt many dishes, including salmon and tuna sashimi, for guests avoiding gluten. Please tell your server about celiac or allergy concerns so we can prepare your meal carefully." },
      { q: "Do you have vegetarian sushi in Lewisville?", a: "Yes. Our Lewisville sushi bar rolls vegetarian favorites like avocado, cucumber, and sweet potato, along with creative veggie specialty rolls made fresh to order." },
    ],
  },
  "/menu": {
    heading: "Explore the Jinbeh Menu: Hibachi, Sushi, and More",
    paragraphs: [
      "The Jinbeh menu brings together everything North Texas has loved since 1988. On the hibachi side of our Japanese steakhouse menu you will find premium cuts like filet mignon, New York strip, and Black Angus ribeye seared tableside, plus chicken, shrimp, scallops, and salmon. Browsing a hibachi near me menu, Frisco and Lewisville families know exactly what to expect.",
      "Our sushi menu in Frisco and Lewisville features nigiri, sashimi, and specialty rolls made from fish delivered regularly and cut to order by chefs who take pride in their craft. When you want Jinbeh at home, easy online ordering makes to-go and delivery simple. View our lunch, dinner, and sushi menus and plan your visit.",
    ],
    faqs: [
      { q: "What is on the Jinbeh menu?", a: "Jinbeh serves hibachi cooked tableside, a full sushi bar, appetizers, and a bar with sake and Japanese whiskey. Premium steak cuts, fresh seafood, and kid-friendly options make it a favorite for families and date nights alike." },
      { q: "Can I order Jinbeh to go?", a: "Yes. Easy online ordering lets you get hibachi and sushi to go or delivered, so you can enjoy Jinbeh at home in Frisco, Lewisville, and nearby cities." },
      { q: "How fresh is the sushi at Jinbeh?", a: "Our fish is delivered regularly and cut to order by our sushi chefs, who hand roll each piece. That commitment to freshness and craftsmanship has kept guests coming back since 1988." },
    ],
  },
  "/celebrations": {
    heading: "Celebrate Every Occasion at Jinbeh",
    paragraphs: [
      "From a birthday dinner in Frisco to anniversaries, graduations, and holidays, Jinbeh turns every celebration into a show. Our hibachi chefs cook tableside while flames leap and the whole table cheers, which is why we are one of the most loved celebration restaurants in Frisco and Lewisville. Searching for a birthday dinner near me usually leads families straight to us.",
      "We host groups of every size, with seating that brings everyone together around the grill and options for private dining in Frisco and Lewisville. Reservations are easy to make online, and our current hours are always a click away, so planning your celebration takes just a few minutes.",
    ],
    faqs: [
      { q: "What celebrations does Jinbeh host?", a: "We host birthdays, anniversaries, graduations, rehearsal dinners, holiday parties, corporate events, and more at both locations. The tableside hibachi show makes any occasion feel special." },
      { q: "Can Jinbeh accommodate large groups?", a: "Yes. Our hibachi tables seat parties together, and we regularly host large groups by coordinating seating. Reach out ahead of time and reserve so we can plan for your party." },
      { q: "How do I book a celebration at Jinbeh?", a: "Reservations are easy to make online for Frisco and Lewisville, and current hours are listed on each location page. For larger celebrations, booking ahead ensures the best seating." },
    ],
  },
  "/celebrations/anniversary": {
    heading: "An Anniversary Dinner With a Spark in Frisco and Lewisville",
    paragraphs: [
      "An anniversary dinner in Frisco does not have to mean a quiet steakhouse. At Jinbeh, your chef cooks at the table while you toast the years together, making us one of the more memorable romantic restaurants in Frisco for couples who like a little fun with their fine dining. Many guests searching for an anniversary dinner near me want exactly this.",
      "Pair fresh sushi or a premium hibachi steak with sake chosen for the occasion, and let the night unfold with sizzle and laughter. As a favorite among date night restaurants in Frisco and Lewisville, we make it easy to reserve online so your table is ready when you arrive.",
    ],
    faqs: [
      { q: "Is Jinbeh good for a romantic anniversary dinner?", a: "Yes. The tableside show, fresh sushi, premium steaks, and sake pairings make Jinbeh a fun and memorable choice for couples celebrating an anniversary in Frisco or Lewisville." },
      { q: "Should I make a reservation for an anniversary?", a: "We recommend reserving online, especially on weekends, so your table is ready and you can relax into the celebration without a wait." },
      { q: "What should we order for a special date night?", a: "Many couples pair a premium hibachi entree or fresh sushi with warm sake. Ask your chef or server for a pairing suggestion to make the evening feel extra special." },
    ],
  },
  "/celebrations/asian-restaurant-month": {
    heading: "Celebrate Asian Restaurant Month at Jinbeh",
    paragraphs: [
      "Each May, Asian Restaurant Month and AAPI Heritage Month invite North Texas to celebrate Asian-owned restaurants, and Jinbeh is proud to be among the longest-running family-owned Japanese restaurants in the area, serving Frisco and Lewisville since 1988. It is the perfect time to gather friends and discover, or rediscover, authentic teppanyaki and fresh sushi.",
      "As one of the most welcoming celebration restaurants in Frisco and Lewisville, we make it easy to bring everyone together, whether for a casual dinner near me or private dining in Frisco for a larger group. Reservations take just a moment online, and current hours are listed on each location page.",
    ],
    faqs: [
      { q: "What is Asian Restaurant Month?", a: "Asian Restaurant Month, which overlaps with AAPI Heritage Month in May, celebrates Asian-owned and Asian cuisine restaurants. Jinbeh has been a family-owned Japanese restaurant in North Texas since 1988." },
      { q: "Why dine at Jinbeh during AAPI Heritage Month?", a: "Jinbeh offers an authentic teppanyaki experience and a fresh sushi bar rooted in decades of family ownership. It is a meaningful and delicious way to celebrate the month with family and friends." },
      { q: "Can we bring a group to celebrate?", a: "Absolutely. We seat parties together around the hibachi grill and offer private dining options in Frisco and Lewisville. Reserve online and let us know your headcount." },
    ],
  },
  "/celebrations/baby-shower": {
    heading: "A Joyful Baby Shower Venue in Frisco and Lewisville",
    paragraphs: [
      "Looking for baby shower venues in Frisco that feel festive without the fuss? Jinbeh hosts showers around our hibachi tables, where the chef's tableside show keeps guests of all ages smiling and the food becomes part of the entertainment. It is a fresh take among celebration restaurants in Frisco and Lewisville.",
      "With private dining options in Frisco and seating that gathers everyone together, Jinbeh makes it simple to host the moms-to-be and their loved ones. No decorating, no cleanup, just good food and laughter. Reserve online in a few minutes and find current hours on each location page.",
    ],
    faqs: [
      { q: "Can Jinbeh host a baby shower?", a: "Yes. We welcome baby showers at both Frisco and Lewisville, seating your group together around the hibachi grill for an interactive, memorable celebration." },
      { q: "Is there a private space for a shower?", a: "We offer private dining options and can arrange seating for your group. Contact us ahead of time and reserve so we can plan the best setup for your party." },
      { q: "What makes Jinbeh a fun shower venue?", a: "The tableside hibachi show entertains guests of every age, the sushi bar offers fresh options for everyone, and there is no setup or cleanup for the host. It is celebration and dinner in one." },
    ],
  },
  "/celebrations/birthday": {
    heading: "The Best Birthday Dinner in Frisco and Lewisville",
    paragraphs: [
      "A birthday dinner in Frisco becomes an event at Jinbeh, where your hibachi chef makes the guest of honor the star of the show. The onion volcano erupts, the flames rise, and the whole table sings, making us a favorite among birthday celebration places near me. Families comparing a Benihana birthday find a warm, local original here.",
      "Kids love the tableside flames and the training chopsticks that make sushi fun to try, and our VIP Birthday Club adds a little something extra to your celebration. For a hibachi birthday party at either location, reserve online in minutes and find current hours on each location page.",
    ],
    faqs: [
      { q: "What makes Jinbeh great for a birthday?", a: "The tableside hibachi show puts the birthday guest front and center with flames, flying shrimp, and a song. It is interactive, memorable, and fun for both kids and adults in Frisco and Lewisville." },
      { q: "Is Jinbeh good for a kids birthday party?", a: "Yes. Children love the flames and the chef's tricks, and training chopsticks make sushi approachable for little hands. Our children's hibachi dinners are made with younger guests in mind." },
      { q: "Is there a birthday perk at Jinbeh?", a: "Join our VIP Birthday Club for a special touch on your celebration. Reserve your hibachi table online ahead of time, especially on weekends, so your party is seated together." },
    ],
  },
  "/celebrations/christmas": {
    heading: "Christmas Dinner in Frisco and Lewisville, No Cooking Required",
    paragraphs: [
      "Skip the kitchen this year and gather around the hibachi grill instead. Jinbeh is open on Christmas Day at both Frisco and Lewisville, serving a festive Christmas dinner near me that feels like a celebration from the first sizzle. Let the chef do the cooking while your family enjoys the show.",
      "Prefer to celebrate at home? Our convenient to-go family meals let you bring hibachi and fresh sushi to your table, a welcome option when you are searching for a restaurant open on the holidays. Reserve online for dine-in, check current holiday hours on each location page, and leave the cooking and cleanup to us.",
    ],
    faqs: [
      { q: "Is Jinbeh open on Christmas?", a: "Yes. Both our Frisco and Lewisville locations are open on Christmas Day. Holiday hours are listed on each location page, and we recommend reserving ahead since the day is popular." },
      { q: "Can I get a holiday meal to go?", a: "Yes. Our to-go family meals make it easy to enjoy hibachi and sushi at home for Christmas or any holiday gathering, with no cooking or cleanup." },
      { q: "Should I reserve for Christmas dinner?", a: "We strongly recommend reserving online for Christmas and other holidays, as tables fill quickly. Booking ahead ensures your family is seated together around the grill." },
    ],
  },
  "/celebrations/corporate-events": {
    heading: "Corporate Dinners and Team Events in Frisco and Lewisville",
    paragraphs: [
      "A corporate dinner in Frisco lands differently when your team shares a hibachi table and the chef puts on a show. Jinbeh is a standout among corporate event venues in DFW because the experience breaks the ice for you, turning a company dinner in Frisco into something colleagues actually talk about afterward.",
      "Each location comfortably hosts large groups, well over a hundred guests when seating is coordinated, with group menus that keep ordering simple. As one of the more memorable team building restaurants in the area, we make planning easy. Send your headcount and date through our inquiry options and reserve, with current hours on each location page.",
    ],
    faqs: [
      { q: "Can Jinbeh host a corporate event?", a: "Yes. We host corporate dinners, client entertaining, and team events at both Frisco and Lewisville, with seating that brings your group together and group menus to simplify ordering." },
      { q: "How many people can Jinbeh seat for a company event?", a: "By coordinating seating, each location comfortably hosts large groups, well over a hundred guests. Contact us with your headcount so we can plan the best arrangement." },
      { q: "Why is hibachi good for team building?", a: "The tableside show is interactive and fun, which naturally breaks the ice and gets coworkers talking and laughing together. It makes corporate dining feel like an experience rather than an obligation." },
    ],
  },
  "/celebrations/date-night": {
    heading: "A Date Night Restaurant in Frisco and Lewisville With a Show",
    paragraphs: [
      "When you want a date night restaurant in Frisco that is more memorable than a quiet table for two, Jinbeh delivers. Your chef cooks tableside with fire and flair, giving couples something to react to and talk about together. It is why we stand out among romantic restaurants in Frisco for a date with energy.",
      "Share fresh sushi, a premium hibachi steak, and sake poured for the occasion, then linger at the bar over a Japanese cocktail. Whether it is a casual evening or an anniversary dinner near me, reserving online keeps things easy at both Frisco and Lewisville.",
    ],
    faqs: [
      { q: "Is Jinbeh a good date night spot?", a: "Yes. The interactive tableside show, fresh sushi, premium steaks, and sake make Jinbeh a fun and romantic choice for couples in Frisco and Lewisville who want more than a standard dinner out." },
      { q: "Do you take reservations for date night?", a: "We do, and we recommend booking online, especially on weekends and around Valentine's Day, so your table is ready when you arrive." },
      { q: "What is a good date night order?", a: "Many couples share sushi to start, choose a premium hibachi entree, and add warm sake. Ask your server for a pairing that suits the evening." },
    ],
  },
  "/celebrations/dfw-moms": {
    heading: "Why DFW Moms Love Jinbeh",
    paragraphs: [
      "DFW moms know the hardest part of dining out with kids is keeping everyone happy, and that is exactly where Jinbeh shines. As a kid friendly Japanese restaurant in DFW, our tableside hibachi show holds little ones spellbound while the chef juggles, sizzles, and sends up flames. Dinner becomes entertainment for the whole family.",
      "Training chopsticks make sushi fun for small hands, the children's hibachi dinners are made with kids in mind, and parents get a meal they actually enjoy. Among family restaurants in Frisco and Lewisville, hibachi for kids is a guaranteed crowd-pleaser. Reserve online in minutes and find current hours on each location page.",
    ],
    faqs: [
      { q: "Is Jinbeh kid friendly?", a: "Very. The hibachi show captivates children with flames and tricks, training chopsticks make sushi approachable, and the children's hibachi dinners are designed for younger guests. It is a favorite for DFW families." },
      { q: "What can kids eat at Jinbeh?", a: "Children's hibachi dinners include kid-friendly proteins cooked tableside with rice and vegetables, and the sushi bar offers mild rolls. There is something for even picky eaters." },
      { q: "Do I need a reservation for a family dinner?", a: "Reservations are recommended, especially on weekends, so your family is seated together at a hibachi table. Booking online takes only a few minutes." },
    ],
  },
  "/celebrations/diwali": {
    heading: "Celebrate Diwali in Frisco and Lewisville",
    paragraphs: [
      "The Festival of Lights is all about gathering with loved ones, and a Diwali dinner in Frisco at Jinbeh brings that warmth to the table. Our hibachi chefs light up the grill with a tableside show that feels right at home during a celebration of light, making us a festive choice among celebration restaurants in Frisco and Lewisville.",
      "Bring the whole family or a larger group and let us seat everyone together, with private dining options in Frisco for bigger gatherings. Vegetarian hibachi and fresh sushi give every guest something to enjoy. Reserve online in a few minutes and find current hours on each location page.",
    ],
    faqs: [
      { q: "Can Jinbeh host a Diwali celebration?", a: "Yes. We welcome Diwali gatherings at both Frisco and Lewisville, seating groups together around the hibachi grill for a lively, light-filled celebration." },
      { q: "Are there vegetarian options for Diwali?", a: "Yes. Our tofu hibachi and vegetarian sushi rolls give vegetarian guests plenty of flavorful choices alongside the tableside show." },
      { q: "Can we reserve private dining for Diwali?", a: "We offer private dining options in Frisco and Lewisville and can arrange seating for larger groups. Reserve online and share your headcount so we can plan ahead." },
    ],
  },
  "/celebrations/family-gatherings": {
    heading: "A Family Restaurant in Frisco and Lewisville for Every Gathering",
    paragraphs: [
      "When the whole family comes together, you want a family restaurant in Frisco where every generation is happy. At Jinbeh, the hibachi grill becomes the center of the gathering, with the chef's tableside show delighting grandparents and grandkids alike. It is one of the most reliably fun family restaurants in Frisco and Lewisville.",
      "As a kid friendly Japanese restaurant in DFW, we make hibachi for kids easy, from children's dinners to training chopsticks that turn sushi into a game. Larger families are seated together around the grill. Reserve online in minutes, and current hours are listed on each location page.",
    ],
    faqs: [
      { q: "Is Jinbeh good for family gatherings?", a: "Yes. The tableside hibachi show entertains all ages, seating brings everyone together, and the menu spans kid-friendly dinners to premium steaks and fresh sushi. It suits multigenerational gatherings well." },
      { q: "Does Jinbeh welcome kids?", a: "Absolutely. Children love the flames and tricks, training chopsticks make sushi fun, and children's hibachi dinners are built for younger guests." },
      { q: "Can you seat a large family together?", a: "Yes. Our hibachi tables seat parties together, and we can coordinate seating for larger families. Reserve ahead so we can plan the best arrangement." },
    ],
  },
  "/celebrations/fathers-day": {
    heading: "Father's Day Dinner in Frisco and Lewisville",
    paragraphs: [
      "Treat Dad to a Father's Day dinner in Frisco that he will remember, with premium hibachi steaks seared tableside and a chef's show the whole family can enjoy together. From filet mignon to a sizzling surf and turf, Jinbeh turns a family dinner in Frisco into a celebration worthy of the day.",
      "Whether Dad loves a perfectly grilled ribeye or fresh sushi from the bar, there is something here for every father. As a go-to for both Father's Day and Mother's Day dinners near me, we make it easy to gather everyone. Reserve online ahead of time and find current hours on each location page.",
    ],
    faqs: [
      { q: "Is Jinbeh a good spot for Father's Day?", a: "Yes. Premium hibachi steaks, fresh sushi, and a fun tableside show make it a memorable Father's Day for the whole family in Frisco and Lewisville." },
      { q: "Should I reserve for Father's Day?", a: "Father's Day is a busy day, so we strongly recommend reserving online ahead of time to ensure your family is seated together." },
      { q: "What does Dad like to order at Jinbeh?", a: "Many dads choose a premium cut like filet mignon, New York strip, or ribeye, or a surf and turf combo. The sushi bar and sake selection round out the meal." },
    ],
  },
  "/celebrations/graduation": {
    heading: "Graduation Party Restaurants in Frisco and Lewisville",
    paragraphs: [
      "Mark the milestone with a celebration as big as the achievement. Among graduation party restaurants in Frisco, Jinbeh stands out because the hibachi show makes the whole table part of the fun, turning a graduation dinner into an event the grad and guests will remember. It is a natural fit when you are weighing graduation party venues near me.",
      "We seat families and friends together around the grill, and younger siblings love the flames and the training chopsticks at the sushi bar. From a small family dinner to a larger gathering, we make planning simple. Reserve online in a few minutes, with current hours listed on each location page.",
    ],
    faqs: [
      { q: "Can Jinbeh host a graduation party?", a: "Yes. We host graduation celebrations at both Frisco and Lewisville, seating your group together for an interactive hibachi dinner that doubles as entertainment." },
      { q: "Is it good for families with younger kids too?", a: "Definitely. The flames captivate kids, training chopsticks make sushi fun, and there are children's hibachi dinners, so the grad's younger siblings are happy too." },
      { q: "How do I plan a graduation dinner here?", a: "Reserve online and share your headcount, especially during the busy spring graduation season. Booking ahead ensures the best seating for your group." },
    ],
  },
  "/celebrations/holiday-parties": {
    heading: "Holiday Parties in Frisco and Lewisville",
    paragraphs: [
      "From office gatherings to family get-togethers, a holiday party in Frisco feels effortless when the chef cooks tableside and the show provides the entertainment. Jinbeh hosts groups of every size around the hibachi grill, making the season's celebrations festive without the stress of hosting at home.",
      "We stay open for the holidays with seasonal hours posted on each location page, and our to-go family meals make it easy to bring hibachi and sushi to a gathering elsewhere. Whether it is a Christmas dinner near me or a team holiday lunch, reserve online and let us handle the cooking and cleanup.",
    ],
    faqs: [
      { q: "Can Jinbeh host a holiday party?", a: "Yes. We host company and family holiday parties at both Frisco and Lewisville, seating groups together for an interactive hibachi celebration. Reserve ahead so we can plan for your party." },
      { q: "Are you open during the holidays?", a: "We stay open for many holidays, with seasonal hours listed on each location page. We recommend booking ahead since holiday dates fill quickly." },
      { q: "Can I get holiday food to go?", a: "Yes. Our to-go family meals let you bring hibachi and fresh sushi to a holiday gathering, with no cooking or cleanup required." },
    ],
  },
  "/celebrations/lunar-new-year": {
    heading: "Lunar New Year Dinner in Frisco and Lewisville",
    paragraphs: [
      "Ring in the new year with family around the hibachi grill. A Lunar New Year dinner in Frisco at Jinbeh brings everyone together for a tableside show full of fire and energy, a fitting way to welcome a fresh start. As one of the area's favorite celebration restaurants in Frisco and Lewisville, we make the occasion feel special.",
      "Gather a large group and we will seat you together, with private dining options in Frisco for bigger celebrations. Fresh sushi, premium hibachi, and warm sake give every guest something to toast. Reserve online in a few minutes and find current hours on each location page.",
    ],
    faqs: [
      { q: "Can Jinbeh host a Lunar New Year celebration?", a: "Yes. We welcome Lunar New Year gatherings at both locations, seating groups together around the hibachi grill for a lively, festive dinner." },
      { q: "Do you offer private dining for the new year?", a: "We offer private dining options in Frisco and Lewisville and can arrange seating for larger groups. Reserve online and let us know your headcount." },
      { q: "Is Jinbeh good for a big family celebration?", a: "Yes. Our hibachi tables seat families together, the show entertains every generation, and there are options for all tastes, from premium steaks to vegetarian hibachi and fresh sushi." },
    ],
  },
  "/celebrations/mid-autumn-festival": {
    heading: "Mid-Autumn Festival Dinner in Frisco and Lewisville",
    paragraphs: [
      "The Mid-Autumn Festival, also called the Moon Festival, is a time for families to gather and share a meal under the harvest moon. A Mid-Autumn Festival dinner in Frisco at Jinbeh brings that spirit of togetherness to the hibachi table, where the chef's tableside show makes the reunion festive and fun.",
      "As a welcoming choice among celebration restaurants in Frisco and Lewisville, we seat groups together and offer private dining in Frisco for larger gatherings. Fresh sushi, hibachi favorites, and sake round out the night. Reserve online in minutes, with current hours listed on each location page.",
    ],
    faqs: [
      { q: "Can Jinbeh host a Mid-Autumn Festival dinner?", a: "Yes. We welcome Moon Festival gatherings at both Frisco and Lewisville, seating families and friends together for an interactive hibachi celebration." },
      { q: "Is there room for a large group?", a: "Yes. We seat groups together around the grill and offer private dining options in Frisco and Lewisville. Reserve ahead and share your headcount so we can plan." },
      { q: "What can we order for the festival?", a: "Share fresh sushi, choose premium hibachi entrees, and add warm sake. There are vegetarian options too, so every guest at the table is taken care of." },
    ],
  },
  "/celebrations/mothers-day": {
    heading: "Mother's Day Dinner in Frisco and Lewisville",
    paragraphs: [
      "Give Mom a Mother's Day dinner in Frisco where she can relax and be celebrated, not stuck in the kitchen. At Jinbeh, the chef cooks tableside while the family enjoys the show together, turning a family dinner in Frisco into a heartfelt celebration of the moms in your life.",
      "From fresh sushi to premium hibachi entrees, there is something for every mother, and the lively atmosphere makes the day feel special. A favorite for both Mother's Day and Father's Day dinners near me, Jinbeh makes gathering easy. Reserve online ahead of time and find current hours on each location page.",
    ],
    faqs: [
      { q: "Is Jinbeh a good place for Mother's Day?", a: "Yes. Mom can relax while the chef cooks tableside, and the fresh sushi, premium hibachi, and festive show make it a memorable Mother's Day in Frisco and Lewisville." },
      { q: "Should I make a Mother's Day reservation?", a: "Mother's Day is one of the busiest dining days of the year, so we strongly recommend reserving online ahead of time to seat your family together." },
      { q: "Can the whole family come along?", a: "Of course. Jinbeh is built for family gatherings, with seating that brings everyone together and options for every age, from children's dinners to premium steaks." },
    ],
  },
  "/celebrations/national-fried-rice-day": {
    heading: "Celebrate National Fried Rice Day at Jinbeh",
    paragraphs: [
      "Every September 20th, National Fried Rice Day gives hibachi lovers the perfect excuse to gather, and there is no better place than the teppanyaki grill. At Jinbeh, your chef tosses fried rice tableside as part of the show, so you watch a North Texas favorite come together right in front of you in Frisco and Lewisville.",
      "Bring friends or the whole family and make a celebration of it. As an easygoing pick among celebration restaurants in Frisco and Lewisville, we seat groups together and offer private dining in Frisco for larger parties. Reserve online in a few minutes and find current hours on each location page.",
    ],
    faqs: [
      { q: "What is National Fried Rice Day?", a: "National Fried Rice Day falls on September 20th and celebrates a beloved dish. At Jinbeh, hibachi fried rice is cooked tableside as part of the chef's show." },
      { q: "Can I watch my fried rice being made?", a: "Yes. Hibachi fried rice is prepared right at your table as part of the teppanyaki show, so you see and smell it come together fresh." },
      { q: "Is it a good occasion to bring a group?", a: "Definitely. It is a fun, low-key reason to gather. We seat groups together and offer private dining options. Reserve online and share your headcount." },
    ],
  },
  "/celebrations/rehearsal-dinner": {
    heading: "Rehearsal Dinner Venues in Frisco and Lewisville",
    paragraphs: [
      "The night before the wedding should be relaxed and fun, and Jinbeh is one of the more memorable rehearsal dinner venues in Frisco for exactly that reason. The hibachi show gives both families something to bond over, breaking the ice naturally and setting a warm, celebratory tone for the big day ahead.",
      "We seat the wedding party together around the grill, with private dining options in Frisco for larger groups, and a menu spanning premium hibachi, fresh sushi, and sake. As a standout among celebration restaurants in Frisco and Lewisville, we make planning easy. Reserve online and find current hours on each location page.",
    ],
    faqs: [
      { q: "Can Jinbeh host a rehearsal dinner?", a: "Yes. We host rehearsal dinners at both Frisco and Lewisville, seating the wedding party together for an interactive hibachi dinner that helps both families connect." },
      { q: "Is there private dining for a rehearsal dinner?", a: "We offer private dining options in Frisco and Lewisville and can coordinate seating for your group. Reserve ahead and share your headcount so we can plan." },
      { q: "Why choose hibachi for a rehearsal dinner?", a: "The tableside show is a natural ice-breaker that brings two families together, and the lively atmosphere sets a joyful tone for the wedding weekend." },
    ],
  },
  "/celebrations/team-building": {
    heading: "Team Building Dinners in Frisco and Lewisville",
    paragraphs: [
      "The best team building in Frisco does not feel like a forced exercise, and a hibachi dinner at Jinbeh proves it. When your team shares a grill and the chef puts on a show, coworkers laugh, talk, and connect without anyone planning an icebreaker. It is one of the more effective team building restaurants in the area.",
      "Each location comfortably hosts large groups, well over a hundred guests when seating is coordinated, with group menus that keep ordering simple for a company dinner in Frisco. As a memorable choice among corporate event venues in DFW, we make planning easy. Send your headcount and reserve, with current hours on each location page.",
    ],
    faqs: [
      { q: "Is hibachi good for team building?", a: "Yes. The interactive tableside show naturally gets coworkers talking and laughing, building camaraderie without the awkwardness of structured activities. It makes team dinners genuinely fun." },
      { q: "How large a team can Jinbeh host?", a: "By coordinating seating, each location comfortably hosts large groups, well over a hundred guests. Contact us with your headcount so we can arrange the best setup." },
      { q: "Can you simplify ordering for a company dinner?", a: "Yes. We offer group menus that keep ordering easy for larger parties, so your team event runs smoothly from start to finish." },
    ],
  },
  "/celebrations/thanksgiving": {
    heading: "Thanksgiving Dinner in Frisco and Lewisville, Skip the Cooking",
    paragraphs: [
      "This Thanksgiving, trade the turkey and the all-day cooking for a hibachi feast cooked tableside. Jinbeh offers a festive Thanksgiving dinner in Frisco where the chef does the work and the family enjoys the show, a refreshing change of pace when you are searching for a restaurant open on Thanksgiving near me.",
      "Want to celebrate at home instead? Our to-go family meals make Thanksgiving catering near me simple, bringing hibachi and fresh sushi to your table with no cleanup. Holiday hours are posted on each location page, and reservations are quick to make online, so your family is seated together when you arrive.",
    ],
    faqs: [
      { q: "Is Jinbeh open on Thanksgiving?", a: "Holiday hours, including Thanksgiving, are listed on each location page. We recommend reserving ahead, as holiday dining fills quickly at both Frisco and Lewisville." },
      { q: "Can I get Thanksgiving food to go?", a: "Yes. Our to-go family meals let you bring hibachi and fresh sushi home for the holiday, a stress-free alternative to cooking all day." },
      { q: "Why choose hibachi for Thanksgiving?", a: "It is a fun change of pace. The chef cooks tableside, the family enjoys the show, and there is no cooking or cleanup, just time together around the grill." },
    ],
  },
  "/celebrations/valentines-day": {
    heading: "Valentine's Day Dinner in Frisco and Lewisville",
    paragraphs: [
      "Make this Valentine's Day dinner in Frisco one you will both remember. Instead of a hushed table for two, Jinbeh gives couples a chef's tableside show to share, the kind of fun, interactive evening that sets us apart from the usual romantic restaurants in Frisco. The sizzle and the laughter become part of the date.",
      "Share fresh sushi, a premium hibachi steak, and sake poured for the occasion, then unwind at the bar over a Japanese cocktail. Whether it is Valentine's Day or an anniversary dinner near me, reserving online keeps the evening easy at both Frisco and Lewisville. Book early, as the night fills fast.",
    ],
    faqs: [
      { q: "Is Jinbeh good for Valentine's Day?", a: "Yes. The interactive tableside show, fresh sushi, premium steaks, and sake make Valentine's Day at Jinbeh fun and romantic, a memorable alternative to a quiet dinner." },
      { q: "Should I reserve for Valentine's Day?", a: "Absolutely. Valentine's Day is one of the busiest nights of the year, so book your table online early to secure your spot at Frisco or Lewisville." },
      { q: "What is a romantic order for two?", a: "Many couples share sushi, choose a premium hibachi entree, and add warm sake. Ask your server for a pairing to make the evening feel extra special." },
    ],
  },
  "/celebrations/world-cup": {
    heading: "Watch the FIFA World Cup 2026 in Frisco and Lewisville",
    paragraphs: [
      "The FIFA World Cup 2026 has North Texas buzzing, and Jinbeh is a festive spot to catch the action. For a World Cup watch party in Frisco or Lewisville, gather friends over hibachi and sushi while you cheer, with the energy of the tournament and the sizzle of the grill in one place. We are a short drive from the DFW host venues.",
      "Fans following Japan's Samurai Blue in Dallas will feel right at home celebrating with authentic Japanese food. Our Samurai Blue Special sashimi combination and complimentary edamame mark the occasion during the tournament window. Reserve online ahead of match days, when seating goes fast, and find current hours on each location page.",
    ],
    faqs: [
      { q: "Can I watch World Cup 2026 matches at Jinbeh?", a: "Jinbeh is a fun, festive place to gather with friends and enjoy hibachi and sushi during the World Cup. Reserve ahead of popular match days so your group is seated together." },
      { q: "Do you have anything special for Japan's matches?", a: "Yes. Fans of the Samurai Blue can enjoy our Samurai Blue Special sashimi combination with complimentary edamame during the tournament window at both Frisco and Lewisville." },
      { q: "How close is Jinbeh to the World Cup venues?", a: "Both our Frisco and Lewisville locations are a short drive from the DFW area host venues, making us a convenient spot for a pre-match meal or a post-match celebration." },
    ],
  },
  "/nearby/allen": {
    heading: "Japanese Restaurant Near Allen, Texas",
    paragraphs: [
      "Allen families searching for a japanese restaurant near Allen TX, hibachi near Allen, or sushi near Allen will find Jinbeh Frisco just a quick drive south on US 75. We have been a family-owned North Texas favorite since 1988, and Allen neighbors have made us their go-to spot for tableside hibachi shows, fresh sushi, and celebrations that feel like home.",
      "Gather the family around the teppanyaki grill and let the chef handle the entertainment while you enjoy premium steaks, seafood, and the onion volcano. Our sushi bar rolls fresh classics and signature specialties daily. After the show, the kids leave with smiles and parents leave knowing they picked the right place.",
    ],
    faqs: [
      { q: "How far is Jinbeh from Allen, TX?", a: "Jinbeh Frisco is about 10 to 15 minutes south of Allen on US 75, an easy drive for hibachi or sushi. Reservations are recommended on weekends." },
      { q: "Is Jinbeh a good family restaurant for Allen residents?", a: "Yes. The tableside hibachi show entertains all ages, with flames, the onion volcano, and training chopsticks for little ones. Allen families have been joining us since 1988." },
      { q: "Does Jinbeh near Allen offer takeout?", a: "Yes. Our easy online ordering lets you enjoy Jinbeh sushi and hibachi favorites at home. For the full tableside show, book a table at our Frisco location." },
    ],
  },
  "/nearby/carrollton": {
    heading: "Hibachi and Sushi Near Carrollton, Texas",
    paragraphs: [
      "Carrollton residents looking for a japanese restaurant near Carrollton TX have trusted Jinbeh Lewisville as their neighborhood hibachi and sushi destination for decades. Just a short drive east on the 121 corridor, our family-owned restaurant has been serving North Texas since 1988 with the kind of tableside cooking that turns a weeknight into an event.",
      "The teppanyaki grill is where the fun begins, but our fresh sushi bar and curated sake list are reasons to stay longer. Whether you are celebrating a birthday, planning a date night, or gathering the whole crew, Jinbeh brings the energy and the flavor Carrollton families come back for.",
    ],
    faqs: [
      { q: "How far is Jinbeh from Carrollton?", a: "Jinbeh Lewisville is roughly 10 minutes from central Carrollton along the 121 corridor, making it a convenient choice for hibachi and sushi near you." },
      { q: "Does Jinbeh near Carrollton have fresh sushi?", a: "Yes. Our Lewisville sushi bar hand-rolls nigiri, sashimi, and specialty rolls daily. Ask your chef which fish is freshest that day." },
      { q: "Can I bring a large group from Carrollton?", a: "Absolutely. Hibachi tables seat groups around the grill, and when coordinated in advance we host parties of all sizes. Reserve ahead so your group sits together." },
    ],
  },
  "/nearby/coppell": {
    heading: "Japanese Restaurant Near Coppell, Texas",
    paragraphs: [
      "For Coppell families who search for a japanese restaurant near Coppell TX or hibachi near Coppell, Jinbeh Lewisville is your closest authentic teppanyaki experience. We sit just north of Coppell along the Lewisville corridor, and since 1988 we have been the family-owned Japanese restaurant that neighbors trust for celebrations, weeknight dinners, and everything in between.",
      "Pull up a seat at the grill and watch the chef sear premium cuts tableside while the kids cheer the onion volcano. Then explore our sushi bar for fresh rolls and sashimi cut to order. Coppell is close enough for a spontaneous dinner or an easy takeout run through our online ordering.",
    ],
    faqs: [
      { q: "How close is Jinbeh to Coppell?", a: "Jinbeh Lewisville is just north of Coppell, about 10 minutes away. It is an easy drive for hibachi, sushi, or a quick to-go order on a busy night." },
      { q: "Is Jinbeh near Coppell kid-friendly?", a: "Very. The tableside hibachi show captivates children with flames and chef tricks, and we offer training chopsticks so kids can join in the fun." },
      { q: "Can I order delivery to Coppell from Jinbeh?", a: "Yes. Easy online ordering makes it simple to enjoy Jinbeh sushi and hibachi at home in Coppell. For the full tableside experience, visit our Lewisville location." },
    ],
  },
  "/nearby/denton": {
    heading: "Japanese Restaurant Worth the Drive from Denton",
    paragraphs: [
      "Denton diners searching for a japanese restaurant near Denton TX will find Jinbeh Lewisville a rewarding drive south on I-35E. Since 1988, our family-owned restaurant has drawn guests from across North Texas with tableside teppanyaki, a fresh sushi bar, and the warm hospitality that comes from nearly four decades in the community.",
      "The drive is about 20 minutes, and regulars from Denton say the hibachi show alone makes it worth the trip. Our chefs cook premium steaks, shrimp, and salmon right at your table while the sushi bar rolls fresh daily. Grab sake or a Japanese whiskey at the bar and make a real evening of it.",
    ],
    faqs: [
      { q: "How far is Jinbeh from Denton?", a: "Jinbeh Lewisville is about 20 minutes south of Denton on I-35E. Regulars from Denton and the surrounding area make the trip for hibachi, sushi, and sake." },
      { q: "Is it worth driving from Denton to Jinbeh?", a: "Our guests think so. Jinbeh has been family-owned since 1988 and offers tableside hibachi, fresh sushi, and a full bar, an experience that Denton visitors keep returning to." },
      { q: "Does Jinbeh have good sushi near Denton?", a: "Yes. Our Lewisville sushi bar serves fresh nigiri, sashimi, and creative rolls to order. Many Denton sushi fans consider us their go-to spot in the area." },
    ],
  },
  "/nearby/flower-mound": {
    heading: "Hibachi and Sushi Near Flower Mound, Texas",
    paragraphs: [
      "Flower Mound residents searching for a japanese restaurant near Flower Mound TX or hibachi near Flower Mound already know Jinbeh Lewisville is practically next door. Our family-owned restaurant sits just east of Flower Mound and has been a North Texas staple since 1988. Neighbors have been walking through our doors for birthdays, date nights, and family dinners for nearly four decades.",
      "Sit around the teppanyaki grill and enjoy the tableside show while the chef sears filet mignon, shrimp, and salmon to order. Our sushi bar completes the experience with fresh rolls, sashimi, and our signature specialties. Make a reservation online and skip the wait, because Flower Mound families keep us busy on weekends.",
    ],
    faqs: [
      { q: "How close is Jinbeh to Flower Mound?", a: "Jinbeh Lewisville is just minutes east of Flower Mound, making it one of the closest hibachi and sushi restaurants for Flower Mound families." },
      { q: "Is Jinbeh popular with Flower Mound families?", a: "Yes. Flower Mound families have been regulars since 1988. The tableside hibachi show is a hit with kids, and we offer training chopsticks for younger guests." },
      { q: "Can I get Jinbeh to go in Flower Mound?", a: "Yes. Easy online ordering lets you enjoy sushi and hibachi favorites at home. For the full tableside experience, our Lewisville location is a quick drive from Flower Mound." },
    ],
  },
  "/nearby/grapevine": {
    heading: "Japanese Restaurant Near Grapevine, Texas",
    paragraphs: [
      "Grapevine visitors and locals searching for a japanese restaurant near Grapevine TX will find Jinbeh Lewisville a short drive north on 121. Since 1988, we have welcomed families from Grapevine and across DFW with tableside teppanyaki, fresh sushi, and the kind of warm service you only get from a restaurant that has been family-owned for nearly four decades.",
      "Whether you are fueling up before a trip through DFW Airport or celebrating with friends after wine tasting on Main Street, Jinbeh brings together a blazing hibachi show and a thoughtful sushi bar under one roof. Pair your meal with sake or Japanese whiskey and let us handle the cooking.",
    ],
    faqs: [
      { q: "How far is Jinbeh from Grapevine?", a: "Jinbeh Lewisville is about 10 to 15 minutes north of Grapevine along 121, a convenient stop for hibachi and sushi before or after exploring Grapevine." },
      { q: "Is Jinbeh a good choice before a DFW Airport trip?", a: "Yes. Our Lewisville location is a short drive from the airport area and a more memorable meal than typical airport dining. Allow time for the full hibachi show or grab sushi to go." },
      { q: "Does Jinbeh near Grapevine have a bar?", a: "Yes. Our bar pours sake, Japanese whiskey, and cocktails alongside happy hour specials Monday through Friday from 5:00 to 6:30 PM at both locations." },
    ],
  },
  "/nearby/highland-village": {
    heading: "Hibachi and Sushi Near Highland Village, Texas",
    paragraphs: [
      "Highland Village residents searching for a japanese restaurant near Highland Village TX or hibachi near Highland Village consider Jinbeh Lewisville their local spot. We are just minutes away and have served North Texas since 1988 as a family-owned restaurant where neighbors gather for celebrations, date nights, and the tableside show that makes hibachi unforgettable.",
      "The teppanyaki grill, the fresh sushi bar, and a sake list worth exploring all sit under one roof. Highland Village families love bringing the kids for the chef's flames and the onion volcano, while couples enjoy an evening at the bar after dinner. Reserve online and your table will be waiting.",
    ],
    faqs: [
      { q: "How close is Jinbeh to Highland Village?", a: "Jinbeh Lewisville is just a few minutes from Highland Village, making it one of the most convenient hibachi and sushi restaurants for Highland Village residents." },
      { q: "Is Jinbeh near Highland Village good for date night?", a: "Absolutely. Pair the tableside hibachi show with fresh sushi and sake for a fun, interactive date that is more memorable than a typical dinner out." },
      { q: "Do Highland Village families go to Jinbeh?", a: "Yes. Highland Village families have been regulars for years. The hibachi show entertains kids while parents enjoy premium steaks and fresh sushi, a win for the whole table." },
    ],
  },
  "/nearby/little-elm": {
    heading: "Japanese Restaurant Near Little Elm, Texas",
    paragraphs: [
      "Little Elm residents searching for a japanese restaurant near Little Elm TX or hibachi near Little Elm have made Jinbeh Frisco a favorite night out. We are about 15 minutes south along the 423 corridor, and since 1988 our family-owned restaurant has been the place North Texas turns to for tableside hibachi, fresh sushi, and celebrations that bring people together.",
      "After a day at the lake, trade the sun for the grill. Our chefs cook premium cuts right at your table while the flames and the onion volcano keep the energy going. The sushi bar rolls fresh daily, and our bar pours sake, Japanese whiskey, and cocktails to round out the evening.",
    ],
    faqs: [
      { q: "How far is Jinbeh from Little Elm?", a: "Jinbeh Frisco is about 15 minutes south of Little Elm along the 423 corridor. It is an easy drive for hibachi, sushi, or a celebratory dinner with the family." },
      { q: "Is Jinbeh a good after-the-lake dinner spot?", a: "Yes. Many Little Elm families stop by Jinbeh Frisco after a day at the lake. The tableside hibachi show is the kind of fun that keeps the good times going." },
      { q: "Can I order Jinbeh to go near Little Elm?", a: "Yes. Our online ordering makes it easy to take sushi and hibachi favorites home. For the full tableside experience, book a table at our Frisco location." },
    ],
  },
  "/nearby/mckinney": {
    heading: "Japanese Restaurant Near McKinney, Texas",
    paragraphs: [
      "McKinney residents searching for a japanese restaurant near McKinney TX, hibachi near McKinney, or sushi near McKinney will find Jinbeh Frisco a short drive south on US 75. We have served North Texas since 1988 as a family-owned original, and McKinney guests have long made the trip for the hibachi show, our fresh sushi bar, and a warm, celebratory atmosphere.",
      "Gather around the teppanyaki grill for a meal that doubles as entertainment. Our chefs sear filet mignon, ribeye, salmon, and shrimp tableside, while the sushi bar offers hand-rolled classics and signature specialties. McKinney families, couples, and groups trust Jinbeh for the experiences that matter.",
    ],
    faqs: [
      { q: "How far is Jinbeh from McKinney?", a: "Jinbeh Frisco is about 15 minutes south of McKinney on US 75, a quick trip for hibachi, sushi, or a group celebration. Reservations are recommended on weekends." },
      { q: "Is Jinbeh popular with McKinney families?", a: "Yes. McKinney families drive to Jinbeh Frisco for the tableside hibachi show, the fresh sushi, and the welcoming atmosphere that has kept us going since 1988." },
      { q: "Does Jinbeh near McKinney have good sushi?", a: "Absolutely. Our Frisco sushi bar hand-rolls fresh nigiri, sashimi, and specialty rolls daily. Ask your chef which fish is best that day." },
    ],
  },
  "/nearby/plano": {
    heading: "Japanese Restaurant Near Plano, Texas",
    paragraphs: [
      "Plano neighbors searching for a japanese restaurant near Plano TX, hibachi near Plano, or sushi near Plano have considered Jinbeh Frisco their go-to for generations. We sit on Preston Road just north of the Plano border, and since 1988 our family-owned restaurant has been the teppanyaki destination where Plano families celebrate birthdays, graduations, and ordinary Tuesdays.",
      "The tableside grill is the main event, but the sushi bar and the sake list are reasons Plano regulars linger. Pair fresh sashimi with a Japanese whiskey, or watch the kids try their training chopsticks while the chef lights the onion volcano. Plano to Jinbeh is the kind of easy drive that turns into a tradition.",
    ],
    faqs: [
      { q: "How close is Jinbeh to Plano?", a: "Jinbeh Frisco is right on Preston Road, just north of the Plano border. Most Plano residents reach us in under 10 minutes." },
      { q: "Why do Plano families choose Jinbeh?", a: "The tableside hibachi show keeps every age entertained, the sushi is fresh, and we have been family-owned since 1988. Plano families have been making us part of their routine for decades." },
      { q: "Does Jinbeh near Plano offer sushi and hibachi?", a: "Yes. Our Frisco location offers both a full teppanyaki grill and a sushi bar with fresh rolls, nigiri, and sashimi prepared to order." },
    ],
  },
  "/nearby/richardson": {
    heading: "Hibachi and Sushi Near Richardson, Texas",
    paragraphs: [
      "Richardson residents searching for a japanese restaurant near Richardson TX or hibachi near Richardson will find Jinbeh Frisco a straightforward drive north on US 75. Family-owned since 1988, we have been the hibachi and sushi destination that Richardson diners trust for celebrations, group dinners, and evenings when you want someone else to put on a show.",
      "Watch the chef sear premium steaks, shrimp, and salmon tableside while the sushi bar rolls fresh behind the counter. Richardson visitors say the drive pays off the moment the onion volcano erupts. Pair your meal with sake or a cocktail from the bar and make the most of the trip.",
    ],
    faqs: [
      { q: "How far is Jinbeh from Richardson?", a: "Jinbeh Frisco is about 20 to 25 minutes north of Richardson on US 75. The drive is an easy one, and the hibachi show and fresh sushi make it a rewarding outing." },
      { q: "Is the drive from Richardson to Jinbeh worth it?", a: "Richardson regulars think so. The tableside hibachi show, fresh sushi bar, and warm atmosphere are hard to find closer to home, and we have been at it since 1988." },
      { q: "Does Jinbeh near Richardson have a full bar?", a: "Yes. Our bar pours sake, Japanese whiskey, cocktails, and beer. Happy hour runs Monday through Friday from 5:00 to 6:30 PM." },
    ],
  },
  "/nearby/the-colony": {
    heading: "Japanese Restaurant Near The Colony, Texas",
    paragraphs: [
      "The Colony residents searching for a japanese restaurant near The Colony TX or hibachi near The Colony are almost equidistant from both Jinbeh locations. Frisco sits just north and Lewisville just west, so you can pick the one that fits your evening. Since 1988, our family-owned restaurant has been a favorite for Colony neighbors who want the full teppanyaki show and fresh sushi.",
      "Both locations offer the same tableside hibachi experience, where the chef cooks premium cuts right in front of you, and a sushi bar that rolls fresh daily. The Colony families love that they can try both and decide which grill feels like home. Make a reservation at either location and your table is ready.",
    ],
    faqs: [
      { q: "Which Jinbeh location is closer to The Colony?", a: "The Colony sits between both locations. Jinbeh Frisco is a short drive north and Jinbeh Lewisville is a short drive west, so you can choose either one depending on your plans." },
      { q: "Does Jinbeh near The Colony have hibachi?", a: "Yes. Both our Frisco and Lewisville locations offer tableside teppanyaki with premium cuts, the onion volcano, and the full chef's show that Colony families love." },
      { q: "Is Jinbeh family-friendly for Colony residents?", a: "Absolutely. The hibachi show is a hit with kids, we offer training chopsticks, and our welcoming atmosphere has drawn Colony families since 1988." },
    ],
  },
  "/allergy-friendly-dining": {
    heading: "Allergy-Friendly Japanese Dining at Jinbeh",
    paragraphs: [
      "Guests searching for an allergy friendly japanese restaurant, gluten free japanese food, or celiac-friendly sushi will find Jinbeh a thoughtful choice. Our kitchen has prepared meals for guests with dietary needs since 1988, and our staff communicates allergies directly to your hibachi chef or sushi chef so adjustments are made before cooking begins.",
      "Hibachi proteins like salmon, shrimp, and steak can be prepared with modifications, and our sushi bar offers sashimi and rice-based rolls that many gluten-sensitive guests enjoy. We label vegetarian and gluten-free options on our menu to make ordering clearer. Let your server know about any allergies and we will work together to build a meal you feel good about.",
    ],
    faqs: [
      { q: "Does Jinbeh accommodate food allergies?", a: "Yes. Let your server know about any allergies before ordering and they will communicate directly with your chef. Hibachi and sushi preparations can often be adjusted to accommodate common dietary needs." },
      { q: "Is there gluten-free sushi at Jinbeh?", a: "Sashimi is naturally gluten-free, and many of our rolls use rice without gluten-containing ingredients. Let your sushi chef know about your needs and they will guide you." },
      { q: "Can celiac guests eat safely at Jinbeh?", a: "We take celiac concerns seriously and communicate them directly to the kitchen. While we cannot guarantee a fully gluten-free environment due to shared cooking surfaces, our team works to minimize cross-contact." },
    ],
  },
  "/careers": {
    heading: "Join the Jinbeh Family in Frisco and Lewisville",
    paragraphs: [
      "Searching for japanese restaurant jobs in Frisco TX, hibachi chef jobs, or sushi chef jobs in DFW? Jinbeh has been family-owned since 1988, and our team reflects that stability. Many of our chefs and staff have been with us for years, because this is a place that values its people as much as its food.",
      "We hire hibachi chefs, sushi chefs, servers, hosts, and kitchen team members at both our Frisco and Lewisville locations. If you bring skill, reliability, and a genuine love for hospitality, we offer steady work in a restaurant where guests arrive happy and leave happier. Reach out to apply.",
    ],
    faqs: [
      { q: "What positions are available at Jinbeh?", a: "We hire hibachi chefs, sushi chefs, servers, hosts, bussers, and kitchen staff at both Frisco and Lewisville. Open positions change, so contact your preferred location to ask about current openings." },
      { q: "Does Jinbeh hire experienced hibachi chefs?", a: "Yes. Experienced teppanyaki chefs are always valued. Our Frisco location uses gas grills and our Lewisville location uses electric grills, so let us know your background and preference." },
      { q: "What is it like to work at Jinbeh?", a: "Many team members have been with us for years, which says a lot. The atmosphere is fast-paced and family-oriented, and we take care of the people who take care of our guests." },
    ],
  },
  "/celebrations/world-cup-watch-party": {
    heading: "World Cup Watch Parties at Jinbeh in DFW",
    paragraphs: [
      "Looking for a World Cup watch party in Frisco or a fifa 2026 restaurant in DFW? Jinbeh is the authentic Japanese gathering spot for fans who want great food with their football. Gather around the hibachi grill during the tournament window, cheer the action, and enjoy the Samurai Blue Special sashimi combination with complimentary edamame.",
      "Japan's World Cup matches carry special energy at Jinbeh, where the connection to Japanese culture runs nearly four decades deep. Both our Frisco and Lewisville locations welcome fan groups. Reserve your table before match days, because group seating fills quickly, and check our location pages for current hours during the tournament.",
    ],
    faqs: [
      { q: "Does Jinbeh host World Cup watch parties?", a: "Yes. During the FIFA 2026 tournament, Jinbeh is a fun, festive gathering spot at both Frisco and Lewisville. Reserve ahead for popular match days so your group sits together." },
      { q: "What is the Samurai Blue Special?", a: "During the World Cup tournament window, fans can enjoy our Samurai Blue Special sashimi combination with complimentary edamame at both locations." },
      { q: "Can I reserve a table for a World Cup match?", a: "Absolutely. Group seating fills quickly on match days, so book your table online in advance. Contact us for larger party coordination at either location." },
    ],
  },
  "/delivery": {
    heading: "Japanese Food Delivery in Frisco and Lewisville",
    paragraphs: [
      "Craving japanese food delivery in Frisco or sushi delivery near me? Jinbeh makes it easy to enjoy our food at home through online ordering and third-party delivery partners. Our kitchen prepares your sushi rolls, hibachi favorites, and appetizers with the same care we bring to the dining room, then packages everything for a clean arrival.",
      "For hibachi delivery in Lewisville or sushi to go in Frisco, simply place your order online and choose pickup or delivery. Larger orders for parties or office lunches may benefit from our catering menu instead, where we arrange platters for groups. Either way, Jinbeh's food travels well because we have been perfecting our recipes since 1988.",
    ],
    faqs: [
      { q: "Does Jinbeh deliver sushi?", a: "Yes. You can order sushi delivery through our online ordering platform or through third-party delivery partners from both our Frisco and Lewisville locations." },
      { q: "What is the best way to order Jinbeh delivery?", a: "Place your order online through our website for the simplest experience. We also partner with delivery services for added convenience." },
      { q: "Does Jinbeh hibachi travel well?", a: "Our kitchen packages hibachi favorites carefully so they arrive in good shape. For the full tableside show, nothing beats dining in, but our to-go hibachi is a popular choice for weeknights." },
    ],
  },
  "/gallery": {
    heading: "Photos of Jinbeh Hibachi, Sushi, and Celebrations",
    paragraphs: [
      "Browse jinbeh japanese restaurant photos and see why families across DFW choose us for hibachi, sushi, and celebrations. From the flames of the teppanyaki grill to the colorful rolls at our sushi bar, every photo captures the energy and craft that have defined Jinbeh since 1988 at both our Frisco and Lewisville locations.",
      "Our gallery features hibachi restaurant Frisco photos, sushi bar Lewisville snapshots, birthday celebrations, corporate events, and the moments in between. Scroll through to get a feel for the atmosphere before your visit, and when you are ready to experience it in person, reservations are easy to make online.",
    ],
    faqs: [
      { q: "Can I see photos of Jinbeh before visiting?", a: "Yes. Our gallery showcases the teppanyaki grill in action, fresh sushi presentations, and the celebratory atmosphere at both Frisco and Lewisville." },
      { q: "Does Jinbeh have photos of birthday celebrations?", a: "Yes. Birthdays are one of our most popular occasions, and our gallery features moments from birthday dinners at both locations." },
      { q: "What does the hibachi show look like at Jinbeh?", a: "The gallery captures the flames, the chef's tricks, and the onion volcano up close. It is the best preview of the tableside experience before you book a table." },
    ],
  },
  "/gift-cards": {
    heading: "Jinbeh Gift Cards for Hibachi and Sushi Lovers",
    paragraphs: [
      "Looking for japanese restaurant gift cards in Frisco or a sushi gift card for someone in DFW? A Jinbeh gift card is the perfect way to share the hibachi experience with friends, family, and coworkers. Whether it is a birthday, a thank you, or a holiday gift, the card lets them choose from our full menu at either our Frisco or Lewisville location.",
      "Pick up a hibachi gift certificate in person at either restaurant, and give someone a night they will remember. From the tableside flames to fresh sushi and sake at the bar, a Jinbeh gift card covers the entire experience. It is one of those gifts that feels bigger than its envelope.",
    ],
    faqs: [
      { q: "How do I buy a Jinbeh gift card?", a: "Jinbeh gift cards are available for purchase at both our Frisco and Lewisville locations. Ask your server or the host stand for details." },
      { q: "Can Jinbeh gift cards be used at both locations?", a: "Yes. A Jinbeh gift card is valid at both our Frisco and Lewisville restaurants, so the recipient can choose the location that works best for them." },
      { q: "Are Jinbeh gift cards a good birthday gift?", a: "Absolutely. A hibachi dinner is an experience, not just a meal. The tableside show, fresh sushi, and fun atmosphere make it a birthday gift they will actually be excited to use." },
    ],
  },
  "/lunch-specials": {
    heading: "Hibachi Lunch Specials in Frisco and Lewisville",
    paragraphs: [
      "For hibachi lunch specials in Frisco or lunch hibachi near me, Jinbeh is the move. Our Hibachi for Two lunch deal is 35 dollars for two entrees, available Monday through Friday from 11 AM to 2 PM. Choose from veggie, chicken, steak, shrimp, or salmon, and each plate comes with onion soup, house salad, grilled vegetables, and steamed rice.",
      "It is one of the best japanese lunch deals in DFW, and it turns an ordinary lunch break into a tableside show. Bring a coworker, a friend, or a date and enjoy the hibachi grill during the day without the weekend wait. For an extra 5 dollars per person, swap the white rice for hibachi fried rice. Dine in only.",
    ],
    faqs: [
      { q: "What is the Hibachi for Two lunch special?", a: "Two hibachi entrees for 35 dollars, available Monday through Friday from 11 AM to 2 PM. Pick any two proteins: veggie, chicken, steak, shrimp, or salmon, each served with soup, salad, vegetables, and rice." },
      { q: "Is the lunch special available on weekends?", a: "No. The Hibachi for Two lunch special is a weekday offer, Monday through Friday only. Weekend lunch hours and the full menu are available at both locations." },
      { q: "Can I upgrade the rice with the lunch special?", a: "Yes. For an extra 5 dollars per person you can swap steamed white rice for hibachi fried rice, cooked right on the grill in front of you." },
    ],
  },
  "/takeout": {
    heading: "Japanese Takeout in Frisco and Lewisville",
    paragraphs: [
      "When you need japanese takeout in Frisco or sushi to go near me, Jinbeh has you covered. Our full menu of hibachi favorites, sushi rolls, sashimi, and appetizers is available for takeout through easy online ordering. We package everything carefully so your meal arrives home tasting the way it should.",
      "Hibachi takeout from Lewisville and sushi to go from Frisco are both popular with families on busy weeknights. Skip the cooking, skip the cleanup, and enjoy restaurant-quality Japanese food at your own table. Place your order online and pick it up at your preferred location, ready when you arrive.",
    ],
    faqs: [
      { q: "How do I order takeout from Jinbeh?", a: "Place your order through our online ordering system and choose your preferred location for pickup. Your meal is packaged and ready when you arrive." },
      { q: "Does Jinbeh sushi hold up for takeout?", a: "Yes. We package sushi rolls and sashimi with care so they travel well. For the freshest experience, enjoy your order soon after pickup." },
      { q: "Can I order hibachi to go?", a: "Yes. Our hibachi favorites are available for takeout at both Frisco and Lewisville. While the tableside show stays at the restaurant, the food is just as satisfying at home." },
    ],
  },
  "/specials": {
    heading: "Current Specials at Jinbeh Japanese Restaurant",
    paragraphs: [
      "Looking for japanese restaurant specials in Frisco or sushi specials near me? Jinbeh runs specials that reward both new visitors and longtime regulars. Our Hibachi for Two lunch deal is 35 dollars Monday through Friday, and happy hour brings 4 dollar draft beer, 5 dollar hot sake, and 6 dollar wine from 5:00 to 6:30 PM at both locations.",
      "Beyond the standing deals, we feature seasonal celebrations and limited-time offerings throughout the year. Check back often, or join our VIP Birthday Club to receive a special treat during your birthday month. Jinbeh has been serving DFW since 1988, and our specials are one more reason families keep coming back.",
    ],
    faqs: [
      { q: "What specials does Jinbeh offer?", a: "Our standing specials include the 35 dollar Hibachi for Two lunch deal (Monday through Friday) and happy hour from 5:00 to 6:30 PM with 4 dollar drafts, 5 dollar hot sake, and 6 dollar wine at both locations." },
      { q: "Does Jinbeh have a birthday special?", a: "Yes. Join the VIP Birthday Club to receive a special treat during your birthday month. Sign up through our website to get started." },
      { q: "Are Jinbeh specials available at both locations?", a: "Yes. Our happy hour and lunch specials are available at both Frisco and Lewisville, so you can enjoy them at whichever location is more convenient." },
    ],
  },
  "/frisco/appetizers/edamame": {
    heading: "Fresh Edamame at Jinbeh Frisco",
    paragraphs: [
      "Searching for edamame in Frisco or a light japanese appetizer near me? Jinbeh's edamame is the table starter that gets every meal going. Steamed and lightly salted, our soybeans arrive warm and ready to share while the hibachi chef heats the grill or the sushi bar prepares your rolls. Simple, satisfying, and a perfect fit for any order.",
      "Edamame has been a guest favorite at Jinbeh since 1988, and it is one of those starters that both kids and adults reach for. It pairs naturally with sake, beer, or a cold drink from the bar. Order it alongside gyoza or a sushi appetizer to build a spread before the main course arrives.",
    ],
    faqs: [
      { q: "Does Jinbeh Frisco serve edamame?", a: "Yes. Our edamame is steamed fresh and lightly salted, a simple and delicious appetizer to start any hibachi or sushi meal." },
      { q: "Is edamame a good appetizer for kids?", a: "Absolutely. Edamame is fun to eat, lightly flavored, and a healthy snack. Kids love popping the beans out of the pod while they wait for the hibachi show." },
      { q: "What pairs well with edamame at Jinbeh?", a: "Edamame goes with everything, but it is especially nice alongside a cold draft or a sake from the bar. Add gyoza for a more complete appetizer spread." },
    ],
  },
  "/frisco/appetizers/gyoza": {
    heading: "Gyoza and Japanese Dumplings at Jinbeh Frisco",
    paragraphs: [
      "Craving gyoza in Frisco or japanese dumplings near me? Jinbeh's pan-seared gyoza are a top appetizer pick at our Frisco location, golden and crispy on the bottom with a savory pork and vegetable filling inside. Dipped in our house ponzu sauce, they are the kind of starter that makes the table go quiet for a moment.",
      "Also called potstickers in Frisco, our gyoza are handcrafted and cooked to order. They make a natural companion to sushi or a hibachi dinner, or a satisfying small plate at the bar with a cold beer or sake. Jinbeh has been perfecting these flavors since 1988, and gyoza remains one of our most reordered appetizers.",
    ],
    faqs: [
      { q: "What are gyoza at Jinbeh?", a: "Gyoza are pan-seared Japanese dumplings with a savory filling, golden on the bottom and tender on top. They are served with our house ponzu dipping sauce." },
      { q: "Are potstickers the same as gyoza?", a: "Yes. Gyoza is the Japanese name for pan-fried dumplings that many people know as potstickers. Ours are handcrafted and cooked to order at our Frisco location." },
      { q: "What should I pair with gyoza at Jinbeh?", a: "Gyoza pairs well with edamame and miso soup for a complete appetizer spread. For drinks, a cold draft beer or a chilled sake brings out the savory flavors." },
    ],
  },
  "/frisco/appetizers/seared-tuna": {
    heading: "Seared Tuna Appetizer at Jinbeh Frisco",
    paragraphs: [
      "For a seared tuna appetizer in Frisco or ahi tuna near me, Jinbeh's version is one of the most popular starters on our menu. Seared on the outside and beautifully rare in the center, our ahi tuna is sliced thin, plated with clean garnishes, and meant to highlight the quality of the fish itself.",
      "This appetizer sits at the crossroads of our hibachi skill and our sushi bar precision. It is a favorite with guests who want something refined before a bigger meal, and it pairs wonderfully with sake or a glass of wine. Visit Jinbeh Frisco and taste why we have been trusted for fresh seafood since 1988.",
    ],
    faqs: [
      { q: "What is the seared tuna at Jinbeh?", a: "Our seared tuna features ahi tuna quickly seared on the outside and left beautifully rare in the center, then sliced thin and served as an elegant appetizer." },
      { q: "Is the ahi tuna at Jinbeh fresh?", a: "Yes. Our kitchen sources quality fish and prepares the seared tuna to order, so freshness is always a priority. It is one of our most popular appetizers." },
      { q: "What goes well with seared tuna at Jinbeh?", a: "Pair it with sake or a chilled glass of wine. It also works as a complement to a sushi platter or as a light start before a hibachi dinner." },
    ],
  },
  "/frisco/appetizers/soft-shell-crab": {
    heading: "Soft Shell Crab at Jinbeh Frisco",
    paragraphs: [
      "Searching for soft shell crab in Frisco or japanese soft shell crab near me? Jinbeh's soft shell crab appetizer is a crispy, golden treasure that surprises guests who have never tried it before and satisfies those who know exactly what they are looking for. The entire crab is edible, shell and all, fried until light and crunchy.",
      "It is one of the more adventurous starters on our Frisco menu, and it rewards the curious. The delicate sweetness of the crab comes through with every bite, balanced by a gentle crunch. Pair it with a sushi order or enjoy it as a standalone appetizer at the bar with cold sake. Jinbeh has served this dish with pride since 1988.",
    ],
    faqs: [
      { q: "What is soft shell crab at Jinbeh?", a: "Soft shell crab is a whole crab fried until golden and crispy. The shell is thin enough to eat entirely, and the flavor is sweet and delicate. It is a popular Japanese appetizer." },
      { q: "Is soft shell crab good for first-timers?", a: "Yes. Many guests try it for the first time at Jinbeh and are pleasantly surprised. It is crispy, mild, and a great introduction to a classic Japanese preparation." },
      { q: "What pairs well with soft shell crab?", a: "A chilled sake or a cold draft beer brings out the sweetness of the crab. It also pairs nicely with a sushi roll or sashimi order for a seafood-focused start to your meal." },
    ],
  },
  "/": {
      "heading": "Hibachi and Sushi the Whole Family Remembers, Since 1988",
      "paragraphs": [
          "Jinbeh has been a North Texas tradition since 1988, the longest running family owned Japanese restaurant in the area. With locations in Frisco and Lewisville, we are where families search for hibachi near me, teppanyaki near me, or the best sushi near me and find a tableside show worth the drive, served by people who have welcomed three generations of guests.",
          "At our teppanyaki grills, chefs sear filet mignon, New York strip, and Black Angus ribeye while the onion volcano erupts and kids cheer. At the sushi bar, our chefs hand roll fresh nigiri, sashimi, and specialty rolls. Whether you want a japanese steakhouse in Frisco or fresh sushi in Frisco and Lewisville, dinner is also a show."
      ],
      "faqs": [
          {
              "q": "How long has Jinbeh been serving DFW?",
              "a": "Jinbeh opened in 1988 and is the longest running family owned Japanese restaurant in North Texas, with locations in Frisco and Lewisville. Generations of guests have celebrated birthdays and milestones around our hibachi grills."
          },
          {
              "q": "Does Jinbeh have both hibachi and sushi?",
              "a": "Yes. Both locations feature a live teppanyaki hibachi grill and a full sushi bar, so you can enjoy a chef's tableside show and fresh hand rolled sushi in the same visit."
          },
          {
              "q": "Where are Jinbeh's locations?",
              "a": "Jinbeh has two North Texas restaurants, one in Frisco on Preston Road near Stonebriar and one in Lewisville near Vista Ridge. Reservations are recommended on weekends."
          }
      ]
  },
  "/frisco/appetizers/tempura": {
      "heading": "Shrimp Tempura at Jinbeh Frisco",
      "paragraphs": [
          "Craving shrimp tempura in Frisco or searching for tempura near me? Jinbeh's shrimp tempura is dipped in a light, airy batter and fried until golden and crisp, never heavy or greasy. Each piece stays tender inside with a delicate crunch that has made it a favorite Frisco starter since 1988.",
          "It is one of our most popular japanese appetizers in Frisco, and it works as both a shared table starter and a companion to a sushi order. Enjoy it among our sushi appetizers with a roll from the bar, or on its own with a cold sake. At Lewisville, you will find the same crisp tempura done right."
      ],
      "faqs": [
          {
              "q": "What comes in the shrimp tempura at Jinbeh?",
              "a": "Our shrimp tempura features plump shrimp coated in a light, crisp batter and fried to a golden finish. It is served hot and pairs well with rice, sushi, or a hibachi entree."
          },
          {
              "q": "Are tempura appetizers good for sharing?",
              "a": "Yes. Shrimp tempura is one of our most shareable sushi appetizers. The crisp, mild flavor is a crowd pleaser for families and groups starting a meal together."
          },
          {
              "q": "Is tempura available at both Jinbeh locations?",
              "a": "Yes. You can enjoy shrimp tempura at both Jinbeh Frisco and Jinbeh Lewisville as a starter or alongside sushi and hibachi entrees."
          }
      ]
  },
  "/frisco/appetizers/tuna-tartare": {
      "heading": "Tuna Tartare at Jinbeh Frisco",
      "paragraphs": [
          "If you are looking for tuna tartare in Frisco or tuna tartare near me, Jinbeh layers diced ahi tuna with creamy avocado and a bright ponzu that lets the fish shine. It is a clean, refreshing starter that highlights the quality of our fresh fish, cut to order by our sushi chefs.",
          "Among our japanese appetizers in Frisco, tuna tartare is a favorite for guests who love the delicate flavor of raw fish without a full sashimi order. Enjoy it as one of our lighter sushi appetizers before hibachi, or pair it with sake at the bar. Lewisville guests can find the same dish at our sushi bar there."
      ],
      "faqs": [
          {
              "q": "What is in Jinbeh's tuna tartare?",
              "a": "Our tuna tartare features diced ahi tuna with avocado and a citrus ponzu sauce. It is light, fresh, and a refined way to begin a meal at the sushi bar."
          },
          {
              "q": "Is tuna tartare a raw dish?",
              "a": "Yes. Tuna tartare is made with fresh raw ahi tuna, cut to order by our sushi chefs. It is a popular choice for guests who enjoy sashimi style flavors in an appetizer."
          },
          {
              "q": "What pairs well with tuna tartare?",
              "a": "A chilled sake or a crisp Japanese cocktail complements the bright ponzu and creamy avocado. It also pairs nicely before a sushi roll order or a hibachi entree."
          }
      ]
  },
  "/frisco/cocktails/jinbeh-punch": {
      "heading": "Jinbeh Punch at Our Frisco Bar",
      "paragraphs": [
          "Searching for the Jinbeh Punch in Frisco or fun japanese cocktails near you? Our signature Jinbeh Punch is a tropical, fruit forward pour that has become a bar favorite. It is bright, easy to sip, and a perfect way to start the night before a hibachi show or a sushi dinner.",
          "Our Frisco bar also pours a sake set, premium sake near me, and Japanese inspired cocktails. Stop in during our sushi happy hour, Monday through Friday from 5:00 to 6:30 PM, for 4 dollar Japanese draft beer, 5 dollar small hot sake, and 6 dollar wine. The same drinks and warm welcome wait at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "What is in the Jinbeh Punch?",
              "a": "The Jinbeh Punch is a tropical, fruit forward cocktail crafted at our bar. It is sweet, refreshing, and a popular choice to pair with hibachi or sushi."
          },
          {
              "q": "Does Jinbeh Frisco have a happy hour?",
              "a": "Yes. Happy hour runs Monday through Friday from 5:00 to 6:30 PM with 4 dollar Japanese draft beer, 5 dollar small hot sake, and 6 dollar wine by the glass."
          },
          {
              "q": "Can I order a sake set at Jinbeh?",
              "a": "Yes. Our bar offers sake sets and a curated sake selection, from warm house sake to premium pours, alongside Japanese cocktails and cold drafts."
          }
      ]
  },
  "/frisco/cocktails/lychee-martini": {
      "heading": "Lychee Martini at Jinbeh Frisco",
      "paragraphs": [
          "If you are hunting for a lychee martini in Frisco or the best japanese cocktails in town, Jinbeh's lychee martini is a fragrant, lightly sweet pour built around the floral flavor of lychee. It is elegant and refreshing, a favorite for date nights and celebrations at our Frisco bar.",
          "Pair it with fresh sushi or sip it during our sushi happy hour, Monday through Friday from 5:00 to 6:30 PM, when Japanese draft beer is 4 dollars, small hot sake is 5 dollars, and wine is 6 dollars. Ask about our sake set and other sake near me options. The same cocktail menu pours at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "What does the lychee martini taste like?",
              "a": "It is floral, lightly sweet, and refreshing, built around the delicate flavor of lychee fruit. It is a smooth cocktail that pairs beautifully with sushi."
          },
          {
              "q": "Is the lychee martini good with sushi?",
              "a": "Yes. The clean, fruity profile of the lychee martini complements fresh nigiri, sashimi, and specialty rolls from our sushi bar."
          },
          {
              "q": "When is happy hour at the Jinbeh bar?",
              "a": "Happy hour is Monday through Friday from 5:00 to 6:30 PM, featuring 4 dollar Japanese draft beer, 5 dollar small hot sake, and 6 dollar wine by the glass."
          }
      ]
  },
  "/frisco/cocktails/sake-bomb": {
      "heading": "Sake Bomb at Jinbeh Frisco",
      "paragraphs": [
          "Looking for a sake bomb in Frisco? The sake bomb is a classic Japanese beer and sake ritual that turns the table into part of the fun. A shot of warm sake is balanced on chopsticks over a glass of beer, then dropped in with a cheer. It is a lively favorite for groups and celebrations.",
          "At our Frisco bar you can pair a sake bomb with hibachi or fresh sushi, and explore our sake set, sake near me selections, and other japanese cocktails. During sushi happy hour, Monday through Friday from 5:00 to 6:30 PM, enjoy 4 dollar Japanese draft beer, 5 dollar small hot sake, and 6 dollar wine. Jinbeh Lewisville pours the same."
      ],
      "faqs": [
          {
              "q": "What is a sake bomb?",
              "a": "A sake bomb is a fun Japanese drink where a shot of sake is dropped into a glass of beer and quickly enjoyed. It is a lively tradition popular with groups at our bar."
          },
          {
              "q": "Is the sake bomb good for celebrations?",
              "a": "Yes. The sake bomb is a favorite for birthdays, group dinners, and team celebrations because the whole table joins in the cheer."
          },
          {
              "q": "What sake does Jinbeh use?",
              "a": "We pour warm house sake for sake bombs and offer a broader sake selection, including premium pours, for guests who want to sip and savor."
          }
      ]
  },
  "/frisco/cocktails/sake-flight": {
      "heading": "Premium Sake Flight at Jinbeh Frisco",
      "paragraphs": [
          "For anyone searching a sake flight in Frisco or the best sake near me, Jinbeh's premium sake flight is a guided tasting through several styles, from crisp and dry to soft and fruit forward. It is the perfect way to discover your favorite pour and learn what makes Japanese sake so special.",
          "Our Frisco bar pairs the flight beautifully with fresh sushi or a hibachi dinner, and we are glad to suggest matches. Explore our sake set and japanese cocktails too, or visit during sushi happy hour, Monday through Friday from 5:00 to 6:30 PM, for 5 dollar small hot sake. The same tasting experience is waiting at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "What is included in the sake flight?",
              "a": "The sake flight is a curated tasting of several sake styles served side by side, ranging from dry and crisp to softer, fruitier pours. Your server can guide you through each one."
          },
          {
              "q": "Is a sake flight good for beginners?",
              "a": "Yes. The flight is a friendly introduction to sake. Tasting different styles together helps you find what you enjoy most before ordering a full pour."
          },
          {
              "q": "What food pairs with a sake flight?",
              "a": "Sashimi, nigiri, and specialty rolls pair wonderfully with a sake flight, and the variety of styles also complements hibachi entrees."
          }
      ]
  },
  "/frisco/cocktails/tokyo-mule": {
      "heading": "Tokyo Mule at Jinbeh Frisco",
      "paragraphs": [
          "Searching for a Tokyo Mule in Frisco or japanese cocktails near me? Our Tokyo Mule gives the classic mule a Japanese twist, blending ginger and citrus with a smooth spirit and serving it cold and crisp. It is bright, refreshing, and an easy favorite at our Frisco bar.",
          "It pairs well with hibachi and sushi alike, and it is a great pour to enjoy during sushi happy hour, Monday through Friday from 5:00 to 6:30 PM, alongside 4 dollar Japanese draft beer, 5 dollar small hot sake, and 6 dollar wine. Ask about our sake set and sake near me options. Find the same cocktail at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "What is a Tokyo Mule?",
              "a": "A Tokyo Mule is a Japanese take on the classic mule, mixing ginger, citrus, and a smooth spirit served cold over ice. It is crisp and refreshing."
          },
          {
              "q": "Does the Tokyo Mule pair with sushi?",
              "a": "Yes. The bright ginger and citrus make the Tokyo Mule a refreshing match for sushi rolls, sashimi, and hibachi."
          },
          {
              "q": "When can I get happy hour pricing on drinks?",
              "a": "Happy hour runs Monday through Friday from 5:00 to 6:30 PM, with 4 dollar Japanese draft beer, 5 dollar small hot sake, and 6 dollar wine by the glass."
          }
      ]
  },
  "/frisco/hibachi/chicken-teriyaki": {
      "heading": "Hibachi Chicken Teriyaki at Jinbeh Frisco",
      "paragraphs": [
          "Searching for hibachi chicken teriyaki in Frisco, hibachi near me, or teppanyaki near me? Jinbeh's hibachi chicken teriyaki is tender, glazed in a savory sweet teriyaki, and seared tableside on our gas teppanyaki grill. It is one of our most loved entrees and a perfect introduction to the Jinbeh show.",
          "As a top japanese steakhouse near me, our Frisco kitchen also fires premium cuts like filet mignon, New York strip, Black Angus ribeye, chateaubriand, and twin lobster tails. Every hibachi dinner comes with the chef's tableside performance, the onion volcano, and the flames. The same teppanyaki show plays nightly at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "What comes with hibachi chicken teriyaki at Jinbeh?",
              "a": "Hibachi chicken teriyaki is cooked tableside on the teppanyaki grill and served with the chef's signature show. It is a tender, savory sweet favorite for all ages."
          },
          {
              "q": "Is chicken teriyaki good for kids?",
              "a": "Yes. Chicken teriyaki is a popular pick for younger guests, and our children's hibachi dinners keep kids entertained by the tableside flames."
          },
          {
              "q": "What other hibachi options does Jinbeh Frisco offer?",
              "a": "Beyond chicken teriyaki, we serve premium cuts including filet mignon, New York strip, Black Angus ribeye, chateaubriand, and twin lobster, all seared tableside."
          }
      ]
  },
  "/frisco/hibachi/combo-seafood": {
      "heading": "Seafood Trio Hibachi at Jinbeh Frisco",
      "paragraphs": [
          "If you are craving a seafood trio hibachi in Frisco or searching hibachi near me, Jinbeh's combo seafood hibachi brings together shrimp, scallops, and more, seared tableside on our gas teppanyaki grill. It is a seafood lover's dream and one of the most popular combinations at our Frisco steakhouse.",
          "As a favorite japanese steakhouse near me, we also fire premium cuts including filet mignon, New York strip, Black Angus ribeye, chateaubriand, and twin lobster tails for guests who want surf and turf. Every teppanyaki near me dinner includes the chef's tableside show. Jinbeh Lewisville serves the same seafood trio with the same flair."
      ],
      "faqs": [
          {
              "q": "What seafood is in the trio hibachi?",
              "a": "Our seafood trio hibachi features a combination of grilled shrimp, scallops, and additional seafood, all seared tableside on the teppanyaki grill for a fresh, flavorful plate."
          },
          {
              "q": "Can I add a steak to the seafood combo?",
              "a": "Yes. Many guests pair seafood with premium cuts like filet mignon or twin lobster for a surf and turf experience. Ask your chef about combinations."
          },
          {
              "q": "Is the hibachi show included with every dinner?",
              "a": "Yes. Every hibachi dinner at Jinbeh Frisco includes the chef's tableside show, complete with the onion volcano and flames."
          }
      ]
  },
  "/frisco/hibachi/combo-steak-chicken": {
      "heading": "Steak and Chicken Combo Hibachi at Jinbeh Frisco",
      "paragraphs": [
          "Searching for a steak and chicken combo hibachi in Frisco or hibachi near me? Jinbeh's combo pairs juicy hibachi steak with tender chicken, seared side by side on our gas teppanyaki grill. It is the best of both worlds and a go to for guests who cannot decide between land favorites.",
          "At our Frisco japanese steakhouse near me, you can upgrade your steak to premium cuts like filet mignon, New York strip, or Black Angus ribeye, and we also offer chateaubriand and twin lobster for special occasions. Every teppanyaki near me dinner comes with the chef's tableside performance. The same dual protein combo is served at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "What proteins are in the steak and chicken combo?",
              "a": "The combo features hibachi steak and chicken cooked together tableside. It is a balanced plate for guests who want both in one dinner."
          },
          {
              "q": "Can I upgrade the steak in my combo?",
              "a": "Yes. You can upgrade to premium cuts such as filet mignon, New York strip, or Black Angus ribeye. Ask your server about the options."
          },
          {
              "q": "Is the steak and chicken combo a good value plate?",
              "a": "It is a popular choice because you get two proteins in one hibachi dinner, along with the full tableside show that Jinbeh is known for."
          }
      ]
  },
  "/frisco/hibachi/combo-steak-lobster": {
      "heading": "Steak and Lobster Combo Hibachi at Jinbeh Frisco",
      "paragraphs": [
          "For a luxurious surf and turf, search no further than steak and lobster hibachi in Frisco at Jinbeh. We pair a tender hibachi steak with sweet lobster tail, both seared tableside on our gas teppanyaki grill. It is an indulgent combo and a favorite for anniversaries and special nights out.",
          "As a premier japanese steakhouse near me, our Frisco kitchen lets you choose premium cuts like filet mignon, New York strip, Black Angus ribeye, or chateaubriand to pair with twin lobster. Every hibachi near me and teppanyaki near me dinner includes the chef's tableside show. Jinbeh Lewisville pours the same surf and turf magic."
      ],
      "faqs": [
          {
              "q": "What is in the steak and lobster combo?",
              "a": "The combo features a hibachi steak paired with lobster tail, both grilled tableside. It is our signature surf and turf for a special occasion."
          },
          {
              "q": "Can I choose a premium steak with my lobster?",
              "a": "Yes. You can pair your lobster with premium cuts including filet mignon, New York strip, Black Angus ribeye, or chateaubriand."
          },
          {
              "q": "Is steak and lobster good for celebrations?",
              "a": "It is one of our most requested plates for anniversaries, birthdays, and date nights because it combines indulgence with the lively hibachi show."
          }
      ]
  },
  "/frisco/hibachi/combo-steak-shrimp": {
      "heading": "Steak and Shrimp Combo Hibachi at Jinbeh Frisco",
      "paragraphs": [
          "Craving a steak and shrimp hibachi in Frisco or searching hibachi near me? Jinbeh's combo pairs a savory hibachi steak with plump grilled shrimp, both seared tableside on our gas teppanyaki grill. It is a classic surf and turf that satisfies meat and seafood lovers at the same table.",
          "At our Frisco japanese steakhouse near me, upgrade your steak to premium cuts like filet mignon, New York strip, or Black Angus ribeye, and explore chateaubriand and twin lobster for bigger celebrations. Every teppanyaki near me dinner comes with the chef's tableside show. The same steak and shrimp combo is served at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "What does the steak and shrimp combo include?",
              "a": "It features hibachi steak and grilled shrimp cooked together tableside, served with the chef's signature show. It is a balanced surf and turf favorite."
          },
          {
              "q": "Can I upgrade my steak in the shrimp combo?",
              "a": "Yes. You can choose premium cuts like filet mignon, New York strip, or Black Angus ribeye to pair with your shrimp."
          },
          {
              "q": "Is the steak and shrimp combo popular with families?",
              "a": "Yes. It is a crowd pleaser for families and groups because it offers both meat and seafood in one hibachi dinner."
          }
      ]
  },
  "/frisco/hibachi/filet-mignon": {
      "heading": "Filet Mignon Hibachi at Jinbeh Frisco",
      "paragraphs": [
          "Looking for the best filet mignon hibachi in Frisco or a top teppanyaki near me? Jinbeh's filet mignon is our most tender cut, seared to your liking tableside on our gas teppanyaki grill. Buttery and rich, it is the centerpiece of an unforgettable hibachi dinner for steak lovers.",
          "As a leading japanese steakhouse near me, our Frisco kitchen also fires New York strip, Black Angus ribeye, chateaubriand, and twin lobster for guests who want the finest. Every hibachi near me dinner includes the chef's tableside show with the onion volcano and flames. The same premium filet is served nightly at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "How is the filet mignon prepared at Jinbeh?",
              "a": "Our filet mignon is seared tableside on the teppanyaki grill and cooked to your preferred temperature. It is our most tender and buttery hibachi cut."
          },
          {
              "q": "Is filet mignon the best steak at Jinbeh?",
              "a": "Filet mignon is our most tender premium cut. For marbling and bold flavor, many guests also love the Black Angus ribeye and New York strip."
          },
          {
              "q": "Can I pair filet mignon with seafood?",
              "a": "Yes. Filet mignon pairs beautifully with twin lobster, shrimp, or scallops for a surf and turf hibachi dinner."
          }
      ]
  },
  "/frisco/hibachi/imperial-dinner": {
      "heading": "Imperial Dinner Hibachi at Jinbeh Frisco",
      "paragraphs": [
          "Searching for the Imperial Dinner hibachi in Frisco or a special teppanyaki near me? Jinbeh's Imperial Dinner is our grandest hibachi combination, bringing together premium steak and seafood for a feast worthy of a celebration. It is seared tableside on our gas teppanyaki grill with the full chef's show.",
          "As a top japanese steakhouse near me, our Imperial Dinner can feature premium cuts like filet mignon, New York strip, and Black Angus ribeye alongside twin lobster and other seafood. It is a favorite hibachi near me choice for anniversaries, birthdays, and big nights out. Jinbeh Lewisville serves the same Imperial feast."
      ],
      "faqs": [
          {
              "q": "What is the Imperial Dinner at Jinbeh?",
              "a": "The Imperial Dinner is our most lavish hibachi combination, pairing premium steak with seafood like lobster for a complete tableside feast."
          },
          {
              "q": "Is the Imperial Dinner good for special occasions?",
              "a": "Yes. It is one of our most requested plates for anniversaries and celebrations because it combines our finest cuts with the lively hibachi show."
          },
          {
              "q": "What cuts can be part of the Imperial Dinner?",
              "a": "Premium options include filet mignon, New York strip, and Black Angus ribeye, often paired with twin lobster for the ultimate surf and turf."
          }
      ]
  },
  "/frisco/hibachi/lobster-tail": {
      "heading": "Lobster Tail Hibachi at Jinbeh Frisco",
      "paragraphs": [
          "Craving hibachi lobster tail in Frisco or searching teppanyaki near me? Jinbeh's lobster tail is sweet, succulent, and seared tableside on our gas teppanyaki grill until tender. It is one of our most luxurious hibachi entrees and a showstopper for anyone who loves seafood.",
          "At our Frisco japanese steakhouse near me, you can enjoy twin lobster on its own or pair it with premium cuts like filet mignon, New York strip, or Black Angus ribeye for a surf and turf feast. Every hibachi near me dinner includes the chef's tableside show. The same lobster is served at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "How is the lobster tail cooked at Jinbeh?",
              "a": "Our lobster tail is seared tableside on the teppanyaki grill until sweet and tender. It is a luxurious centerpiece for a hibachi dinner."
          },
          {
              "q": "Can I get twin lobster tails?",
              "a": "Yes. We offer twin lobster for guests who want extra. Lobster also pairs beautifully with premium steaks for surf and turf."
          },
          {
              "q": "What pairs well with lobster tail hibachi?",
              "a": "Premium cuts like filet mignon or Black Angus ribeye make a classic surf and turf, and a chilled sake rounds out the meal."
          }
      ]
  },
  "/frisco/hibachi/ny-strip": {
      "heading": "New York Strip Hibachi at Jinbeh Frisco",
      "paragraphs": [
          "Searching for New York strip hibachi in Frisco or a hibachi near me with great steak? Jinbeh's NY strip is a bold, flavorful cut seared tableside on our gas teppanyaki grill. With a satisfying chew and rich beefy flavor, it is a favorite for guests who love a classic steakhouse experience with a show.",
          "As a top japanese steakhouse near me, our Frisco kitchen also offers filet mignon, Black Angus ribeye, chateaubriand, and twin lobster. Every teppanyaki near me dinner includes the chef's tableside performance, the onion volcano, and the flames. The same premium NY strip is seared nightly at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "What does the New York strip taste like?",
              "a": "The NY strip is a bold, beefy cut with a satisfying chew. Seared tableside on the teppanyaki grill, it delivers classic steakhouse flavor with a hibachi show."
          },
          {
              "q": "How does NY strip compare to ribeye at Jinbeh?",
              "a": "The NY strip is leaner with a firmer bite, while the Black Angus ribeye is richer and more marbled. Both are premium hibachi cuts at Jinbeh."
          },
          {
              "q": "Can I pair the NY strip with seafood?",
              "a": "Yes. The NY strip pairs well with shrimp, scallops, or twin lobster for a surf and turf hibachi dinner."
          }
      ]
  },
  "/frisco/hibachi/ribeye": {
      "heading": "Black Angus Ribeye Hibachi at Jinbeh Frisco",
      "paragraphs": [
          "For ribeye hibachi in Frisco or the best teppanyaki near me, Jinbeh sears a richly marbled Black Angus ribeye tableside on our gas teppanyaki grill. Its generous marbling melts as it cooks, delivering deep, juicy flavor in every bite. It is a favorite among guests who love a bold, beefy steak.",
          "As a premier japanese steakhouse near me, our Frisco kitchen also fires filet mignon, New York strip, chateaubriand, and twin lobster. Every hibachi near me dinner comes with the chef's tableside show. Whether you want steak alone or a surf and turf, the same premium ribeye is served at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "What makes the ribeye special at Jinbeh?",
              "a": "Our Black Angus ribeye is richly marbled, which gives it deep, juicy flavor as it sears on the teppanyaki grill. It is a favorite for guests who love a bold steak."
          },
          {
              "q": "Is ribeye more flavorful than filet mignon?",
              "a": "The ribeye is more marbled and beefy, while the filet mignon is leaner and more tender. Both are premium hibachi cuts, so it comes down to preference."
          },
          {
              "q": "Can I make my ribeye a surf and turf?",
              "a": "Yes. Pair the Black Angus ribeye with twin lobster, shrimp, or scallops for a satisfying surf and turf hibachi dinner."
          }
      ]
  },
  "/frisco/hibachi/salmon": {
      "heading": "Hibachi Salmon at Jinbeh Frisco",
      "paragraphs": [
          "Searching for hibachi salmon in Frisco or a lighter teppanyaki near me? Jinbeh's hibachi salmon is seared tableside on our gas teppanyaki grill until flaky and tender, with a clean, fresh flavor. It is a favorite for guests who want a wholesome, seafood forward hibachi dinner with all the tableside fun.",
          "As a top japanese steakhouse near me, our Frisco kitchen also fires premium cuts like filet mignon, New York strip, Black Angus ribeye, chateaubriand, and twin lobster for those craving surf and turf. Every hibachi near me dinner includes the chef's show. The same fresh salmon is served at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "How is the hibachi salmon cooked?",
              "a": "Our salmon is seared tableside on the teppanyaki grill until flaky and tender. It has a clean, fresh flavor and is a lighter hibachi option."
          },
          {
              "q": "Is salmon a healthy hibachi choice?",
              "a": "Salmon is a lean, protein rich option many guests choose for a lighter dinner. It pairs well with grilled vegetables and steamed rice."
          },
          {
              "q": "Can I pair salmon with a steak?",
              "a": "Yes. Salmon pairs nicely with premium cuts like filet mignon for guests who want both seafood and steak in one hibachi dinner."
          }
      ]
  },
  "/frisco/hibachi/scallops": {
      "heading": "Sea Scallops Hibachi at Jinbeh Frisco",
      "paragraphs": [
          "Looking for hibachi scallops in Frisco or a refined teppanyaki near me? Jinbeh's sea scallops are seared tableside on our gas teppanyaki grill until golden outside and sweet and tender inside. They are a delicate, elegant choice for seafood lovers who appreciate fresh, carefully cooked shellfish.",
          "As a favorite japanese steakhouse near me, our Frisco kitchen also fires premium cuts such as filet mignon, New York strip, Black Angus ribeye, chateaubriand, and twin lobster. Pair scallops with a steak for surf and turf, and enjoy the full hibachi near me show. The same sweet scallops are served at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "How are the scallops prepared at Jinbeh?",
              "a": "Our sea scallops are seared tableside on the teppanyaki grill until golden outside and sweet and tender inside. They are a delicate, elegant hibachi option."
          },
          {
              "q": "Are scallops good for surf and turf?",
              "a": "Yes. Scallops pair beautifully with premium cuts like filet mignon or twin lobster for a refined surf and turf hibachi dinner."
          },
          {
              "q": "What sides come with hibachi scallops?",
              "a": "Hibachi dinners include the chef's tableside show along with grilled vegetables and steamed rice that complement the sweet flavor of the scallops."
          }
      ]
  },
  "/frisco/hibachi/shrimp": {
      "heading": "Jumbo Shrimp Hibachi at Jinbeh Frisco",
      "paragraphs": [
          "Craving hibachi shrimp in Frisco or searching teppanyaki near me? Jinbeh's jumbo shrimp are seared tableside on our gas teppanyaki grill until plump, juicy, and lightly caramelized. They are a crowd favorite and a perfect way to enjoy fresh seafood with all the tableside excitement of the Jinbeh show.",
          "As a top japanese steakhouse near me, our Frisco kitchen also fires premium cuts like filet mignon, New York strip, Black Angus ribeye, chateaubriand, and twin lobster. Pair shrimp with a steak for surf and turf, and enjoy the full hibachi near me experience. The same jumbo shrimp are served at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "How are the hibachi shrimp cooked?",
              "a": "Our jumbo shrimp are seared tableside on the teppanyaki grill until plump and juicy with a light caramelized finish. They are a crowd favorite."
          },
          {
              "q": "Can I add shrimp to a steak dinner?",
              "a": "Yes. Shrimp pairs perfectly with premium cuts like filet mignon or Black Angus ribeye for a classic surf and turf hibachi dinner."
          },
          {
              "q": "Are shrimp a good choice for kids?",
              "a": "Many younger guests enjoy hibachi shrimp, and our children's hibachi dinners keep them entertained by the chef's tableside flames."
          }
      ]
  },
  "/frisco/hibachi/vegetable-tofu": {
      "heading": "Vegetable and Tofu Hibachi at Jinbeh Frisco",
      "paragraphs": [
          "Searching for vegetarian hibachi in Frisco or a meatless teppanyaki near me? Jinbeh's vegetable and tofu hibachi features fresh seasonal vegetables and protein rich tofu seared tableside on our gas teppanyaki grill. It is a satisfying, flavorful option that lets vegetarians and vegans enjoy the full Jinbeh show.",
          "As a welcoming japanese steakhouse near me, our Frisco kitchen happily cooks the vegetable and tofu hibachi at the same grill where we sear premium cuts like filet mignon and Black Angus ribeye, so your whole table can dine together. Let your chef know about dietary needs. The same vegetarian hibachi is served at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "Is the vegetable and tofu hibachi vegetarian?",
              "a": "Yes. It features fresh seasonal vegetables and tofu seared tableside, making it a satisfying vegetarian and vegan friendly hibachi option."
          },
          {
              "q": "Can vegetarians dine with a hibachi group?",
              "a": "Absolutely. The vegetable and tofu hibachi is cooked at the same grill as our steak and seafood, so your whole table can enjoy the show together."
          },
          {
              "q": "Can I customize the vegetable hibachi for allergies?",
              "a": "Please let your chef know about any dietary needs or allergies. We will do our best to accommodate while preparing your meal tableside."
          }
      ]
  },
  "/frisco/sashimi/chirashi": {
      "heading": "Chirashi Bowl at Jinbeh Frisco",
      "paragraphs": [
          "Searching for a chirashi bowl in Frisco or the best sushi near me? Jinbeh's chirashi is a deluxe scattered sushi bowl, an assortment of fresh sliced fish arranged over seasoned sushi rice. With fish delivered regularly and cut to order, it is a beautiful way to taste our fresh sashimi in Frisco in one generous bowl.",
          "Our chirashi reflects the craft of our longtime head sushi chef Fuji-san, who has been with Jinbeh since 1993 and brings traditional Japanese training, clean flavor, and precise cutting to the sushi bar. His original Jinbeh Special Roll became a house signature. The same care goes into every chirashi at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "What is a chirashi bowl?",
              "a": "Chirashi is a scattered sushi bowl featuring an assortment of fresh sliced fish arranged over seasoned sushi rice. It is a great way to sample several types of fish in one dish."
          },
          {
              "q": "How fresh is the fish in the chirashi?",
              "a": "Our fish is delivered regularly and cut to order by our sushi chefs, so the chirashi showcases fresh sashimi at its best."
          },
          {
              "q": "Who prepares the sushi at Jinbeh Frisco?",
              "a": "Our sushi bar is led by head sushi chef Fuji-san, with Jinbeh since 1993, whose traditional training and precise knife work shine in every chirashi and sashimi plate."
          }
      ]
  },
  "/frisco/sashimi/octopus-sashimi": {
      "heading": "Octopus Sashimi at Jinbeh Frisco",
      "paragraphs": [
          "Looking for octopus sashimi in Frisco or the best sushi near me? Jinbeh's octopus sashimi, known as tako, is thinly sliced for a tender bite and a clean, subtly sweet flavor. Low in fat and high in protein, it is a refined choice for guests who appreciate authentic fresh sashimi in Frisco.",
          "Our octopus is cut to order from fish delivered regularly, and the precise slicing comes from our head sushi chef Fuji-san, with Jinbeh since 1993 and trained in traditional Japanese technique. His clean flavor and careful cutting define our sushi bar. Find the same expertly sliced sashimi at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "What is octopus sashimi?",
              "a": "Octopus sashimi, or tako, is thinly sliced cooked octopus served chilled. It is tender with a subtly sweet flavor and is naturally low in fat and high in protein."
          },
          {
              "q": "Is octopus sashimi good for first timers?",
              "a": "Yes. Its mild, clean flavor and tender texture make octopus a friendly introduction to sashimi for guests new to fresh seafood."
          },
          {
              "q": "How does Jinbeh prepare its sashimi?",
              "a": "Our sashimi is cut to order from fish delivered regularly. Head sushi chef Fuji-san, with us since 1993, brings precise traditional knife work to every slice."
          }
      ]
  },
  "/frisco/sashimi/salmon-sashimi": {
      "heading": "Salmon Sashimi at Jinbeh Frisco",
      "paragraphs": [
          "Searching for salmon sashimi in Frisco or the best sushi near me? Jinbeh's salmon sashimi is sliced into silky, melt in your mouth pieces with a rich, buttery flavor and plenty of omega 3s. It is one of our most popular fresh sashimi offerings in Frisco and a favorite for sashimi lovers of every level.",
          "Our salmon is cut to order from fish delivered regularly, and the clean, precise slicing reflects the traditional training of our head sushi chef Fuji-san, with Jinbeh since 1993. His craftsmanship has shaped our sushi bar for decades. Enjoy the same expertly cut salmon sashimi at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "What is salmon sashimi?",
              "a": "Salmon sashimi is fresh salmon sliced into silky pieces and served without rice. It has a rich, buttery flavor and is a popular, approachable choice at the sushi bar."
          },
          {
              "q": "Is salmon sashimi healthy?",
              "a": "Salmon is rich in omega 3 fatty acids and protein, making salmon sashimi a nutritious and flavorful option for guests who enjoy fresh fish."
          },
          {
              "q": "How fresh is the salmon at Jinbeh?",
              "a": "Our salmon is delivered regularly and cut to order by our sushi chefs, led by head sushi chef Fuji-san, so each slice is prepared with care."
          }
      ]
  },
  "/frisco/sashimi/sashimi-deluxe": {
      "heading": "Sashimi Deluxe Platter at Jinbeh Frisco",
      "paragraphs": [
          "Looking for a sashimi platter in Frisco or simply the best sushi near me? Our Sashimi Deluxe is a generous chef's assortment of fresh sliced fish, arranged without rice so the natural flavor of each cut leads. It is a beautiful way to taste a range of fresh sashimi in Frisco in a single, share worthy platter.",
          "Every piece is cut to order from fish delivered regularly, and the precise slicing reflects the traditional training of our longtime head sushi chef Fuji-san, who has guided the Jinbeh sushi bar since 1993. If sashimi near me is on your mind tonight, the same deluxe platter is hand prepared at Jinbeh Lewisville too."
      ],
      "faqs": [
          {
              "q": "What comes on the Sashimi Deluxe platter?",
              "a": "It is a chef's selection of fresh sliced fish served without rice, arranged so you can enjoy several varieties in one platter. Selection follows what is freshest at the sushi bar that day."
          },
          {
              "q": "Is the Sashimi Deluxe good for sharing?",
              "a": "Yes. It is one of our most popular platters for two or more guests who want to sample a spread of fresh fish before or alongside hibachi."
          },
          {
              "q": "How fresh is the fish at Jinbeh Frisco?",
              "a": "Our fish is delivered regularly and sliced to order by our sushi chefs, led by head sushi chef Fuji-san, so each piece is prepared with care."
          }
      ]
  },
  "/frisco/sashimi/tuna-sashimi": {
      "heading": "Tuna Sashimi at Jinbeh Frisco",
      "paragraphs": [
          "Searching for tuna sashimi in Frisco or the best sushi near me? Jinbeh's ahi tuna sashimi is sliced into clean, ruby red pieces with a lean, mild flavor and a firm, satisfying bite. It is a lighter, protein rich choice that lets the quality of the fish speak for itself, and a longtime favorite among our fresh sashimi in Frisco.",
          "We cut our tuna to order from fish delivered regularly, and the careful, even slicing comes from years of traditional craft at our sushi bar. Pair it with a little soy and wasabi, or enjoy it on its own. The same fresh tuna sashimi is served at Jinbeh Lewisville for guests searching sashimi near me on that side of town."
      ],
      "faqs": [
          {
              "q": "What does tuna sashimi taste like?",
              "a": "Ahi tuna sashimi is lean, mild, and clean tasting with a firm texture. It is one of the most approachable sashimi options for guests new to raw fish."
          },
          {
              "q": "Is tuna sashimi a healthy choice?",
              "a": "Tuna is high in lean protein and low in fat, making tuna sashimi a light, nourishing pick at the sushi bar."
          },
          {
              "q": "How is the tuna prepared?",
              "a": "Our tuna is delivered regularly and sliced to order by our sushi chefs, so each piece is fresh and precisely cut."
          }
      ]
  },
  "/frisco/sashimi/yellowtail-sashimi": {
      "heading": "Yellowtail Sashimi at Jinbeh Frisco",
      "paragraphs": [
          "If you are after yellowtail sashimi in Frisco or hunting for the best sushi near me, Jinbeh's hamachi is a buttery, delicate treat. Yellowtail has a richer, silkier texture than leaner fish, with a clean finish that sashimi lovers come back for. It is one of the standout fresh sashimi options in Frisco at our sushi bar.",
          "Our yellowtail is cut to order from fish delivered regularly, and the smooth, even slices reflect the precise hand of our head sushi chef Fuji-san, with Jinbeh since 1993. Whether you are a seasoned sashimi fan or trying hamachi for the first time, you will find the same care at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "What is yellowtail sashimi?",
              "a": "Yellowtail, or hamachi, is a buttery, mild fish sliced and served without rice. It has a silky texture and clean flavor that makes it a sashimi favorite."
          },
          {
              "q": "How is yellowtail different from tuna?",
              "a": "Yellowtail is richer and more buttery, while tuna is leaner and firmer. Many guests enjoy ordering both to compare."
          },
          {
              "q": "Is the yellowtail fresh?",
              "a": "Yes. Our yellowtail is delivered regularly and sliced to order by our sushi chefs, led by head sushi chef Fuji-san."
          }
      ]
  },
  "/frisco/sushi-rolls/ahi-tower": {
      "heading": "Ahi Tuna Tower at Jinbeh Frisco",
      "paragraphs": [
          "Craving an ahi tuna tower in Frisco or fancy sushi near me? Jinbeh's ahi tower stacks spicy ahi tuna, creamy avocado, and seasoned rice into a striking layered presentation that eats as good as it looks. It is a fresh, modern favorite for guests who want their sushi platter near me to feel like an occasion.",
          "We build each tower to order using tuna delivered regularly and sliced fresh at the bar, and the clean layering reflects the craftsmanship our sushi chefs bring to every plate. It is a beautiful starter to share before hibachi, and the same ahi tower is built fresh at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "What is an ahi tuna tower?",
              "a": "It is a layered dish of spicy ahi tuna, avocado, and seasoned rice stacked into a tower, then served so you can enjoy each layer together."
          },
          {
              "q": "Is the ahi tower spicy?",
              "a": "It carries a gentle, balanced heat from spicy mayo that complements the fresh tuna. Ask your server if you prefer it milder."
          },
          {
              "q": "Is the ahi tower good for sharing?",
              "a": "Yes. Its eye catching presentation and generous portion make it a popular starter to share at the table."
          }
      ]
  },
  "/frisco/sushi-rolls/butterfly-kiss": {
      "heading": "Butterfly Kiss Roll at Jinbeh Frisco",
      "paragraphs": [
          "Looking for the Butterfly Kiss roll in Frisco or fancy sushi near me to impress the table? This house specialty is one of our most photographed rolls, finished with delicate toppings and a graceful presentation that lives up to its name. For guests seeking the best sushi near me, it is a memorable signature you will not find everywhere.",
          "Like our other specialty rolls, the Butterfly Kiss is rolled to order with fish delivered regularly, reflecting the traditional craftsmanship our head sushi chef Fuji-san has brought to the Jinbeh sushi bar since 1993. Order it as the centerpiece of a sushi platter near me, and enjoy the same specialty at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "What is the Butterfly Kiss roll?",
              "a": "It is one of Jinbeh's house specialty rolls, known for its elegant presentation and balanced flavors. Ask your sushi chef for the day's preparation details."
          },
          {
              "q": "Is the Butterfly Kiss roll a good choice for special occasions?",
              "a": "Yes. Its beautiful presentation makes it a favorite for date nights, birthdays, and anytime you want a standout roll."
          },
          {
              "q": "Are the specialty rolls made fresh?",
              "a": "Every specialty roll is made to order with fish delivered regularly and prepared by our sushi chefs at the bar."
          }
      ]
  },
  "/frisco/sushi-rolls/california-roll": {
      "heading": "California Roll at Jinbeh Frisco",
      "paragraphs": [
          "Searching for a California roll in Frisco or the best sushi near me to start with? Jinbeh's California roll pairs crab, creamy avocado, and crisp cucumber for the approachable, crowd pleasing classic that introduced so many guests to sushi. It is a reliable favorite for first timers, kids, and anyone building a sushi platter near me.",
          "Even our classics are made to order with care, using avocado and fillings prepared fresh daily at the bar. The California roll pairs beautifully with a specialty roll or a few pieces of nigiri for a fuller spread. It is a guest favorite at both our Frisco location and Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "What is in a California roll?",
              "a": "A California roll is made with crab, avocado, and cucumber rolled in seasoned rice. It is mild, approachable, and a great starting point for new sushi eaters."
          },
          {
              "q": "Is the California roll good for kids?",
              "a": "Yes. Its mild, familiar flavors make it one of the most kid friendly rolls at the sushi bar."
          },
          {
              "q": "Can I add a California roll to a larger order?",
              "a": "Absolutely. Many guests pair it with specialty rolls or sashimi to round out a shareable spread."
          }
      ]
  },
  "/frisco/sushi-rolls/caterpillar-roll": {
      "heading": "Caterpillar Roll at Jinbeh Frisco",
      "paragraphs": [
          "Hunting for a caterpillar roll in Frisco or fancy sushi near me with real presentation? Jinbeh's caterpillar roll layers thin slices of avocado over the top like scales, wrapped around freshwater eel for a rich, lightly sweet bite. It is a standout choice for guests who want the best sushi near me to look as good as it tastes.",
          "We prepare it to order with fish and avocado fresh at the bar, and the careful, overlapping slicing takes a practiced hand. The caterpillar roll makes a beautiful addition to any sushi platter near me. Order it at our Frisco location or find the same roll at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "What is a caterpillar roll?",
              "a": "A caterpillar roll features eel inside, topped with thin slices of avocado arranged to resemble a caterpillar. It is rich, lightly sweet, and beautifully presented."
          },
          {
              "q": "What does the caterpillar roll taste like?",
              "a": "The eel gives it a warm, savory sweetness, balanced by creamy avocado and seasoned rice for a satisfying bite."
          },
          {
              "q": "Is the caterpillar roll good for sharing?",
              "a": "Yes. Its eye catching look makes it a favorite to share and a great choice for a sushi spread."
          }
      ]
  },
  "/frisco/sushi-rolls/dragon-roll": {
      "heading": "Dragon Roll at Jinbeh Frisco",
      "paragraphs": [
          "Looking for a dragon roll in Frisco or fancy sushi near me with wow factor? Jinbeh's dragon roll wraps crisp shrimp tempura inside, then crowns it with eel and avocado arranged to mimic dragon scales. It is one of our most popular specialty rolls and a favorite for anyone seeking the best sushi near me with bold presentation.",
          "Each dragon roll is built to order with fish delivered regularly, reflecting the specialty roll craft our sushi bar has honed for decades under head sushi chef Fuji-san, with Jinbeh since 1993. It anchors a sushi platter near me with color and flavor, and the same roll is made fresh at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "What is a dragon roll?",
              "a": "A dragon roll features shrimp tempura inside, topped with eel and avocado arranged to look like dragon scales. It is rich, savory, and visually striking."
          },
          {
              "q": "Is the dragon roll one of Jinbeh's specialty rolls?",
              "a": "Yes. It is among our most popular specialty rolls, loved for both its flavor and its dramatic presentation."
          },
          {
              "q": "Is the dragon roll spicy?",
              "a": "The dragon roll is savory and lightly sweet rather than spicy, making it a crowd pleasing choice."
          }
      ]
  },
  "/frisco/sushi-rolls/philly-roll": {
      "heading": "Philadelphia Roll at Jinbeh Frisco",
      "paragraphs": [
          "Searching for a Philadelphia roll in Frisco or the best sushi near me with a creamy twist? Jinbeh's Philly roll combines smooth salmon, cream cheese, and cucumber for a mild, satisfying roll that even sushi newcomers love. It is an easy, approachable pick when you are putting together a sushi platter near me.",
          "We roll it to order with salmon delivered regularly and prepared fresh at the bar. The richness of the cream cheese balances the clean flavor of the salmon for a roll that is comforting and crowd pleasing. The Philly roll is a guest favorite at our Frisco location and at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "What is in a Philadelphia roll?",
              "a": "A Philadelphia roll is made with salmon, cream cheese, and cucumber. It is mild and creamy, a favorite among guests who are new to sushi."
          },
          {
              "q": "Is the Philly roll cooked or raw?",
              "a": "The Philly roll uses fresh salmon. If you prefer a fully cooked option, ask your server for recommendations from our roll selection."
          },
          {
              "q": "Is the Philadelphia roll good for beginners?",
              "a": "Yes. Its creamy, familiar flavors make it one of the most approachable rolls for first time sushi eaters."
          }
      ]
  },
  "/frisco/sushi-rolls/rainbow-roll": {
      "heading": "Rainbow Roll at Jinbeh Frisco",
      "paragraphs": [
          "Want a rainbow roll in Frisco or fancy sushi near me that samples it all? Jinbeh's rainbow roll layers an assortment of fresh sliced fish over a California roll base, giving you several flavors and a colorful, ribbon like top in one order. It is a beautiful, variety packed choice for guests seeking the best sushi near me.",
          "Because it is finished with a spread of sashimi grade fish cut to order, the rainbow roll showcases the freshness and precise slicing our sushi chefs are known for. It makes a stunning centerpiece for a sushi platter near me, and the same roll is prepared fresh at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "What is a rainbow roll?",
              "a": "A rainbow roll is a California roll topped with an assortment of fresh sliced fish, creating a colorful, varied bite in every piece."
          },
          {
              "q": "Why is it called a rainbow roll?",
              "a": "The name comes from the colorful layers of different fish arranged across the top, which look like a rainbow."
          },
          {
              "q": "Is the rainbow roll good for sharing?",
              "a": "Yes. Its variety and presentation make it a popular choice to share and a great way to taste several types of fish at once."
          }
      ]
  },
  "/frisco/sushi-rolls/shrimp-tempura-roll": {
      "heading": "Shrimp Tempura Roll at Jinbeh Frisco",
      "paragraphs": [
          "Looking for a shrimp tempura roll in Frisco or the best sushi near me that is fully cooked? Jinbeh's shrimp tempura roll wraps crispy, golden fried shrimp with fresh fillings for a warm, crunchy, satisfying bite. It is a go to for guests who prefer cooked sushi and a reliable pick for any sushi platter near me.",
          "We fry the shrimp to order so the tempura stays light and crisp, then roll it with vegetables and seasoned rice at the bar. The contrast of crunch and creaminess makes it a family favorite. Order it at our Frisco location or enjoy the same roll at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "What is a shrimp tempura roll?",
              "a": "It is a roll made with crispy fried shrimp tempura, vegetables, and seasoned rice. It is fully cooked, warm, and crunchy."
          },
          {
              "q": "Is the shrimp tempura roll good for people who do not eat raw fish?",
              "a": "Yes. Since the shrimp is fried, it is one of our most popular fully cooked rolls for guests who prefer no raw fish."
          },
          {
              "q": "Is the shrimp tempura roll kid friendly?",
              "a": "Absolutely. Its crispy texture and mild flavor make it a favorite among younger guests."
          }
      ]
  },
  "/frisco/sushi-rolls/spicy-tuna-roll": {
      "heading": "Spicy Tuna Roll at Jinbeh Frisco",
      "paragraphs": [
          "Searching for a spicy tuna roll in Frisco or the best sushi near me with a little heat? Jinbeh's spicy tuna roll blends fresh ahi tuna with a creamy spicy mayo for a bold, balanced bite that fans of bigger flavor reach for again and again. It is a staple on any well rounded sushi platter near me.",
          "We make it to order with tuna delivered regularly and chopped fresh at the bar, so the flavor stays clean and the heat stays balanced. It pairs well with a milder roll or a few pieces of nigiri. The spicy tuna roll is a guest favorite at our Frisco location and at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "What is in a spicy tuna roll?",
              "a": "A spicy tuna roll combines fresh tuna with a creamy spicy mayo and seasoned rice. It offers a balanced kick of heat without overpowering the fish."
          },
          {
              "q": "How spicy is the spicy tuna roll?",
              "a": "It has a moderate, balanced heat from spicy mayo. Let your server know if you would like it milder or with extra spice."
          },
          {
              "q": "Is the tuna fresh?",
              "a": "Yes. Our tuna is delivered regularly and prepared to order by our sushi chefs at the bar."
          }
      ]
  },
  "/frisco/sushi-rolls/spider-roll": {
      "heading": "Spider Roll at Jinbeh Frisco",
      "paragraphs": [
          "Craving a spider roll in Frisco or fancy sushi near me with real crunch? Jinbeh's spider roll features crispy soft shell crab fried golden and rolled with fresh fillings, its legs peeking out in the signature presentation that earned the roll its name. It is a flavorful, texture rich choice for the best sushi near me.",
          "We fry the soft shell crab to order so it stays crisp, then roll it at the bar with vegetables and seasoned rice. The result is savory, crunchy, and satisfying, a standout for any sushi platter near me. Find the spider roll at our Frisco location and at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "What is a spider roll?",
              "a": "A spider roll is made with crispy fried soft shell crab and fresh fillings. The crab legs extending from the roll give it its spider like look."
          },
          {
              "q": "Is the spider roll fully cooked?",
              "a": "Yes. The soft shell crab is fried, making the spider roll a great choice for guests who prefer cooked sushi."
          },
          {
              "q": "What does the spider roll taste like?",
              "a": "It is savory and crunchy, with the rich flavor of soft shell crab balanced by seasoned rice and fresh vegetables."
          }
      ]
  },
  "/frisco/sushi-rolls/tiger-roll": {
      "heading": "Tiger Roll at Jinbeh Frisco",
      "paragraphs": [
          "Looking for a tiger roll in Frisco or fancy sushi near me that brings together the best of two worlds? Jinbeh's tiger roll pairs crispy shrimp tempura with fresh spicy tuna for a roll that is crunchy, bold, and deeply satisfying. It is a favorite for guests who want the best sushi near me to deliver both texture and heat.",
          "Each tiger roll is built to order with shrimp fried crisp and tuna delivered regularly and prepared fresh at the bar. The combination of warm crunch and cool spice makes it a memorable centerpiece for a sushi platter near me. Enjoy it at our Frisco location or at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "What is a tiger roll?",
              "a": "A tiger roll combines crispy shrimp tempura with spicy tuna, blending crunch and a touch of heat in one roll."
          },
          {
              "q": "Is the tiger roll spicy?",
              "a": "It has a moderate, balanced heat from the spicy tuna. Let your server know if you prefer it milder."
          },
          {
              "q": "What makes the tiger roll popular?",
              "a": "Guests love the contrast of warm, crispy shrimp tempura and cool, spicy tuna in a single bite."
          }
      ]
  },
  "/frisco/sushi-rolls/vegas-roll": {
      "heading": "Vegas Roll at Jinbeh Frisco",
      "paragraphs": [
          "Searching for a Vegas roll in Frisco or fancy sushi near me with a fried finish? Jinbeh's Vegas roll is deep fried until golden, filled with salmon and a touch of jalapeno for a warm, crispy roll with gentle heat. It is a rich, indulgent choice for guests who love the best sushi near me with bold texture.",
          "We fry it to order so the outside stays crisp while the salmon inside turns warm and tender, with the jalapeno adding a fresh lift. It is a satisfying standout on a sushi platter near me. Order the Vegas roll at our Frisco location or find it at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "What is a Vegas roll?",
              "a": "A Vegas roll is a deep fried sushi roll, typically filled with salmon and jalapeno, served warm and crispy on the outside."
          },
          {
              "q": "Is the Vegas roll spicy?",
              "a": "It has a mild, fresh heat from jalapeno that balances the richness of the warm salmon. Ask your server if you prefer it milder."
          },
          {
              "q": "Is the Vegas roll fully cooked?",
              "a": "Yes. Because it is deep fried, the Vegas roll is a popular choice for guests who prefer cooked sushi."
          }
      ]
  },
  "/frisco/sushi-rolls/volcano-roll": {
      "heading": "Volcano Roll at Jinbeh Frisco",
      "paragraphs": [
          "Want a volcano roll in Frisco or fancy sushi near me that arrives warm and bubbling? Jinbeh's volcano roll is baked with a spicy seafood topping that erupts over the roll like lava, delivering a creamy, savory, lightly spicy bite. It is a comforting, crowd pleasing pick for guests after the best sushi near me with a twist.",
          "We bake the seafood topping to order so it stays warm and rich over fresh fillings rolled at the bar. The result is indulgent and satisfying, a favorite for a shared sushi platter near me. The volcano roll is made fresh at our Frisco location and at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "What is a volcano roll?",
              "a": "A volcano roll is topped with a warm, baked spicy seafood mixture that spills over the roll like lava, giving it a creamy, savory flavor."
          },
          {
              "q": "Is the volcano roll served warm?",
              "a": "Yes. The baked seafood topping is served warm over the roll, which is part of what makes it so popular."
          },
          {
              "q": "How spicy is the volcano roll?",
              "a": "It has a gentle, creamy heat. Let your server know if you would like it spicier or milder."
          }
      ]
  },
  "/frisco/sushi-rolls/yellowtail-jalapeno": {
      "heading": "Yellowtail Jalapeno Roll at Jinbeh Frisco",
      "paragraphs": [
          "Looking for a yellowtail jalapeno roll in Frisco or fancy sushi near me that is fresh and lively? Jinbeh's hamachi and jalapeno roll pairs buttery yellowtail with crisp slices of jalapeno for a clean, bright bite with a touch of heat. It is a refined favorite among guests chasing the best sushi near me.",
          "We slice the yellowtail to order from fish delivered regularly, letting its silky texture shine against the fresh jalapeno. The balance of rich fish and gentle spice makes it a standout on any sushi platter near me. Find the same roll at our Frisco location and at Jinbeh Lewisville."
      ],
      "faqs": [
          {
              "q": "What is a yellowtail jalapeno roll?",
              "a": "It pairs buttery yellowtail, also called hamachi, with fresh slices of jalapeno for a clean roll with a gentle kick of heat."
          },
          {
              "q": "How spicy is the yellowtail jalapeno roll?",
              "a": "The heat is light and fresh, coming from the jalapeno, and balances the rich, silky yellowtail nicely."
          },
          {
              "q": "Is the yellowtail fresh?",
              "a": "Yes. Our yellowtail is delivered regularly and sliced to order by our sushi chefs at the bar."
          }
      ]
  },
  "/lewisville/appetizers/edamame": {
      "heading": "Edamame at Jinbeh Lewisville",
      "paragraphs": [
          "Looking for edamame in Lewisville or a light, healthy starter among japanese appetizers in Lewisville? Jinbeh's edamame is steamed and lightly salted, served warm so the whole table can share while the hibachi chef heats the grill. These plant based soybeans are a simple, wholesome way to begin a sushi or hibachi dinner.",
          "Edamame has been a guest favorite at Jinbeh since 1988, and it is one of the easiest sushi appetizers to love at any age. If you are searching edamame near me on the Lewisville side of town, ours pairs naturally with sake, beer, or a soft drink. Build your spread with gyoza or a roll from the bar."
      ],
      "faqs": [
          {
              "q": "Does Jinbeh Lewisville serve edamame?",
              "a": "Yes. Our edamame is steamed fresh and lightly salted, a simple and satisfying way to start any hibachi or sushi meal."
          },
          {
              "q": "Is edamame healthy?",
              "a": "Edamame is a plant based source of protein and fiber, making it a light, nutritious appetizer the whole family can enjoy."
          },
          {
              "q": "Is edamame good for kids?",
              "a": "Yes. Kids love popping the warm beans from their pods, and the mild, lightly salted flavor is a hit at the table."
          }
      ]
  },
  "/lewisville/appetizers/gyoza": {
      "heading": "Gyoza Dumplings at Jinbeh Lewisville",
      "paragraphs": [
          "Craving gyoza in Lewisville or savory japanese appetizers in Lewisville to share? Jinbeh's gyoza are pan fried dumplings, crisp and golden on the bottom with a tender, savory pork and vegetable filling. Served with our house dipping sauce, they are one of the most reordered sushi appetizers at our Lewisville location.",
          "Also known as potstickers, our gyoza are cooked to order so the edges stay crisp and the filling stays juicy. If you are looking for gyoza near me, they pair beautifully with edamame, a roll, or a cold beer at the bar. Jinbeh has been perfecting these flavors since 1988."
      ],
      "faqs": [
          {
              "q": "What are gyoza?",
              "a": "Gyoza are pan fried Japanese dumplings with a savory pork and vegetable filling, crisp on the bottom and tender on top, served with a dipping sauce."
          },
          {
              "q": "Are gyoza and potstickers the same?",
              "a": "Yes. Gyoza is the Japanese name for these pan fried dumplings, which are also commonly called potstickers."
          },
          {
              "q": "What do gyoza pair well with?",
              "a": "Gyoza pair nicely with edamame, sushi rolls, or a sake or beer at the bar as part of a shared appetizer spread."
          }
      ]
  },
  "/lewisville/appetizers/seared-tuna": {
      "heading": "Seared Ahi Tuna at Jinbeh Lewisville",
      "paragraphs": [
          "Searching for seared ahi tuna in Lewisville or refined japanese appetizers in Lewisville? Jinbeh's seared ahi is pepper crusted and quickly seared so the outside is warm and savory while the center stays cool and rare. It is an elegant, protein rich starter and one of our most loved sushi appetizers.",
          "We prepare it with tuna delivered regularly and sliced to order at the sushi bar, so each piece is fresh and clean tasting. If you are after seared tuna near me, it makes a sophisticated opener before hibachi or sushi. Enjoy the same dish at our Frisco location too."
      ],
      "faqs": [
          {
              "q": "What is seared ahi tuna?",
              "a": "Seared ahi tuna is fresh tuna crusted with pepper and quickly seared, leaving the outside warm and the center cool and rare."
          },
          {
              "q": "Is seared tuna raw in the middle?",
              "a": "The center is left rare, which keeps the tuna tender and clean tasting. The outside is seared for flavor and texture."
          },
          {
              "q": "How fresh is the tuna?",
              "a": "Our tuna is delivered regularly and prepared to order by our sushi chefs, so it is fresh and carefully sliced."
          }
      ]
  },
  "/lewisville/appetizers/soft-shell-crab": {
      "heading": "Soft Shell Crab at Jinbeh Lewisville",
      "paragraphs": [
          "Looking for soft shell crab in Lewisville or standout japanese appetizers in Lewisville? Jinbeh's soft shell crab is fried whole until crisp and golden, so you enjoy the entire crab in every savory, crunchy bite. It is a rich, satisfying starter and a memorable choice among our sushi appetizers.",
          "We fry it to order so the shell stays light and crisp, served with a dipping sauce that complements its sweet, briny flavor. If you have been searching soft shell crab near me, it is a treat worth ordering before sushi or hibachi. The same dish is served fresh at our Frisco location."
      ],
      "faqs": [
          {
              "q": "What is soft shell crab?",
              "a": "Soft shell crab is crab harvested after it molts its hard shell, so the entire crab can be fried and eaten, shell and all."
          },
          {
              "q": "Do you eat the whole soft shell crab?",
              "a": "Yes. Because the shell is soft, the whole crab is fried crisp and eaten, giving it a rich, crunchy texture."
          },
          {
              "q": "How is the soft shell crab prepared?",
              "a": "It is fried to order until golden and crisp, then served with a dipping sauce that highlights its sweet, briny flavor."
          }
      ]
  },
  "/lewisville/appetizers/tempura": {
      "heading": "Shrimp Tempura at Jinbeh Lewisville",
      "paragraphs": [
          "Craving shrimp tempura in Lewisville or crispy japanese appetizers in Lewisville? Jinbeh's shrimp tempura features plump shrimp dipped in a light batter and fried until golden and airy. It is a warm, crunchy crowd pleaser and one of the most popular sushi appetizers for families at our Lewisville location.",
          "We fry the tempura to order so the coating stays delicate and crisp, served with a dipping sauce that brings it all together. If you are searching tempura near me, it is an easy favorite for kids and adults alike. Pair it with edamame or a roll for a fuller appetizer spread."
      ],
      "faqs": [
          {
              "q": "What is shrimp tempura?",
              "a": "Shrimp tempura is shrimp coated in a light batter and fried until golden and crisp, served with a dipping sauce."
          },
          {
              "q": "Is shrimp tempura kid friendly?",
              "a": "Yes. Its crispy texture and mild flavor make it one of the most kid friendly appetizers on the menu."
          },
          {
              "q": "What does shrimp tempura pair with?",
              "a": "It pairs well with edamame, sushi rolls, or hibachi as a warm, crunchy start to the meal."
          }
      ]
  },
  "/lewisville/appetizers/tuna-tartare": {
      "heading": "Tuna Tartare at Jinbeh Lewisville",
      "paragraphs": [
          "Searching for tuna tartare in Lewisville or elegant japanese appetizers in Lewisville? Jinbeh's tuna tartare features fresh diced ahi tossed with avocado and a bright ponzu, layered into a clean, refreshing starter. It is a light, vibrant choice and a refined favorite among our sushi appetizers.",
          "We dice the tuna to order from fish delivered regularly, so the flavor stays clean and the texture stays silky. If you are after tuna tartare near me, it is a beautiful opener before sushi or hibachi. The same fresh preparation is served at our Frisco location."
      ],
      "faqs": [
          {
              "q": "What is tuna tartare?",
              "a": "Tuna tartare is fresh diced ahi tuna tossed with avocado and ponzu, served chilled as a light, refreshing appetizer."
          },
          {
              "q": "Is tuna tartare raw?",
              "a": "Yes. It features fresh raw tuna, diced and dressed so the clean flavor of the fish comes through."
          },
          {
              "q": "How fresh is the tuna in the tartare?",
              "a": "Our tuna is delivered regularly and diced to order at the sushi bar, so it is fresh and carefully prepared."
          }
      ]
  },
  "/lewisville/cocktails/jinbeh-punch": {
      "heading": "Jinbeh Punch at Our Lewisville Bar",
      "paragraphs": [
          "Looking for the Jinbeh Punch in Lewisville or fun japanese cocktails near you? Our signature Jinbeh Punch is a bright, tropical, fruit forward pour that has long been a bar favorite. It is easy to sip and a festive way to kick off a hibachi show or a sushi dinner with friends.",
          "Our Lewisville bar also pours a sake set, premium sake near me, and Japanese inspired cocktails. Join us for sushi happy hour, Monday through Friday from 5:00 to 6:30 PM, with 4 dollar Japanese draft beer, 5 dollar small hot sake, and 6 dollar wine. The same warm welcome waits at Jinbeh Frisco."
      ],
      "faqs": [
          {
              "q": "What is in the Jinbeh Punch?",
              "a": "The Jinbeh Punch is a tropical, fruit forward cocktail crafted at our bar. It is sweet, refreshing, and a popular pairing with hibachi or sushi."
          },
          {
              "q": "Does Jinbeh Lewisville have a happy hour?",
              "a": "Yes. Sushi happy hour runs Monday through Friday from 5:00 to 6:30 PM, with 4 dollar Japanese draft beer, 5 dollar small hot sake, and 6 dollar wine."
          },
          {
              "q": "Can I order a sake set at the Lewisville bar?",
              "a": "Yes. Our bar offers a sake set along with a curated selection of sake, from warm house pours to premium bottles."
          }
      ]
  },
  "/lewisville/cocktails/lychee-martini": {
      "heading": "Lychee Martini at Jinbeh Lewisville",
      "paragraphs": [
          "If you are searching for a lychee martini in Lewisville or the best japanese cocktails nearby, Jinbeh's lychee martini is a fragrant, lightly sweet pour built around the floral flavor of lychee. It is elegant and refreshing, a favorite for date nights and celebrations at our Lewisville bar.",
          "Sip it alongside fresh sushi or during sushi happy hour, Monday through Friday from 5:00 to 6:30 PM, when Japanese draft beer is 4 dollars, small hot sake is 5 dollars, and wine is 6 dollars. Ask about our sake set and other sake near me options. The same cocktail pours at Jinbeh Frisco."
      ],
      "faqs": [
          {
              "q": "What does the lychee martini taste like?",
              "a": "It is floral, lightly sweet, and refreshing, built around the delicate flavor of lychee fruit, and pairs beautifully with sushi."
          },
          {
              "q": "Is the lychee martini good for a date night?",
              "a": "Yes. Its elegant, refreshing flavor makes it a popular choice for date nights and celebrations at the bar."
          },
          {
              "q": "Does the Lewisville bar offer a sake set?",
              "a": "Yes. We offer a sake set and a curated sake selection, plus Japanese cocktails, including during happy hour."
          }
      ]
  },
};

export default seoContent;
