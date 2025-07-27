'use client'

import { useEffect } from "react";

  import pushpin from '../../public/images/pushpin.png'
import Image from "next/image";
import me from '../../public/images/me.jpg'
  


export default function Hero (){
  

 return (

<>
 <section
      id="hero"
      className="w-full text-white flex flex-col items-start justify-start px-6 pt-16 pb-4"
    >

<div className="flex flex-row items-center justify-center lg:gap-6 xl:gap-6 2xl:gap-6 gap-2 mt-4">
  {/* Text Section */}
  <div className="text-left">
    <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
      <span className="block">Hi, I am</span>
      <span className="block text-[#14cf93]">Balwinder</span>
    </h1>
  </div>

  {/* Image Section */}
  <div className="lg:w-32 xl:w-32 2xl:w-32 h-20 w-20 lg:h-32 xl:h-32 2xl:h-32 lg:mt-2 xl:mt-2 2xl:mt-2 mb-4 lg:mb-0 xl:mb-0 2xl:mb-0 lg:ml-[30px] xl:ml-[30px] 2xl:ml-[30px] sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-[#14cf93] shadow-lg">
    <Image
      src={me}
      alt="Balwinder"
      className="w-full h-full object-cover"
    />
  </div>
</div>





      {/* Location + Role */}
      <div className="mt-2 text-left space-y-1">
        <div className="text-sm sm:text-base text-white tracking-wide">
          Software Developer | Engineer
        </div>
        {/* Location */}
       
       <div className="flex items-center text-sm sm:text-base text-gray-400 gap-2">
  <span>
    <Image
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


