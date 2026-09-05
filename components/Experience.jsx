import { IBM_Plex_Mono } from "next/font/google";
import SectionHeading from "./SectionHeading";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const timeline = [
  {
    date: "2024 — Present",
    title: "Software Engineering Student",
    place: "University Institute, Tunis",
    description:
      "Coursework in algorithms, databases, and software architecture, alongside personal projects in web development.",
  },
  {
    date: "Summer 2024",
    title: "Frontend Development Intern",
    place: "Local startup",
    description:
      "Built and shipped UI components for an internal dashboard, and helped migrate a legacy app to React.",
  },
  {
    date: "2022 — 2024",
    title: "Preparatory Studies",
    place: "Institut Préparatoire, Tunis",
    description:
      "Focused on mathematics and computer science fundamentals ahead of engineering school.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 sm:px-10 py-24">
      <SectionHeading tag="experience" title="Where I've been" />

      <div className="flex flex-col">
        {timeline.map((item, index) => (
          <div key={item.title} className="flex gap-6 sm:gap-10">
            <div className="flex flex-col items-center">
              <span className="w-2.5 h-2.5 rounded-full bg-[#62BA1B] shrink-0 mt-1.5" />
              {index !== timeline.length - 1 && (
                <span className="w-px flex-1 bg-neutral-800 my-1" />
              )}
            </div>

            <div className={`pb-10 ${index === timeline.length - 1 ? "pb-0" : ""}`}>
              <span className={`text-xs text-[#62BA1B] ${ibmPlexMono.className}`}>
                {item.date}
              </span>
              <h3 className="text-neutral-50 text-lg font-semibold mt-1">
                {item.title}
              </h3>
              <p className="text-neutral-500 text-sm mt-0.5">{item.place}</p>
              <p className="text-neutral-400 text-sm mt-2 max-w-xl leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
