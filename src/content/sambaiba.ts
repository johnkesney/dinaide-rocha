import type { Entry } from "./site";

/**
 * REGISTRO EM RASCUNHO — NÃO VISÍVEL NO SITE.
 *
 * Base: informações e 3 fotografias enviadas pela equipe em conversa.
 * Confirmações ainda necessárias:
 * - identificação oficial da associação e localidade;
 * - revisão e autorização das falas atribuídas a Vanda e Joaquim;
 * - autorização final antes de alterar status para "published".
 *
 * Vídeo indicado pela equipe (link não conferido diretamente no Instagram).
 */
export const sambaibaTractorDelivery: Entry = {
  slug: "entrega-trator-comunidade-sambaiba",
  title: "Comunidade da Sambaíba celebra entrega de trator agrícola",
  summary:
    "Moradores da Sambaíba participaram de um encontro para celebrar a chegada de um trator agrícola, uma conquista aguardada há mais de 30 anos, segundo relatos da comunidade.",
  category: "Comunidade rural",
  location: "Comunidade da Sambaíba, Riacho de Santana — BA",
  publishedAt: "2026-10-02", // Data da entrega informada pela equipe: 02/10/2026.
  status: "draft",
  outcome: "concluida", // Refere-se apenas à entrega fotografada, não a obras ou serviços futuros.
  actionTaken:
    "Segundo as informações enviadas à equipe do site, a vereadora Dinaide Rocha atuou junto aos deputados Manoel Rocha e Penalva para viabilizar o equipamento.",
  result: "Entrega de um trator agrícola à comunidade, registrada nas fotografias recebidas.",
  body: [
    "A comunidade da Sambaíba, em Riacho de Santana, recebeu um trator agrícola em uma ocasião marcada por alegria, encontros e agradecimentos de moradores. Segundo os relatos encaminhados à equipe do site, a melhoria era aguardada havia mais de 30 anos.",
    "A entrega foi associada à atuação da vereadora Dinaide Rocha em conjunto com os deputados Manoel Rocha e Penalva. O registro informa essa participação como relato da equipe, sem atribuir individualmente a compra, o financiamento ou a propriedade do equipamento.",
    "Dona Vanda, presidente da associação da comunidade, esteve presente e descreveu o momento como a realização de um desejo antigo: “Isso representa um orgulho que eu queria ter há muito tempo na comunidade. Graças a Deus tá realizando esse sonho hoje”, conforme declaração informada para esta matéria.",
    "Joaquim, apresentado como o primeiro presidente da associação e participante de sua fundação em 1995, também esteve presente. Ele relatou que a chegada do trator representa um sonho para a comunidade e disse que deseja deixar um futuro melhor para as crianças e os netos.",
    "Em outra fala atribuída a Joaquim, ele declarou: “Promessa todos fazem. Agora cumprir foi Dinaide.” Os dois representantes da comunidade também agradeceram aos deputados envolvidos.",
    "Após o encontro, a comunidade realizou uma confraternização com música em paredão. O vídeo indicado pela equipe está disponível no link do Instagram abaixo.",
  ],
  cover: {
    src: "/images/sambaiba-entrega-trator-01.webp",
    alt: "Moradores e representantes da comunidade celebram a entrega de trator agrícola na Sambaíba",
    caption: "Registro da entrega do trator à comunidade da Sambaíba.",
    album: "Entrega de trator — Sambaíba",
    type: "image",
  },
  photos: [
    {
      src: "/images/sambaiba-entrega-trator-01.webp",
      alt: "Três pessoas comemoram a entrega sobre um trator agrícola vermelho; Dinaide aparece entre os presentes",
      caption: "Participantes celebram a entrega do trator na comunidade da Sambaíba.",
      album: "Entrega de trator — Sambaíba",
      type: "image",
    },
    {
      src: "/images/sambaiba-entrega-trator-02.webp",
      alt: "Pessoas sobre trator agrícola vermelho em estrada rural, durante registro da entrega",
      caption: "Registro do trator agrícola recebido pela comunidade.",
      album: "Entrega de trator — Sambaíba",
      type: "image",
    },
    {
      src: "/images/sambaiba-entrega-trator-03.webp",
      alt: "Trator agrícola vermelho com implementos e carreta na zona rural de Riacho de Santana",
      caption: "Trator e implementos registrados nas fotografias enviadas.",
      album: "Entrega de trator — Sambaíba",
      type: "image",
    },
  ],
  externalLinks: [
    { label: "Assista ao vídeo da entrega no Instagram", url: "https://www.instagram.com/reel/DeA44fJRwNU/" },
  ],
};
