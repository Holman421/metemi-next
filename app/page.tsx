import Countdown from "./_components/sections/Countdown";
import Hero from "./_components/sections/Hero";
import Krakow from "./_components/sections/Krakow";
import Videos from "./_components/sections/Videos";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Countdown />
      <Videos />
      <Krakow />
    </div>
  );
}
