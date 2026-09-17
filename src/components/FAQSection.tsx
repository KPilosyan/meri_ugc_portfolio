"use client";

import React, { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "WHAT IS YOUR TYPICAL TURNAROUND TIME?",
    a: "Standard delivery is 5 to 7 business days from the date products are received. Expedited 3-day turnaround is available upon request.",
  },
  {
    q: "HOW MANY REVISIONS ARE INCLUDED?",
    a: "All deliverables include 1 round of editing revisions to adjust text overlays, audio levels, or pacing. Script/concept changes after approval are subject to re-shooting fees.",
  },
  {
    q: "DO YOU OFFER PAID ADVERTISING USAGE RIGHTS?",
    a: "Yes. Standard packages include 30-day organic usage rights. Extended paid advertising licensing (30, 60, 90 days or perpetual) can be added to any contract.",
  },
  {
    q: "CAN YOU PROVIDE RAW FOOTAGE?",
    a: "Yes. Raw unedited B-roll clips and separate audio tracks are available as an add-on for brand internal editing teams.",
  },
  {
    q: "DO YOU WORK WITH PRODUCTS SHIPPED INTERNATIONALLY?",
    a: "Yes. I work with global brands regularly. Tracking information is required upon dispatch to ensure accurate scheduling.",
  },
  {
    q: "WHAT DO YOU NEED FROM A BRAND TO GET STARTED?",
    a: "Clear campaign objectives, target audience insights, brand guidelines, product arrival confirmation, and any mandatory talking points or do-not-says.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-ugc-pink/90 border-b border-ugc-burgundy/10">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-editorial text-ugc-burgundy uppercase mb-2 block">
            PAGE 07 — FREQUENTLY ASKED
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ugc-burgundy">
            COMMERCIAL & PRODUCTION FAQ
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="border border-ugc-burgundy/15 bg-ugc-cream/70 transition-all"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none cursor-pointer"
              >
                <span className="font-serif text-lg font-bold text-ugc-burgundy">
                  {faq.q}
                </span>
                <span className="text-xl font-sans text-ugc-burgundy">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>

              {openIndex === idx && (
                <div className="px-6 pb-6 text-xs font-sans text-ugc-burgundy/80 uppercase leading-relaxed border-t border-ugc-burgundy/10 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};