'use client'
import Image from "next/image";
 import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContributionGrid from './components/ContributionGrid';
import About from "./components/About";
import { useEffect } from "react";
import Resume from "./components/Resume";
import Contacts from "./components/Contacts";
import Socials from "./components/Socials";
import FadeInSection from "./components/DelayReveal";


export default function Home() {
//   function revealToSpan() {
//   document.querySelectorAll(".reveal")
//     .forEach(function (elem) {
//       let parent = document.createElement("span")
//       let child = document.createElement("span")

//       parent.classList.add("parent")
//       child.classList.add("child")

//       child.innerHTML = elem.innerHTML;
//       parent.appendChild(child)

//       elem.innerHTML = "";
//       elem.appendChild(parent)
//     });
// }

// useEffect(() => {
//   revealToSpan();
// }, [])


  return (
   

    <main className="flex flex-col min-h-[100dvh]  max-w-2xl mx-auto px-6 items-center">
      
       


      <FadeInSection delay={0.2} className=" max-w-2xl mx-auto px-6 items-center"><Hero /></FadeInSection>

      <FadeInSection delay={0.2} className=" max-w-2xl mx-auto px-6 items-center"><Skills /></FadeInSection>
      <FadeInSection delay={0.2} className=" max-w-2xl mx-auto px-6 items-center"><Experience /></FadeInSection>
      <FadeInSection delay={0.2} className=" max-w-2xl mx-auto px-6 items-center"><Education /></FadeInSection>
      <FadeInSection delay={0.2} className=" max-w-2xl mx-auto px-6 items-center"><Projects /></FadeInSection>
      
     <FadeInSection delay={0.2} className=" max-w-2xl mx-auto px-6 items-center"><Resume/></FadeInSection>
     <FadeInSection delay={0.2} className=" max-w-2xl mx-auto px-6 items-center"><Socials/></FadeInSection>
      <FadeInSection delay={0.2} className=" max-w-2xl mx-auto px-6 items-center"><Contacts/></FadeInSection>
     <FadeInSection delay={0.2} className=" max-w-2xl mx-auto px-6 items-center"><Footer /></FadeInSection>
      {/* <About/>
       <ContributionGrid />
      
      
     
      
       */}
    </main>
  );
}
