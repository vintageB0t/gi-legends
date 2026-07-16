import { Header } from "@/components/sections/Header";
import { StickyCta } from "@/components/sections/StickyCta";
import { Hero } from "@/components/sections/Hero";
import { CredentialBar } from "@/components/sections/CredentialBar";
import { OCongresso } from "@/components/sections/OCongresso";
import { Programacao } from "@/components/sections/Programacao";
import { Instituicoes } from "@/components/sections/Instituicoes";
import { Apoiadores } from "@/components/sections/Apoiadores";
import { ParaQuem } from "@/components/sections/ParaQuem";
import { Organizador } from "@/components/sections/Organizador";
import { Vip } from "@/components/sections/Vip";
import { Certificado } from "@/components/sections/Certificado";
import { Faq } from "@/components/sections/Faq";
import { Inscricao } from "@/components/sections/Inscricao";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <StickyCta />
      <main>
        <Hero />
        <CredentialBar />
        <OCongresso />
        <Programacao />
        <Vip />
        <Instituicoes />
        <ParaQuem />
        <Organizador />
        <Certificado />
        <Faq />
        <Inscricao />
        <Apoiadores />
      </main>
      <Footer />
    </>
  );
}
