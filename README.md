# Congresso Onco GI Legends 2026

Landing page de conversão do Congresso Onco GI Legends 2026, série de seis aulas online de oncologia digestiva organizada pelo Dr. João Eduardo Nicoluzzi.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · React 19.

## Comandos

```bash
npm run dev     # ambiente de desenvolvimento (porta 3000)
npm run build   # build de produção
npm start       # servir o build
```

## Estrutura

- `content/site.ts` — todo o texto do site, centralizado. Edite aqui para trocar qualquer copy, datas ou os dados das sessões.
- `tailwind.config.ts` — tokens da marca (`petroleo`, `teal`, `menta`) e fontes. Carregado pelo Tailwind v4 via `@config` em `app/globals.css`.
- `components/sections/` — uma seção da página por arquivo, na ordem em que aparecem.
- `components/` — peças reutilizáveis (`Logo`, `SectionTitle`, `SessionCard`).
- `lib/analytics.ts` — disparo dos eventos de conversão da própria landing.
- `lib/ics.ts` — geração dos arquivos `.ics` (adicionar à agenda).
- `app/page.tsx` — a landing (página única).

## Trocar as fotos dos palestrantes

Os cards da programação usam um placeholder cinza com a inicial do nome enquanto a foto não existe. Para colocar a foto real:

1. Salve a imagem em `public/palestrantes/` com o nome já definido em `content/site.ts` (campo `photo`):
   - `01-nafteux.jpg`, `02-nunobe.jpg`, `03-adam.jpg`, `04-pinto-marques.jpg`, `05-buchler.jpg`, `06-parc.jpg`.
2. Use retrato vertical (proporção próxima de 3:4). O card já corta e enquadra automaticamente.

Assim que o arquivo existe, o card mostra a foto no lugar do placeholder, sem mexer no código.

A foto do organizador (hero e seção "Quem organiza") fica em `public/dr-joao.jpg`.

## Inscrição (Even3)

A inscrição é feita na plataforma Even3. Todos os botões de inscrição do site abrem a mesma URL, definida em um único lugar: o campo `even3Url` em `content/site.ts`. Troque o placeholder pela URL real da página do evento no Even3 e todos os CTAs atualizam juntos (abrem em nova aba).

## Rastreamento (pixel)

`lib/analytics.ts` centraliza o `track()` para receber o pixel. A landing dispara `agenda_adicionada` (botão "Adicionar à agenda"). A conclusão da inscrição acontece no Even3 e deve ser rastreada por lá.

## Pendências conhecidas

- URL real da inscrição no Even3 (`even3Url` em `content/site.ts` está com placeholder).
- Fotos dos seis palestrantes (placeholders por enquanto).
- Respostas do FAQ marcadas como `{{RESPOSTA}}` em `content/site.ts`.
- Foto do Dr. João sem fundo removido: se um PNG recortado for fornecido, o hero fica mais limpo sobre o blob teal.
- A estampa de estetoscópio é um desenho de linha próprio (o padrão original da marca não estava disponível).
