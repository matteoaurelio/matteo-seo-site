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
];

export const getPaymentGuide = (slug: string) => paymentGuides.find((guide) => guide.slug === slug);
