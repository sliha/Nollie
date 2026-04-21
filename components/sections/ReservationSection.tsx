"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import PaymentSimulator from "@/components/PaymentSimulator";

const WEEKDAY_SLOTS = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "00:00"];
const WEEKEND_SLOTS = ["12:00", "13:00", "14:00", "15:00", "16:00", ...WEEKDAY_SLOTS];

function isWeekend(dateStr: string): boolean {
  if (!dateStr) return false;
  const d = new Date(dateStr);
  return d.getDay() === 0 || d.getDay() === 5 || d.getDay() === 6;
}

type Phase = "form" | "payment" | "success";

export default function ReservationSection() {
  const [phase, setPhase] = useState<Phase>("form");
  const [nome, setNome] = useState("");
  const [pessoas, setPessoas] = useState("2");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [obs, setObs] = useState("");
  const [sinalPago, setSinalPago] = useState("");

  const slots = isWeekend(data) ? WEEKEND_SLOTS : WEEKDAY_SLOTS;
  const today = new Date().toISOString().split("T")[0];

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nome || !data || !hora) return;
    setPhase("payment");
  }

  function handlePaymentSuccess(sinal: string) {
    setSinalPago(sinal);
    setPhase("success");
  }

  function handleWhatsApp() {
    const msg = `Olá! Gostaria de confirmar a minha reserva no Nollie.\n\nNome: ${nome}\nPessoas: ${pessoas}\nData: ${data}\nHora: ${hora}\nSinal pago: ${sinalPago}\nObservações: ${obs || "Nenhuma"}`;
    window.open(`https://wa.me/351917043708?text=${encodeURIComponent(msg)}`, "_blank");
  }

  function handleReset() {
    setPhase("form");
    setNome(""); setPessoas("2"); setData(""); setHora(""); setObs(""); setSinalPago("");
  }

  return (
    <section id="reservas" className="py-24 lg:py-32 bg-nollie-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-nollie-gold/30 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center mb-14 space-y-4">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-nollie-gold" />
              <span className="text-nollie-gold tracking-widest uppercase text-xs font-medium">Reserve Já</span>
              <div className="h-px w-12 bg-nollie-gold" />
            </div>
            <h2
              className="font-playfair text-4xl sm:text-5xl text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Reservar Mesa
            </h2>
            <p className="text-nollie-cream/60 max-w-md mx-auto">
              Reserve a sua mesa e venha desfrutar de uma noite inesquecível no Nollie.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={150}>
          <div className="glass rounded-3xl p-6 sm:p-10">

            {/* ── FASE 1: FORMULÁRIO ── */}
            {phase === "form" && (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Nome */}
                <div className="space-y-2">
                  <label className="text-nollie-cream/70 text-sm font-medium tracking-wide">Nome *</label>
                  <input
                    type="text"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="O seu nome..."
                    className="w-full bg-nollie-dark/60 border border-nollie-gold/20 focus:border-nollie-gold rounded-xl px-4 py-3.5 text-nollie-cream placeholder-nollie-cream/25 focus:outline-none transition-colors text-sm"
                  />
                </div>

                {/* Pessoas + Data */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-nollie-cream/70 text-sm font-medium tracking-wide">Número de Pessoas *</label>
                    <select
                      value={pessoas}
                      onChange={(e) => setPessoas(e.target.value)}
                      className="w-full bg-nollie-dark/60 border border-nollie-gold/20 focus:border-nollie-gold rounded-xl px-4 py-3.5 text-nollie-cream focus:outline-none transition-colors text-sm appearance-none cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                        <option key={n} value={n} className="bg-nollie-dark">
                          {n} {n === 1 ? "pessoa" : "pessoas"}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-nollie-cream/70 text-sm font-medium tracking-wide">Data *</label>
                    <input
                      type="date"
                      required
                      value={data}
                      min={today}
                      onChange={(e) => { setData(e.target.value); setHora(""); }}
                      className="w-full bg-nollie-dark/60 border border-nollie-gold/20 focus:border-nollie-gold rounded-xl px-4 py-3.5 text-nollie-cream focus:outline-none transition-colors text-sm [color-scheme:dark]"
                    />
                  </div>
                </div>

                {/* Slots de hora */}
                <div className="space-y-3">
                  <label className="text-nollie-cream/70 text-sm font-medium tracking-wide">
                    Hora *
                    {data && (
                      <span className="ml-2 text-nollie-gold/60 text-xs">
                        {isWeekend(data) ? "(Sex/Sáb/Dom)" : "(Seg a Qui)"}
                      </span>
                    )}
                  </label>
                  <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                    {slots.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setHora(s)}
                        className={`py-2.5 rounded-xl text-xs font-medium transition-all duration-200 hover:scale-105 ${
                          hora === s
                            ? "bg-nollie-gold text-nollie-black shadow-lg shadow-nollie-gold/20"
                            : "bg-nollie-dark/60 border border-nollie-gold/15 text-nollie-cream/60 hover:border-nollie-gold/40 hover:text-nollie-cream"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Observações */}
                <div className="space-y-2">
                  <label className="text-nollie-cream/70 text-sm font-medium tracking-wide">
                    Observações <span className="text-nollie-cream/30">(opcional)</span>
                  </label>
                  <textarea
                    value={obs}
                    onChange={(e) => setObs(e.target.value)}
                    placeholder="Aniversário, alergia alimentar, pedido especial..."
                    rows={3}
                    className="w-full bg-nollie-dark/60 border border-nollie-gold/20 focus:border-nollie-gold rounded-xl px-4 py-3.5 text-nollie-cream placeholder-nollie-cream/25 focus:outline-none transition-colors text-sm resize-none"
                  />
                </div>

                {/* Botão avançar para pagamento */}
                <button
                  type="submit"
                  disabled={!nome || !data || !hora}
                  className="w-full py-4 bg-nollie-gold hover:bg-nollie-gold-light disabled:opacity-40 disabled:cursor-not-allowed text-nollie-black rounded-xl font-medium text-sm transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3 shadow-xl shadow-nollie-gold/10"
                >
                  Continuar para Pagamento de Sinal
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                <p className="text-center text-nollie-cream/30 text-xs">
                  Sinal de €5,00 por pessoa para garantir a reserva
                </p>
              </form>
            )}

            {/* ── FASE 2: PAGAMENTO ── */}
            {phase === "payment" && (
              <div className="space-y-6">
                {/* Cabeçalho com dados da reserva */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <button
                      onClick={() => setPhase("form")}
                      className="text-nollie-cream/50 hover:text-nollie-cream transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <h3
                      className="font-playfair text-xl text-white"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Pagamento de Sinal
                    </h3>
                  </div>

                  {/* Mini-resumo da reserva */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                    {[
                      { l: "Nome", v: nome },
                      { l: "Pessoas", v: `${pessoas}` },
                      { l: "Data", v: data },
                      { l: "Hora", v: hora },
                    ].map(({ l, v }) => (
                      <div key={l} className="bg-nollie-black/40 border border-nollie-gold/10 rounded-xl px-3 py-2.5 text-center">
                        <p className="text-nollie-cream/40 text-xs">{l}</p>
                        <p className="text-nollie-cream text-sm font-medium mt-0.5 truncate">{v}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <PaymentSimulator pessoas={pessoas} onSuccess={handlePaymentSuccess} />
              </div>
            )}

            {/* ── FASE 3: SUCESSO ── */}
            {phase === "success" && (
              <div className="space-y-6 text-center">
                {/* Ícone de sucesso */}
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                    <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>

                <div>
                  <h3
                    className="font-playfair text-2xl text-white mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Pagamento confirmado!
                  </h3>
                  <p className="text-nollie-cream/60 text-sm">
                    A sua reserva está garantida. Até breve no Nollie! 🍕🍷
                  </p>
                </div>

                {/* Resumo completo */}
                <div className="bg-nollie-black/50 border border-nollie-gold/20 rounded-2xl p-5 text-left space-y-3">
                  <p className="text-nollie-gold text-xs font-medium uppercase tracking-wider">Resumo da Reserva</p>
                  {[
                    ["Nome", nome],
                    ["Pessoas", `${pessoas}`],
                    ["Data", data],
                    ["Hora", hora],
                    ...(obs ? [["Observações", obs]] : []),
                    ["Sinal pago", sinalPago],
                  ].map(([l, v]) => (
                    <div key={l} className="flex justify-between items-baseline gap-4">
                      <span className="text-nollie-cream/50 text-sm flex-shrink-0">{l}</span>
                      <span className={`text-sm font-medium text-right ${l === "Sinal pago" ? "text-green-400" : "text-nollie-cream"}`}>{v}</span>
                    </div>
                  ))}
                </div>

                {/* WhatsApp */}
                <button
                  onClick={handleWhatsApp}
                  className="w-full py-4 bg-[#25D366] hover:bg-[#20b358] text-white rounded-xl font-medium text-sm transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3 shadow-xl shadow-green-900/20"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Confirmar via WhatsApp
                </button>

                <button
                  onClick={handleReset}
                  className="text-sm text-nollie-cream/30 hover:text-nollie-cream/60 transition-colors"
                >
                  Fazer nova reserva
                </button>
              </div>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
