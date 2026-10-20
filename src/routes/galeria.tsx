import { createFileRoute } from "@tanstack/react-router";
import { InteriorPage } from "@/pages/InteriorPages";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/galeria")({ head: () => pageHead("Galeria"), component: () => <InteriorPage kind="galeria" /> });
