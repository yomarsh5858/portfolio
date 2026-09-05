import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import PixelStars from "../components/BackgroundPixelStars";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-black bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAIElEQVR42mIUEhJiwAbevXuHVZyJgUQwqmEUDB0AEGAADd8DEPTX6ksAAAAASUVORK5CYII=')] bg-[size:10px]">
        <PixelStars />
      </div>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}