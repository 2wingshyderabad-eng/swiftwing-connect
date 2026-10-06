import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Plane,
  Truck,
  DoorOpen,
  Home,
  Package,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Clock,
  Headset,
  ArrowRight,
  CheckCircle2,
  Star,
  Quote,
  Menu,
  X,
} from "lucide-react";

import { AnimatedDeliveryRoute } from "@/components/AnimatedDeliveryRoute";
import { FooterSkyline } from "@/components/FooterSkyline";
import { HeroSection } from "@/components/HeroSection";
import { HyperlocalDeliveryFeature } from "@/components/HyperlocalDeliveryFeature";
import { LogisticsMetricsGrid } from "@/components/LogisticsMetricsGrid";
import { SellerCoverageBanner } from "@/components/SellerCoverageBanner";
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  ADDRESS_MAPS_URL,
  EMAIL,
  PHONE_PRIMARY,
  PHONE_TEL,
} from "@/lib/contact";
import { cn } from "@/lib/utils";
import logo from "@/assets/xpreswings-logo.svg";
import servicePacking from "@/assets/service-packing.jpg";
import serviceDoorstep from "@/assets/service-doorstep.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "XpresWings — International & Domestic Courier Services" },
      {
        name: "description",
        content:
          "XpresWings International Courier Services — reliable door-to-door international and domestic courier, home pickup, and professional packing for individuals, students, and businesses.",
      },
      { property: "og:title", content: "XpresWings — International & Domestic Courier Services" },
      {
        property: "og:description",
        content:
          "Reliable door-to-door courier services worldwide — safe handling, secure packing, and timely delivery.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Plane,
    title: "International Courier",
    desc: "Express air freight to 220+ countries with customs documentation handled end to end.",
  },
  {
    icon: Truck,
    title: "Domestic Courier",
    desc: "Fast, dependable delivery across India — documents, parcels, and bulk shipments.",
  },
  {
    icon: DoorOpen,
    title: "Door-to-Door Delivery",
    desc: "From your doorstep to the recipient's hands — one booking, zero hassle.",
  },
  {
    icon: Home,
    title: "Home Pickup",
    desc: "Schedule a pickup and our team collects your parcel right from your home or office.",
  },
  {
    icon: Package,
    title: "Professional Packing",
    desc: "Export-grade packing and careful handling for fragile, valuable, and odd-size items.",
  },
  {
    icon: Briefcase,
    title: "Commercial Shipping",
    desc: "Tailored logistics for businesses — bulk rates, scheduled pickups, and account support.",
  },
];

const steps = [
  {
    n: "01",
    title: "Book a Pickup",
    desc: "Call or message us — we schedule a pickup at your convenience.",
  },
  {
    n: "02",
    title: "We Pack & Process",
    desc: "Professional packing, documentation, and customs paperwork handled by experts.",
  },
  {
    n: "03",
    title: "Ship & Track",
    desc: "Your parcel moves through our global network with updates at every milestone.",
  },
  {
    n: "04",
    title: "Delivered Safely",
    desc: "On-time doorstep delivery with proof of delivery confirmation.",
  },
];

const whyUs = [
  "Safe handling and secure, export-grade packing",
  "Timely processing with proactive status updates",
  "Customer-friendly support from booking to delivery",
  "Trusted by families, students, and businesses alike",
];

const testimonials = [
  {
    name: "Sruthi M.",
    role: "Student, shipped to the USA",
    text: "Sent my documents and clothes to the US — packed perfectly and delivered earlier than promised. Very smooth experience.",
  },
  {
    name: "Ravi K.",
    role: "Business owner",
    text: "We ship samples abroad every week. XpresWings handles pickup and paperwork so we can focus on our business.",
  },
  {
    name: "Anitha R.",
    role: "Family shipment to Australia",
    text: "Homemade food and gifts reached my daughter safely. The team even helped with the customs list. Highly recommended.",
  },
];

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#process", label: "How It Works" },
];

