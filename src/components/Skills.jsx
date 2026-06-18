import portfolioData from "../data/portfolioData";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold text-pink-500 mb-12">
        Skills
      </h2>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {portfolioData.skills.map((skill) => (
          <motion.div
  key={skill}
  whileHover={{
    scale: 1.08,
    y: -10,
  }}
  className="relative"
>
  {/* Permanent Pink Glow */}
  <div
    className="
    absolute
    -inset-4
    bg-pink-500
    opacity-20
    blur-3xl
    rounded-3xl
  "
  />

  {/* Extra Neon Layer */}
  <div
    className="
    absolute
    inset-0
    bg-pink-500/10
    blur-xl
    rounded-3xl
  "
  />

  {/* Main Card */}
  <div
    className="
    relative
    bg-[#111111]
    border
    border-pink-500/50
    rounded-3xl
    p-8
    text-center
    font-semibold
    text-white
    backdrop-blur-sm
    transition-all
    duration-500
    hover:border-pink-400
    hover:shadow-[0_0_40px_rgba(236,72,153,0.8)]
  "
  >
    {skill}
  </div>
</motion.div>
        ))}
      </div>
    </section>
  );
}