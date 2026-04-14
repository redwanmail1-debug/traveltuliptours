export type Tour = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  highlights: string[];
  duration: string;
  season: string;
  price: string;
  priceValue: number;
  image: string;
  tag: string;
  metaDescription: string;
};

export const tours: Tour[] = [
  {
    slug: "keukenhof-tulip-gardens",
    title: "Keukenhof Tulip Gardens Private Tour from Amsterdam",
    description: "Visit the world-famous Keukenhof gardens with over 7 million blooming flowers.",
    longDescription:
      "Experience the world's most beautiful spring garden with a private driver from Amsterdam. Keukenhof gardens feature over 7 million tulips, daffodils, and hyacinths blooming across 32 hectares. Walk through breathtaking flower pavilions, stroll along the canals, and capture stunning photos of Holland's iconic tulip fields. Unlike group tours, you travel in a private vehicle with your own driver — no waiting, no crowds, just you and the flowers.",
    highlights: [
      "Pickup from your hotel or Schiphol Airport",
      "Entry tickets arranged for you",
      "Walk through the stunning tulip fields",
      "Visit flower exhibitions in the pavilions",
      "Optional boat tour through bulb fields",
      "Photo stops at iconic tulip landscapes",
    ],
    duration: "5-6 hours",
    season: "March - May",
    price: "From €399",
    priceValue: 399,
    image: "/images/keukenhof.jpg",
    tag: "Most Popular",
    metaDescription:
      "Book a private Keukenhof tulip tour from Amsterdam. Door-to-door pickup, entry tickets arranged, 5-6 hours. From €399. WhatsApp booking available.",
  },
  {
    slug: "zaanse-schans-windmills",
    title: "Zaanse Schans Windmills Private Tour from Amsterdam",
    description: "Step back in time at this open-air museum where Dutch villages looked like in the 18th century.",
    longDescription:
      "Discover one of the Netherlands' most iconic destinations — Zaanse Schans. This living open-air museum features authentic working windmills, traditional Dutch houses, a cheese dairy, and a clog workshop. Your private driver will take you from your Amsterdam hotel and share fascinating stories about Dutch history and culture. Taste local cheeses, watch windmill machinery in action, and stroll through a village frozen in the 18th century.",
    highlights: [
      "Visit authentic working windmills",
      "Watch traditional cheese making",
      "See a real Dutch clog workshop",
      "Explore the Zaans Museum",
      "Walk through historic green houses",
      "Taste local Dutch specialties",
    ],
    duration: "4-5 hours",
    season: "Year-round",
    price: "From €399",
    priceValue: 399,
    image: "/images/zaanse-schans.jpg",
    tag: "Cultural",
    metaDescription:
      "Private Zaanse Schans windmills tour from Amsterdam. See working windmills, cheese making, clog workshop. Door-to-door pickup. From €399.",
  },
  {
    slug: "giethoorn-village",
    title: "Giethoorn Private Tour — The Venice of the North",
    description: "Discover the fairy-tale village with no roads, only canals.",
    longDescription:
      "Giethoorn is one of the most unique villages in the world — there are no roads, only canals and footpaths. Glide through the peaceful waterways by whisper boat, passing charming thatched-roof farmhouses and beautiful gardens. Your private driver will take you on the scenic route through the Dutch countryside to reach this magical destination. This is a full-day experience and one of our most memorable tours.",
    highlights: [
      "Private whisper boat tour through canals",
      "See the iconic thatched-roof houses",
      "Visit the charming village center",
      "Lunch at a traditional Dutch restaurant",
      "Photo stops along the canals",
      "Scenic drive through the Dutch countryside",
    ],
    duration: "7-8 hours",
    season: "April - October",
    price: "From €399",
    priceValue: 399,
    image: "/images/giethoornnew.jpg",
    tag: "Scenic",
    metaDescription:
      "Private Giethoorn tour from Amsterdam. Whisper boat through canals, thatched-roof houses, scenic countryside drive. From €399.",
  },
  {
    slug: "amsterdam-city-tour",
    title: "Amsterdam Private City Tour with Driver",
    description: "Explore the Dutch capital at your own pace with a private driver.",
    longDescription:
      "Discover Amsterdam's highlights with your own private driver and guide. See the UNESCO-listed canal ring, the Anne Frank House area, the charming Jordaan district, Vondelpark, and the world-famous Museum Quarter. Unlike bus tours, you decide the pace — stop for photos, explore a hidden street, or relax at a canal-side café. Perfect for first-time visitors and returning travellers who want to go deeper.",
    highlights: [
      "Drive along the UNESCO canal ring",
      "See the Anne Frank House area",
      "Explore the charming Jordaan district",
      "Visit the Museum Quarter",
      "Photo stop at the I Amsterdam sign",
      "Optional canal cruise addition",
    ],
    duration: "3-4 hours",
    season: "Year-round",
    price: "From €220",
    priceValue: 220,
    image: "/images/amsterdam.jpg",
    tag: "City",
    metaDescription:
      "Private Amsterdam city tour with driver. See canals, Anne Frank House, Jordaan, Museum Quarter at your own pace. From €220. Hotel pickup included.",
  },
  {
    slug: "kinderdijk-rotterdam",
    title: "Kinderdijk & Rotterdam Private Day Tour",
    description: "Visit UNESCO windmills at Kinderdijk combined with Rotterdam's iconic modern architecture.",
    longDescription:
      "Kinderdijk is home to 19 iconic Dutch windmills — a UNESCO World Heritage Site and one of the most photographed landscapes in the Netherlands. Combine this with a visit to Rotterdam, the city of modern architecture with the famous Cube Houses, Markthal, and the spectacular Erasmus Bridge. Your private driver takes you door-to-door, making this a comfortable and efficient full-day experience.",
    highlights: [
      "See 19 historic windmills at Kinderdijk",
      "Walk or cycle along the windmill paths",
      "Visit the Cube Houses in Rotterdam",
      "See the spectacular Markthal",
      "Explore the modern Erasmus Bridge area",
      "Photo stops at iconic landmarks",
    ],
    duration: "6-7 hours",
    season: "Year-round",
    price: "From €399",
    priceValue: 399,
    image: "/images/kinderdijknew.jpg",
    tag: "UNESCO Heritage",
    metaDescription:
      "Private Kinderdijk & Rotterdam tour. 19 UNESCO windmills + Rotterdam architecture. Door-to-door from Amsterdam. From €399.",
  },
  {
    slug: "volendam-edam-marken",
    title: "Volendam, Edam & Marken Private Tour",
    description: "Experience authentic Dutch fishing villages and the famous cheese town of Edam.",
    longDescription:
      "Step into traditional Dutch culture with a visit to three of the most charming villages near Amsterdam. Stroll through Volendam's picturesque harbor, taste award-winning cheese in Edam, and explore Marken — a former island with traditional wooden houses and the iconic lighthouse. Your private driver handles all logistics so you can focus on experiencing the authentic Dutch way of life.",
    highlights: [
      "Stroll through Volendam's harbor",
      "Visit a traditional cheese farm in Edam",
      "Take traditional Dutch costume photos",
      "Explore the former island of Marken",
      "See the iconic Marken lighthouse",
      "Taste fresh smoked eel and herring",
    ],
    duration: "5-6 hours",
    season: "Year-round",
    price: "From €399",
    priceValue: 399,
    image: "/images/volendamnew.jpg",
    tag: "Traditional",
    metaDescription:
      "Private Volendam, Edam & Marken tour from Amsterdam. Dutch fishing villages, cheese tasting, traditional culture. From €399.",
  },
];

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}
