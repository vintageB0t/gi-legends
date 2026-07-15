import { SectionTitle } from "../SectionTitle";
import { oCongresso } from "@/content/site";

export function OCongresso() {
  return (
    <section id="o-congresso" className="bg-white px-6 py-20 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <SectionTitle
            eyebrow={oCongresso.eyebrow}
            pre={oCongresso.titlePre}
            highlight={oCongresso.titleHighlight}
            post={oCongresso.titlePost}
          />
          <p className="mt-6 font-sans text-base leading-relaxed text-petroleo/70 sm:text-lg">
            {oCongresso.paragraph}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {oCongresso.cards.map((c) => (
            <div key={c.titulo} className="rounded-2xl border border-teal/40 p-6">
              <h3 className="font-sanchez text-xl text-petroleo">{c.titulo}</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-petroleo/70">{c.texto}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="#programacao"
            className="inline-flex rounded-xl border-2 border-teal px-6 py-3 font-sans text-sm font-semibold text-petroleo transition-colors hover:bg-menta"
          >
            {oCongresso.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
