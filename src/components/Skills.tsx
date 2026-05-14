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

export default function Skills() {
  const [animated, setAnimated] = useState(false);
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

  // Composant réutilisable pour les titres de section
  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 border-l-4 border-[#c026d3] pl-4">
      {children}
    </h2>
  );

  return (
    <section ref={sectionRef} id="skills" className="py-24 relative bg-white/[0.02]">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7e22ce]/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header Compétences */}
        <div className="text-center mb-16">
          <p className="text-[#c026d3] text-sm font-semibold tracking-widest uppercase mb-3">
            Expertise
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Compétences
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-[#c026d3] to-[#7e22ce] rounded-full" />
        </div>

        {/* Category Legend */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {Object.entries(categoryColors).map(([cat, color]) => (
            <div key={cat} className="flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full border border-white/10">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-white/60 text-sm">{cat}</span>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, i) => {
            const color = categoryColors[skill.category] || "#c026d3";
            return (
              <div
                key={skill.name}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#c026d3]/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2 h-8 rounded-full flex-shrink-0"
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
                    <span className="text-white font-bold text-sm" style={{ color }}>
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: animated ? `${skill.level}%` : "0%",
                      background: `linear-gradient(90deg, ${color}, ${color}aa)`,
                      transitionDelay: `${i * 100}ms`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* --- GALERIE IMAGES (Responsive Grid) --- */}
        <SectionTitle>MES AFFICHES</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {["image1.jpg", "image3.jpg", "image4.jpg", "image5.jpg"].map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl border border-white/10 group">
              <img 
                src={`/images/${img}`} 
                alt={`Affiche ${idx + 1}`}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <SectionTitle>MES MOCKUPS</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
           {["image7.jpg", "image8.jpg"].map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl border border-white/10 group">
              <img 
                src={`/images/${img}`} 
                alt={`Mockup ${idx + 1}`}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* --- GALERIE VIDÉOS (Responsive Grid) --- */}
        <SectionTitle>MES ANIMATIONS</SectionTitle>
        
        {/* Grille de 3 colonnes sur grand écran, 1 sur mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="bg-black/40 rounded-xl overflow-hidden border border-white/10">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                controls
                className="w-full h-auto aspect-video object-cover"
                poster="/images/image.jpg" // Assure-toi que cette image existe
              >
                <source src={`/vidéos/vidéo${num}.mp4`} type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo.
              </video>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}