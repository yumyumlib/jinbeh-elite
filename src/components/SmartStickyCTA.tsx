"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import LocationPicker, { LOCATION_DETAILS, type LocationKey } from "./LocationPicker";
import { fireConversion } from "@/lib/gtag";

const STORAGE_KEY = "preferredLocation";

function detectLocationFromPath(pathname: string | null): LocationKey | null {
  if (!pathname) return null;
  if (pathname === "/frisco" || pathname.startsWith("/frisco/")) return "frisco";
  if (pathname === "/lewisville" || pathname.startsWith("/lewisville/")) return "lewisville";
  return null;
}

function readPreferred(): LocationKey | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "frisco" || v === "lewisville" ? v : null;
  } catch {
    return null;
  }
}

function writePreferred(loc: LocationKey) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, loc);
  } catch {
    /* ignore storage errors (private mode, quota) */
  }
}

export default function SmartStickyCTA() {
  const pathname = usePathname();
  const routeLocation = detectLocationFromPath(pathname);

  const [preferred, setPreferred] = useState<LocationKey | null>(null);
  const [pickerIntent, setPickerIntent] = useState<"call" | "reserve" | null>(null);

  // Hydrate preferred from localStorage on mount
  useEffect(() => {
    setPreferred(readPreferred());
  }, []);

  const handleSelect = useCallback((loc: LocationKey) => {
    writePreferred(loc);
    setPreferred(loc);
  }, []);

  // The location used for direct CTAs:
  //  1. If we're on a location-specific route, use that.
  //  2. Otherwise, if the user has a saved preference, use it (but still expose "change" affordance).
  //  3. Otherwise, no preset → tap opens picker.
  const presetLocation = routeLocation ?? preferred;
  const onSharedRoute = routeLocation === null;
  const loc = presetLocation ? LOCATION_DETAILS[presetLocation] : null;

  const openPicker = (intent: "call" | "reserve") => setPickerIntent(intent);
  const closePicker = () => setPickerIntent(null);

  return (
    <>
      {/* Sticky bar — visible on mobile/tablet, hidden on xl+ where header CTAs are visible */}
      <div className="xl:hidden fixed bottom-0 left-0 right-0 z-40 bg-charcoal text-white border-t border-white/10 shadow-2xl shadow-black/40 pb-[env(safe-area-inset-bottom)]">
        {/* "Change location" affordance — only on shared routes when a preference is saved */}
        {onSharedRoute && preferred && (
          <div className="flex items-center justify-between px-4 pt-2 pb-1 text-[11px]">
            <span className="text-white/60">
              Showing <span className="text-soft-gold font-semibold">{LOCATION_DETAILS[preferred].label}</span>
            </span>
            <button
              type="button"
              onClick={() => openPicker("reserve")}
              className="text-white/70 hover:text-soft-gold underline underline-offset-2 decoration-white/30"
            >
              Change location
            </button>
          </div>
        )}

        <div className="grid grid-cols-2 gap-px bg-white/10">
          {/* Call */}
          {loc ? (
            <a
              href={loc.phoneTel}
              onClick={() => fireConversion("phone_call")}
              aria-label={`Call Jinbeh ${loc.label} at ${loc.phoneDisplay}`}
              className="flex items-center justify-center gap-2 min-h-[56px] bg-charcoal hover:bg-white/5 text-white font-semibold text-sm transition-colors"
            >
              <svg className="w-5 h-5 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          ) : (
            <button
              type="button"
              onClick={() => openPicker("call")}
              aria-label="Call us — pick a location"
              className="flex items-center justify-center gap-2 min-h-[56px] bg-charcoal hover:bg-white/5 text-white font-semibold text-sm transition-colors"
            >
              <svg className="w-5 h-5 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </button>
          )}

          {/* Reserve */}
          {loc ? (
            <a
              href={loc.reserveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => fireConversion("reservation")}
              aria-label={`Reserve a table at Jinbeh ${loc.label}`}
              className="flex items-center justify-center gap-2 min-h-[56px] bg-accent-red hover:bg-accent-red/90 text-white font-bold text-sm transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Reserve
            </a>
          ) : (
            <button
              type="button"
              onClick={() => openPicker("reserve")}
              aria-label="Reserve a table — pick a location"
              className="flex items-center justify-center gap-2 min-h-[56px] bg-accent-red hover:bg-accent-red/90 text-white font-bold text-sm transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Reserve
            </button>
          )}
        </div>
      </div>

      {/* Spacer so the sticky bar doesn't cover page content at the bottom of long pages */}
      <div className="xl:hidden h-[72px] pb-[env(safe-area-inset-bottom)]" aria-hidden="true" />

      {/* Bottom-sheet picker */}
      <LocationPicker
        open={pickerIntent !== null}
        intent={pickerIntent ?? "reserve"}
        onClose={closePicker}
        onSelect={handleSelect}
      />
    </>
  );
}
