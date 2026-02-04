'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

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
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure we're mounted (for SSR safety)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';

      // Hide loading indicator after a brief delay
      const loadTimer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => {
        clearTimeout(loadTimer);
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
      setIsLoading(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const buttonVariants = {
    primary: 'btn btn-primary btn-shimmer',
    secondary: 'btn btn-secondary',
    outline: 'btn btn-outline border-white text-white hover:bg-white hover:text-charcoal',
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`${buttonVariants[variant]} ${className}`}
        type="button"
      >
        <svg
          className="w-5 h-5 inline-block mr-2"
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
      </button>

      {/* Modal Overlay - Portaled to document.body */}
      {isMounted && isOpen && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm animate-fade-in"
          onClick={handleClose}
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl animate-scale-in overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-deep-indigo to-cedar-brown p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-heading font-bold mb-1">
                    Reserve Your Table
                  </h2>
                  <p className="text-white/90 text-sm">
                    {location === 'frisco' ? 'Jinbeh Frisco' : 'Jinbeh Lewisville'} • Dinner and a Show Awaits
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Close reservation"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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
            </div>

            {/* Modal Body - OpenTable Widget Mount Point */}
            <div className="relative bg-warm-ivory min-h-[600px] flex items-start justify-center p-6">
              {/* Loading State */}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-warm-ivory z-10">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-soft-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-charcoal/70">Loading reservation options...</p>
                  </div>
                </div>
              )}

              {/* OpenTable Widget iframe */}
              <iframe
                src={`https://www.opentable.com/restref/client/?rid=${restaurantId}&lang=en-US&ot_source=Restaurant%20website`}
                className="w-full h-[600px] border-0 rounded-lg"
                title="OpenTable Reservation Widget"
                allow="payment"
              />
            </div>

            {/* Modal Footer */}
            <div className="bg-warm-ivory border-t border-warm-ivory-dark p-4 text-center">
              <p className="text-sm text-charcoal/70">
                Reservations powered by OpenTable • Need help?{' '}
                <a
                  href={`tel:${location === 'frisco' ? '2146191200' : '2144882224'}`}
                  className="text-accent-red hover:underline font-medium"
                >
                  Call us at {location === 'frisco' ? '(214) 619-1200' : '(214) 488-2224'}
                </a>
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
