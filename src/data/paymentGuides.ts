/**
 * Step-by-step payment guides. Listed on the case studies page
 * under "Guides", and linked from related case studies.
 */

export type PaymentGuide = {
  slug: string;
  title: string;
  summary: string;
  audience: string;
  published: string; // ISO date
  updated?: string; // ISO date
  readingMinutes: number;
  tags: string[];
};

export const paymentGuides: PaymentGuide[] = [
  {
    slug: "dlocal-integration-step-by-step",
    title: "How to integrate dLocal: a step-by-step guide for managers, with real API examples",
    summary:
      "What happens in a dLocal integration, from the contract to the first live payment: the steps, the API calls, the costs, the team and the time it takes, explained from zero.",
    audience: "Managers and non-technical teams",
    published: "2026-10-30",
    readingMinutes: 18,
    tags: [
      "dLocal",
      "dLocal API",
      "Payment integration",
      "Payins",
      "Smart Fields",
      "Webhooks",
      "HMAC signature",
      "PCI DSS",
      "Sandbox",
      "Refunds",
      "Payment costs",
      "Latin America",
    ],
  },
  {
    slug: "gcash-philippines-explained",
    title: "How GCash works: a step-by-step guide to accepting GCash payments and fixing failed payments in the Philippines",
    summary:
      "What GCash is, why it was created, how the infrastructure and the integration work, the mistakes companies make, and a method to diagnose failed GCash payments, with terms explained through examples.",
    audience: "Managers, product and payment teams",
    published: "2026-10-30",
    readingMinutes: 22,
    tags: [
      "GCash",
      "Philippines",
      "E-wallet",
      "QR Ph",
      "InstaPay",
      "Payment gateway",
      "Payment failures",
      "Webhooks",
      "Wallet limits",
      "KYC",
      "Alipay+",
      "Southeast Asia",
    ],
  },
];

export const getPaymentGuide = (slug: string) => paymentGuides.find((guide) => guide.slug === slug);

/** Newest first; for equal dates, the guide added later comes first. */
export const sortedPaymentGuides = () =>
  paymentGuides
    .map((guide, index) => ({ guide, index }))
    .sort((a, b) => b.guide.published.localeCompare(a.guide.published) || b.index - a.index)
    .map(({ guide }) => guide);
