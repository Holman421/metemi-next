"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

type Props = {
  rounded: "left" | "right";
  colorVariant: "primary" | "secondary";
  text: string;
  time: string;
  className?: string;
  animateTyping?: boolean;
};

export const DMText = ({
  rounded,
  colorVariant,
  text,
  time,
  className,
  animateTyping = false,
}: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const visibleTextRef = useRef<HTMLParagraphElement | null>(null);

  const [displayedText, setDisplayedText] = useState<string>(
    animateTyping ? "..." : text
  );

  const roundedClass =
    rounded === "left" ? "rounded-tl-none" : "rounded-tr-none";
  const colorClass =
    colorVariant === "primary" ? "bg-dm-primary/60" : "bg-dm-secondary/60";

  const fullText = useMemo(() => text, [text]);

  useEffect(() => {
    if (!animateTyping) return;

    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const pEl = visibleTextRef.current;
    if (!container || !pEl) return;

    setDisplayedText("...");

    let typingInterval: number | null = null;
    let heightTween: gsap.core.Tween | null = null;
    let dotTween: gsap.core.Tween | null = null;
    let trigger: any = null;

    trigger = ScrollTrigger.create({
      trigger: container,
      start: "top 90%",
      once: true,
      onEnter: () => {
        const startPHeight = pEl.offsetHeight;
        const startContainerHeight = container.offsetHeight;

        gsap.set(container, {
          height: startContainerHeight,
          overflow: "hidden",
        });

        const ellipsisPause = 0.8; // seconds to hold '...'
        const charSpeed = 0.03; // seconds per character

        const startDotsAnimation = () => {
          const dots = pEl.querySelectorAll('[data-dm-dot="true"]');
          if (dots.length) {
            dotTween?.kill();
            dotTween = gsap.to(dots, {
              y: -4,
              duration: 0.35,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
              stagger: 0.08,
            });
          }
        };

        requestAnimationFrame(startDotsAnimation);

        const baseOtherHeight = startContainerHeight - startPHeight;
        let currentTargetHeight = startContainerHeight;

        const updateHeightIfNeeded = () => {
          const currentPHeight = pEl.offsetHeight;
          const target = baseOtherHeight + currentPHeight;
          if (target > currentTargetHeight + 0.5) {
            currentTargetHeight = target;
            heightTween?.kill();
            heightTween = gsap.to(container, {
              height: currentTargetHeight,
              duration: 0.25,
              ease: "power1.out",
            });
          }
        };

        gsap.delayedCall(ellipsisPause, () => {
          dotTween?.kill();
          dotTween = null;

          setDisplayedText("");

          let i = 0;
          const total = fullText.length;
          const stepMs = charSpeed * 1000;

          typingInterval = window.setInterval(() => {
            i++;
            setDisplayedText(fullText.slice(0, i));
            requestAnimationFrame(updateHeightIfNeeded);

            if (i >= total && typingInterval) {
              clearInterval(typingInterval);
              typingInterval = null;
              requestAnimationFrame(() => {
                updateHeightIfNeeded();
                gsap.delayedCall(0.01, () => {
                  gsap.set(container, { height: "auto", overflow: "visible" });
                });
              });
            }
          }, stepMs);
        });
      },
    });

    return () => {
      if (typingInterval) clearInterval(typingInterval);
      heightTween?.kill();
      dotTween?.kill();
      trigger?.kill();
      if (container) gsap.set(container, { height: "", overflow: "" });
    };
  }, [animateTyping, fullText]);

  return (
    <div
      ref={containerRef}
      className={`relative text-sm anim-pop-in pb-[clamp(1.5rem,calc(1.237rem+1.053vw),2.5rem)] overflo leading-[130%] text-white ${roundedClass} ${colorClass} ${className} rounded-xl  backdrop-blur-lg p-[clamp(0.5rem,calc(0.336rem+0.658vw),1.125rem)] flex flex-col w-[clamp(13.438rem,calc(8.75rem+18.75vw),31.25rem)]`}
    >
      <p ref={visibleTextRef}>
        {animateTyping ? (
          displayedText === "..." ? (
            <span
              aria-hidden="true"
              className="inline-flex items-end gap-1 select-none"
            >
              <span data-dm-dot="true" className="inline-block">
                .
              </span>
              <span data-dm-dot="true" className="inline-block">
                .
              </span>
              <span data-dm-dot="true" className="inline-block">
                .
              </span>
            </span>
          ) : (
            displayedText
          )
        ) : (
          text
        )}
      </p>

      <span className="absolute bottom-12 right-12">{time}</span>
    </div>
  );
};
