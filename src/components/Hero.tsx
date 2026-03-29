"use client";

import Image from "next/image";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
      <Image
        src="/images/tulip-hero.jpg"
        alt="Colorful tulip fields in Holland with rows of red, yellow and pink tulips stretching to the horizon"
        fill
        priority
        fetchPriority="high"
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white pt-20">
        <p className="text-gold font-semibold text-sm sm:text-base tracking-[0.2em] uppercase mb-4 animate-fade-in">
          {t.hero.subtitle}
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ fontFamily: "var(--font-playfair)" }}>
          {t.hero.title1}<br />
          <span className="text-gold">{t.hero.title2}</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200 leading-relaxed">
          {t.hero.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <a href="#tours" className="w-full sm:w-auto bg-secondary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary/90 transition-all shadow-2xl shadow-secondary/30 hover:-translate-y-1">
            {t.hero.exploreTours}
          </a>
          <a href="#booking" className="w-full sm:w-auto bg-white/15 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/30 hover:bg-white/25 transition-all hover:-translate-y-1">
            {t.hero.requestQuote}
          </a>
        </div>
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.6"><path d="M7 13l5 5 5-5M7 6l5 5 5-5" /></svg>
      </div>
    </section>
  );
}
