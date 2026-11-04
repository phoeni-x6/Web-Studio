
"use client";

import { useEffect } from "react";
import {
  ArrowUpRight,
  Check,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const packages = [
  {
    number: "01",
    name: "Essential",
    subtitle: "Basic Online Presence",
    description:
      "Perfect for individuals, start-ups, portfolios, consultants and small businesses that need a professional online presence.",
    label: "STARTER",
    featured: false,
    features: [
      "Up to 5 pages",
      "Responsive design (mobile & tablet)",
      "Contact form",
      "WhatsApp integration",
      "Google Maps",
      "Social media links",
      "Basic SEO",
      "Basic speed optimisation",
      "Image optimisation",
      "SSL / HTTPS setup",
      "Browser compatibility",
      "2 revision rounds",
      "7 days post-launch support",
    ],
    note: "A simple and professional start for your business.",
  },
  {
    number: "02",
    name: "Business Pro",
    subtitle: "Business Growth Package",
    description:
      "Designed for growing businesses that want a polished website capable of generating enquiries and ranking better on search engines.",
    label: "MOST POPULAR",
    featured: true,
    features: [
      "Up to 10 pages",
      "Custom professional design",
      "CMS / Admin panel",
      "Blog or news section",
      "Advanced responsive optimisation",
      "Google Analytics",
      "Google Search Console",
      "On-page SEO & metadata",
      "Advanced speed optimisation",
      "Security configuration",
      "Backup setup",
      "Database integration (if required)",
      "Inquiry forms",
      "4 revision rounds",
      "30 days post-launch support",
    ],
    note: "The best balance between functionality and performance.",
  },
  {
    number: "03",
    name: "Business Elite",
    subtitle: "Complete Digital Solution",
    description:
      "For established businesses that need a high-quality, fast, scalable and conversion-focused website.",
    label: "PREMIUM",
    featured: false,
    features: [
      "Up to 20 pages",
      "Fully custom premium UI/UX design",
      "Advanced CMS / admin dashboard",
      "Advanced enquiry & booking systems",
      "Database integration",
      "Blog / content management",
      "Full mobile, tablet & desktop optimisation",
      "Advanced technical & on-page SEO",
      "Performance optimisation (advanced)",
      "Security hardening",
      "Automated backups",
      "Conversion-focused layouts",
      "Comprehensive testing",
      "6 revision rounds",
      "60 days post-launch support",
    ],
    note: "A complete solution built for long-term growth.",
  },
  {
    number: "04",
    name: "Custom Plan",
    subtitle: "Built Around Your Budget",
    description:
      "Have a specific budget or unique requirements? We'll create a custom solution tailored to your needs.",
    label: "FLEXIBLE",
    featured: false,
    features: [
      "Fully flexible page count",
      "Custom design options",
      "Choose only the features you need",
      "Scalable for future growth",
      "Optional e-commerce, booking or special integrations",
      "Personalised consultation",
      "Best solution within your budget",
    ],
    note: "Tell us your idea. We'll make it work within your budget!",
  },
];

function PackageCard({ plan }) {
  return (
    <article
      className={`package-card relative flex h-full flex-col rounded-2xl border p-6 md:p-7 ${
        plan.featured
          ? "package-card-featured border-coral bg-charcoal text-white"
          : "border-charcoal/15 bg-white/70 text-charcoal"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={`text-xs font-semibold tracking-widest ${
            plan.featured ? "text-coral" : "text-muted"
          }`}
        >
          / {plan.number}
        </span>

        <span
          className={`rounded-full px-3 py-1 text-[10px] font-bold tracking-wider ${
            plan.featured
              ? "bg-coral text-white"
              : "bg-charcoal/10 text-charcoal"
          }`}
        >
          {plan.label}
        </span>
      </div>

      <div className="mt-7">
        <h3 className="font-heading text-2xl font-bold md:text-3xl">
          {plan.name}
        </h3>

        <p
          className={`mt-1 text-sm font-medium ${
            plan.featured ? "text-coral" : "text-muted"
          }`}
        >
          {plan.subtitle}
        </p>

        <p
          className={`mt-5 min-h-[84px] text-sm leading-7 ${
            plan.featured ? "text-white/60" : "text-muted"
          }`}
        >
          {plan.description}
        </p>
      </div>

      <div
        className={`my-6 h-px ${
          plan.featured ? "bg-white/15" : "bg-charcoal/10"
        }`}
      />

      <ul className="flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                plan.featured
                  ? "bg-coral text-white"
                  : "bg-charcoal/10 text-coral"
              }`}
            >
              <Check size={12} strokeWidth={3} />
            </span>

            <span
              className={
                plan.featured ? "text-white/80" : "text-charcoal/80"
              }
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <p
        className={`mt-8 min-h-[48px] font-heading text-sm font-semibold italic leading-6 ${
          plan.featured ? "text-coral" : "text-muted"
        }`}
      >
        {plan.note}
      </p>

      <a
        href="#contact"
        className={`group mt-6 flex w-full items-center justify-center gap-3 rounded-xl px-5 py-4 text-sm font-bold transition-all duration-300 ${
          plan.featured
            ? "bg-coral text-white hover:bg-white hover:text-charcoal"
            : "bg-charcoal text-white hover:bg-coral"
        }`}
      >
        <MessageCircle size={18} />
        Contact Us for Pricing
        <ArrowUpRight
          size={17}
          className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
        />
      </a>
    </article>
  );
}

export default function Packages() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-package-reveal]");

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) =>
        element.classList.add("is-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="packages"
      className="packages-section relative overflow-hidden bg-steel py-24 md:py-32"
    >
      <div className="container-custom relative z-10">
        {/* Section heading */}
        <div
          data-package-reveal
          className="package-reveal mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-charcoal">
            <Sparkles size={14} className="text-coral" />
            Website development packages
          </span>

          <h2 className="mt-7 font-heading text-4xl font-bold leading-tight tracking-tight text-charcoal sm:text-5xl md:text-6xl">
            The right website for{" "}
            <span className="text-coral">your next step.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted">
            From a simple online presence to a complete business
            solution, we have a package to help your business grow.
            No fixed prices — contact us for a personalised quotation.
          </p>
        </div>

        {/* Package cards */}
        <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((plan, index) => (
            <div
              key={plan.number}
              data-package-reveal
              style={{ transitionDelay: `${index * 120}ms` }}
              className="package-reveal h-full"
            >
              <PackageCard plan={plan} />
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div
          data-package-reveal
          className="package-reveal mt-16 flex flex-col items-center justify-between gap-5 border-t border-charcoal/20 pt-8 text-center sm:flex-row sm:text-left"
        >
          <div>
            <h3 className="font-heading text-xl font-bold text-charcoal">
              Have something different in mind?
            </h3>
            <p className="mt-2 text-sm text-muted">
              Let&apos;s discuss your idea and find the right solution.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-charcoal px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-coral"
          >
            Discuss your project
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
