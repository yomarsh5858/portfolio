import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900">
      <div
        className={`max-w-6xl mx-auto px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-600 ${ibmPlexMono.className}`}
      >
        <span>© {new Date().getFullYear()} Aymen Kacem</span>
        <span>Built with Next.js &amp; Tailwind CSS</span>
      </div>
    </footer>
  );
}
