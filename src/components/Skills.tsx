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

  return (
    <section ref={sectionRef} id="skills" className="py-24 relative bg-white/[0.02]">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7e22ce]/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
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
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
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

                {/* Level label */}
                <div className="flex justify-between mt-2">
                  <span className="text-white/30 text-xs">Débutant</span>
                  <span className="text-white/30 text-xs">Expert</span>
                </div>
              </div>
            );
          })}
        </div> <br />
        <h1>MES AFFICHES</h1><br />

        {/* Tools visual grid */}
        <div className="flex justify">
  <img width={200} height={200} src="/images/image1.jpg"></img>
  <img width={200} height={200} src="/images/image3.jpg"></img>
  <img width={200} height={200} src="/images/image2.jpg"></img>  
</div>
      <div className="flex justify">
  <img width={200} height={200} src="/images/image4.jpg"></img>
  <img width={200} height={200} src="/images/image5.jpg"></img>
  <img width={200} height={200} src="/images/image6.jpg"></img>  
</div> <br />
<h1>MES MOCKUP</h1><br />
  <div className="flex justify">
  <img width={300} height={200} src="/images/image7.jpg"></img>
  <img width={300} height={200} src="/images/image8.jpg"></img>
  <img width={90} height={80} src="/images/image9.jpg"></img>  
</div> <br />
<h1>MES ANIMATIONS</h1><br />
<div className="flex justify">
  <video autoPlay width="340" height="160" controls poster="image.jpg"><source src="/vidéos/vidéo1.mp4" type="video/mp4" /></video>
    <video autoPlay width="340" height="160" controls poster="image.jpg"><source src="/vidéos/vidéo2.mp4" type="video/mp4" /></video>
    <video autoPlay width="340" height="160" controls poster="image.jpg"><source src="/vidéos/vidéo3.mp4" type="video/mp4" /></video>

</div> <br />
<div className="flex justify">
  <video autoPlay width="340" height="160" controls poster="image.jpg"><source src="/vidéos/vidéo4.mp4" type="video/mp4" /></video>
    <video autoPlay width="340" height="160" controls poster="image.jpg"><source src="/vidéos/vidéo5.mp4" type="video/mp4" /></video>
    <video autoPlay width="340" height="160" controls poster="image.jpg"><source src="/vidéos/vidéo6.mp4" type="video/mp4" /></video>

</div>


      </div>
    </section>
  );
}
