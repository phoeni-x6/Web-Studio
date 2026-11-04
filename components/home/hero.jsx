
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  MoveUpRight,
} from "lucide-react";

const capabilities = ["Strategy", "Design", "Development"];

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section relative flex min-h-screen items-center overflow-hidden bg-steel"
    >
      {/* Background atmosphere */}
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="hero-glow pointer-events-none absolute" />
      <div className="hero-grain pointer-events-none absolute inset-0" />

      {/* Decorative background typography */}
      <div
        aria-hidden="true"
        className="hero-background-type pointer-events-none absolute"
      >
        CREATIVE
      </div>

      <div className="container-custom relative z-10 w-full pb-24 pt-32 lg:pb-28 lg:pt-36">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">

          {/* LEFT CONTENT */}
          <div className="hero-content relative z-20">

            {/* Eyebrow */}
            <div className="hero-eyebrow mb-8 inline-flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-50" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-coral" />
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-charcoal">
                Independent creative web studio
              </span>

              <Sparkles size={15} className="text-coral" />
            </div>

            {/* Main headline */}
            <h1 className="hero-heading font-heading text-[clamp(3.5rem,8vw,7.5rem)] font-bold leading-[0.91] tracking-[-0.075em] text-charcoal">
              <span className="hero-word hero-word-one block">
                We create
              </span>

              <span className="hero-word hero-word-two block">
                <span className="relative inline-block">
                  digital
                  <span className="hero-title-underline" />
                </span>
              </span>

              <span className="hero-word hero-word-three block text-coral">
                experiences<span className="text-charcoal">.</span>
              </span>
            </h1>

            {/* Description */}
            <div className="hero-description mt-9 flex max-w-xl gap-5">
              <span className="mt-1 h-12 w-[3px] shrink-0 bg-coral" />

              <p className="max-w-md text-base leading-8 text-charcoal/65 sm:text-lg">
                We turn ambitious ideas into thoughtful digital
                experiences. Beautifully designed, carefully
                developed and built to move your business forward.
              </p>
            </div>

            {/* Actions */}
            <div className="hero-actions mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="hero-primary-button group inline-flex items-center gap-5 rounded-full bg-charcoal px-7 py-4 text-sm font-bold text-white"
              >
                Start a project

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-coral transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </span>
              </a>

              <a
                href="#projects"
                className="hero-secondary-button group inline-flex items-center gap-3 px-5 py-4 text-sm font-bold text-charcoal"
              >
                Explore our work

                <MoveUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>

            {/* Capabilities */}
            <div className="hero-capabilities mt-14 border-t border-charcoal/15 pt-6">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-charcoal/45">
                What we bring to the table
              </p>

              <div className="flex flex-wrap gap-x-7 gap-y-3">
                {capabilities.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <span className="font-heading text-xs font-bold text-coral">
                      0{index + 1}
                    </span>

                    <span className="text-sm font-semibold text-charcoal">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="hero-visual relative mx-auto flex aspect-square w-full max-w-[590px] items-center justify-center">

            {/* Orbital rings */}
            <div className="hero-orbit hero-orbit-one absolute h-[82%] w-[82%] rounded-full border border-charcoal/20" />

            <div className="hero-orbit hero-orbit-two absolute h-[105%] w-[105%] rounded-full border border-dashed border-charcoal/15" />

            <div className="hero-orbit hero-orbit-three absolute h-[65%] w-[65%] rounded-full border border-coral/30" />

            {/* Orbiting point */}
            <div className="hero-orbit-dot absolute">
              <span />
            </div>

            {/* Main artwork */}
            <div className="hero-artwork relative z-10 flex aspect-[0.83] w-[68%] items-center justify-center overflow-hidden rounded-t-[48%] rounded-b-[25px] bg-charcoal shadow-2xl">

              {/* Main gradient */}
              <div className="hero-artwork-gradient absolute inset-0" />

              {/* Background glow */}
              <div className="hero-artwork-glow absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-coral/60 blur-[80px]" />

              <div className="hero-artwork-glow-two absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#FF9A7C]/40 blur-[90px]" />

              {/* Geometric decoration */}
              <div className="hero-artwork-ring absolute -right-20 top-14 h-64 w-64 rounded-full border-[30px] border-white/[0.09]" />

              <div className="hero-artwork-ring-two absolute -left-24 bottom-16 h-56 w-56 rounded-full border border-white/20" />

              {/* Main glass sphere */}
              <div className="hero-sphere-wrap relative z-10 flex h-[68%] w-[80%] items-center justify-center">

                <div className="hero-sphere-halo absolute h-[110%] w-[110%] rounded-full border border-white/20" />

                <div className="hero-sphere absolute flex aspect-square w-[75%] items-center justify-center rounded-full">

                  <div className="hero-sphere-highlight absolute left-[16%] top-[12%] h-[22%] w-[22%] rounded-full bg-white/80 blur-xl" />

                  <div className="relative z-10 font-heading text-7xl font-bold tracking-[-0.1em] text-charcoal sm:text-8xl">
                    W<span className="text-coral">.</span>
                  </div>
                </div>

                {/* Small floating sphere */}
                <div className="hero-mini-sphere absolute -right-1 top-[12%] h-12 w-12 rounded-full bg-gradient-to-br from-white to-coral shadow-xl" />

                <div className="hero-mini-sphere-two absolute -bottom-2 left-0 h-8 w-8 rounded-full bg-coral shadow-lg" />
              </div>

              {/* Artwork bottom text */}
              <div className="absolute bottom-8 left-7 right-7 z-20 flex items-end justify-between text-white">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/60">
                    Digital craftsmanship
                  </p>

                  <p className="mt-2 font-heading text-2xl font-bold leading-tight sm:text-3xl">
                    Beyond
                    <br />
                    ordinary.
                  </p>
                </div>

                <span className="mb-1 text-3xl font-light text-coral">
                  ↗
                </span>
              </div>
            </div>

            {/* Floating label - top */}
            <div className="hero-floating-card hero-floating-one absolute left-0 top-[15%] z-20 rounded-xl border border-white/60 bg-white/75 px-4 py-3 shadow-xl backdrop-blur-xl">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-charcoal/45">
                Creative thinking
              </p>

              <p className="mt-1 font-heading text-sm font-bold text-charcoal">
                Ideas into impact.
              </p>
            </div>

            {/* Floating label - right */}
            <div className="hero-floating-card hero-floating-two absolute bottom-[23%] right-0 z-20 rounded-xl bg-coral px-4 py-3 text-white shadow-xl">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/65">
                Our approach
              </p>

              <p className="mt-1 font-heading text-sm font-bold">
                Built to grow.
              </p>
            </div>

            {/* Small corner marker */}
            <div className="hero-corner-marker absolute right-[7%] top-[8%] z-20 flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/20">
              <ArrowUpRight size={20} className="text-charcoal" />
            </div>
          </div>
        </div>

        {/* Bottom signature */}
        <div className="hero-bottom mt-16 flex flex-col justify-between gap-5 border-t border-charcoal/15 pt-6 sm:flex-row sm:items-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/45">
            Independent thinking. Intentional execution.
          </p>

          <a
            href="#about"
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-charcoal transition-colors hover:text-coral"
          >
            Discover our approach

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-charcoal/25 transition-all duration-300 group-hover:border-coral group-hover:bg-coral group-hover:text-white">
              <ArrowDown size={14} />
            </span>
          </a>
        </div>
      </div>

      {/* Side vertical label */}
      <div className="hero-side-label pointer-events-none absolute right-5 top-1/2 hidden -translate-y-1/2 rotate-90 text-[9px] font-bold uppercase tracking-[0.35em] text-charcoal/30 xl:block">
        DESIGN / DEVELOP / DELIVER
      </div>
    </section>
  );
}
