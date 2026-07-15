"use client";

import { useState } from "react";
import { faq } from "@/content/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-menta px-6 py-20 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="font-sans text-xs tracking-[0.28em] text-teal">{faq.eyebrow}</p>
        <h2 className="mt-4 font-sanchez text-3xl text-petroleo sm:text-4xl">
          Ainda com <em className="font-instrument italic text-teal">dúvidas</em>?
        </h2>

        <div className="mt-10 divide-y divide-petroleo/10 border-y border-petroleo/10">
          {faq.itens.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.pergunta}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-sans text-base font-semibold text-petroleo">
                    {item.pergunta}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className={`shrink-0 text-teal transition-transform ${isOpen ? "rotate-45" : ""}`}
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
                {isOpen && (
                  <p className="pb-5 font-sans text-sm leading-relaxed text-petroleo/70">
                    {item.resposta}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
