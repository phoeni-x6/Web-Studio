
"use client";

import { useEffect } from "react";
import { ArrowUpRight, Monitor, ShoppingBag, LayoutDashboard } from "lucide-react";

const projects = [
  {
    number: "01",
    name: "Business Website",
    category: "Corporate Website",
    description:
      "A modern business website designed to establish a professional online presence and attract new customers.",
    tags: ["Next.js", "Tailwind CSS", "Responsive Design"],
    type: "business",
    color: "bg-[#DCE1E5]",
  },
  {
    number: "02",
    name: "Online Store",
    category: "E-commerce",
    description:
      "A user-friendly online shopping experience designed to showcase products and simplify the buying process.",
    tags: ["React", "E-commerce", "UI/UX"],
    type: "store",
    color: "bg-[#E8DCD5]",
  },
  {
    number: "03",
    name: "Digital Platform",
    category: "Web Application",
    description:
      "A functional digital platform focused on usability, performance and an intuitive user experience.",
    tags: ["Next.js", "JavaScript", "Web App"],
    type: "platform",
    color: "bg-[#D8DFD9]",
  },
];

function ProjectPreview({ project }) {
  return (
    <div
      className={`project-preview relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl ${project.color}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,75,50,0.18),transparent_45%)]" />

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

      {project.type === "store" && (
        <div className="relative w-[78%] rounded-lg bg-white p-4 shadow-2xl transition-transform duration-700 group-hover:rotate-2 group-hover:scale-105">
          <div className="flex items-center justify-between">
            <span className="font-heading text-xs font-bold">SHOP.</span>
            <ShoppingBag size={16} />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[1, 2, 3].map((item) => (
              <div key={item}>
                <div className="flex aspect-[3/4] items-center justify-center rounded bg-[#E8DCD5]">
                  <ShoppingBag size={20} className="text-charcoal/40" />
                </div>
                <div className="mt-2 h-1.5 w-full rounded bg-charcoal/30" />
                <div className="mt-1 h-1.5 w-1/2 rounded bg-coral/70" />
              </div>
            ))}
          </div>
        </div>
      )}

      {project.type === "platform" && (
        <div className="relative w-[78%] rounded-lg bg-white p-4 shadow-2xl transition-transform duration-700 group-hover:-rotate-2 group-hover:scale-105">
          <div className="flex items-center gap-2 border-b border-charcoal/10 pb-3">
            <LayoutDashboard size={17} />
            <span className="font-heading text-xs font-bold">Dashboard</span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-[#D8DFD9] p-3">
              <div className="h-1.5 w-1/2 rounded bg-charcoal/30" />
              <div className="mt-3 h-4 w-3/4 rounded bg-charcoal/70" />
            </div>
            <div className="rounded-lg bg-[#DCE1E5] p-3">
              <div className="h-1.5 w-1/2 rounded bg-charcoal/30" />
              <div className="mt-3 h-4 w-3/4 rounded bg-coral" />
            </div>
          </div>
          <div className="mt-3 h-12 rounded-lg bg-charcoal/[0.06]" />
        </div>
      )}

      <span className="absolute bottom-4 right-4 rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-charcoal">
        Preview
      </span>
    </div>
  );
}

export default function Projects() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-project-reveal]");

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
      id="projects"
      className="projects-section bg-charcoal py-24 text-white md:py-32"
    >
      <div className="container-custom">
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
            A glimpse of the digital experiences we can create.
            Every project starts with an idea and grows into
            something meaningful.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.number}
              data-project-reveal
              style={{ transitionDelay: `${index * 120}ms` }}
              className="project-reveal group"
            >
              <ProjectPreview project={project} />

              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs font-semibold tracking-widest text-coral">
                  / {project.number}
                </span>
                <span className="text-xs text-white/40">
                  {project.category}
                </span>
              </div>

              <div className="mt-3 flex items-start justify-between gap-4">
                <h3 className="font-heading text-2xl font-bold">
                  {project.name}
                </h3>
                <ArrowUpRight
                  size={22}
                  className="shrink-0 text-white/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-coral"
                />
              </div>

              <p className="mt-3 text-sm leading-7 text-white/50">
                {project.description}
              </p>

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
            </article>
          ))}
        </div>

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
