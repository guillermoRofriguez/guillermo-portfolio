import { ArrowDownIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
// import ParallaxImage from "../ui/ParallaxImage";

export default function ScrollToExplore() {
  return (
    <section className="flex flex-col items-center gap-y-12 mt-16">
      <div className="relative h-162.5 w-full overflow-hidden">
        <div className="absolute inset-0 animate-parallax">
          <Image
            src="/scroll-to-explore.png"
            alt="scroll-to-explore"
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      <button className="flex flex-col items-center gap-y-2 focus:outline-none cursor-pointer text-[#BACAC5] animate-pulse text-[14px]">
        Scroll to explore
        <ArrowDownIcon className="size-4" />
      </button>
    </section>
  );
}
