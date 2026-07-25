"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/images/IMG_2662.JPG",
    badge: "Live Practice",
    title: "Teacher Training & Professional Development",
    subtitle: "Capacity-building workshops for educators across Nigeria",
  },
  {
    src: "/images/IMG_2674.JPG",
    badge: "CELL Leadership",
    title: "School Leadership & Capacity Development",
    subtitle: "Executive strategy sessions for principals and institutional leaders",
  },
  {
    src: "/images/IMG_2679.JPG",
    badge: "STUDY4SUCCESS",
    title: "Academic Excellence & Learner Coaching",
    subtitle: "Empowering students with active recall and exam techniques",
  },
  {
    src: "/images/IMG_2688.JPG",
    badge: "Institutional Practice",
    title: "Educational Strategy & Leadership Retreats",
    subtitle: "Transformational consulting sessions for sustainable growth",
  },
];

export default function HeroImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className="relative rounded-sm overflow-hidden border border-[#C5A059]/30 aspect-[16/9] shadow-2xl group select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Container */}
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.title}
            fill
            sizes="40vw"
            priority={index === 0}
            className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D2346] via-[#0D2346]/40 to-transparent opacity-90" />

          {/* Caption Content */}
          <div className="absolute bottom-3 left-4 right-12 text-white z-20">
            <span
              className="text-[#C5A059] text-[10px] font-bold tracking-widest uppercase block mb-0.5"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {slide.badge}
            </span>
            <p className="text-xs md:text-sm font-bold line-clamp-1 text-white">
              {slide.title}
            </p>
            <p className="text-[#F9F9FB]/60 text-[11px] line-clamp-1">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full bg-black/40 text-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-[#C5A059] hover:text-[#0D2346] transition-all duration-200"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full bg-black/40 text-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-[#C5A059] hover:text-[#0D2346] transition-all duration-200"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators Dots */}
      <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-4 bg-[#C5A059]" : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
