/**
 * Lockup do evento: CONGRESSO ONCO / GIlegends / 2026.
 * "GI" em Sanchez teal, "legends" em Instrument Serif itálico.
 * Versão para fundo escuro por padrão (tone="light").
 */
export function Logo({
  tone = "light",
  compact = false,
}: {
  tone?: "light" | "dark";
  compact?: boolean;
}) {
  const legendsColor = tone === "light" ? "text-menta" : "text-petroleo";
  const framing = tone === "light" ? "text-menta/70" : "text-petroleo/60";

  return (
    <span className="inline-flex flex-col leading-none">
      {!compact && (
        <span className={`font-sans text-[0.6rem] tracking-[0.32em] ${framing}`}>
          CONGRESSO ONCO
        </span>
      )}
      <span className={compact ? "mt-0" : "mt-1"}>
        <span className="font-sanchez text-teal" style={{ fontSize: compact ? 22 : 30 }}>
          GI
        </span>
        <span
          className={`font-instrument italic ${legendsColor}`}
          style={{ fontSize: compact ? 23 : 31, marginLeft: 1 }}
        >
          legends
        </span>
      </span>
      {!compact && (
        <span className={`font-sans text-[0.6rem] tracking-[0.4em] ${framing}`}>2026</span>
      )}
    </span>
  );
}
