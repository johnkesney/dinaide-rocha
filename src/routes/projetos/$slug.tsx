import { createFileRoute, notFound } from "@tanstack/react-router";
import { projects, findPublished } from "@/content/site";
import { RecordDetail } from "@/pages/InteriorPages";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/projetos/$slug")({
 beforeLoad: ({ params }) => { if (!findPublished(projects, params.slug)) throw notFound(); },
 head: ({ params }) => { const item = findPublished(projects, params.slug); return pageHead(item?.title || "Registro não encontrado", item?.summary); },
 component: Detail,
});
function Detail() { const { slug } = Route.useParams(); const item = findPublished(projects, slug); if (!item) throw notFound(); return <RecordDetail item={item} kind="projetos" />; }
