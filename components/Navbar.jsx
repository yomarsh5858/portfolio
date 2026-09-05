"use client";

import { useState } from "react";
import { IBM_Plex_Mono } from "next/font/google";
import { Menu, X } from "lucide-react";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const links = [
  { href: "#about", label: "about" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 sm:px-10 h-16">
        <a
          href="#top"
          className={`text-neutral-50 text-lg hover:text-[#62BA1B] transition-colors ${ibmPlexMono.className}`}
        >
          &lt;Aymen /&gt;
        </a>

        <ul className={`hidden sm:flex items-center gap-8 text-sm text-neutral-400 ${ibmPlexMono.className}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-[#62BA1B] transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          className={`hidden sm:inline-block text-sm px-4 py-2 rounded-sm border border-[#62BA1B] text-[#62BA1B] hover:bg-[#3F8E00] hover:text-white transition-colors ${ibmPlexMono.className}`}
        >
          resume.pdf
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden text-neutral-50"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <ul
          className={`sm:hidden flex flex-col gap-1 px-6 pb-6 text-neutral-400 text-sm ${ibmPlexMono.className}`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 border-b border-neutral-900 hover:text-[#62BA1B] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              className="block py-3 text-[#62BA1B]"
            >
              resume.pdf
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
