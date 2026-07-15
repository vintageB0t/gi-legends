import { SectionTitle } from "../SectionTitle";
import { SessionCard } from "../SessionCard";
import { programacao, sessoes } from "@/content/site";

export function Programacao() {
  return (
    <section id="programacao" className="bg-menta px-6 py-20 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <SectionTitle
            eyebrow={programacao.eyebrow}
            pre={programacao.titlePre}
            highlight={programacao.titleHighlight}
            post={programacao.titlePost}
          />
          <p className="mt-6 font-sans text-base leading-relaxed text-petroleo/70">
            {programacao.paragraph}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sessoes.map((s) => (
            <SessionCard key={s.id} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