function Header({ overlay = false }: { overlay?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const showOverlay = overlay && !scrolled;

  useEffect(() => {
    if (!overlay) return;

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  const navLinkClass = cn(
    "site-header__nav-link transition-colors hover:text-foreground",
    !showOverlay && "text-muted-foreground",
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-md",
        showOverlay ? "site-header--overlay" : "border-border bg-background/90",
        menuOpen && "site-header--menu-open",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-18 sm:px-6">
        <a href="#top" className="flex shrink-0 items-center" onClick={closeMenu}>
          <span className={cn("rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2", showOverlay && "bg-white")}>
            <img
              src={logo}
              alt="XpresWings home"
              width={1495}
              height={263}
              className="h-6 w-auto sm:h-8 lg:h-9"
            />
          </span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={navLinkClass}>
              {link.label}
            </a>
          ))}
          <Link to="/track" className={navLinkClass}>
            Track
          </Link>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className={cn(
              "site-header__phone hidden items-center gap-2 text-sm font-semibold md:flex",
              showOverlay ? "text-white" : "text-foreground",
            )}
          >
            <Phone className="size-4 text-primary" />
            {PHONE_PRIMARY}
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03] sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            <span className="hidden min-[420px]:inline">Get a Quote</span>
            <span className="min-[420px]:hidden">Quote</span>
            <ArrowRight className="size-4" />
          </a>
          <button
            type="button"
            className={cn(
              "site-header__menu-btn lg:hidden",
              showOverlay && "site-header__menu-btn--overlay",
            )}
            aria-expanded={menuOpen}
            aria-controls="mobile-primary-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>
      {menuOpen ? (
        <nav
          id="mobile-primary-nav"
          aria-label="Mobile primary"
          className={cn("site-header__mobile lg:hidden", showOverlay && "site-header__mobile--overlay")}
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="site-header__mobile-link" onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <Link to="/track" className="site-header__mobile-link" onClick={closeMenu}>
            Track
          </Link>
          <a href={`tel:${PHONE_TEL}`} className="site-header__mobile-link" onClick={closeMenu}>
            Call {PHONE_PRIMARY}
          </a>
          <a href={`mailto:${EMAIL}`} className="site-header__mobile-link" onClick={closeMenu}>
            {EMAIL}
          </a>
        </nav>
      ) : null}
    </header>
  );
}

