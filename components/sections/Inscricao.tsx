import { inscricao, site } from "@/content/site";

export function Inscricao() {
  return (
    <section id="inscricao" className="relative overflow-hidden bg-petroleo px-6 py-20 sm:py-28 lg:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[length:220px_220px] bg-repeat"
        style={{ backgroundImage: "url('/pattern-stethoscope.svg')" }}
      />
      <div className="relative mx-auto max-w-2xl text-center">
        <p className="font-sans text-xs tracking-[0.28em] text-teal">{inscricao.eyebrow}</p>
        <h2 className="mt-4 font-sanchez text-3xl text-white sm:text-4xl">
          {inscricao.titlePre}
          <em className="font-instrument italic text-teal">{inscricao.titleHighlight}</em>
          {inscricao.titlePost}
        </h2>
        <p className="mx-auto mt-6 max-w-lg font-sans text-base leading-relaxed text-menta/80">
          {inscricao.paragraph}
        </p>

        <a
          href={site.even3Url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-xl bg-teal px-10 py-4 font-sans text-base font-semibold text-petroleo shadow-lg shadow-black/20 transition-colors hover:bg-teal/90"
        >
          {inscricao.cta}
        </a>

        <p className="mt-5 font-sans text-sm text-menta/70">{inscricao.microcopy}</p>
        <p className="mt-2 font-sans text-xs text-menta/50">
          A inscrição abre em uma nova aba, na plataforma Even3.
        </p>
      </div>
    </section>
  );
}
