"use client";

import React, { useState } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

const galleryImages = [
  {
    src: "/images/IMG_2662.JPG",
    title: "Teacher Training & Professional Development",
    category: "TEACH4IMPACT",
    description: "Interactive capacity-building workshops equipping educators with modern pedagogical techniques.",
  },
  {
    src: "/images/IMG_2674.JPG",
    title: "School Leadership & Strategic Management",
    category: "LEAD4TRANSFORMATION",
    description: "Executive strategy sessions for school principals and institutional administrators.",
  },
  {
    src: "/images/IMG_2679.JPG",
    title: "Academic Excellence & Student Mentoring",
    category: "STUDY4SUCCESS",
    description: "Engaging learners with active recall study methods and exam preparation frameworks.",
  },
  {
    src: "/images/IMG_2688.JPG",
    title: "Institutional Capacity Building Conference",
    category: "CONSULTING",
    description: "Holistic organizational transformation retreat for educational leaders across Abuja.",
  },
];

export default function GalleryStrip() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section className="bg-[#EEF2F6] py-24" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade" className="text-center mb-16">
          <span
            className="uppercase tracking-[0.3em] font-semibold text-[#C5A059] text-xs mb-3 block"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Gallery &amp; Media
          </span>
          <h2
            id="gallery-heading"
            className="text-3xl md:text-5xl font-bold text-[#0D2346]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            LEAD GLOBAL in Action
          </h2>
          <p className="text-[#2B303A]/70 text-base md:text-lg mt-4 max-w-2xl mx-auto">
            Moments from our live workshops, leadership retreats, and institutional consulting sessions across Nigeria.
          </p>
        </AnimatedSection>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((item, index) => (
            <AnimatedSection
              key={index}
              animation="slide-up"
              delay={index * 100}
              className="h-full"
            >
              <div
                onClick={() => setSelectedImage(item)}
                className="group relative aspect-[3/4] rounded-sm overflow-hidden bg-[#0D2346] shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-[#C5A059]/20"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2346] via-[#0D2346]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Card Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <span
                      className="px-2.5 py-1 bg-[#C5A059] text-[#0D2346] font-bold text-[10px] tracking-widest uppercase rounded-xs"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {item.category}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </span>
                  </div>

                  <div>
                    <h3
                      className="text-white font-bold text-lg leading-snug mb-2 group-hover:text-[#C5A059] transition-colors"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[#F9F9FB]/70 text-xs line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0D2346] border border-[#C5A059]/40 overflow-hidden shadow-2xl rounded-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#C5A059] hover:text-[#0D2346] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative aspect-[16/10] w-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 md:p-8 bg-[#0D2346]">
              <span
                className="text-[#C5A059] text-xs font-bold tracking-widest uppercase mb-2 block"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {selectedImage.category}
              </span>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                {selectedImage.title}
              </h3>
              <p className="text-[#F9F9FB]/80 text-sm md:text-base leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
