"use client";

import Image from "next/image";
import { useState } from "react";
import type { Sessao } from "@/content/site";
import { downloadSessionICS, googleCalendarUrl, trackGoogleAgenda } from "@/lib/ics";

export function SessionCard({ s }: { s: Sessao }) {
  const [imgOk, setImgOk] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const initial = s.speaker.replace(/^Prof\.?\s*/, "").charAt(0);
  const revealed = new Date() >= new Date(s.revealDate);
  const [hh, mm] = s.start.split("T")[1].split(":");
  const horaLabel = mm === "00" ? `${hh}h` : `${hh}h${mm}`;

  return (
    <article className="group rounded-2xl bg-white shadow-sm ring-1 ring-petroleo/10 transition-shadow hover:shadow-lg">
      <div className="relative aspect-[3/4] overflow-hidden rounded-t-2xl bg-menta">
        {revealed && imgOk ? (
          <Image
            src={s.photo}
            alt={`${s.speaker}, ${s.institution}`}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover"
            onError={() => setImgOk(false)}
          />
        ) : (
          // Placeholder enquanto o palestrante não é revelado (ou a foto não foi enviada).
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-sanchez text-7xl text-petroleo/15">
              {revealed ? initial : "?"}
            </span>
          </div>
        )}
        <span className="absolute right-3 top-1 font-sanchez text-5xl text-teal/25">{s.id}</span>
        <span className="absolute bottom-3 left-3 rounded-md bg-petroleo px-3 py-1 font-sans text-xs font-semibold text-teal">
          {s.organ}
        </span>
      </div>
      <div className="p-5">
        {revealed ? (
          <>
            <h3 className="font-sanchez text-lg text-petroleo">{s.speaker}</h3>
            <p className="mt-1 font-sans text-sm text-petroleo/60">
              {s.institution}, {s.city}
            </p>
          </>
        ) : (
          <h3 className="font-sanchez text-lg text-petroleo">
            A ser revelado dia {s.revealDateLabel}
          </h3>
        )}
        <p className="mt-3 font-sans text-sm font-semibold text-petroleo">{s.dateLabel} · {horaLabel}</p>

        <div className="relative mt-4">
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex items-center gap-2 font-sans text-sm text-teal transition-colors hover:text-petroleo"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M8 3v4M16 3v4M3 10h18M12 14v4M10 16h4" />
            </svg>
            Adicionar à agenda
          </button>

          {menuOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
              <div className="absolute left-0 top-full z-20 mt-2 w-48 overflow-hidden rounded-xl border border-petroleo/10 bg-white shadow-lg">
                <a
                  href={googleCalendarUrl(s)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackGoogleAgenda(s);
                    setMenuOpen(false);
                  }}
                  className="block px-4 py-2.5 font-sans text-sm text-petroleo hover:bg-menta"
                >
                  Google Agenda
                </a>
                <button
                  type="button"
                  onClick={() => {
                    downloadSessionICS(s);
                    setMenuOpen(false);
                  }}
                  className="block w-full px-4 py-2.5 text-left font-sans text-sm text-petroleo hover:bg-menta"
                >
                  Apple / Outlook
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </article>
  );
}
