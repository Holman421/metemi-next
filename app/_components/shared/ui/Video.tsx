"use client";

import React, { useRef, useEffect } from "react";

interface VideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  controls?: boolean;
  poster?: string;
  "aria-label"?: string;
  onLoadedData?: () => void;
  onError?: () => void;
}

export default function Video({
  src,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  controls = false,
  poster,
  "aria-label": ariaLabel = "Video",
  onLoadedData,
  onError,
}: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !autoPlay) return;

    const tryPlay = async () => {
      try {
        await video.play();
      } catch (error) {
        // If autoplay fails, set up fallback for user interaction
        const playOnInteraction = () => {
          video.play().catch(console.warn);
          document.removeEventListener("touchstart", playOnInteraction);
          document.removeEventListener("click", playOnInteraction);
        };
        
        document.addEventListener("touchstart", playOnInteraction, { once: true });
        document.addEventListener("click", playOnInteraction, { once: true });
      }
    };

    // Try to play when video can play
    video.addEventListener("canplay", tryPlay, { once: true });

    return () => {
      video.removeEventListener("canplay", tryPlay);
    };
  }, [autoPlay]);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      controls={controls}
      poster={poster}
      aria-label={ariaLabel}
      onLoadedData={onLoadedData}
      onError={onError}
      // Essential mobile attributes
      webkit-playsinline="true"
      preload="metadata"
    />
  );
}