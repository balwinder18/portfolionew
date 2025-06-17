"use client";
import { useState } from "react";

const projects = [
  {
    title: "Take Notes",
    desc: "Take notes hassle-free in 2 minutes with this Chrome Extension",
    tech: ["Next.js", "Typescript", "Redux", "TailwindCSS", "Shadcn UI", "Appwrite", "React Hook Form"],
    site: "#",
    source: "#",
    img: "takenotes.png",
  },
  {
    title: "Trackr",
    desc: "Track your tasks in a better way.",
    tech: ["Next.js", "Typescript", "TailwindCSS", "Next Auth", "Shadcn UI", "React Drag and Drop"],
    site: "#",
    source: "#",
    img: "trackr.png",
  },
  {
    title: "BugSight AI",
    desc: "AI-powered bug reproduction tracker for development teams.",
    tech: ["Next.js", "Node.js", "MongoDB", "Shadcn UI", "OpenAI", "Redux Toolkit"],
    site: "#",
    source: "#",
    img: "bugsight.png",
  },
  {
    title: "Portfolio",
    desc: "Minimal portfolio site with animations and responsive UI.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    site: "#",
    source: "#",
    img: "portfolio.png",
  },
  {
    title: "DevLink",
    desc: "Find and connect with fellow developers in your tech stack.",
    tech: ["Next.js", "Supabase", "TailwindCSS", "Typescript"],
    site: "#",
    source: "#",
    img: "devlink.png",
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section className="mt-4">
      <h2 className="text-white text-xl font-bold text-center mb-4">
        Check out my latest work
      </h2>
      <div className="text-center text-gray-300 mb-6 max-w-2xl mx-auto">
        I love to build things ranging from simple frontend apps to complex full-stack products.
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {visibleProjects.map((proj, i) => (
          <div
            key={i}
            className="bg-[#111] rounded-xl overflow-hidden shadow-lg border border-[#222]"
          >
            <div className="h-48 bg-black flex justify-center items-center text-white">
              <span className="text-xl font-bold">{proj.title}</span>
            </div>
            <div className="p-4">
              <p className="text-white font-bold">{proj.title}</p>
              <p className="text-sm text-gray-400 mt-1">{proj.desc}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {proj.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-white text-black text-xs px-2 py-1 rounded-md font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                <a
                  href={proj.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline text-sm hover:text-white transition"
                >
                  Website
                </a>
                <a
                  href={proj.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline text-sm hover:text-white transition"
                >
                  Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More / See Less Button */}
      {projects.length > 3 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-[#14fca9] font-semibold underline hover:text-white transition"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
