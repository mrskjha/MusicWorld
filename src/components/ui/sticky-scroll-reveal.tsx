"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-800)",
    "var(--gray-900)",
    "var(--slate-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--blue-500), var(--teal-400))",
    "linear-gradient(to bottom right, var(--purple-600), var(--pink-400))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-400))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[35rem] overflow-y-auto flex justify-center relative space-x-12 rounded-lg shadow-lg p-8"
      ref={ref}
    >
      <div className="relative flex items-start px-4 w-full max-w-5xl">
        <div className="max-w-3xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="mb-24">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.4,
                  y: activeCard === index ? 0 : 20,
                }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold text-white mb-4"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.4,
                  y: activeCard === index ? 0 : 20,
                }}
                transition={{ duration: 0.5 }}
                className="text-lg text-slate-300 leading-relaxed"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:block h-80 w-96 rounded-md bg-white sticky top-12 shadow-xl transform translate-y-0",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
