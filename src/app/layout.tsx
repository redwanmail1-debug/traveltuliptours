import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import MetaPixel from "@/components/MetaPixel";
import Script from "next/script";
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

const siteUrl = "https://traveltuliptours.nl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TravelTulipTours | Privé Tours door Nederland vanuit Amsterdam",
    template: "%s | TravelTulipTours",
  },
  description:
    "Boek een privé tour door Nederland met eigen chauffeur. Bezoek Keukenhof, Zaanse Schans, Giethoorn, Kinderdijk en Volendam. Vaste prijzen, deur-tot-deur service vanuit Amsterdam. Vanaf €220.",
  keywords: [
    "privé tour Nederland",
    "Keukenhof tour Amsterdam",
    "tulpen tour Holland",
    "taxi tour Amsterdam",
    "Zaanse Schans tour",
    "Giethoorn tour",
    "privé chauffeur Nederland",
    "dagtour Keukenhof",
    "private tour Netherlands",
    "Amsterdam day trips",
    "Kinderdijk tour",
    "Volendam tour",
    "Holland tours",
  ],
  authors: [{ name: "TravelTulipTours" }],
  creator: "TravelTulipTours",
  publisher: "TravelTulipTours",
  alternates: {
    canonical: siteUrl,
    languages: {
      "nl-NL": siteUrl,
      "en-US": siteUrl,
      "de-DE": siteUrl,
      "es-ES": siteUrl,
      "ar-SA": siteUrl,
    },
  },
  openGraph: {
    title: "TravelTulipTours | Privé Tours door Nederland",
    description:
      "Privé tours met eigen chauffeur vanuit Amsterdam. Keukenhof, Zaanse Schans, Giethoorn & meer. Boek direct online.",
    type: "website",
    url: siteUrl,
    siteName: "TravelTulipTours",
    locale: "nl_NL",
    alternateLocale: ["en_US", "de_DE", "es_ES", "ar_SA"],
    images: [
      {
        url: "/images/tulip-hero.jpg",
        width: 1200,
        height: 630,
        alt: "TravelTulipTours — Privé tours door de tulpenvelden van Holland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TravelTulipTours | Privé Tours door Nederland",
    description:
      "Privé tours met eigen chauffeur vanuit Amsterdam. Keukenhof, Zaanse Schans, Giethoorn & meer.",
    images: ["/images/tulip-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  verification: {
    google: "VERVANG_MET_JOUW_GOOGLE_VERIFICATIECODE",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristInformationCenter",
      "@id": `${siteUrl}/#organization`,
      name: "TravelTulipTours",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.svg`,
      },
      image: `${siteUrl}/images/tulip-hero.jpg`,
      description:
        "Privé tours en taxiservice door Nederland. Bezoek Keukenhof, Zaanse Schans, Giethoorn en meer vanuit Amsterdam.",
      telephone: "+31621658445",
      email: "info@traveltuliptours.nl",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressRegion: "Noord-Holland",
        addressCountry: "NL",
      },
      areaServed: [
        "Amsterdam", "Lisse", "Zaandam", "Giethoorn", "Kinderdijk",
        "Volendam", "Marken", "Haarlem", "Rotterdam", "Den Haag", "Utrecht",
      ],
      priceRange: "€€",
      currenciesAccepted: "EUR",
      paymentAccepted: ["Cash", "Credit Card", "iDEAL", "PayPal"],
      sameAs: [
        "https://www.facebook.com/traveltuliptours",
        "https://www.instagram.com/traveltuliptours",
        "https://www.tiktok.com/@traveltuliptours",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "TravelTulipTours",
      publisher: { "@id": `${siteUrl}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "TouristTrip",
      name: "Keukenhof Tulip Gardens Private Tour",
      description: "Privé dagtour naar Keukenhof tulpentuinen vanuit Amsterdam. Inclusief entreetickets.",
      touristType: "Cultural tourism",
      offers: {
        "@type": "Offer",
        price: "399",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/#booking`,
      },
    },
    {
      "@type": "TouristTrip",
      name: "Zaanse Schans Windmills Private Tour",
      description: "Privé tour naar de historische windmolens van Zaanse Schans vanuit Amsterdam.",
      touristType: "Cultural tourism",
      offers: {
        "@type": "Offer",
        price: "399",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/#booking`,
      },
    },
    {
      "@type": "TouristTrip",
      name: "Amsterdam City Private Tour",
      description: "Privé stadstour door Amsterdam met eigen chauffeur.",
      touristType: "Cultural tourism",
      offers: {
        "@type": "Offer",
        price: "220",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/#booking`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HTBXYH1FYY" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HTBXYH1FYY');
        ` }} />
      </head>
      <body className="min-h-screen flex flex-col">
        <MetaPixel pixelId="1303080028356890" />
        {children}
      </body>
    </html>
  );
}
