"use client";

import React, { useEffect, useRef, useState } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  posterUrl?: string;
  title: string;
  brand: string;
  format: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
  posterUrl,
  title,
  brand,
  format,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // Start unmuted
  const [isReady, setIsReady] = useState(false); // Track buffering completion

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setIsReady(false); // Reset ready state on new open
    } else {
      document.body.style.overflow = "unset";
      if (videoRef.current) {
        videoRef.current.pause();
      }
      setIsPlaying(false);
      setIsReady(false);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Fired when enough video bytes have buffered to play without stuttering
  const handleCanPlayThrough = () => {
    setIsReady(true);

    if (videoRef.current && isOpen) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      setIsMuted(false);

      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.warn("Autoplay with audio restricted:", err);
            // Fallback to muted autoplay if browser blocks unmuted audio
            if (videoRef.current) {
              videoRef.current.muted = true;
              setIsMuted(true);
              videoRef.current.play().then(() => setIsPlaying(true));
            }
          });
      }
    }
  };

  if (!isOpen) return null;

  const togglePlay = () => {
    if (videoRef.current && isReady) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuteState = !isMuted;
      videoRef.current.muted = newMuteState;
      setIsMuted(newMuteState);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ugc-dark/90 backdrop-blur-md p-4 transition-opacity duration-300">
      {/* Backdrop Click to Close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container with Screen Height Constraint */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md max-h-[96vh] bg-ugc-cream border border-ugc-burgundy/20 shadow-2xl overflow-hidden flex flex-col my-auto rounded-sm">
        {/* Header Bar */}
        <div className="px-5 py-3 bg-ugc-cream border-b border-ugc-burgundy/10 flex justify-between items-center shrink-0">
          <div>
            <p className="text-[10px] font-bold tracking-editorial uppercase text-ugc-burgundy/70">
              {brand} — {format}
            </p>
            <h4 className="font-serif text-base sm:text-lg text-ugc-burgundy font-bold leading-tight">
              {title}
            </h4>
          </div>
          <button
            onClick={onClose}
            className="text-ugc-burgundy hover:text-ugc-burgundyDark text-xl font-sans p-1 leading-none transition-colors"
            aria-label="Close Modal"
          >
            ✕
          </button>
        </div>

        {/* Constrained 9:16 Video Container */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-0">
          {/* Buffering Overlay (Poster + Loading Indicator) */}
          {!isReady && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black">
              {posterUrl && (
                <img
                  src={posterUrl}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
              )}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="h-9 w-9 animate-spin rounded-full border-2 border-ugc-cream border-t-transparent" />
                <span className="text-[10px] font-bold tracking-editorial uppercase text-ugc-cream/90 bg-black/40 px-3 py-1 rounded">
                  Loading Video...
                </span>
              </div>
            </div>
          )}

          <video
            ref={videoRef}
            src={videoUrl}
            poster={posterUrl}
            preload="auto"
            playsInline
            muted={isMuted}
            onCanPlayThrough={handleCanPlayThrough}
            className={`w-full h-full object-contain cursor-pointer transition-opacity duration-300 ${
              isReady ? "opacity-100" : "opacity-0"
            }`}
            onClick={togglePlay}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Controls Overlay */}
          {isReady && (
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-20 pointer-events-none">
              <button
                onClick={togglePlay}
                className="pointer-events-auto bg-ugc-cream/90 hover:bg-ugc-cream text-ugc-burgundy px-4 py-2 text-[10px] font-bold tracking-editorial uppercase shadow-md transition-all"
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
              <button
                onClick={toggleMute}
                className="pointer-events-auto bg-ugc-cream/90 hover:bg-ugc-cream text-ugc-burgundy px-4 py-2 text-[10px] font-bold tracking-editorial uppercase shadow-md transition-all"
              >
                {isMuted ? "Sound On" : "Mute"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};