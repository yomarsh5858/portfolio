import Image from "next/image";
import { IBM_Plex_Mono } from 'next/font/google';

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})
export default function Hero() {
  return (
    
    <section className="flex  items-center justify-center  gap-48 ">
    
        <div className="relative flex flex-col pb-10 items-start justify-center max-w-2xl pt-12">
            <h1 className="text-6xl font-bold text-neutral-50 hover:text-white transition-colors cursor-pointer  ">
                Aymen Kacem
            </h1>
            <p className={`text-neutral-400 text-base pt-12 max-w-md ${ibmPlexMono.className}`}>
                Hi, I’m Aymen, a 22-years-old software engineering student.
                I’m passionate about web development and always eager to learn new technologies.
                I’m a team player, motivated, and open to growth opportunities.
            </p>
            <button className={`mt-8 px-6 py-3 shadow-[0px_0px_20px_0px_#3F8E00] bg-[#3F8E00] font-bold border-1 border-[#62BA1B] w-70 h-16 text-white rounded-sm transition-colors ${ibmPlexMono.className}`}>
              Let's get started &gt;
            </button>
        </div>
        <div className="  rounded-full overflow-hidden shadow-lg mt-6 items-center  " >
            <Image
                src="/me1.JPG"
                alt="Hero Image"
                width={300}
                height={300}
                className="flex rounded-full shadow-lg mt-8 object-cover object-[center_40%] w-[400px] h-[400px] border-2 border-neutral-800 hover:border-white transition-colors duration-300 ease-in-out  "
            />
        </div>
      
    </section>
  );
}