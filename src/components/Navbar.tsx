"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Updated href paths to match component IDs and work across all subpages
  const navLinks = [
    { name: "HOME", href: "/#hero" },
    { name: "PHILOSOPHY", href: "/#approach" },
    { name: "WORK", href: "/#portfolio" },
    { name: "SERVICES", href: "/#services" },
    { name: "ALIGNMENT", href: "/#alignment" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ugc-cream/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Header Logo */}
        <Link href="/#hero" className="flex flex-col">
          <span className="font-serif text-xl md:text-2xl font-bold tracking-wider text-ugc-burgundy">
            Mary Zatikian
          </span>
          <span className="text-[10px] tracking-editorial font-sans text-ugc-burgundy/70 uppercase">
            UGC CREATOR & STRATEGIST
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-semibold tracking-editorial text-ugc-dark hover:text-ugc-burgundy transition-colors uppercase"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="px-5 py-2.5 bg-ugc-burgundy text-ugc-cream text-xs tracking-editorial font-medium hover:bg-ugc-burgundyDark transition-colors rounded-none uppercase"
          >
            LET'S WORK →
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation"
          className="md:hidden text-ugc-burgundy focus:outline-none"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M18.293 5.293a1 1 0 011.414 1.414L13.414 12l6.293 6.293a1 1 0 01-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 12 4.293 5.707a1 1 0 011.414-1.414L12 10.586l6.293-6.293z" />
            ) : (
              <path fillRule="evenodd" clipRule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-ugc-cream border-b border-ugc-burgundy/20 px-6 py-6"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold tracking-editorial text-ugc-dark hover:text-ugc-burgundy transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-block text-center py-3 bg-ugc-burgundy text-ugc-cream text-xs tracking-editorial font-medium"
              >
                LET'S WORK →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};