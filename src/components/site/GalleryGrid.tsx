import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Image as ImageIcon, X } from "lucide-react";
import type { SiteMedia } from "@/content/site";
import { EmptyState } from "./Editorial";

export function GalleryGrid({ media }: { media: SiteMedia[] }) {
  const [filter, setFilter] = useState("Todos");
  const [active, setActive] = useState<number | null>(null);
  const albums = ["Todos", ...Array.from(new Set(media.map((m) => m.album).filter((a): a is string => Boolean(a))))];
  const visible = media.filter((m) => filter === "Todos" || m.album === filter);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((n) => n === null ? 0 : (n + 1) % visible.length);
      if (event.key === "ArrowLeft") setActive((n) => n === null ? 0 : (n - 1 + visible.length) % visible.length);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = previous; };
  }, [active, visible.length]);

  if (!media.length) return <EmptyState title="A galeria está sendo preparada." description="Fotografias e vídeos autorizados serão disponibilizados aqui, organizados por eventos e álbuns." />;

  return <div>
    {albums.length > 1 && <div className="filter-row" aria-label="Filtrar álbuns">{albums.map((album) => <button key={album} type="button" aria-pressed={filter === album} className={filter === album ? "filter-chip filter-chip--active" : "filter-chip"} onClick={() => { setFilter(album); setActive(null); }}>{album}</button>)}</div>}
    <div className="gallery-grid">{visible.map((item, index) => <button type="button" className="gallery-item" key={item.src + index} onClick={() => setActive(index)} aria-label={"Ampliar " + item.alt}>
      {item.type === "video" ? <div className="gallery-video"><video src={item.src} poster={item.poster} preload="metadata" aria-label={item.alt} /><span>▶ Vídeo</span></div> : <img loading="lazy" decoding="async" src={item.src} alt={item.alt} />}
      <span className="gallery-item__info"><ImageIcon size={16}/>{item.caption || item.alt}</span>
    </button>)}</div>
    {active !== null && visible[active] && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Visualização ampliada da galeria" onClick={() => setActive(null)}>
      <button type="button" autoFocus className="lightbox-close" aria-label="Fechar imagem" onClick={() => setActive(null)}><X/></button>
      <button type="button" className="lightbox-prev" aria-label="Imagem anterior" onClick={(e) => { e.stopPropagation(); setActive((active - 1 + visible.length) % visible.length); }}><ArrowLeft/></button>
      <figure onClick={(e) => e.stopPropagation()}>
        {visible[active].type === "video" ? <video key={visible[active].src} src={visible[active].src} controls autoPlay poster={visible[active].poster} /> : <img src={visible[active].src} alt={visible[active].alt} />}
        <figcaption>{visible[active].caption || visible[active].alt}<small>{active + 1} / {visible.length}</small></figcaption>
      </figure>
      <button type="button" className="lightbox-next" aria-label="Próxima imagem" onClick={(e) => { e.stopPropagation(); setActive((active + 1) % visible.length); }}><ArrowRight/></button>
    </div>}
  </div>;
}
