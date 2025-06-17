
import Image from 'next/image';
import banao from '../../public/images/banao.PNG'
import { useState } from 'react';

function Experience() {
  const [expanded, setExpanded] = useState(false);

  return (

    <section id="work" className="flex mt-4 flex-col gap-y-3 min-h-0 text-white">
      <div className="transform -translate-y-1.5 opacity-100 blur-0">
        <h2 className="text-xl font-bold">Work Experience</h2>
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-left block cursor-pointer w-full focus:outline-none group"
      >
        <div className="flex items-start bg-card text-card-foreground rounded-lg p-2 transition-all duration-300">
          {/* Logo */}
          <div className="flex-none">
            <span className="relative flex overflow-hidden rounded-full border border-gray-300 dark:border-gray-600 bg-muted-background dark:bg-foreground w-12 h-12">
              <Image
                src={banao}
                alt="Company Logo"
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </span>
          </div>

          {/* Text Content */}
          <div className="flex-grow ml-4 flex flex-col">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="font-semibold leading-none text-xs sm:text-sm flex items-center gap-x-1">

                Banao Technologies
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`lucide-chevron-right size-4 transform transition-all duration-300
    ${expanded ? 'rotate-90 opacity-100 translate-x-1' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1'}
  `}
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>


              </h3>

              {/* SVG only visible on hover */}

              <time
                dateTime="2025-01"
                className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right"
              >
                Jan 2025 - June 2025
              </time>
            </div>

            <p className="font-sans text-xs mt-1">Software Developer Intern</p>

            {/* Expandable Description */}
            <div
              className={`ml-2 transition-all duration-300 ease-in-out overflow-hidden ${expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                • Collaborated with UX designers to implement responsive components, enhancing mobile usability.
              </p>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                • Integrated RESTful APIs seamlessly, ensuring smooth data flow and efficient state management.
              </p>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                • Developed dynamic UIs using Next.js, improving page load performance by 30% through SSR/ISR optimizations.
              </p>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                • Reduced API response time by 20% by optimizing backend queries and caching strategies.
              </p>
            </div>
          </div>
        </div>
      </button>
    </section>

  )
};

export default Experience;
