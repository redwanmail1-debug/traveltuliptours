"use client";

import { LanguageProvider } from "@/i18n/LanguageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Tours from "@/components/Tours";
import Included from "@/components/Included";
import HowItWorks from "@/components/HowItWorks";
import Booking from "@/components/Booking";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Features />
        <Tours />
        <Included />
        <HowItWorks />
        <Testimonials />
        <Booking />
        <FAQ />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
