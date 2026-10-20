import { createFileRoute } from "@tanstack/react-router";
import { InteriorPage } from "@/pages/InteriorPages";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/historia")({ head: () => pageHead("História e trajetória", "Da infância no comércio à atuação na Câmara Municipal: conheça momentos da vida de Dinaide Rocha e sua relação com Riacho de Santana, Bahia."), component: () => <InteriorPage kind="historia" /> });
