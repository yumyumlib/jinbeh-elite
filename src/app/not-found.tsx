import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-warm-ivory flex items-center justify-center px-6">
            <div className="text-center max-w-xl">
                {/* Logo */}
                <div className="mb-8">
                    <Image
                        src="/images/logos/jinbehlogo-black.svg"
                        alt="Jinbeh"
                        width={120}
                        height={72}
                        className="mx-auto"
                    />
                </div>

                {/* 404 Display */}
                <div className="relative mb-8">
                    <span className="text-[150px] md:text-[200px] font-heading font-bold text-charcoal/10 leading-none">
                        404
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl">🍣</span>
                    </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                    Page Not Found
                </h1>
                <p className="text-lg text-charcoal/70 mb-8">
                    Oops! This page seems to have rolled away like a runaway sushi roll.
                    Let&apos;s get you back to the table.
                </p>

                {/* Navigation Options */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Link
                        href="/"
                        className="btn btn-primary px-8 py-3 text-lg font-semibold rounded-xl"
                    >
                        Back to Home
                    </Link>
                    <Link
                        href="/frisco#reserve"
                        className="btn bg-charcoal text-white hover:bg-charcoal-light px-8 py-3 text-lg font-semibold rounded-xl transition-colors"
                    >
                        Make a Reservation
                    </Link>
                </div>

                {/* Quick Links */}
                <div className="border-t border-charcoal/10 pt-8">
                    <p className="text-sm text-charcoal/80 mb-4">Looking for something specific?</p>
                    <div className="flex flex-wrap gap-4 justify-center text-sm">
                        <Link href="/frisco" className="text-accent-red hover:underline">
                            Frisco Location
                        </Link>
                        <Link href="/lewisville" className="text-accent-red hover:underline">
                            Lewisville Location
                        </Link>
                        <Link href="/frisco/menu" className="text-accent-red hover:underline">
                            Menu
                        </Link>
                        <Link href="/blog" className="text-accent-red hover:underline">
                            Blog
                        </Link>
                        <Link href="/happy-hour" className="text-accent-red hover:underline">
                            Happy Hour
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
