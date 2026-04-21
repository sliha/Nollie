import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";

const highlights = [
  {
    name: "Margherita",
    nameEn: "Margherita",
    desc: "Mozzarella fior di latte, molho de tomate, manjericão",
    descEn: "Mozzarella fior di latte, tomato sauce, basil",
    price: "€11,50",
    image: "/images/pizzas-top.jpg",
    tag: "Clássica",
  },
  {
    name: "Bresaola & Stracciatella",
    nameEn: "Bresaola & Stracciatella",
    desc: "Stracciatella, bresaola, rúcula, tomate seco",
    descEn: "Stracciatella, bresaola, rocket, sun dried tomato",
    price: "€16,00",
    image: "/images/pizza-bresaola.jpg",
    tag: "Destaque",
  },
  {
    name: "Burrata di Puglia",
    nameEn: "Burrata di Puglia",
    desc: "Burrata, tomate, pinhões, pesto, azeite",
    descEn: "Burrata, tomato, pine nuts, pesto, olive oil",
    price: "€13,00",
    image: "/images/pizza-forno.jpg",
    tag: "Antipasto",
  },
  {
    name: "Negroni",
    nameEn: "Negroni",
    desc: "Gin, Campari, Vermute Tinto",
    descEn: "Gin, Campari, Red Vermouth",
    price: "€11,00",
    image: "/images/wine-glasses.jpg",
    tag: "Cocktail",
  },
];

export default function MenuPreviewSection() {
  return (
    <section id="menu-preview" className="py-24 lg:py-32 bg-nollie-dark relative overflow-hidden">
      {/* Decorative background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #c4a862 0, #c4a862 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-nollie-gold" />
              <span className="text-nollie-gold tracking-widest uppercase text-xs font-medium">O Melhor de Nós</span>
              <div className="h-px w-12 bg-nollie-gold" />
            </div>
            <h2
              className="font-playfair text-4xl sm:text-5xl text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Destaques do Menu
            </h2>
            <p className="text-nollie-cream/60 max-w-md mx-auto">
              Uma pequena amostra do que nos apaixona. Cada prato, uma história.
            </p>
          </div>
        </RevealOnScroll>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <RevealOnScroll key={item.name} delay={i * 100}>
              <div className="group relative bg-nollie-black rounded-2xl overflow-hidden border border-nollie-gold/10 hover:border-nollie-gold/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-nollie-gold/5">
                {/* Tag */}
                <span className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-nollie-gold/90 text-nollie-black text-xs font-medium rounded-full tracking-wide">
                  {item.tag}
                </span>

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nollie-black via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <h3
                    className="font-playfair text-white text-lg leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-nollie-cream/60 text-xs leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                  <p className="text-nollie-cream/40 text-xs leading-relaxed line-clamp-2 italic">
                    {item.descEn}
                  </p>
                  <div className="pt-2">
                    <span className="text-nollie-gold font-semibold text-lg">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* CTA */}
        <RevealOnScroll delay={400}>
          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-flex items-center gap-3 px-8 py-4 border border-nollie-gold/60 hover:border-nollie-gold text-nollie-gold hover:bg-nollie-gold hover:text-nollie-black font-medium rounded-full transition-all duration-300 hover:scale-105 tracking-wider text-sm uppercase"
            >
              Ver Menu Completo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
