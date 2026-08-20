"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Eyebrow, Reveal } from "./ui";
import { usePrefersReducedMotion } from "./ui";

type T = {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number | null;
};

function initial(name: string) {
  return name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}

export default function Testimonials({ items }: { items: T[] }) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(
    () => setIdx((i) => (i + 1) % items.length),
    [items.length]
  );
  const prev = useCallback(
    () => setIdx((i) => (i - 1 + items.length) % items.length),
    [items.length]
  );

  useEffect(() => {
    if (paused || reduced || items.length < 2) return;
    timer.current = setInterval(next, 6000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, reduced, next, items.length]);

  const t = items[idx];
  if (!t) return null;

  return (
    <section
      id="stories"
      className="grain relative overflow-hidden bg-paper py-24 text-ink md:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* giant quote mark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 right-6 font-display text-[16rem] leading-none font-semibold text-brass-deep/10 select-none md:right-20"
      >
        ”
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Eyebrow num="04" label="Client Testimonials" dark />
            <h2 className="mt-6 font-display text-4xl leading-[1.05] font-medium tracking-tight md:text-6xl">
              What our clients <em className="text-brass-deep italic">say</em>
            </h2>
          </div>
          <Reveal delay={150}>
            <p className="max-w-sm font-body text-[15px] leading-relaxed text-mute-dark">
              Hear from satisfied clients who trust Views Investments with
              their real estate needs across Egypt.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          {/* rotator */}
          <div className="lg:col-span-8">
            <div key={t.id} className="tst-in min-h-[280px]">
              <div className="flex gap-1 text-brass-deep">
                {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
                  <svg key={i} width="17" height="17" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M10 1.6l2.5 5.2 5.7.7-4.2 3.9 1.1 5.6L10 14.2 4.9 17l1.1-5.6L1.8 7.5l5.7-.7L10 1.6z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-6 font-display text-2xl leading-[1.35] font-medium text-ink md:text-[2rem]">
                “{t.quote}”
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <span className="grid h-13 w-13 shrink-0 place-items-center border border-brass-deep/40 bg-brass/15 font-display text-lg font-semibold text-brass-deep">
                  {initial(t.name)}
                </span>
                <div>
                  <p className="font-display text-lg font-semibold">{t.name}</p>
                  <p className="font-body text-[13px] font-medium text-mute-dark">
                    {t.role} <span className="text-brass-deep">•</span> {t.company}
                  </p>
                </div>
                <span className="ml-auto hidden font-display text-5xl font-light text-ink/10 md:block">
                  0{idx + 1}
                  <span className="text-2xl text-ink/30"> / 0{items.length}</span>
                </span>
              </div>
            </div>
          </div>

          {/* controls */}
          <Reveal delay={200} className="lg:col-span-4">
            <div className="flex h-full flex-col justify-between gap-10 border-l border-ink/10 pl-8">
              <div>
                <p className="font-body text-[11px] font-bold tracking-[0.3em] uppercase text-mute-dark">
                  Navigation
                </p>
                <div className="mt-5 flex gap-3">
                  <button
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="grid h-12 w-12 place-items-center border border-ink/20 text-ink transition-all duration-300 hover:border-brass-deep hover:bg-brass-deep hover:text-paper"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M15 8H2M7 3L2 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next testimonial"
                    className="grid h-12 w-12 place-items-center border border-ink/20 text-ink transition-all duration-300 hover:border-brass-deep hover:bg-brass-deep hover:text-paper"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {items.map((it, i) => (
                  <button
                    key={it.id}
                    onClick={() => setIdx(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    className="group flex items-center gap-4 text-left"
                  >
                    <span
                      className={`h-px transition-all duration-500 ${
                        i === idx
                          ? "w-14 bg-brass-deep"
                          : "w-8 bg-ink/25 group-hover:bg-ink/50"
                      }`}
                    />
                    <span
                      className={`font-body text-[12px] font-semibold tracking-wide transition-colors duration-300 ${
                        i === idx ? "text-ink" : "text-mute-dark/70 group-hover:text-mute-dark"
                      }`}
                    >
                      {it.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
