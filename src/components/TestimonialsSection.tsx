import React from "react";
import { TESTIMONIALS } from "@/data/portfolioData";

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-ugc-pink/20 border-b border-ugc-burgundy/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-editorial text-ugc-burgundy uppercase mb-2 block">
            PAGE 06 — PROOF
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ugc-burgundy">
            CLIENT TESTIMONIALS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-8 bg-white border border-ugc-burgundy/15 flex flex-col justify-between shadow-sm"
            >
              <blockquote className="font-serif italic text-lg sm:text-xl text-ugc-burgundy leading-relaxed mb-8">
                "{item.quote}"
              </blockquote>

              <div className="pt-4 border-t border-ugc-burgundy/10 flex justify-between items-end">
                <div>
                  <p className="text-xs font-bold tracking-editorial text-ugc-burgundy uppercase">
                    {item.author}
                  </p>
                  <p className="text-[10px] font-sans text-ugc-burgundy/70 uppercase mt-0.5">
                    {item.role} — {item.brand}
                  </p>
                </div>
                <span className="text-ugc-burgundy/30 font-serif text-3xl font-bold">”</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};