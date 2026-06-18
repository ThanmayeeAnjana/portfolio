import portfolioData from "../data/portfolioData";

export default function Education() {
  return (
    <section
      id="education"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold text-pink-500 mb-12">
        Education
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
        <h3 className="text-2xl font-semibold">
          {portfolioData.degree || "B.Tech"}
        </h3>

        <p className="text-pink-400 mt-2">
          {portfolioData.college}
        </p>

        <p className="text-zinc-400 mt-2">
          Graduation Year: {portfolioData.graduationYear}
        </p>
      </div>
    </div>
    </section>
  );
}