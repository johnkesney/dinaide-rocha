import { createFileRoute, notFound } from "@tanstack/react-router";
import { news, findPublished } from "@/content/site";
import { RecordDetail } from "@/pages/InteriorPages";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/noticias/$slug")({
 beforeLoad: ({ params }) => { if (!findPublished(news, params.slug)) throw notFound(); },
 head: ({ params }) => { const item = findPublished(news, params.slug); return pageHead(item?.title || "Registro não encontrado", item?.summary); },
 component: Detail,
});
function Detail() { const { slug } = Route.useParams(); const item = findPublished(news, slug); if (!item) throw notFound(); return <RecordDetail item={item} kind="noticias" />; }
