import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax feel */}
      <div className="absolute inset-0">
        <Image
          src="/images/pizza-table.jpg"
          alt="Nollie Pizzeria"
          fill
          className="object-cover scale-105"
          priority
          quality={90}
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-nollie-black/70 via-nollie-black/60 to-nollie-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-nollie-black/40 via-transparent to-nollie-black/40" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-8 w-px h-32 bg-gradient-to-b from-transparent via-nollie-gold/40 to-transparent hidden lg:block" />
      <div className="absolute top-1/4 right-8 w-px h-32 bg-gradient-to-b from-transparent via-nollie-gold/40 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-6 flex justify-center animate-fade-in">
          <Image
            src="/images/logo.png"
            alt="Nollie Logo"
            width={120}
            height={120}
            className="rounded-full border-2 border-nollie-gold/30 shadow-2xl shadow-nollie-gold/10"
          />
        </div>

        {/* Title */}
        <h1
          className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-3 animate-fade-up tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif", animationDelay: "0.2s", opacity: 0 }}
        >
          Nollie
        </h1>

        {/* Subtitle bar */}
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
          <div className="h-px w-12 bg-nollie-gold" />
          <p className="text-nollie-gold tracking-[0.3em] uppercase text-sm font-medium">
            Pizzeria & Wine Bar
          </p>
          <div className="h-px w-12 bg-nollie-gold" />
        </div>

        {/* Description */}
        <p
          className="text-nollie-cream/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          Pizza artesanal, vinhos naturais e boas vibrações<br className="hidden sm:block" />
          no coração de Lisboa
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
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
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" style={{ animationDelay: "1.2s" }}>
          <svg className="w-6 h-6 text-nollie-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

    </section>
  );
}
