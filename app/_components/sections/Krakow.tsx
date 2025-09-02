import Image from "next/image";
import OutlinedTextSVG from "../shared/ui/OutlinedTextSVG";

export default function Krakow() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex w-full">
        <OutlinedTextSVG
          text="KRAKOW"
          className="w-[60%] translate-y-34"
          useGradient={true}
          fontSize="8rem"
          viewBoxWidth={800}
          viewBoxHeight={125}
        />
        <div className="w-[40%] flex flex-col gap-16 justify-center">
          <h4 className="text-2xl text-gray font-bold">
            Spuštění začíná v Krakowě
          </h4>
          <p className="text-xl text-gray">
            Kraków je první město, kde aplikaci testujeme. Zapiš se a získej
            přístup jako jeden z prvních.
          </p>
        </div>
      </div>
      <div className="w-full relative overflow-hidden">
        <h2 className="absolute text-logo-xl leading-[70%] font-bold text-outline-thick z-[2] top-0 uppercase left-1/2 -translate-x-1/2">Metemi</h2>
        <Image
          src="/images/krakow-bg.jpg"
          alt="Krakow"
          width={800}
          height={200}
          className="aspect-[261/101] relative w-full"
        />
      </div>
    </div>
  );
}
