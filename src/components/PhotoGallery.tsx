"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
  type?: "image" | "video";
}

interface PhotoGalleryProps {
  items: GalleryItem[];
  title?: string;
  subtitle?: string;
  columns?: 2 | 3 | 4;
}

export default function PhotoGallery({
  items,
  title,
  subtitle,
  columns = 3,
}: PhotoGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "unset";
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  };

  return (
    <>
      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {(title || subtitle) && (
            <div className="text-center mb-12">
              {title && (
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                  {subtitle}
                </p>
              )}
            </div>
          )}

          <div className={`grid ${gridCols[columns]} gap-4`}>
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative aspect-square overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-red focus:ring-offset-2"
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    muted
                    loop
                    playsInline
                    onMouseOver={(e) => (e.target as HTMLVideoElement).play()}
                    onMouseOut={(e) => (e.target as HTMLVideoElement).pause()}
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                      <svg className="w-5 h-5 text-charcoal ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
                {item.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm font-medium">{item.caption}</p>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Next image"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image/Video Container */}
          <div
            className="relative max-w-5xl max-h-[80vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {items[activeIndex].type === "video" ? (
              <video
                src={items[activeIndex].src}
                className="max-w-full max-h-[80vh] mx-auto rounded-lg"
                controls
                autoPlay
                loop
              />
            ) : (
              <Image
                src={items[activeIndex].src}
                alt={items[activeIndex].alt}
                width={1200}
                height={800}
                className="max-w-full max-h-[80vh] w-auto h-auto mx-auto rounded-lg object-contain"
              />
            )}
            {items[activeIndex].caption && (
              <p className="text-white text-center mt-4 text-lg">
                {items[activeIndex].caption}
              </p>
            )}
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {activeIndex + 1} / {items.length}
          </div>
        </div>
      )}
    </>
  );
}
