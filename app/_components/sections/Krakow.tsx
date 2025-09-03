import Image from "next/image";
import OutlinedTextSVG from "../shared/ui/OutlinedTextSVG";
import EmailSubscribe from "../shared/ui/EmailSubscribe";

export default function Krakow() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col md:flex-row w-full">
        <OutlinedTextSVG
          text="KRAKOW"
          className="w-full md:w-[60%] md:translate-y-34 md:scale-100 scale-120 mb-12 md:mb-0"
          useGradient={true}
          fontSize="8rem"
          viewBoxWidth={800}
          viewBoxHeight={125}
          // align="bottom-center"
        />
        <div className="w-full md:w-[40%] md:pr-24 flex flex-col gap-16 justify-center pb-32 md:pb-24 px-24 md:px-0">
          <h4 className="text-2xl text-gray font-bold anim-text-lines text-center md:text-start">
            Spuštění začíná v Krakowě
          </h4>
          <p className="text-xl text-gray anim-text-lines md:text-start text-center text-balance">
            Kraków je první město, kde aplikaci testujeme. Zapiš se a získej
            přístup jako jeden z prvních.
          </p>
        </div>
      </div>
      <div className="w-full relative overflow-hidden md:h-auto">
        <h2 className="absolute text-logo-xl -ml-16 md:-ml-0 leading-[70%] font-bold text-outline md:text-outline-thick z-[2] top-0 uppercase left-1/2 -translate-x-1/2">
          Metemi
        </h2>
        <Image
          src="/images/krakow-bg-4.jpg"
          alt="Krakow"
          width={800}
          height={200}
          className="md:aspect-[261/101] relative w-full object-cover parallax-object"
          data-speed-y="0.5"
        />
        <div className="absolute bottom-[20%] max-w-screen left-1/2 -translate-x-1/2 flex flex-col items-center gap-8">
          <p className="text-2xl-small text-white anim-text-lines">
            <span className="font-bold">Chci pozvánku</span> jako první
          </p>
          <EmailSubscribe variant="secondary" className="w-[90%]" />
        </div>
      </div>
    </div>
  );
}
