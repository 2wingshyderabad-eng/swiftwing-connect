const deliveryImage =
  "https://cdn.sanity.io/images/rsv7ni0r/production/865473291078b1e1e1168240a864828c641e2584-2979x1680.png?w=1600&q=100";

export interface HyperlocalDeliveryFeatureProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  imageSrc?: string;
}

export function HyperlocalDeliveryFeature({
  eyebrow = "Quick Delivery (Hyperlocal)",
  title = "Same-Day and Hyperlocal Delivery for Your Fastest-Moving Orders",
  description =
    "Fulfil same-day and quick-commerce demand with hyperlocal delivery partners built for metro and Tier-1 speed. Eligible orders route automatically to 2-hour and same-day delivery options, while tracking, NDR, and COD handling stay consistent with every other shipment on XpresWings.",
  actionLabel = "Explore Shipping Software",
  actionHref = "tel:+918886444940",
  imageSrc = deliveryImage,
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
        <div className="hyperlocal-feature__visual" aria-hidden="true">
          <img
            className="hyperlocal-feature__image"
            src={imageSrc}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
