import FeaturedCourses from "@/components/Courses";
import HeroSection from "@/components/HeroSection";
import { MusicSchoolTestimonial } from "@/components/MovingCard";
import FeatureWebinars from "@/components/FeaturedWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurInstructors from "@/components/OurInstructors";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MusicSchoolTestimonial/>
      <FeatureWebinars/>
      <OurInstructors/>
      <Footer/>
     
    </main>
  );
}
