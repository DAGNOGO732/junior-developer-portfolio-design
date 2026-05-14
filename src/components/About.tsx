export default function About() {
  const hobbies = ["Internet", "Lecture", "Voyages"];

  return (
    <section id="about" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#c026d3]/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#c026d3] text-sm font-semibold tracking-widest uppercase mb-3">
            Qui suis-je ?
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            À Propos de Moi
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-[#c026d3] to-[#7e22ce] rounded-full" />
          <div className="flex justify">
<video autoPlay width="1140" height="160" controls poster="image.jpg" muted loop>
  <source src="/vidéos/présentation.mp4" type="video/mp4" />
</video>

          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left – Text */}
          <div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-[#c026d3]/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#c026d3]/20 rounded-xl">
                  <svg className="w-6 h-6 text-[#c026d3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Mon Profil</h3>
              </div>
              <p className="text-white/70 leading-relaxed text-base">
                Technicien en informatique et développeur d'applications de formation, ma passion pour l'art
                et le visuel m'a poussé à me former en autodidacte au graphisme et au motion design.
              </p>
              <p className="text-white/70 leading-relaxed text-base mt-4">
                Méthode, rigueur et créativité : j'applique la logique du développeur au service de la
                création visuelle. <span className="text-[#c026d3] font-semibold">Un profil hybride rare</span> — je pense en technicien, je crée en designer.
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  ),
                  label: "Téléphone",
                  value: "+225 0142586044",
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  ),
                  label: "Email",
                  value: "dagnogosoripaliegussi@gmail.com",
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  ),
                  label: "Localisation",
                  value: "Yamoussoukro, Côte d'Ivoire",
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  ),
                  label: "Statut",
                  value: "Disponible — Depuis Juin 2024",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[#c026d3]/30 transition-all duration-200"
                >
                  <div className="p-2 bg-[#c026d3]/15 rounded-lg flex-shrink-0">
                    <svg className="w-4 h-4 text-[#c026d3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">{item.label}</p>
                    <p className="text-white/80 text-sm font-medium break-all">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Loisirs & Références */}
          <div className="space-y-6">
            {/* Loisirs */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#c026d3]/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#c026d3]/20 rounded-xl">
                  <svg className="w-6 h-6 text-[#c026d3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Loisirs</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {hobbies.map((hobby) => (
                  <span
                    key={hobby}
                    className="px-5 py-2.5 bg-gradient-to-r from-[#c026d3]/20 to-[#7e22ce]/20 border border-[#c026d3]/30 text-[#e879f9] rounded-full text-sm font-medium"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>

            {/* Références */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#c026d3]/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#c026d3]/20 rounded-xl">
                  <svg className="w-6 h-6 text-[#c026d3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Références</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: "MME YAO EPIPHANIE", role: "Responsable RH, GAVCI" },
                  { name: "FRÉDÉRIC SIE PALE", role: "Vidéastre Freelancer" },
                ].map((ref) => (
                  <div key={ref.name} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#c026d3] to-[#7e22ce] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {ref.name[0]}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{ref.name}</p>
                      <p className="text-white/50 text-xs mt-0.5">{ref.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
