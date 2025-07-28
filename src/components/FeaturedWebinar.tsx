import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";
// import { image } from 'framer-motion/m';
// import { div } from 'framer-motion/client';
import Link from 'next/link';

function FeatureWebinars() {
  return (
    <div className='p-12 bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center'>
          <h2 className='font-semibold text-base pt-7 text-teal-600'>FEATURED WEBINARS</h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold text-white sm:text-4xl'>Enhance Your Musical Journey</p>

        </div>
        <div className='mt-10'>
  
      <HoverEffect items={projects} />

        </div>
        <div className='mt-10 text-center'>
          <Link href={'/'}
          className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-neutral-100 transition duration-200'
          >
          View All Webinars
          </Link>

        </div>

      </div>

    </div>
  )
}

export const projects = [{
    title: "Music Theory",
    description: "Music theory is the study of the practices and possibilities of music. The Oxford Companion to Music describes three interrelated uses of the term 'music theory':\n\nThe first is what is otherwise called 'rudiments', currently taught as the elements of notation, of key signatures, of time signatures, of rhythmic notation, and so on. The second is the study of writings about music from ancient times onwards. The third is an area of current music theory that seeks to define processes and general principles in music — a sphere of research that can be distinguished from analysis.",
    image: "https://images.unsplash.com/photo-1612830631391-5e3f0a1e9f8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjA1NzF8MHwxfGFsbHwxfHxtdXNpY3xlbnwwfHx8fHx8fHwxNjE2NzYwNjI4&ixlib=rb-1.2.1&q=80&w=400",
    link: "/music-theory"
    },
    {
    title: "Music Production",
    description: "Music production is the process of creating a recorded music project. A record producer usually handles music production, managing every aspect of the recording process, from the initial songwriting to the final mix. The producer serves as a critical creative and technical liaison between the artists and the recording engineers.",
    image: "https://images.unsplash.com/photo-1612830631391-5e3f0a1e9f8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjA1NzF8MHwxfGFsbHwxfHxtdXNpY3xlbnwwfHx8fHx8fHwxNjE2NzYwNjI4&ixlib=rb-1.2.1&q=80&w=400",
    link: "/music-production"
    },
    {
    title: "Music Business",
    description: "Music business is the business of music. It includes music publishing, merchandising, music production, recording, and distribution. The music business is a multibillion-dollar industry in the United States and around the world. It has been a major part of the entertainment industry for over a century.",
    image: "https://images.unsplash.com/photo-1612830631391-5e3f0a1e9f8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjA1NzF8MHwxfGFsbHwxfHxtdXNpY3xlbnwwfHx8fHx8fHwxNjE2NzYwNjI4&ixlib=rb-1.2.1&q=80&w=400",
    link: "/music-business"

},{
    title: "Music Education",
    description: "Music education is a field of study associated with the teaching and learning of music. It touches on all learning domains, including the psychomotor domain (the development of skills), the cognitive domain (the acquisition of knowledge), and, in particular and significant ways, the affective domain, including music appreciation and sensitivity. Music training from preschool through post-secondary education is common in most nations because involvement with music is considered a fundamental component of human culture and behavior.",
    image: "https://images.unsplash.com/photo-1612830631391-5e3f0a1e9f8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjA1NzF8MHwxfGFsbHwxfHxtdXNpY3xlbnwwfHx8fHx8fHwxNjE2NzYwNjI4&ixlib=rb-1.2.1&q=80&w=400",
    link: "/music-education"

},
{
    title: "Music Therapy",
    description: "Music therapy is an evidence-based clinical use of musical interventions to improve clients' quality of life. Music therapists use music and its many facets—physical, emotional, mental, social, aesthetic, and spiritual—to help clients improve their health in cognitive, motor, emotional, communicative, social, sensory, and educational domains by using both active and receptive music experiences. These experiences include improvisation, re-creation, composition, receptive methods, and discussion of music.",
    image: "https://images.unsplash.com/photo-1612830631391-5e3f0a1e9f8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjA1NzF8MHwxfGFsbHwxfHxtdXNpY3xlbnwwfHx8fHx8fHwxNjE2NzYwNjI4&ixlib=rb-1.2.1&q=80&w=400",
    link: "/music-therapy"
},
{
    title: "Music History",
    description: "Music history, sometimes called historical musicology, is a highly diverse subfield of the broader discipline of musicology that studies music from a historical point of view. In theory, 'music history' could refer to the study of the history of any type or genre of music (e.g., the history of Indian music or the history of rock). In practice, these research topics are often categorized as part of ethnomusicology or cultural studies, whether or not they are ethnographically based. The terms 'music history' and 'historical musicology' usually refer to the history of European classical music.",
    image: "https://images.unsplash.com/photo-1612830631391-5e3f0a1e9f8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjA1NzF8MHwxfGFsbHwxfHxtdXNpY3xlbnwwfHx8fHx8fHwxNjE2NzYwNjI4&ixlib=rb-1.2.1&q=80&w=400",
    link: "/music-history"
},

]

export default FeatureWebinars;
