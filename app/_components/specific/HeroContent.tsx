import React from "react";
import EmailSubscribe from "../shared/ui/EmailSubscribe";
import { DMText } from "../shared/ui/DMText";

export default function HeroContent() {
  return (
    <div className="flex flex-col z-[3] xl:w-[55%]">
      <div className="ml-[clamp(2.5rem,calc(1.102rem+5.592vw),7.813rem)] flex flex-col gap-12 xl:text-start text-center px-24 md:px-0 -translate-x-[clamp(1.25rem,calc(0.921rem+1.316vw),2.5rem)]">
        <h2 className="text-display-lg text-white anim-text-lines">
          Přestaň lidí míjet. <br /> Začni je potkávat.
        </h2>
        <p className="text-2xl text-white anim-text-lines">
          Jste si blíž, než si myslíte. <br /> Stačí se potkat.
        </p>
      </div>
      <div className="anim-fade-left w-full">
        <div className="mt-24 relative z-[3] flex flex-col w-full md:w-fit gap-0 py-[clamp(1.25rem,calc(0.839rem+1.645vw),2.813rem)] bg-[#DAD9DE] pl-[clamp(2.5rem,calc(1.102rem+5.592vw),7.813rem)] pr-[clamp(1.25rem,calc(-0.97rem+8.882vw),9.688rem)] rounded-tr-custom-big rounded-br-custom-big -translate-x-[clamp(1.25rem,calc(0.921rem+1.316vw),2.5rem)] shadow-[23.512px_11.756px_41.146px_0_rgba(0,0,0,0.27)]">
          <p className="text-gradient text-[clamp(2.5rem,calc(-1.5rem+5vw),4.5rem)]/[100%] max-w-725 font-normal">
            Get <span className="font-bold">lifetime Premium for free</span>
          </p>
          <div>
            <EmailSubscribe
              variant="primary"
              className="2xl:absolute bottom-[20%] right-32"
            />
            <div className="hidden absolute -bottom-[375px] right-0 md:flex flex-col items-end w-fit self-end gap-20 translate-x-125 z-[3]">
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
                animateTyping
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
