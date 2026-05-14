export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#c026d3]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#7e22ce]/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c026d3]/5 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(192,38,211,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(192,38,211,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-[#c026d3]/30 rounded-full text-sm text-[#c026d3] font-medium mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 bg-[#c026d3] rounded-full animate-pulse" />
            Disponible pour de nouveaux projets
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-4">
            <span className="text-white">GERMAIN</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c026d3] to-[#7e22ce]">
              DAGNOGO
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/50 font-light tracking-[0.3em] uppercase mb-6">
            Graphiste & Motion Designer
          </p>

          <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10">
            Technicien en informatique & développeur d'applications, passionné par l'art visuel.
            Je pense en technicien, je crée en designer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-4 bg-gradient-to-r from-[#c026d3] to-[#7e22ce] hover:from-[#a21caf] hover:to-[#6b21a8] text-white font-bold rounded-full transition-all duration-300 shadow-2xl shadow-purple-900/50 hover:scale-105"
            >
              Contactez Moi
            </button>
            <button
              onClick={() => scrollTo("experience")}
              className="px-8 py-4 border border-white/20 hover:border-[#c026d3]/60 text-white/80 hover:text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/5 hover:scale-105"
            >
              Voir mes projets
            </button>
          </div>

          {/* Stats row */}
          <div className="mt-14 flex gap-10 justify-center lg:justify-start">
            {[
              { value: "3+", label: "Années d'expérience" },
              { value: "2D/3D", label: "Design créatif" },
              { value: "5+", label: "Outils maîtrisés" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-2xl font-black text-[#c026d3]">{stat.value}</p>
                <p className="text-white/40 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative flex-shrink-0">
          {/* Outer spinning ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#c026d3]/30 animate-spin" style={{ animationDuration: "20s" }} />
          {/* Inner glow ring */}
          <div className="absolute inset-4 rounded-full border border-[#c026d3]/50 shadow-2xl shadow-[#c026d3]/30" />

          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-[#c026d3]/40 shadow-2xl shadow-[#c026d3]/20">
            <img
              src="/images/profile.jpg"
              alt="Germain Dagnogo"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Purple overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#c026d3]/20 to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-4 -right-4 bg-[#c026d3] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg shadow-purple-900/50">
            Côte d'Ivoire 🇨🇮
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs">
        <span>Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
