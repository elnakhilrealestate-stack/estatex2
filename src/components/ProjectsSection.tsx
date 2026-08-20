"use client";

import { useState } from "react";
import { Eyebrow, Reveal } from "./ui";
import ProjectDetailModal from "./ProjectDetailModal";

type Project = {
  id: number;
  name: string;
  location: string;
  developer: string;
  priceFrom: string;
  downPayment: string;
  installments: string;
  tag: string;
  description: string;
  image: string;
  featured: boolean | null;
  sort: number | null;
};

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<"All" | "Off-Plan" | "Ready">("All");

  const filtered = projects.filter((p) => {
    if (activeTab === "All") return true;
    return p.tag === activeTab;
  });

  return (
    <section id="projects" className="grain relative bg-paper py-24 text-ink md:py-32">
      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Eyebrow num="01" label="Premium Listings" dark />
            <h2 className="mt-6 font-display text-4xl leading-[1.05] font-medium tracking-tight md:text-6xl text-left">
              Where your capital
              <br />
              finds its <em className="text-brass-deep italic">view</em>
            </h2>
          </div>
          <Reveal delay={150}>
            <p className="max-w-sm font-body text-[15px] leading-relaxed text-mute-dark text-left">
              A curated shortlist of off-plan developments and ready communities across Cairo, Obour City, and New Cairo, fully verified by EstateX.
            </p>
          </Reveal>
        </div>

        {/* Tab filters */}
        <div className="mt-12 flex flex-wrap gap-3 border-b border-ink/10 pb-5">
          {(["All", "Off-Plan", "Ready"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 font-body text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                activeTab === tab
                  ? "bg-ink text-paper"
                  : "border border-ink/10 bg-white/40 text-ink hover:border-ink hover:bg-white"
              }`}
            >
              {tab === "All" ? "All Listings" : tab === "Off-Plan" ? "Off-Plan (قيد الإنشاء)" : "Ready to Move (جاهز للاستلام)"}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 120} as="article">
              <button
                onClick={() => setSelectedProject(p)}
                className="group block w-full text-left border border-ink/10 bg-white/60 transition-all duration-500 hover:-translate-y-2 hover:border-brass-deep/40 hover:shadow-[0_24px_60px_-24px_rgba(27,22,12,0.35)]"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="card-img h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
                  <span
                    className={`absolute top-4 left-4 px-3 py-1.5 font-body text-[10px] font-bold tracking-[0.22em] uppercase ${
                      p.tag === "Off-Plan"
                        ? "bg-brass text-ink"
                        : "bg-ink/85 text-paper"
                    }`}
                  >
                    {p.tag}
                  </span>
                  <span className="absolute right-4 bottom-4 font-display text-5xl font-light text-paper/25">
                    0{i + 1}
                  </span>
                </div>

                <div className="p-6">
                  <p className="font-body text-[11px] font-bold tracking-[0.28em] uppercase text-brass-deep">
                    {p.location}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-ink line-clamp-1">
                    {p.name}
                  </h3>
                  <p className="mt-1 font-body text-[13px] font-medium text-mute-dark">
                    by {p.developer}
                  </p>
                  <p className="mt-3 line-clamp-2 font-body text-[14px] leading-relaxed text-mute-dark/90 h-10">
                    {p.description}
                  </p>

                  <div className="mt-5 grid grid-cols-3 divide-x divide-ink/10 border-t border-ink/10 pt-5">
                    <div>
                      <p className="font-body text-[10px] font-bold tracking-[0.2em] uppercase text-mute-dark/70">
                        From
                      </p>
                      <p className="mt-1 font-body text-[13px] font-bold text-ink">
                        {p.priceFrom}
                      </p>
                    </div>
                    <div className="pl-4">
                      <p className="font-body text-[10px] font-bold tracking-[0.2em] uppercase text-mute-dark/70">
                        Down
                      </p>
                      <p className="mt-1 font-body text-[13px] font-bold text-brass-deep">
                        {p.downPayment}
                      </p>
                    </div>
                    <div className="pl-4">
                      <p className="font-body text-[10px] font-bold tracking-[0.2em] uppercase text-mute-dark/70">
                        Installments
                      </p>
                      <p className="mt-1 font-body text-[13px] font-bold text-ink whitespace-nowrap">
                        {p.installments}
                      </p>
                    </div>
                  </div>

                  <div className="arrow-link mt-5 flex items-center gap-2 font-body text-[11px] font-bold tracking-[0.25em] uppercase text-ink transition-colors duration-300 group-hover:text-brass-deep">
                    View & Request Details
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-14 flex justify-center">
            <a
              href="#contact"
              className="group relative overflow-hidden border border-ink px-10 py-4 font-body text-[12px] font-bold tracking-[0.2em] uppercase text-ink"
            >
              <span className="absolute inset-0 -translate-y-full bg-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
              <span className="relative transition-colors duration-500 group-hover:text-paper">
                Request Complete Catalogue
              </span>
            </a>
          </div>
        </Reveal>
      </div>

      {/* Dynamic Slide-over details & inquiry modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
