"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = [
  { id: "hero", label: "HERO", num: "01" },
  { id: "about", label: "ABOUT ME", num: "02" },
  { id: "approach", label: "PHILOSOPHY", num: "03" },
  { id: "portfolio", label: "PORTFOLIO", num: "04" },
  { id: "services", label: "SERVICES", num: "05" },
  { id: "process", label: "PROCESS", num: "06" },
  { id: "testimonials", label: "REVIEWS", num: "07" },
  { id: "brand-fit", label: "BRAND FIT", num: "08" },
  { id: "faq", label: "FAQ", num: "09" },
  { id: "contact", label: "CONTACT", num: "10" },
];

export const EditorialIndicator = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveIdx(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const current = SECTIONS[activeIdx];

  return (
    <aside
      aria-label="Editorial Section Navigation"
      className="hidden md:block fixed left-6 bottom-8 z-50 select-none"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Expanded Quick Navigation List */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 p-2 bg-ugc-dark/90 backdrop-blur-md border border-ugc-pink/30 rounded-2xl shadow-2xl w-48 text-ugc-cream"
          >
            <div className="text-[10px] uppercase font-sans tracking-widest text-ugc-pink/70 px-3 py-1 font-semibold">
              Jump to Section
            </div>
            <div className="mt-1 space-y-0.5 max-h-60 overflow-y-auto custom-scrollbar">
              {SECTIONS.map((sec, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full flex items-center justify-between px-3 py-1.5 rounded-xl text-xs transition-colors text-left ${
                      isActive
                        ? "bg-ugc-burgundy text-white font-bold"
                        : "hover:bg-white/10 text-ugc-cream/80"
                    }`}
                  >
                    <span className="font-serif">{sec.num}</span>
                    <span className="font-sans text-[10px] tracking-wider uppercase">
                      {sec.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Visible Floating Pill */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center space-x-3 px-4 py-2.5 rounded-full bg-ugc-burgundy text-ugc-cream shadow-xl border border-ugc-pink/40 cursor-pointer backdrop-blur-md"
      >
        {/* Pulsing Active Dot */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ugc-pink opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-ugc-pink" />
        </span>

        {/* Counter Number */}
        <div className="overflow-hidden h-4 flex items-center font-serif text-sm font-bold tracking-wider text-ugc-pink">
          <AnimatePresence mode="wait">
            <motion.span
              key={current.num}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {current.num}
            </motion.span>
          </AnimatePresence>
          <span className="mx-1 opacity-50 text-ugc-cream">/</span>
          <span className="opacity-50 text-ugc-cream">
            {SECTIONS.length.toString().padStart(2, "0")}
          </span>
        </div>

        <div className="w-[1px] h-3 bg-ugc-pink/30" />

        {/* Section Name */}
        <div className="overflow-hidden h-4 flex items-center font-sans text-[11px] font-bold tracking-widest uppercase">
          <AnimatePresence mode="wait">
            <motion.span
              key={current.label}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {current.label}
            </motion.span>
          </AnimatePresence>
        </div>
      </motion.div>
    </aside>
  );
};