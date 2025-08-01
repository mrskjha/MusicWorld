'use client';
import Link from "next/link";
import React from "react";
import courseData from "../data/music_courses.json";
// import { p } from "framer-motion/client";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

interface Courses {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}
function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Courses) => course.isFeatured
  );

  return (
    <div className=" bg-gray-900 ">
      <div className="text-center ">
        <h2 className=" font-semibold text-base pt-7 text-teal-600">
          FEATURED COURSES
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold text-white sm:text-4xl">
          Learn With the Best
        </p>
      </div>
      <div className="mt-8 ml-4 mr-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
                <BackgroundGradient className="flex flex-col items-center p-4 rounded-[22px] dark:bg-zinc-900 bg-white overflow-hidden h-full ,max-w-sm"
                >
                    <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                      <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                      <p className=" text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                      <Link href={`/courses/${course.slug}`}>
                      Learn More
                      </Link>
                        </div>
                </BackgroundGradient>

            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href={"/courses"}>
          <button className="p-[3px] relative  mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              <span className="z-10 relative">All COURSES</span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
