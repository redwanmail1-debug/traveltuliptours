import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tours, getTourBySlug } from "@/lib/tourData";

const siteUrl = "https://traveltuliptours.nl";

export async function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return {};

  return {
    title: tour.title,
    description: tour.metaDescription,
    alternates: {
      canonical: `${siteUrl}/tours/${tour.slug}`,
    },
    openGraph: {
      title: tour.title,
      description: tour.metaDescription,
      url: `${siteUrl}/tours/${tour.slug}`,
      siteName: "TravelTulipTours",
      images: [{ url: `${siteUrl}${tour.image}`, width: 1200, height: 630, alt: tour.title }],
    },
  };
}

export default async function TourPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.longDescription,
    touristType: "Cultural tourism",
    image: `${siteUrl}${tour.image}`,
    offers: {
      "@type": "Offer",
      price: tour.priceValue.toString(),
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/tours/${tour.slug}`,
    },
    provider: {
      "@type": "TouristOperator",
      name: "TravelTulipTours",
      url: siteUrl,
      telephone: "+31621658445",
      email: "info@traveltuliptours.nl",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="bg-dark py-4 px-6">
        <Link href="/" className="text-white/80 hover:text-white text-sm flex items-center gap-2 w-fit">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
          Back to all tours
        </Link>
      </header>

      <main>
        {/* Hero */}
        <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
            <div className="max-w-3xl">
              <span className="bg-secondary text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 inline-block">{tour.tag}</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                {tour.title}
              </h1>
              <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto">{tour.description}</p>
            </div>
          </div>
        </div>

        {/* Quick info */}
        <div className="bg-white border-b border-gray-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-gray text-xs uppercase tracking-wide mb-1">Duration</p>
                <p className="font-bold text-dark">{tour.duration}</p>
              </div>
              <div>
                <p className="text-gray text-xs uppercase tracking-wide mb-1">Season</p>
                <p className="font-bold text-dark">{tour.season}</p>
              </div>
              <div>
                <p className="text-gray text-xs uppercase tracking-wide mb-1">Price</p>
                <p className="font-bold text-primary text-lg">{tour.price}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-4" style={{ fontFamily: "var(--font-playfair)" }}>About This Tour</h2>
            <p className="text-gray text-lg leading-relaxed">{tour.longDescription}</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-6" style={{ fontFamily: "var(--font-playfair)" }}>Tour Highlights</h2>
            <ul className="grid sm:grid-cols-2 gap-3" aria-label={`${tour.title} highlights`}>
              {tour.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2.5" className="shrink-0 mt-0.5" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>
                  <span className="text-dark">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12 bg-cream rounded-2xl p-8">
            <h2 className="text-xl font-bold text-dark mb-4">Included in Every Tour</h2>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray">
              {["Private vehicle (up to 8 passengers)", "English-speaking driver & local guide", "Hotel / Airport pickup & drop-off", "Flexible itinerary — stop whenever you like", "Bottled water & in-car WiFi", "Free cancellation up to 24 hours"].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2.5" className="shrink-0 mt-0.5" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Book CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-dark mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Book This Tour</h2>
            <p className="text-gray mb-6">Contact us for a free quote. We respond within a few hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#booking"
                className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-light transition-colors"
              >
                Request Free Quote
              </Link>
              <a
                href="https://wa.me/31621658445"
                className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary/5 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </div>
            <p className="text-gray text-sm mt-4">No payment required — free, no-obligation quote</p>
          </div>
        </div>
      </main>
    </>
  );
}
