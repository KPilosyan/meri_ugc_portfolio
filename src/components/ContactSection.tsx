"use client";

import React, { useState } from "react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    email: "",
    budget: "$500 - $1,000",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-ugc-cream py-24 border-t border-ugc-burgundy/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Headline Area */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold tracking-editorial text-ugc-burgundy uppercase">
              LET'S CONTACT
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl text-ugc-burgundy font-bold mt-2 leading-none">
              LET'S WORK TOGETHER
            </h2>
            <p className="text-xs sm:text-sm font-sans uppercase tracking-wide text-ugc-dark mt-6 leading-relaxed">
              HAVE A PRODUCT THAT DESERVES TO BE SEEN? SEND YOUR INQUIRY AND CREATIVE BRIEF BELOW.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <div>
              <span className="text-[10px] tracking-editorial text-ugc-gray uppercase block">
                DIRECT EMAIL
              </span>
              <a
                href="mailto:maryzatikian@gmail.com"
                className="font-serif text-xl text-ugc-burgundy font-bold hover:underline"
              >
                maryzatikian@gmail.com
              </a>
            </div>

            <div>
              <span className="text-[10px] tracking-editorial text-ugc-gray uppercase block">
                SOCIAL MEDIA
              </span>
              <p className="text-xs font-sans tracking-widest text-ugc-dark uppercase">
                INSTAGRAM:{" "}
                <a
                  href="https://www.instagram.com/zatikyan_mery/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ugc-burgundy underline decoration-ugc-burgundy/30 underline-offset-4 transition-colors"
                >
                  @zatikyan_mery
                </a>
                {" • "}
                TIKTOK:{" "}
                <a
                  href="https://www.tiktok.com/@merzatik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ugc-burgundy underline decoration-ugc-burgundy/30 underline-offset-4 transition-colors"
                >
                  @merzatik
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Form Area */}
        <div className="lg:col-span-7 bg-white p-8 md:p-12 border border-ugc-burgundy/20 shadow-lg">
          {status === "success" ? (
            <div className="py-12 text-center">
              <h3 className="font-serif text-3xl font-bold text-ugc-burgundy mb-2">
                THANK YOU!
              </h3>
              <p className="text-xs font-sans text-ugc-dark uppercase tracking-editorial">
                YOUR MESSAGE HAS BEEN RECEIVED. I WILL GET BACK TO YOU WITHIN 24 HOURS.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold tracking-editorial text-ugc-burgundy uppercase mb-2">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.G. Jane Doe"
                    className="w-full bg-ugc-cream/40 border border-ugc-burgundy/20 px-4 py-3 text-xs text-ugc-dark focus:outline-none focus:border-ugc-burgundy"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-editorial text-ugc-burgundy uppercase mb-2">
                    BRAND / COMPANY *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    placeholder="E.G. Beauty Brand"
                    className="w-full bg-ugc-cream/40 border border-ugc-burgundy/20 px-4 py-3 text-xs text-ugc-dark focus:outline-none focus:border-ugc-burgundy"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold tracking-editorial text-ugc-burgundy uppercase mb-2">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@brand.com"
                    className="w-full bg-ugc-cream/40 border border-ugc-burgundy/20 px-4 py-3 text-xs text-ugc-dark focus:outline-none focus:border-ugc-burgundy"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-editorial text-ugc-burgundy uppercase mb-2">
                    BUDGET RANGE
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-ugc-cream/40 border border-ugc-burgundy/20 px-4 py-3 text-xs uppercase text-ugc-dark focus:outline-none focus:border-ugc-burgundy"
                  >
                    <option>$500 - $1,000</option>
                    <option>$1,000 - $2,500</option>
                    <option>$2,500 - $5,000</option>
                    <option>$5,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold tracking-editorial text-ugc-burgundy mb-2">
                  PROJECT DETAILS & DELIVERABLES *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your product, required deliverables, and timeline..."
                  className="w-full bg-ugc-cream/40 border border-ugc-burgundy/20 px-4 py-3 text-xs text-ugc-dark focus:outline-none focus:border-ugc-burgundy"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-ugc-burgundy text-ugc-cream text-xs font-bold tracking-editorial uppercase hover:bg-ugc-burgundyDark transition-colors cursor-pointer disabled:opacity-50"
              >
                {status === "loading" ? "SENDING..." : "SEND INQUIRY →"}
              </button>

              {status === "error" && (
                <p className="text-[10px] font-bold tracking-editorial text-red-700 text-center uppercase mt-2">
                  SOMETHING WENT WRONG. PLEASE TRY AGAIN OR EMAIL DIRECTLY.
                </p>
              )}
            </form>
          )}
        </div>

      </div>
    </section>
  );
};