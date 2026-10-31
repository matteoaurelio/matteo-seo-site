/**
 * Product research case studies.
 *
 * These are worked examples. The companies, sectors and numbers are
 * hypothetical, so no client, market or client data is ever exposed. The
 * thinking, the patterns and the fixes come from real product work. Each
 * article says so at the top (see `illustration`).
 */

export type ProductCaseStudy = {
  slug: string;
  title: string;
  /** One sentence shown in the list and used as the meta description. */
  summary: string;
  /** Stage of the customer journey, used as a filter. */
  stage: string;
  /** Topics, used as a filter and as tags. */
  topics: string[];
  /** The hypothetical company used in the example, shown in the disclosure note. */
  illustration: string;
  /** Short label for the example's sector. */
  sector: string;
  /** What the article demonstrates, kept general. */
  shows: string;
  published: string; // ISO date
  updated?: string; // ISO date
  readingMinutes: number;
  /** Extra search topics, used in structured data. */
  tags?: string[];
};

export const productCaseStudies: ProductCaseStudy[] = [
  {
    slug: "search-dead-ends",
    title: "Why customers abandon a search before they see a single result",
    summary:
      "When search does not recognise what people type, demand disappears before the results page. A worked example on a hypothetical ferry booking site: four hypotheses, a sizing model, seven fixes and a test plan.",
    stage: "Search & discovery",
    topics: ["Autocomplete", "Location data", "Opportunity sizing"],
    illustration: "a hypothetical ferry and island-transfer booking site",
    sector: "Ferry booking (hypothetical)",
    shows: "Hypotheses, evidence plan, sizing, prioritisation, test",
    published: "2026-10-30",
    readingMinutes: 10,
    tags: ["Site search", "Autocomplete misspellings", "Zero-result searches", "Station search", "Travel booking UX"],
  },
  {
    slug: "faster-choice-results-pages",
    title: "How to help customers choose the right option and price faster",
    summary:
      "Long result lists, hidden filters and side-by-side prices slow decisions. A worked example on a hypothetical regional rail app: relevance ranking, navigation, price comparison and an A/B test with revenue guardrails.",
    stage: "Choice & comparison",
    topics: ["Ranking", "Price comparison", "Experiment design"],
    illustration: "a hypothetical regional rail booking app",
    sector: "Regional rail (hypothetical)",
    shows: "Hypotheses, evidence plan, sizing, prioritisation, test",
    published: "2026-10-30",
    readingMinutes: 11,
    tags: ["Search results ranking", "Choice overload", "Fare selection", "A/B testing", "Guardrail metrics"],
  },
  {
    slug: "checkout-trust-price-changes-failed-orders",
    title: "Where checkout trust breaks: price changes, form errors and failed orders",
    summary:
      "A price that moves, an error that does not explain itself and a charge for an order that then fails. A worked example on a hypothetical event-shuttle platform: the fixes, the priorities and how to prove them.",
    stage: "Checkout & payment",
    topics: ["Checkout", "Price integrity", "Validation"],
    illustration: "a hypothetical festival and event shuttle ticketing platform",
    sector: "Event shuttles (hypothetical)",
    shows: "Hypotheses, evidence plan, sizing, prioritisation, test",
    published: "2026-10-30",
    readingMinutes: 11,
    tags: ["Checkout optimisation", "Cart abandonment", "Inline validation", "Drip pricing", "Failed orders"],
  },
];

const byName = (a: string, b: string) => a.localeCompare(b, "en", { sensitivity: "base" });

/** Journey stages in the order a customer meets them. */
const stageOrder = ["Search & discovery", "Choice & comparison", "Checkout & payment"];
export const productCaseStages = [...new Set(productCaseStudies.map((item) => item.stage))].sort(
  (a, b) => stageOrder.indexOf(a) - stageOrder.indexOf(b),
);
export const productCaseTopics = [...new Set(productCaseStudies.flatMap((item) => item.topics))].sort(byName);

/** Journey order: search first, checkout last. */
export const sortedProductCaseStudies = () => [...productCaseStudies];

export const getProductCaseStudy = (slug: string) =>
  productCaseStudies.find((item) => item.slug === slug);

/** Shared values for the article pages. */
export const productResearch = {
  hubPath: "/product-research/case-studies/",
  heroImage: "/images/case-studies/canal-golden-hour",
  heroImageHeight: 1277,
  ogImage: "/images/case-studies/canal-golden-hour-og.jpg",
};
