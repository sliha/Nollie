import Link from "next/link";
import Footer from "@/components/Footer";

// ── Menu data ──────────────────────────────────────────────────────────────

const antipasti = [
  {
    name: "Focaccina",
    nameEn: "Focaccina",
    desc: "focaccina com azeite e ervas",
    descEn: "focaccina with olive oil and herbs",
    price: "€5,50",
  },
  {
    name: "Burrata di Puglia",
    nameEn: "Burrata di Puglia",
    desc: "burrata, tomate, pinhões, pesto, azeite",
    descEn: "burrata, tomato, pine nuts, pesto, olive oil",
    price: "€13,00",
  },
  {
    name: "Carpaccio de Bresaola",
    nameEn: "Bresaola Carpaccio",
    desc: "bresaola, lascas de parmesão, azeite, rúcula e sumo de limão",
    descEn: "bresaola, parmesan shavings, olive oil, rocket, lemon juice",
    price: "€14,50",
  },
];

const pizzas = [
  {
    name: "Margherita",
    nameEn: "Margherita",
    desc: "mozzarella fior di latte, molho de tomate, manjericão",
    descEn: "mozzarella fior di latte, tomato sauce, basil",
    price: "€11,50",
  },
  {
    name: "Vegan",
    nameEn: "Vegan",
    desc: "molho de tomate, courgette, beringela, rúcula, azeitona preta, alcachofra, cebola rocha, tomate seco",
    descEn: "tomato sauce, courgette, egg plant, rocket, black olives, artichoke, red onion, sun dried tomato",
    price: "€13,00",
    tag: "🌱",
  },
  {
    name: "Regina",
    nameEn: "Regina",
    desc: "mozzarella fior di latte, molho de tomate, fiambre, cogumelos paris, manjericão",
    descEn: "mozzarella fior di latte, tomato sauce, ham, paris mushrooms, basil",
    price: "€14,00",
  },
  {
    name: "Diavola",
    nameEn: "Diavola",
    desc: "mozzarella fior di latte, molho de tomate, salame picante, salame napolitano, manjericão",
    descEn: "mozzarella fior di latte, tomato sauce, spicy salami, neapolitan salami, basil",
    price: "€14,00",
    tag: "🌶️",
  },
  {
    name: "Zucca",
    nameEn: "Zucca",
    desc: "mozzarella fior di latte, creme de abóbora, queijo pecorino, gorgonzola, manjericão",
    descEn: "mozzarella fior di latte, pumpkin cream, pecorino cheese, gorgonzola, basil",
    price: "€14,50",
  },
  {
    name: "Funghi & Truffle Oil",
    nameEn: "Funghi & Truffle Oil",
    desc: "mozzarella fior di latte, cogumelos paris, cogumelos marron, queijo scamorza, azeite de trufa, manjericão",
    descEn: "mozzarella fior di latte, paris mushrooms, marron mushrooms, scamorza cheese, truffle oil, basil",
    price: "€15,00",
  },
  {
    name: "Bresaola & Stracciatella",
    nameEn: "Bresaola & Stracciatella",
    desc: "mozzarella fior di latte, molho de tomate, stracciatella, bresaola, rúcula, tomate seco",
    descEn: "mozzarella fior di latte, tomato sauce, stracciatella, bresaola, rocket, sun dried tomato",
    price: "€16,00",
    tag: "⭐",
  },
];

const calzone = [
  { name: "Tomate e queijo", nameEn: "Tomato and cheese", price: "€4,50" },
  { name: "Tomate, queijo, fiambre e cogumelos", nameEn: "Tomato, cheese, ham and mushrooms", price: "€5,50" },
  { name: "Tomate, queijo, salame napolitano e salame picante", nameEn: "Tomato, cheese, neapolitan salami and spicy salami", price: "€5,50" },
  { name: "Nutella e amêndoa tostada", nameEn: "Nutella and toasted almonds", price: "€8,00" },
];

const winesRed = [
  { name: "Nollie", origin: "Lisboa, PT", desc: "blend com predominância de castelão", glass: "€6", bottle: "€23" },
  { name: "Intervalo", origin: "Lisboa, PT", desc: "castelão e touriga nacional", glass: "€7", bottle: "€27" },
  { name: "Mainova", origin: "Alentejo, PT", desc: "alicante bouschet, touriga nacional, baga", glass: "€8,50", bottle: "€32" },
  { name: "Purista Alfrocheiro", origin: "Lisboa, PT", desc: "alfrocheiro", glass: "€10", bottle: "€38" },
  { name: "Protótipo T0", origin: "Douro, PT", desc: "bastardo, tinta francisca, tinta roriz", glass: null, bottle: "€45" },
];

