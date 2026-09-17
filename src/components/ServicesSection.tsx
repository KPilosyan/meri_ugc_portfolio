import React from "react";
import { SERVICES } from "@/data/portfolioData";

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-ugc-sand/30 border-b border-ugc-burgundy/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-semibold tracking-editorial text-ugc-burgundy uppercase mb-2 block">
              PAGE 05 — DELIVERABLES
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl text-ugc-burgundy font-bold">
              SERVICES & OFFERINGS
            </h2>
          </div>
          <p className="text-xs font-sans tracking-wide text-ugc-burgundy/70 uppercase max-w-xs mt-4 md:mt-0">
            HIGH-CONVERTING ASSETS TAILORED FOR PAID SOCIAL AD CAMPAIGNS & ORGANIC FEEDS.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-8 bg-white border border-ugc-burgundy/15 flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <span className="text-xs font-serif italic text-ugc-burgundy/50 block mb-2">
                  {service.number}
                </span>
                <h3 className="font-serif text-2xl font-bold text-ugc-burgundy mb-3">
                  {service.title}
                </h3>
                <p className="text-xs font-sans text-ugc-burgundy/80 leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 text-xs font-sans text-ugc-burgundy/90 uppercase tracking-wide border-t border-ugc-burgundy/10 pt-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <span className="text-ugc-burgundy/60">✦</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className="text-xs font-bold tracking-editorial text-ugc-burgundy uppercase underline underline-offset-4 hover:text-ugc-burgundyDark"
              >
                INQUIRE FOR RATES →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};