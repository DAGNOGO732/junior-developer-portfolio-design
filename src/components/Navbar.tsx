import { useState } from "react";

const navLinks = [
  { id: "home", label: "Accueil" },
  { id: "about", label: "À Propos" },
  { id: "experience", label: "Expériences" },
  { id: "skills", label: "Compétences" },
  { id: "education", label: "Formation" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ activeSection }: { activeSection: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d14]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="text-xl font-black tracking-tight"
        >
          <span className="text-white">GERMAIN</span>
          <span className="text-[#c026d3]">.</span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  activeSection === link.id
                    ? "text-[#c026d3]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#c026d3] transition-all duration-300 ${
                    activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => scrollTo("contact")}
          className="hidden md:block px-5 py-2 bg-[#c026d3] hover:bg-[#a21caf] text-white text-sm font-semibold rounded-full transition-all duration-200 shadow-lg shadow-purple-900/40"
        >
          Contactez Moi
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d0d14] border-t border-white/5 px-6 pb-6 pt-4">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className={`text-base font-medium transition-colors ${
                    activeSection === link.id ? "text-[#c026d3]" : "text-white/70"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => scrollTo("contact")}
            className="mt-6 w-full py-3 bg-[#c026d3] text-white font-semibold rounded-full text-sm"
          >
            Contactez Moi
          </button>
        </div>
      )}
    </nav>
  );
}
