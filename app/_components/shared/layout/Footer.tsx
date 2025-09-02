import Image from "next/image";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LetterMIcon,
  LinkedInIcon,
  SnapchatIcon,
  TwitterIcon,
} from "../icons";

export default function Footer() {
  return (
    <footer className="flex flex-col mt-80 items-center px-xs">
      <div className="flex justify-center gap-24">
        <FacebookIcon className="size-24" />
        <TwitterIcon className="size-24" />
        <InstagramIcon className="size-24" />
        <LinkedInIcon className="size-24" />
        <SnapchatIcon className="size-24" />
        <GithubIcon className="size-24" />
      </div>
      <p className="text-gray text-base mt-40">
        © Copyrights METEMI | All Rights Reserved
      </p>
      <div className="size-75 rounded-xl relative overflow-hidden mt-55 mb-95 flex items-center justify-center">
        <Image
          src="/images/rectangle-bg.jpg"
          alt="Logo"
          width={75}
          height={75}
          className="size-full absolute"
        />
        <LetterMIcon className="size-35 relative z-[2]" />
      </div>
      <div className="bg-[url('/images/bg-final.jpg')] h-33 bg-cover bg-center flex flex-col rounded-tl-[120px] rounded-tr-[120px] w-full"></div>
    </footer>
  );
}
