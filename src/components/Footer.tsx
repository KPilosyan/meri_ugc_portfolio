"use client";

import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ugc-pink py-12 border-t border-ugc-burgundy/10 text-ugc-burgundy">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-serif text-xl font-bold tracking-wider block">
            Mary Zatikian
          </span>
          <span className="text-[10px] tracking-editorial uppercase text-ugc-burgundy/80">
            UGC CREATOR & CONTENT STRATEGIST © 2026
          </span>
        </div>

        <div className="text-[10px] tracking-editorial uppercase">
          PAGE 10 / 10 • EDITORIAL UGC PORTFOLIO
        </div>
      </div>
    </footer>
  );
};