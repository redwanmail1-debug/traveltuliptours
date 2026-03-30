"use client";

import Image from "next/image";
import { useTranslation } from "@/i18n/LanguageContext";

const tourImages = [
  "/images/keukenhof.jpg",
  "/images/zaanse-schans.jpg",
  "/images/giethoornnew.jpg",
  "/images/amsterdam.jpg",
  "/images/kinderdijknew.jpg",
  "/images/volendam.jpg",
];

export default function Tours() {
  const { t } = useTranslation();

  return (
    <section id="tours" className="py-20 sm:py-28 bg-cream" aria-labelledby="tours-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary font-semibold text-sm tracking-[0.15em] uppercase mb-3">{t.tours.subtitle}</p>
          <h2 id="tours-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6" style={{ fontFamily: "var(--font-playfair)" }}>{t.tours.title}</h2>
          <p className="text-gray text-lg leading-relaxed">{t.tours.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.tours.items.map((tour, i) => (
            <article key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={tourImages[i]}
                  alt={`${tour.title} - Private tour in the Netherlands`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-white text-xs font-bold px-3 py-1.5 rounded-full">{tour.tag}</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-dark text-xs font-semibold px-3 py-1.5 rounded-full">{tour.duration}</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-dark mb-3" style={{ fontFamily: "var(--font-playfair)" }}>{tour.title}</h3>
                <p className="text-gray text-sm leading-relaxed mb-4">{tour.description}</p>
                <ul className="space-y-2 mb-6 flex-1" aria-label={`${tour.title} highlights`}>
                  {tour.highlights.map((highlight, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-dark">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2.5" className="shrink-0 mt-0.5" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-gray-light">
                  <div>
                    <p className="text-xs text-gray">{tour.season}</p>
                    <p className="text-xl font-bold text-primary">{tour.price}</p>
                  </div>
                  <a href="#booking" className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-light transition-colors">{t.tours.bookNow}</a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray mb-4">{t.tours.customTourText}</p>
          <a href="#booking" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors group">
            {t.tours.customTourLink}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
