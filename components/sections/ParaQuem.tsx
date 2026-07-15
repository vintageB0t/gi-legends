import { SectionTitle } from "../SectionTitle";
import { paraQuemE } from "@/content/site";

export function ParaQuem() {
  return (
    <section className="relative overflow-hidden bg-petroleo px-6 py-20 sm:py-28 lg:px-8">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 bottom-0 select-none font-instrument italic leading-none text-transparent"
        style={{ fontSize: "clamp(6rem, 16vw, 15rem)", WebkitTextStroke: "1px rgba(0,191,166,0.15)" }}
      >
        legends
      </span>
      <div className="relative mx-auto max-w-3xl">
        <SectionTitle
          eyebrow={paraQuemE.eyebrow}
          pre={paraQuemE.titlePre}
          highlight={paraQuemE.titleHighlight}
          post={paraQuemE.titlePost}
          tone="light"
        />
        <p className="mt-6 font-sans text-base leading-relaxed text-menta/80 sm:text-lg">
          {paraQuemE.paragraph}
        </p>
      </div>
    </section>
  );
}
