import React from "react";
import HeroHeader from "../specific/HeroHeader";
import HeroContent from "../specific/HeroContent";
import HeroVideo from "../specific/HeroVideo";

export default function Hero() {
  return (
    <section className="w-full px-xs pb-24">
      <div className="bg-[url('/images/bg-final-mobile.jpg')] md:bg-[url('/images/bg-final.jpg')] relative bg-cover bg-center w-full flex flex-col rounded-bl-custom-xl rounded-br-custom-xl">
        <HeroHeader />
        
        <div className="flex flex-col xl:flex-row gap-58 md:gap-16 mt-60 md:mt-0 pb-0 md:pb-40">
          <HeroContent />
          <HeroVideo />
        </div>
      </div>
    </section>
  );
}
