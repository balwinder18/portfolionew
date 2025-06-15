import Image from "next/image";
import unilogo from '../../public/images/unilogo.PNG'
const Education = () => (
//   <section id="education" className="flex flex-col gap-y-3 min-h-0 text-white">
//   <div className="transform -translate-y-1.5 opacity-100 blur-0">
//     <h2 className="text-xl font-bold">Education</h2>
//   </div>

//   <a
//     href="https://jcboseust.ac.in/"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="block cursor-pointer"
//   >
//     <div className="flex bg-card text-card-foreground rounded-lg">
//       {/* University Logo */}
//       <div className="flex-none p-2">
//         <span className="relative flex overflow-hidden rounded-full border border-gray-300 dark:border-gray-600 bg-muted-background dark:bg-foreground w-12 h-12">
//           <img
//             src="/jcbust.png"
//             alt="JC Bose University Of Science And Technology, YMCA"
//             className="object-cover w-full h-full"
//             loading="lazy"
//           />
//         </span>
//       </div>

//       {/* Content */}
//       <div className="flex-grow ml-4 flex flex-col justify-center group">
//         <div className="flex items-center justify-between gap-x-2 text-base">
//           <h3 className="font-semibold leading-none text-xs sm:text-sm flex items-center gap-x-1">
//             JC Bose University Of Science And Technology, YMCA
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="lucide-chevron-right size-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out translate-x-0 group-hover:translate-x-1"
//               aria-hidden="true"
//             >
//               <path d="m9 18 6-6-6-6"></path>
//             </svg>
//           </h3>
//           <time
//             dateTime="2021-01"
//             className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right"
//           >
//             2021 - 2025
//           </time>
//         </div>

//         <p className="font-sans text-xs mt-1">
//           B.Tech (Electronics and Computer Engineering)
//         </p>
//       </div>
//     </div>
//   </a>
// </section>



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
