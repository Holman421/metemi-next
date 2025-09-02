import React from "react";

export default function HeroVideo() {
  return (
    <div className="flex-1 anim-fade-right">
      <video
        className="w-full h-auto rounded-tl-custom-big rounded-bl-custom-big aspect-[91/102] object-cover translate-x-40"
        autoPlay
        muted
        loop
      >
        <source src="/test-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
