import portfolioData from "../data/portfolioData";
import { Link } from "react-router-dom";

export default function AllProjects() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-7xl mx-auto">

        <Link
          to="/"
          className="
          inline-block
          mb-10
          px-6
          py-3
          rounded-xl
          border
          border-pink-500
          hover:bg-pink-500
          transition-all
          duration-300
          "
        >
          ← Back to Home
        </Link>

        <h1 className="text-5xl font-bold text-pink-500 mb-12">
          All Projects
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <a
              key={index}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="relative block"
            >
              <div
                className="
                absolute
                -inset-4
                bg-pink-500/30
                blur-3xl
                rounded-3xl
                "
              />

              <div
                className="
                relative
                bg-[#111111]
                border
                border-pink-500/40
                rounded-3xl
                p-6
                hover:border-pink-400
                hover:shadow-[0_0_40px_rgba(236,72,153,0.7)]
                hover:-translate-y-2
                transition-all
                duration-500
                "
              >
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-zinc-400 mb-4">
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
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}