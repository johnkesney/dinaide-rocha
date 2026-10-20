import { createFileRoute } from "@tanstack/react-router";
import { InteriorPage } from "@/pages/InteriorPages";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/projetos")({ head: () => pageHead("Projetos e iniciativas"), component: () => <InteriorPage kind="projetos" /> });
