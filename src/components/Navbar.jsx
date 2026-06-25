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
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="#home" className="text-3xl font-bold">
          <span className="text-cyan-400">Aryan</span>
          <span className="text-white">.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.title}>
              <a
                href={item.link}
                className="text-slate-300 hover:text-cyan-400 transition duration-300"
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
          className="hidden md:flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-full transition"
        >
          <Download size={18} />
          Resume
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700">
          <ul className="flex flex-col items-center gap-6 py-6">
            {navItems.map((item) => (
              <li key={item.title}>
                <a
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="text-lg hover:text-cyan-400"
                >
                  {item.title}
                </a>
              </li>
            ))}

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 bg-cyan-500 px-6 py-2 rounded-full"
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