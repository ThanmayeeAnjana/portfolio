import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "About",
    "Skills",
    "Projects",
    "Education",
    "Profiles",
    "Contact",
  ];

  return (
    <nav
  className="
  fixed
  top-0
  left-0
  w-full
  z-50

  bg-black/70
  backdrop-blur-xl

  border-b
  border-pink-500/20

  shadow-[0_0_35px_rgba(236,72,153,0.25)]
"
>
  <div
  className="
  absolute
  inset-0
  bg-pink-500/10
  blur-3xl
  pointer-events-none
  "
/>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1
  className="
  text-pink-500
  font-bold
  text-3xl
  drop-shadow-[0_0_20px_rgba(236,72,153,1)]
  "
>
  Thanmayee Anjana
</h1>

        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
  href={`#${link.toLowerCase()}`}
  className="
  relative
  text-white
  transition-all
  duration-300
  hover:text-pink-400
  hover:drop-shadow-[0_0_15px_rgba(236,72,153,1)]
  after:absolute
  after:left-0
  after:-bottom-1
  after:h-[2px]
  after:w-0
  after:bg-pink-500
  after:transition-all
  after:duration-300
  hover:after:w-full
  "
>
  {link}
</a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block px-6 py-4 border-b border-zinc-800"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}