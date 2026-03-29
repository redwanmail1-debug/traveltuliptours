"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslation, languages, type Locale } from "@/i18n/LanguageContext";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = languages.find((l) => l.code === locale) ?? languages[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-dark hover:bg-gray-light transition-colors"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        <span className="text-base" aria-hidden="true">{current.flag}</span>
        <span className="hidden sm:inline">{current.code.toUpperCase()}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Available languages"
          className="absolute top-full right-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-light overflow-hidden min-w-[180px] z-50"
        >
          {languages.map((lang) => (
            <li key={lang.code} role="option" aria-selected={locale === lang.code}>
              <button
                type="button"
                onClick={() => {
                  setLocale(lang.code as Locale);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-cream transition-colors text-left ${
                  locale === lang.code ? "bg-cream font-semibold text-primary" : "text-dark"
                }`}
              >
                <span className="text-lg" aria-hidden="true">{lang.flag}</span>
                <span>{lang.label}</span>
                {locale === lang.code && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-auto text-primary" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
