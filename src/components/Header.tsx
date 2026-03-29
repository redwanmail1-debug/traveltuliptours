"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navLinks = [
    { href: "#tours", label: t.nav.tours },
    { href: "#included", label: t.nav.included },
    { href: "#how-it-works", label: t.nav.howItWorks },
    { href: "#reviews", label: t.nav.reviews },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="TravelTulipTours home">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true" className="shrink-0">
              <circle cx="18" cy="18" r="18" fill="#1B4332" />
              <path d="M18 8c-2 4-6 7-6 12a6 6 0 0 0 12 0c0-5-4-8-6-12z" fill="#C41E3A" />
              <path d="M18 8c1.5 3 3 6 3 10a3 3 0 0 1-6 0c0-4 1.5-7 3-10z" fill="#FF6B35" />
              <line x1="18" y1="20" x2="18" y2="28" stroke="#2D6A4F" strokeWidth="2" />
              <path d="M15 26c1-2 3-3 3-3s2 1 3 3" stroke="#2D6A4F" strokeWidth="1.5" fill="none" />
            </svg>
            <div>
              <span className="text-xl font-bold text-primary tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                TravelTulip
              </span>
              <span className="text-xl font-bold text-secondary" style={{ fontFamily: "var(--font-playfair)" }}>
                Tours
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-dark hover:text-primary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-secondary after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + language + phone */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="tel:+31201234567"
              className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-light transition-colors"
              aria-label="Call us at +31 20 123 4567"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +31 20 123 4567
            </a>
            <a
              href="#booking"
              className="bg-secondary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-0.5"
            >
              {t.nav.bookTour}
            </a>
          </div>

          {/* Mobile: language + menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              className="p-2 rounded-lg hover:bg-gray-light transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden pb-6 border-t border-gray-light" role="navigation" aria-label="Mobile navigation">
            <ul className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block px-4 py-3 text-base font-medium text-dark hover:bg-cream rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 mt-4 px-4">
              <a
                href="tel:+31201234567"
                className="flex items-center justify-center gap-2 py-3 text-primary font-semibold border border-primary rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +31 20 123 4567
              </a>
              <a
                href="#booking"
                className="bg-secondary text-white py-3 rounded-full text-center font-semibold hover:bg-secondary/90 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.bookTour}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
