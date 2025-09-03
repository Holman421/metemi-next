"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function NavButton() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    // Scope animations to this component and clean up on unmount
    const ctx = gsap.context(() => {
      const bars = containerRef.current!.querySelectorAll(".nav-bar");
      // Build a one-shot pulse: shrink then return, with a small stagger
      tlRef.current = gsap
        .timeline({ paused: true, defaults: { ease: "power2.out" } })
        .to(bars, {
          scaleX: 0.75,
          duration: 0.18,
          stagger: 0.06,
          transformOrigin: "center",
        })
        .to(bars, {
          scaleX: 1,
          duration: 0.18,
          stagger: 0.06,
          transformOrigin: "center",
        }, ">-=0.06");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleEnter = () => {
    tlRef.current?.restart();
  };

  const barBase =
    "nav-bar h-[clamp(0.438rem,calc(0.289rem+0.592vw),1rem)] rounded-[6px] bg-white origin-center will-change-transform";

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleEnter}
      className="cursor-pointer w-[clamp(2.063rem,calc(1.405rem+2.632vw),4.563rem)] flex flex-col gap-[clamp(0.125rem,calc(0.059rem+0.263vw),0.375rem)] select-none"
    >
      {/* Top bar */}
      <div className={`${barBase} w-full`} />
      {/* Middle bar (slightly wider) */}
      <div className={`${barBase} w-[120%]`} />
      {/* Bottom bar */}
      <div className={`${barBase} w-full`} />
    </div>
  );
}
