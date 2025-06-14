const projects = [
  {
    title: "Shortfolio",
    desc: "Build your portfolio in 2 minutes.",
    tech: ["Next.js", "Typescript", "Redux", "TailwindCSS", "Shadcn UI", "Appwrite", "React Hook Form"],
    site: "#",
    source: "#",
    img: "shortfolio.png",
  },
  {
    title: "Trackr",
    desc: "Track your tasks in a better way.",
    tech: ["Next.js", "Typescript", "TailwindCSS", "Next Auth", "Shadcn UI", "React Drag and Drop"],
    site: "#",
    source: "#",
    img: "trackr.png",
  },
];

const Projects = () => (
  <section className="mt-4">
    <h2 className="text-3xl text-white font-bold text-center mb-4">Check out my latest work</h2>
    {/* <div className="text-center text-gray-400 mb-6 max-w-2xl mx-auto">
      I love to build things ranging from simple frontend apps to complex full-stack products.
    </div> */}
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((proj, i) => (
        <div key={i} className="bg-gray-800 rounded-lg overflow-hidden shadow">
          <div className="h-48 bg-black flex justify-center items-center text-white">
            <span className="text-xl font-bold">{proj.title}</span>
          </div>
          <div className="p-4">
            <p className="text-white font-bold">{proj.title}</p>
            <p className="text-sm text-gray-400 mt-1">{proj.desc}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {proj.tech.map((t, idx) => (
                <span key={idx} className="bg-white text-black text-xs px-2 py-1 rounded-md">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-4">
              <a href={proj.site} className="text-blue-400 underline text-sm">Website</a>
              <a href={proj.source} className="text-blue-400 underline text-sm">Source</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
