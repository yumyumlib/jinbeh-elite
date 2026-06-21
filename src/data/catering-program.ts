// Jinbeh Catering Program (from the internal Catering Order Form + Cheat Sheet, Apr 2026).
// NOTE: the program is not publicly launched yet. Per-person PRICES are stored here for launch
// but are NOT rendered on the live site until SHOW_PRICES is flipped to true (keeps the site's
// no-price policy until ordering/Shopify is live). Until then pages show structure + "Request a Quote".

export const SHOW_PRICES = false; // flip to true at launch (when catering.jinbeh.com ordering is live)

export const cateringContact = {
  phone: "(972) 731-0333",
  email: "catering@jinbeh.com",
  orderUrl: "https://catering.jinbeh.com",
};

export interface Protein { name: string; pricePerPerson: number; portion: string; note?: string }
export const proteins: Protein[] = [
  { name: "Vegetarian (Tofu & Vegetables)", pricePerPerson: 18, portion: "" },
  { name: "Chicken", pricePerPerson: 25, portion: "6 oz" },
  { name: "Shrimp", pricePerPerson: 28, portion: "5 oz" },
  { name: "Steak (N.Y. Strip)", pricePerPerson: 31, portion: "6 oz" },
];

export const includedWithEveryEntree = [
  "Steamed rice",
  "House salad with ginger dressing",
  "Hibachi vegetables",
  "Signature sauces",
];

export interface Upgrade { name: string; price: number; unit: string; description: string }
export const upgrades: Upgrade[] = [
  { name: "Fried Rice or Yakisoba Noodles", price: 5, unit: "per person", description: "Upgrade from steamed rice to our famous hibachi fried rice or yakisoba noodles." },
  { name: "Appetizer Sampler", price: 9, unit: "per person", description: "Edamame plus your choice of gyoza or crab rangoon, served on shared platters." },
  { name: "Sushi — Basic Collection", price: 10, unit: "per roll / person", description: "Even mix of California, Spicy Tuna, Shrimp Tempura, Spicy Crawfish, and Rainbow rolls." },
  { name: "Sushi — Premium Upgrade", price: 10, unit: "per roll / person (add-on)", description: "Upgrade rolls to a premium mix: Rainbow, Jinbeh Special, and Sunrise." },
];

export interface Beverage { name: string; price: number; size: string }
export const beverages: Beverage[] = [
  { name: "Ramune (Japanese Soda)", price: 4.0, size: "6.76 oz" },
  { name: "Coca-Cola / Diet Coke / Sprite", price: 2.5, size: "12 oz" },
  { name: "Iced Tea (Unsweetened)", price: 2.5, size: "12 oz" },
  { name: "Japanese Green Tea (Ito-En)", price: 3.5, size: "16 oz" },
  { name: "Bottled Water", price: 2.0, size: "16.9 oz" },
];

export const occasions = [
  "Corporate lunches & office catering",
  "Birthday & milestone celebrations",
  "Weddings & rehearsal dinners",
  "Holiday parties",
  "Graduations & team events",
];

export const deliveryRules = {
  fee: 35,
  freeOver: 800,
  radiusMiles: 10,
  minGuests: 10,
  minOrder: 250,
  leadTimeSmall: "2 business days (20 guests or fewer)",
  leadTimeLarge: "7 business days (21+ guests)",
  deposit: 150,
};

export const cateringTerms = [
  "Delivery within 10 miles of the Frisco or Lewisville location. $35 flat delivery fee; FREE delivery on orders $800+.",
  "Minimum order of about 10 guests. Larger orders need more lead time: 2 business days (≤20 guests) or 7 business days (21+).",
  "A $150 deposit is non-refundable. Cancellations more than 48 hours before delivery are refunded minus the deposit; orders are non-refundable within 48 hours.",
  "Our kitchen processes common allergens and cross-contact may occur. Please disclose all allergies. Consuming raw or undercooked seafood may increase risk of foodborne illness.",
  "Sushi should be consumed within 2 hours or refrigerated immediately.",
];
