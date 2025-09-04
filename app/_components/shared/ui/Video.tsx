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
    if (!video || !autoPlay) {
      console.log("Video ref or autoPlay condition not met:", { video: !!video, autoPlay });
      return;
    }

    console.log("Setting up video autoplay for:", src);
    console.log("Video readyState:", video.readyState);

    const tryPlay = async () => {
      try {
        console.log("Attempting to autoplay video");
        await video.play();
        console.log("Video autoplay successful");
      } catch (error) {
        console.log("Autoplay failed, setting up user interaction fallback:", error);
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

    // If video is already ready, try to play immediately
    if (video.readyState >= 3) { // HAVE_FUTURE_DATA or higher
      console.log("Video already loaded, trying to play immediately");
      tryPlay();
    } else {
      console.log("Video not ready, waiting for canplay event");
      // Try to play when video can play
      video.addEventListener("canplay", tryPlay, { once: true });
    }

    return () => {
      video.removeEventListener("canplay", tryPlay);
    };
  }, [autoPlay, src]);

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