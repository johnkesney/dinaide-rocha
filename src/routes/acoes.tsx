import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";
import { InteriorPage } from "@/pages/InteriorPages";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/acoes")({ head: () => pageHead("Nosso trabalho"), component: AcoesRoutePage });


function AcoesRoutePage() {
  // Parent routes also match their /$slug descendants. Render the child outlet
  // for details; render the listing only at the exact collection URL.
  const pathname = useLocation({ select: (location) => location.pathname });
  return pathname.replace(/\/$/, "") === "/acoes"
    ? <InteriorPage kind="acoes" />
    : <Outlet />;
}
