import * as React from "react";

const mapImageUrl =
  "https://cdn.sanity.io/images/rsv7ni0r/production/774f6b90ddfcc83eedfe8936796e82ab4d8c56f1-1024x870.png?w=1200&q=100";
const brandStripUrl =
  "https://cdn.sanity.io/images/rsv7ni0r/production/073f04bf47d0ca4356aac2ccd8849e998f46b535-4785x163.svg?w=2400&q=100";

export function SellerCoverageBanner() {
  return (
    <div className="seller-banner-page">
      <section className="seller-banner-card" aria-labelledby="seller-banner-title">
        <div className="seller-banner-copy">
          <p className="seller-banner-title" id="seller-banner-title">
            <span>Trusted by </span>
            <strong>5000+</strong>
            <span> Sellers across India.</span>
          </p>
          <p className="seller-banner-description">
            Dedicated support for delivery issues that actually get resolved.
          </p>
          <a
            className="seller-banner-button"
            href="#testimonials"
            aria-label="See success stories"
          >
            <span>See Success Stories</span>
          </a>
        </div>

        <figure className="seller-map-figure">
          <img
            className="seller-map"
            src={mapImageUrl}
            alt="India map showing seller coverage"
            loading="lazy"
          />
        </figure>
      </section>

      <section className="seller-brands" aria-label="Trusted by leading D2C and ecommerce brands">
        <div className="seller-brands-window">
          <div className="seller-brands-track">
            <img
              src={brandStripUrl}
              alt="Trusted by leading D2C and ecommerce brands"
              loading="lazy"
            />
            <img src={brandStripUrl} alt="" aria-hidden="true" loading="lazy" />
          </div>
          <span className="seller-brands-fade seller-brands-fade-left" aria-hidden="true" />
          <span className="seller-brands-fade seller-brands-fade-right" aria-hidden="true" />
        </div>
      </section>
    </div>
  );
}
