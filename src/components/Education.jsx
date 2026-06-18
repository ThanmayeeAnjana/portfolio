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
  <div className="relative border-l-4 border-pink-500 pl-10">
  <div className="mb-10">
    <div className="absolute -left-3 w-6 h-6 bg-pink-500 rounded-full" />

    <h3 className="text-xl font-bold">
      B.Tech
    </h3>

    <p className="text-pink-400">
      Vishnu Institute of Technology
    </p>

    <p className="text-zinc-400">
      2023 - 2027
    </p>
  </div>
</div>
    </div>
    </section>
  );
}