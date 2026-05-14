const experiences = [
  {
    title: "INFOGRAPHE CHEZ GAVCI",
    company: "Green Agro Valley",
    location: "Côte d'Ivoire",
    period: "Depuis Juin 2024",
    current: true,
    description:
      "Conception et production de contenus graphiques pour des projets agricoles, avec respect des délais et des contraintes.",
    tags: ["Graphisme", "Communication", "Design"],
    icon: "🎨",
  },
  {
    title: "GRAPHISTE 2D 3D",
    company: "Graphic Color",
    location: "Côte d'Ivoire",
    period: "2023 – 2024",
    current: false,
    description:
      "Conception de visuels 2D et 3D créatifs et réalistes, adaptés aux besoins de communication et de valorisation de projets.",
    tags: ["2D Design", "3D Design", "Visuels"],
    icon: "🖌️",
  },
  {
    title: "FREELANCE MONTEUR VIDÉO",
    company: "Freelance",
    location: "Côte d'Ivoire",
    period: "2020 – 2023",
    current: false,
    description:
      "Réception et organisation des rushes, montage et rythme des séquences sur la musique, étalonnage colorimétrique, intégration des effets visuels et export du rendu final.",
    tags: ["Montage", "Étalonnage", "Motion"],
    icon: "🎬",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#7e22ce]/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c026d3] text-sm font-semibold tracking-widest uppercase mb-3">
            Parcours
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Expériences Professionnelles
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-[#c026d3] to-[#7e22ce] rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#c026d3] via-[#c026d3]/50 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative md:pl-20">
                {/* Circle on line */}
                <div className="absolute left-0 top-6 hidden md:flex w-12 h-12 items-center justify-center rounded-full bg-gradient-to-br from-[#c026d3] to-[#7e22ce] shadow-lg shadow-purple-900/50 z-10 text-lg">
                  {exp.icon}
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#c026d3]/40 hover:bg-white/8 transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="md:hidden text-2xl">{exp.icon}</span>
                        <h3 className="text-[#c026d3] text-lg sm:text-xl font-black">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="px-3 py-1 bg-[#c026d3]/20 border border-[#c026d3]/40 text-[#e879f9] text-xs font-semibold rounded-full animate-pulse">
                            Actuel
                          </span>
                        )}
                      </div>
                      <p className="text-white/60 text-sm">
                        {exp.company} — {exp.location}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 bg-[#c026d3]/10 border border-[#c026d3]/20 rounded-full flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-[#c026d3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-[#c026d3] text-sm font-semibold whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-white/60 leading-relaxed text-sm sm:text-base mb-5">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 border border-white/10 text-white/50 rounded-lg text-xs font-medium group-hover:border-[#c026d3]/20 group-hover:text-white/70 transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