const winesWhite = [
  { name: "Phulia Loureiro", origin: "Minho, PT", desc: "100% loureiro", glass: "€6", bottle: "€23" },
  { name: "Nollie", origin: "Lisboa, PT", desc: "blend com predominância de arinto", glass: "€6", bottle: "€23" },
  { name: "PiuPiu", origin: "Lisboa, PT", desc: "alicante branco e seara nova", glass: "€7,50", bottle: "€28" },
  { name: "Mainova", origin: "Alentejo, PT", desc: "arinto, verdelho, antão vaz", glass: "€8,50", bottle: "€32" },
  { name: "Mainova Verdelho", origin: "Alentejo, PT", desc: "verdelho", glass: null, bottle: "€35" },
  { name: "Purista", origin: "Lisboa, PT", desc: "fernão pires", glass: null, bottle: "€39" },
];

const winesRose = [
  { name: "Daughters of Nobb", origin: "Alentejo, PT", desc: "castelão e aragonês", glass: "€6", bottle: "€23" },
  { name: "Protótipo R1", origin: "Távora, Varosa, PT", desc: "100% touriga franca", glass: null, bottle: "€29" },
];

const winesPalhete = [
  { name: "Espera", origin: "Lisboa, PT", desc: "fernão pires, touriga nacional, arinto de bucelas", glass: "€9", bottle: "€34" },
];

const winesOrange = [
  { name: "Espera Curtimenta", origin: "Lisboa, PT", desc: "100% Fernão Pires, 12 dias curtimenta / 6 meses barricas 500L usadas", glass: "€9,50", bottle: "€36" },
];

const winesPetNat = [
  { name: "Tubarão Rose", origin: "R. Vinho Verde, PT", desc: "vinhão e loureiro", glass: null, bottle: "€42" },
  { name: "Prosecco", origin: "Veneto, IT", desc: null, glass: "€6,50", bottle: "€25" },
];

const beers = [
  { name: "Imperial Sagres Draft Beer 0,20cl", price: "€3,00" },
  { name: "Caneca Sagres Pint 0,50cl", price: "€5,50" },
];

const fritz = [
  { name: "Kola", price: "€3,50" },
  { name: "Kola Zero / No Sugar", price: "€3,50" },
  { name: "Lima / Lime", price: "€3,80" },
  { name: "Laranja / Orange", price: "€3,80" },
  { name: "Maçã / Apple", price: "€3,80" },
  { name: "Rhubarb", price: "€3,80" },
];

const water = [
  { name: "Luso Still Water 0,50cl", price: "€3,00" },
  { name: "Luso Still Water 1lt", price: "€4,50" },
  { name: "Castelo c/ Gás Sparkling Water 0,25cl", price: "€3,00" },
  { name: "Luso c/ Gás Sparkling Water 1lt", price: "€4,50" },
];

const cocktails = [
  {
    name: "Negroni",
    desc: "Gin, Campari, Vermute Tinto",
    descEn: "Gin, Campari, Red Vermouth",
    price: "€11,00",
  },
  {
    name: "Aperol Spritz",
    desc: "Aperol, Prosecco, Água com Gás",
    descEn: "Aperol, Prosecco, Sparkling Water",
    price: "€10,00",
  },
  {
    name: "Italian Mule",
    desc: "Gin, Limoncello, Sumo de Limão, Ginger Beer",
    descEn: "Gin, Limoncello, Lemon juice, Ginger Beer",
    price: "€10,00",
  },
  {
    name: "Tommy's Margarita",
    desc: "Tequila, Sumo de Lima, Xarope de Agave",
    descEn: "Tequila, Lime juice, Agave Syrup",
    price: "€10,00",
  },
  {
    name: "Espresso Martini",
    desc: "Vodka, Licor de Café, Açúcar, Cold Brew",
    descEn: "Vodka, Coffee Liqueur, Sugar, Cold Brew",
    price: "€10,00",
  },
];

// ── Components ─────────────────────────────────────────────────────────────

function SectionHeader({ id, title, subtitle }: { id: string; title: string; subtitle?: string }) {
  return (
    <div id={id} className="mb-8 scroll-mt-24">
      <div className="flex items-center gap-3 mb-2">
        <div className="h-px flex-1 bg-nollie-gold/20" />
        <h2
          className="font-playfair text-2xl sm:text-3xl text-nollie-gold whitespace-nowrap px-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h2>
        <div className="h-px flex-1 bg-nollie-gold/20" />
      </div>
      {subtitle && <p className="text-center text-nollie-cream/40 text-xs tracking-widest uppercase">{subtitle}</p>}
    </div>
  );
}

