const brand = "Dinaide Rocha | Vereadora em Riacho de Santana";
const defaultDescription = "Conheça Dinaide Rocha, vereadora de Riacho de Santana, Bahia. Acompanhe sua trajetória e os registros públicos do mandato.";

export function pageHead(title?: string, description = defaultDescription) {
  const fullTitle = title ? title + " | Dinaide Rocha" : brand;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  };
}
