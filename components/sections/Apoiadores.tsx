import Image from "next/image";
import { apoiadores } from "@/content/site";

export function Apoiadores() {
  return (
    <section className="bg-petroleo px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="font-sans text-sm tracking-[0.28em] text-teal">
          {apoiadores.label}
        </p>
        <div className="mt-12 flex justify-center">
          <Image
            src={apoiadores.logo}
            alt={apoiadores.logoAlt}
            width={4829}
            height={670}
            className="h-auto w-full max-w-3xl"
          />
        </div>
      </div>
    </section>
  );
}
