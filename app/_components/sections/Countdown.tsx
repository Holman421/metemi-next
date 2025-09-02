"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { LetterMIcon } from "../shared/icons";

const MAX_VALUES = {
  days: 30,
  hours: 24,
  minutes: 60,
};

const FINAL_VALUES = {
  days: 20,
  hours: 13,
  minutes: 26,
};

export default function Countdown() {
  const [daysLeft, setDaysLeft] = useState(MAX_VALUES.days);
  const [hoursLeft, setHoursLeft] = useState(MAX_VALUES.hours);
  const [minutesLeft, setMinutesLeft] = useState(MAX_VALUES.minutes);

  const countdownRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;

            // Animate days
            gsap.to(
              { value: MAX_VALUES.days },
              {
                value: FINAL_VALUES.days,
                duration: 2,
                ease: "power2.out",
                onUpdate: function () {
                  setDaysLeft(Math.floor(this.targets()[0].value));
                },
              }
            );

            // Animate hours with slight delay
            gsap.to(
              { value: MAX_VALUES.hours },
              {
                value: FINAL_VALUES.hours,
                duration: 2,
                delay: 0.2,
                ease: "power2.out",
                onUpdate: function () {
                  setHoursLeft(Math.floor(this.targets()[0].value));
                },
              }
            );

            // Animate minutes with slight delay
            gsap.to(
              { value: MAX_VALUES.minutes },
              {
                value: FINAL_VALUES.minutes,
                duration: 2,
                delay: 0.4,
                ease: "power2.out",
                onUpdate: function () {
                  setMinutesLeft(Math.floor(this.targets()[0].value));
                },
              }
            );
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
        rootMargin: "0px 0px -100px 0px", // Start animation 100px before element is fully visible
      }
    );

    if (countdownRef.current) {
      observer.observe(countdownRef.current);
    }

    return () => {
      if (countdownRef.current) {
        observer.unobserve(countdownRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={countdownRef}
      className="flex relative justify-between w-[70vw] mx-auto"
    >
      <div className="text-display-xl opacity-30 font-bold text-outline-black whitespace-nowrap">
        {daysLeft} <span className="text-[64px] transform -ml-60">d</span>
      </div>
      <div className="text-display-xl opacity-30 font-bold text-outline-black whitespace-nowrap">
        {hoursLeft} <span className="text-[64px] transform -ml-60">h</span>
      </div>
      <div className="text-display-xl opacity-30 font-bold text-outline-black whitespace-nowrap">
        {minutesLeft} <span className="text-[64px] transform -ml-60">m</span>
      </div>
      <div className="absolute left-[10%] bottom-[-2.5%] flex gap-16">
        <div className="size-150 rounded-[30px] relative overflow-hidden flex items-center justify-center">
          <Image
            src="/images/rectangle-bg.jpg"
            alt="Logo"
            width={150}
            height={150}
            className="size-full absolute"
          />
          <LetterMIcon className="size-75 relative z-[2]" />
        </div>
      <p className="text-4xl text-gradient">
        We are <br /> Coming Soon.
      </p>
      </div>
    </div>
  );
}
