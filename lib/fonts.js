import { IBM_Plex_Mono } from "next/font/google";

// Call next/font exactly once and share it everywhere. Calling
// IBM_Plex_Mono() separately in each component can generate a different
// className hash between the server render and the client render, which
// shows up as a hydration mismatch warning.
export const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});