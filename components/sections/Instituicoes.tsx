import Image from "next/image";
import { instituicoes } from "@/content/site";

export function Instituicoes() {
  const logos = [...instituicoes.nomes, ...instituicoes.nomes];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
        <p className="font-sans text-xs tracking-[0.28em] text-petroleo/50">
          {instituicoes.label}
        </p>
      </div>

      <div
        className="mt-8 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="marquee-track flex w-max items-center gap-16">
          {logos.map((inst, i) => (
            <div
              key={`${inst.nome}-${i}`}
              className="flex h-12 w-40 shrink-0 items-center justify-center grayscale"
              title={inst.nome}
            >
              <Image
                src={inst.logo}
                alt={inst.nome}
                width={160}
                height={48}
                className="max-h-12 w-auto object-contain opacity-60"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
