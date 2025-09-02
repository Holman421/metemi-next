"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

function logoSplitAnimation() {
  const logo = document.querySelector(".anim-logo");

  gsap.to(logo, {
    duration: 0.75,
    y: "0%",
    ease: "power2.out",
    delay: 0.25,
    scrollTrigger: {
      trigger: logo,
      start: "top 90%",
      once: true,
    },
  });
}

function popInAnimation() {
  const elements = document.querySelectorAll(".anim-pop-in");

  elements.forEach((element) => {
    gsap.fromTo(
      element,
      {
        scale: 0,
        opacity: 0,
      },
      {
        duration: 0.75,
        scale: 1,
        opacity: 1,
        ease: "elastic.out(1,0.6)",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          once: true,
        },
      }
    );
  });
}

function fadeLeftAnimation() {
  const elements = document.querySelectorAll(".anim-fade-left");

  elements.forEach((element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: "-100%",
      },
      {
        duration: 0.8,
        opacity: 1,
        x: "0%",
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          once: true,
        },
      }
    );
  });
}

function fadeRightAnimation() {
  const elements = document.querySelectorAll(".anim-fade-right");

  elements.forEach((element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: "100%",
      },
      {
        duration: 0.8,
        opacity: 1,
        x: "0%",
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          once: true,
        },
      }
    );
  });
}

function textLinesAnimation() {
  const textElements = document.querySelectorAll(".anim-text-lines");

  textElements.forEach((element) => {
    const split = new SplitText(element, { type: "lines" });

    // Set initial state immediately (no animation)
    gsap.set(split.lines, {
      opacity: 0,
      y: "100%",
    });

    split.lines.forEach((line, index) => {
      gsap.to(line, {
        opacity: 1,
        y: "0%",
        duration: 0.8,
        ease: "power2.out",
        delay: index * 0.15,
        scrollTrigger: {
          trigger: line,
          start: "top 90%",
          once: true,
        },
      });
    });
  });
}

function outlineTextReveal() {
  const outlineTexts = document.querySelectorAll(".text-outline-krakov");

  outlineTexts.forEach((text) => {
    gsap.fromTo(
      text,
      {
        color: "transparent",
      },
      {
        duration: 1,
        color: "white",
        ease: "power2.out",
        scrollTrigger: {
          trigger: text,
          start: "top 90%",
          once: true,
        },
      }
    );
  });
}

export function initAnimations() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);

  logoSplitAnimation();
  outlineTextReveal();
  textLinesAnimation();
  popInAnimation();
  fadeLeftAnimation();
  fadeRightAnimation();
}
