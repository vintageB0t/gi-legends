"use client";

import type { ReactNode } from "react";
import { site } from "@/content/site";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Link para a inscrição no Even3. Centraliza o disparo do evento
 * Meta Pixel "Lead" no clique, com guarda de client-side.
 */
export function Even3Cta({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={site.even3Url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => {
        if (typeof window !== "undefined" && typeof window.fbq === "function") {
          window.fbq("track", "Lead");
        }
      }}
    >
      {children}
    </a>
  );
}
