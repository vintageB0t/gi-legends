import type { Sessao } from "@/content/site";
import { track } from "./analytics";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

// Converte horário local de São Paulo (UTC-3, sem horário de verão em 2026) para UTC.
function toUTC(local: string) {
  const [datePart, timePart] = local.split("T");
  const [y, m, d] = datePart.split("-").map(Number);
  const [hh, mm, ss] = timePart.split(":").map(Number);
  const utc = new Date(Date.UTC(y, m - 1, d, hh + 3, mm, ss || 0));
  return `${utc.getUTCFullYear()}${pad(utc.getUTCMonth() + 1)}${pad(utc.getUTCDate())}T${pad(
    utc.getUTCHours(),
  )}${pad(utc.getUTCMinutes())}${pad(utc.getUTCSeconds())}Z`;
}

function isRevealed(s: Sessao) {
  return new Date() >= new Date(s.revealDate);
}

function eventTitle(s: Sessao) {
  const revealed = isRevealed(s);
  return `GI Legends 2026 — ${s.organ}${revealed ? ` — ${s.speaker}` : ""}`;
}

function eventDetails(s: Sessao) {
  const revealed = isRevealed(s);
  const quem = revealed ? `${s.institution}, ${s.city}. ` : "";
  return `${quem}Via Zoom com transmissão no YouTube @medicodofigado.`;
}

function vevent(s: Sessao) {
  return [
    "BEGIN:VEVENT",
    `UID:gilegends-2026-${s.slug}@medicodofigado`,
    `DTSTAMP:${toUTC("2026-01-01T00:00:00")}`,
    `DTSTART:${toUTC(s.start)}`,
    `DTEND:${toUTC(s.end)}`,
    `SUMMARY:${eventTitle(s)}`,
    `DESCRIPTION:${eventDetails(s)}`,
    "END:VEVENT",
  ].join("\r\n");
}

function buildICS(sessoes: Sessao[]) {
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//GI Legends 2026//PT-BR",
    "CALSCALE:GREGORIAN",
    ...sessoes.map(vevent),
    "END:VCALENDAR",
  ].join("\r\n");
}

function download(content: string, filename: string) {
  if (typeof document === "undefined") return;
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export function downloadSessionICS(s: Sessao) {
  download(buildICS([s]), `gi-legends-${s.slug}.ics`);
  track("agenda_adicionada", { sessao: s.slug, destino: "ics" });
}

export function googleCalendarUrl(s: Sessao) {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: eventTitle(s),
    dates: `${toUTC(s.start)}/${toUTC(s.end)}`,
    details: eventDetails(s),
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function trackGoogleAgenda(s: Sessao) {
  track("agenda_adicionada", { sessao: s.slug, destino: "google" });
}
