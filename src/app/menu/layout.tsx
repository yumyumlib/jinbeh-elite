import { MenuSchema } from "@/components/schema/AllSchemas";

export default function MenuLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <MenuSchema />
            {children}
        </>
    );
}
