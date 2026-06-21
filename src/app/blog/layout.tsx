import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSeoBoost from "@/components/BlogSeoBoost";

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            {children}
            <BlogSeoBoost />
            <Footer />
        </>
    );
}
