import { createFileRoute } from "@tanstack/react-router";
import { InteriorPage } from "@/pages/InteriorPages";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/historia")({ head: () => pageHead("Minha história"), component: () => <InteriorPage kind="historia" /> });
