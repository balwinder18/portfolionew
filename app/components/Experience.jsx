const experiences = [
  { role: "Software Engineer", company: "Referrush", date: "Jan 2025 - Present" },
  { role: "Frontend Engineer", company: "Keyshade", date: "Nov 2024 - Jan 2025" },
  { role: "SDE Intern", company: "ChaiFluence", date: "Jun 2024 - Jul 2024" },
  { role: "Technical Content Developer", company: "The IT Studio", date: "Jul 2023 - Nov 2023" },
];

const Experience = () => (
  <section id="work" className="flex flex-col gap-y-3 min-h-0 text-white">
  <div className="transform -translate-y-1.5 opacity-100 blur-0">
    <h2 className="text-xl font-bold">Work Experience</h2>
  </div>

  {/* Referrush */}
  <a
    href="https://www.referrush.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="block cursor-pointer"
  >
    <div className="flex bg-card text-card-foreground rounded-lg">
      <div className="flex-none m-auto p-2">
        <span className="relative flex overflow-hidden rounded-full border border-gray-300 dark:border-gray-600 bg-muted-background dark:bg-foreground w-12 h-12">
          <img
            src="/referrush.png"
            alt="Referrush Logo"
            className="object-contain w-full h-full"
            loading="lazy"
          />
        </span>
      </div>

      <div className="flex-grow ml-4 flex flex-col justify-center group">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="font-semibold leading-none text-xs sm:text-sm flex items-center gap-x-1">
            Referrush
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide-chevron-right size-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out translate-x-0 group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </h3>
          <time
            dateTime="2025-01"
            className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right"
          >
            Jan 2025 - Present
          </time>
        </div>

        <p className="font-sans text-xs mt-1">
          Software Engineer
        </p>

        <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-all duration-300 ease-in-out overflow-hidden">
          Currently working as a software engineer at Referrush building the
          product that includes their web application and Shopify apps and
          extensions that will help thousands of brands in increasing their
          sales through direct customer referrals.
        </p>
      </div>
    </div>
  </a>

  {/* Keyshade */}
  <a
    href="https://www.keyshade.xyz/"
    target="_blank"
    rel="noopener noreferrer"
    className="block cursor-pointer"
  >
    <div className="flex bg-card text-card-foreground rounded-lg">
      <div className="flex-none m-auto p-2">
        <span className="relative flex overflow-hidden rounded-full border border-gray-300 dark:border-gray-600 bg-muted-background dark:bg-foreground w-12 h-12">
          <img
            src="/keyshade.png"
            alt="Keyshade Logo"
            className="object-contain w-full h-full"
            loading="lazy"
          />
        </span>
      </div>

      <div className="flex-grow ml-4 flex flex-col justify-center group">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="font-semibold leading-none text-xs sm:text-sm flex items-center gap-x-1">
            Keyshade
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide-chevron-right size-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out translate-x-0 group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </h3>
          <time
            dateTime="2024-11"
            className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right"
          >
            Nov 2024 - Jan 2025
          </time>
        </div>

        <p className="font-sans text-xs mt-1">Frontend Engineer</p>

        <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-all duration-300 ease-in-out overflow-hidden">
          Currently working as a frontend engineer at Keyshade developing
          frontends for their Platform and Web application. Collaborating with
          the backend team to ship code with minimum production time errors and
          building with full efficiency. Being part of an open-source
          organization, also taking parts in PR reviews on Github.
        </p>
      </div>
    </div>
  </a>

  {/* ChaiFluence */}
  <a
    href="#"
    className="block cursor-pointer"
    aria-label="ChaiFluence Work Experience"
  >
    <div className="flex bg-card text-card-foreground rounded-lg">
      <div className="flex-none m-auto p-2">
        <span className="relative flex overflow-hidden rounded-full border border-gray-300 dark:border-gray-600 bg-muted-background dark:bg-foreground w-12 h-12">
          <img
            src="/chaifluence.png"
            alt="ChaiFluence Logo"
            className="object-contain w-full h-full"
            loading="lazy"
          />
        </span>
      </div>

      <div className="flex-grow ml-4 flex flex-col justify-center group">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="font-semibold leading-none text-xs sm:text-sm flex items-center gap-x-1">
            ChaiFluence
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide-chevron-right size-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out translate-x-0 group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </h3>
          <time
            dateTime="2024-06"
            className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right"
          >
            June 2024 - July 2024
          </time>
        </div>

        <p className="font-sans text-xs mt-1">SDE Intern</p>

        <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-all duration-300 ease-in-out overflow-hidden">
          Incorporated the first website for the organization. Boosted
          operations by 50% through efficient AI integration in day-to-day
          processes. Devised strategy to increase the social media presence by
          100%.
        </p>
      </div>
    </div>
  </a>

  {/* The IT Studio */}
  <a
    href="#"
    className="block cursor-pointer"
    aria-label="The IT Studio Work Experience"
  >
    <div className="flex bg-card text-card-foreground rounded-lg">
      <div className="flex-none m-auto p-2">
        <span className="relative flex overflow-hidden rounded-full border border-gray-300 dark:border-gray-600 bg-muted-background dark:bg-foreground w-12 h-12">
          <img
            src="/building.png"
            alt="The IT Studio Logo"
            className="object-contain w-full h-full"
            loading="lazy"
          />
        </span>
      </div>

      <div className="flex-grow ml-4 flex flex-col justify-center group">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="font-semibold leading-none text-xs sm:text-sm flex items-center gap-x-1">
            The IT Studio
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide-chevron-right size-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out translate-x-0 group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </h3>
          <time
            dateTime="2023-07"
            className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right"
          >
            July 2023 - November 2023
          </time>
        </div>

        <p className="font-sans text-xs mt-1">Technical Content Developer</p>

        <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-all duration-300 ease-in-out overflow-hidden">
          Delivered technical content related to technologies like TypeScript,
          Next.js, and React.js for the organization's web application and social
          media handles. Worked with 10+ clients in setting up their web
          application and providing content in the technical domain. Boosted the
          organization's social media presence by 80% in the span of 3 months.
        </p>
      </div>
    </div>
  </a>
</section>

);

export default Experience;
