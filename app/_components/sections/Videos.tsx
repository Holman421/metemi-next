import VideosLeftSide from "../specific/VideosLeftSide";
import VideosRightSide from "../specific/VideosRightSide";

export default function Videos() {
  return (
    <div className="flex flex-col lg:flex-row gap-24 px-xs lg:px-100 mb-[clamp(6.25rem,calc(4.211rem+8.158vw),14rem)]">
      <VideosLeftSide />
      <VideosRightSide />
    </div>
  );
}
