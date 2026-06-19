// NOTE: The Frisco LocalBusiness/Restaurant JSON-LD (@id .../frisco#restaurant,
// which carries aggregateRating + review[]) is rendered globally by the ROOT
// layout (src/app/layout.tsx → <LocalBusinessSchemaFrisco />) on every page.
// This nested layout must NOT render it a second time — doing so duplicated the
// node on the /frisco route and made Google report "Review has multiple aggregate
// ratings", disqualifying review-snippet rich results. Keep this a pass-through.

export default function FriscoLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
