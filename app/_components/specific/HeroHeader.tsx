import React from "react";
import OutlinedTextSVG from "../shared/ui/OutlinedTextSVG";

export default function HeroHeader() {
  return (
    <div className="mt-[-1vw] relative">
      <h1 className="anim-logo logo-lg translate-y-[-100%] text-white mx-auto">
        METEMI
      </h1>
      <OutlinedTextSVG
        text="for KRAKOW"
        viewBoxWidth={500}
          viewBoxHeight={90}
        className="absolute right-[11.5%] bottom-[-50%] md:bottom-[-17.5%]"
      />
    </div>
  );
}
