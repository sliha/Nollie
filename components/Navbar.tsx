"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isMenu = pathname === "/menu";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = isMenu
    ? [
        { href: "/", label: "Início" },
        { href: "/menu", label: "Menu" },
        { href: "/#reservas", label: "Reservar" },
        { href: "/#contacto", label: "Contacto" },
      ]
    : [
        { href: "#inicio", label: "Início" },
        { href: "/menu", label: "Menu" },
        { href: "#reservas", label: "Reservar" },
        { href: "#contacto", label: "Contacto" },
      ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "glass shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.png"
              alt="Nollie"
              width={48}
              height={48}
              className="rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span
              className="font-playfair text-lg text-nollie-gold tracking-widest hidden sm:block"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              NOLLIE
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-nollie-cream/80 hover:text-nollie-gold transition-colors duration-300 tracking-wider uppercase gold-underline"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={isMenu ? "/#reservas" : "#reservas"}
              className="px-5 py-2 text-sm font-medium bg-nollie-gold text-nollie-black rounded-full hover:bg-nollie-gold-light transition-all duration-300 hover:scale-105 tracking-wider uppercase"
            >
              Reservar
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            aria-label="Menu"
          >
            <span
              className={`block h-0.5 bg-nollie-gold transition-all duration-300 ${
                menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
              }`}
            />
            <span
              className={`block h-0.5 bg-nollie-gold transition-all duration-300 ${
                menuOpen ? "w-0 opacity-0" : "w-4"
              }`}
            />
            <span
              className={`block h-0.5 bg-nollie-gold transition-all duration-300 ${
                menuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-400 overflow-hidden ${
            menuOpen ? "max-h-80 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-nollie-gold/20">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-nollie-cream/80 hover:text-nollie-gold transition-colors py-3 px-2 tracking-wider uppercase border-b border-white/5"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
