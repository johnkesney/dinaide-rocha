import { createFileRoute } from "@tanstack/react-router";
import { InteriorPage } from "@/pages/InteriorPages";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/acoes")({ head: () => pageHead("Nosso trabalho"), component: () => <InteriorPage kind="acoes" /> });
