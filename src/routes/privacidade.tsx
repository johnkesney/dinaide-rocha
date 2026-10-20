import { createFileRoute } from "@tanstack/react-router";
import { InteriorPage } from "@/pages/InteriorPages";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/privacidade")({ head: () => pageHead("Política de privacidade"), component: () => <InteriorPage kind="privacidade" /> });
