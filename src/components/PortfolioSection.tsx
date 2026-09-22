"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_PROJECTS, Project } from "@/data/portfolioData";
import { VideoModal } from "./VideoModal";

const CATEGORIES = ["All", "Beauty", "Skincare", "Lifestyle", "Fragrance", "Makeup"];

export const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeVideo, setActiveVideo] = useState<Project | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(6);
  };

  // Filter projects if selected category is included in project's category array
  const filteredProjects = PORTFOLIO_PROJECTS.filter((project) => {
    if (selectedCategory === "All") return true;
    return project.category.includes(selectedCategory as any);
  });

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  return (
    <section id="portfolio" className="py-24 bg-ugc-pink border-b border-ugc-burgundy/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold tracking-editorial text-ugc-burgundy uppercase mb-2 block">
              PAGE 02 — SELECTED WORK
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl text-ugc-burgundy font-bold">
              PORTFOLIO ARCHIVE
            </h2>
          </div>
          <p className="text-xs font-sans tracking-wide text-ugc-burgundy/70 uppercase max-w-xs mt-4 md:mt-0">
            FILTER BY INDUSTRY CATEGORY TO EXPLORE HIGH-PERFORMING ASSETS.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-sans uppercase mb-16 pb-6 border-b border-ugc-burgundy/10">
          <span className="font-bold text-ugc-burgundy tracking-editorial mr-2">CATEGORY:</span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`transition-colors text-xs uppercase tracking-wider cursor-pointer ${
                selectedCategory === cat
                  ? "text-ugc-burgundy font-bold underline underline-offset-4"
                  : "text-ugc-burgundy/60 hover:text-ugc-burgundy"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              onOpenModal={() => project.videoUrl && setActiveVideo(project)}
            />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-8 py-4 bg-transparent border border-ugc-burgundy text-ugc-burgundy text-xs font-bold tracking-editorial uppercase hover:bg-ugc-burgundy hover:text-ugc-cream transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
            >
              LOAD MORE ...
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {activeVideo && (
        <VideoModal
          isOpen={!!activeVideo}
          onClose={() => setActiveVideo(null)}
          videoUrl={activeVideo.videoUrl || ""}
          posterUrl={activeVideo.thumbnail}
          title={activeVideo.title}
          brand={activeVideo.brand}
          format={activeVideo.category.join(" • ")} // Displays "Lifestyle • Makeup" in modal header
        />
      )}
    </section>
  );
};

// Sub-Component for Hover Muted Video Preview
const PortfolioCard: React.FC<{
  project: Project;
  onOpenModal: () => void;
}> = ({ project, onOpenModal }) => {
  const cardVideoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (cardVideoRef.current && project.videoUrl) {
      cardVideoRef.current.currentTime = 0;
      cardVideoRef.current.muted = true;
      const playPromise = cardVideoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardVideoRef.current && project.videoUrl) {
      cardVideoRef.current.pause();
      cardVideoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="group relative flex flex-col bg-white border border-ugc-burgundy/10 p-4 shadow-sm hover:shadow-xl transition-all duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Media Container */}
      <div
        className="relative aspect-[9/16] w-full bg-ugc-sand overflow-hidden cursor-pointer"
        onClick={onOpenModal}
      >
        {/* Poster Image */}
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
            isHovered && project.videoUrl ? "opacity-0" : "opacity-100"
          }`}
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Hover Video */}
        {project.videoUrl && (
          <video
            ref={cardVideoRef}
            src={project.videoUrl}
            poster={project.thumbnail}
            muted
            playsInline
            loop
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        {/* Side-by-Side Category Badges Top-Left */}
        <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5 max-w-[80%]">
          {project.category.map((cat) => (
            <span
              key={cat}
              className="bg-ugc-cream/90 backdrop-blur-sm px-2.5 py-1 text-[9px] font-bold tracking-editorial text-ugc-burgundy uppercase shadow-xs"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Hover Overlay Hint */}
        {project.videoUrl && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-ugc-dark/20 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="bg-ugc-cream text-ugc-burgundy text-[10px] font-bold tracking-editorial px-4 py-2 uppercase shadow-lg">
              PLAY PREVIEW WITH SOUND 🔊
            </span>
          </div>
        )}
      </div>

      {/* Card Info */}
      <div className="mt-4 flex flex-col justify-between flex-grow pt-2 border-t border-ugc-burgundy/10">
        <div>
          <span className="text-[10px] font-bold tracking-editorial text-ugc-burgundy/60 uppercase block">
            {project.brand}
          </span>
          <h3 className="font-serif text-xl text-ugc-burgundy font-bold mt-1">
            {project.title}
          </h3>
        </div>

        <div className="mt-4 pt-4 border-t border-ugc-burgundy/5 flex items-center justify-between">
          <Link
            href={`/work/${project.id}`}
            className="text-xs font-bold tracking-editorial text-ugc-burgundy uppercase hover:text-ugc-burgundyDark transition-colors"
          >
            READ CASE STUDY →
          </Link>
          <span className="text-[10px] font-sans text-ugc-burgundy/50 uppercase">
            {project.aspectRatio}
          </span>
        </div>
      </div>
    </div>
  );
};