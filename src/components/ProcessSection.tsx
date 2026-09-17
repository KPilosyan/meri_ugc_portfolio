"use client";

import React from "react";
import { motion } from "framer-motion";

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      name: "DISCOVERY & BRIEF",
      desc: "I analyze your brand guidelines, audience demographics, product selling points, and target campaign goals.",
    },
    {
      step: "02",
      name: "CONCEPT & HOOKS",
      desc: "I script visual concepts, write high-converting hooks, design shot lists, and submit moodboards for approval.",
    },
    {
      step: "03",
      name: "CREATION & EDITING",
      desc: "Filming with professional lighting, crisp audio, aesthetic color grading, on-trend transitions, and engaging captions.",
    },
    {
      step: "04",
      name: "DELIVERY & REVISION",
      desc: "Receive final 9:16 high-resolution assets ready for organic posting or paid media optimization.",
    },
  ];

  return (
    <section id="process" className="bg-ugc-cream py-24 border-t border-ugc-burgundy/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <span className="text-xs font-semibold tracking-editorial text-ugc-burgundy uppercase">
            WORKFLOW
          </span>
          <h2 className="font-serif text-5xl sm:text-6xl text-ugc-burgundy font-bold mt-2">
            MY PROCESS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white border border-ugc-burgundy/15 relative flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-4xl font-bold text-ugc-pink block mb-4">
                  {item.step}
                </span>
                <h3 className="font-sans text-xs font-bold tracking-editorial text-ugc-burgundy uppercase mb-2">
                  {item.name}
                </h3>
                <p className="text-xs font-sans text-ugc-dark tracking-wide leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};