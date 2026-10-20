import { createFileRoute } from "@tanstack/react-router";
import { InteriorPage } from "@/pages/InteriorPages";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/contato")({ head: () => pageHead("Contato"), component: () => <InteriorPage kind="contato" /> });
