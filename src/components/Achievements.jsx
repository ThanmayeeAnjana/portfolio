export default function Achievements() {
  const achievements = [
    "Solved 300+ Coding Problems",
    "Reached the finals, shortlist, or top ranks in a hackathon.",
    "Earned selection to compete at the district level in basketball.",
    "Built projects focused on solving real-world problems.",
  ];

  return (
    <section id="achievements" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold text-pink-500 mb-12">
        Highlights
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="
            bg-[#111111]
            border border-pink-500/30
            rounded-2xl
            p-6
            hover:shadow-[0_0_35px_rgba(236,72,153,0.7)]
            transition-all
            "
          >
            🏆 {item}
          </div>
        ))}
      </div>
    </section>
  );
}