import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-nollie-black border-t border-nollie-gold/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.png"
              alt="Nollie"
              width={44}
              height={44}
              className="rounded-full transition-transform duration-300 group-hover:scale-110"
            />
            <span
              className="font-playfair text-nollie-gold text-lg tracking-widest"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              NOLLIE
            </span>
          </Link>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-nollie-cream/40">
            <Link href="/" className="hover:text-nollie-gold transition-colors">Início</Link>
            <Link href="/menu" className="hover:text-nollie-gold transition-colors">Menu</Link>
            <a href="#reservas" className="hover:text-nollie-gold transition-colors">Reservar</a>
            <a href="#contacto" className="hover:text-nollie-gold transition-colors">Contacto</a>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-nollie-gold/10" />

          {/* Legal notices */}
          <div className="text-center space-y-2 text-nollie-cream/30 text-xs max-w-2xl leading-relaxed">
            <p>I.V.A. taxa em vigor. Todos os preços em €. Temos livro de reclamações.</p>
            <p>
              Nenhum prato, produto alimentar ou bebida, incluindo o couvert, pode ser cobrado se não for solicitado
              pelo cliente ou por estar utilizado. (Dec. de Lei nº10/2015 de 16 de Janeiro)
            </p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-nollie-cream/25 text-xs">
            <span>© 2025 Nollie — Pizzeria & Wine Bar. Todos os direitos reservados.</span>
            <span className="hidden sm:block">·</span>
            <span>
              Desenvolvido por{" "}
              <a
                href="https://instagram.com/_sfalcao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-nollie-gold/50 hover:text-nollie-gold transition-colors"
              >
                @_sfalcao
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
