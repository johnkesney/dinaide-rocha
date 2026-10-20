import { createFileRoute } from "@tanstack/react-router";
import { InteriorPage } from "@/pages/InteriorPages";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/biografia")({ head: () => pageHead("Biografia de Dinaide Rocha", "Conheça a trajetória de Denaide Silva Rocha Penalva, a Dinaide Rocha: suas origens no comércio, sua história em Riacho de Santana e sua atuação como vereadora."), component: () => <InteriorPage kind="biografia" /> });
