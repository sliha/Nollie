import Image from "next/image";
import Link from "next/link";
import { GLOVO_URL } from "@/lib/constants";

const HERO_BG = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background — Unsplash restaurant/bar elegante */}
      <div className="absolute inset-0">
        <Image
          src={HERO_BG}
          alt="Nollie Pizzeria & Wine Bar"
          fill
          className="object-cover scale-105"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Overlays para legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-nollie-black/75 via-nollie-black/60 to-nollie-black/92" />
        <div className="absolute inset-0 bg-gradient-to-r from-nollie-black/50 via-transparent to-nollie-black/50" />
      </div>

      {/* Decorative lines */}
      <div className="absolute top-1/4 left-8 w-px h-32 bg-gradient-to-b from-transparent via-nollie-gold/40 to-transparent hidden lg:block" />
      <div className="absolute top-1/4 right-8 w-px h-32 bg-gradient-to-b from-transparent via-nollie-gold/40 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">

        {/* Título */}
        <h1
          className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-3 animate-fade-up tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif", animationDelay: "0.2s", opacity: 0 }}
        >
          Nollie
        </h1>

        {/* Tagline */}
        <div
          className="flex items-center justify-center gap-4 mb-6 animate-fade-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          <div className="h-px w-12 bg-nollie-gold" />
          <p className="text-nollie-gold tracking-[0.3em] uppercase text-sm font-medium">
            Pizzeria & Wine Bar
          </p>
          <div className="h-px w-12 bg-nollie-gold" />
        </div>

        {/* Subtítulo */}
        <p
          className="text-nollie-cream/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          Pizza artesanal, vinhos naturais e boas vibrações<br className="hidden sm:block" />
          no coração de Lisboa
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center animate-fade-up"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          <Link
            href="/menu"
            className="px-8 py-3.5 bg-nollie-gold hover:bg-nollie-gold-light text-nollie-black font-medium rounded-full transition-all duration-300 hover:scale-105 tracking-wider text-sm uppercase shadow-lg shadow-nollie-gold/20"
          >
            Ver Menu
          </Link>
          <a
            href="#reservas"
            className="px-8 py-3.5 border border-nollie-gold/60 hover:border-nollie-gold text-nollie-cream hover:text-nollie-gold font-medium rounded-full transition-all duration-300 hover:scale-105 tracking-wider text-sm uppercase backdrop-blur-sm"
          >
            Reservar Mesa
          </a>
          <a
            href={GLOVO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-[#00A082] hover:bg-[#00b893] text-white font-medium rounded-full transition-all duration-300 hover:scale-105 tracking-wider text-sm uppercase shadow-lg shadow-[#00A082]/20"
          >
            🛵 Encomendar Online
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-nollie-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
