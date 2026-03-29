"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/LanguageContext";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-light last:border-b-0">
      <button type="button" className="w-full py-6 flex items-center justify-between text-left gap-4 group" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className="text-lg font-semibold text-dark group-hover:text-primary transition-colors">{question}</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`shrink-0 text-gray transition-transform duration-300 ${open ? "rotate-180" : ""}`} aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-6" : "max-h-0"}`} role="region">
        <p className="text-gray leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { t } = useTranslation();

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm tracking-[0.15em] uppercase mb-3">{t.faq.subtitle}</p>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6" style={{ fontFamily: "var(--font-playfair)" }}>{t.faq.title}</h2>
        </div>
        <div>
          {t.faq.items.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
        <div className="text-center mt-12 p-8 bg-cream rounded-2xl">
          <p className="text-dark font-semibold mb-2">{t.faq.stillQuestions}</p>
          <p className="text-gray mb-4">{t.faq.hereToHelp}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:info@traveltuliptours.nl" className="flex items-center gap-2 text-primary font-medium hover:text-primary-light transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></svg>
              info@traveltuliptours.nl
            </a>
            <a href="tel:+31201234567" className="flex items-center gap-2 text-primary font-medium hover:text-primary-light transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              +31 20 123 4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
