"use client";

import { useEffect, useState } from "react";
import { Logo } from "../Logo";
import { nav, site } from "@/content/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      setHidden(y > 700 && !menuOpen);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[transform,background-color] duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "bg-petroleo shadow-[0_1px_0_rgba(255,255,255,0.06)]" : "bg-transparent"}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" aria-label="Congresso Onco GI Legends 2026, ir ao topo">
          <Logo tone="light" compact />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-sm text-menta/80 transition-colors hover:text-menta"
            >
              {l.label}
            </a>
          ))}
          <a
            href={site.even3Url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-teal px-5 py-2.5 font-sans text-sm font-semibold text-petroleo transition-colors hover:bg-teal/90"
          >
            Inscreva-se
          </a>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={site.even3Url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-teal px-4 py-2 font-sans text-sm font-semibold text-petroleo"
          >
            Inscreva-se
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-menta"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-menta/10 bg-petroleo px-6 pb-6 pt-2 lg:hidden">
          {nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-sans text-menta/80"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
