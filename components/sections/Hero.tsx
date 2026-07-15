import { hero, site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-petroleo text-menta"
    >
      {/* estampa de estetoscópio, baixíssima opacidade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[length:220px_220px] bg-repeat"
        style={{ backgroundImage: "url('/pattern-stethoscope.svg')" }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-28 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8 lg:pb-40 lg:pt-40">
        {/* Coluna de texto */}
        <div className="max-w-xl">
          <p className="font-sans text-xs tracking-[0.28em] text-teal">{hero.eyebrow}</p>

          <h1 className="mt-6 font-sanchez text-4xl leading-[1.08] text-white sm:text-5xl lg:text-[3.75rem]">
            {hero.titlePre}
            <em className="font-instrument italic text-teal">{hero.titleHighlight}</em>
            {hero.titlePost}
          </h1>

          <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-menta/80 sm:text-lg">
            {hero.paragraph}
          </p>

          <div className="mt-9 flex flex-col items-start gap-3">
            <a
              href={site.even3Url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-teal px-8 py-4 font-sans text-base font-semibold text-petroleo shadow-lg shadow-black/20 transition-colors hover:bg-teal/90"
            >
              {hero.ctaPrimary}
            </a>
            <p className="font-sans text-sm text-menta/70">{hero.microcopy}</p>
          </div>
        </div>

        {/* Coluna da foto sobre blob teal */}
        <div className="mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 bg-teal/90"
              style={{ borderRadius: "62% 38% 44% 56% / 54% 46% 54% 46%" }}
            />
            <div
              className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl shadow-black/30"
              style={{ borderRadius: "62% 38% 44% 56% / 54% 46% 54% 46%" }}
            >
              <video
                src="/dr-joao-hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                aria-label={hero.fotoAlt}
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </div>
          </div>
          <p className="mt-6 text-center font-sanchez text-base text-menta">
            Dr. João Eduardo Nicoluzzi
          </p>
        </div>
      </div>

      {/* transição diagonal para a faixa branca das credenciais */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-16 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 40%, 0 100%)" }}
      />
      <span className="sr-only">{site.periodo}</span>
    </section>
  );
}