function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="section-label">Our Services</span>
          <h2 className="mt-4 text-balance text-3xl font-bold sm:text-5xl">
            Everything you need to ship, under one roof
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            For individuals, families, students, businesses, and commercial customers.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="card-lift group rounded-2xl border bg-card p-8">
              <div className="flex size-13 items-center justify-center rounded-xl bg-brand-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="size-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why-us" className="on-dark bg-surface-dark py-24 text-white sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src={servicePacking}
            alt="Professional packing of a parcel"
            loading="lazy"
            width={1024}
            height={768}
            className="rounded-3xl object-cover shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-4 rounded-2xl bg-primary px-6 py-5 shadow-xl sm:-right-6">
            <div className="font-display text-3xl font-bold text-primary-foreground">100%</div>
            <div className="text-sm font-medium text-primary-foreground/90">Secure packing</div>
          </div>
        </div>
        <div>
          <span className="section-label">Why XpresWings</span>
          <h2 className="mt-4 text-balance text-3xl font-bold sm:text-5xl">
            Care in every parcel, confidence in every delivery
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            XpresWings International Courier Services is a professional courier and logistics
            provider offering international and domestic solutions — built on safe handling, secure
            packing, and customer-friendly service.
          </p>
          <ul className="mt-8 space-y-4">
            {whyUs.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-white/85">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 grid grid-cols-1 gap-4 border-t border-white/10 pt-8 sm:grid-cols-3 sm:gap-6">
            {[
              { icon: ShieldCheck, label: "Insured handling" },
              { icon: Clock, label: "On-time promise" },
              { icon: Headset, label: "Human support" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-start gap-2">
                <Icon className="size-6 text-primary" />
                <span className="text-sm font-medium text-white/80">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label justify-center">How It Works</span>
          <h2 className="mt-4 text-balance text-3xl font-bold sm:text-5xl">
            From your door to the world in four steps
          </h2>
        </div>
        <ol className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.n} className="relative">
              {i < steps.length - 1 && (
                <div className="absolute left-full top-8 hidden h-px w-8 bg-border lg:block" />
              )}
              <div aria-hidden="true" className="font-display text-5xl font-bold text-brand-soft">
                {step.n}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Doorstep() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="section-label">Door-to-Door</span>
          <h2 className="mt-4 text-balance text-3xl font-bold sm:text-5xl">
            We pick up. We pack. We deliver. You relax.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            No queues, no counters. Book a home pickup and our team handles everything — from
            professional packing at your doorstep to final delivery confirmation.
          </p>
          <a
            href={`tel:${PHONE_TEL}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-transform hover:scale-[1.03]"
          >
            <Phone className="size-5" />
            Book a Home Pickup
          </a>
        </div>
        <img
          src={serviceDoorstep}
          alt="Courier delivering a parcel at a doorstep"
          loading="lazy"
          width={1024}
          height={768}
          className="rounded-3xl object-cover shadow-2xl"
        />
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label justify-center">Testimonials</span>
          <h2 className="mt-4 text-balance text-3xl font-bold sm:text-5xl">
            Trusted by senders everywhere
          </h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="card-lift rounded-2xl border bg-card p-8">
              <Quote className="size-8 text-primary" />
              <blockquote className="mt-5 leading-relaxed text-foreground/90">{t.text}</blockquote>
              <figcaption className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
                <div className="flex gap-0.5 text-primary">
                  <span className="sr-only">Rated 5 out of 5</span>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} aria-hidden="true" className="size-4 fill-current" />
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="on-dark bg-surface-darker py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 sm:px-6 lg:flex-row lg:justify-between">
        <div className="rounded-xl bg-white px-4 py-2.5">
          <img src={logo} alt="XpresWings" width={1495} height={263} className="h-7 w-auto" />
        </div>
        <nav
          aria-label="Footer"
          className="flex flex-wrap justify-center gap-6 text-sm text-white/70"
        >
          <a href="#services" className="transition-colors hover:text-white">
            Services
          </a>
          <a href="#why-us" className="transition-colors hover:text-white">
            Why Us
          </a>
          <a href="#process" className="transition-colors hover:text-white">
            How It Works
          </a>
          <Link to="/track" className="transition-colors hover:text-white">
            Track
          </Link>
        </nav>
        <div className="flex flex-col items-center gap-2 text-sm text-white/60 lg:items-end">
          <a
            href={ADDRESS_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex max-w-xs items-start gap-2 text-center transition-colors hover:text-white lg:text-right"
          >
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
            <address className="not-italic leading-relaxed">
              {ADDRESS_LINE_1}
              <br />
              {ADDRESS_LINE_2}
            </address>
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <Phone className="size-4 text-primary" />
            {PHONE_PRIMARY}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <Mail className="size-4 text-primary" />
            {EMAIL}
          </a>
          <p className="text-white/50">
            © {new Date().getFullYear()} XpresWings International Courier Services
          </p>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-8 sm:px-6">
        <AnimatedDeliveryRoute />
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Header overlay />
      <div className="-mt-16 sm:-mt-18">
        <HeroSection />
      </div>
      <main id="main">
        <LogisticsMetricsGrid />
        <SellerCoverageBanner />
        <Services />
        <WhyUs />
        <Process />
        <Doorstep />
        <HyperlocalDeliveryFeature />
        <Testimonials />
      </main>
      <FooterSkyline />
      <Footer />
    </div>
  );
}
