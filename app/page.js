'use client'
import Image from "next/image";
 import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

import About from "./components/About";
import { useEffect, useState } from "react";
import Resume from "./components/Resume";
import Contacts from "./components/Contacts";
import Socials from "./components/Socials";
import FadeInSection from "./components/DelayReveal";
import Navbar from '../app/components/Navbar'
import SpotlightText from "./components/Spotlight";


export default function Home() {

   


  return (
   

    <div className="relative">
            <SpotlightText /> {/* This will be the background effect */}

            {/* Your main className="relative z-20 ... bg-transparent content, needs a higher z-index to be visible */}
            <main className="relative z-20 flex flex-col min-h-[100dvh] max-w-2xl mx-auto px-6 items-center bg-transparent">
                {/* ^^^ This line is CRUCIAL. Ensure bg-transparent is here. */}

                <FadeInSection delay={0.2} className="max-w-2xl mx-auto px-6 items-center"><Hero /></FadeInSection>
                <FadeInSection delay={0.2} className="max-w-2xl mx-auto px-6 items-center"><Skills /></FadeInSection>
                <FadeInSection delay={0.2} className="max-w-2xl mx-auto px-6 items-center"><Experience /></FadeInSection>
                <FadeInSection delay={0.2} className="max-w-2xl mx-auto px-6 items-center"><Education /></FadeInSection>
                <FadeInSection delay={0.2} className="max-w-2xl mx-auto px-6 items-center"><Projects /></FadeInSection>

                <FadeInSection delay={0.2} className="max-w-2xl mx-auto px-6 items-center"><Resume/></FadeInSection>
                <FadeInSection delay={0.2} className="max-w-2xl mx-auto px-6 items-center"><Socials/></FadeInSection>
                <FadeInSection delay={0.2} className="max-w-2xl mx-auto px-6 items-center"><Contacts/></FadeInSection>
                <FadeInSection delay={0.2} className="max-w-2xl mx-auto px-6 items-center"><Footer /></FadeInSection>
                <Navbar/>
            </main>
        </div>
  );
}
