"use client";

import React, { useState, useEffect } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { motion, AnimatePresence } from "framer-motion";

export const CharacterGuide = () => {
  // Stages: hidden -> first character -> delay pause -> donut character -> done
  const [stage, setStage] = useState<
    "hidden" | "char1" | "pause" | "donut" | "done"
  >("hidden");

  useEffect(() => {
    // 1. Initial delay before Character 1 starts
    const timer = setTimeout(() => {
      setStage("char1");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Handle stage transitions
  const handleChar1Complete = () => {
    setStage("pause");
    // Pause 0.5s before Donut comes across
    setTimeout(() => {
      setStage("donut");
    }, 500);
  };

  const handleDonutComplete = () => {
    setStage("done");
  };

  if (stage === "done" || stage === "hidden" || stage === "pause") {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {/* --- CHARACTER 1 --- */}
      {stage === "char1" && (
        <motion.div
          key="mascot-char1"
          initial={{ x: "-120vw" }}
          animate={{ x: "120vw" }}
          transition={{
            duration: 20,
            ease: "linear",
          }}
          onAnimationComplete={handleChar1Complete}
          className="fixed top-1/2 -translate-y-1/2 left-0 z-50 flex items-center pointer-events-none select-none"
        >
          <div className="relative w-36 h-36 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="absolute -top-12 whitespace-nowrap px-3.5 py-1.5 bg-white text-ugc-burgundy border-2 border-ugc-pink/40 rounded-2xl text-xs font-sans font-bold shadow-xl"
            >
              Don't mind me. Just passing through... Enjoy! ✨
            </motion.div>

            <DotLottiePlayer
              src="/Makeup.lottie" // Replace with your first file's name
              autoplay
              loop
              className="w-full h-full object-contain filter drop-shadow-lg"
            />
          </div>
        </motion.div>
      )}

      {/* --- DONUT CHARACTER --- */}
      {/* {stage === "donut" && (
        <motion.div
          key="mascot-donut"
          initial={{ x: "-120vw" }}
          animate={{ x: "120vw" }}
          transition={{
            duration: 17, // Adjust duration for donut's speed
            ease: "linear",
          }}
          onAnimationComplete={handleDonutComplete}
          className="fixed top-1/2 -translate-y-1/2 left-0 z-50 flex items-center pointer-events-none select-none"
        >
          <div className="relative w-36 h-36 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="absolute -top-12 whitespace-nowrap px-3.5 py-1.5 bg-white text-ugc-burgundy border-2 border-ugc-pink/40 rounded-2xl text-xs font-sans font-bold shadow-xl"
            >
              Contact me! Let's talk.
            </motion.div>

            <DotLottiePlayer
              src="/donut.lottie" // Must be in your public/ folder
              autoplay
              loop
              className="w-full h-full object-contain filter drop-shadow-lg"
            />
          </div>
        </motion.div>
      )} */}
    </AnimatePresence>
  );
};