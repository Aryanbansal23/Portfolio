import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const navItems = [
  { title: "Home", link: "#home" },
  { title: "About", link: "#about" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
  { title: "Education", link: "#education" },
  { title: "Contact", link: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="#home" className="text-3xl font-extrabold">
          <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Aryan
          </span>
          <span className="text-white">.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.title}>
              <a
                href={item.link}
                className="text-slate-300 hover:text-cyan-300 hover:-translate-y-1 transition-all duration-300"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full
          bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-400
          hover:scale-105 transition-all duration-300 shadow-lg
          hover:shadow-violet-500/40 font-semibold"
        >
          <Download size={18} />
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">
          <ul className="flex flex-col items-center gap-6 py-6">

            {navItems.map((item) => (
              <li key={item.title}>
                <a
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="text-lg text-white hover:text-cyan-400 transition"
                >
                  {item.title}
                </a>
              </li>
            ))}

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-full
              bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-400"
            >
              <Download size={18} />
              Resume
            </a>

          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;