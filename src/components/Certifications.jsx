import { Link } from "react-router-dom";
import portfolioData from "../data/portfolioData";

export default function Certifications() {
  const featuredCertifications =
    portfolioData.certifications.slice(0, 4);

  return (
    <section
      id="certifications"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold text-pink-500 mb-12">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {featuredCertifications.map((cert, index) => (
          <a
            key={index}
            href={cert.file}
            target="_blank"
            rel="noreferrer"
            className="
            bg-[#111111]
            p-8
            rounded-3xl
            border border-pink-500/30
            hover:border-pink-400
            hover:shadow-[0_0_35px_rgba(236,72,153,0.7)]
            transition-all
            duration-500
            block
            "
          >
            <h3 className="text-xl font-bold text-white">
              {cert.title}
            </h3>

            <p className="text-pink-400 mt-2">
              {cert.issuer}
            </p>
          </a>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/certifications"
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
          View More Certifications →
        </Link>
      </div>
    </section>
  );
}