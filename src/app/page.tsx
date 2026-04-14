"use client";

import { LanguageProvider } from "@/i18n/LanguageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Tours from "@/components/Tours";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

function TrustBar() {
  const items = [
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>, label: "Private & Flexible" },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>, label: "Hotel Pickup Included" },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M12 4v16M2 12h20" /></svg>, label: "Fixed Prices — No Surprises" },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M9 15l2 2 4-4" /></svg>, label: "Free Cancellation 24h" },
  ];

  return (
    <div className="bg-white border-b border-gray-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-sm text-dark font-medium">
              <span className="text-primary">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Tours />
        <HowItWorks />
        <Testimonials />
        <Booking />
        <FAQ />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
