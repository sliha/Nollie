import RevealOnScroll from "@/components/RevealOnScroll";

const schedule = [
  { day: "Segunda", hours: "17:00 – 02:00" },
  { day: "Terça", hours: "17:00 – 02:00" },
  { day: "Quarta", hours: "17:00 – 02:00" },
  { day: "Quinta", hours: "17:00 – 02:00" },
  { day: "Sexta", hours: "12:00 – 02:00" },
  { day: "Sábado", hours: "12:00 – 02:00" },
  { day: "Domingo", hours: "12:00 – 02:00" },
];

const today = new Date().getDay(); // 0 = Sunday

function getDayIndex(dayName: string): number {
  const map: Record<string, number> = {
    Segunda: 1, Terça: 2, Quarta: 3, Quinta: 4, Sexta: 5, Sábado: 6, Domingo: 0,
  };
  return map[dayName] ?? -1;
}

export default function ContactSection() {
  return (
    <section id="contacto" className="py-24 lg:py-32 bg-nollie-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-nollie-gold" />
              <span className="text-nollie-gold tracking-widest uppercase text-xs font-medium">Encontre-nos</span>
              <div className="h-px w-12 bg-nollie-gold" />
            </div>
            <h2
              className="font-playfair text-4xl sm:text-5xl text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Informações & Contacto
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: info */}
          <RevealOnScroll>
            <div className="space-y-10">
              {/* Address & Contact */}
              <div className="space-y-4">
                <h3
                  className="font-playfair text-xl text-nollie-gold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Morada & Contacto
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://maps.google.com/?q=R.+Nova+do+Carvalho+70,+1200-292+Lisboa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-nollie-cream/70 hover:text-nollie-cream transition-colors group"
                  >
                    <svg className="w-5 h-5 text-nollie-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-medium">R. Nova do Carvalho 70</p>
                      <p className="text-sm">1200-292 Lisboa, Portugal</p>
                      <p className="text-xs text-nollie-gold/60 mt-0.5 group-hover:text-nollie-gold transition-colors">Cais do Sodré →</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/351917043708"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-nollie-cream/70 hover:text-nollie-cream transition-colors"
                  >
                    <svg className="w-5 h-5 text-nollie-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>+351 917 043 708</span>
                  </a>

                  <a
                    href="https://instagram.com/nollie_lisboa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-nollie-cream/70 hover:text-nollie-cream transition-colors"
                  >
                    <svg className="w-5 h-5 text-nollie-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                    <span>@nollie_lisboa</span>
                  </a>
                </div>
              </div>

              {/* Schedule */}
              <div className="space-y-4">
                <h3
                  className="font-playfair text-xl text-nollie-gold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Horário de Funcionamento
                </h3>
                <div className="rounded-2xl overflow-hidden border border-nollie-gold/10">
                  {schedule.map(({ day, hours }, i) => {
                    const isToday = getDayIndex(day) === today;
                    return (
                      <div
                        key={day}
                        className={`flex justify-between items-center px-5 py-3.5 text-sm transition-colors ${
                          isToday
                            ? "bg-nollie-gold/10 border-l-2 border-nollie-gold"
                            : i % 2 === 0
                            ? "bg-nollie-dark/40"
                            : "bg-transparent"
                        }`}
                      >
                        <span className={isToday ? "text-nollie-gold font-medium" : "text-nollie-cream/60"}>
                          {day}
                          {isToday && (
                            <span className="ml-2 text-xs bg-nollie-gold text-nollie-black px-1.5 py-0.5 rounded-full">
                              Hoje
                            </span>
                          )}
                        </span>
                        <span className={isToday ? "text-nollie-gold" : "text-nollie-cream/80"}>
                          {hours}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right: map */}
          <RevealOnScroll delay={200}>
            <div className="space-y-4">
              <h3
                className="font-playfair text-xl text-nollie-gold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Como Chegar
              </h3>
              <div className="relative rounded-2xl overflow-hidden border border-nollie-gold/20 shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.2!2d-9.1463!3d38.7071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1933a59085475f%3A0x6b86bc54a27b1f02!2sR.%20Nova%20do%20Carvalho%2070%2C%201200-292%20Lisboa!5e0!3m2!1spt!2spt!4v1234567890"
                  width="100%"
                  height="380"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Nollie"
                />
              </div>
              <a
                href="https://maps.google.com/?q=R.+Nova+do+Carvalho+70,+1200-292+Lisboa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-nollie-gold hover:text-nollie-gold-light transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Abrir no Google Maps
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
