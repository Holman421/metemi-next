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
  });
}

function fadeInAnimation() {
  const elements = document.querySelectorAll(".anim-fade-in");

  elements.forEach((element) => {
  });
}

function fadeLeftAnimation() {
  const elements = document.querySelectorAll(".anim-fade-left");

  elements.forEach((element) => {
  });
}

function fadeRightAnimation() {
  const elements = document.querySelectorAll(".anim-fade-right");

  elements.forEach((element) => {
  });
}

function textLinesAnimation() {
  const textElements = document.querySelectorAll(".anim-text-lines");
}

function textLinesGradientAnimation() {
  const textElements = document.querySelectorAll(".anim-text-lines-gradient");

}

function outlineTextReveal() {
  const outlineTexts = document.querySelectorAll(".text-outline-krakov");

}

function parallaxAnimation() {
  const parallaxElements = document.querySelectorAll(".parallax");

}

export function initAnimations() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);

  logoSplitAnimation();
  outlineTextReveal();
  textLinesAnimation();
  textLinesGradientAnimation();
  popInAnimation();
  fadeInAnimation();
  fadeLeftAnimation();
  fadeRightAnimation();
  parallaxAnimation();
}
