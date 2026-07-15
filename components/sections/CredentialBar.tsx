import { credenciais } from "@/content/site";

const icons = [
  // 5 edições — calendário
  <svg key="cal" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" /></svg>,
  // +6.000 médicos — pessoas
  <svg key="users" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 19v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1" /><circle cx="9" cy="7" r="3" /><path d="M22 19v-1a4 4 0 0 0-3-3.87M16 4.13a4 4 0 0 1 0 7.75" /></svg>,
  // +1.200 inscritos — usuário confirmado
  <svg key="check" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M15 19v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1" /><circle cx="8.5" cy="7" r="3" /><path d="M16 11l2 2 4-4" /></svg>,
  // 6 palestrantes — globo
  <svg key="globe" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" /></svg>,
];

export function CredentialBar() {
  return (
    <div className="relative z-10 mx-auto -mt-16 max-w-5xl px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-menta/60 shadow-xl shadow-petroleo/10 ring-1 ring-petroleo/5 lg:grid-cols-4">
        {credenciais.map((c, i) => (
          <div key={c.valor} className="flex flex-col items-center bg-white px-6 py-8 text-center">
            <span className="text-teal">{icons[i]}</span>
            <span className="mt-3 font-sanchez text-2xl text-petroleo">{c.valor}</span>
            <span className="mt-1 font-sans text-xs leading-snug text-petroleo/60">{c.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
