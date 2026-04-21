import RevealOnScroll from "@/components/RevealOnScroll";
import { GLOVO_URL } from "@/lib/constants";

export default function DeliverySection() {
  return (
    <section id="encomendar" className="py-24 lg:py-32 bg-nollie-dark relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00A082]/4 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center mb-14 space-y-4">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-nollie-gold" />
              <span className="text-nollie-gold tracking-widest uppercase text-xs font-medium">
                Delivery
              </span>
              <div className="h-px w-12 bg-nollie-gold" />
            </div>
            <h2
              className="font-playfair text-4xl sm:text-5xl text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Entregas ao Domicílio
            </h2>
            <p className="text-nollie-cream/60 max-w-md mx-auto">
              Receba as nossas pizzas e vinhos no conforto da sua casa
            </p>
          </div>
        </RevealOnScroll>

        {/* Card central */}
        <RevealOnScroll delay={150}>
          <div className="max-w-lg mx-auto">
            <a
              href={GLOVO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative bg-nollie-black border border-nollie-gold/15 hover:border-[#00A082]/50 rounded-3xl p-8 sm:p-12 text-center transition-all duration-500 hover:shadow-2xl hover:shadow-[#00A082]/10 hover:-translate-y-1">
                {/* Glovo icon / mota */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-[#00A082]/10 border border-[#00A082]/20 flex items-center justify-center group-hover:bg-[#00A082]/15 transition-colors duration-300">
                    <svg
                      className="w-10 h-10 text-[#00A082]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Glovo wordmark substituído por texto estilizado */}
                <div className="mb-2">
                  <span
                    className="font-playfair text-2xl sm:text-3xl font-bold text-white tracking-wide"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    glovo
                  </span>
                </div>

                <h3 className="text-nollie-cream/90 font-medium text-lg mb-2">
                  Faça o seu pedido pela Glovo
                </h3>
                <p className="text-nollie-cream/50 text-sm mb-8">
                  Pizza artesanal entregue à sua porta — rápido e quente 🍕
                </p>

                {/* Info pills */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {[
                    { icon: "⚡", text: "Entrega rápida" },
                    { icon: "🍕", text: "Menu completo" },
                    { icon: "📍", text: "Lisboa" },
                  ].map(({ icon, text }) => (
                    <span
                      key={text}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-nollie-dark/80 border border-nollie-gold/10 rounded-full text-xs text-nollie-cream/60"
                    >
                      {icon} {text}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="inline-flex items-center gap-3 px-8 py-4 bg-[#00A082] hover:bg-[#00b893] text-white font-medium rounded-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#00A082]/30 text-sm tracking-wide">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Pedir na Glovo 🛵
                </div>

                {/* Nota */}
                <p className="text-nollie-cream/25 text-xs mt-4">
                  Será redirecionado para a app Glovo
                </p>
              </div>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