function MenuItem({ name, nameEn, desc, descEn, price, tag }: {
  name: string; nameEn?: string; desc?: string; descEn?: string; price: string; tag?: string;
}) {
  return (
    <div className="flex gap-4 py-4 border-b border-nollie-gold/8 group hover:bg-nollie-gold/3 rounded-lg px-2 transition-colors">
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap">
          <h3 className="text-nollie-cream font-medium text-sm sm:text-base">
            {name}
          </h3>
          {tag && <span className="text-sm">{tag}</span>}
          {nameEn && nameEn !== name && (
            <span className="text-nollie-cream/30 text-xs italic">/ {nameEn}</span>
          )}
        </div>
        {desc && (
          <p className="text-nollie-cream/50 text-xs mt-0.5 leading-relaxed">
            {desc}
          </p>
        )}
        {descEn && descEn !== desc && (
          <p className="text-nollie-cream/25 text-xs mt-0.5 leading-relaxed italic">
            {descEn}
          </p>
        )}
      </div>
      <div className="flex-shrink-0 text-right">
        <span className="text-nollie-gold font-semibold text-sm sm:text-base">{price}</span>
      </div>
    </div>
  );
}

function WineItem({ name, origin, desc, glass, bottle }: {
  name: string; origin: string; desc: string | null; glass: string | null; bottle: string;
}) {
  return (
    <div className="flex gap-4 py-4 border-b border-nollie-gold/8 group hover:bg-nollie-gold/3 rounded-lg px-2 transition-colors">
      <div className="flex-1 min-w-0">
        <h3 className="text-nollie-cream font-medium text-sm sm:text-base">{name}</h3>
        <p className="text-nollie-gold/60 text-xs mt-0.5">{origin}</p>
        {desc && <p className="text-nollie-cream/40 text-xs mt-0.5 italic">{desc}</p>}
      </div>
      <div className="flex-shrink-0 text-right space-y-0.5">
        {glass && (
          <div className="flex items-center gap-1.5 justify-end">
            <span className="text-nollie-cream/30 text-xs">copo</span>
            <span className="text-nollie-gold font-semibold text-sm">{glass}</span>
          </div>
        )}
        <div className="flex items-center gap-1.5 justify-end">
          <span className="text-nollie-cream/30 text-xs">garrafa</span>
          <span className="text-nollie-gold font-semibold text-sm">{bottle}</span>
        </div>
      </div>
    </div>
  );
}

function SimpleItem({ name, price }: { name: string; price: string }) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-nollie-gold/8 hover:bg-nollie-gold/3 rounded-lg px-2 transition-colors">
      <span className="text-nollie-cream/80 text-sm">{name}</span>
      <span className="text-nollie-gold font-semibold text-sm">{price}</span>
    </div>
  );
}

// ── Page ────────────────────────────────────────────────────────────────────

const navItems = [
  { href: "#antipasti", label: "Entradas" },
  { href: "#pizza", label: "Pizza" },
  { href: "#calzone", label: "Calzone" },
  { href: "#vinhos", label: "Vinhos" },
  { href: "#cerveja", label: "Cerveja" },
  { href: "#cocktails", label: "Cocktails" },
  { href: "#bebidas", label: "Bebidas" },
];

