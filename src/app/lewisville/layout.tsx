// NOTE: The Lewisville LocalBusiness/Restaurant JSON-LD (@id .../lewisville#restaurant,
// which carries aggregateRating + review[]) is rendered globally by the ROOT
// layout (src/app/layout.tsx → <LocalBusinessSchemaLewisville />) on every page.
// This nested layout must NOT render it a second time — doing so duplicated the
// node on the /lewisville route and made Google report "Review has multiple aggregate
// ratings", disqualifying review-snippet rich results. Keep this a pass-through.

export default function LewisvilleLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
