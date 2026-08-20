"use client";

import { useEffect, useState, type FormEvent } from "react";

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

// Expand specifications dynamically based on project names for richer detail
const getSpecsForProject = (p: Project) => {
  if (p.name.includes("Obour") || p.name.includes("عمر") || p.name.includes("دار مصر")) {
    return {
      size: "100 m² - 140 m²",
      bedrooms: "3 Bedrooms",
      bathrooms: "2 Bathrooms",
      amenities: ["Gated Compound", "Beside El Habib El Mostafa Mosque", "Immediate Resale Opportunity", "High Rental Yield", "Security 24/7", "Kids Area"],
      completion: "Ready to Move (فوري)",
      paymentPlan: "Cash & Installments available",
    };
  }
  if (p.name.includes("Villa") || p.name.includes("The Palm")) {
    return {
      size: "340 m² - 650 m²",
      bedrooms: "4 - 6 Bedrooms",
      bathrooms: "4 - 5 Bathrooms",
      amenities: ["Private Infinity Pool", "Smart Home Automation", "Private Clubhouse Access", "Concierge Service", "Solar Power Grid", "Underground Garage"],
      completion: "Ready to Move (تسليم فوري)",
      paymentPlan: "33% Down Payment, 6 Years Installments",
    };
  }
  return {
    size: "120 m² - 280 m²",
    bedrooms: "2 - 4 Bedrooms",
    bathrooms: "2 - 3 Bathrooms",
    amenities: ["Panoramic Skyline Views", "Walkable Metro Line Corridor", "Rooftop infinity Lounge", "Retail and Dining District", "Equipped Gym", "Double Height Lobbies"],
    completion: "Off-Plan (Under Construction)",
    paymentPlan: "10% Down Payment, Up to 10 Years Installments",
  };
};

