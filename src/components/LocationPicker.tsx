"use client";

import { useEffect } from "react";

export type LocationKey = "frisco" | "lewisville";

interface LocationPickerProps {
  open: boolean;
  /** What the picker is asking the user to do — affects the primary CTA on each card. */
  intent: "call" | "reserve";
  onClose: () => void;
  /** Called when a location is selected so the parent can persist the preference. */
  onSelect?: (loc: LocationKey) => void;
}

const LOCATIONS = {
  frisco: {
    label: "Frisco",
    tagline: "Near Stonebriar Centre",
    phoneDisplay: "(214) 619-1200",
    phoneTel: "tel:2146191200",
    reserveUrl:
      "https://www.opentable.com/booking/restref/availability?rid=188458&lang=en-US",
    directionsUrl: "https://maps.google.com/?q=Jinbeh+Japanese+Restaurant+Frisco",
  },
  lewisville: {
    label: "Lewisville",
    tagline: "Easy access from I-35E",
    phoneDisplay: "(214) 488-2224",
    phoneTel: "tel:2144882224",
    reserveUrl:
      "https://www.opentable.com/booking/restref/availability?rid=188461&lang=en-US",
    directionsUrl:
      "https://maps.google.com/?q=Jinbeh+Japanese+Restaurant+Lewisville",
  },
} as const;

export default function LocationPicker({
  open,
  intent,
  onClose,
  onSelect,
}: LocationPickerProps) {
  // Lock body scroll while open and close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const handleSelect = (loc: LocationKey) => {
    onSelect?.(loc);
  };

  return (
    <div
      className={`fixed inset-0 z-[10000] xl:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close location picker"
        onClick={onClose}
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        tabIndex={open ? 0 : -1}
      />

      {/* Sheet */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="location-picker-title"
        className={`absolute bottom-0 left-0 right-0 bg-charcoal text-white rounded-t-3xl shadow-2xl transform transition-transform duration-300 ease-out pb-[max(1rem,env(safe-area-inset-bottom))] ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Drag handle */}
        <div className="pt-3 pb-1 flex justify-center">
          <div className="w-10 h-1 rounded-full bg-white/20" aria-hidden="true" />
        </div>

        {/* Header */}
        <div className="px-5 pt-3 pb-4 flex items-start justify-between">
          <div>
            <h2
              id="location-picker-title"
              className="text-xl font-heading font-bold"
            >
              Which location?
            </h2>
            <p className="text-white/60 text-sm mt-0.5">
              {intent === "call"
                ? "Pick a location to call."
                : "Pick a location to reserve."}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="-mr-1 -mt-1 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition-colors flex-shrink-0"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Two-column location cards */}
        <div className="px-5 pb-5 grid grid-cols-2 gap-3">
          {(Object.keys(LOCATIONS) as LocationKey[]).map((key) => {
            const loc = LOCATIONS[key];
            const isPrimary = intent === "reserve";
            return (
              <div
                key={key}
                className="bg-white/5 border border-white/10 rounded-2xl p-3 flex flex-col gap-2"
              >
                <div className="px-1">
                  <div className="flex items-center gap-1.5 text-base font-bold">
                    <span aria-hidden="true">📍</span>
                    {loc.label}
                  </div>
                  <p className="text-white/60 text-xs leading-tight mt-0.5">
                    {loc.tagline}
                  </p>
                </div>

                {/* Primary action — matches the parent intent (Reserve or Call) */}
                {isPrimary ? (
                  <a
                    href={loc.reserveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      handleSelect(key);
                      onClose();
                    }}
                    className="flex items-center justify-center gap-2 bg-accent-red hover:bg-accent-red/90 text-white px-3 min-h-[48px] rounded-xl font-semibold text-sm transition-colors shadow-lg"
                  >
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Reserve
                  </a>
                ) : (
                  <a
                    href={loc.phoneTel}
                    onClick={() => {
                      handleSelect(key);
                      onClose();
                    }}
                    className="flex items-center justify-center gap-2 bg-accent-red hover:bg-accent-red/90 text-white px-3 min-h-[48px] rounded-xl font-semibold text-sm transition-colors shadow-lg"
                  >
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    {loc.phoneDisplay}
                  </a>
                )}

                {/* Secondary action — the other CTA */}
                {isPrimary ? (
                  <a
                    href={loc.phoneTel}
                    onClick={() => {
                      handleSelect(key);
                      onClose();
                    }}
                    className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white px-3 min-h-[44px] rounded-xl font-medium text-xs transition-colors"
                  >
                    <svg
                      className="w-3.5 h-3.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    {loc.phoneDisplay}
                  </a>
                ) : (
                  <a
                    href={loc.reserveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      handleSelect(key);
                      onClose();
                    }}
                    className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white px-3 min-h-[44px] rounded-xl font-medium text-xs transition-colors"
                  >
                    <svg
                      className="w-3.5 h-3.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Reserve
                  </a>
                )}

                {/* Directions */}
                <a
                  href={loc.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleSelect(key)}
                  className="flex items-center justify-center gap-1.5 text-white/60 hover:text-soft-gold text-xs transition-colors py-1.5"
                >
                  <svg
                    className="w-3 h-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Get Directions
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const LOCATION_DETAILS = LOCATIONS;
