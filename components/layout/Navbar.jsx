
"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-steel/90 shadow-lg shadow-charcoal/5 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom flex h-20 items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-2"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-coral text-white transition-transform duration-300 group-hover:rotate-45">
            <span className="text-xl font-bold">W.</span>
          </span>

          <span className="font-heading text-xl font-bold tracking-tight">
            web<span className="text-coral">studio.</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors duration-300 hover:text-coral"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="group hidden items-center gap-3 rounded-full bg-charcoal px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-coral md:flex"
        >
          Let&apos;s talk
          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full bg-charcoal text-white md:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`absolute left-0 right-0 top-full overflow-hidden bg-charcoal text-white transition-all duration-500 ease-in-out md:hidden ${
          menuOpen
            ? "max-h-[420px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-custom flex flex-col gap-1 py-6">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              style={{ transitionDelay: `${index * 60}ms` }}
              className={`border-b border-white/10 py-4 font-heading text-2xl transition-all duration-300 hover:text-coral ${
                menuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-4 opacity-0"
              }`}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-5 flex items-center justify-between rounded-full bg-coral px-6 py-4 font-semibold text-white"
          >
            Start a project
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}
