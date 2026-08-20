"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { Even3Cta } from "../Even3Cta";

export function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-center gap-4 bg-teal px-4 py-2.5 text-petroleo">
        <span className="font-sans text-sm font-semibold">
          {site.periodoCurto} · Seis aulas ao vivo
        </span>
        <Even3Cta className="rounded-lg bg-petroleo px-4 py-1.5 font-sans text-sm font-semibold text-menta">
          Inscreva-se
        </Even3Cta>
      </div>
    </div>
  );
}
