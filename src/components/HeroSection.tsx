import * as React from "react";

import heroCargo from "@/assets/hero-cargo.jpg";
import serviceDoorstep from "@/assets/service-doorstep.jpg";
import servicePacking from "@/assets/service-packing.jpg";
import globalNetwork from "@/assets/global-network.jpg";

type HeroSlide = {
  badge: string;
  title: string;
  highlight: string;
  suffix: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
};

const heroSlides: HeroSlide[] = [
  {
    badge: "Domestic Courier",
    title: "Fast ",
    highlight: "Domestic Delivery",
    suffix: " Across India",
    description:
      "Documents, parcels, and bulk shipments — picked up from your doorstep and delivered on time.",
    image: serviceDoorstep,
    imageAlt: "XpresWings courier delivering a parcel at a doorstep",
    imagePosition: "68% center",
  },
  {
    badge: "Professional Packing",
    title: "Secure ",
    highlight: "Export-Grade Packing",
    suffix: " for Every Shipment",
    description:
      "Fragile, valuable, and odd-size items packed by trained staff before they leave your door.",
    image: servicePacking,
    imageAlt: "XpresWings team professionally packing a courier parcel",
    imagePosition: "55% center",
  },
  {
    badge: "International Courier",
    title: "Reliable ",
    highlight: "Global Shipping",
    suffix: " to 220+ Countries",
    description:
      "Door-to-door international courier with safe handling, secure packing, and customs support end to end.",
    image: globalNetwork,
    imageAlt: "Global delivery network spanning 220+ countries",
    imagePosition: "center center",
  },
  {
    badge: "Global Network",
    title: "One Network. ",
    highlight: "Worldwide Reach",
    suffix: ".",
    description:
      "USA, UK, Canada, Australia, UAE, Singapore, Europe, and every corner of India — one courier partner.",
    image: heroCargo,
    imageAlt: "Cargo aircraft over an international shipping port at sunset",
    imagePosition: "72% 42%",
  },
];

export function HeroSection() {
  const [activeSlide, setActiveSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  const slide = heroSlides[activeSlide];

  return (
    <section id="top" className="hero-xb" aria-label="XpresWings courier services">
      <div className="hero-xb__backdrops" aria-hidden="true">
        {heroSlides.map((item, index) => (
          <div
            key={item.badge}
            className="hero-xb__backdrop-layer"
            data-active={index === activeSlide}
          >
            <img
              src={item.image}
              alt=""
              className="hero-xb__backdrop-image"
              style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="hero-xb__backdrop-overlay" />
          </div>
        ))}
      </div>

      <div className="hero-xb__main">
        <div className="hero-xb__container">
          <div className="hero-xb__content">
            <span className="hero-xb__badge">{slide.badge}</span>
            <h1 className="hero-xb__title">
              {slide.title}
              <span className="hero-xb__title-accent">{slide.highlight}</span>
              {slide.suffix}
            </h1>
            <p className="hero-xb__description">{slide.description}</p>

            <div className="hero-xb__dots" role="tablist" aria-label="Hero slides">
              {heroSlides.map((item, index) => (
                <button
                  key={item.badge}
                  type="button"
                  role="tab"
                  aria-selected={index === activeSlide}
                  aria-label={`Go to slide ${index + 1}: ${item.badge}`}
                  className="hero-xb__dot"
                  data-active={index === activeSlide}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {slide.imageAlt}
      </p>
    </section>
  );
}
