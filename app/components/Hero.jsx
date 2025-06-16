'use client'

import { useEffect } from "react";

  import pushpin from '../../public/images/pushpin.png'
import Image from "next/image";
  


export default function Hero (){
    function revealToSpan() {
    document.querySelectorAll(".reveal")
      .forEach(function (elem) {
        let parent = document.createElement("span")
        let child = document.createElement("span")
  
        parent.classList.add("parent")
        child.classList.add("child")
  
        child.innerHTML = elem.innerHTML;
        parent.appendChild(child)
  
        elem.innerHTML = "";
        elem.appendChild(parent)
      });
  }
  
  useEffect(() => {
    revealToSpan();
  }, [])
  
  

 return (

<>
 <section
      id="hero"
      className="w-full text-white flex flex-col items-start justify-start px-6 pt-16 pb-4"
    >
      {/* Heading */}
      <h1 className="reveal font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
        <span>Hi,</span>&nbsp;
        <span>I am</span>&nbsp;
        <span className="text-[#14cf93]">Balwinder</span>
      </h1>

      {/* Location + Role */}
      <div className="mt-2 text-left space-y-1">
        <div className="reveal text-sm sm:text-base text-white tracking-wide">
          Software Developer | Engineer
        </div>
        {/* Location */}
       
       <div className="reveal flex items-center text-sm sm:text-base text-gray-400 gap-2">
  <span><Image
    src={pushpin}
    alt="Location Pin"
    className="w-4 mt-1 h-4 object-contain align-middle translate-y-[1px]"
    
  />
  </span>
  <span className="align-middle">Haryana, India</span>
 
</div>

        
      </div>
    </section>
</>





)};


