"use client";

import { useTranslation } from "@/i18n/LanguageContext";

export default function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-primary text-white" aria-labelledby="how-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold font-semibold text-sm tracking-[0.15em] uppercase mb-3">{t.howItWorks.subtitle}</p>
          <h2 id="how-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair)" }}>{t.howItWorks.title}</h2>
          <p className="text-white/70 text-lg leading-relaxed">{t.howItWorks.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.howItWorks.steps.map((step, i) => (
            <div key={i} className="relative text-center">
              {i < t.howItWorks.steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-white/20" aria-hidden="true" />
              )}
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 border-2 border-gold mb-6">
                <span className="text-2xl font-bold text-gold">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-white/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
