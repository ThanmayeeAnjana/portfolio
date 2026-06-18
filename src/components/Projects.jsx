import portfolioData from "../data/portfolioData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Projects() {
  const featuredProjects = portfolioData.projects.slice(0, 6);

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold text-pink-500 mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {featuredProjects.map((project, index) => (
          <motion.a
            key={index}
            href={project.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.05,
              y: -10,
            }}
            className="relative block"
          >
            {/* Permanent Pink Glow */}
            <div
              className="
              absolute
              -inset-4
              bg-pink-500/30
              blur-3xl
              rounded-3xl
            "
            />

            {/* Card */}
            <div
              className="
              relative
              bg-[#111111]
              border
              border-pink-500/40
              rounded-3xl
              overflow-hidden
              transition-all
              duration-500
              hover:border-pink-400
              hover:shadow-[0_0_40px_rgba(236,72,153,0.7)]
            "
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>

                <p className="text-zinc-400 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      border
                      border-pink-500/40
                      bg-pink-500/10
                      text-pink-300
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/projects"
          className="
          inline-block
          px-8
          py-4
          rounded-2xl
          border
          border-pink-500
          hover:bg-pink-500
          hover:scale-105
          hover:shadow-[0_0_40px_rgba(236,72,153,0.8)]
          transition-all
          duration-300
          "
        >
          View More Projects →
        </Link>
      </div>
    </section>
  );
}