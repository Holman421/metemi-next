import React from "react";
import EmailSubscribe from "../shared/ui/EmailSubscribe";
import { DMText } from "../shared/ui/DMText";

export default function HeroContent() {
  return (
    <div className="flex flex-col">
      <div className="ml-125 flex flex-col gap-12">
        <h2 className="text-display-lg text-white anim-text-lines">
          Přestaň lidí míjet. <br />
          Začni je potkávat.
        </h2>
        <p className="text-2xl text-white anim-text-lines">
          Jste si blíž, než si myslíte. <br /> Stačí se potkat.
        </p>
      </div>
      <div className="anim-fade-left">
        <div className="mt-24 py-45 bg-[#DAD9DE] relative w-fit pl-125 pr-155 rounded-tr-custom-big rounded-br-custom-big -translate-x-40 shadow-[23.512px_11.756px_41.146px_0_rgba(0,0,0,0.27)]">
          <p className="text-gradient text-4xl">
            Get lifetime Premium <br /> for free
          </p>
          <div>
            <EmailSubscribe className="absolute bottom-[20%] right-32" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end mt-20 w-fit self-end gap-20 translate-x-125 relative z-[3]">
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
          className="mr-190"
        />
      </div>
    </div>
  );
}
