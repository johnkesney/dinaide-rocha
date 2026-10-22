import type { Entry } from "./site";

/**
 * Registro institucional da entrega do trator à Sambaíba em 02/10/2026.
 * Texto construído a partir do relato de integrante da equipe de Dinaide Rocha
 * presente no evento. Fotografias e link do vídeo fornecidos pela equipe.
 * Publicação autorizada em 22/10/2026.
 */
export const sambaibaTractorDelivery: Entry = {
  slug: "entrega-trator-comunidade-sambaiba",
  title: "Comunidade da Sambaíba celebra entrega de trator agrícola",
  summary:
    "Após mais de 30 anos de espera, a comunidade da Sambaíba recebeu um trator agrícola graças à atuação da vereadora Dinaide Rocha em parceria com os deputados Manoel Rocha e Penalva. Dinaide esteve com os moradores para celebrar a entrega.",
  category: "Comunidade rural",
  location: "Comunidade da Sambaíba, Riacho de Santana — BA",
  publishedAt: "2026-10-02", // Data da entrega informada pela equipe: 02/10/2026.
  status: "published",
  outcome: "concluida", // Refere-se apenas à entrega fotografada, não a obras ou serviços futuros.
  actionTaken:
    "A entrega do trator agrícola à comunidade da Sambaíba foi realizada pela vereadora Dinaide Rocha em parceria com os deputados Manoel Rocha e Penalva.",
  result: "Entrega de trator agrícola à comunidade da Sambaíba em 2 de outubro de 2026.",
  body: [
    "Em 2 de outubro de 2026, a comunidade da Sambaíba, em Riacho de Santana, comemorou a entrega de um trator agrícola pela vereadora Dinaide Rocha, em parceria com os deputados Manoel Rocha e Penalva. O equipamento era aguardado havia mais de 30 anos pelos moradores.",
    "Dinaide Rocha esteve presente na comunidade para entregar o trator e celebrar a conquista com os moradores. O equipamento foi conseguido por ela junto aos deputados Manoel Rocha e Penalva, atendendo a uma reivindicação antiga da Sambaíba.",
    "A entrega reuniu moradores e representantes da associação local, entre eles Dona Vanda, atual presidente, e Joaquim, primeiro presidente da associação e um dos participantes de sua fundação, em 1995.",
    "Emocionada, Dona Vanda falou sobre a realização desse desejo: “Isso representa um orgulho que eu queria ter há muito tempo na comunidade. Graças a Deus tá realizando esse sonho hoje.”",
    "Joaquim também celebrou a conquista. Para ele, a chegada do trator representa um sonho realizado e a esperança de deixar um futuro melhor para as crianças e os netos da Sambaíba. Em uma fala marcante, afirmou: “Promessa todos fazem. Agora cumprir foi Dinaide.”",
    "Dona Vanda e Joaquim também agradeceram o apoio dos deputados Manoel Rocha e Penalva. Após a entrega, a alegria continuou com uma confraternização e música de paredão, reunindo a comunidade para celebrar esse momento.",
    "Assista ao vídeo da entrega e aos depoimentos dos moradores no Instagram, pelo link abaixo.",
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
