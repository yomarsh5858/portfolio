"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*";

// Scrambles random characters, then progressively locks each position into
// the real text (left to right), settling once it scrolls into view.
export default function ScrambleText({ text, className = "" }) {
  const [displayText, setDisplayText] = useState(text);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  useEffect(() => {
    if (!isInView) return;

    let iteration = 0;
    const stepsPerChar = 3; // higher = slower reveal per character
    const totalSteps = text.length * stepsPerChar;

    const intervalId = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration / stepsPerChar) return text[index];
            return SCRAMBLE_CHARS[
              Math.floor(Math.random() * SCRAMBLE_CHARS.length)
            ];
          })
          .join("")
      );

      iteration++;
      if (iteration > totalSteps) {
        clearInterval(intervalId);
        setDisplayText(text);
      }
    }, 30); // scramble tick speed in ms

    return () => clearInterval(intervalId);
  }, [isInView, text]);

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
}
