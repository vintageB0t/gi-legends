import Image from "next/image";
import { organizador, site } from "@/content/site";

export function Organizador() {
  return (
    <section id="organizador" className="bg-menta px-6 py-20 sm:py-28 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative mx-auto w-full max-w-xs lg:mx-0">
          <div className="relative aspect-[4/5] w-full overflow-hidden shadow-xl shadow-petroleo/20"
            style={{ borderRadius: "58% 42% 46% 54% / 52% 48% 52% 48%" }}>
            <Image
              src="/dr-joao-organizador.jpeg"
              alt="Dr. João Eduardo Nicoluzzi"
              fill
              sizes="(max-width: 1024px) 20rem, 24rem"
              className="object-cover object-top"
            />
          </div>
        </div>

        <div>
          <p className="font-sans text-xs tracking-[0.28em] text-teal">{organizador.eyebrow}</p>
          <h2 className="mt-4 font-sanchez text-3xl text-petroleo sm:text-4xl">
            {organizador.nome}
          </h2>
          <p className="mt-3 font-sans text-sm font-semibold text-petroleo/70">
            {organizador.linhaApoio}
          </p>
          <p className="mt-6 font-sans text-base leading-relaxed text-petroleo/70">
            {organizador.bio}
          </p>

          <div className="mt-8 rounded-2xl border border-petroleo/10 bg-white p-6">
            <p className="font-sans text-xs tracking-[0.28em] text-teal">
              {organizador.experienciaLabel}
            </p>
            <p className="mt-3 font-sans text-sm leading-relaxed text-petroleo/70">
              {organizador.experiencia}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-petroleo/70 hover:text-teal">
              Instagram {site.handle}
            </a>
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="text-petroleo/70 hover:text-teal">
              Facebook {site.handle}
            </a>
            <a href={site.youtube} target="_blank" rel="noopener noreferrer" className="text-petroleo/70 hover:text-teal">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
