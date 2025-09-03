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
    <footer className="flex flex-col mt-64 md:mt-80 items-center px-xs">
      <div className="flex justify-center gap-24">
        <a
          href="#"
          aria-label="Facebook"
          className="cursor-pointer hover:scale-120 transition-transform"
        >
          <FacebookIcon className="size-24" />
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="cursor-pointer hover:scale-120 transition-transform"
        >
          <TwitterIcon className="size-24" />
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="cursor-pointer hover:scale-120 transition-transform"
        >
          <InstagramIcon className="size-24" />
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          className="cursor-pointer hover:scale-120 transition-transform"
        >
          <LinkedInIcon className="size-24" />
        </a>
        <a
          href="#"
          aria-label="Snapchat"
          className="cursor-pointer hover:scale-120 transition-transform"
        >
          <SnapchatIcon className="size-24" />
        </a>
        <a
          href="#"
          aria-label="GitHub"
          className="cursor-pointer hover:scale-120 transition-transform"
        >
          <GithubIcon className="size-24" />
        </a>
      </div>
      <p className="text-gray text-base mt-40">
        © Copyrights METEMI | All Rights Reserved
      </p>
      <div className="size-75 rounded-xl relative overflow-hidden mt-[clamp(2.813rem,calc(2.648rem+0.658vw),3.438rem)] mb-[clamp(3.438rem,calc(2.78rem+2.632vw),5.938rem)] flex items-center justify-center">
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
