"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const EditorialImageReveal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-hidden relative">
      <motion.div
        initial={{ clipPath: "inset(100% 0 0 0)", scale: 1.15 }}
        whileInView={{ clipPath: "inset(0% 0 0 0)", scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-ugc-pink pt-28 pb-16 flex items-center overflow-hidden border-b border-ugc-burgundy/10"
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col justify-between">
        {/* Editorial Watermark Metadata (In-Flow Alignment) */}
        <div className="flex flex-wrap items-center gap-3 text-[11px] tracking-editorial font-sans text-ugc-burgundy/80 uppercase mb-8 z-10">
          <span>BELIEVE</span>
          
          {/* Centered Bullet Dot */}
          <span className="w-1 h-1 rounded-full bg-ugc-burgundy/50 shrink-0" aria-hidden="true" />

          <span>DREAM</span>
          
          {/* Responsive Centered Bullet Dot */}
          <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-ugc-burgundy/50 shrink-0" aria-hidden="true" />

          <span className="hidden sm:inline">INSPIRE</span>
        </div>

        {/* Hero Content Grid - Changed items-center to items-start for top alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (Desktop: Text + Collage | Mobile: Order 1 Text, Order 3 Collage) */}
          <div className="lg:col-span-6 flex flex-col justify-start z-10">
            {/* Text Copy Block */}
            <div className="order-1">
              <span className="text-xs font-semibold tracking-editorial text-ugc-burgundy uppercase mb-2 block">
                PAGE 01 — POSITIONING
              </span>
              
              <h1 className="font-serif text-5xl sm:text-7xl xl:text-8xl leading-[0.9] text-ugc-burgundy font-bold tracking-tight mb-6">
                UGC PORTFOLIO
              </h1>

              {/* Elevated Positioning Statement */}
              <p className="text-xs sm:text-sm tracking-wide text-ugc-burgundy/90 max-w-md font-sans uppercase leading-relaxed mb-8 tracking-editorial">
                ELEVATED UGC THAT FEELS NATIVE TO THE FEED — NOT LIKE AN ADVERTISEMENT. 
                ENGINEERING SHORT-FORM ASSETS, CREATIVE HOOKS, AND CONTENT STRATEGIES 
                FOR BEAUTY, SKINCARE, AND LIFESTYLE BRANDS.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="#portfolio"
                  className="px-8 py-3.5 bg-ugc-burgundy text-ugc-cream text-xs font-semibold tracking-editorial uppercase hover:bg-ugc-burgundyDark transition-all"
                >
                  VIEW MY WORK →
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3.5 border border-ugc-burgundy text-ugc-burgundy text-xs font-semibold tracking-editorial uppercase hover:bg-ugc-burgundy hover:text-ugc-cream transition-all"
                >
                  LET'S WORK →
                </a>
              </div>
            </div>

            {/* Editorial Floating Collage (Order 3 on Mobile, Normal layout on Desktop) */}
            <div className="order-3 lg:order-2 relative w-full max-w-4xl h-[380px] sm:h-[440px] mt-12 select-none mx-auto flex items-center justify-center">

              {/* Card 1 - Far Left (Low Anchor) */}
              <div className="absolute left-[0%] bottom-6 z-10 w-32 sm:w-44 p-2 bg-white rounded-xs shadow-[0_10px_30px_rgba(0,0,0,0.08)] -rotate-3 hover:rotate-0 hover:scale-105 hover:z-40 transition-all duration-500 ease-out cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden rounded-xs bg-ugc-sand/20">
                  <img src="/images/1.png" alt="UGC Content 1" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Card 2 - Left Center (Elevated Hero) */}
              <div className="absolute left-[16%] top-2 z-20 w-36 sm:w-48 p-2 bg-white rounded-xs shadow-[0_15px_35px_rgba(0,0,0,0.12)] rotate-9 hover:rotate-0 hover:scale-105 hover:z-40 transition-all duration-500 ease-out cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden rounded-xs bg-ugc-sand/20">
                  <img src="/images/3.png" alt="UGC Content 2" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Card 3 - True Center (Grounded Anchor) */}
              <div className="absolute left-[35%] bottom-2 z-30 w-36 sm:w-48 p-2.5 bg-white rounded-xs shadow-[0_20px_40px_rgba(0,0,0,0.15)] -rotate-1 hover:rotate-0 hover:scale-105 hover:z-40 transition-all duration-500 ease-out cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden rounded-xs bg-ugc-sand/20">
                  <img src="/images/5.png" alt="UGC Content 5" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Card 4 - Right Center (High Accent) */}
              <div className="absolute right-[19%] top-4 z-10 w-32 sm:w-44 p-2 bg-white rounded-xs shadow-[0_10px_30px_rgba(0,0,0,0.08)] rotate-1 hover:rotate-0 hover:scale-105 hover:z-40 transition-all duration-500 ease-out cursor-pointer">
                <div className="aspect-square overflow-hidden rounded-xs bg-ugc-sand/20">
                  <img src="/images/6.png" alt="UGC Content 3" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Card 5 - Far Right (Hero Offset) */}
              <div className="absolute right-[2%] top-[32%] z-20 w-36 sm:w-48 p-2 bg-white rounded-xs shadow-[0_15px_35px_rgba(0,0,0,0.12)] -rotate-6 hover:rotate-0 hover:scale-105 hover:z-40 transition-all duration-500 ease-out cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden rounded-xs bg-ugc-sand/20">
                  <img src="/images/4.png" alt="UGC Content 4" className="w-full h-full object-cover" />
                </div>
              </div>

            </div>
          </div>

          {/* Right Portrait Image (Order 2 on Mobile, Right Column on Desktop) */}
          <div className="order-2 lg:order-none lg:col-span-6 relative h-[500px] sm:h-[650px] w-full my-6 lg:my-0">
            <div className="relative w-full h-full bg-ugc-sand overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="/images/profile.png"
                alt="Editorial UGC Photography"
                fill
                priority
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute top-4 right-4 text-ugc-burgundy text-xl font-sans">
              ▲
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};