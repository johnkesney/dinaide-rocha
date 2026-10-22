/**
 * Fonte editorial temporária. Não contém fatos, imagens ou contatos não verificados.
 * Um CMS persistente poderá fornecer estes mesmos contratos no futuro.
 */
import { sambaibaTractorDelivery } from "./sambaiba";

export type PublicationStatus = "draft" | "published";
export type OutcomeStatus = "concluida" | "em-andamento" | "encaminhada" | "proposta";
export type SiteMedia = {
  src: string;
  alt: string;
  caption?: string;
  album?: string;
  type: "image" | "video";
  poster?: string;
};
export type Entry = {
  /** Galeria da matéria, exibida apenas quando o registro for publicado e as mídias estiverem disponíveis. */
  photos?: SiteMedia[];
  /** Links externos de referência e de vídeos (não necessariamente documentos oficiais). */
  externalLinks?: { label: string; url: string }[];
  slug: string;
  title: string;
  summary: string;
  body: string[];
  publishedAt: string;
  status: PublicationStatus;
  category?: string;
  cover?: SiteMedia;
  location?: string;
  officialNumber?: string;
  documents?: { label: string; url: string }[];
  outcome?: OutcomeStatus;
  result?: string;
  actionTaken?: string;
};

export const site = {
  name: "Dinaide Rocha",
  logo: "/images/dinaide-logo-oficial.png",
  role: "Vereadora de Riacho de Santana — Bahia",
  location: "Riacho de Santana, Bahia",
  description:
    "Um espaço institucional para conhecer Dinaide Rocha e acompanhar informações públicas sobre sua trajetória e atuação parlamentar.",
  heroTitle: "Dinaide Rocha",
  heroIntro:
    "Conheça a trajetória de Dinaide Rocha e acompanhe, neste espaço, informações e registros públicos de seu mandato.",
  heroPhoto: "/images/dinaide-rosa-recorte.webp" /* Fotografia enviada pela equipe em 19/10/2026. */,
  aboutPhoto: "/images/dinaide-branco.webp",
  // Conteúdo biográfico encaminhado pela equipe. Datas de votação e grafia do nome
  // civil devem ser confirmadas antes da divulgação definitiva.
  biography: [
    "Denaide Silva Rocha Penalva, conhecida como Dinaide Rocha, nasceu em Canatiba (Betânia). Há mais de três décadas, mudou-se para Riacho de Santana, na Bahia, acompanhando o esposo, Enio Cardoso. Com o passar dos anos, construiu sua vida na cidade e hoje se considera riacheense.",
    "O comércio faz parte de sua história desde cedo. Ainda jovem, teve os primeiros contatos com o trabalho e o empreendedorismo no mercado de seu pai, ao lado dos irmãos. Mais tarde, junto com o esposo, construiu o primeiro posto de combustíveis do casal, dando continuidade à trajetória empresarial da família.",
    "Mãe de Neto Rocha e Matheus Rocha, também empreendedores, Dinaide atribui grande importância à família. Essa vivência se relaciona à sua defesa de uma cidade que acolha as pessoas e ofereça oportunidades de desenvolvimento.",
    "Depois de acompanhar a vida política nos bastidores, decidiu se candidatar em 2019. Na primeira disputa, segundo as informações biográficas fornecidas à equipe do site, foi a vereadora mais votada. Em 2024, recebeu a segunda maior votação para o cargo, mantendo sua participação na Câmara Municipal de Riacho de Santana.",
    "Entre as pautas que defende estão a equidade, a inclusão e a transparência na aplicação dos recursos públicos. O autismo ocupa um lugar especial nessa trajetória: uma causa pessoal que passou a integrar sua atuação pública, com atenção às necessidades das pessoas autistas e de suas famílias.",
    "Dinaide afirma que sua atuação deve estar voltada à população de Riacho de Santana, independentemente de alinhamentos políticos, com o compromisso de ouvir as comunidades e acompanhar suas demandas.",
  ] as string[],
  history: [
    {
      title: "Primeiros passos no comércio",
      description: "O contato com o empreendedorismo começou ainda jovem, no mercado de seu pai, onde trabalhava ao lado dos irmãos.",
    },
    {
      title: "Uma vida em Riacho de Santana",
      description: "Mudou-se para Riacho de Santana há mais de três décadas, acompanhando o esposo, Enio Cardoso. Com o tempo, passou a se reconhecer como riacheense.",
    },
    {
      title: "Empreendedorismo em família",
      description: "Ao lado do esposo, construiu o primeiro posto de combustíveis do casal, dando continuidade à trajetória no comércio.",
    },
    {
      year: "2019",
      title: "Decisão de entrar na política",
      description: "Após anos acompanhando a política nos bastidores, decidiu concorrer a uma vaga na Câmara Municipal.",
    },
    {
      title: "Primeira eleição",
      description: "Na primeira disputa eleitoral, foi a vereadora mais votada, conforme o relato biográfico fornecido pela equipe.",
    },
    {
      year: "2024",
      title: "Continuidade do mandato",
      description: "Na eleição de 2024, recebeu a segunda maior votação para vereadora no município, segundo as informações encaminhadas à equipe.",
    },
  ] as { year?: string; title: string; description: string; photo?: string }[],
  curiosities: [
    { title: "Raízes no comércio", description: "Seu primeiro contato com o empreendedorismo aconteceu no mercado do pai, ao lado dos irmãos." },
    { title: "Mais de três décadas em Riacho", description: "Natural de Canatiba (Betânia), vive há mais de 30 anos em Riacho de Santana, cidade que considera sua." },
    { title: "Inclusão como pauta", description: "O autismo, uma causa pessoal, tornou-se parte de sua atuação pública em defesa de pessoas autistas e de suas famílias." },
  ] as { title: string; description: string; image?: string }[],
  social: {
    instagram: "",
    facebook: "",
    youtube: "",
    tiktok: "",
  },
  contact: {
    whatsapp: "",
    phone: "",
    email: "",
    address: "",
    hours: "",
  },
};

