import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";

const photos = [
  { src: "/images/pizza-table.jpg", alt: "Pizzas na mesa com vinho", span: "col-span-2" },
  { src: "/images/wine-wall.jpg", alt: "Parede de vinhos naturais", span: "" },
  { src: "/images/interior.jpg", alt: "Interior do restaurante", span: "" },
  { src: "/images/pizza-bresaola.jpg", alt: "Pizza bresaola & stracciatella", span: "" },
  { src: "/images/pizzas-top.jpg", alt: "Vista aérea de pizzas", span: "col-span-2" },
  { src: "/images/wine-glasses.jpg", alt: "Copos de vinho", span: "" },
  { src: "/images/pizza-forno.jpg", alt: "Pizza com forno a lenha", span: "" },
  { src: "/images/hero-calzone.jpg", alt: "Calzone artesanal", span: "" },
];

export default function GallerySection() {
  return (
    <section id="galeria" className="py-24 lg:py-32 bg-nollie-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center mb-14 space-y-4">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-nollie-gold" />
              <span className="text-nollie-gold tracking-widest uppercase text-xs font-medium">Galeria</span>
              <div className="h-px w-12 bg-nollie-gold" />
            </div>
            <h2
              className="font-playfair text-4xl sm:text-5xl text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              O Nosso Espaço
            </h2>
          </div>
        </RevealOnScroll>

        {/* Masonry-like grid */}
        <RevealOnScroll delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px]">
            {photos.map(({ src, alt, span }, i) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-xl group ${span}`}
                style={{ gridRow: span === "col-span-2" && i === 0 ? "span 2" : i === 4 ? "auto" : "auto" }}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-nollie-black/0 group-hover:bg-nollie-black/30 transition-all duration-500" />
                {/* Caption on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <p className="text-white/90 text-xs font-medium truncate">{alt}</p>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
