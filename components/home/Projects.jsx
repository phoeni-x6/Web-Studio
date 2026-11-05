
"use client";

import { useEffect } from "react";
import {
  ArrowUpRight,
  Monitor,
  ShoppingBag,
  LayoutDashboard,
  Dumbbell,
  MapPin,
  Users,
  Search,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "FitX Lanka",
    category: "Fitness Discovery Platform",
    description:
      "A fitness discovery platform built to help people across Sri Lanka find local gyms, discover personal trainers and connect with fitness professionals. The platform is currently under development.",
    tags: [
      "Next.js",
      "React",
      "Supabase",
    ],
    type: "fitx",
    color: "bg-[#DCE1E5]",
    href: "https://fit-x-lanka.vercel.app/",
    status: "In Development",
  }
];

function ProjectPreview({ project }) {
  return (
    <div
      className={`project-preview relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl ${project.color}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,75,50,0.18),transparent_45%)]" />

      {/* FitX Lanka Preview */}
      {project.type === "fitx" && (
        <div className="relative w-[88%] overflow-hidden rounded-xl bg-[#101A18] p-4 shadow-2xl transition-transform duration-700 group-hover:scale-105 sm:p-5">
          {/* Browser header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#C7F36B] text-[#101A18]">
                <Dumbbell size={15} />
              </div>

              <span className="font-heading text-sm font-bold text-white">
                FitX <span className="text-[#C7F36B]">Lanka.</span>
              </span>
            </div>

            <div className="flex gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            </div>
          </div>

          {/* Hero content */}
          <div className="grid grid-cols-[1.1fr_0.9fr] items-center gap-3 py-5">
            <div>
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#C7F36B]">
                Fitness, on your terms
              </span>

              <h4 className="mt-2 font-heading text-lg font-bold leading-tight text-white sm:text-2xl">
                Your goals.
                <br />
                Your people.
                <br />
                <span className="text-[#C7F36B]">Your move.</span>
              </h4>

              <div className="mt-3 flex items-center gap-1.5 rounded-full bg-[#C7F36B] px-3 py-2 text-[8px] font-bold text-[#101A18]">
                Discover fitness
                <ArrowUpRight size={11} />
              </div>
            </div>

            <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-[#53665A] to-[#1B2923]">
              <Dumbbell
                size={54}
                strokeWidth={1.2}
                className="text-[#C7F36B]"
              />

              <div className="absolute bottom-2 left-2 right-2 rounded-lg bg-black/30 p-2 backdrop-blur-sm">
                <p className="text-[8px] font-bold text-white">
                  Find your gym
                </p>
                <p className="mt-0.5 text-[7px] text-white/60">
                  Explore Sri Lanka
                </p>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-lg bg-white/[0.08] p-2">
              <MapPin size={13} className="text-[#C7F36B]" />
              <p className="mt-2 text-[8px] font-semibold text-white">
                Local gyms
              </p>
            </div>

            <div className="rounded-lg bg-white/[0.08] p-2">
              <Users size={13} className="text-[#C7F36B]" />
              <p className="mt-2 text-[8px] font-semibold text-white">
                Trainers
              </p>
            </div>

            <div className="rounded-lg bg-white/[0.08] p-2">
              <Search size={13} className="text-[#C7F36B]" />
              <p className="mt-2 text-[8px] font-semibold text-white">
                Discover
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Business Website Preview */}
      {project.type === "business" && (
        <div className="relative w-[78%] overflow-hidden rounded-lg bg-white shadow-2xl transition-transform duration-700 group-hover:-rotate-2 group-hover:scale-105">
          <div className="flex items-center justify-between border-b border-charcoal/10 px-4 py-3">
            <span className="font-heading text-xs font-bold">
              YOUR BRAND<span className="text-coral">.</span>
            </span>

            <div className="flex gap-2">
              <span className="h-1 w-5 rounded bg-charcoal/20" />
              <span className="h-1 w-5 rounded bg-charcoal/20" />
              <span className="h-1 w-5 rounded bg-charcoal/20" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 p-5">
            <div className="flex flex-col justify-center">
              <div className="h-2 w-4/5 rounded bg-charcoal" />
              <div className="mt-2 h-2 w-full rounded bg-charcoal/20" />
              <div className="mt-1 h-2 w-3/4 rounded bg-charcoal/20" />
              <div className="mt-4 h-6 w-20 rounded-full bg-coral" />
            </div>

            <div className="flex aspect-square items-center justify-center rounded-lg bg-steel">
              <Monitor size={38} className="text-charcoal/50" />
            </div>
          </div>
        </div>
      )}

      {/* Online Store Preview */}
      {project.type === "store" && (
        <div className="relative w-[78%] rounded-lg bg-white p-4 shadow-2xl transition-transform duration-700 group-hover:rotate-2 group-hover:scale-105">
          <div className="flex items-center justify-between">
            <span className="font-heading text-xs font-bold">
              SHOP.
            </span>

            <ShoppingBag size={16} />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {[1, 2, 3].map((item) => (
              <div key={item}>
                <div className="flex aspect-[3/4] items-center justify-center rounded bg-[#E8DCD5]">
                  <ShoppingBag
                    size={20}
                    className="text-charcoal/40"
                  />
                </div>

                <div className="mt-2 h-1.5 w-full rounded bg-charcoal/30" />
                <div className="mt-1 h-1.5 w-1/2 rounded bg-coral/70" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Preview label */}
      <span className="absolute bottom-4 right-4 rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-charcoal">
        {project.status}
      </span>
    </div>
  );
}

export default function Projects() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      "[data-project-reveal]"
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      reducedMotion ||
      !("IntersectionObserver" in window)
    ) {
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
      id="projects"
      className="projects-section bg-charcoal py-24 text-white md:py-32"
    >
      <div className="container-custom">
        {/* Section heading */}
        <div
          data-project-reveal
          className="project-reveal mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-coral">
              / Selected work
            </span>

            <h2 className="mt-5 max-w-2xl font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Ideas brought to{" "}
              <span className="text-coral">life.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/50">
            From fitness platforms to business websites, we create
            digital experiences that help ideas grow and businesses
            move forward.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.number}
              data-project-reveal
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
              className="project-reveal group"
            >
              <ProjectPreview project={project} />

              {/* Project category */}
              <div className="mt-6 flex items-center justify-between gap-3">
                <span className="text-xs font-semibold tracking-widest text-coral">
                  / {project.number}
                </span>

                <span className="text-right text-xs text-white/40">
                  {project.category}
                </span>
              </div>

              {/* Project title */}
              <div className="mt-3 flex items-start justify-between gap-4">
                <h3 className="font-heading text-2xl font-bold transition-colors duration-300 group-hover:text-coral">
                  {project.name}
                </h3>

                <ArrowUpRight
                  size={22}
                  className="shrink-0 text-white/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-coral"
                />
              </div>

              {/* Description */}
              <p className="mt-3 text-sm leading-7 text-white/50">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-medium text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Live project link */}
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-coral px-5 py-3 text-xs font-bold text-white transition-all duration-300 hover:bg-white hover:text-charcoal"
                >
                  Visit Live Website
                  <ExternalLink size={15} />
                </a>
              )}
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          data-project-reveal
          className="project-reveal mt-20 border-t border-white/15 pt-8 text-center"
        >
          <p className="font-heading text-xl font-semibold md:text-2xl">
            Have a project in mind?
          </p>

          <a
            href="#contact"
            className="mt-5 inline-flex items-center gap-3 rounded-full bg-coral px-7 py-4 text-sm font-bold text-white transition-all hover:bg-white hover:text-charcoal"
          >
            Let&apos;s build something
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
