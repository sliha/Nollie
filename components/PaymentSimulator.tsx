"use client";

import { useState } from "react";

interface Props {
  pessoas: string;
  /** compact=true para o widget flutuante (espaço reduzido) */
  compact?: boolean;
  onSuccess: (sinal: string) => void;
}

const SINAL = 5;

function VisaIcon() {
  return (
    <svg viewBox="0 0 50 16" className="h-5 w-auto" fill="none">
      <text x="0" y="13" fontFamily="Arial" fontWeight="bold" fontSize="14" fill="#1a1f71">VISA</text>
    </svg>
  );
}

function MastercardIcon() {
  return (
    <svg viewBox="0 0 38 24" className="h-5 w-auto">
      <circle cx="13" cy="12" r="10" fill="#EB001B" />
      <circle cx="25" cy="12" r="10" fill="#F79E1B" />
      <path d="M19 5.8a10 10 0 0 1 0 12.4A10 10 0 0 1 19 5.8z" fill="#FF5F00" />
    </svg>
  );
}

function Spinner() {
  return (
    <svg className="animate-spin h-5 w-5 text-nollie-black" viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
    </svg>
  );
}

export default function PaymentSimulator({ pessoas, compact = false, onSuccess }: Props) {
  const num = parseInt(pessoas) || 1;
  const total = num * SINAL;
  const totalStr = `€${total},00`;

  const [tab, setTab] = useState<"cartao" | "mbway">("cartao");
  const [loading, setLoading] = useState(false);

  // Cartão
  const [cardNum, setCardNum] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardName, setCardName] = useState("");

  // MBWay
  const [phone, setPhone] = useState("");

  function fmtCard(v: string) {
    return v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
  }
  function fmtExpiry(v: string) {
    const d = v.replace(/\D/g, "").slice(0, 4);
    return d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d;
  }
  function fmtPhone(v: string) {
    const d = v.replace(/\D/g, "").slice(0, 9);
    return d.replace(/^(\d{3})(\d{3})/, "$1 $2 ").trim();
  }

  const cardValid =
    cardNum.replace(/\s/g, "").length === 16 &&
    expiry.length === 5 &&
    cvv.length >= 3 &&
    cardName.trim().length > 0;
  const mbwayValid = phone.replace(/\s/g, "").length >= 9;
  const canPay = loading ? false : tab === "cartao" ? cardValid : mbwayValid;

  function handlePay() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess(totalStr);
    }, 2000);
  }

  const inputCls = `w-full bg-nollie-black/50 border border-nollie-gold/20 focus:border-nollie-gold rounded-xl px-4 py-3 text-nollie-cream placeholder-nollie-cream/25 focus:outline-none transition-colors text-sm`;
  const labelCls = "text-nollie-cream/60 text-xs font-medium tracking-wide block mb-1.5";

  return (
    <div className={`space-y-4 ${compact ? "" : ""}`}>
      {/* Sinal info */}
      <div className="bg-nollie-black/60 border border-nollie-gold/20 rounded-xl p-4 text-center">
        <p className="text-nollie-cream/60 text-xs mb-1">
          Para confirmar a sua reserva é necessário um sinal
        </p>
        <p className="text-nollie-cream/80 text-sm">
          €{SINAL},00 × {num} {num === 1 ? "pessoa" : "pessoas"}
        </p>
        <p
          className="font-playfair text-nollie-gold mt-1"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: compact ? 20 : 24, fontWeight: 600 }}
        >
          Total do sinal: {totalStr}
        </p>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 gap-1 bg-nollie-black/60 p-1 rounded-xl border border-nollie-gold/10">
        {(["cartao", "mbway"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`py-2.5 rounded-lg text-xs font-medium transition-all duration-200 ${
              tab === t
                ? "bg-nollie-gold text-nollie-black shadow-md"
                : "text-nollie-cream/50 hover:text-nollie-cream"
            }`}
          >
            {t === "cartao" ? "💳 Cartão de Crédito" : "📱 MBWay"}
          </button>
        ))}
      </div>

      {/* Cartão */}
      {tab === "cartao" && (
        <div className="space-y-3">
          {/* Card icons */}
          <div className="flex items-center justify-end gap-3 px-1">
            <VisaIcon />
            <MastercardIcon />
          </div>

          <div>
            <label className={labelCls}>Número do cartão</label>
            <input
              type="text"
              inputMode="numeric"
              value={cardNum}
              onChange={(e) => setCardNum(fmtCard(e.target.value))}
              placeholder="4242 4242 4242 4242"
              maxLength={19}
              className={inputCls}
            />
          </div>

          <div className={`grid gap-3 ${compact ? "grid-cols-2" : "grid-cols-2"}`}>
            <div>
              <label className={labelCls}>Validade</label>
              <input
                type="text"
                inputMode="numeric"
                value={expiry}
                onChange={(e) => setExpiry(fmtExpiry(e.target.value))}
                placeholder="MM/AA"
                maxLength={5}
                className={inputCls}
              />
            </div>
            <div>
              <label className={labelCls}>CVV</label>
              <input
                type="text"
                inputMode="numeric"
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
                placeholder="123"
                maxLength={4}
                className={inputCls}
              />
            </div>
          </div>

          <div>
            <label className={labelCls}>Nome no cartão</label>
            <input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value.toUpperCase())}
              placeholder="NOME APELIDO"
              className={inputCls}
            />
          </div>
        </div>
      )}

      {/* MBWay */}
      {tab === "mbway" && (
        <div className="space-y-3">
          <div>
            <label className={labelCls}>Número de telemóvel</label>
            <input
              type="tel"
              inputMode="numeric"
              value={phone}
              onChange={(e) => setPhone(fmtPhone(e.target.value))}
              placeholder="9XX XXX XXX"
              maxLength={11}
              className={inputCls}
            />
          </div>
          <div className="bg-nollie-black/40 border border-nollie-gold/10 rounded-xl p-3.5">
            <div className="flex items-start gap-3">
              <span className="text-xl mt-0.5">📲</span>
              <p className="text-nollie-cream/60 text-xs leading-relaxed">
                Após clicar em &ldquo;Enviar pedido MBWay&rdquo;, receberá uma notificação no seu
                telemóvel para confirmar o pagamento de <span className="text-nollie-gold">{totalStr}</span>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Pay button */}
      <button
        onClick={handlePay}
        disabled={!canPay}
        className={`w-full py-3.5 rounded-xl font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2
          ${canPay
            ? "bg-nollie-gold hover:bg-nollie-gold-light text-nollie-black hover:scale-[1.02] shadow-lg shadow-nollie-gold/20"
            : "bg-nollie-gold/30 text-nollie-black/50 cursor-not-allowed"
          }`}
      >
        {loading ? (
          <>
            <Spinner />
            <span>A processar pagamento...</span>
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            {tab === "cartao"
              ? `Pagar ${totalStr} e Confirmar Reserva`
              : `Enviar pedido MBWay ${totalStr}`}
          </>
        )}
      </button>

      <p className="text-center text-nollie-cream/25 text-xs flex items-center justify-center gap-1">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        Pagamento seguro e encriptado
      </p>
    </div>
  );
}
