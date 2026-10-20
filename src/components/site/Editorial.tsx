import { ArrowRight, ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { type Entry, readableDate } from "@/content/site";
import { MediaFrame } from "./MediaFrame";

export function SectionHeading({ eyebrow, title, description, action, actionHref, light = false }: {
  eyebrow: string; title: string; description?: string; action?: string; actionHref?: string; light?: boolean;
}) {
  return (
    <div className={"section-heading" + (light ? " section-heading--light" : "")}>
      <div><div className="eyebrow"><span className="eyebrow-line" />{eyebrow}</div><h2 className="section-title">{title}</h2>{description && <p className="section-description">{description}</p>}</div>
      {action && actionHref && <Link className="text-link" to={actionHref as never}>{action} <ArrowUpRight size={18} /></Link>}
    </div>
  );
}

export function EmptyState({ title, description, compact = false }: { title: string; description: string; compact?: boolean }) {
  return <div className={"empty-state" + (compact ? " empty-state--compact" : "")}>
    <span className="empty-state__asterisk" aria-hidden="true">✳</span>
    <div><span className="empty-state__label">ACERVO EM ORGANIZAÇÃO</span><h3>{title}</h3><p>{description}</p></div>
    <span className="empty-state__end" aria-hidden="true">↗</span>
  </div>;
}

export function EntryCard({ item, collection }: { item: Entry; collection: "acoes" | "projetos" | "noticias" }) {
  const href = "/" + collection + "/" + encodeURIComponent(item.slug);
  return <a className="entry-card" href={href}>
    <div className="entry-card__visual"><MediaFrame media={item.cover} variant="landscape" label="Imagem da publicação" /></div>
    <div className="entry-card__meta"><span>{item.category || (collection === "projetos" ? "Iniciativa" : "Publicação")}</span><time dateTime={item.publishedAt}>{readableDate(item.publishedAt)}</time></div>
    <h3>{item.title}</h3><p>{item.summary}</p>
    {item.location && <div className="entry-card__location"><MapPin size={14}/>{item.location}</div>}
    <span className="entry-card__more">Ler mais <ArrowRight size={17} /></span>
  </a>;
}

export function EntryDetailBody({ item }: { item: Entry }) {
  return <article className="article-copy">
    <p className="article-lead">{item.summary}</p>
    {item.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
    {item.location && <p className="detail-aux"><MapPin size={17} /> Localidade: {item.location}</p>}
    {item.officialNumber && <p className="detail-aux"><CalendarDays size={17} /> Número oficial: {item.officialNumber}</p>}
    {item.actionTaken && <p><strong>Atuação registrada:</strong> {item.actionTaken}</p>}
    {item.result && <p><strong>Resultado documentado:</strong> {item.result}</p>}
    {item.outcome && <p><strong>Situação:</strong> {({
      "concluida": "Concluída", "em-andamento": "Em andamento", "encaminhada": "Encaminhada", "proposta": "Proposta",
    })[item.outcome]}</p>}
    {item.documents?.length ? <div className="document-list"><h2>Documentos oficiais</h2>{item.documents.filter((d) => /^https:\/\//.test(d.url)).map((d) => <a key={d.url} href={d.url} target="_blank" rel="noopener noreferrer">{d.label} <ArrowUpRight size={16} /></a>)}</div> : null}
  </article>;
}
