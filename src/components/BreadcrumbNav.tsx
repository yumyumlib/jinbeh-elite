import Link from "next/link";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbNavProps {
    items: BreadcrumbItem[];
}

/**
 * Visible breadcrumb navigation bar.
 * Renders a horizontal trail with chevron separators.
 * Complements the BreadcrumbList JSON-LD schema with a visual UI.
 */
export default function BreadcrumbNav({ items }: BreadcrumbNavProps) {
    return (
        <nav
            aria-label="Breadcrumb"
            className="text-sm text-charcoal/60 py-3 px-4 lg:px-0"
        >
            <ol className="flex flex-wrap items-center gap-1">
                <li className="flex items-center">
                    <Link
                        href="/"
                        className="hover:text-accent-red transition-colors"
                    >
                        Home
                    </Link>
                </li>
                {items.map((item, i) => (
                    <li key={i} className="flex items-center gap-1">
                        <svg
                            className="w-3 h-3 text-charcoal/30 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                        {item.href ? (
                            <Link
                                href={item.href}
                                className="hover:text-accent-red transition-colors"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-charcoal/80 font-medium">
                                {item.label}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
