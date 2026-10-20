/**
 * Fonte editorial temporária. Não contém fatos, imagens ou contatos não verificados.
 * Um CMS persistente poderá fornecer estes mesmos contratos no futuro.
 */
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
  role: "Vereadora de Riacho de Santana — Bahia",
  location: "Riacho de Santana, Bahia",
  description:
    "Um espaço institucional para conhecer Dinaide Rocha e acompanhar informações públicas sobre sua trajetória e atuação parlamentar.",
  heroTitle: "Dinaide Rocha",
  heroIntro:
    "Conheça a trajetória de Dinaide Rocha e acompanhe, neste espaço, informações e registros públicos de seu mandato.",
  heroPhoto: "/images/dinaide-rosa.webp" /* Fotografia enviada pela equipe em 19/10/2026. */,
  aboutPhoto: "/images/dinaide-branco.webp",
  biography: [] as string[] /* Preencher apenas com biografia revisada pela equipe. */,
  history: [] as { year?: string; title: string; description: string; photo?: string }[],
  curiosities: [] as { title: string; description: string; image?: string }[],
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

export const actions: Entry[] = [];
export const projects: Entry[] = [];
export const news: Entry[] = [];
export const achievements: Entry[] = [];
export const community: Entry[] = [];
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
