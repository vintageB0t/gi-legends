/**
 * Eventos de conversão. Conecte aqui o seu pixel / gtag / dataLayer.
 * A inscrição em si acontece na Even3 (fora do site) e deve ser rastreada
 * por lá; aqui disparamos os eventos que ocorrem na própria landing.
 */
export type AnalyticsEvent = "agenda_adicionada";

export function track(event: AnalyticsEvent, payload?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  // TODO: plugue o rastreamento aqui. Exemplos:
  //   window.gtag?.("event", event, payload);
  //   window.fbq?.("trackCustom", event, payload);
  //   window.dataLayer?.push({ event, ...payload });

  if (process.env.NODE_ENV !== "production") {
    console.debug("[analytics]", event, payload ?? {});
  }
}
