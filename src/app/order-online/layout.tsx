import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Order Online | Jinbeh Japanese Restaurant | Frisco & Lewisville TX",
    description:
        "Order authentic Japanese hibachi, sushi, and appetizers online from Jinbeh. Available for delivery via Uber Eats and Grubhub, or call to order directly from our Frisco and Lewisville locations.",
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
