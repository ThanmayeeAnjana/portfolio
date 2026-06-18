import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="min-h-screen pt-24 flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">
        

        {/* Left Side - Photo */}
        <motion.div
  animate={{
    y: [0, -12, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Pink Glow */}
            <div
              className="
              absolute
              -inset-10
              bg-pink-500/40
              blur-[120px]
              rounded-full
            "
            />

            {/* Outer Neon Border */}
            <div
              className="
              relative
              p-1
              rounded-3xl
              bg-gradient-to-r
              from-pink-500
              via-fuchsia-500
              to-pink-500
            "
            >
              <img
                src="/profile.jpeg"
                alt="Profile"
                className="
                w-[400px]
                h-[500px]
                object-cover
                rounded-3xl
                bg-zinc-900
              "
              />
            </div>
          </div>
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-pink-500 text-lg mb-3">
            Hello, I'm
          </p>

          <h1 className="
text-7xl
font-bold
bg-gradient-to-r
from-pink-400
via-pink-500
to-fuchsia-400
bg-clip-text
text-transparent
">
  Kasi Thanmayee Anjana
</h1>

          <h2 className="text-3xl text-zinc-300 mb-6">
            <TypeAnimation
  sequence={[
    "Aspiring Software Developer",
    2000,
    "Problem Solver",
    2000,
    "B.Tech Student",
    2000,
    "Java Developer",
    2000,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
  className="text-pink-400"
/>
          </h2>

          <p className="text-zinc-400 text-lg leading-8 mb-10">
            Passionate about software development,
            problem solving, and creating impactful
            digital experiences.
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="#projects"
              className="
              px-8 py-4
              rounded-2xl
              bg-pink-500
              font-medium
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_0_40px_rgba(236,72,153,0.7)]
            "
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="
              px-8 py-4
              rounded-2xl
              border
              border-pink-500
              transition-all
              duration-300
              hover:bg-pink-500
              hover:scale-105
              hover:shadow-[0_0_40px_rgba(236,72,153,0.7)]
            "
            >
              Contact Me
            </a>
            <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
  px-8
  py-4
  rounded-2xl
  border
  border-pink-500
  text-white
  transition-all
  duration-300
  hover:bg-pink-500
  hover:scale-105
  hover:shadow-[0_0_40px_rgba(236,72,153,0.8)]
  "
>
  Resume
</a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}