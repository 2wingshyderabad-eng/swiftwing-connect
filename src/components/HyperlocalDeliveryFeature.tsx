import expressDelivery from "@/assets/express-delivery.jpg";

export interface HyperlocalDeliveryFeatureProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function HyperlocalDeliveryFeature({
  eyebrow = "Express Delivery",
  title = "Same-Day Courier for Your Urgent Shipments",
  description =
    "When time matters, XpresWings gets it there fast. Express same-day and next-day delivery across major Indian cities — with doorstep pickup, live tracking, and the same secure handling you trust for every international and domestic shipment.",
  actionLabel = "Book a Home Pickup",
  actionHref = "tel:+918886444940",
  imageSrc = expressDelivery,
  imageAlt = "Express delivery van with packages ready for same-day dispatch",
}: HyperlocalDeliveryFeatureProps) {
  return (
    <section className="hyperlocal-feature" aria-labelledby="hyperlocal-feature-title">
      <div className="hyperlocal-feature__inner">
        <div className="hyperlocal-feature__copy">
          <p className="hyperlocal-feature__eyebrow">{eyebrow}</p>
          <h2 id="hyperlocal-feature-title" className="hyperlocal-feature__title">
            {title}
          </h2>
          <p className="hyperlocal-feature__description">{description}</p>
          <div className="hyperlocal-feature__action-wrap">
            <a
              className="hyperlocal-feature__action"
              href={actionHref}
              aria-label={actionLabel}
            >
              <span>{actionLabel}</span>
            </a>
          </div>
        </div>
        <div className="hyperlocal-feature__visual">
          <img
            className="hyperlocal-feature__image"
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            width={1024}
            height={768}
          />
        </div>
      </div>
    </section>
  );
}
