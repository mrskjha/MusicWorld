"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function MusicSchoolTestimonial() {
  return (
    <div className="h-[40rem] w-full dark:bg-black   dark:bg-grid-white/[0.2] relative bg-grid-black/[0.2]  flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-center text-3xl font-bold mb-8 z-10">
        Hear Our Harmony: Voices of sucess
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Learning music here has been a life-changing experience. The instructors are incredibly knowledgeable and passionate about their craft.",
    name: "Ravi Kumar",
    title: "Student at Harmony Music School",
  },
  {
    quote:
      "The community at this music school is so supportive. I've grown not only as a musician but also as a person.",
    name: "Aditi Sharma",
    title: "Advanced Piano Learner",
  },
  {
    quote:
      "I never thought I would be able to perform in front of an audience, but thanks to the encouragement of my teachers, I did!",
    name: "Rahul Mehta",
    title: "Guitar Enthusiast",
  },
  {
    quote:
      "The curriculum is perfectly tailored for both beginners and advanced students. There's something for everyone.",
    name: "Priya Patel",
    title: "Vocal Training Graduate",
  },
  {
    quote:
      "I've learned so much about music theory and how to apply it practically. It has made me a more confident musician.",
    name: "Kunal Singh",
    title: "Intermediate Drummer",
  },
];
