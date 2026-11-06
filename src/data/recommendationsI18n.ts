/**
 * Recommendations in English (originals) and in Spanish and Dutch
 * (translations). Everything the recommendations hero and list need lives
 * here, so the English /achievements/ page and the translated pages render
 * from the same data.
 */
import { recommendations, recommendationAreas, toIsoDate, type RecommendationArea } from "./achievements";
import { recommendationsEs } from "./recommendations.es";
import { recommendationsNl } from "./recommendations.nl";
import { recommendationsPath, recommendationsLink, type Lang } from "./siteUi";
import { serviceAlternates } from "./servicesI18n";

export type RecommendationTranslation = {
  quote: string;
  /** An exact excerpt of `quote`. */
  highlight: string;
  editNote?: string;
};

const translations: Record<Exclude<Lang, "en">, Record<string, RecommendationTranslation>> = {
  es: recommendationsEs,
  nl: recommendationsNl,
};

const relationships: Record<Exclude<Lang, "en">, Record<string, string>> = {
  es: {
    "Worked with Matteo on the same team": "Trabajó con Matteo en el mismo equipo",
    "Worked with Matteo in different teams at Distribusion Technologies":
      "Trabajó con Matteo en otro equipo de Distribusion Technologies",
    "Worked with Matteo on different teams": "Trabajó con Matteo en otro equipo",
    "Worked with Matteo in different teams": "Trabajó con Matteo en otro equipo",
    "Worked with Matteo across different companies": "Trabajó con Matteo desde otra empresa",
    "Held a more senior role, without directly supervising Matteo":
      "Ocupaba un puesto superior, sin supervisar directamente a Matteo",
    "Professional recommendation": "Recomendación profesional",
    "Worked with Matteo": "Trabajó con Matteo",
    "Was Matteo's client": "Fue cliente de Matteo",
  },
  nl: {
    "Worked with Matteo on the same team": "Werkte met Matteo in hetzelfde team",
    "Worked with Matteo in different teams at Distribusion Technologies":
      "Werkte met Matteo in een ander team bij Distribusion Technologies",
    "Worked with Matteo on different teams": "Werkte met Matteo in een ander team",
    "Worked with Matteo in different teams": "Werkte met Matteo in een ander team",
    "Worked with Matteo across different companies": "Werkte met Matteo vanuit een ander bedrijf",
    "Held a more senior role, without directly supervising Matteo":
      "Had een hogere functie, zonder Matteo direct aan te sturen",
    "Professional recommendation": "Professionele aanbeveling",
    "Worked with Matteo": "Werkte met Matteo",
    "Was Matteo's client": "Was klant van Matteo",
  },
};

export { recommendationsPath, recommendationsLink };

const locales: Record<Lang, string> = { en: "en-GB", es: "es-ES", nl: "nl-NL" };

/** A paragraph, or a short heading line the writer used ("Standout strength"). */
export type Block = { heading?: string; text: string };