export default function MenuPage() {
  return (
    <>
      {/* Hero bar */}
      <div className="pt-16 md:pt-20 bg-nollie-black">
        <div className="max-w-3xl mx-auto px-4 py-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-nollie-gold" />
            <span className="text-nollie-gold tracking-widest uppercase text-xs font-medium">Menu Completo</span>
            <div className="h-px w-12 bg-nollie-gold" />
          </div>
          <h1
            className="font-playfair text-4xl sm:text-5xl text-white mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            O Nosso Menu
          </h1>
          <p className="text-nollie-cream/60 text-sm">
            Pizza artesanal, vinhos naturais e cocktails clássicos
          </p>
        </div>

        {/* Sticky nav */}
        <div className="sticky top-16 md:top-20 z-40 glass border-t border-b border-nollie-gold/10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex overflow-x-auto gap-1 py-3 no-scrollbar">
              {navItems.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="flex-shrink-0 px-4 py-1.5 text-xs font-medium text-nollie-cream/60 hover:text-nollie-gold rounded-full border border-nollie-gold/15 hover:border-nollie-gold/40 transition-all duration-200 whitespace-nowrap tracking-wide uppercase"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Menu content */}
      <div className="bg-nollie-dark min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-16">

          {/* Antipasti */}
          <section>
            <SectionHeader id="antipasti" title="Antipasti" subtitle="Entradas / Starters" />
            <div>
              {antipasti.map((item) => (
                <MenuItem key={item.name} {...item} />
              ))}
            </div>
          </section>

          {/* Pizza */}
          <section>
            <SectionHeader id="pizza" title="Pizza" subtitle="Massa artesanal de 72h / 72h artisan dough" />
            <div>
              {pizzas.map((item) => (
                <MenuItem key={item.name} {...item} />
              ))}
            </div>
          </section>

          {/* Calzone */}
          <section>
            <SectionHeader id="calzone" title="Pizzetas Calzone" subtitle="Estilo calzone / Calzone style" />
            <div>
              {calzone.map((item) => (
                <MenuItem key={item.name} name={item.name} nameEn={item.nameEn} price={item.price} />
              ))}
            </div>
          </section>

          {/* Vinhos */}
          <section id="vinhos" className="scroll-mt-24">
            <SectionHeader id="vinhos-header" title="Vinhos Naturais" subtitle="Natural Wines" />

            <div className="space-y-8">
              {/* Tinto */}
              <div>
                <h3 className="text-nollie-wine font-medium text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-nollie-wine inline-block" />
                  Tinto / Red
                </h3>
                {winesRed.map((w) => <WineItem key={`${w.name}-${w.origin}`} {...w} />)}
              </div>

              {/* Branco */}
              <div>
                <h3 className="text-nollie-gold/70 font-medium text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-nollie-gold inline-block" />
                  Branco / White
                </h3>
                {winesWhite.map((w) => <WineItem key={`${w.name}-${w.origin}`} {...w} />)}
              </div>

              {/* Rosé */}
              <div>
                <h3 className="text-pink-400/70 font-medium text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-pink-400 inline-block" />
                  Rosé
                </h3>
                {winesRose.map((w) => <WineItem key={`${w.name}-${w.origin}`} {...w} />)}
              </div>

              {/* Palhete */}
              <div>
                <h3 className="text-amber-500/70 font-medium text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
                  Palhete
                </h3>
                {winesPalhete.map((w) => <WineItem key={`${w.name}-${w.origin}`} {...w} />)}
              </div>

              {/* Orange */}
              <div>
                <h3 className="text-orange-400/70 font-medium text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-400 inline-block" />
                  Laranja / Orange
                </h3>
                {winesOrange.map((w) => <WineItem key={`${w.name}-${w.origin}`} {...w} />)}
              </div>

              {/* Pet Nat */}
              <div>
                <h3 className="text-nollie-cream/50 font-medium text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-nollie-cream/40 inline-block" />
                  Pet Nat
                </h3>
                {winesPetNat.map((w) => <WineItem key={`${w.name}-${w.origin}`} {...w} />)}
              </div>
            </div>
          </section>

          {/* Cerveja */}
          <section>
            <SectionHeader id="cerveja" title="Cerveja" subtitle="Beer" />
            <div>
              {beers.map((item) => <SimpleItem key={item.name} {...item} />)}
            </div>
          </section>

          {/* Fritz Kola */}
          <section>
            <SectionHeader id="fritz" title="Fritz Kola" />
            <div>
              {fritz.map((item) => <SimpleItem key={item.name} {...item} />)}
            </div>
          </section>

          {/* Água */}
          <section>
            <SectionHeader id="bebidas" title="Água" subtitle="Water" />
            <div>
              {water.map((item) => <SimpleItem key={item.name} {...item} />)}
            </div>
          </section>

          {/* Cocktails */}
          <section>
            <SectionHeader id="cocktails" title="Cocktails Clássicos" subtitle="Classic Cocktails" />
            <div>
              {cocktails.map((item) => (
                <MenuItem key={item.name} {...item} />
              ))}
            </div>
          </section>

          {/* Legal */}
          <div className="text-center text-nollie-cream/20 text-xs leading-relaxed border-t border-nollie-gold/10 pt-8">
            <p>I.V.A. taxa em vigor. Todos os preços em €.</p>
          </div>
        </div>
      </div>

      {/* Back to home */}
      <div className="bg-nollie-dark py-6 text-center border-t border-nollie-gold/10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-nollie-gold/60 hover:text-nollie-gold transition-colors"
        >
          <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          Voltar ao Início
        </Link>
      </div>

      <Footer />
    </>
  );
}
