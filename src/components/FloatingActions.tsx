"use client";

import { useEffect, useState } from "react";

export default function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phone = "+201103072004";
  const whatsappUrl = `https://wa.me/201103072004?text=Hello%20EstateX,%20I%20am%20interested%20in%20your%20real%20estate%20services!`;
  const facebookUrl = "https://web.facebook.com/profile.php?id=61590874285563";

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col gap-3.5 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0 pointer-events-none"
      }`}
    >
      {/* Facebook Link */}
      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit EstateX on Facebook"
        className="group relative flex h-13 w-13 items-center justify-center rounded-full bg-[#1877f2] text-white shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95"
      >
        <span className="absolute right-15 scale-0 bg-ink px-3 py-1.5 font-body text-[11px] font-bold tracking-wider text-paper uppercase opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap">
          Facebook Page
        </span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
        </svg>
      </a>

      {/* Direct Call */}
      <a
        href={`tel:${phone}`}
        aria-label="Call EstateX Support"
        className="group relative flex h-13 w-13 items-center justify-center rounded-full bg-brass text-ink shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95"
      >
        <span className="absolute right-15 scale-0 bg-ink px-3 py-1.5 font-body text-[11px] font-bold tracking-wider text-paper uppercase opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap">
          Call Now
        </span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.7 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>

      {/* WhatsApp Chat */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with EstateX on WhatsApp"
        className="group relative flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95"
      >
        <span className="absolute right-15 scale-0 bg-ink px-3 py-1.5 font-body text-[11px] font-bold tracking-wider text-paper uppercase opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap">
          WhatsApp Chat
        </span>
        <span className="absolute -top-1 -left-1 flex h-4.5 w-4.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4.5 w-4.5 bg-red-500"></span>
        </span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 4.905L2 22l5.285-1.371C8.3 21.282 9.619 21.6 12.007 21.6c5.506 0 9.989-4.478 9.99-9.984C22.007 6.11 17.518 2 12.012 2zm5.836 14.199c-.24.675-1.385 1.29-1.905 1.343-.465.053-.9-.12-2.925-.922-2.585-1.028-4.22-3.653-4.355-3.832-.135-.18-1.095-1.455-1.095-2.777 0-1.32.69-1.965.93-2.228.24-.262.525-.33.7-.33.18 0 .36.007.51.015.165.007.39-.06.615.48.24.57.81 1.98.885 2.13.075.15.12.33.015.525-.105.195-.165.315-.33.51-.165.195-.345.435-.495.585-.165.165-.345.345-.15.69.195.33.87 1.425 1.86 2.31.1.09.2.14.3.14s.15-.05.3-.15c.345-.345.75-.765.945-1.02.195-.255.45-.195.735-.09.285.105 1.8 1.14 2.115 1.29.315.15.525.225.599.36.076.135.076.78-.164 1.454z" />
        </svg>
      </a>
    </div>
  );
}
