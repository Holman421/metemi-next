import VideosLeftSide from "../specific/VideosLeftSide";
import VideosRightSide from "../specific/VideosRightSide";

export default function Videos() {
  return (
    <div className="flex flex-col lg:flex-row gap-24 px-xs lg:px-100 mb-[clamp(3.125rem,calc(0.263rem+11.447vw),14rem)]">
      <VideosLeftSide />
      <VideosRightSide />
    </div>
  );
}
