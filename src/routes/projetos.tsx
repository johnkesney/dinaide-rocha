import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";
import { InteriorPage } from "@/pages/InteriorPages";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/projetos")({ head: () => pageHead("Projetos e iniciativas"), component: ProjetosRoutePage });


function ProjetosRoutePage() {
  // Parent routes also match their /$slug descendants. Render the child outlet
  // for details; render the listing only at the exact collection URL.
  const pathname = useLocation({ select: (location) => location.pathname });
  return pathname.replace(/\/$/, "") === "/projetos"
    ? <InteriorPage kind="projetos" />
    : <Outlet />;
}
