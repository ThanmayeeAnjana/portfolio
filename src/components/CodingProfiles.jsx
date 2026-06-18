export default function CodingProfiles() {
  const profiles = [
    {
      name: "LeetCode",
      link: "https://leetcode.com/u/49P7OX3Y9t/",
    },
    {
      name: "Codeforces",
      link: "https://codeforces.com/profile/Thanmayee_Anjana",
    },
    {
      name: "CodeChef",
      link: "https://www.codechef.com/users/anju_223102",
    },
    {
      name: "GitHub",
      link: "https://github.com/ThanmayeeAnjana",
    },
  ];

  return (
    <section
      id="profiles"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold text-pink-500 mb-12">
        Coding Profiles
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {profiles.map((profile) => (
          <a
            key={profile.name}
            href={profile.link}
            target="_blank"
            rel="noreferrer"
            className="relative group"
          >
            {/* Permanent Glow */}
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
              text-center
              text-lg
              font-semibold
              transition-all
              duration-500
              hover:border-pink-400
              hover:-translate-y-2
              hover:shadow-[0_0_50px_rgba(236,72,153,0.8)]
              "
            >
              {profile.name}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}