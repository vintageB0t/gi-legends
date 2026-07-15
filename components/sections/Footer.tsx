import { Logo } from "../Logo";
import { footer, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-[#0a1e1e] px-6 py-14 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_1fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-4 max-w-sm font-sans text-sm leading-relaxed text-menta/60">
            {footer.aviso}
          </p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <p className="font-sans text-sm text-menta/80">{site.periodo}</p>
          <p className="font-sans text-sm text-menta/60">{site.horario}</p>
          <div className="flex gap-5 font-sans text-sm">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-menta/80 hover:text-teal">
              Instagram
            </a>
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="text-menta/80 hover:text-teal">
              Facebook
            </a>
            <a href={site.youtube} target="_blank" rel="noopener noreferrer" className="text-menta/80 hover:text-teal">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
