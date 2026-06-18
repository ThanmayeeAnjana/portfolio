export default function Hackathons() {
  return (
    <section
      id="hackathons"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold text-pink-500 mb-12">
        Hackathons
      </h2>

      <div
        className="
        bg-[#111111]
        p-8
        rounded-3xl
        border border-pink-500/30
        hover:shadow-[0_0_35px_rgba(236,72,153,0.7)]
        "
      >
        <h3 className="text-2xl font-bold">
          WeForShe Hackathon
        </h3>

        <p className="text-zinc-400 mt-3">
          Built MaidConnect, a platform connecting
          domestic workers with households.
        </p>
      </div>
    </section>
  );
}