import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without invoking loaders; useful to catch missing generated routes.
describe("App routing", () => {
  it("matches the homepage", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    const matches = router.matchRoutes("/");
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches the published Sambaíba article detail route", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    const matches = router.matchRoutes("/acoes/entrega-trator-comunidade-sambaiba");
    expect(matches.at(-1)?.routeId).toBe("/acoes/$slug");
  });

  it("registers archives and article routes for projects and news", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    for (const url of ["/acoes", "/projetos", "/projetos/exemplo", "/noticias", "/noticias/exemplo", "/galeria"]) {
      expect(router.matchRoutes(url).at(-1)?.routeId).not.toBe(rootRouteId);
    }
  });
});
