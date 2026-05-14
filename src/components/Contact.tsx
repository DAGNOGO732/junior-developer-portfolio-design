import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate send
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative bg-white/[0.02]">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#c026d3]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#7e22ce]/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c026d3] text-sm font-semibold tracking-widest uppercase mb-3">
            Restons en contact
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Contactez Moi
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-[#c026d3] to-[#7e22ce] rounded-full" />
          <p className="mt-6 text-white/50 max-w-xl mx-auto">
            Vous avez un projet ? Une question ? N'hésitez pas à me contacter, je serai ravi d'échanger avec vous.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Informations de Contact</h3>

            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                ),
                title: "Téléphone",
                value: "+225 0142586044",
                href: "tel:+2250142586044",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                ),
                title: "Email",
                value: "dagnogosoripaliegussi@gmail.com",
                href: "mailto:dagnogosoripaliegussi@gmail.com",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                ),
                title: "Localisation",
                value: "Yamoussoukro, Côte d'Ivoire",
                href: null,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-5 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#c026d3]/40 hover:bg-white/8 transition-all duration-300 group"
              >
                <div className="p-4 bg-gradient-to-br from-[#c026d3]/20 to-[#7e22ce]/20 rounded-xl group-hover:from-[#c026d3]/30 group-hover:to-[#7e22ce]/30 transition-all duration-300 flex-shrink-0">
                  <svg className="w-6 h-6 text-[#c026d3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-1">{item.title}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white font-semibold hover:text-[#c026d3] transition-colors text-sm sm:text-base break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white font-semibold text-sm sm:text-base">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Availability Banner */}
            <div className="p-6 bg-gradient-to-r from-[#c026d3]/15 to-[#7e22ce]/15 border border-[#c026d3]/30 rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-semibold text-sm">Disponible</span>
              </div>
              <p className="text-white/60 text-sm">
                Actuellement disponible pour des projets freelance ou un poste en CDI/CDD dans le domaine du graphisme et du motion design.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#c026d3]/20 transition-all duration-300">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-20 h-20 bg-gradient-to-br from-[#c026d3] to-[#7e22ce] rounded-full flex items-center justify-center text-4xl mb-6 shadow-2xl shadow-purple-900/50">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message envoyé !</h3>
                <p className="text-white/50">Je vous répondrai dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-bold text-white mb-6">Envoyer un Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom"
                      className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c026d3]/60 focus:bg-white/8 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="votre@email.com"
                      className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c026d3]/60 focus:bg-white/8 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Objet de votre message"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c026d3]/60 focus:bg-white/8 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Décrivez votre projet ou votre demande..."
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c026d3]/60 focus:bg-white/8 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#c026d3] to-[#7e22ce] hover:from-[#a21caf] hover:to-[#6b21a8] text-white font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-2xl shadow-purple-900/40 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Envoyer le Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
