"use client";
import C from '../../public/images/C.png'
import react from '../../public/images/react.png'
import next from '../../public/images/Next.png'
import JavaScript from '../../public/images/JavaScript.png'
import TypeScript from '../../public/images/TypeScript.png'
import Node from '../../public/images/Node.png'
import Express from '../../public/images/Express.png'
import Redux from '../../public/images/Redux.png'
import Tailwind from '../../public/images/Tailwind.png'
import shadcn from '../../public/images/shadcn.png'
import NPM from '../../public/images/NPM.png'
import Python from '../../public/images/Python.png'
import MongoDB from '../../public/images/MongoDB.png'
import Java from '../../public/images/Java.png'
import GitHub from '../../public/images/GitHub.png'
import Postman from '../../public/images/Postman.png'
import Vercel from '../../public/images/Vercel.png'
import datastructure from '../../public/images/datastructure.png'
import algorithms from '../../public/images/algorithms.png'
export const techStack = [
  { label: "React.js", icon: react },
  { label: "Next.js", icon: next },
  { label: "JavaScript", icon: JavaScript },
  { label: "TypeScript", icon: TypeScript },
  { label: "Node.js", icon: Node },
  { label: "Express.js", icon: Express },
  { label: "Redux", icon: Redux },
  { label: "Tailwind", icon: Tailwind },
 
];


export const techStack2 = [
  
   { label: "ShadCN", icon: shadcn },
  { label: "NPM", icon: NPM },
  { label: "Python", icon: Python },
  { label: "C", icon: C },
  { label: "MongoDB", icon: MongoDB },
  { label: "Java", icon: Java },
  { label: "GitHub", icon: GitHub },
  { label: "Postman", icon: Postman },
  { label: "Vercel", icon: Vercel },
  { label: "Data Structures", icon: datastructure },
  { label: "Algorithms", icon: algorithms },
];


 


import Image from "next/image";

export default function Skills() {
  return (
    <section className="w-full py-10 bg-black text-white overflow-hidden">
      <h2 className="text-center text-xl font-bold mb-6">What I work with</h2>

      {/* First Row */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-slide flex whitespace-nowrap gap-6 px-4">
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={`row1-${index}`}
              className="flex ml-4 items-center gap-1 text-sm sm:text-base text-gray-300 hover:text-white transition"
            >
              <Image
                src={tech.icon}
                alt={tech.label}
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
              />
              <span>{tech.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row (Delayed) */}
      <div className="relative w-full overflow-hidden mt-3">
        <div className="animate-slide-delayed flex whitespace-nowrap gap-6 px-4">
          {[...techStack2, ...techStack2].map((tech, index) => (
            <div
              key={`row2-${index}`}
              className="flex ml-4 items-center gap-1 text-sm sm:text-base text-gray-300 hover:text-white transition"
            >
              <Image
                src={tech.icon}
                alt={tech.label}
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
              />
              <span>{tech.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


