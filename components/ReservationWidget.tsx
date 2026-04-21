"use client";

import { useState } from "react";
import PaymentSimulator from "@/components/PaymentSimulator";

// step 1=nome 2=pessoas 3=data 4=hora 5=obs 6=pagamento 7=sucesso
type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7;
const TOTAL_STEPS = 7;

const WEEKDAY_SLOTS = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "00:00"];
const WEEKEND_SLOTS = ["12:00", "13:00", "14:00", "15:00", "16:00", ...WEEKDAY_SLOTS];

function isWeekend(dateStr: string): boolean {
  if (!dateStr) return false;
  const d = new Date(dateStr);
  return d.getDay() === 0 || d.getDay() === 5 || d.getDay() === 6;
}

export default function ReservationWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>(1);
  const [nome, setNome] = useState("");
  const [pessoas, setPessoas] = useState("2");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [obs, setObs] = useState("");
  const [sinalPago, setSinalPago] = useState("");

  const slots = isWeekend(data) ? WEEKEND_SLOTS : WEEKDAY_SLOTS;
  const today = new Date().toISOString().split("T")[0];

  function handleWhatsApp() {
    const msg = `Olá! Gostaria de confirmar a minha reserva no Nollie.\n\nNome: ${nome}\nPessoas: ${pessoas}\nData: ${data}\nHora: ${hora}\nSinal pago: ${sinalPago}\nObservações: ${obs || "Nenhuma"}`;
    window.open(`https://wa.me/351917043708?text=${encodeURIComponent(msg)}`, "_blank");
    handleClose();
  }

  function handleClose() {
    setOpen(false);
    reset();
  }

  function reset() {
    setStep(1);
    setNome(""); setPessoas("2"); setData(""); setHora(""); setObs(""); setSinalPago("");
  }

  function handlePaymentSuccess(sinal: string) {
    setSinalPago(sinal);
    setStep(7);
  }

  const canNext = (): boolean => {
    if (step === 1) return nome.trim().length > 0;
    if (step === 2) return !!pessoas;
    if (step === 3) return !!data;
    if (step === 4) return !!hora;
    return true;
  };

  // Progresso: steps 1-5 avançam normalmente; step 6=payment; step 7=done
  const progress = ((step - 1) / (TOTAL_STEPS - 1)) * 100;

  const stepLabels: Record<Step, string> = {
    1: "O seu nome",
    2: "Número de pessoas",
    3: "Data",
    4: "Hora",
    5: "Observações",
    6: "Pagamento de sinal",
    7: "Reserva confirmada",
  };

  return (
    <>
      {/* Botão flutuante */}
      <button
        onClick={() => { setOpen(!open); if (!open) reset(); }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-nollie-gold hover:bg-nollie-gold-light shadow-2xl shadow-black/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Reservar mesa"
      >
        <svg className="w-6 h-6 text-nollie-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </button>

      {/* Painel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 glass rounded-2xl shadow-2xl shadow-black/60 overflow-hidden animate-fade-up border border-nollie-gold/20">
          {/* Header */}
          <div className="bg-gradient-to-r from-nollie-dark to-nollie-black px-5 py-4 flex items-center justify-between border-b border-nollie-gold/20">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-base flex-shrink-0">🍕</span>
              <div className="min-w-0">
                <span
                  className="font-playfair text-nollie-gold text-sm block truncate"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Reservar Mesa
                </span>
                <span className="text-nollie-cream/30 text-xs">{stepLabels[step]}</span>
              </div>
            </div>
            <button onClick={handleClose} className="text-nollie-cream/50 hover:text-nollie-cream transition-colors flex-shrink-0 ml-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Barra de progresso */}
          <div className="h-0.5 bg-nollie-dark/50">
            <div
              className="h-full bg-gradient-to-r from-nollie-gold to-nollie-gold-light transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Conteúdo com scroll se necessário */}
          <div className="p-5 max-h-[70vh] overflow-y-auto">

            {/* Step 1 — Nome */}
            {step === 1 && (
              <div className="space-y-4">
                <p className="text-nollie-cream/90 text-sm leading-relaxed">
                  Olá! Bem-vindo ao Nollie 🍕🍷<br />
                  Vamos reservar uma mesa? Qual é o seu nome?
                </p>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="O seu nome..."
                  className="w-full bg-nollie-dark/70 border border-nollie-gold/30 rounded-xl px-4 py-3 text-sm text-nollie-cream placeholder-nollie-cream/30 focus:outline-none focus:border-nollie-gold transition-colors"
                  onKeyDown={(e) => e.key === "Enter" && canNext() && setStep(2)}
                  autoFocus
                />
              </div>
            )}

            {/* Step 2 — Pessoas */}
            {step === 2 && (
              <div className="space-y-4">
                <p className="text-nollie-cream/90 text-sm">
                  Quantas pessoas serão, <span className="text-nollie-gold font-medium">{nome}</span>?
                </p>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <button
                      key={n}
                      onClick={() => setPessoas(String(n))}
                      className={`py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                        pessoas === String(n)
                          ? "bg-nollie-gold text-nollie-black"
                          : "bg-nollie-dark/70 border border-nollie-gold/20 text-nollie-cream/70 hover:border-nollie-gold/50"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3 — Data */}
            {step === 3 && (
              <div className="space-y-4">
                <p className="text-nollie-cream/90 text-sm">Para que data?</p>
                <input
                  type="date"
                  value={data}
                  min={today}
                  onChange={(e) => { setData(e.target.value); setHora(""); }}
                  className="w-full bg-nollie-dark/70 border border-nollie-gold/30 rounded-xl px-4 py-3 text-sm text-nollie-cream focus:outline-none focus:border-nollie-gold transition-colors [color-scheme:dark]"
                />
              </div>
            )}

            {/* Step 4 — Hora */}
            {step === 4 && (
              <div className="space-y-4">
                <p className="text-nollie-cream/90 text-sm">E a que horas?</p>
                <div className="grid grid-cols-4 gap-2">
                  {slots.map((s) => (
                    <button
                      key={s}
                      onClick={() => setHora(s)}
                      className={`py-2.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                        hora === s
                          ? "bg-nollie-gold text-nollie-black"
                          : "bg-nollie-dark/70 border border-nollie-gold/20 text-nollie-cream/70 hover:border-nollie-gold/50"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5 — Observações */}
            {step === 5 && (
              <div className="space-y-4">
                <p className="text-nollie-cream/90 text-sm">
                  Alguma observação especial?<br />
                  <span className="text-nollie-cream/40 text-xs">(aniversário, alergia, etc.)</span>
                </p>
                <textarea
                  value={obs}
                  onChange={(e) => setObs(e.target.value)}
                  placeholder="Opcional..."
                  rows={3}
                  className="w-full bg-nollie-dark/70 border border-nollie-gold/30 rounded-xl px-4 py-3 text-sm text-nollie-cream placeholder-nollie-cream/30 focus:outline-none focus:border-nollie-gold transition-colors resize-none"
                />
              </div>
            )}

            {/* Step 6 — Pagamento */}
            {step === 6 && (
              <div className="space-y-4">
                <div className="bg-nollie-black/40 border border-nollie-gold/10 rounded-xl p-3 grid grid-cols-2 gap-2 text-xs mb-1">
                  {[["Nome", nome], ["Pessoas", pessoas], ["Data", data], ["Hora", hora]].map(([l, v]) => (
                    <div key={l}>
                      <span className="text-nollie-cream/40">{l}: </span>
                      <span className="text-nollie-cream/80 font-medium">{v}</span>
                    </div>
                  ))}
                </div>
                <PaymentSimulator pessoas={pessoas} compact onSuccess={handlePaymentSuccess} />
              </div>
            )}

            {/* Step 7 — Sucesso */}
            {step === 7 && (
              <div className="space-y-4 text-center">
                <div className="flex justify-center py-2">
                  <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>

                <div>
                  <p className="text-white font-medium">Pagamento confirmado! ✅</p>
                  <p className="text-nollie-cream/60 text-xs mt-1">A sua reserva está garantida.</p>
                </div>

                {/* Resumo */}
                <div className="bg-nollie-dark/60 border border-nollie-gold/20 rounded-xl p-4 text-left space-y-2">
                  {[
                    ["Nome", nome],
                    ["Pessoas", pessoas],
                    ["Data", data],
                    ["Hora", hora],
                    ...(obs ? [["Notas", obs]] : []),
                    ["Sinal pago", sinalPago],
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between text-xs">
                      <span className="text-nollie-cream/50">{label}</span>
                      <span className={`font-medium ${label === "Sinal pago" ? "text-green-400" : "text-nollie-gold"}`}>
                        {val}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleWhatsApp}
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20b358] text-white rounded-xl font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Confirmar via WhatsApp
                </button>
              </div>
            )}

            {/* Navegação (steps 1-5) */}
            {step >= 1 && step <= 5 && (
              <div className={`mt-4 flex ${step > 1 ? "justify-between" : "justify-end"}`}>
                {step > 1 && (
                  <button
                    onClick={() => setStep((s) => (s - 1) as Step)}
                    className="text-sm text-nollie-cream/50 hover:text-nollie-cream transition-colors px-3 py-2"
                  >
                    ← Voltar
                  </button>
                )}
                <button
                  onClick={() => setStep((s) => (s + 1) as Step)}
                  disabled={!canNext()}
                  className="px-5 py-2 bg-nollie-gold disabled:opacity-30 disabled:cursor-not-allowed text-nollie-black text-sm font-medium rounded-xl hover:bg-nollie-gold-light transition-all duration-200 hover:scale-105"
                >
                  {step === 5 ? "Pagar sinal →" : "Próximo →"}
                </button>
              </div>
            )}

            {/* Voltar no step de pagamento */}
            {step === 6 && (
              <div className="mt-3">
                <button
                  onClick={() => setStep(5)}
                  className="text-sm text-nollie-cream/40 hover:text-nollie-cream/70 transition-colors"
                >
                  ← Voltar
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
