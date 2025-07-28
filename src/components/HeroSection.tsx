import Link from "next/link";
import React from "react";
// import { cn } from "@/utils/utils";
import { Spotlight } from "./ui/Spotlight";

function HeroSection() {
  return (
    <div className="h-auto md:h-[60rem] w-full rounded-sm flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you&apos;re a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>

        <div className="mt-4 pt-14">
          <Link href="/courses">
            <button className="p-[3px] relative ">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                <span className="z-10 relative">Explore Courses</span>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
