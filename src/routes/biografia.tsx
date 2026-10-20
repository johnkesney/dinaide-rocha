import { createFileRoute } from "@tanstack/react-router";
import { InteriorPage } from "@/pages/InteriorPages";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/biografia")({ head: () => pageHead("Conheça Dinaide"), component: () => <InteriorPage kind="biografia" /> });
