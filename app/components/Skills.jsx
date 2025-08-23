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
import Redis from '../../public/images/redis.png'
import Langchain from '../../public/images/langchain.png'

export const techStack = [
  { label: "React.js", icon: react },
  { label: "Next.js", icon: next },
  { label: "JavaScript", icon: JavaScript },
  { label: "TypeScript", icon: TypeScript },
  { label: "Node.js", icon: Node },
  { label: "Express.js", icon: Express },
  { label: "Redis", icon: Redis },
   { label: "LangChain", icon: Langchain },
  { label: "Redux", icon: Redux },
  { label: "Tailwind", icon: Tailwind },
 
];


export const techStack2 = [
  
   { label: "ShadCN", icon: shadcn },
   { label: "Java", icon: Java },
  { label: "NPM", icon: NPM },
  { label: "Python", icon: Python },
  { label: "C", icon: C },
  { label: "MongoDB", icon: MongoDB },
  
  { label: "GitHub", icon: GitHub },
  { label: "Postman", icon: Postman },
  { label: "Vercel", icon: Vercel },
  { label: "Data Structures", icon: datastructure },
  { label: "Algorithms", icon: algorithms },
];


 const allSkills = [...techStack, ...techStack2];


import Image from "next/image";
import { useState } from 'react';

export default function Skills() {


const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);


  return (
   


  <section className="w-full text-white overflow-hidden relative">
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

      {/* See All Button */}

 

        <div className="flex justify-center mt-6">
        <button
          onClick={openPopup}
         className="text-[#14fca9] underline hover:text-white transition"
           >
          See All Skills
        </button>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-black/95 border border-gray-800 rounded-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-black [&::-webkit-scrollbar-thumb]:bg-gray-800 [&::-webkit-scrollbar-thumb]:rounded-full ">
            {/* Popup Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-800">
              <h3 className="text-xl font-bold text-white">All Skills & Technologies</h3>
              <button
                onClick={closePopup}
                className="text-gray-400 hover:text-teal-400 transition-colors text-2xl leading-none w-8 h-8 flex items-center justify-center hover:bg-teal-500/10 rounded-full"
              >
                ×
              </button>
            </div>

            {/* Skills Grid */}
            <div className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {allSkills.map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 hover:bg-gray-800/70 rounded-lg border border-gray-800 hover:border-teal-500/50 transition-all duration-200 group hover:shadow-lg hover:shadow-teal-500/10"
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.label}
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain mb-2 group-hover:scale-110 transition-transform duration-200"
                    />
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors text-center">
                      {tech.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>


  );
}


