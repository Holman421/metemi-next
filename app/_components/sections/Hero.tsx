import React from "react";
import HeroHeader from "../specific/HeroHeader";
import HeroContent from "../specific/HeroContent";
import HeroVideo from "../specific/HeroVideo";

export default function Hero() {
  return (
    <section className="w-full px-xs">
      <div className="bg-[url('/images/bg-final.jpg')] bg-cover bg-center w-full flex flex-col rounded-bl-[120px] rounded-br-[120px] min-h-screen">
        <HeroHeader />
        
        <div className="flex gap-16 mt-100 pb-40">
          <HeroContent />
          <HeroVideo />
        </div>
      </div>
    </section>
  );
}
