import { Link } from "react-router-dom";
import portfolioData from "../data/portfolioData";

export default function AllCertifications() {

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
          All Certifications
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.file}
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
                p-8
                hover:border-pink-400
                hover:shadow-[0_0_40px_rgba(236,72,153,0.7)]
                hover:-translate-y-2
                transition-all
                duration-500
                "
              >
                <h3 className="text-xl font-bold text-white">
                  {cert.title}
                </h3>

                <p className="text-pink-400 mt-3">
                  {cert.issuer}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}