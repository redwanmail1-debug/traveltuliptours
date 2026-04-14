"use client";

import { useTranslation } from "@/i18n/LanguageContext";

const reviews = [
  { name: "James R.", rating: 5, text: "Absolutely incredible experience! Our driver was so knowledgeable about the tulip history and took us to spots we never would have found on our own. The Keukenhof tour was the highlight of our entire Netherlands trip.", tour: "Keukenhof" },
  { name: "Anoniem", rating: 5, text: "We booked the Giethoorn tour and it was magical. The whisper boat ride through the canals was so peaceful. Our driver even recommended a wonderful restaurant for lunch. Highly recommend!", tour: "Giethoorn" },
  { name: "Nadia K.", rating: 5, text: "Perfect service from start to finish. The driver was waiting for us at Schiphol Airport and the whole day was perfectly organized. The windmills at Zaanse Schans were beautiful. Thank you TravelTulipTours!", tour: "Zaanse Schans" },
  { name: "Anoniem", rating: 5, text: "We combined Keukenhof with a visit to a local flower farm — something you can't do with a group tour. The flexibility to stop and take photos whenever we wanted made all the difference.", tour: "Custom Tour" },
  { name: "Lucas M.", rating: 5, text: "The Kinderdijk windmills were breathtaking and our driver shared fascinating stories about Dutch water management. Afterwards, we explored Rotterdam's modern architecture. A perfect day!", tour: "Kinderdijk" },
  { name: "Sophie W.", rating: 5, text: "Our driver picked us up at our hotel in Amsterdam and we spent a wonderful day visiting Volendam, Edam, and Marken. The cheese tasting was delicious! Great value for the price.", tour: "Volendam" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < rating ? "#D4A843" : "#E5E7EB"} aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-cream" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary font-semibold text-sm tracking-[0.15em] uppercase mb-3">{t.testimonials.subtitle}</p>
          <h2 id="reviews-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6" style={{ fontFamily: "var(--font-playfair)" }}>{t.testimonials.title}</h2>
          <div className="flex items-center justify-center gap-3">
            <StarRating rating={5} />
            <span className="text-lg font-bold text-dark">4.9/5</span>
            <span className="text-gray">{t.testimonials.basedOn}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <blockquote key={review.name} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <StarRating rating={review.rating} />
              <p className="text-dark leading-relaxed mt-4 mb-6 flex-1">&ldquo;{review.text}&rdquo;</p>
              <footer className="flex items-center justify-between pt-4 border-t border-gray-light">
                <cite className="not-italic font-bold text-dark text-sm">{review.name}</cite>
                <span className="text-xs text-secondary font-medium bg-secondary/10 px-3 py-1 rounded-full">{review.tour}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
