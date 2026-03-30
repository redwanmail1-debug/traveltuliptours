import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TravelTulipTours | Private Tours in the Netherlands",
  description:
    "Discover Holland with a private taxi & driver. Visit Keukenhof tulip gardens, Zaanse Schans windmills, Giethoorn, and more. Flexible itineraries, fixed prices, unforgettable experiences.",
  keywords:
    "private tours Netherlands, Keukenhof tour, tulip tour Holland, taxi tour Amsterdam, Zaanse Schans tour, Giethoorn tour, private driver Netherlands",
  openGraph: {
    title: "TravelTulipTours | Private Tours in the Netherlands",
    description:
      "Discover Holland with a private taxi & driver. Visit Keukenhof, Zaanse Schans, Giethoorn and more.",
    type: "website",
    locale: "en_US",
    alternateLocale: "nl_NL",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TaxiService",
              name: "TravelTulipTours",
              description:
                "Private tours and taxi service in the Netherlands. Visit Keukenhof, Zaanse Schans, Giethoorn and more.",
              url: "https://traveltuliptours.nl",
              telephone: "+31 6 21 65 84 45",
              email: "info@traveltuliptours.nl",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Amsterdam",
                addressRegion: "Noord-Holland",
                addressCountry: "NL",
              },
              areaServed: [
                "Amsterdam",
                "Lisse",
                "Haarlem",
                "Rotterdam",
                "The Hague",
                "Utrecht",
              ],
              priceRange: "$$",
              currenciesAccepted: "EUR",
              paymentAccepted: ["Cash", "Credit Card", "iDEAL"],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
