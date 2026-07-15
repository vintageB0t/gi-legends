import { instituicoes } from "@/content/site";

export function Instituicoes() {
  return (
    <section className="bg-white px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="font-sans text-xs tracking-[0.28em] text-petroleo/50">
          {instituicoes.label}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {instituicoes.nomes.map((n) => (
            <span
              key={n}
              className="font-sanchez text-base text-petroleo/40 sm:text-lg"
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
