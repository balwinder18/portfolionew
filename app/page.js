import Image from "next/image";
 import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContributionGrid from './components/ContributionGrid';


export default function Home() {
  return (
   

    <main className="px-6 md:px-20 max-w-screen-xl mx-auto">
      <Hero />
      <ContributionGrid />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
