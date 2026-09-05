import SectionHeading from "./SectionHeading";
import { ibmPlexMono } from "../lib/fonts";

const facts = [
  { label: "based in", value: "Tunis, Tunisia" },
  { label: "studying", value: "Software Engineering" },
  { label: "focus", value: "Full-stack web development" },
  { label: "currently", value: "Open to internships" },
];

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 sm:px-10 py-24">
      <SectionHeading tag="about" title="A bit about me" scramble />

      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
        <div className="rounded-md border border-neutral-800 bg-neutral-900/50 overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-900">
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
            <span className={`ml-2 text-xs text-neutral-500 ${ibmPlexMono.className}`}>
              about.sh
            </span>
          </div>
          <div className={`p-6 text-sm leading-loose text-neutral-400 ${ibmPlexMono.className}`}>
            <p>
              <span className="text-[#62BA1B]">$</span> whoami
            </p>
            <p className="text-neutral-300 pl-4">
              A software engineering student who likes turning ideas into
              things people can actually click on. I spend most of my time
              building web apps, breaking them, then figuring out why.
            </p>
            <p className="mt-4">
              <span className="text-[#62BA1B]">$</span> cat interests.txt
            </p>
            <p className="text-neutral-300 pl-4">
              React, Next.js, backend architecture, and the occasional
              late-night refactor that probably could have waited until
              morning.
            </p>
            <p className="mt-4">
              <span className="text-[#62BA1B]">$</span> <span className="animate-pulse">_</span>
            </p>
          </div>
        </div>

        <ul className={`flex flex-col gap-4 text-sm ${ibmPlexMono.className}`}>
          {facts.map((fact) => (
            <li
              key={fact.label}
              className="flex justify-between gap-4 border-b border-neutral-900 pb-4"
            >
              <span className="text-neutral-500">{fact.label}</span>
              <span className="text-neutral-200 text-right">{fact.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}