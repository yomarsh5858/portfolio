"use client";

import { useState } from "react";
import { IBM_Plex_Mono } from "next/font/google";
import { Github, Linkedin, Copy, Check } from "lucide-react";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const EMAIL = "aymen.kacem@example.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can fail (older browsers, permissions); the email
      // is still visible on screen for the user to copy manually.
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 sm:px-10 py-24">
      <div className="rounded-md border border-neutral-800 bg-neutral-900/40 px-8 py-14 sm:px-16 flex flex-col items-center text-center">
        <span className={`text-[#62BA1B] text-sm mb-4 ${ibmPlexMono.className}`}>
          // contact
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-50 max-w-xl">
          Let&apos;s build something together
        </h2>
        <p className="text-neutral-400 text-base mt-4 max-w-md">
          I&apos;m currently looking for internship opportunities. Reach out
          if you&apos;d like to work together.
        </p>

        <button
          onClick={handleCopy}
          className={`mt-8 flex items-center gap-3 px-6 py-3 shadow-[0px_0px_20px_0px_#3F8E00] bg-[#3F8E00] font-bold border border-[#62BA1B] text-white rounded-sm hover:bg-[#4CA800] transition-colors ${ibmPlexMono.className}`}
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
          {copied ? "Copied!" : EMAIL}
        </button>

        <div className="flex items-center gap-6 mt-8">
          <a
            href="https://github.com/aymenkacem"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-neutral-500 hover:text-[#62BA1B] transition-colors"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/aymenkacem"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-neutral-500 hover:text-[#62BA1B] transition-colors"
          >
            <Linkedin size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
