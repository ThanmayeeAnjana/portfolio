export default function Achievements() {
  const achievements = [
    "Participated in WeForShe Hackathon",
    "Built MaidConnect Platform",
    "Solved 300+ Coding Problems",
    "Cisco Certified in Networking",
  ];

  return (
    <section id="achievements" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold text-pink-500 mb-12">
        Achievements
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