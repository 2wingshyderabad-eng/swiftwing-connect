import { createFileRoute } from "@tanstack/react-router";
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
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ShieldCheck,
  Clock,
  Globe2,
  Headset,
  ArrowRight,
  CheckCircle2,
  Star,
  Quote,
} from "lucide-react";

import logoAsset from "@/assets/xpreswings-logo.png.asset.json";
import heroCargo from "@/assets/hero-cargo.jpg";
import servicePacking from "@/assets/service-packing.jpg";
import serviceDoorstep from "@/assets/service-doorstep.jpg";
import globalNetwork from "@/assets/global-network.jpg";

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

const PHONE_PRIMARY = "88864 44940";
const PHONE_TEL = "+918886444940";
const EMAIL = "info@xpreswings.com";
const YOUTUBE = "https://www.youtube.com/@Charan_XPRESWINGS";

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
  { n: "01", title: "Book a Pickup", desc: "Call or message us — we schedule a pickup at your convenience." },
  { n: "02", title: "We Pack & Process", desc: "Professional packing, documentation, and customs paperwork handled by experts." },
  { n: "03", title: "Ship & Track", desc: "Your parcel moves through our global network with updates at every milestone." },
  { n: "04", title: "Delivered Safely", desc: "On-time doorstep delivery with proof of delivery confirmation." },
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

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center">
          <img src={logoAsset.url} alt="XpresWings" className="h-9 w-auto sm:h-10" />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground lg:flex">
          <a href="#services" className="transition-colors hover:text-foreground">Services</a>
          <a href="#why-us" className="transition-colors hover:text-foreground">Why Us</a>
          <a href="#process" className="transition-colors hover:text-foreground">How It Works</a>
          <a href="#coverage" className="transition-colors hover:text-foreground">Coverage</a>
          <Link to="/track" className="transition-colors hover:text-foreground">Track</Link>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden items-center gap-2 text-sm font-semibold text-foreground sm:flex"
          >
            <Phone className="size-4 text-primary" />
            {PHONE_PRIMARY}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03]"
          >
            Get a Quote
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <img
        src={heroCargo}
        alt="Cargo aircraft over a container port at dusk"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1024}
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36 lg:py-44">
        <div className="max-w-2xl">
          <span className="section-label text-primary">
            <Globe2 className="size-4" />
            International & Domestic Courier
          </span>
          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Your parcel.
            <br />
            <span className="text-primary">Our wings.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Reliable door-to-door courier services to destinations across the world — with safe
            handling, secure packing, and timely processing you can count on.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-transform hover:scale-[1.03]"
            >
              Ship with XpresWings
              <ArrowRight className="size-5" />
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <Phone className="size-5" />
              Call {PHONE_PRIMARY}
            </a>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 bg-navy-deep/80 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-4 sm:px-6">
          {[
            ["220+", "Countries served"],
            ["50K+", "Parcels delivered"],
            ["98%", "On-time delivery"],
            ["24/7", "Customer support"],
          ].map(([stat, label]) => (
            <div key={label}>
              <div className="font-display text-3xl font-bold text-primary sm:text-4xl">{stat}</div>
              <div className="mt-1 text-sm text-white/70">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
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
            <div
              key={s.title}
              className="card-lift group rounded-2xl border bg-card p-8"
            >
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
    <section id="why-us" className="bg-navy py-24 text-white sm:py-32">
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
            provider offering international and domestic solutions — built on safe handling,
            secure packing, and customer-friendly service.
          </p>
          <ul className="mt-8 space-y-4">
            {whyUs.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-white/85">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
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
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.n} className="relative">
              {i < steps.length - 1 && (
                <div className="absolute left-full top-8 hidden h-px w-8 bg-border lg:block" />
              )}
              <div className="font-display text-5xl font-bold text-brand-soft">{step.n}</div>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Coverage() {
  return (
    <section id="coverage" className="relative overflow-hidden py-24 sm:py-32">
      <img
        src={globalNetwork}
        alt="Global delivery network map"
        loading="lazy"
        width={1920}
        height={1024}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-navy-deep/70" />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
        <span className="section-label justify-center">Global Coverage</span>
        <h2 className="mx-auto mt-4 max-w-3xl text-balance text-3xl font-bold text-white sm:text-5xl">
          One network. 220+ destinations worldwide.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">
          USA, UK, Canada, Australia, UAE, Singapore, Europe and beyond — plus every corner of India.
        </p>
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
          {["USA", "UK", "Canada", "Australia", "UAE", "Singapore", "Germany", "France", "New Zealand", "Malaysia"].map(
            (c) => (
              <span
                key={c}
                className="rounded-full border border-white/25 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm"
              >
                {c}
              </span>
            ),
          )}
        </div>
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
    <section className="bg-secondary py-24 sm:py-32">
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
              <figcaption className="mt-6 flex items-center justify-between">
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
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

function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-navy">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 text-white sm:p-14">
              <span className="section-label">Get In Touch</span>
              <h2 className="mt-4 text-balance text-3xl font-bold sm:text-5xl">
                Ready to ship? Talk to us today.
              </h2>
              <p className="mt-5 text-lg text-white/70">
                Call, email, or message us for rates, pickup scheduling, and any shipping question.
              </p>
              <div className="mt-10 space-y-6">
                <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-4 group">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Phone className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-white/60">Phone</span>
                    <span className="block text-lg font-semibold transition-colors group-hover:text-primary">
                      {PHONE_PRIMARY}
                    </span>
                  </span>
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 group">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Mail className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-white/60">Email</span>
                    <span className="block text-lg font-semibold transition-colors group-hover:text-primary">
                      {EMAIL}
                    </span>
                  </span>
                </a>
                <div className="flex items-center gap-4">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <MapPin className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-white/60">Address</span>
                    <span className="block text-lg font-semibold">India — serving worldwide</span>
                  </span>
                </div>
              </div>
              <div className="mt-10 flex gap-3">
                {[
                  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com" },
                  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com" },
                  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com" },
                  { icon: Youtube, label: "YouTube", href: YOUTUBE },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex size-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <s.icon className="size-5" />
                  </a>
                ))}
              </div>
            </div>
            <div className="relative min-h-80 bg-navy-deep p-10 sm:p-14">
              <div className="absolute inset-0 opacity-40">
                <img
                  src={globalNetwork}
                  alt=""
                  loading="lazy"
                  width={1920}
                  height={1024}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative flex h-full flex-col justify-center">
                <div className="rounded-2xl border border-white/15 bg-navy-deep/80 p-8 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white">Business hours</h3>
                  <dl className="mt-5 space-y-3 text-white/80">
                    <div className="flex justify-between gap-6">
                      <dt>Monday – Saturday</dt>
                      <dd className="font-semibold text-white">9:00 AM – 8:00 PM</dd>
                    </div>
                    <div className="flex justify-between gap-6">
                      <dt>Sunday</dt>
                      <dd className="font-semibold text-white">On call</dd>
                    </div>
                  </dl>
                  <a
                    href={YOUTUBE}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    <Youtube className="size-5" />
                    Watch us on YouTube — @Charan_XPRESWINGS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 sm:px-6 lg:flex-row lg:justify-between">
        <div className="rounded-xl bg-white px-4 py-2.5">
          <img src={logoAsset.url} alt="XpresWings" className="h-8 w-auto" />
        </div>
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
          <a href="#services" className="transition-colors hover:text-white">Services</a>
          <a href="#why-us" className="transition-colors hover:text-white">Why Us</a>
          <a href="#process" className="transition-colors hover:text-white">How It Works</a>
          <a href="#coverage" className="transition-colors hover:text-white">Coverage</a>
          <a href="#contact" className="transition-colors hover:text-white">Contact</a>
        </nav>
        <p className="text-sm text-white/50">
          © {new Date().getFullYear()} XpresWings International Courier Services
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Coverage />
        <Doorstep />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
