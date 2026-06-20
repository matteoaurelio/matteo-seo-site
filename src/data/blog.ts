export type BlogTopic = {
  slug: string;
  name: string;
  description: string;
  icon: string;
};

export type BlogPost = {
  slug: string;
  topic: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  icon: string;
  image?: string;
  imageAlt?: string;
};

export const blogTopics: BlogTopic[] = [
  {
    slug: "technical-seo",
    name: "Technical SEO",
    description:
      "Practical explanations about crawlability, indexation, redirects, site architecture, Core Web Vitals, and technical issues that affect organic visibility.",
    icon: "🧭",
  },
  {
    slug: "analytics-measurement",
    name: "Analytics & Measurement",
    description:
      "How to measure what matters: GA4, data layers, conversion tracking, event quality, attribution, and analytics audits.",
    icon: "📊",
  },
  {
    slug: "ai-visibility",
    name: "AI Visibility",
    description:
      "How websites can become easier for search engines and AI-powered discovery systems to understand, summarize, and cite.",
    icon: "🤖",
  },
  {
    slug: "organic-growth",
    name: "Organic Growth",
    description:
      "Business-focused articles about how websites earn trust, answer customer questions, collect feedback, build reviews, and turn organic visibility into real demand.",
    icon: "🌱",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "redirects-seo-cms-migration",
    topic: "technical-seo",
    title: "Redirects in SEO: Why They Matter During CMS Migrations",
    description:
      "A practical guide to permanent and temporary redirects, 404 errors, broken links, indexation cleanup, and why redirect audits matter when changing a CMS.",
    date: "2026-06-06",
    readingTime: "8 min read",
    icon: "🔁",
    image: "/images/blog/redirect.jpg",
    imageAlt:
      "Road sign with an arrow, representing URL redirects and SEO migration paths",
  },
  {
    slug: "google-ai-mode-search-business-impact",
    topic: "ai-visibility",
    title:
      "What Is Google AI Mode and What Does It Mean for Businesses in 2026?",
    description:
      "A practical guide to Google AI Mode, AI search behavior, user trust, click impact, limitations, and what businesses can do to protect qualified organic demand.",
    date: "2026-06-07",
    readingTime: "11 min read",
    icon: "🤖",
  },
  {
    slug: "product-graph-related-products-services-seo",
    topic: "organic-growth",
    title:
      "The Product Graph: How Related Products and Services Help Businesses Get Found",
    description:
      "How related products, service pages, recommendations, internal links, and offer architecture help businesses improve organic discovery and conversion.",
    date: "2026-06-07",
    readingTime: "12 min read",
    icon: "🕸️",
  },
  {
    slug: "core-web-vitals-pagespeed-audit",
    topic: "technical-seo",
    title:
      "Core Web Vitals Audit: How to Read a Real PageSpeed Insights Report",
    description:
      "A practical Core Web Vitals audit using a real PageSpeed Insights example, explaining LCP, INP, CLS, render-blocking resources, lazy loading, image optimization, and developer priorities.",
    date: "2026-06-07",
    readingTime: "14 min read",
    icon: "⚡",
    image: "/images/blog/aicm-pagespeed-cover-core-web-vitals.png",
    imageAlt:
      "Mobile PageSpeed Insights report showing Core Web Vitals diagnostics",
  },
  {
    slug: "utm-ab-test-traffic-split-food-delivery",
    topic: "analytics-measurement",
    title:
      "How to Run a Simple A/B Test with UTM Parameters and Traffic Splitting",
    description:
      "A practical analytics example showing how a food delivery business could split one campaign URL between two menu pages, tag traffic with UTMs, and measure conversions.",
    date: "2026-06-07",
    readingTime: "13 min read",
    icon: "🧪",
  },
  {
    slug: "how-to-get-more-website-traffic-keyword-research",
    topic: "organic-growth",
    title:
      "How to Get More Website Traffic with Keyword Research That Solves Real Customer Problems",
    description:
      "A practical guide for business owners and marketing teams on how to use keyword research to find customer problems, adjacent demand, and organic traffic opportunities.",
    date: "2026-06-09",
    readingTime: "14 min read",
    icon: "🔎",
  },
  {
    slug: "how-to-drive-conversion-through-ai-visibility",
    topic: "ai-visibility",
    title: "How Do You Boost Conversion Rates by Increasing Your AI Visibility",
    description:
      "A practical guide for business owners on AI visibility, AI crawlers, citations, hallucinations, outdated content risk, and how websites can turn AI discovery into real conversion.",
    date: "2026-06-18",
    readingTime: "18 min read",
    icon: "🤖",
  },
  {
    slug: "google-discover-preview-meta-tags",
    topic: "technical-seo",
    title:
      "Google Discover, Large Image Previews, and the Robots Meta Tags That Can Affect Your Traffic",
    description:
      "A practical explanation of max-image-preview:large, max-snippet:-1, and max-video-preview:-1, and why these small robots meta tags matter for Google Discover, publishers, and blog traffic.",
    date: "2026-06-20",
    readingTime: "10 min read",
    icon: "📰",
    image: "/images/blog/google-discover-preview-meta-tags.jpeg",
    imageAlt:
      "Google Discover traffic and robots meta tag preview controls for SEO",
  },
];

export function getTopicBySlug(slug: string) {
  return blogTopics.find((topic) => topic.slug === slug);
}

export function getPostsByTopic(topicSlug: string) {
  return blogPosts.filter((post) => post.topic === topicSlug);
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
