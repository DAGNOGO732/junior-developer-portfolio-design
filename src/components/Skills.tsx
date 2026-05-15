import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Adobe Photoshop", level: 80, category: "Design" },
  { name: "Adobe Illustrator", level: 75, category: "Design" },
  { name: "Adobe After Effect", level: 78, category: "Motion" },
  { name: "Adobe Premiere Pro", level: 72, category: "Motion" },
  { name: "Gemini 3.1 Pro", level: 65, category: "AI" },
  { name: "Claude AI", level: 62, category: "AI" },
  { name: "Microsoft PowerPoint", level: 85, category: "Bureautique" },
  { name: "Microsoft Word", level: 88, category: "Bureautique" },
  { name: "Visual Studio Code", level: 55, category: "Dev" },
];

const categoryColors: Record<string, string> = {
  Design: "#c026d3",
  Motion: "#7e22ce",
  AI: "#a855f7",
  Bureautique: "#9333ea",
  Dev: "#d946ef",
};

const affiches = ["image1.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
const mockups = ["image7.jpg", "image8.jpg"];

// --- Composant Carrousel Dynamique ---
const DynamicCarousel = ({
  images,
  title,
  icon,
}: {
  images: string[];
  title: string;
  icon: React.ReactNode;
}) => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Défilement automatique (pause au survol)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isHovered, images.length]);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // Gestion du swipe mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) next();
    if (diff < -50) prev();
  };

  return (
    <div className="mb-16">
      {/* Titre avec icône */}
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-gradient-to-br from-[#c026d3] to-[#7e22ce] rounded-xl shadow-lg shadow-[#c026d3]/20">
          {icon}
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
          <p className="text-white/40 text-sm mt-1">
            {images.length} créations • Glissez ou cliquez pour naviguer
          </p>
        </div>
      </div>

      {/* Carrousel */}
      <div
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Image principale avec effet de transition */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl shadow-[#c026d3]/5">
          <div className="relative aspect-[4/3] sm:aspect-[16/10]">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={`/images/${img}`}
                alt={`${title} ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                  idx === current
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                }`}
              />
            ))}

            {/* Overlay gradient en bas */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Compteur en bas à droite */}
            <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-white text-sm font-bold">
                {current + 1}
              </span>
              <span className="text-white/50 text-sm"> / {images.length}</span>
            </div>
          </div>
        </div>

        {/* Bouton Précédent */}
        <button
          onClick={prev}
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/50 backdrop-blur-md hover:bg-[#c026d3] text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 opacity-0 group-hover:opacity-100 hover:scale-110 shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Bouton Suivant */}
        <button
          onClick={next}
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/50 backdrop-blur-md hover:bg-[#c026d3] text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 opacity-0 group-hover:opacity-100 hover:scale-110 shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Miniatures en bas */}
      <div className="flex gap-3 mt-4 overflow-x-auto pb-2 scrollbar-hide">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              idx === current
                ? "border-[#c026d3] shadow-lg shadow-[#c026d3]/30 scale-105"
                : "border-white/10 opacity-50 hover:opacity-80"
            }`}
          >
            <img
              src={`/images/${img}`}
              alt={`Miniature ${idx + 1}`}
              className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default function Skills() {
  const [animated, setAnimated] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredSkills = activeFilter
    ? skills.filter((s) => s.category === activeFilter)
    : skills;

  return (
    <section ref={sectionRef} id="skills" className="py-24 relative bg-white/[0.02]">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7e22ce]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c026d3]/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header Compétences */}
        <div className="text-center mb-16">
          <p className="text-[#c026d3] text-sm font-semibold tracking-widest uppercase mb-3 animate-pulse">
            ✦ Expertise
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Compétences
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-[#c026d3] to-[#7e22ce] rounded-full" />
        </div>

        {/* Category Filter (cliquable) */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <button
            onClick={() => setActiveFilter(null)}
            className={`px-4 py-1.5 rounded-full border text-sm font-medium transition-all duration-300 ${
              activeFilter === null
                ? "bg-[#c026d3] border-[#c026d3] text-white shadow-lg shadow-[#c026d3]/30"
                : "bg-white/5 border-white/10 text-white/60 hover:border-[#c026d3]/50"
            }`}
          >
            Tous
          </button>
          {Object.entries(categoryColors).map(([cat, color]) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? "border-[#c026d3] text-white shadow-lg shadow-[#c026d3]/30"
                  : "bg-white/5 border-white/10 text-white/60 hover:border-[#c026d3]/50"
              }`}
              style={
                activeFilter === cat
                  ? { backgroundColor: color }
                  : {}
              }
            >
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: activeFilter === cat ? "#fff" : color }}
              />
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid (filtrable) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {filteredSkills.map((skill, i) => {
            const color = categoryColors[skill.category] || "#c026d3";
            return (
              <div
                key={skill.name}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#c026d3]/30 transition-all duration-500 group hover:shadow-lg hover:shadow-[#c026d3]/10 hover:-translate-y-1"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2 h-8 rounded-full flex-shrink-0 group-hover:h-10 transition-all duration-300"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-white font-semibold text-sm sm:text-base">
                      {skill.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium hidden sm:block"
                      style={{ backgroundColor: `${color}20`, color }}
                    >
                      {skill.category}
                    </span>
                    <span className="text-white font-bold text-lg" style={{ color }}>
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out relative"
                    style={{
                      width: animated ? `${skill.level}%` : "0%",
                      background: `linear-gradient(90deg, ${color}, ${color}aa)`,
                      transitionDelay: `${i * 100}ms`,
                    }}
                  >
                    {/* Effet brillant sur la barre */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ============ CARROUSEL AFFICHES ============ */}
        <DynamicCarousel
          title="MES AFFICHES"
          images={affiches}
          icon={
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          }
        />

        {/* ============ CARROUSEL MOCKUPS ============ */}
        <DynamicCarousel
          title="MES MOCKUPS"
          images={mockups}
          icon={
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
        />

        {/* ============ ANIMATIONS ============ */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-gradient-to-br from-[#c026d3] to-[#7e22ce] rounded-xl shadow-lg shadow-[#c026d3]/20">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                MES ANIMATIONS
              </h2>
              <p className="text-white/40 text-sm mt-1">
                6 animations • Motion Design & Vidéo
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                className="bg-black/40 rounded-2xl overflow-hidden border border-white/10 hover:border-[#c026d3]/40 transition-all duration-500 hover:shadow-lg hover:shadow-[#c026d3]/10 hover:-translate-y-1 group"
              >
                <div className="relative">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className="w-full h-auto aspect-video object-cover"
                  >
                    <source src={`/vidéos/vidéo${num}.mp4`} type="video/mp4" />
                  </video>
                  {/* Badge numéro */}
                  <div className="absolute top-3 left-3 w-8 h-8 bg-[#c026d3] rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    {num}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS pour l'animation shimmer */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}