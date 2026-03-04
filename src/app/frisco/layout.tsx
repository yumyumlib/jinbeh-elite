import { LocalBusinessSchemaFrisco } from "@/components/schema/AllSchemas";

export default function FriscoLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <LocalBusinessSchemaFrisco />
            {children}
        </>
    );
}
