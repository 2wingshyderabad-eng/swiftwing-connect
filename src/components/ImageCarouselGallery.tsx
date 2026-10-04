import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const imageSources = [
  {
    src: "https://cdn-ilckhdb.nitrocdn.com/VYLsYqTfeLHHKfUBhyKIUpYJIwMJDxMb/assets/images/optimized/rev-620a55b/www.moldtekengineering.com/wp-content/uploads/2025/03/Group-486.png",
    alt: "Group 486",
  },
  {
    src: "https://cdn-ilckhdb.nitrocdn.com/VYLsYqTfeLHHKfUBhyKIUpYJIwMJDxMb/assets/images/optimized/rev-620a55b/www.moldtekengineering.com/wp-content/uploads/2025/03/Group-484.png",
    alt: "Group 484",
  },
  {
    src: "https://cdn-ilckhdb.nitrocdn.com/VYLsYqTfeLHHKfUBhyKIUpYJIwMJDxMb/assets/images/optimized/rev-620a55b/www.moldtekengineering.com/wp-content/uploads/2025/03/Group-483.png",
    alt: "Group 483",
  },
  {
    src: "https://cdn-ilckhdb.nitrocdn.com/VYLsYqTfeLHHKfUBhyKIUpYJIwMJDxMb/assets/images/optimized/rev-620a55b/www.moldtekengineering.com/wp-content/uploads/2025/03/Group-482.png",
    alt: "Group 482",
  },
  {
    src: "https://cdn-ilckhdb.nitrocdn.com/VYLsYqTfeLHHKfUBhyKIUpYJIwMJDxMb/assets/images/optimized/rev-620a55b/www.moldtekengineering.com/wp-content/uploads/2025/03/Group-489.png",
    alt: "Group 489",
  },
  {
    src: "https://cdn-ilckhdb.nitrocdn.com/VYLsYqTfeLHHKfUBhyKIUpYJIwMJDxMb/assets/images/optimized/rev-620a55b/www.moldtekengineering.com/wp-content/uploads/2025/03/Group-488.png",
    alt: "Group 488",
  },
  {
    src: "https://cdn-ilckhdb.nitrocdn.com/VYLsYqTfeLHHKfUBhyKIUpYJIwMJDxMb/assets/images/optimized/rev-620a55b/www.moldtekengineering.com/wp-content/uploads/2025/03/Group-487.png",
    alt: "Group 487",
  },
];

export function ImageCarouselGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);

  const visibleSlides = useMemo(
    () => [...imageSources, ...imageSources, ...imageSources],
    [],
  );

  const goTo = (direction: number) => {
    setActiveIndex(
      (current) => (current + direction + imageSources.length) % imageSources.length,
    );
  };

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex(
        (current) => (current + 1 + imageSources.length) % imageSources.length,
      );
    }, 1500);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    const node = viewportRef.current;
    if (!node) return undefined;

    const updateOffset = () => {
      const slide = node.querySelector<HTMLElement>("[data-carousel-slide]");
      if (!slide) return;

      const gap = 10;
      const slideWidth = slide.getBoundingClientRect().width + gap;
      node.style.setProperty(
        "--carousel-offset",
        `${-(activeIndex + imageSources.length) * slideWidth}px`,
      );
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);

    return () => window.removeEventListener("resize", updateOffset);
  }, [activeIndex]);

  return (
    <section className="image-carousel" aria-label="Image gallery carousel">
      <div
        ref={viewportRef}
        className="image-carousel__viewport"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <div
          className="image-carousel__track"
          role="list"
          aria-live={isPaused ? "polite" : "off"}
        >
          {visibleSlides.map((image, index) => (
            <figure
              className="image-carousel__slide"
              data-carousel-slide
              key={`${image.alt}-${index}`}
              role="listitem"
            >
              <img
                className="image-carousel__image"
                src={image.src}
                alt={image.alt}
                width={1020}
                height={736}
                loading="lazy"
                decoding="async"
              />
            </figure>
          ))}
        </div>
      </div>

      <nav className="image-carousel__controls" aria-label="Carousel controls">
        <button
          className="image-carousel__button"
          type="button"
          onClick={() => goTo(-1)}
          aria-label="Previous slide"
        >
          <ChevronLeft size={17} strokeWidth={1.7} aria-hidden="true" />
        </button>
        <span
          className="image-carousel__status"
          aria-label={`Slide ${activeIndex + 1} of ${imageSources.length}`}
        />
        <button
          className="image-carousel__button"
          type="button"
          onClick={() => goTo(1)}
          aria-label="Next slide"
        >
          <ChevronRight size={17} strokeWidth={1.7} aria-hidden="true" />
        </button>
      </nav>
    </section>
  );
}