export default function ProjectDetailModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  if (!project) return null;

  const specs = getSpecsForProject(project);

  async function handleInquiry(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!project) return;
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      interest: `Project: ${project.name} (${project.location})`,
      message: `Inquired from Project Detail Slider. Custom message: ${formData.get("message") || "Interested in learning more."}`,
    };

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("inquiry failed");
      setSuccess(true);
      form.reset();
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-md transition-opacity duration-300">
      {/* backdrop click */}
      <button
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-transparent text-left"
        aria-label="Close modal"
      />

      {/* slider contents */}
      <div className="relative flex h-full w-full flex-col bg-panel text-paper shadow-2xl transition-transform duration-500 sm:max-w-2xl md:max-w-3xl overflow-y-auto">
        {/* sticky close header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-hairline bg-panel/95 px-6 py-4 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="bg-brass px-3 py-1 font-body text-[10px] font-bold tracking-[0.2em] uppercase text-ink">
              {project.tag}
            </span>
            <span className="font-body text-[12px] font-semibold text-mute">
              {project.location}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="group flex h-10 w-10 items-center justify-center border border-hairline bg-ink/40 text-paper transition-all duration-300 hover:border-brass hover:text-brass"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:rotate-90">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* hero visual */}
        <div className="relative h-72 w-full shrink-0 overflow-hidden md:h-96">
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="font-body text-[11px] font-bold tracking-[0.25em] uppercase text-brass">
              {project.developer} Developer Partner
            </p>
            <h2 className="mt-1.5 font-display text-3xl font-semibold text-paper md:text-4xl">
              {project.name}
            </h2>
          </div>
        </div>

        {/* body details */}
        <div className="flex-1 p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-12">
            {/* specs & features */}
            <div className="space-y-6 md:col-span-7">
              <div>
                <h3 className="font-display text-xl font-semibold text-brass">Project Overview</h3>
                <p className="mt-3 font-body text-[14.5px] leading-relaxed text-mute">
                  {project.description}
                </p>
              </div>

              {/* specification badges */}
              <div className="grid grid-cols-2 gap-4 border-t border-hairline pt-6">
                <div>
                  <span className="block font-body text-[10px] font-bold tracking-wider text-mute/60 uppercase">Area & Sizes</span>
                  <span className="mt-1 block font-body text-[14px] font-bold text-paper">{specs.size}</span>
                </div>
                <div>
                  <span className="block font-body text-[10px] font-bold tracking-wider text-mute/60 uppercase">Availability</span>
                  <span className="mt-1 block font-body text-[14px] font-bold text-paper">{specs.completion}</span>
                </div>
                <div>
                  <span className="block font-body text-[10px] font-bold tracking-wider text-mute/60 uppercase">Bedrooms</span>
                  <span className="mt-1 block font-body text-[14px] font-bold text-paper">{specs.bedrooms}</span>
                </div>
                <div>
                  <span className="block font-body text-[10px] font-bold tracking-wider text-mute/60 uppercase">Bathrooms</span>
                  <span className="mt-1 block font-body text-[14px] font-bold text-paper">{specs.bathrooms}</span>
                </div>
              </div>

              {/* pricing specs */}
              <div className="grid grid-cols-3 gap-4 border-t border-b border-hairline py-5">
                <div>
                  <span className="block font-body text-[10px] font-bold tracking-wider text-mute/60 uppercase">Pricing From</span>
                  <span className="mt-1 block font-body text-[15px] font-bold text-brass-bright">{project.priceFrom}</span>
                </div>
                <div>
                  <span className="block font-body text-[10px] font-bold tracking-wider text-mute/60 uppercase">Down Payment</span>
                  <span className="mt-1 block font-body text-[15px] font-bold text-paper">{project.downPayment}</span>
                </div>
                <div>
                  <span className="block font-body text-[10px] font-bold tracking-wider text-mute/60 uppercase">Installments</span>
                  <span className="mt-1 block font-body text-[15px] font-bold text-paper">{project.installments}</span>
                </div>
              </div>

              {/* amenities list */}
              <div>
                <h4 className="font-body text-[11px] font-bold tracking-[0.25em] uppercase text-brass">Key Amenities & Selling Points</h4>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {specs.amenities.map((amenity, i) => (
                    <li key={i} className="flex items-center gap-2.5 font-body text-[13px] text-mute">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brass/10 text-brass">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* sidebar immediate request call form */}
            <div className="md:col-span-5">
              <div className="border border-hairline bg-ink/50 p-5 md:p-6 sticky top-24">
                <h4 className="font-display text-lg font-semibold text-paper">Request Brochure</h4>
                <p className="mt-1 font-body text-[12px] text-mute leading-relaxed">
                  Enter details to schedule a premium physical tour or receive structural brochures.
                </p>

                {success ? (
                  <div className="mt-6 flex flex-col items-center justify-center text-center py-4">
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-brass/50 bg-brass/10 text-brass">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <h5 className="mt-3 font-display text-base font-bold">Inquiry Lodged</h5>
                    <p className="mt-1 font-body text-[11.5px] text-mute">
                      An advisor from EstateX will phone you immediately.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleInquiry} className="mt-5 space-y-4">
                    <div>
                      <label htmlFor="modal-name" className="mb-1 block font-body text-[9px] font-bold tracking-wider uppercase text-mute">Your Name</label>
                      <input
                        id="modal-name"
                        name="name"
                        required
                        type="text"
                        placeholder="Ahmed Ali"
                        className="w-full border border-hairline bg-panel px-3 py-2.5 font-body text-[13px] text-paper placeholder:text-mute/30 focus:border-brass focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-phone" className="mb-1 block font-body text-[9px] font-bold tracking-wider uppercase text-mute">Egyptian Phone *</label>
                      <input
                        id="modal-phone"
                        name="phone"
                        required
                        type="tel"
                        placeholder="+20 110 307 2004"
                        className="w-full border border-hairline bg-panel px-3 py-2.5 font-body text-[13px] text-paper placeholder:text-mute/30 focus:border-brass focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-email" className="mb-1 block font-body text-[9px] font-bold tracking-wider uppercase text-mute">Email (Optional)</label>
                      <input
                        id="modal-email"
                        name="email"
                        type="email"
                        placeholder="client@estatestudy.com"
                        className="w-full border border-hairline bg-panel px-3 py-2.5 font-body text-[13px] text-paper placeholder:text-mute/30 focus:border-brass focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-msg" className="mb-1 block font-body text-[9px] font-bold tracking-wider uppercase text-mute">Special Requests</label>
                      <textarea
                        id="modal-msg"
                        name="message"
                        rows={2}
                        placeholder="Preferred delivery, downpayment limits..."
                        className="w-full border border-hairline bg-panel px-3 py-2.5 font-body text-[13px] text-paper placeholder:text-mute/30 focus:border-brass focus:outline-none resize-none"
                      />
                    </div>

                    {error && (
                      <p className="font-body text-[12px] text-red-400">Connection error. Retry.</p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-brass py-3 font-body text-[11px] font-bold tracking-widest uppercase text-ink transition-colors duration-300 hover:bg-brass-bright disabled:opacity-50"
                    >
                      {submitting ? "Sending..." : "Submit Inquiry"}
                    </button>
                  </form>
                )}

                <div className="mt-4 border-t border-hairline pt-4 text-center">
                  <p className="font-body text-[10px] text-mute/50">Direct WhatsApp assistance:</p>
                  <a
                    href={`https://wa.me/201103072004?text=Hello%20EstateX,%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(project.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-flex items-center gap-1.5 font-body text-[11px] font-bold tracking-wider uppercase text-brass hover:text-brass-bright"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 4.905L2 22l5.285-1.371C8.3 21.282 9.619 21.6 12.007 21.6c5.506 0 9.989-4.478 9.99-9.984C22.007 6.11 17.518 2 12.012 2zm5.836 14.199c-.24.675-1.385 1.29-1.905 1.343-.465.053-.9-.12-2.925-.922-2.585-1.028-4.22-3.653-4.355-3.832-.135-.18-1.095-1.455-1.095-2.777 0-1.32.69-1.965.93-2.228.24-.262.525-.33.7-.33.18 0 .36.007.51.015.165.007.39-.06.615.48.24.57.81 1.98.885 2.13.075.15.12.33.015.525-.105.195-.165.315-.33.51-.165.195-.345.435-.495.585-.165.165-.345.345-.15.69.195.33.87 1.425 1.86 2.31.1.09.2.14.3.14s.15-.05.3-.15c.345-.345.75-.765.945-1.02.195-.255.45-.195.735-.09.285.105 1.8 1.14 2.115 1.29.315.15.525.225.599.36.076.135.076.78-.164 1.454z" />
                    </svg>
                    WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
