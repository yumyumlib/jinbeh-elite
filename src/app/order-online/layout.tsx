import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Order Online | Jinbeh Japanese Restaurant, Hibachi & Sushi Delivery",
    description: "Order Japanese food online from Jinbeh: hibachi, sushi, sashimi, and Japanese favorites delivered fresh in Frisco and Lewisville.",
    alternates: {
        canonical: "https://jinbeh.com/order-online",
    },
    openGraph: {
        title: "Order Online | Jinbeh Japanese Restaurant",
        description: "Order Japanese food online from Jinbeh, hibachi, sushi, and more delivered in Frisco and Lewisville.",
        images: [{
            url: "https://jinbeh.com/images/photoshoot/sushi-tower.jpg",
            width: 1200,
            height: 630,
            alt: "Jinbeh Order Online — Sushi and Hibachi Delivery",
        }],
        url: "https://jinbeh.com/order-online",
    },
};

export default function OrderOnlineLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
