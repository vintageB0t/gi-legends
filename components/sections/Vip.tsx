import { vip } from "@/content/site";

export function Vip() {
  return (
    <section className="relative overflow-hidden bg-teal px-6 py-20 sm:py-24 lg:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[length:220px_220px] bg-repeat"
        style={{ backgroundImage: "url('/pattern-stethoscope.svg')" }}
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="font-sans text-xs tracking-[0.28em] text-petroleo/70">{vip.eyebrow}</p>
        <h2 className="mt-4 font-sanchez text-3xl text-petroleo sm:text-4xl">
          {vip.titlePre}
          <em className="font-instrument italic text-white">{vip.titleHighlight}</em>
          {vip.titlePost}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-petroleo/80">
          {vip.paragraph}
        </p>
        <a
          href="#inscricao"
          className="mt-8 inline-flex rounded-xl bg-petroleo px-8 py-4 font-sans text-base font-semibold text-menta transition-transform hover:-translate-y-0.5"
        >
          {vip.cta}
        </a>
      </div>
    </section>
  );
}
