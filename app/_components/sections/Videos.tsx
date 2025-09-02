import Image from "next/image";
import { DMText } from "../shared/ui/DMText";

export default function Videos() {
  return (
    <div className="flex gap-24 px-100 mb-224">
      <div className="w-[60%]">
        <div className="w-full aspect-square relative mt-124">
          <Image
            src="/images/test-img.jpg"
            alt="Video Thumbnail"
            width={600}
            height={400}
            className="object-cover size-full rounded-4xl"
          />
          <div className="absolute left-124 bottom-[-15%] flex flex-col">
            <p className="text-35xl text-white font-bold max-w-[60%] leading-[120%]">
              Meet real people around you.
            </p>

            <DMText
              rounded="right"
              colorVariant="primary"
              text="Okej, v 15:00 na severní pláži?"
              time="15:11"
              className="self-end mr-124 mb-32 mt-224"
            />
            <DMText
              rounded="left"
              colorVariant="secondary"
              text="Vidíme se za chvíli, těším se"
              time="15:18"
              className="self-end"
            />
          </div>
        </div>
      </div>
      <div className="w-[40%]"></div>
    </div>
  );
}
