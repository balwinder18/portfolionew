import Image from "next/image";
import unilogo from '../../public/images/unilogo.PNG'
const Education = () => (

 <section id="education" className="mt-4 w-full flex flex-col gap-y-3 min-h-0 text-white">
  <div className="transform -translate-y-1.5 opacity-100 blur-0">
    <h2 className="text-xl font-bold">Education</h2>
  </div>

  <a
    href="https://www.jcboseust.ac.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="block cursor-pointer"
  >
    <div className="flex items-start bg-card text-card-foreground rounded-lg p-2">
      {/* Logo */}
      <div className="flex-none">
        <span className="relative flex overflow-hidden rounded-full border border-gray-300 dark:border-gray-600 bg-muted-background dark:bg-foreground w-12 h-12">
          <Image
            src={unilogo}
            alt="university Logo"
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </span>
      </div>

      {/* Text Content */}
      <div className="flex-grow ml-4 flex flex-col">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="font-semibold leading-none text-xs sm:text-sm flex items-center gap-x-1">
            J.C. Bose University of Science and Technology
          </h3>
          <time
            dateTime="2025-01"
            className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right"
          >
            2022 - 2026
          </time>
        </div>

        <p className="font-sans text-xs mt-1">
          BTECH (Electronics and Communication Engineering)
        </p>

     
        
      </div>
    </div>
  </a>
</section>


);

export default Education;
