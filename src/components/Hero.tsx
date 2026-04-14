"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslation } from "@/i18n/LanguageContext";

const slides = [
  {
    src: "/images/hero-windmills.png",
    alt: "Dutch windmills at sunrise reflected in misty canal waters, Netherlands",
    kenBurns: "ken-burns-1",
  },
  {
    src: "/images/hero-tulips.png",
    alt: "Vast colorful tulip fields in full bloom — red, yellow, pink and purple rows",
    kenBurns: "ken-burns-2",
  },
  {
    src: "/images/hero-giethoorn.png",
    alt: "Boats gliding through the charming canals of Giethoorn village",
    kenBurns: "ken-burns-3",
  },
];

export default function Hero() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(current);
      setFading(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % slides.length);
        setFading(false);
        setPrev(null);
      }, 1000);
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (i: number) => {
    if (i === current) return;
    setPrev(current);
    setFading(true);
    setTimeout(() => {
      setCurrent(i);
      setFading(false);
      setPrev(null);
    }, 1000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">

      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : i === prev && fading ? 0 : 0 }}
          aria-hidden={i !== current}
        >
          <div key={`${slide.src}-${i === current}`} className={`absolute inset-0 ${i === current ? slide.kenBurns : ""}`}>
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/65 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white pt-20">
        <p className="text-gold font-semibold text-sm sm:text-base tracking-[0.2em] uppercase mb-4 animate-fade-in">
          {t.hero.subtitle}
        </p>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {t.hero.title1}<br />
          <span className="text-gold">{t.hero.title2}</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200 leading-relaxed">
          {t.hero.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <a
            href="#tours"
            className="w-full sm:w-auto bg-secondary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary/90 transition-all shadow-2xl shadow-secondary/30 hover:-translate-y-1"
          >
            {t.hero.exploreTours}
          </a>
          <a
            href="#booking"
            className="w-full sm:w-auto bg-white/15 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/30 hover:bg-white/25 transition-all hover:-translate-y-1"
          >
            {t.hero.requestQuote}
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-14 animate-fade-in-up animation-delay-600">
          <div className="flex items-center gap-2 text-white/80">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            <span className="text-sm font-medium">{t.hero.rating}</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            <span className="text-sm font-medium">{t.hero.guests}</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            <span className="text-sm font-medium">{t.hero.licensed}</span>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-2" role="tablist" aria-label="Slide indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/70"}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.6"><path d="M7 13l5 5 5-5M7 6l5 5 5-5" /></svg>
      </div>
    </section>
  );
}
