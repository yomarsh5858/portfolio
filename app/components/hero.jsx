
export default function Hero() {
  return (
    
    <div className="flex flex-col items-center justify-center h-screen  ">
        {/* Social Icons - Left Side */}
        <div className="flex items-center gap-[40px] pt-10">
            <h1 className="text-4xl font-bold text-neutral-400 hover:text-white transition-colors cursor-pointer">
                Welcome to My Portfolio
            </h1>
            <p className="text-neutral-400 text-base">
                Explore my work and get to know me better.
            </p>
        </div>
    </div>
  );
}