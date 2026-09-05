import { ibmPlexMono } from "../lib/fonts";
import ScrambleText from "./ScrambleText";

// Small reusable heading: a code-comment style tag followed by a large title.
// Kept in one place so every section stays visually consistent.
export default function SectionHeading({ tag, title, align = "left", scramble = false }) {
  return (
    <div className={`flex flex-col ${align === "left" ? "items-start" : "items-center text-center"} gap-2 mb-12`}>
      <span className={`text-[#62BA1B] text-sm ${ibmPlexMono.className}`}>
        // {tag}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-neutral-50">
        {scramble ? <ScrambleText text={title} /> : title}
      </h2>
    </div>
  );
}