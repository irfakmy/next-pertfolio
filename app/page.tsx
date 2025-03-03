"use client";
import Link from "next/link";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import BlurText from "./components/BlurText/BlurText";
import Particles from "./components/Particles/Particles";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <div className="min-h-screen overflow-x-hidden bg-[#100948] flex items-center justify-center px-4 relative">
        <div className="absolute inset-0 w-full h-full z-0">
          <Particles
            particleColors={["#8F86D9", "#ffffff"]}
            particleCount={2000}
            particleSpread={8}
            speed={0.1}
            particleBaseSize={50}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 h-screen items-center">
            {/* Bagian Kiri - Teks */}
            <div className="md:col-span-6 flex flex-col justify-center items-center md:items-start h-full p-4 md:pl-8">
              <div className="flex flex-col gap-1 text-center md:text-left">
                {/* Nama */}
                <BlurText
                  text="I'm Muhammad Irfa' Maulana"
                  delay={400}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-3xl md:text-4xl font-bold mb-4 md:mb-8 text-white truncate max-w-full whitespace-nowrap overflow-hidden"
                />
                {/* Profesi */}
                <BlurText
                  text="Backend Development"
                  delay={200}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-3xl md:text-4xl font-bold mb-4 md:mb-8 text-[#8F86D9]"
                />
              </div>

              {/* Rotating Text */}
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
                <h1 className="text-lg md:text-xl text-white font-bold text-center md:text-left">
                  I'm Ready For Job
                </h1>
                <RotatingText
                  texts={[
                    "Web Programming",
                    "Web Development",
                    "Junior Next.js",
                    "Laravel Fullstack",
                  ]}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-[#8F86D9] text-white overflow-hidden py-1 sm:py-1 md:py-2 justify-center rounded-lg text-xl md:text-2xl font-bold inline-flex transition-all"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-1 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>

              {/* Tombol Contact Me */}
              <div className="mt-6">
                <a
                  href="mailto:irfakmaulana05@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact Me"
                >
                  <button className="px-6 py-3 bg-[#8F86D9] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#7a72c0] transition-all duration-300">
                    Contact Me
                  </button>
                </a>
              </div>
            </div>

            {/* Bagian Kanan - Lanyard */}
            <div className="md:col-span-6 flex justify-center items-center">
              <Lanyard position={[0, 0, 17]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
