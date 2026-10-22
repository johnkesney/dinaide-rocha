import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() }   it("matches published action details instead of leaving the visitor on the list", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    const matches = router.matchRoutes("/acoes/entrega-trator-comunidade-sambaiba");
    expect(matches.at(-1)?.routeId).toBe("/acoes/$slug");
  });

  it("has active collection and detail routes for projects and news", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    for (const url of ["/projetos/exemplo", "/noticias/exemplo"]) {
      expect(router.matchRoutes(url).at(-1)?.routeId).not.toBe(rootRouteId);
    }
  });
});

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
});
