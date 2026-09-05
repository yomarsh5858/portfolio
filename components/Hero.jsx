"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ibmPlexMono } from "../lib/fonts";

// Types the name out one character at a time, then leaves a blinking
// cursor behind so it still reads as "active" once typing finishes.
function TypedName({ text }) {
  const [displayText, setDisplayText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setDone(true);
      }
    }, 100); // typing speed in ms per character

    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <motion.h1
      className="text-5xl sm:text-6xl font-bold text-neutral-50 hover:text-white transition-colors cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayText}
      <span
        className={`inline-block w-[3px] h-10 sm:h-12 bg-[#62BA1B] ml-1 align-middle ${
          done ? "animate-pulse" : "opacity-0"
        }`}
      />
    </motion.h1>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="flex flex-col-reverse sm:flex-row items-center justify-center gap-16 lg:gap-32 px-6 pt-40 lg:pt-53 sm:px-10   pb-20 max-w-6xl mx-auto"
    >
      <div className="relative flex flex-col items-start justify-center max-w-2xl">
        <span className={`text-[#62BA1B] text-sm mb-4 ${ibmPlexMono.className}`}>
          // software engineering student
        </span>
        <TypedName text="Aymen Kacem" />
        <p className={`text-neutral-400 text-base pt-8 max-w-md leading-relaxed ${ibmPlexMono.className}`}>
          Hi, I&apos;m Aymen, a 22-year-old software engineering student.
          I&apos;m passionate about web development and always eager to learn new technologies.
          I&apos;m a team player, motivated, and open to growth opportunities.
        </p>
        <a
          href="#projects"
          className={`mt-8 px-6 py-3 shadow-[0px_0px_20px_0px_#3F8E00] bg-[#3F8E00] font-bold border border-[#62BA1B] text-center w-full sm:w-70 text-white rounded-sm hover:bg-[#4CA800] transition-colors ${ibmPlexMono.className}`}
        >
          Let&apos;s get started &gt;
        </a>
      </div>

      <div className="shrink-0 relative rounded-full p-[3px] overflow-hidden shadow-lg">
        <div
          className="absolute inset-[-60%] animate-[spin_5s_linear_infinite]"
          style={{
            background:
              "conic-gradient(from 0deg, #3F8E00, #62BA1B, #f5f5f5, #737373, #3F8E00)",
          }}
        />
        <div className="relative rounded-full overflow-hidden bg-neutral-950 p-1">
          <Image
            src="/me1.JPG"
            alt="Portrait of Aymen Kacem"
            width={300}
            height={300}
            priority
            className="object-cover object-[center_40%] rounded-full w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] transition-colors duration-300 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
}