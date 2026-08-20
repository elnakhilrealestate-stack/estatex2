import type { courses, projects } from "@/db/schema";
import { Counter, Diamond, Eyebrow, Reveal } from "./ui";
import ProjectsSection from "./ProjectsSection";
import Logo from "./Logo";

type ProjectRow = typeof projects.$inferSelect;
type CourseRow = typeof courses.$inferSelect;

/* ------------------------------------------------------------------ */
/*  HERO                                                               */
/* ------------------------------------------------------------------ */

const plans = [
  { dp: "33%", inst: "6 Years" },
  { dp: "5%", inst: "10 Years" },
  { dp: "10%", inst: "8 Years" },
  { dp: "5%", inst: "7.5 Years" },
  { dp: "20%", inst: "7 Years" },
  { dp: "5%", inst: "9 Years" },
  { dp: "15%", inst: "8.5 Years" },
];

function PlanTicker() {
  const items = [...plans, ...plans];
  return (
    <div className="marquee border-y border-hairline bg-coal/60 py-5">
      <div className="marquee-track items-center gap-10" style={{ "--speed": "30s" } as React.CSSProperties}>
        {items.map((p, i) => (
          <div key={i} className="flex shrink-0 items-center gap-10">
            <div className="flex items-center gap-3">
              <Diamond />
              <span className="font-body text-[12px] font-semibold tracking-[0.22em] uppercase text-mute">
                Down <span className="text-brass-bright">{p.dp}</span>
              </span>
              <span className="h-3 w-px bg-hairline" />
              <span className="font-body text-[12px] font-semibold tracking-[0.22em] uppercase text-mute">
                Installments <span className="text-brass-bright">{p.inst}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="grain relative overflow-hidden bg-ink">
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(200,162,79,0.45) 0%, rgba(200,162,79,0.08) 45%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[-30%] left-[-15%] h-[500px] w-[500px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(76,110,160,0.5) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-5 pt-36 pb-16 md:px-8 lg:pt-44">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          {/* copy */}
          <div className="lg:col-span-6">
            <div className="mb-8 flex items-center gap-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="pulse-dot relative inline-flex h-2.5 w-2.5 rounded-full bg-brass" />
              </span>
              <span className="font-body text-[11px] font-bold tracking-[0.4em] uppercase text-brass">
                Modern Real Estate Solutions
              </span>
            </div>

            <h1 className="font-display text-[13.5vw] leading-[1.02] font-medium tracking-tight text-paper sm:text-6xl lg:text-[4.5rem]">
              <span className="mask-line" style={{ "--md": "150ms" } as React.CSSProperties}>
                <span>Buy · Sell · Invest</span>
              </span>
              <span className="mask-line" style={{ "--md": "320ms" } as React.CSSProperties}>
                <span>
                  With Absolute{" "}
                  <em className="relative inline-block font-display font-semibold text-brass italic">
                    Confidence
                    <svg
                      className="flourish absolute -bottom-3 left-0 w-full"
                      viewBox="0 0 220 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 10 C 60 2, 150 2, 216 8"
                        stroke="#c8a24f"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </em>
                </span>
              </span>
            </h1>

            <Reveal delay={550}>
              <p className="mt-8 max-w-xl font-body text-[15.5px] leading-relaxed text-mute md:text-base">
                Specializing in residential property sales, premium resales, and investment opportunities in Cairo, Obour City, and New Cairo. Helping you buy, sell, and invest with absolute integrity and confidence.
              </p>
            </Reveal>

            <Reveal delay={700}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="group relative overflow-hidden bg-brass px-8 py-4 font-body text-[12px] font-bold tracking-[0.2em] uppercase text-ink transition-colors duration-500 hover:bg-brass-bright"
                >
                  Explore Projects
                  <svg
                    className="ml-3 inline-block transition-transform duration-500 group-hover:translate-x-1.5"
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="#sell"
                  className="border border-hairline px-8 py-4 font-body text-[12px] font-bold tracking-[0.2em] uppercase text-paper transition-all duration-500 hover:border-brass hover:text-brass"
                >
                  Sell Your Unit
                </a>
              </div>
            </Reveal>

            <Reveal delay={850}>
              <div className="mt-10 flex items-center gap-4">
                <div className="flex gap-1 text-brass">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="15" height="15" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M10 1.6l2.5 5.2 5.7.7-4.2 3.9 1.1 5.6L10 14.2 4.9 17l1.1-5.6L1.8 7.5l5.7-.7L10 1.6z" />
                    </svg>
                  ))}
                </div>
                <p className="font-body text-[13px] text-mute">
                  Rated <span className="font-bold text-paper">4.9 / 5</span> by
                  900+ investors across Egypt
                </p>
              </div>
            </Reveal>
          </div>

          {/* image composition */}
          <div className="relative lg:col-span-6">
            <div className="absolute -top-5 -right-5 hidden h-full w-full border border-brass/40 md:block" />
            <Reveal delay={300} className="relative">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/19090452/pexels-photo-19090452.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=1600"
                  alt="Luxury waterfront residential towers at dusk"
                  className="kenburns h-[420px] w-full object-cover md:h-[540px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" />
                <div className="absolute bottom-5 left-5">
                  <p className="font-body text-[10px] font-bold tracking-[0.35em] uppercase text-brass">
                    Featured Location
                  </p>
                  <p className="mt-1 font-display text-2xl font-medium text-paper">
                    The Riviera <em className="text-brass italic">—</em> New Alamein
                  </p>
                </div>
              </div>
            </Reveal>

            {/* floating cards */}
            <Reveal delay={800} className="absolute -top-7 -left-4 md:-left-10">
              <div className="floaty flex items-center gap-4 border border-hairline bg-panel/90 px-5 py-4 backdrop-blur-md">
                <span className="font-display text-4xl font-semibold text-brass">
                  <Counter value={98} suffix="%" />
                </span>
                <span className="font-body text-[11px] leading-snug font-semibold tracking-[0.18em] uppercase text-mute">
                  Client
                  <br />
                  Satisfaction
                </span>
              </div>
            </Reveal>
            <Reveal delay={950} className="absolute -bottom-7 right-3 md:right-8">
              <div className="floaty-2 flex items-center gap-4 border border-hairline bg-panel/90 px-5 py-4 backdrop-blur-md">
                <span className="font-display text-4xl font-semibold text-brass">
                  <Counter value={50} suffix="+" />
                </span>
                <span className="font-body text-[11px] leading-snug font-semibold tracking-[0.18em] uppercase text-mute">
                  Developer
                  <br />
                  Partners
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* stats bar */}
        <Reveal delay={200}>
          <div className="mt-20 grid grid-cols-2 gap-y-10 border-t border-hairline pt-10 md:grid-cols-4">
            {[
              { v: 7, s: "+", l: "Years Experience" },
              { v: 1200, s: "+", l: "Professionals" },
              { v: 98, s: "%", l: "Satisfaction" },
              { v: 6, s: "+", l: "Featured Projects" },
            ].map((st, i) => (
              <div
                key={st.l}
                className={`px-2 text-center md:px-8 ${
                  i > 0 ? "md:border-l md:border-hairline" : ""
                }`}
              >
                <p className="font-display text-5xl font-medium text-paper md:text-[3.4rem]">
                  <Counter value={st.v} suffix={st.s} />
                </p>
                <p className="mt-2 font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-mute">
                  {st.l}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <PlanTicker />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FEATURED PROJECTS                                                  */
/* ------------------------------------------------------------------ */

export function Projects({ projects }: { projects: ProjectRow[] }) {
  return <ProjectsSection projects={projects as any} />;
}

/* ------------------------------------------------------------------ */
/*  SELL YOUR UNIT                                                     */
/* ------------------------------------------------------------------ */

const sellFeatures = [
  {
    n: "01",
    t: "Best Market Price",
    d: "Get the highest value for your property with our market expertise and transparent comparables.",
  },
  {
    n: "02",
    t: "Quick Process",
    d: "Fast and efficient selling process with minimal paperwork — most units close within three weeks.",
  },
  {
    n: "03",
    t: "Trusted Service",
    d: "7+ years of experience with thousands of satisfied clients and a vetted buyer database.",
  },
];

export function Sell() {
  return (
    <section id="sell" className="grain relative overflow-hidden bg-coal py-24 md:py-32">
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(ellipse, rgba(200,162,79,0.4) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Eyebrow num="02" label="Property Selling" />
            <h2 className="mt-6 font-display text-4xl leading-[1.05] font-medium tracking-tight text-paper md:text-6xl">
              Sell Your Unit
              <br />
              <em className="text-brass italic">With Us</em>
            </h2>
            <p className="mt-6 max-w-lg font-body text-[15px] leading-relaxed text-mute">
              Turn your property investment into profit with our expert
              guidance and extensive network. Get the best value for your
              unit with our professional selling services.
            </p>

            <div className="mt-10">
              {sellFeatures.map((f, i) => (
                <Reveal key={f.n} delay={i * 130}>
                  <div className="group flex gap-6 border-t border-hairline py-6 transition-colors duration-500 hover:border-brass/40">
                    <span className="font-display text-3xl font-light text-brass/70 transition-colors duration-500 group-hover:text-brass">
                      {f.n}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-paper">
                        {f.t}
                      </h3>
                      <p className="mt-2 max-w-md font-body text-[14px] leading-relaxed text-mute">
                        {f.d}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={400}>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href="#contact"
                  className="group relative overflow-hidden bg-brass px-8 py-4 font-body text-[12px] font-bold tracking-[0.2em] uppercase text-ink transition-colors duration-500 hover:bg-brass-bright"
                >
                  Get a Free Valuation
                </a>
                 <a href="tel:+201103072004" className="font-display text-lg text-mute transition-colors duration-300 hover:text-brass">
                  +20 110 307 2004
                </a>
              </div>
            </Reveal>
          </div>

          <div className="relative lg:col-span-6">
            <div className="absolute -bottom-5 -left-5 hidden h-full w-full border border-brass/30 md:block" />
            <Reveal className="relative">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8441784/pexels-photo-8441784.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1400"
                  alt="Property consultants signing a sale agreement"
                  loading="lazy"
                  className="kenburns h-[420px] w-full object-cover md:h-[520px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              </div>
            </Reveal>
            <Reveal delay={300} className="absolute -top-6 right-4 md:-right-4">
              <div className="floaty border border-hairline bg-ink/85 px-6 py-5 backdrop-blur-md">
                <p className="font-display text-4xl font-semibold text-brass">
                  <Counter value={21} suffix=" days" />
                </p>
                <p className="mt-1 font-body text-[10px] font-bold tracking-[0.28em] uppercase text-mute">
                  Average Time to Close
                </p>
              </div>
            </Reveal>
            <Reveal delay={450} className="absolute -bottom-8 left-4 hidden w-44 md:block">
              <div className="floaty-2 overflow-hidden border border-hairline">
                <img
                  src="https://images.pexels.com/photos/31817157/pexels-photo-31817157.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=440"
                  alt="Sold villa at sunset"
                  loading="lazy"
                  className="h-28 w-full object-cover"
                />
                <div className="bg-panel px-4 py-3">
                  <p className="font-body text-[10px] font-bold tracking-[0.2em] uppercase text-brass">
                    Recently Sold
                  </p>
                  <p className="mt-0.5 font-body text-[12px] font-semibold text-paper">
                    Palm Villa · EGP 19.2M
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  DEVELOPER PARTNERS                                                 */
/* ------------------------------------------------------------------ */

const partnersA = [
  "SODIC",
  "Palm Hills",
  "Taj Al Areen",
  "Emaar Misr",
  "Mountain View",
];
const partnersB = [
  "Misr International City",
  "First Capital",
  "Amlak Properties",
  "Ekaan Development",
  "Hassan Allam",
];

function PartnerRow({ names, rev = false, speed }: { names: string[]; rev?: boolean; speed: string }) {
  const items = [...names, ...names];
  return (
    <div className="marquee py-4">
      <div
        className={`marquee-track items-center gap-16 ${rev ? "rev" : ""}`}
        style={{ "--speed": speed } as React.CSSProperties}
      >
        {items.map((n, i) => (
          <div key={i} className="flex shrink-0 items-center gap-16">
            <span
              className={`whitespace-nowrap text-mute/70 transition-colors duration-300 hover:text-brass ${
                i % 2 === 0
                  ? "font-display text-3xl font-medium tracking-wide"
                  : "font-body text-xl font-bold tracking-[0.3em] uppercase"
              }`}
            >
              {n}
            </span>
            <Diamond className="text-brass/40" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Partners() {
  return (
    <section id="partners" className="grain relative border-t border-hairline bg-ink py-24 md:py-28">
      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <Eyebrow num="03" label="Trusted Partners" />
            <h2 className="mt-6 font-display text-4xl leading-[1.05] font-medium tracking-tight text-paper md:text-6xl">
              Elite Developer
              <br />
              <em className="text-brass italic">Partners</em>
            </h2>
          </div>
          <Reveal delay={150}>
            <div className="lg:pb-2">
              <p className="max-w-md font-body text-[15px] leading-relaxed text-mute lg:ml-auto">
                Collaborating with leading developers across Egypt and the
                Gulf region, leveraging our extensive network and expertise.
              </p>
              <div className="mt-8 flex divide-x divide-hairline lg:ml-auto">
                {[
                  { v: 7, s: "+", l: "Years" },
                  { v: 1200, s: "+", l: "Professionals" },
                  { v: 50, s: "+", l: "Partners" },
                ].map((st) => (
                  <div key={st.l} className="pr-8 pl-8 first:pl-0">
                    <p className="font-display text-4xl font-medium text-paper">
                      <Counter value={st.v} suffix={st.s} />
                    </p>
                    <p className="mt-1 font-body text-[10px] font-bold tracking-[0.28em] uppercase text-mute">
                      {st.l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-12 space-y-2">
        <PartnerRow names={partnersA} speed="38s" />
        <PartnerRow names={partnersB} rev speed="44s" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  COURSES                                                            */
/* ------------------------------------------------------------------ */

const coursePerks = [
  {
    t: "Video Content",
    d: "High-quality video courses with expert instructors",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="#9a7a33" strokeWidth="1.6" />
        <path d="M10 9.2v5.6l5-2.8-5-2.8z" fill="#9a7a33" />
      </svg>
    ),
  },
  {
    t: "Expert Knowledge",
    d: "Learn from industry professionals and experienced agents",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3L2 8l10 5 10-5-10-5z" stroke="#9a7a33" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M6 10.5V15c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" stroke="#9a7a33" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M22 8v5" stroke="#9a7a33" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    t: "Free Access",
    d: "All courses are available for free to help you succeed",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="8" width="18" height="12" rx="1.5" stroke="#9a7a33" strokeWidth="1.6" />
        <path d="M3 12h18M12 12v8" stroke="#9a7a33" strokeWidth="1.6" />
        <path d="M12 8c-2.5-4.5-7-3-5.5 0h5.5zm0 0c2.5-4.5 7-3 5.5 0H12z" stroke="#9a7a33" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function Courses({ courses }: { courses: CourseRow[] }) {
  return (
    <section id="courses" className="grain relative border-t border-ink/10 bg-cream py-24 text-ink md:py-32">
      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Eyebrow num="05" label="Educational Courses" dark />
            <h2 className="mt-6 font-display text-4xl leading-[1.05] font-medium tracking-tight md:text-6xl">
              Learn <em className="text-brass-deep italic">Real Estate</em>
            </h2>
            <p className="mt-5 max-w-xl font-body text-[15px] leading-relaxed text-mute-dark">
              Enhance your real estate knowledge with our comprehensive
              educational courses. Learn from industry experts and stay
              updated with the latest trends.
            </p>
          </div>
          <Reveal delay={150}>
            <a
              href="#contact"
              className="arrow-link flex items-center gap-3 self-start font-body text-[12px] font-bold tracking-[0.22em] uppercase text-ink transition-colors duration-300 hover:text-brass-deep md:self-end"
            >
              View All Courses
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <Reveal key={c.id} delay={(i % 3) * 120} as="article">
              <a
                href="#contact"
                className="group flex h-full flex-col border border-ink/10 bg-white/70 transition-all duration-500 hover:-translate-y-2 hover:border-brass-deep/40 hover:shadow-[0_24px_60px_-24px_rgba(27,22,12,0.3)]"
              >
                {/* visual header */}
                <div
                  className="relative h-40 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${c.accent} 0%, #14101c 130%)`,
                  }}
                >
                  <span className="absolute right-4 bottom-2 font-display text-[5.5rem] leading-none font-light text-paper/15 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2">
                    0{i + 1}
                  </span>
                  <span className="absolute top-4 left-4 bg-paper/95 px-3 py-1.5 font-body text-[10px] font-bold tracking-[0.2em] uppercase text-ink">
                    {c.category}
                  </span>
                  <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full border border-paper/40 bg-paper/10 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-brass group-hover:text-ink">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                      <path d="M3.5 1.8v10.4l8.5-5.2-8.5-5.2z" />
                    </svg>
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-[22px] leading-snug font-semibold">
                    {c.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 flex-1 font-body text-[14px] leading-relaxed text-mute-dark">
                    {c.description}
                  </p>
                  <div className="mt-5 flex items-center gap-4 border-t border-ink/10 pt-5 font-body text-[12px] font-semibold text-mute-dark">
                    <span className="flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M12 7v5l3.2 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                      {c.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M3 7l9-4 9 4-9 4-9-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                        <path d="M3 12l9 4 9-4M3 17l9 4 9-4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                      </svg>
                      {c.lessons} Lessons
                    </span>
                    <span className="ml-auto bg-ink px-2.5 py-1 text-[10px] font-bold tracking-[0.15em] uppercase text-paper">
                      {c.level}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="bg-brass/20 px-3 py-1 font-body text-[10px] font-bold tracking-[0.2em] uppercase text-brass-deep">
                      Free
                    </span>
                    <span className="arrow-link flex items-center gap-2 font-body text-[11px] font-bold tracking-[0.2em] uppercase text-ink transition-colors duration-300 group-hover:text-brass-deep">
                      Watch
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* perks strip */}
        <div className="mt-16 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-3">
          {coursePerks.map((p, i) => (
            <Reveal key={p.t} delay={i * 120} className="bg-cream">
              <div className="group flex h-full items-start gap-5 bg-white/60 p-7 transition-colors duration-500 hover:bg-white">
                <span className="mt-1 shrink-0">{p.icon}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{p.t}</h3>
                  <p className="mt-1.5 font-body text-[13.5px] leading-relaxed text-mute-dark">
                    {p.d}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FOOTER                                                             */
/* ------------------------------------------------------------------ */

export function Footer() {
  const cols = [
    {
      h: "Explore",
      items: [
        { l: "Projects", h: "#projects" },
        { l: "Sell With Us", h: "#sell" },
        { l: "Partners", h: "#partners" },
        { l: "Client Stories", h: "#stories" },
      ],
    },
    {
      h: "Company",
      items: [
        { l: "Courses", h: "#courses" },
        { l: "Contact", h: "#contact" },
        { l: "Book a Consult", h: "#contact" },
        { l: "Back to Top", h: "#top" },
      ],
    },
  ];
  return (
    <footer className="relative overflow-hidden border-t border-hairline bg-[#07090d]">
      {/* giant watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 font-display text-[22vw] leading-none font-semibold whitespace-nowrap text-transparent opacity-[0.05] select-none"
        style={{ WebkitTextStroke: "1.5px #c8a24f" }}
      >
        ESTATEX
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 py-20 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <Logo />
            </div>
            <p className="mt-6 max-w-sm font-body text-[14.5px] leading-relaxed text-mute">
              Specializing in premium residential property sales, resales, and secure investment opportunities in Cairo, Obour City, and New Cairo. Helping you buy, sell, and invest with absolute integrity.
            </p>
            <div className="mt-7 flex gap-3">
              <a
                href="https://web.facebook.com/profile.php?id=61590874285563"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit EstateX on Facebook"
                className="grid h-10 w-10 place-items-center border border-hairline text-mute transition-all duration-300 hover:border-brass hover:text-brass"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              {[
                {
                  l: "Instagram",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
                      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.7" />
                      <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
                    </svg>
                  ),
                },
                {
                  l: "LinkedIn",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.7" />
                      <path d="M8 10.5V17M8 7.2v.1M12 17v-3.8c0-1.5 1-2.7 2.5-2.7S17 11.7 17 13.2V17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                    </svg>
                  ),
                },
                {
                  l: "YouTube",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" stroke="currentColor" strokeWidth="1.7" />
                      <path d="M10.2 9.4l4.6 2.6-4.6 2.6V9.4z" fill="currentColor" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.l}
                  href="#top"
                  aria-label={s.l}
                  className="grid h-10 w-10 place-items-center border border-hairline text-mute transition-all duration-300 hover:border-brass hover:text-brass"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.h} className="lg:col-span-2">
              <h4 className="font-body text-[11px] font-bold tracking-[0.3em] uppercase text-brass">
                {c.h}
              </h4>
              <ul className="mt-5 space-y-3">
                {c.items.map((it) => (
                  <li key={it.l}>
                    <a
                      href={it.h}
                      className="font-body text-[14px] text-mute transition-colors duration-300 hover:text-paper"
                    >
                      {it.l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-3">
            <h4 className="font-body text-[11px] font-bold tracking-[0.3em] uppercase text-brass">
              Head Office
            </h4>
            <ul className="mt-5 space-y-4 font-body text-[14px] text-mute">
              <li className="flex gap-3">
                <svg className="mt-0.5 shrink-0" width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
                </svg>
                Dar Misr El Obour (موقع ١),
                <br />
                Obour City, Cairo, Egypt
              </li>
              <li>
                <a href="tel:+201103072004" className="transition-colors duration-300 hover:text-paper">
                  +20 110 307 2004
                </a>
              </li>
              <li>
                <a href="mailto:hello@estatexegypt.com" className="transition-colors duration-300 hover:text-paper">
                  hello@estatexegypt.com
                </a>
              </li>
              <li className="text-[13px] text-mute/80">Sun – Thu · 10:00 — 19:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-8 md:flex-row">
          <p className="font-body text-[12px] tracking-wide text-mute/70">
            © {new Date().getFullYear()} EstateX Real Estate Solutions. All rights reserved.
          </p>
          <p className="font-body text-[12px] tracking-[0.25em] uppercase text-mute/50">
            Cairo <span className="text-brass">◆</span> New Cairo <span className="text-brass">◆</span> Obour City <span className="text-brass">◆</span> Dubai
          </p>
        </div>
      </div>
    </footer>
  );
}
