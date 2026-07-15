/**
 * GI Legends 2026 — conteúdo do site.
 * Todo o texto vive aqui para edição fácil, sem tocar nos componentes.
 */

export const site = {
  nome: "Congresso Onco GI Legends 2026",
  periodo: "15 de setembro a 27 de outubro de 2026",
  periodoCurto: "15/09 a 27/10",
  horario: "Terças-feiras, das 19h às 20h15",
  instagram: "https://instagram.com/medicodofigado",
  facebook: "https://facebook.com/medicodofigado",
  youtube: "https://www.youtube.com/@Dr.Jo%C3%A3oEduardoNicoluzzi",
  handle: "@medicodofigado",
  // TODO: trocar pela URL real da página de inscrição no Even3.
  even3Url: "https://www.even3.com.br/gi-legends-2026",
};

export const nav = [
  { label: "O congresso", href: "#o-congresso" },
  { label: "Programação", href: "#programacao" },
  { label: "Organizador", href: "#organizador" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "15 DE SETEMBRO A 27 DE OUTUBRO DE 2026",
  titlePre: "As maiores ",
  titleHighlight: "autoridades mundiais",
  titlePost: " em oncologia digestiva, em seis encontros",
  paragraph:
    "Seis aulas semanais ao vivo, sempre às terças, das 19h às 20h15. Palestrantes internacionais discutindo caso a caso com debatedores brasileiros. Transmissão via Zoom e YouTube.",
  ctaPrimary: "Garantir minha vaga",
  microcopy: "Participação gratuita · Vagas limitadas · Certificado com carga horária",
  fotoAlt: "Dr. João Eduardo Nicoluzzi, organizador do Congresso Onco GI Legends 2026",
};

export const credenciais = [
  { valor: "5 edições", label: "realizadas  desde 2021" },
  { valor: "+6.000", label: "médicos já participaram" },
  { valor: "+1.400", label: "inscritos por edição" },
  { valor: "6 palestrantes", label: "de referência mundial" },
];

export const oCongresso = {
  eyebrow: "O QUE VOCÊ VAI VER",
  titlePre: "Aula com autoridade internacional, ",
  titleHighlight: "debates aprofundados",
  titlePost: " logo em seguida.",
  paragraph:
    "Cada encontro tem 45 minutos de aula com o palestrante internacional, seguidos de 30 minutos de discussão com os debatedor brasileiros.",
  cards: [
    {
      titulo: "Autoridades mundiais",
      texto: "Cada aula traz um nome de referência internacional na sua área de atuação.",
    },
    {
      titulo: "Discussão multidisciplinar",
      texto: "Especialistas debatendo o mesmo caso, lado a lado.",
    },
    {
      titulo: "Uma hora e quinze",
      texto: "Um formato que respeita a agenda de quem opera.",
    },
  ],
  cta: "Ver a programação completa",
};

export type Sessao = {
  id: string;
  organ: string;
  speaker: string;
  institution: string;
  city: string;
  dateLabel: string;
  start: string; // horário local America/Sao_Paulo
  end: string;
  photo: string;
  slug: string;
  revealDate: string; // data em que o palestrante é revelado (ISO)
  revealDateLabel: string;
};

export const sessoes: Sessao[] = [
  {
    id: "01",
    organ: "Esôfago",
    speaker: "Prof. Philippe Nafteux",
    institution: "University Hospital Leuven",
    city: "Bélgica",
    dateLabel: "15/09/2026",
    start: "2026-09-15T19:00:00",
    end: "2026-09-15T20:15:00",
    photo: "/palestrantes/01-nafteux.jpg",
    slug: "nafteux",
    revealDate: "2026-07-20",
    revealDateLabel: "20/07",
  },
  {
    id: "02",
    organ: "Estômago + Perioperatório",
    speaker: "Prof. Souya Nunobe",
    institution: "Cancer Institute Hospital",
    city: "Tóquio, Japão",
    dateLabel: "22/09/2026",
    start: "2026-09-22T19:00:00",
    end: "2026-09-22T20:15:00",
    photo: "/palestrantes/02-nunobe.jpg",
    slug: "nunobe",
    revealDate: "2026-07-22",
    revealDateLabel: "22/07",
  },
  {
    id: "03",
    organ: "Fígado",
    speaker: "Prof. René Adam",
    institution: "Hôpital Paul Brousse",
    city: "Paris, França",
    dateLabel: "29/09/2026",
    start: "2026-09-29T19:00:00",
    end: "2026-09-29T20:15:00",
    photo: "/palestrantes/03-adam.jpg",
    slug: "adam",
    revealDate: "2026-07-24",
    revealDateLabel: "24/07",
  },
  {
    id: "04",
    organ: "Vias biliares",
    speaker: "Prof. Hugo Pinto Marques",
    institution: "Hospital Curry Cabral",
    city: "Lisboa, Portugal",
    dateLabel: "06/10/2026",
    start: "2026-10-06T19:00:00",
    end: "2026-10-06T20:15:00",
    photo: "/palestrantes/04-pinto-marques.jpg",
    slug: "pinto-marques",
    revealDate: "2026-07-27",
    revealDateLabel: "27/07",
  },
  {
    id: "05",
    organ: "Pâncreas",
    speaker: "Prof. Markus Büchler",
    institution: "Universität Heidelberg",
    city: "Heidelberg, Alemanha",
    dateLabel: "20/10/2026",
    start: "2026-10-20T19:00:00",
    end: "2026-10-20T20:15:00",
    photo: "/palestrantes/05-buchler.jpg",
    slug: "buchler",
    revealDate: "2026-07-29",
    revealDateLabel: "29/07",
  },
  {
    id: "06",
    organ: "Cólon e reto",
    speaker: "Prof. Yann Parc",
    institution: "Hôpital Saint-Antoine",
    city: "Paris, França",
    dateLabel: "27/10/2026",
    start: "2026-10-27T19:00:00",
    end: "2026-10-27T20:15:00",
    photo: "/palestrantes/06-parc.jpg",
    slug: "parc",
    revealDate: "2026-07-31",
    revealDateLabel: "31/07",
  },
];

export const programacao = {
  eyebrow: "PROGRAMAÇÃO",
  titlePre: "Seis terças, ",
  titleHighlight: "seis autoridades",
  titlePost: ".",
  paragraph:
    "Todas as sessões às 19h, com término às 20h15. Cada semana traz uma área do trato digestivo e o nome de referência mundial no tema.",
};

export const instituicoes = {
  label: "PALESTRANTES VINDOS DE",
  nomes: [
    "University Hospital Leuven",
    "Cancer Institute Hospital, Tóquio",
    "Hôpital Paul Brousse, Paris",
    "Hospital Curry Cabral, Lisboa",
    "Universität Heidelberg",
    "Hôpital Saint-Antoine, Paris",
  ],
};

export const paraQuemE = {
  eyebrow: "PARA QUEM É",
  titlePre: "Feito para quem trata ",
  titleHighlight: "câncer do aparelho digestivo",
  titlePost: "",
  paragraph:
    "Cirurgiões oncológicos, oncologistas clínicos, gastroenterologistas, cirurgiões gerais e do aparelho digestivo. Um público especializado, discutindo conduta com quem define a referência na área.",
};

export const organizador = {
  eyebrow: "QUEM ORGANIZA",
  nome: "Dr. João Eduardo Leal Nicoluzzi",
  linhaApoio:
    "Cirurgião do aparelho digestivo · Transplante hepático e pancreático · CRM 14.148 | RQE 10.947",
  bio: "Formado pela PUC-PR em 1993, com residência em cirurgia geral e do trauma no Hospital Universitário Cajuru. Fez formação internacional em Paris, nos hospitais Saint-Antoine e Cochin, em cirurgia oncológica digestiva e transplante, seguida de fellowship em transplante hepático no Hôpital Saint-Luc, em Louvain, na Bélgica. É titular de especialista em cirurgia hepato-pancreato-biliar pelo Hôpital Paul Brousse, o maior centro de HPB da Europa. Professor titular de cirurgia da PUC-PR desde 2003, foi responsável pelo primeiro transplante intervivos de pâncreas do Brasil.",
  experienciaLabel: "EXPERIÊNCIA EM EVENTOS",
  experiencia:
    "Cinco congressos online consecutivos de oncologia hepato-pancreato-biliar realizados entre 2021 e 2025, somando mais de 6.000 participantes.",
};

export const vip = {
  eyebrow: "GRUPO VIP",
  titlePre: "Indique três colegas e entre no ",
  titleHighlight: "grupo VIP",
  titlePost: "",
  paragraph:
    "Quem indica três colegas inscritos entra no grupo VIP, com acesso aos materiais de estudo em PDF, networking entre os participantes e um selo diferenciado no certificado.",
  cta: "Quero participar",
};

export const certificado = {
  eyebrow: "CERTIFICADO",
  titlePre: "Certificado com ",
  titleHighlight: "carga horária",
  titlePost: "",
  paragraph:
    "Ao final das seis sessões, os inscritos recebem certificado com carga horária. Participantes do grupo VIP recebem o selo diferenciado no documento.",
};

export const faq = {
  eyebrow: "PERGUNTAS FREQUENTES",
  itens: [
    { pergunta: "O evento é gratuito?", resposta: "Sim! 100% gratuito!" },
    { pergunta: "Preciso assistir ao vivo?", resposta: "Não! As aulas ficam gravadas no nosso canal do YouTube." },
    { pergunta: "Como recebo o certificado?", resposta: "Os inscritos através da plataforma Even3 receberão o certificado por email ao final do evento." },
    { pergunta: "Como funciona a indicação para o grupo VIP?", resposta: "{{RESPOSTA}}" },
  ],
};

export const inscricao = {
  eyebrow: "INSCRIÇÃO",
  titlePre: "Garanta sua vaga nas ",
  titleHighlight: "seis aulas",
  titlePost: "",
  paragraph:
    "A inscrição é feita pela plataforma Even3. Você recebe o link de acesso da Live no YouTube através do grupo no WhatsApp antes de cada aula de terça-feira.",
  microcopy: "Participação gratuita · Vagas limitadas · Certificado com carga horária",
  cta: "Inscreva-se no Even3",
};

export const footer = {
  aviso:
    "Transmissão via Zoom para palestrantes e debatedores, com sinal simultâneo no canal do Dr. João Eduardo Nicoluzzi no YouTube.",
};
