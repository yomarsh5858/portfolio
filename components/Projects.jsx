import { IBM_Plex_Mono } from "next/font/google";
import { Github, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const projects = [
  {
    file: "task-flow.tsx",
    description:
      "A collaborative task manager with real-time boards, built to learn WebSockets and optimistic UI updates.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    github: "https://github.com/aymenkacem/task-flow",
    live: "https://task-flow.example.com",
  },
  {
    file: "recipe-finder.py",
    description:
      "A recipe search tool that matches meals to whatever's left in your fridge, using a public ingredients API.",
    stack: ["Python", "Flask", "React", "REST API"],
    github: "https://github.com/aymenkacem/recipe-finder",
    live: "https://recipe-finder.example.com",
  },
  {
    file: "expense-tracker.jsx",
    description:
      "A personal finance dashboard with category breakdowns and monthly trends, built to practice data visualization.",
    stack: ["React", "Chart.js", "Firebase"],
    github: "https://github.com/aymenkacem/expense-tracker",
    live: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 sm:px-10 py-24">
      <SectionHeading tag="projects" title="Things I've built" scramble />

      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <div
            key={project.file}
            className="group rounded-md border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 transition-colors px-6 py-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <h3 className={`text-neutral-50 text-lg font-semibold ${ibmPlexMono.className}`}>
                {project.file}
              </h3>
              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.file} on GitHub`}
                  className="text-neutral-500 hover:text-[#62BA1B] transition-colors"
                >
                  <Github size={18} />
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.file} live demo`}
                    className="text-neutral-500 hover:text-[#62BA1B] transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-neutral-400 text-sm mt-3 max-w-2xl leading-relaxed">
              {project.description}
            </p>

            <div className={`flex flex-wrap gap-2 mt-4 text-xs ${ibmPlexMono.className}`}>
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-sm border border-neutral-800 text-neutral-400"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#62BA1B]" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
