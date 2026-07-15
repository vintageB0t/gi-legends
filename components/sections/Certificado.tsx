import { SectionTitle } from "../SectionTitle";
import { certificado } from "@/content/site";

export function Certificado() {
  return (
    <section className="bg-white px-6 py-20 sm:py-28 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Mockup do certificado */}
        <div className="relative">
          <div className="relative rounded-xl border border-petroleo/15 bg-menta/40 p-8 shadow-lg shadow-petroleo/10">
            <div className="rounded-lg border border-petroleo/20 bg-white p-8 text-center">
              <p className="font-sans text-[0.6rem] tracking-[0.32em] text-petroleo/50">CERTIFICADO</p>
              <div className="mt-3">
                <span className="font-sanchez text-2xl text-teal">GI</span>
                <span className="font-instrument text-2xl italic text-petroleo">legends</span>
              </div>
              <p className="mx-auto mt-5 max-w-xs font-sans text-xs leading-relaxed text-petroleo/60">
                Certificamos a participação no Congresso Onco GI Legends 2026, com carga horária de
                7h30 distribuídas em seis sessões.
              </p>
              <div className="mx-auto mt-6 h-px w-32 bg-petroleo/20" />
              <p className="mt-2 font-sans text-[0.65rem] text-petroleo/50">
                Dr. João Eduardo Nicoluzzi
              </p>
            </div>
            {/* selo VIP */}
            <div className="absolute -bottom-4 -right-4 flex h-20 w-20 rotate-6 items-center justify-center rounded-full bg-teal text-center shadow-lg">
              <span className="font-sans text-[0.6rem] font-bold leading-tight text-petroleo">
                SELO
                <br />
                VIP
              </span>
            </div>
          </div>
        </div>

        <div>
          <SectionTitle
            eyebrow={certificado.eyebrow}
            pre={certificado.titlePre}
            highlight={certificado.titleHighlight}
            post={certificado.titlePost}
          />
          <p className="mt-6 font-sans text-base leading-relaxed text-petroleo/70">
            {certificado.paragraph}
          </p>
        </div>
      </div>
    </section>
  );
}
