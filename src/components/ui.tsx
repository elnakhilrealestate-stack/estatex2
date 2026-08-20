"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const fn = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  return reduced;
}

/* Scroll-reveal wrapper — adds .in when the element enters the viewport */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
}) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${className}`}
      style={{ "--rd": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

/* Animated count-up number */
export function Counter({
  value,
  suffix = "",
  duration = 1800,
  className = "",
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        if (reduced) {
          setDisplay(value);
          return;
        }
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 4);
          setDisplay(Math.round(value * eased));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

/* Small diamond separator used across the site */
export function Diamond({ className = "text-brass" }: { className?: string }) {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      className={className}
      aria-hidden="true"
    >
      <rect x="4" y="0" width="5.6" height="5.6" transform="rotate(45 4 0)" fill="currentColor" />
    </svg>
  );
}

/* Eyebrow section label: "01 / Featured Projects" */
export function Eyebrow({
  num,
  label,
  dark = false,
}: {
  num: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-4">
      <span
        className={`font-body text-[11px] font-bold tracking-[0.35em] uppercase ${
          dark ? "text-brass-deep" : "text-brass"
        }`}
      >
        {num}
      </span>
      <span
        className={`h-px w-10 ${dark ? "bg-mute-dark/40" : "bg-hairline"}`}
      />
      <span
        className={`font-body text-[11px] font-semibold tracking-[0.35em] uppercase ${
          dark ? "text-mute-dark" : "text-mute"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
