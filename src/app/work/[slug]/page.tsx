import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PORTFOLIO_PROJECTS } from "@/data/portfolioData";

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  // Lookup project by id matching the route slug
  const project = PORTFOLIO_PROJECTS.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-ugc-cream pt-32 pb-24 text-ugc-burgundy">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Back link */}
        <Link
          href="/#portfolio"
          className="text-xs font-bold tracking-editorial uppercase text-ugc-burgundy/70 hover:text-ugc-burgundy mb-8 inline-block"
        >
          ← BACK TO PORTFOLIO
        </Link>

        {/* Title & Category Header */}
        <span className="text-xs font-semibold tracking-editorial uppercase text-ugc-burgundy/80 block mb-2">
          CASE STUDY — {project.category}
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold mb-6">
          {project.title}
        </h1>

        {/* Metadata Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-ugc-burgundy/15 mb-12 text-xs font-sans uppercase">
          <div>
            <span className="font-bold block text-ugc-burgundy/60 mb-1">BRAND</span>
            {project.brand}
          </div>
          <div>
            <span className="font-bold block text-ugc-burgundy/60 mb-1">CATEGORY</span>
            {project.category}
          </div>
          <div>
            <span className="font-bold block text-ugc-burgundy/60 mb-1">DELIVERABLES</span>
            {project.deliverables.length} Assets
          </div>
        </div>

        {/* Project Visuals & Strategy breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-16">
          <div className="md:col-span-5 relative aspect-[9/16] bg-ugc-sand border-4 border-white shadow-xl overflow-hidden">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="md:col-span-7 space-y-8">
            {project.brief && (
              <div>
                <h3 className="font-serif text-2xl font-bold mb-2">THE BRIEF</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-ugc-burgundy/90 font-sans uppercase">
                  {project.brief}
                </p>
              </div>
            )}

            {project.concept && (
              <div>
                <h3 className="font-serif text-2xl font-bold mb-2">CREATIVE CONCEPT</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-ugc-burgundy/90 font-sans uppercase">
                  {project.concept}
                </p>
              </div>
            )}

            <div>
              <h3 className="font-serif text-2xl font-bold mb-2">DELIVERABLES PROVIDED</h3>
              <ul className="list-disc list-inside text-xs font-sans uppercase space-y-1 text-ugc-burgundy/90">
                {project.deliverables.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {project.results && project.results.length > 0 && (
              <div className="p-6 bg-ugc-pink/30 border border-ugc-burgundy/20">
                <h3 className="font-serif text-xl font-bold mb-4">KEY METRICS</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  {project.results.map((res, idx) => (
                    <div key={idx}>
                      <p className="text-2xl font-serif font-bold">{res.metric}</p>
                      <p className="text-[10px] font-sans uppercase">{res.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}