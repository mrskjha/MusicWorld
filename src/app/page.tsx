'use client'
import FeaturedCourses from "@/components/Courses";
import HeroSection from "@/components/HeroSection";
import { MusicSchoolTestimonial } from "@/components/MovingCard";
import FeatureWebinars from "@/components/FeaturedWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurInstructors from "@/components/OurInstructors";
import Footer from "@/components/Footer";
import { useRef } from "react";
import {motion, useInView } from "framer-motion";


export default function Home() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      
      <motion.div
        ref={sectionRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <FeaturedCourses />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <WhyChooseUs />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <MusicSchoolTestimonial />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <FeatureWebinars />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <OurInstructors />
      </motion.div>

      <Footer />
    </main>
  );
}
