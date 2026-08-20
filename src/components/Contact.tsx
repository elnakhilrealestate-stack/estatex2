"use client";

import { useState, type FormEvent } from "react";
import { Eyebrow, Reveal } from "./ui";

const interests = [
  "Buying — Off-Plan",
  "Buying — Ready",
  "Selling My Unit",
  "Investment Consultation",
  "Free Course Access",
];

const contactRows = [
  {
    l: "Call Us",
    v: "+20 110 307 2004",
    href: "tel:+201103072004",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 4h4l2 5-2.5 1.5a12 12 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"
          stroke="#c8a24f"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    l: "Email Us",
    v: "hello@estatexegypt.com",
    href: "mailto:hello@estatexegypt.com",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="#c8a24f" strokeWidth="1.6" />
        <path d="M3.5 7l8.5 6 8.5-6" stroke="#c8a24f" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    l: "Head Office",
    v: "Dar Misr (موقع ١), Obour City, Cairo",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" stroke="#c8a24f" strokeWidth="1.6" />
        <circle cx="12" cy="10" r="2.5" stroke="#c8a24f" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    l: "Working Hours",
    v: "Sunday – Thursday · 10:00 — 19:00",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="#c8a24f" strokeWidth="1.6" />
        <path d="M12 7v5l3.2 2" stroke="#c8a24f" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputCls =
    "w-full border border-hairline bg-ink/60 px-4 py-3.5 font-body text-[14px] text-paper placeholder:text-mute/50 transition-all duration-300 focus:border-brass focus:bg-ink/80 focus:outline-none";
  const labelCls =
    "mb-2 block font-body text-[10px] font-bold tracking-[0.28em] uppercase text-mute";

  return (
    <section
      id="contact"
      className="grain relative overflow-hidden bg-ink py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(200,162,79,0.4) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* left */}
          <div className="lg:col-span-5">
            <Eyebrow num="06" label="Get In Touch" />
            <h2 className="mt-6 font-display text-4xl leading-[1.05] font-medium tracking-tight text-paper md:text-6xl">
              Start with a
              <br />
              <em className="text-brass italic">conversation</em>
            </h2>
            <p className="mt-6 max-w-md font-body text-[15px] leading-relaxed text-mute">
              Tell us what you have in mind — a unit to buy, a property to
              sell, or a portfolio to build. One of our advisors will call you
              back within one business day.
            </p>

            <div className="mt-10 space-y-6">
              {contactRows.map((r, i) => (
                <Reveal key={r.l} delay={i * 100}>
                  <div className="flex items-center gap-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center border border-hairline bg-panel/60">
                      {r.icon}
                    </span>
                    <div>
                      <p className="font-body text-[10px] font-bold tracking-[0.28em] uppercase text-mute/70">
                        {r.l}
                      </p>
                      {r.href ? (
                        <a
                          href={r.href}
                          className="font-body text-[15px] font-semibold text-paper transition-colors duration-300 hover:text-brass"
                        >
                          {r.v}
                        </a>
                      ) : (
                        <p className="font-body text-[15px] font-semibold text-paper">
                          {r.v}
                        </p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* form */}
          <Reveal delay={150} className="lg:col-span-7">
            <div className="relative border border-hairline bg-coal/80 p-7 backdrop-blur-sm md:p-10">
              <div className="absolute -top-px left-10 h-px w-24 bg-brass" />
              {status === "done" ? (
                <div className="flex min-h-[430px] flex-col items-center justify-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full border border-brass/50 bg-brass/10">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M4 12.5l5 5L20 6.5" stroke="#c8a24f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <h3 className="mt-6 font-display text-3xl font-semibold text-paper">
                    Request received
                  </h3>
                  <p className="mt-3 max-w-sm font-body text-[14px] leading-relaxed text-mute">
                    Thank you for reaching out. One of our advisors will
                    contact you within one business day.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 border border-hairline px-6 py-3 font-body text-[11px] font-bold tracking-[0.2em] uppercase text-paper transition-all duration-300 hover:border-brass hover:text-brass"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelCls}>
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        placeholder="Omar Khaled"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelCls}>
                        Phone *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        required
                        type="tel"
                        placeholder="+20 100 000 0000"
                        className={inputCls}
                      />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className={labelCls}>
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="interest" className={labelCls}>
                        I am interested in
                      </label>
                      <select id="interest" name="interest" className={inputCls} defaultValue={interests[0]}>
                        {interests.map((o) => (
                          <option key={o} value={o} className="bg-coal">
                            {o}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className={labelCls}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your budget, preferred location or the unit you want to sell…"
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  {status === "error" && (
                    <p className="font-body text-[13px] font-semibold text-red-400">
                      Something went wrong — please try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group relative w-full overflow-hidden bg-brass px-8 py-4 font-body text-[12px] font-bold tracking-[0.22em] uppercase text-ink transition-all duration-500 hover:bg-brass-bright disabled:cursor-wait disabled:opacity-70"
                  >
                    {status === "sending" ? "Sending…" : "Request a Call Back"}
                    {status !== "sending" && (
                      <svg
                        className="ml-3 inline-block transition-transform duration-500 group-hover:translate-x-1.5"
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                  <p className="text-center font-body text-[11px] text-mute/60">
                    By submitting, you agree to be contacted by a Views advisor. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
