import Image from "next/image";
import { apoiadores } from "@/content/site";

export function Apoiadores() {
  return (
    <section className="bg-petroleo px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="font-sans text-sm tracking-[0.28em] text-teal">
          {apoiadores.label}
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-24 gap-y-16">
          {apoiadores.nomes.map((a) => {
            const isAstraZeneca = a.nome === "AstraZeneca";
            return (
              <div
                key={a.nome}
                className={
                  isAstraZeneca
                    ? "flex h-48 w-[32rem] items-center justify-center sm:h-56 sm:w-[36rem]"
                    : "flex h-36 w-96 items-center justify-center sm:h-44 sm:w-[28rem]"
                }
              >
                <Image
                  src={a.logo}
                  alt={a.nome}
                  width={isAstraZeneca ? 576 : 448}
                  height={isAstraZeneca ? 224 : 176}
                  className={
                    isAstraZeneca
                      ? "max-h-48 w-auto object-contain sm:max-h-56"
                      : "max-h-36 w-auto object-contain sm:max-h-44"
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
