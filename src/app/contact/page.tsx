import React from 'react';
import ContactForm from '@/components/ContactForm'; 
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

function Page() {
  return (
    <BackgroundBeamsWithCollision className="z-20 top-44">
      <div className="relative min-h-screen ">
        {/* Fullscreen Meteors */}
        
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 py-12">
          <h1 className="text-5xl text-white font-extrabold mb-4 text-center">
            Contact Us
          </h1>
          <p className="text-lg text-gray-300 mb-8 text-center max-w-2xl">
            We’d love to hear from you! Please fill out the form below and we will get back to you as soon as possible.
          </p>
          <ContactForm />
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

export default Page;
