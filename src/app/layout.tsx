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
  },
  openGraph: {
    title: "TravelTulipTours | Privé Tours door Nederland",
    description:
      "Privé tours met eigen chauffeur vanuit Amsterdam. Keukenhof, Zaanse Schans, Giethoorn & meer. Boek direct online.",
    type: "website",
    url: siteUrl,
    siteName: "TravelTulipTours",
    locale: "nl_NL",
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
    google: "rTnTKwafcSyCZ_vtHkC6DHDuKJiK4eUT0icLWZaAtWo",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristOperator",
      "@id": `${siteUrl}/#organization`,
      name: "TravelTulipTours",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.svg`,
      },
      image: `${siteUrl}/images/tulip-hero.jpg`,
      description:
        "Private tours and taxi service through the Netherlands. Visit Keukenhof, Zaanse Schans, Giethoorn and more from Amsterdam.",
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
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "500",
        bestRating: "5",
        worstRating: "1",
      },
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
    },
    {
      "@type": "TouristTrip",
      name: "Keukenhof Tulip Gardens Private Tour",
      description: "Private day tour to Keukenhof tulip gardens from Amsterdam. Entry tickets arranged.",
      touristType: "Cultural tourism",
      url: `${siteUrl}/tours/keukenhof-tulip-gardens`,
      offers: {
        "@type": "Offer",
        price: "399",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/tours/keukenhof-tulip-gardens`,
      },
    },
    {
      "@type": "TouristTrip",
      name: "Zaanse Schans Windmills Private Tour",
      description: "Private tour to the historic windmills of Zaanse Schans from Amsterdam.",
      touristType: "Cultural tourism",
      url: `${siteUrl}/tours/zaanse-schans-windmills`,
      offers: {
        "@type": "Offer",
        price: "399",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/tours/zaanse-schans-windmills`,
      },
    },
    {
      "@type": "TouristTrip",
      name: "Amsterdam City Private Tour",
      description: "Private city tour through Amsterdam with your own driver.",
      touristType: "Cultural tourism",
      url: `${siteUrl}/tours/amsterdam-city-tour`,
      offers: {
        "@type": "Offer",
        price: "220",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/tours/amsterdam-city-tour`,
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I book a private tour?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Booking is easy! Simply fill out the booking form on our website, send us an email at info@traveltuliptours.nl, or call us at +31 6 21 65 84 45. We'll respond within a few hours with a personalized quote and itinerary.",
          },
        },
        {
          "@type": "Question",
          name: "What are your prices?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our Amsterdam City Tour starts from €220 and our countryside tours (Keukenhof, Zaanse Schans, Giethoorn, Kinderdijk, Volendam) start from €399. All prices are fixed with no hidden costs.",
          },
        },
        {
          "@type": "Question",
          name: "When is the best time to visit Keukenhof?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Keukenhof is open from mid-March to mid-May each year. The peak tulip season is typically mid-April when most varieties are in full bloom. We recommend booking early as this is our most popular tour.",
          },
        },
        {
          "@type": "Question",
          name: "Where do you pick us up?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We pick you up anywhere in the Netherlands! Most guests are picked up at their hotel in Amsterdam, but we also offer pickup from Schiphol Airport, cruise terminals, Airbnb locations, or any other address you prefer.",
          },
        },
        {
          "@type": "Question",
          name: "What is your cancellation policy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer free cancellation up to 24 hours before your scheduled tour. If you cancel within 24 hours, a 50% fee applies. We also offer free rescheduling up to 24 hours before the tour.",
          },
        },
      ],
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
