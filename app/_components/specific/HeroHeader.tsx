import React from "react";
import NavButton from "./NavButton";

export default function HeroHeader() {
  return (
    <div className="mt-[-2vw] md:mt-[-3vw] relative">
      <h1 className="anim-logo text-[23.5vw] font-bold leading-[90%] translate-y-[-100%] text-white mx-auto lg:translate-x-[1%]">
        METEMI
      </h1>
      <div className="absolute flex right-[4%] top-[clamp(5.625rem,calc(0.855rem+19.079vw),23.75rem)]">
        <NavButton />
        <p className="anim-pop-in absolute text-outline-krakov right-[150%] text-transparent! top-[50%] -translate-y-1/2 whitespace-nowrap font-bold">
          for KRAKOW
        </p>
      </div>
      {/* <OutlinedTextSVG
        text="for KRAKOW"
        viewBoxWidth={1000}
        viewBoxHeight={150}
        className="absolute right-[11.5%] bottom-[-50%] md:bottom-[-2.5%]"
        fontSize="15rem"
      /> */}
    </div>
  );
}