function toBlocks(text: string): Block[] {
  return text
    .split(/\n\s*\n|\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .reduce<Block[]>((blocks, line) => {
      const isHeading = line.length < 40 && !/[.!?:]$/.test(line) && line.split(" ").length <= 4;
      const previous = blocks[blocks.length - 1];
      if (previous && previous.heading !== undefined && previous.text === "") {
        previous.text = line;
      } else if (isHeading) {
        blocks.push({ heading: line, text: "" });
      } else {
        blocks.push({ text: line });
      }
      return blocks;
    }, []);
}

export function initials(name: string) {
  const parts = name.replace(/\./g, "").split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

/** Recommendations for one language: featured first, then newest first. */
export function getRecommendationItems(lang: Lang) {
  const featuredId = recommendations.find((item) => item.featured)?.id;

  return recommendations
    .map((recommendation, index) => {
      const t = lang === "en" ? undefined : translations[lang][recommendation.id];
      if (lang !== "en" && !t) throw new Error(`Missing ${lang} translation for ${recommendation.id}`);
      const quote = t?.quote ?? recommendation.quote;
      const highlight = t?.highlight ?? recommendation.highlight;
      if (!quote.includes(highlight)) {
        throw new Error(`Highlight for ${recommendation.name} (${lang}) is not an exact excerpt of the text.`);
      }
      const iso = recommendation.date ? toIsoDate(recommendation.date) : undefined;
      return {
        ...recommendation,
        quote,
        highlight,
        editNote: t ? t.editNote : recommendation.editNote,
        relationship: lang === "en" ? recommendation.relationship : relationships[lang][recommendation.relationship] ?? recommendation.relationship,
        iso,
        displayDate: iso
          ? new Date(`${iso}T00:00:00Z`).toLocaleDateString(locales[lang], {
              day: "numeric",
              month: "short",
              year: "numeric",
              timeZone: "UTC",
            })
          : undefined,
        blocks: toBlocks(quote),
        sortKey: iso ?? `0000-${String(99 - index).padStart(2, "0")}`,
        // Short recommendations are shown in full; longer ones open on demand.
        collapsible: quote.length > 420,
        originalHref: `/achievements/#rec-${recommendation.id}`,
      };
    })
    .sort((a, b) => {
      if (a.id === featuredId) return -1;
      if (b.id === featuredId) return 1;
      return b.sortKey.localeCompare(a.sortKey);
    });
}

export type RecommendationItem = ReturnType<typeof getRecommendationItems>[number];

const areaLabels: Record<Lang, Record<RecommendationArea, string>> = {
  en: Object.fromEntries(recommendationAreas.map((area) => [area.id, area.label])) as Record<RecommendationArea, string>,
  es: { growth: "Crecimiento", data: "Datos e ingeniería", product: "Producto", partners: "Clientes y socios", payments: "Pagos" },
  nl: { growth: "Groei", data: "Data & engineering", product: "Product", partners: "Klanten & partners", payments: "Betalingen" },
};

const areaService: Record<RecommendationArea, Parameters<typeof serviceAlternates>[0]> = {
  growth: "growth-marketing",
  data: "data-engineering-automation",
  product: "product-improvement",
  partners: "business-development",
  payments: "payment-solutions",
};

const serviceNames: Record<Lang, Record<RecommendationArea, string>> = {
  en: Object.fromEntries(recommendationAreas.map((area) => [area.id, area.service.label])) as Record<RecommendationArea, string>,
  es: {
    growth: "Growth marketing",
    data: "Ingeniería de datos y automatización",
    product: "Mejora de producto",
    partners: "Desarrollo de negocio y venta técnica",
    payments: "Soluciones de pago",
  },
  nl: {
    growth: "Growth marketing",
    data: "Data engineering & automatisering",
    product: "Productverbetering",
    partners: "Business development & technische sales",
    payments: "Betaaloplossingen",
  },
};

/** Filter chips for one language, with counts and the matching service page. */
export function getAreaFilters(lang: Lang, items: RecommendationItem[]) {
  return recommendationAreas.map((area) => ({
    id: area.id,
    label: areaLabels[lang][area.id],
    count: items.filter((item) => item.areas.includes(area.id)).length,
    serviceHref: serviceAlternates(areaService[area.id])[lang],
    serviceLabel: serviceNames[lang][area.id],
  }));
}

export type RecommendationsUi = {
  title: string;
  description: string;
  kicker: string;
  h1: string;
  lede: (total: number) => string;
  translated?: { badge: string; note: string };
  facts: (linkedIn: number, senja: number, from: string, to: string) => string;
  cta: string;
  listTitle: string;
  listCopy: string;
  filterLabel: string;
  all: string;
  searchLabel: string;
  searchPlaceholder: string;
  readFull: string;
  showLess: string;
  original?: string;
  permalink: string;
  permalinkLabel: (name: string) => string;
  empty: string;
  showAll: (total: number) => string;
  sourceNote: { before: string; link: string; after: string };
  status: { one: string; many: string; about: string; mentioning: string; service: string };
  closing?: { kicker: string; title: string; copy: string; button: string; buttonHref: string; more: string };
};

export const recommendationsUi: Record<Lang, RecommendationsUi> = {
  en: {
    title: "Recommendations, Experience & Education | Matteo Arellano",
    description:
      "19 recommendations for Matteo Arellano from colleagues and partners in growth marketing, payments, product, data engineering and finance, published in full, plus reference letters, outcomes, experience and education.",
    kicker: "Recommendations",
    h1: "Recommendations from the people I have worked with.",
    lede: (n) =>
      `${n} recommendations from colleagues and partners in growth, payments, product, data and finance. Each one is published in full, exactly as it was written.`,
    facts: (li, s, a, b) =>
      `${li} are published on LinkedIn and ${s} were collected through Senja, written between ${a} and ${b}.`,
    cta: "Read the recommendations",
    listTitle: "In their own words.",
    listCopy:
      "Choose the kind of work you care about, or search for a name, company or skill. Every recommendation stays on this page.",
    filterLabel: "Show recommendations about",
    all: "All",
    searchLabel: "Search the recommendations",
    searchPlaceholder: "Search by name, company or skill",
    readFull: "Read the full recommendation",
    showLess: "Show less",
    permalink: "Link",
    permalinkLabel: (name) => `Link to ${name}'s recommendation`,
    empty: "Nothing matches yet.",
    showAll: (n) => `Show all ${n}`,
    sourceNote: {
      before: "LinkedIn recommendations are published on",
      link: "my LinkedIn profile ↗",
      after:
        ". The other reviews were collected directly through Senja. Wording is left exactly as written; the only edits are client names, which are replaced by descriptions in square brackets.",
    },
    status: { one: "recommendation", many: "recommendations", about: "about", mentioning: "mentioning", service: "service →" },
  },
  es: {
    title: "Recomendaciones de colegas y socios | Matteo Arellano",
    description:
      "19 recomendaciones para Matteo Arellano de colegas y socios en growth marketing, pagos, producto, ingeniería de datos y finanzas, traducidas del inglés y publicadas íntegras.",
    kicker: "Recomendaciones",
    h1: "Recomendaciones de las personas con las que he trabajado.",
    lede: (n) =>
      `${n} recomendaciones de colegas y socios en crecimiento, pagos, producto, datos y finanzas, publicadas íntegras.`,
    translated: {
      badge: "Traducido del inglés",
      note: "Las recomendaciones se escribieron en inglés. Esta es una traducción fiel, y el original de cada una está a un clic.",
    },
    facts: (li, s, a, b) =>
      `${li} están publicadas en LinkedIn y ${s} se recogieron a través de Senja, y se escribieron entre ${a} y ${b}.`,
    cta: "Leer las recomendaciones",
    listTitle: "En sus propias palabras.",
    listCopy:
      "Elige el tipo de trabajo que te interesa o busca un nombre, una empresa o una habilidad. Todas las recomendaciones están en esta página.",
    filterLabel: "Mostrar recomendaciones sobre",
    all: "Todas",
    searchLabel: "Buscar en las recomendaciones",
    searchPlaceholder: "Busca un nombre, una empresa o una habilidad",
    readFull: "Leer la recomendación completa",
    showLess: "Mostrar menos",
    original: "Ver el original en inglés",
    permalink: "Enlace",
    permalinkLabel: (name) => `Enlace a la recomendación de ${name}`,
    empty: "Ninguna recomendación coincide.",
    showAll: (n) => `Mostrar las ${n}`,
    sourceNote: {
      before: "Las recomendaciones de LinkedIn están publicadas en",
      link: "mi perfil de LinkedIn ↗",
      after:
        ". Las demás se recogieron directamente a través de Senja. Las traducciones son fieles al original; si hubiera alguna diferencia, prevalece el texto en inglés.",
    },
    status: { one: "recomendación", many: "recomendaciones", about: "sobre", mentioning: "que mencionan", service: "→" },
    closing: {
      kicker: "Trabajemos juntos",
      title: "¿Tienes un problema que necesita más de una disciplina?",
      copy: "Cuéntame el objetivo o el problema. Podemos hablarlo y ver si mi experiencia te resulta útil.",
      button: "Reserva una llamada de 20 minutos",
      buttonHref: "/es/#availability",
      more: "Cartas de referencia, experiencia y formación (en inglés) →",
    },
  },
  nl: {
    title: "Aanbevelingen van collega's en partners | Matteo Arellano",
    description:
      "19 aanbevelingen voor Matteo Arellano van collega's en partners in growth marketing, betalingen, product, data engineering en finance, vertaald uit het Engels en volledig gepubliceerd.",
    kicker: "Aanbevelingen",
    h1: "Aanbevelingen van de mensen met wie ik heb gewerkt.",
    lede: (n) =>
      `${n} aanbevelingen van collega's en partners in groei, betalingen, product, data en finance, volledig gepubliceerd.`,
    translated: {
      badge: "Vertaald uit het Engels",
      note: "De aanbevelingen zijn in het Engels geschreven. Dit is een getrouwe vertaling, en het origineel van elke aanbeveling staat één klik verder.",
    },
    facts: (li, s, a, b) =>
      `${li} zijn gepubliceerd op LinkedIn en ${s} zijn verzameld via Senja, geschreven tussen ${a} en ${b}.`,
    cta: "Lees de aanbevelingen",
    listTitle: "In hun eigen woorden.",
    listCopy:
      "Kies het soort werk dat je interesseert, of zoek op een naam, bedrijf of vaardigheid. Alle aanbevelingen staan op deze pagina.",
    filterLabel: "Toon aanbevelingen over",
    all: "Alle",
    searchLabel: "Zoek in de aanbevelingen",
    searchPlaceholder: "Zoek op naam, bedrijf of vaardigheid",
    readFull: "Lees de volledige aanbeveling",
    showLess: "Minder tonen",
    original: "Bekijk het Engelse origineel",
    permalink: "Link",
    permalinkLabel: (name) => `Link naar de aanbeveling van ${name}`,
    empty: "Er komt nog niets overeen.",
    showAll: (n) => `Toon alle ${n}`,
    sourceNote: {
      before: "De LinkedIn-aanbevelingen staan op",
      link: "mijn LinkedIn-profiel ↗",
      after:
        ". De andere zijn rechtstreeks verzameld via Senja. De vertalingen zijn getrouw; bij een verschil geldt de Engelse tekst.",
    },
    status: { one: "aanbeveling", many: "aanbevelingen", about: "over", mentioning: "met", service: "→" },
    closing: {
      kicker: "Samenwerken",
      title: "Heb je een probleem dat meer dan één discipline vraagt?",
      copy: "Vertel me het doel of het probleem. We kunnen het samen bespreken en kijken of mijn achtergrond je verder helpt.",
      button: "Plan een gesprek van 20 minuten",
      buttonHref: "/nl/#availability",
      more: "Referentiebrieven, ervaring en opleiding (in het Engels) →",
    },
  },
};
