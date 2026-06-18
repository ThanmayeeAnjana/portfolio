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

    {/* Intermediate */}
  <div className="relative">
    <div className="absolute -left-[53px] w-6 h-6 bg-pink-500 rounded-full shadow-[0_0_20px_rgba(236,72,153,1)]" />

    <h3 className="text-xl font-bold">
      Intermediate (MPC)
    </h3>

    <p className="text-pink-400">
      Sasi Junior College
    </p>

    <p className="text-zinc-400">
      2022 - 2024
    </p>
  </div>
  {/* B.Tech */}
  <div className="relative mb-12">
    <div className="absolute -left-[53px] w-6 h-6 bg-pink-500 rounded-full shadow-[0_0_20px_rgba(236,72,153,1)]" />

    <h3 className="text-xl font-bold">
      B.Tech - Computer Science
    </h3>

    <p className="text-pink-400">
      Shri Vishnu Engineering College for Women
    </p>

    <p className="text-zinc-400">
      2024 - 2028
    </p>
  </div>

</div>
    </div>
    </section>
  );
}