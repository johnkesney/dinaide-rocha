import type { SiteMedia } from "@/content/site";

export function MediaFrame({ media, variant = "portrait", label = "Fotografia oficial em preparação" }: {
  media?: SiteMedia | null;
  variant?: "portrait" | "landscape" | "square";
  label?: string;
}) {
  const valid = media?.src && (/^https:\/\//.test(media.src) || media.src.startsWith("/"));
  return (
    <div className={"media-frame media-frame--" + variant + (valid ? " media-frame--filled" : "")}>
      {valid ? (
        media.type === "video" ? (
          <video controls preload="metadata" poster={media.poster} aria-label={media.alt}>
            <source src={media.src} />
            Seu navegador não suporta vídeos.
          </video>
        ) : (
          <img src={media.src} alt={media.alt} loading={variant === "portrait" ? "eager" : "lazy"} decoding="async" />
        )
      ) : (
        <div className="media-placeholder" aria-label={label}>
          <span className="media-placeholder__arc" aria-hidden="true" />
          <span className="media-placeholder__mark" aria-hidden="true">DR.</span>
          <span className="media-placeholder__label">{label}</span>
        </div>
      )}
      {valid && media.caption ? <span className="media-caption">{media.caption}</span> : null}
    </div>
  );
}
