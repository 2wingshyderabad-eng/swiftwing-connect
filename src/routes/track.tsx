import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import { useState } from "react";
import {
  Package,
  Search,
  Plane,
  Truck,
  ClipboardCheck,
  Home,
  CheckCircle2,
  MapPin,
  CalendarDays,
  Scale,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import { AnimatedDeliveryRoute } from "@/components/AnimatedDeliveryRoute";
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  ADDRESS_MAPS_URL,
  EMAIL,
  PHONE_PRIMARY,
  PHONE_TEL,
} from "@/lib/contact";
import { FooterSkyline } from "@/components/FooterSkyline";
import logo from "@/assets/xpreswings-logo.svg";
import globalNetwork from "@/assets/global-network.jpg";

export const Route = createFileRoute("/track")({
  validateSearch: (search: Record<string, unknown>) => ({
    awb: typeof search.awb === "string" ? search.awb : "",
  }),
  head: () => ({
    meta: [
      { title: "Track Your Shipment — XpresWings Courier" },
      {
        name: "description",
        content:
          "Track your XpresWings international or domestic courier shipment in real time — enter your tracking number to see live delivery updates.",
      },
      { property: "og:title", content: "Track Your Shipment — XpresWings Courier" },
      {
        property: "og:description",
        content: "Enter your XpresWings tracking number to view live delivery updates.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TrackPage,
});

type Milestone = {
  label: string;
  location: string;
  date: string;
  done: boolean;
  current?: boolean;
};

type Shipment = {
  id: string;
  service: string;
  origin: string;
  destination: string;
  weight: string;
  booked: string;
  eta: string;
  status: string;
  milestones: Milestone[];
};

const DEMO_SHIPMENTS: Record<string, Shipment> = {
  XW100234567IN: {
    id: "XW100234567IN",
    service: "International Express",
    origin: "Hyderabad, India",
    destination: "New Jersey, USA",
    weight: "4.2 kg",
    booked: "28 Sep 2026",
    eta: "04 Oct 2026",
    status: "In Transit",
    milestones: [
      {
        label: "Shipment booked",
        location: "Hyderabad, India",
        date: "28 Sep, 10:24 AM",
        done: true,
      },
      {
        label: "Picked up & packed",
        location: "Hyderabad hub",
        date: "28 Sep, 04:10 PM",
        done: true,
      },
      {
        label: "Departed origin facility",
        location: "Hyderabad Airport",
        date: "29 Sep, 02:40 AM",
        done: true,
      },
      {
        label: "Customs clearance",
        location: "Delhi International Gateway",
        date: "30 Sep, 11:15 AM",
        done: true,
      },
      {
        label: "In transit",
        location: "En route to New York (JFK)",
        date: "01 Oct, 08:30 PM",
        done: true,
        current: true,
      },
      {
        label: "Out for delivery",
        location: "New Jersey, USA",
        date: "Expected 04 Oct",
        done: false,
      },
      { label: "Delivered", location: "New Jersey, USA", date: "Expected 04 Oct", done: false },
    ],
  },
  XW100987654IN: {
    id: "XW100987654IN",
    service: "Domestic Priority",
    origin: "Hyderabad, India",
    destination: "Bengaluru, India",
    weight: "1.1 kg",
    booked: "30 Sep 2026",
    eta: "02 Oct 2026",
    status: "Delivered",
    milestones: [
      {
        label: "Shipment booked",
        location: "Hyderabad, India",
        date: "30 Sep, 09:05 AM",
        done: true,
      },
      {
        label: "Picked up & packed",
        location: "Hyderabad hub",
        date: "30 Sep, 01:30 PM",
        done: true,
      },
      {
        label: "Departed origin facility",
        location: "Hyderabad",
        date: "30 Sep, 09:45 PM",
        done: true,
      },
      {
        label: "Arrived at destination hub",
        location: "Bengaluru",
        date: "01 Oct, 06:20 AM",
        done: true,
      },
      { label: "Out for delivery", location: "Bengaluru", date: "01 Oct, 09:10 AM", done: true },
      {
        label: "Delivered",
        location: "Bengaluru — signed by R. Sharma",
        date: "01 Oct, 02:35 PM",
        done: true,
        current: true,
      },
    ],
  },
};

function makeGenericShipment(id: string): Shipment {
  return {
    id,
    service: "International Express",
    origin: "Hyderabad, India",
    destination: "Destination country",
    weight: "—",
    booked: "Recently",
    eta: "3–6 business days",
    status: "Picked Up",
    milestones: [
      { label: "Shipment booked", location: "Hyderabad, India", date: "Confirmed", done: true },
      {
        label: "Picked up & packed",
        location: "Origin hub",
        date: "Confirmed",
        done: true,
        current: true,
      },
      {
        label: "Departed origin facility",
        location: "Origin airport",
        date: "Pending",
        done: false,
      },
      {
        label: "Customs clearance",
        location: "International gateway",
        date: "Pending",
        done: false,
      },
      { label: "In transit", location: "En route", date: "Pending", done: false },
      { label: "Out for delivery", location: "Destination city", date: "Pending", done: false },
      { label: "Delivered", location: "Destination", date: "Pending", done: false },
    ],
  };
}

const milestoneIcons = [ClipboardCheck, Package, Truck, Plane, Plane, Truck, Home];

function TrackPage() {
  const { awb } = Route.useSearch();
  const [query, setQuery] = useState(awb);
  const [result, setResult] = useState<Shipment | null>(null);
  const [notFound, setNotFound] = useState(false);

  React.useEffect(() => {
    if (!awb) return;
    const id = awb.trim().toUpperCase();
    if (!id) return;

    const demo = DEMO_SHIPMENTS[id];
    if (demo) {
      setResult(demo);
      setNotFound(false);
      return;
    }

    if (/^XW\d{6,}[A-Z]{0,2}$/.test(id)) {
      setResult(makeGenericShipment(id));
      setNotFound(false);
      return;
    }

    setResult(null);
    setNotFound(true);
  }, [awb]);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    const id = query.trim().toUpperCase();
    if (!id) return;
    const demo = DEMO_SHIPMENTS[id];
    if (demo) {
      setResult(demo);
      setNotFound(false);
    } else if (/^XW\d{6,}[A-Z]{0,2}$/.test(id)) {
      setResult(makeGenericShipment(id));
      setNotFound(false);
    } else {
      setResult(null);
      setNotFound(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="XpresWings home"
              width={1495}
              height={263}
              className="h-6 w-auto sm:h-8 lg:h-9"
            />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03]"
          >
            Back to Home
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </header>

      <main id="main">
        <section className="on-dark relative overflow-hidden">
          <img
            src={globalNetwork}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            width={1920}
            height={1024}
          />
          <div className="absolute inset-0 bg-surface-darker/85" />
          <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 sm:py-32">
            <span className="section-label justify-center">
              <Package className="size-4" />
              Shipment Tracking
            </span>
            <h1 className="mt-5 text-balance text-4xl font-bold text-white sm:text-6xl">
              Where's my parcel?
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/75">
              Enter your XpresWings tracking number to see live delivery updates.
            </p>
            <form
              onSubmit={handleTrack}
              noValidate
              className="mx-auto mt-9 flex max-w-xl flex-col gap-3 sm:flex-row"
            >
              <div className="relative flex-1">
                <label htmlFor="tracking-number" className="sr-only">
                  Tracking number
                </label>
                <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="tracking-number"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    if (notFound) setNotFound(false);
                  }}
                  placeholder="e.g. XW100234567IN"
                  autoComplete="off"
                  autoCapitalize="characters"
                  spellCheck={false}
                  maxLength={20}
                  aria-invalid={notFound || undefined}
                  aria-describedby={notFound ? "tracking-error" : undefined}
                  className="h-14 w-full rounded-full border border-white/20 bg-white pl-12 pr-4 text-base font-medium text-foreground placeholder:text-muted-foreground aria-invalid:border-2 aria-invalid:border-destructive"
                />
              </div>
              <button
                type="submit"
                className="h-14 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground shadow-brand transition-[filter,transform,box-shadow] duration-(--xw-motion-duration-fast) hover:brightness-95 active:translate-y-0.5 active:shadow-none"
              >
                Track shipment
              </button>
            </form>
            <p className="mt-4 text-sm text-white/50">
              Try a demo:{" "}
              <button
                type="button"
                onClick={() => setQuery("XW100234567IN")}
                className="font-semibold text-primary underline-offset-2 hover:underline"
              >
                XW100234567IN
              </button>{" "}
              or{" "}
              <button
                type="button"
                onClick={() => setQuery("XW100987654IN")}
                className="font-semibold text-primary underline-offset-2 hover:underline"
              >
                XW100987654IN
              </button>
            </p>
          </div>
        </section>

        <section aria-live="polite" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          {notFound && (
            <div
              id="tracking-error"
              className="rounded-2xl border border-destructive bg-card p-10 text-center"
            >
              <Package className="mx-auto size-10 text-destructive" />
              <h2 className="mt-4 text-xl font-semibold">Tracking number not recognized</h2>
              <p className="mx-auto mt-2 max-w-md text-muted-foreground">
                Please check the number on your booking receipt. XpresWings tracking numbers start
                with "XW". Need help? Call us at{" "}
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="rounded-xs font-semibold text-brand-strong underline underline-offset-4"
                >
                  {PHONE_PRIMARY}
                </a>{" "}
                or email{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  className="rounded-xs font-semibold text-brand-strong underline underline-offset-4"
                >
                  {EMAIL}
                </a>
                .
              </p>
            </div>
          )}

          {result && (
            <div className="space-y-8">
              <div className="on-dark overflow-hidden rounded-3xl bg-surface-dark text-white">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 p-8">
                  <div>
                    <div className="text-sm text-white/60">Tracking number</div>
                    <div className="font-display text-2xl font-bold tracking-wide break-all">
                      {result.id}
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground">
                    <Truck className="size-4" />
                    {result.status}
                  </span>
                </div>
                <div className="grid gap-6 p-8 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                    <div>
                      <div className="text-sm text-white/60">From</div>
                      <div className="font-semibold">{result.origin}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                    <div>
                      <div className="text-sm text-white/60">To</div>
                      <div className="font-semibold">{result.destination}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CalendarDays className="mt-0.5 size-5 shrink-0 text-primary" />
                    <div>
                      <div className="text-sm text-white/60">Estimated delivery</div>
                      <div className="font-semibold">{result.eta}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Scale className="mt-0.5 size-5 shrink-0 text-primary" />
                    <div>
                      <div className="text-sm text-white/60">Weight / Service</div>
                      <div className="font-semibold">
                        {result.weight} · {result.service}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border bg-card p-8 sm:p-10">
                <h2 className="text-xl font-bold">Delivery updates</h2>
                <ol className="mt-8 space-y-0">
                  {result.milestones.map((m, i) => {
                    const Icon = milestoneIcons[i] ?? Package;
                    const last = i === result.milestones.length - 1;
                    return (
                      <li key={m.label} className="relative flex gap-5 pb-8 last:pb-0">
                        {!last && (
                          <span
                            className={`absolute left-6 top-12 h-[calc(100%-3rem)] w-0.5 ${
                              m.done ? "bg-primary" : "bg-border"
                            }`}
                          />
                        )}
                        <span
                          className={`relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full ${
                            m.current
                              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                              : m.done
                                ? "bg-brand-soft text-primary"
                                : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {m.done && !m.current ? (
                            <CheckCircle2 className="size-5" />
                          ) : (
                            <Icon className="size-5" />
                          )}
                        </span>
                        <div className="pt-1.5">
                          <div
                            className={`font-semibold ${m.done ? "text-foreground" : "text-muted-foreground"}`}
                          >
                            {m.label}
                            {m.current && (
                              <span className="ml-2 rounded-full bg-brand-soft px-2.5 py-0.5 text-xs font-bold text-brand-strong">
                                Latest update
                              </span>
                            )}
                          </div>
                          <div className="mt-0.5 text-sm text-muted-foreground">{m.location}</div>
                          <div className="text-sm text-muted-foreground">{m.date}</div>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>

              <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-brand-soft p-6 sm:flex-row sm:p-8">
                <p className="text-center font-medium text-accent-foreground sm:text-left">
                  Questions about this shipment? Our team is happy to help.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03]"
                  >
                    <Phone className="size-4" />
                    Call {PHONE_PRIMARY}
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center gap-2 rounded-full border border-primary bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-transform hover:scale-[1.03]"
                  >
                    <Mail className="size-4 text-primary" />
                    {EMAIL}
                  </a>
                </div>
              </div>
            </div>
          )}

          {!result && !notFound && (
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  icon: Search,
                  title: "Enter your number",
                  desc: "Find it on your booking receipt or confirmation message.",
                },
                {
                  icon: Truck,
                  title: "See live updates",
                  desc: "Follow every milestone from pickup to doorstep delivery.",
                },
                {
                  icon: Phone,
                  title: "Need help?",
                  desc: `Call ${PHONE_PRIMARY} or email ${EMAIL} and our team will locate your shipment.`,
                },
              ].map((c) => (
                <div key={c.title} className="card-lift rounded-2xl border bg-card p-8 text-center">
                  <div className="mx-auto flex size-13 items-center justify-center rounded-xl bg-brand-soft text-primary">
                    <c.icon className="size-6" />
                  </div>
                  <h3 className="mt-5 font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <FooterSkyline />
      <footer className="on-dark bg-surface-darker py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 sm:px-6 lg:flex-row lg:justify-between">
          <div className="rounded-xl bg-white px-4 py-2.5">
            <img src={logo} alt="XpresWings" width={1495} height={263} className="h-7 w-auto" />
          </div>
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
        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 px-4 pt-8 sm:px-6">
          <AnimatedDeliveryRoute />
        </div>
      </footer>
    </div>
  );
}
