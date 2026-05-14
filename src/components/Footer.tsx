export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-white/5 bg-[#0a0a10] py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <button onClick={scrollTop} className="text-2xl font-black">
              <span className="text-white">GERMAIN</span>
              <span className="text-[#c026d3]">.</span>
            </button>
            <p className="text-white/30 text-sm mt-1">Graphiste & Motion Designer</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
            {["home", "about", "experience", "skills", "education", "contact"].map((id) => (
              <button
                key={id}
                onClick={() => {
                  const el = document.getElementById(id);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-[#c026d3] capitalize transition-colors duration-200"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollTop}
            className="w-12 h-12 bg-gradient-to-br from-[#c026d3] to-[#7e22ce] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-200 shadow-lg shadow-purple-900/50"
            aria-label="Back to top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-white/20 text-xs">
            © {currentYear} Germain Dagnogo. Tous droits réservés. Yamoussoukro, Côte d'Ivoire 🇨🇮
          </p>
        </div>
      </div>
    </footer>
  );
}
