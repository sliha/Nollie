import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-nollie-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <RevealOnScroll>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="divider" style={{ margin: 0 }} />
                <span className="text-nollie-gold tracking-widest uppercase text-xs font-medium">
                  A Nossa História
                </span>
              </div>

              <h2
                className="font-playfair text-4xl sm:text-5xl text-white leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Pizza de alma,<br />
                <em className="text-nollie-gold">vinhos com história</em>
              </h2>

              <div className="space-y-4 text-nollie-cream/70 text-base leading-relaxed">
                <p>
                  No coração de Cais do Sodré, o Nollie nasceu da paixão por duas das grandes artes
                  da mesa italiana: a pizza napolitana de forno a lenha e os vinhos naturais que
                  contam histórias de terroir e liberdade.
                </p>
                <p>
                  A nossa massa fermenta durante 72 horas com farinha italiana tipo 00, criando uma
                  base leve, digesta e cheia de sabor. Cada pizza é uma obra efémera — crocante por
                  fora, macia por dentro, com ingredientes selecionados diretamente de produtores que
                  partilham a nossa filosofia.
                </p>
                <p>
                  A cave de vinhos naturais é cuidadosamente escolhida de pequenos produtores
                  portugueses e europeus — vinhos vivos, com personalidade, que evoluem copo a copo.
                  Beba devagar. Sinta.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-nollie-gold/20">
                {[
                  { num: "72h", label: "Fermentação" },
                  { num: "100%", label: "Natural" },
                  { num: "Cais", label: "do Sodré" },
                ].map(({ num, label }) => (
                  <div key={label} className="text-center">
                    <p
                      className="font-playfair text-2xl text-nollie-gold"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {num}
                    </p>
                    <p className="text-nollie-cream/50 text-xs uppercase tracking-wider mt-1">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Photos grid */}
          <RevealOnScroll delay={200}>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 relative h-56 sm:h-64 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/nolli-img3.jpg"
                  alt="Pizzas Nollie"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nollie-black/40 to-transparent" />
              </div>
              <div className="relative h-40 sm:h-48 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/nolli-img1.jpg"
                  alt="Pizzas artesanais Nollie"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nollie-black/40 to-transparent" />
              </div>
              <div className="relative h-40 sm:h-48 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/nolli-img2.jpg"
                  alt="Mesa de pizzas e vinhos"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nollie-black/40 to-transparent" />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
