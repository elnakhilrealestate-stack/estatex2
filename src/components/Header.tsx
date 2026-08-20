"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#sell", label: "Sell" },
  { href: "#partners", label: "Partners" },
  { href: "#stories", label: "Stories" },
  { href: "#courses", label: "Courses" },
  { href: "#contact", label: "Contact" },
];

import Logo from "@/components/Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-hairline bg-ink/85 py-3 backdrop-blur-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 md:px-8">
        <Logo compact={scrolled} />

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link font-body text-[13px] font-semibold tracking-[0.14em] uppercase text-paper/70 transition-colors duration-300 hover:text-paper"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+201103072004"
            className="font-body text-[13px] font-semibold tracking-wide text-mute transition-colors duration-300 hover:text-brass"
          >
            +20 110 307 2004
          </a>
          <a
            href="#contact"
            className="group relative overflow-hidden border border-brass/70 px-5 py-2.5 font-body text-[12px] font-bold tracking-[0.18em] uppercase text-brass transition-colors duration-500 hover:text-ink"
          >
            <span className="absolute inset-0 -translate-x-full bg-brass transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
            <span className="relative">Book a Consult</span>
          </a>
        </div>

        {/* mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[7px] border border-hairline bg-ink/60 lg:hidden"
        >
          <span
            className={`h-px w-5 bg-paper transition-all duration-400 ${
              open ? "translate-y-[4px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-paper transition-all duration-400 ${
              open ? "-translate-y-[4px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* mobile menu */}
      <div
        className={`fixed inset-0 -z-10 bg-ink/97 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-center gap-1 px-8">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-4 border-b border-hairline py-4"
              style={{
                transitionDelay: open ? `${i * 60}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(16px)",
                transition: "all 0.5s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              <span className="font-body text-[11px] font-bold text-brass">
                0{i + 1}
              </span>
              <span className="font-display text-3xl font-medium text-paper transition-colors group-hover:text-brass">
                {l.label}
              </span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-8 inline-block w-fit border border-brass/70 px-7 py-3.5 font-body text-[12px] font-bold tracking-[0.2em] uppercase text-brass"
          >
            Book a Consult
          </a>
        </div>
      </div>
    </header>
  );
}
