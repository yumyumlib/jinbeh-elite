/**
 * Schema utilities — generate structured data from centralized location data.
 * This eliminates hardcoded hours duplication across 17+ pages.
 */
import locationsData from "@/data/locations.json";

type LocationId = "frisco" | "lewisville";

/** Generate openingHoursSpecification for a location's schema.org markup */
export function getOpeningHoursSpecification(locationId: LocationId) {
    const loc = locationsData.locations[locationId];
    const { hours } = loc;

    return [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: hours.lunch.weekday.open,
            closes: hours.lunch.weekday.close,
        },
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday", "Sunday"],
            opens: hours.lunch.weekend.open,
            closes: hours.lunch.weekend.close,
        },
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
            opens: hours.dinner.sunThurs.open,
            closes: hours.dinner.sunThurs.close,
        },
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Friday", "Saturday"],
            opens: hours.dinner.friSat.open,
            closes: hours.dinner.friSat.close,
        },
    ];
}

/** Generate a full Restaurant schema for a location */
export function getRestaurantSchema(locationId: LocationId) {
    const loc = locationsData.locations[locationId];

    return {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        name: loc.fullName,
        image: `https://jinbeh.com/images/locations/${locationId}-exterior.jpg`,
        url: `https://jinbeh.com/${locationId}`,
        telephone: loc.phone,
        address: {
            "@type": "PostalAddress",
            streetAddress: `${loc.address.street}${loc.address.suite ? ` ${loc.address.suite}` : ""}`,
            addressLocality: loc.address.city,
            addressRegion: loc.address.state,
            postalCode: loc.address.zip,
            addressCountry: "US",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: loc.geo.latitude,
            longitude: loc.geo.longitude,
        },
        servesCuisine: locationsData.business.cuisine,
        priceRange: locationsData.business.priceRange,
        openingHoursSpecification: getOpeningHoursSpecification(locationId),
        acceptsReservations: "True",
    };
}

/** Get display hours for a location */
export function getDisplayHours(locationId: LocationId) {
    const loc = locationsData.locations[locationId];
    return {
        lunch: {
            weekday: loc.hours.lunch.weekday.display,
            weekend: loc.hours.lunch.weekend.display,
        },
        dinner: {
            sunThurs: loc.hours.dinner.sunThurs.display,
            friSat: loc.hours.dinner.friSat.display,
        },
    };
}
