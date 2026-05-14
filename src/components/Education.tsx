const educations = [
  {
    degree: "LICENCE 2 EN SCIENCES INFORMATIQUES",
    school: "Université FHB Cocody",
    location: "Côte d'Ivoire",
    year: "2019",
    icon: "🎓",
    highlight: true,
  },
  {
    degree: "BTS EN INFORMATIQUE DEV APP",
    school: "ETEP Plateau",
    location: "Côte d'Ivoire",
    year: "2011 – 2012",
    icon: "💻",
    highlight: false,
  },
  {
    degree: "BAC SÉRIE C",
    school: "Lycée Moderne Toumodi",
    location: "Côte d'Ivoire",
    year: "2009 – 2010",
    icon: "📚",
    highlight: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#c026d3]/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c026d3] text-sm font-semibold tracking-widest uppercase mb-3">
            Formation
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Éducation
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-[#c026d3] to-[#7e22ce] rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educations.map((edu, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                edu.highlight
                  ? "bg-gradient-to-br from-[#c026d3]/20 to-[#7e22ce]/10 border-[#c026d3]/50 shadow-2xl shadow-purple-900/30"
                  : "bg-white/5 border-white/10 hover:border-[#c026d3]/30"
              }`}
            >
              {edu.highlight && (
                <div className="absolute -top-3 left-6">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-[#c026d3] to-[#7e22ce] text-white text-xs font-bold rounded-full shadow-lg">
                    Diplôme Principal
                  </span>
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 ${
                  edu.highlight
                    ? "bg-gradient-to-br from-[#c026d3] to-[#7e22ce] shadow-lg shadow-purple-900/40"
                    : "bg-white/10"
                }`}
              >
                {edu.icon}
              </div>

              {/* Year badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full mb-4">
                <svg className="w-3 h-3 text-[#c026d3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-[#c026d3] text-xs font-bold">{edu.year}</span>
              </div>

              <h3
                className={`text-base sm:text-lg font-black mb-2 ${
                  edu.highlight ? "text-white" : "text-white/90"
                }`}
              >
                {edu.degree}
              </h3>

              <p className={`text-sm font-semibold mb-1 ${edu.highlight ? "text-[#e879f9]" : "text-[#c026d3]"}`}>
                {edu.school}
              </p>

              <div className="flex items-center gap-1.5 mt-2">
                <svg className="w-3.5 h-3.5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <p className="text-white/40 text-xs">{edu.location}</p>
              </div>

              {/* Decorative bottom line */}
              <div
                className={`absolute bottom-0 left-8 right-8 h-0.5 rounded-full ${
                  edu.highlight ? "bg-gradient-to-r from-[#c026d3] to-[#7e22ce]" : "bg-white/5"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Autodidacte Banner */}
        <div className="mt-12 p-8 bg-gradient-to-r from-[#c026d3]/10 to-[#7e22ce]/10 border border-[#c026d3]/20 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="p-4 bg-[#c026d3]/20 rounded-xl flex-shrink-0">
            <span className="text-3xl">🧠</span>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-2">Formation Autodidacte</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              En complément de mes formations académiques, je me suis formé en autodidacte au{" "}
              <span className="text-[#c026d3] font-semibold">graphisme</span> et au{" "}
              <span className="text-[#c026d3] font-semibold">motion design</span>, développant
              des compétences avancées en Adobe Photoshop, Illustrator, After Effects et Premiere Pro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
