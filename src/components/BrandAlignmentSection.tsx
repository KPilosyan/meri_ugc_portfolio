import React from "react";

export const BrandAlignmentSection = () => {
  return (
    <section id="alignment" className="py-24 bg-ugc-cream border-b border-ugc-burgundy/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-editorial text-ugc-burgundy uppercase mb-2 block">
            PAGE 04 — BRAND FIT
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-ugc-burgundy">
            THE BRANDS I CREATE BEST WITH
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Categories */}
          <div className="p-8 bg-ugc-pink/70 border border-ugc-burgundy/15">
            <h3 className="font-serif text-2xl font-bold text-ugc-burgundy mb-6 pb-4 border-b border-ugc-burgundy/20">
              CORE INDUSTRIES
            </h3>
            <ul className="space-y-4 text-xs font-sans uppercase tracking-editorial text-ugc-burgundy">
              <li className="flex items-center justify-between">
                <span>SKINCARE</span>
                <span>✦</span>
              </li>
              <li className="flex items-center justify-between">
                <span>LUXURY COSMETICS</span>
                <span>✦</span>
              </li>
              <li className="flex items-center justify-between">
                <span>CLINICAL BEAUTY</span>
                <span>✦</span>
              </li>
              <li className="flex items-center justify-between">
                <span>MAKEUP</span>
                <span>✦</span>
              </li>
            </ul>
          </div>

          {/* Partnership Types */}
          <div className="p-8 bg-ugc-pink/70 border border-ugc-burgundy/15">
            <h3 className="font-serif text-2xl font-bold text-ugc-burgundy mb-6 pb-4 border-b border-ugc-burgundy/20">
              COLLABORATION TYPES
            </h3>
            <ul className="space-y-4 text-xs font-sans uppercase tracking-editorial text-ugc-burgundy">
              <li className="flex items-center justify-between">
                <span>LONG-TERM RETAINER PARTNERSHIPS</span>
                <span>✦</span>
              </li>
              <li className="flex items-center justify-between">
                <span>PAID SOCIAL AD CAMPAIGNS</span>
                <span>✦</span>
              </li>
              <li className="flex items-center justify-between">
                <span>NEW PRODUCT LAUNCH CONTENT</span>
                <span>✦</span>
              </li>
              <li className="flex items-center justify-between">
                <span>ORGANIC FEED & REELS ASSETS</span>
                <span>✦</span>
              </li>
              <li className="flex items-center justify-between">
                <span>CONCEPT DEVELOPMENT & B-ROLL</span>
                <span>✦</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};