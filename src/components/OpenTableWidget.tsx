'use client';

import { useEffect, useState } from "react";
import { fireConversionAndOpen } from "@/lib/gtag";
import { buildAttributionQuery } from "@/lib/attribution";

interface OpenTableWidgetProps {
  restaurantId: string;
  location: 'frisco' | 'lewisville';
  className?: string;
  buttonText?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export default function OpenTableWidget({
  restaurantId,
  location,
  className = '',
  buttonText = 'Reserve Your Table',
  variant = 'primary',
}: OpenTableWidgetProps) {
  // URL building must NOT differ between SSR and the client's first render —
  // otherwise React hydration sees a mismatched <a href> and throws. So we
  // initialize state with the SSR-safe BASE URL (matches what the server
  // rendered exactly), then append Google Click ID + UTM params from
  // localStorage in a useEffect that runs AFTER hydration completes.
  //
  // We also tag a stable `ref` so OpenTable's analytics distinguish this
  // source from organic OpenTable search traffic. The `restref_origin` param
  // is a hint to OpenTable's source-attribution UI on their side.
  const baseUrl = `https://www.opentable.com/booking/restref/availability?rid=${restaurantId}&lang=en-US&ref=jinbeh-website&restref_origin=jinbeh-${location}`;
  const [openTableUrl, setOpenTableUrl] = useState(baseUrl);

  useEffect(() => {
    // Runs only on the client, after the component has mounted and hydration
    // has completed. Safe to read localStorage here.
    const attribution = buildAttributionQuery("&");
    if (attribution) {
      setOpenTableUrl(baseUrl + attribution);
    }
    // Intentionally NOT depending on baseUrl/restaurantId/location — those
    // are stable for the lifetime of a given widget instance on this site.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const buttonVariants = {
    primary: 'btn btn-primary btn-shimmer',
    secondary: 'btn btn-secondary',
    outline: 'btn btn-outline border-white text-white hover:bg-white hover:text-charcoal',
  };

  return (
    <a
      href={openTableUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        // Use the Click-mode pattern: fire conversion via gtag's event_callback,
        // then open OpenTable after the ping has been queued (or 1s, whichever
        // comes first). This prevents Safari/iOS from cancelling the in-flight
        // conversion ping when the browser opens the new tab. See gtag.ts.
        e.preventDefault();
        // Use currentTarget.href so any DOM-rewriting (AttributionCapture
        // adding gclid/utm params) is honored at click time.
        fireConversionAndOpen("reservation", e.currentTarget.href, true);
      }}
      aria-label="Link" className={`${buttonVariants[variant]} ${className} inline-flex items-center justify-center`}
    >
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      {buttonText}
    </a>
  );
}
