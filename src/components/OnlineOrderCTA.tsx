import Link from "next/link";

// "Order Online" module — matches the prominent ordering CTA every top competitor leads with.
// Primary button routes to /order-online (which holds the real, current platform links), names the
// delivery platforms, and gives the call-for-large-orders path. Brand palette via arbitrary hex.
export default function OnlineOrderCTA() {
  return (
    <section aria-label="Order online" className="bg-[#1E2A44] text-white py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-2xl sm:text-3xl mb-3">Order Jinbeh To Go</h2>
        <p className="text-white/85 leading-relaxed mb-6">
          Get hibachi and fresh sushi delivered or ready for pickup in Frisco and Lewisville.
          Order online in a few taps, or find us on DoorDash, Uber Eats, and Grubhub.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/order-online"
            className="inline-block bg-[#C1121F] text-white font-medium px-7 py-3 rounded-full hover:bg-[#a30f1a] transition">
            Order Online
          </Link>
          <Link href="/takeout"
            className="inline-block bg-white/10 border border-white/30 text-white font-medium px-7 py-3 rounded-full hover:bg-white/20 transition">
            Pickup &amp; To-Go
          </Link>
        </div>
        <p className="text-sm text-white/70 mt-5">
          Large order (15+ items)? Call Frisco <a className="underline" href="tel:2146191200">(214) 619-1200</a> or
          Lewisville <a className="underline" href="tel:2144882224">(214) 488-2224</a> for the best pricing.
        </p>
      </div>
    </section>
  );
}
