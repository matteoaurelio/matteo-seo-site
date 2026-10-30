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
  },
];

/** Every region and technology that appears in at least one case, in a stable order. */
export const caseRegions = [...new Set(paymentCaseStudies.map((item) => item.region))].sort();
export const caseTechnologies = [
  ...new Set(paymentCaseStudies.flatMap((item) => item.technologies)),
].sort();

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const getPaymentCaseStudy = (slug: string) =>
  paymentCaseStudies.find((item) => item.slug === slug);
