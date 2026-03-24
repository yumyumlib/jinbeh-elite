import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Order Sushi & Hibachi Online | Jinbeh Japanese Restaurant | Frisco & Lewisville TX",
    description:
        "Order Jinbeh's fresh sushi rolls, hibachi favorites, and Japanese appetizers for delivery or pickup. Available via Uber Eats, Grubhub, or call direct. Frisco & Lewisville, TX.",
    keywords: [
        "order online",
        "japanese food delivery",
        "sushi delivery frisco",
        "hibachi delivery",
        "japanese restaurant delivery",
        "uber eats jinbeh",
        "ubereats jinbeh",
        "order sushi online",
        "japanese takeout near me",
    ],
    openGraph: {
        title: "Order Online | Jinbeh Japanese Restaurant",
        description:
            "Fresh hibachi, sushi, and Japanese cuisine delivered to your door. Order from Frisco or Lewisville via Uber Eats, Grubhub, or phone.",
        url: "https://jinbeh.com/order-online",
        type: "website",
    },
    alternates: {
        canonical: "https://jinbeh.com/order-online",
    },
};

export default function OrderOnlineLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
