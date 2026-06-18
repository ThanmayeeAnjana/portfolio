import portfolioData from "../data/portfolioData";
import { Link } from "react-router-dom";

export default function Hackathons() {
  const featuredHackathons =
    portfolioData.hackathons.slice(0, 2);

  return (
    <section
      id="hackathons"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold text-pink-500 mb-12">
        Hackathons
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {featuredHackathons.map((hackathon, index) => (
          <div
            key={index}
            className="
            bg-[#111111]
            p-8
            rounded-3xl
            border border-pink-500/30
            hover:border-pink-400
            hover:shadow-[0_0_35px_rgba(236,72,153,0.7)]
            transition-all
            duration-500
            "
          >
            <h3 className="text-2xl font-bold">
              {hackathon.name}
            </h3>

            <p className="text-pink-400 mt-2">
              Project: {hackathon.project}
            </p>

            <p className="text-zinc-400 mt-4">
              {hackathon.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/hackathons"
          className="
          inline-block
          px-8
          py-4
          rounded-2xl
          border
          border-pink-500
          hover:bg-pink-500
          hover:shadow-[0_0_40px_rgba(236,72,153,0.8)]
          transition-all
          duration-300
          "
        >
          View More Hackathons →
        </Link>
      </div>
    </section>
  );
}