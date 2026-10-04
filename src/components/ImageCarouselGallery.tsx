import {
  Box,
  Facebook,
  Instagram,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Ruler,
  Settings2,
  Wrench,
} from "lucide-react";

import goldenVisionLogo from "@/assets/golden-vision-logo.png";

const goldenVision = {
  name: "GOLDEN VISION ENGINEERING",
  tagline: "Where Vision in Detailing meets Golden Standards",
  summary:
    "Precision steel detailing and connection engineering for structural, miscellaneous, and PEMB projects — modeled, coordinated, and delivered through Tekla Structures.",
  logo: goldenVisionLogo,
  logoAlt: "Golden Vision Engineering logo",
};

const goldenVisionContact = {
  phone: {
    label: "+1 (945) 327 2223",
    href: "tel:+19453272223",
  },
  email: {
    label: "sales@goldenvisioneng.com",
    href: "mailto:sales@goldenvisioneng.com",
  },
  address: {
    label: "45625 Grand River Ave, Novi, MI 48374",
    href: "https://maps.google.com/?q=45625+Grand+River+Ave,+Novi,+MI+48374",
  },
};

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
  { name: "Facebook", href: "https://www.facebook.com/", icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com/", icon: Instagram },
  {
    name: "X",
    href: "https://x.com/",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const steelDetailingFeatures = [
  {
    icon: Layers,
    title: "Main Structural Steel Detailing",
    description:
      "Complete 3D modeling and fabrication-ready detailing for primary framing, columns, beams, bracing, and erection sequences.",
    highlights: [
      "GA, shop, and erection drawings",
      "Anchor bolt and embed plans",
      "Member lists and CNC-ready files",
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
    alt: "Main structural steel framing on a construction site",
  },
  {
    icon: Settings2,
    title: "Connection Design",
    description:
      "Engineered connection design for moment, shear, base plate, and specialty joints — checked for constructability and code compliance.",
    highlights: [
      "Moment and shear connections",
      "Base plates and cap plates",
      "Seismic and heavy connection design",
    ],
    image:
      "https://images.unsplash.com/photo-1581092918054-0c4c3acd3789?auto=format&fit=crop&w=900&q=80",
    alt: "Steel connection design and engineering review",
  },
  {
    icon: Wrench,
    title: "Miscellaneous Steel Detailing",
    description:
      "Detailing for stairs, rails, ladders, platforms, mezzanines, canopies, and other misc metals tied into the main structural model.",
    highlights: [
      "Stairs, handrails, and guardrails",
      "Platforms, ladders, and mezzanines",
      "Loose items and misc metals packages",
    ],
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89ae12?auto=format&fit=crop&w=900&q=80",
    alt: "Miscellaneous steel fabrication and detailing",
  },
  {
    icon: Box,
    title: "PEMB Detailing & Design",
    description:
      "Pre-engineered metal building modeling, drafting, and connection packages for fast-track industrial and commercial structures.",
    highlights: [
      "PEMB frame and secondary detailing",
      "Purlins, girts, and bracing packages",
      "Erection and anchor setting plans",
    ],
    image:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=900&q=80",
    alt: "Pre-engineered metal building steel structure",
  },
];

const teklaCapabilities = [
  "Intelligent 3D modeling in Tekla Structures",
  "Accurate shop, field, and GA drawing production",
  "CNC, MIS, and KSS export for fabrication",
  "BIM coordination, clash review, and revisions",
];

const supportingServices = [
  {
    title: "BIM Integration",
    description: "Model coordination with architects, MEP, and contractors for clash-free delivery.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
    alt: "Building information modeling coordination",
  },
  {
    title: "Estimation",
    description: "Material takeoffs, weight summaries, and bid support from live Tekla model data.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    alt: "Construction estimation and quantity takeoff",
  },
];

const detailingProcess = [
  {
    step: "01",
    title: "Review & Model",
    description: "Analyze contract documents and build the Tekla 3D model with project standards.",
  },
  {
    step: "02",
    title: "Main Member Detailing",
    description: "Develop primary framing, bracing, and erection logic with fabrication-ready outputs.",
  },
  {
    step: "03",
    title: "Connections & Misc",
    description: "Design connections, misc metals, and PEMB packages within the same coordinated model.",
  },
  {
    step: "04",
    title: "QA & Delivery",
    description: "Internal checks, revision control, and release of drawings and CNC data to the client.",
  },
];

export function ImageCarouselGallery() {
  return (
    <section
      id="steel-detailing"
      className="golden-vision"
      aria-labelledby="golden-vision-title"
    >
      <div className="golden-vision__container">
        <div className="golden-vision__intro">
          <figure className="golden-vision__logo-wrap">
            <img
              className="golden-vision__logo"
              src={goldenVision.logo}
              alt={goldenVision.logoAlt}
              width={480}
              height={480}
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className="golden-vision__copy">
            <span className="golden-vision__eyebrow">Steel Detailing Services</span>
            <h2 className="golden-vision__name" id="golden-vision-title">
              {goldenVision.name}
            </h2>
            <p className="golden-vision__tagline">&ldquo;{goldenVision.tagline}&rdquo;</p>
            <p className="golden-vision__summary">{goldenVision.summary}</p>
            <a className="golden-vision__cta" href={goldenVisionContact.email.href}>
              Request a Detailing Quote
            </a>
          </div>
        </div>

        <div className="golden-vision__feature-block">
          <div className="golden-vision__services-head">
            <span className="golden-vision__eyebrow">Core Capabilities</span>
            <h3 className="golden-vision__services-title">
              Steel detailing, connection design, misc metals &amp; PEMB
            </h3>
            <p className="golden-vision__services-lead">
              End-to-end detailing packages built for fabricators, erectors, and EOR teams who need
              accurate models, clear drawings, and dependable connection design.
            </p>
          </div>

          <ul className="golden-vision__feature-grid">
            {steelDetailingFeatures.map((feature) => (
              <li className="golden-vision__feature-card" key={feature.title}>
                <figure className="golden-vision__feature-media">
                  <img
                    src={feature.image}
                    alt={feature.alt}
                    width={900}
                    height={560}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <div className="golden-vision__feature-body">
                  <div className="golden-vision__feature-icon" aria-hidden="true">
                    <feature.icon size={20} strokeWidth={1.8} />
                  </div>
                  <h4 className="golden-vision__feature-title">{feature.title}</h4>
                  <p className="golden-vision__feature-copy">{feature.description}</p>
                  <ul className="golden-vision__feature-list">
                    {feature.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="golden-vision__tekla" aria-labelledby="golden-vision-tekla-title">
          <div className="golden-vision__tekla-copy">
            <span className="golden-vision__eyebrow golden-vision__eyebrow--light">
              Tekla Software
            </span>
            <h3 className="golden-vision__tekla-title" id="golden-vision-tekla-title">
              Built on Tekla Structures for smarter steel delivery
            </h3>
            <p className="golden-vision__tekla-lead">
              Every project is modeled in Tekla Structures — giving teams a single source of truth
              for geometry, connections, revisions, and fabrication data from design through erection.
            </p>
            <ul className="golden-vision__tekla-list">
              {teklaCapabilities.map((item) => (
                <li key={item}>
                  <Ruler size={16} strokeWidth={1.8} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <figure className="golden-vision__tekla-visual">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
              alt="Engineer working on 3D steel modeling software"
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
            />
            <figcaption className="golden-vision__tekla-badge">Tekla Structures Workflow</figcaption>
          </figure>
        </div>

        <div className="golden-vision__process" aria-labelledby="golden-vision-process-title">
          <div className="golden-vision__services-head">
            <span className="golden-vision__eyebrow">Our Process</span>
            <h3 className="golden-vision__services-title" id="golden-vision-process-title">
              From model to fabrication-ready deliverables
            </h3>
          </div>
          <ol className="golden-vision__process-grid">
            {detailingProcess.map((step) => (
              <li className="golden-vision__process-step" key={step.step}>
                <span className="golden-vision__process-number">{step.step}</span>
                <h4 className="golden-vision__process-title">{step.title}</h4>
                <p className="golden-vision__process-copy">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="golden-vision__services">
          <div className="golden-vision__services-head">
            <span className="golden-vision__eyebrow">Also Available</span>
            <h3 className="golden-vision__services-title">BIM integration &amp; estimation support</h3>
          </div>

          <ul className="golden-vision__grid">
            {supportingServices.map((service) => (
              <li className="golden-vision__card" key={service.title}>
                <figure className="golden-vision__card-media">
                  <img
                    src={service.image}
                    alt={service.alt}
                    width={900}
                    height={600}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="golden-vision__card-caption">
                    <strong>{service.title}</strong>
                    <span>{service.description}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>

        <div className="golden-vision__contact" aria-label="Golden Vision Engineering contact">
          <div className="golden-vision__contact-head">
            <span className="golden-vision__eyebrow">Get in Touch</span>
            <h3 className="golden-vision__contact-title">Contact Golden Vision Engineering</h3>
            <p className="golden-vision__contact-lead">
              Share your drawings or model requirements — our team will respond with scope, timeline,
              and Tekla-based delivery options.
            </p>
          </div>

          <ul className="golden-vision__contact-list">
            <li>
              <a className="golden-vision__contact-link" href={goldenVisionContact.phone.href}>
                <Phone size={18} strokeWidth={1.8} aria-hidden="true" />
                <span>{goldenVisionContact.phone.label}</span>
              </a>
            </li>
            <li>
              <a className="golden-vision__contact-link" href={goldenVisionContact.email.href}>
                <Mail size={18} strokeWidth={1.8} aria-hidden="true" />
                <span>{goldenVisionContact.email.label}</span>
              </a>
            </li>
            <li>
              <a
                className="golden-vision__contact-link"
                href={goldenVisionContact.address.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                <MapPin size={18} strokeWidth={1.8} aria-hidden="true" />
                <span>{goldenVisionContact.address.label}</span>
              </a>
            </li>
          </ul>

          <div className="golden-vision__social">
            <p className="golden-vision__social-label">Follow us</p>
            <ul className="golden-vision__social-list">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <li key={name}>
                  <a
                    className="golden-vision__social-link"
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${name} (opens homepage)`}
                  >
                    <Icon className="size-[1.05rem]" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
