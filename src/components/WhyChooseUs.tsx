"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicScholsContant = [
  {
    title: "Unleashing Talent: Where Music Meets Mastery",
    description: "At our music academy, we believe in transforming passion into skill. With expert instructors and personalized attention, we guide students toward mastering their chosen instrument."
  },
  {
    title: "Innovative Learning for Tomorrow's Musicians",
    description: "Our cutting-edge curriculum and state-of-the-art facilities make us the ideal place for aspiring musicians to learn and grow in a creative, inspiring environment."
  },
  {
    title: "From Beginner to Virtuoso: Tailored for Every Student",
    description: "Whether you're just starting out or refining your craft, we offer programs that cater to all levels, ensuring each student finds their musical voice."
  },
  {
    title: "Building Confidence Through Music",
    description: "We believe that music is more than just notes and rhythm—it’s about building confidence and encouraging self-expression. Our school provides the perfect space to develop both."
  },
  {
    title: "Personalized Lessons, Professional Mentors",
    description: "Each student receives one-on-one lessons from highly skilled instructors who are passionate about sharing their love of music and helping students succeed."
  },
  {
    title: "Explore Various Instruments and Genres",
    description: "From classical piano to contemporary guitar, we offer a diverse range of instruments and genres so students can explore their musical interests."
  },
  {
    title: "Perform on Stage: Recitals and Concerts",
    description: "We provide opportunities for students to showcase their talent through regular recitals and performances, building stage presence and audience engagement."
  },
  {
    title: "A Community of Musicians",
    description: "Join a community of like-minded musicians where collaboration, learning, and creativity flourish. Here, every student finds their musical family."
  }
];

function WhyChooseUs() {
  return (
    <div className="mt-8 
    ">
      <StickyScroll content={musicScholsContant} />
    </div>
  );
}

export default WhyChooseUs;
