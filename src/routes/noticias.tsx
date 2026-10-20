import { createFileRoute } from "@tanstack/react-router";
import { InteriorPage } from "@/pages/InteriorPages";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/noticias")({ head: () => pageHead("Notícias e atualizações"), component: () => <InteriorPage kind="noticias" /> });
