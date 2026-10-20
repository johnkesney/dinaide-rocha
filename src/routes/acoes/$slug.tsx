import { createFileRoute, notFound } from "@tanstack/react-router";
import { actions, findPublished } from "@/content/site";
import { RecordDetail } from "@/pages/InteriorPages";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/acoes/$slug")({
 beforeLoad: ({ params }) => { if (!findPublished(actions, params.slug)) throw notFound(); },
 head: ({ params }) => { const item = findPublished(actions, params.slug); return pageHead(item?.title || "Registro não encontrado", item?.summary); },
 component: Detail,
});
function Detail() { const { slug } = Route.useParams(); const item = findPublished(actions, slug); if (!item) throw notFound(); return <RecordDetail item={item} kind="acoes" />; }
