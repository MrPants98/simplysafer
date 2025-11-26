"use client";

import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { AuroraText } from "@/components/ui/aurora-text";
import { TextAnimate } from "@/components/ui/text-animate";
import Link from "next/link";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function MainLandingSection() {
  return (
    <>
      <div className="flex flex-col justify-center">
        {AnimatedGradientTextDemo()}
        <h1 className="text-4xl font-bold md:text-5xl lg:text-7xl dark:text-white text-center mt-4">
            Toxicity Detection <br /> Made <AuroraText>Simple</AuroraText>
        </h1>
        <TextAnimate
            animation="blurInUp"
            by="character"
            once
            className="text-center mt-4"
        >
            Take the complexity out of moderation and let us do the work
        </TextAnimate>
        <div className="mt-4 flex items-center justify-center">
        <RainbowButton>
            <Link href={"/register"}>Get Started for Free!</Link>
        </RainbowButton>
        </div>
      </div>
    </>
    
  );
}

function AnimatedGradientTextDemo() {
  return (
    <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
      <span
        className={cn(
          "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-linear-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-size-[300%_100%] p-px",
        )}
        style={{
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "subtract",
          WebkitClipPath: "padding-box",
        }}
      />
      🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
      <AnimatedGradientText className="text-sm font-medium">
        Introducing Simply Safer
      </AnimatedGradientText>
      <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
    </div>
  );
}
