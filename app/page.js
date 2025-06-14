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


export default function Home() {
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
   

    <main className="flex flex-col min-h-[100dvh]  max-w-2xl mx-auto px-6 items-center">
      
       

      <Hero />
      <Skills />
      <Projects />
      <Resume/>
      {/* <About/>
       <ContributionGrid />
      <Experience />
      <Education />
     
      
      <Footer /> */}
    </main>
  );
}
