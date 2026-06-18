import portfolioData from "../data/portfolioData";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-pink-500 mb-8">
          About Me
        </h2>

        <div className="relative">

  {/* Permanent Pink Glow */}
  <div
    className="
    absolute
    -inset-4
    bg-pink-500/30
    blur-[80px]
    rounded-3xl
    "
  />

  {/* Card */}
  <div
    className="
    relative
    bg-[#111111]
    border
    border-pink-500/30
    rounded-3xl
    p-8
    hover:border-pink-400
    hover:shadow-[0_0_50px_rgba(236,72,153,0.8)]
    hover:-translate-y-2
    transition-all
    duration-500
    "
  >
    <p className="text-zinc-300 leading-8">
      {portfolioData.about}
    </p>
  </div>

</div>
      </motion.div>
    </section>
  );
}