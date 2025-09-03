import React from "react";
import { DMText } from "../shared/ui/DMText";

export default function HeroVideo() {
  return (
    <div className="flex-1 relative anim-fade-right translate-y-58 md:translate-y-0">
      <video
        className="w-full h-auto rounded-tl-custom-big rounded-bl-custom-big aspect-[91/102] object-cover translate-x-40"
        autoPlay
        muted
        loop
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2 className="absolute left-[20%] bottom-[30%] md:bottom-[40%] text-35xl font-bold text-white leading-[110%]">
        Don&apos;t <br /> tweet. Meet.
      </h2>

      <div className="flex absolute -bottom-90 right-32 md:hidden flex-col items-end w-fit self-end gap-4 z-[3]">
        <DMText
          rounded="right"
          colorVariant="primary"
          text="Tak jo, potkáme se v 7 před tou vietnamskou restaurací? Vezmeme to s sebou."
          time="12:02"
        />
        <DMText
          rounded="left"
          colorVariant="secondary"
          text="OK, souhlasím, uvidíme se"
          time="12:05"
          className="mr-[clamp(5rem,calc(3.191rem+7.237vw),11.875rem)]"
        />
      </div>
    </div>
  );
}
