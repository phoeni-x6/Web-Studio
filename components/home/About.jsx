
"use client";

import { useEffect } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Lightbulb,
  Code2,
  Rocket,
} from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Creative thinking",
    description:
      "We approach every project with fresh ideas, thoughtful design and a focus on creating meaningful digital experiences.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Purposeful development",
    description:
      "We turn creative concepts into responsive, reliable and user-friendly websites built with purpose.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Built for growth",
    description:
      "We create digital solutions that help businesses establish their presence and move confidently forward.",
    icon: Rocket,
  },
];

export default function About() {
  useEffect(() => {
    // Mark JavaScript as available
    document.documentElement.classList.add("has-js");

    const elements = document.querySelectorAll("[data-about-reveal]");

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Show everything when animations are unavailable
    if (
      reducedMotion ||
      !("IntersectionObserver" in window)
    ) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });

      return;
    }

    // Observe elements entering the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="about-section relative overflow-hidden bg-charcoal py-28 text-white md:py-36"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="about-decoration pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-white/[0.06]"
      />

      <div className="container-custom relative z-10">

        {/* Section heading */}
        <div
          data-about-reveal
          className="about-reveal mb-16 flex items-center gap-4"
        >
          <span className="h-[2px] w-10 bg-coral" />

          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
            Who we are
          </span>

          <span className="text-xs text-coral">
            01 / About
          </span>
        </div>

        {/* Main statement */}
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">

          <div
            data-about-reveal
            className="about-reveal"
          >
            <h2
              id="about-heading"
              className="max-w-5xl font-heading text-4xl font-bold leading-[1.08] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-[76px]"
            >
              We believe great digital experiences should be{" "}
              <span className="text-coral">
                thoughtful.
              </span>{" "}
              <span className="text-white/35">
                Not just beautiful.
              </span>
            </h2>
          </div>

          <div
            data-about-reveal
            className="about-reveal about-reveal-delay"
          >
            <p className="text-base leading-8 text-white/60">
              Web Studio is a creative web development agency focused
              on designing and building digital experiences that make
              a difference.
            </p>

            <p className="mt-5 text-base leading-8 text-white/60">
              We bring design and technology together to create
              websites that communicate clearly, work beautifully
              and support business growth.
            </p>

            <a
              href="#services"
              className="group mt-8 inline-flex items-center gap-3 border-b border-coral pb-2 text-sm font-semibold text-white transition-colors hover:text-coral"
            >
              Discover what we do

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="my-20 h-px w-full bg-white/15" />

        {/* Principles heading */}
        <div
          data-about-reveal
          className="about-reveal mb-10 flex flex-wrap items-end justify-between gap-5"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
              What drives us
            </span>

            <h3 className="mt-4 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Our approach.
            </h3>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/50">
            Every detail has a purpose. Every project starts with an idea.
          </p>
        </div>

        {/* Principles cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <article
                key={principle.number}
                data-about-reveal
                style={{
                  transitionDelay: `${index * 120}ms`,
                }}
                className="about-reveal about-card group relative min-h-[290px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-coral/60 hover:bg-white/[0.07] md:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading text-sm font-semibold text-coral">
                    / {principle.number}
                  </span>

                  <Icon
                    size={23}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="text-white/50 transition-all duration-300 group-hover:scale-110 group-hover:text-coral"
                  />
                </div>

                <div className="mt-16">
                  <h4 className="font-heading text-xl font-bold md:text-2xl">
                    {principle.title}
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-white/50">
                    {principle.description}
                  </p>
                </div>

                <ArrowDownRight
                  size={21}
                  aria-hidden="true"
                  className="absolute bottom-7 right-7 text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-coral"
                />
              </article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div
          data-about-reveal
          className="about-reveal mt-20 flex flex-col justify-between gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-center"
        >
          <p className="max-w-xl font-heading text-xl font-medium leading-relaxed text-white/70 md:text-2xl">
            Good ideas deserve{" "}
            <span className="text-coral">
              great execution.
            </span>
          </p>

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Web Studio © 2026
          </span>
        </div>
      </div>
    </section>
  );
}
