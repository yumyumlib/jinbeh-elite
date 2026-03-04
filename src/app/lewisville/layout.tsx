import { LocalBusinessSchemaLewisville } from "@/components/schema/AllSchemas";

export default function LewisvilleLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <LocalBusinessSchemaLewisville />
            {children}
        </>
    );
}
