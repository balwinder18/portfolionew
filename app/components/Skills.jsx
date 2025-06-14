"use client";
export const techStack = [
  { label: "React.js", icon: "/icons/react.png" },
  { label: "Next.js", icon: "/icons/nextjs.png" },
  { label: "JavaScript", icon: "/icons/javascript.png" },
  { label: "TypeScript", icon: "/icons/typescript.png" },
  { label: "Node.js", icon: "/icons/nodejs.png" },
  { label: "Express.js", icon: "/icons/express.png" },
  { label: "Appwrite", icon: "/icons/appwrite.png" },
  { label: "Socket.io", icon: "/icons/socketio.png" },
  { label: "Redux", icon: "/icons/redux.png" },
  { label: "Tailwind", icon: "/icons/tailwind.png" },
  { label: "ShadCN", icon: "/icons/shadcn.png" },
  { label: "NPM", icon: "/icons/npm.png" },
  { label: "Python", icon: "/icons/python.png" },
  { label: "Go", icon: "/icons/go.png" },
  { label: "Postgres", icon: "/icons/postgres.png" },
  { label: "MongoDB", icon: "/icons/mongodb.png" },
  { label: "Docker", icon: "/icons/docker.png" },
  { label: "GitHub", icon: "/icons/github.png" },
  { label: "C++", icon: "/icons/cpp.png" },
  { label: "C#", icon: "/icons/csharp.png" },
  { label: "Unity", icon: "/icons/unity.png" },
  { label: "Postman", icon: "/icons/postman.png" },
  { label: "Vercel", icon: "/icons/vercel.png" },
  { label: "Data Structures", icon: "/icons/dsa.png" },
  { label: "Algorithms", icon: "/icons/algorithm.png" },
];

export const techStack2 = [
  { label: "React.js", icon: "/icons/react.png" },
  { label: "Next.js", icon: "/icons/nextjs.png" },
  { label: "JavaScript", icon: "/icons/javascript.png" },
  { label: "TypeScript", icon: "/icons/typescript.png" },
  { label: "Node.js", icon: "/icons/nodejs.png" },
  { label: "Express.js", icon: "/icons/express.png" },
  { label: "Socket.io", icon: "/icons/socketio.png" },
  { label: "Redux", icon: "/icons/redux.png" },
  { label: "Tailwind", icon: "/icons/tailwind.png" },
  { label: "ShadCN", icon: "/icons/shadcn.png" },
  { label: "NPM", icon: "/icons/npm.png" },
  { label: "Python", icon: "/icons/python.png" },
  { label: "MongoDB", icon: "/icons/mongodb.png" },
 
  { label: "GitHub", icon: "/icons/github.png" },
 
  { label: "Postman", icon: "/icons/postman.png" },
  { label: "Vercel", icon: "/icons/vercel.png" },
  { label: "Data Structures", icon: "/icons/dsa.png" },
  { label: "Algorithms", icon: "/icons/algorithm.png" },
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
              className="flex items-center gap-2 text-sm sm:text-base text-gray-300 hover:text-white transition"
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
              className="flex items-center gap-2 text-sm sm:text-base text-gray-300 hover:text-white transition"
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


