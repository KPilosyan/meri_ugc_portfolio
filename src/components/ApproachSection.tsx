import React from "react";

export const ApproachSection = () => {
  return (
    <section id="approach" className="py-24 bg-ugc-sand/70 border-b border-ugc-burgundy/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Header */}
          <div className="lg:col-span-4">
            <span className="text-xs font-semibold tracking-editorial text-ugc-burgundy/70 uppercase mb-2 block">
              PAGE 03 — PHILOSOPHY
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ugc-burgundy leading-tight">
              CREATIVE DIRECTION & STRATEGY
            </h2>
            <p className="text-xs font-sans tracking-wide text-ugc-burgundy/80 uppercase mt-4 leading-relaxed">
              CONTENT CREATED FROM A BRAND-FIRST PERSPECTIVE. COMBINING VISUAL ELEGANCE WITH COMMERCIALLY TESTED AD FRAMEWORKS.
            </p>
          </div>

          {/* Core Pillars */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Card 01 */}
            <div className="p-8 editorial-glass rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-ugc-burgundy/15">
              <div>
                <span className="text-xs font-serif italic text-ugc-burgundy/60 block mb-3">01</span>
                <h3 className="font-serif text-2xl font-bold text-ugc-burgundy mb-1 tracking-wide">STORYTELLING</h3>
              </div>
              <p className="text-xs font-sans text-ugc-burgundy/80 tracking-wide leading-relaxed">
                Native scenarios and organic flow that prevent ad fatigue and keep viewers engaged past the 3-second mark
              </p>
            </div>

            {/* Card 02 */}
            <div className="p-8 editorial-glass rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-ugc-burgundy/15">
              <div>
                <span className="text-xs font-serif italic text-ugc-burgundy/60 block mb-3">02</span>
                <h3 className="font-serif text-2xl font-bold text-ugc-burgundy mb-4 tracking-wide">RELATABILITY</h3>
              </div>
              <p className="text-xs font-sans text-ugc-burgundy/80 tracking-wide leading-relaxed">
                Realistic textures, lighting, and authentic dialogue that build instant consumer trust and social proof
              </p>
            </div>

            {/* Card 03 */}
            <div className="p-8 editorial-glass rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-ugc-burgundy/15">
              <div>
                <span className="text-xs font-serif italic text-ugc-burgundy/60 block mb-3">03</span>
                <h3 className="font-serif text-2xl font-bold text-ugc-burgundy mb-4 tracking-wide">CONVERSION</h3>
              </div>
              <p className="text-xs font-sans text-ugc-burgundy/80 tracking-wide leading-relaxed">
                Strategic hooks, value proposition deliveries, and clear calls-to-action designed for paid social performance
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};