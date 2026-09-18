"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative bg-ugc-cream py-24 overflow-hidden border-t border-ugc-burgundy/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Timeline & Copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 space-y-8"
        >
          {/* Node Timeline Visual Element from Slide 02 */}
          <div className="relative pl-8 border-l-2 border-ugc-burgundy/30 space-y-10">
            
            {/* Timeline Item 1 */}
            <div className="relative">
              <span className="absolute -left-[39px] top-1 w-4 h-4 rounded-full bg-ugc-cream border-2 border-ugc-burgundy" />
              <h3 className="font-sans text-xs font-bold tracking-editorial text-ugc-burgundy uppercase mb-2">
                WHO AM I
              </h3>
              <p className="font-sans text-xs md:text-sm text-ugc-dark tracking-wide leading-relaxed">
                I'm Mary, a passionate UGC creator who helps brands tell their stories through authentic content. With a background in strategic digital media and visual storytelling, I specialize in creating relatable, high-quality content that feels natural and drives results.
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative">
              <span className="absolute -left-[39px] top-1 w-4 h-4 rounded-full bg-ugc-cream border-2 border-ugc-burgundy" />
              <h3 className="font-sans text-xs font-bold tracking-editorial text-ugc-burgundy uppercase mb-2">
                WHAT I DO
              </h3>
              <p className="font-sans text-xs md:text-sm text-ugc-dark tracking-wide leading-relaxed">
                I produce engaging short-form videos, lifestyle product photography, and storytelling content designed to increase brand trust and conversions. My style blends creativity with strategy, ensuring every piece of content aligns with your brand voice and goals.              </p>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative">
              <span className="absolute -left-[39px] top-1 w-4 h-4 rounded-full bg-ugc-cream border-2 border-ugc-burgundy" />
              <h3 className="font-sans text-xs font-bold tracking-editorial text-ugc-burgundy uppercase mb-2">
                WHAT TO EXPECT
              </h3>
              <p className="font-sans text-xs md:text-sm text-ugc-dark tracking-wide leading-relaxed">
                When working with me, expect tailored strategies, quick turnaround, and content that resonates with your target audience. My focus is on building genuine connections between your brand and your customers.              </p>
            </div>

          </div>
        </motion.div>

        {/* Middle Column: Editorial Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-4 relative h-[450px] md:h-[550px]"
        >
          <div className="relative w-full h-full bg-ugc-sand shadow-lg overflow-hidden">
            <Image
              src="https://rrxt4mgceuhmmfet.public.blob.vercel-storage.com/k.png"
              alt="Mary Zatikian Editorial Portrait"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>
        </motion.div>

        {/* Right Column: Rotated Vertical Typography */}
        <div className="lg:col-span-2 hidden lg:flex items-center justify-center">
          <h2 className="font-serif text-7xl font-bold text-ugc-burgundy rotate-90 whitespace-nowrap tracking-wider select-none opacity-90">
            ABOUT ME
          </h2>
        </div>

      </div>
    </section>
  );
};