export const actions: Entry[] = [sambaibaTractorDelivery];
export const projects: Entry[] = [];
export const news: Entry[] = [];
export const achievements: Entry[] = [sambaibaTractorDelivery];
export const community: Entry[] = [sambaibaTractorDelivery];
export const gallery: SiteMedia[] = [
  {
    src: "/images/dinaide-rosa.webp",
    alt: "Dinaide Rocha em retrato de estúdio, com blusa rosa e mãos unidas",
    caption: "Retrato institucional de Dinaide Rocha",
    album: "Retratos institucionais",
    type: "image",
  },
  {
    src: "/images/dinaide-branco.webp",
    alt: "Dinaide Rocha em retrato de estúdio, vestindo blazer branco",
    caption: "Retrato institucional de Dinaide Rocha",
    album: "Retratos institucionais",
    type: "image",
  },
  ...(sambaibaTractorDelivery.photos ?? []),
];

export function published<T extends { status: PublicationStatus; publishedAt?: string }>(entries: T[]): T[] {
  return entries
    .filter((item) => item.status === "published")
    .sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""));
}

export function findPublished(entries: Entry[], slug: string): Entry | undefined {
  return published(entries).find((item) => item.slug === slug);
}

export function readableDate(value: string): string {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return "";
  const date = new Date(value + "T12:00:00");
  return Number.isNaN(date.getTime()) ? "" : new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit", month: "long", year: "numeric", timeZone: "UTC",
  }).format(date);
}

export function configuredSocials() {
  return Object.entries(site.social).filter((entry): entry is [string, string] => {
    try {
      const u = new URL(entry[1]);
      return u.protocol === "https:";
    } catch {
      return false;
    }
  });
}
