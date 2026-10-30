/**
 * Payment case studies.
 *
 * Every case is anonymised: no client names, volumes or internal details.
 * When the real business is in an identifiable industry, the article uses a
 * fictional example from a different industry with the same mechanics, and
 * says so explicitly (see `illustration`).
 */

export type PaymentCaseStudy = {
  slug: string;
  title: string;
  /** One sentence shown in the list and used as the meta description. */
  summary: string;
  region: string;
  country: string;
  technologies: string[];
  /** What the fictional example is, shown in the disclosure note. */
  illustration: string;
  /** My role, kept general. */
  role: string;
  published: string; // ISO date
  updated?: string; // ISO date
  readingMinutes: number;
  /** Shown when a case is still open, e.g. "Open: investigation ongoing". */
  status?: string;
  /** Extra search topics, shown on the article and used in structured data. */
  tags?: string[];
};

export const paymentCaseStudies: PaymentCaseStudy[] = [
  {
    slug: "oxxo-pay-cash-vouchers-time-limited-inventory",
    title: "How to prevent failed orders when your customers use a cash payment method like OXXO Pay",
    summary:
      "OXXO Pay lets customers pay for online orders in cash. When a product is only reserved for a limited time, the payment can arrive too late. This case study explains the problems and how to solve them.",
    region: "LATAM",
    country: "Mexico",
    technologies: ["OXXO Pay", "Cash vouchers", "Webhooks", "Reconciliation"],
    illustration: "a fictional event-ticketing marketplace",
    role: "Integration support",
    published: "2026-10-30",
    readingMinutes: 11,
    tags: ["OXXO Pay", "Cash payments Mexico", "Payment webhooks", "Refunds", "SPEI", "CoDi", "DiMo", "Spin by OXXO"],
  },
  {
    slug: "dlocal-currency-rejections-colombia",
    title: "How to fix currency rejections when you process payments with dLocal in Colombia and South America",
    summary:
      "A checkout offered many currencies, and dLocal rejected all of them for customers in Colombia. This case study explains why, what dLocal's documentation says, and the options that online businesses use.",
    region: "LATAM",
    country: "Colombia",
    technologies: ["dLocal", "Multi-currency", "Local acquiring", "FX"],
    illustration: "a fictional online language school",
    role: "Payment investigation",
    published: "2026-10-30",
    readingMinutes: 14,
    status: "Open: investigation ongoing",
    tags: [
      "dLocal",
      "dLocal error 5004",
      "Colombia",
      "COP",
      "South America",
      "Presentment currency",
      "Settlement currency",
      "Local acquiring",
      "PSE",
      "Nequi",
      "Bre-B",
    ],
  },
];

/** Every region and technology that appears in at least one case, in a stable order. */
const byName = (a: string, b: string) => a.localeCompare(b, "en", { sensitivity: "base" });

export const caseRegions = [...new Set(paymentCaseStudies.map((item) => item.region))].sort(byName);
export const caseTechnologies = [
  ...new Set(paymentCaseStudies.flatMap((item) => item.technologies)),
].sort(byName);

/** Newest first; cases published on the same day keep the order of this file, newest last. */
export const sortedPaymentCaseStudies = () =>
  paymentCaseStudies
    .map((item, index) => ({ item, index }))
    .sort((a, b) => b.item.published.localeCompare(a.item.published) || b.index - a.index)
    .map(({ item }) => item);

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const getPaymentCaseStudy = (slug: string) =>
  paymentCaseStudies.find((item) => item.slug === slug);
