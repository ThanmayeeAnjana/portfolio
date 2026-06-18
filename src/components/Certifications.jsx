export default function Certifications() {
  const certifications = [
    {
      title: "Cisco Networking Basics",
      issuer: "Cisco",
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
    },
  ];

  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold text-pink-500 mb-12">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="
            bg-[#111111]
            p-8
            rounded-3xl
            border border-pink-500/30
            hover:shadow-[0_0_35px_rgba(236,72,153,0.7)]
            "
          >
            <h3 className="text-xl font-bold text-white">
              {cert.title}
            </h3>

            <p className="text-pink-400 mt-2">
              {cert.issuer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}