"use client";

import { useState } from "react";
import { GLOVO_URL } from "@/lib/constants";

export default function GlovoWidget() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-2">
      {/* Tooltip */}
      <div
        className={`pointer-events-none transition-all duration-300 ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
        }`}
      >
        <span className="bg-nollie-black/90 border border-[#00A082]/30 text-nollie-cream text-xs px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg">
          Encomendar na Glovo
        </span>
      </div>

      {/* Botão */}
      <a
        href={GLOVO_URL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Encomendar na Glovo"
        className="w-11 h-11 rounded-full bg-[#00A082] hover:bg-[#00b893] shadow-xl shadow-black/40 flex items-center justify-center transition-all duration-300 hover:scale-110"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </a>
    </div>
  );
}
