export const cookbookChapters = [
  {
    number: "01",
    slug: "campaign-tracking",
    title: "Campaign Tracking & UTM Systems",
    description:
      "Recipes for campaign URLs, UTM parameters, traffic splitting, QR tracking, attribution labels, and cleaner marketing measurement.",
    tags: ["UTMs", "Campaigns", "A/B testing"],
  },
  {
    number: "02",
    slug: "analytics-qa",
    title: "Analytics QA & Conversion Measurement",
    description:
      "Recipes for validating events, conversions, forms, funnels, click tracking, and analytics data quality.",
    tags: ["GA4", "Events", "Conversions"],
  },
  {
    number: "03",
    slug: "seo-growth",
    title: "SEO Growth & Audit Automation",
    description:
      "Recipes for automating technical SEO checks, metadata reviews, SERP analysis, indexability checks, and growth diagnostics.",
    tags: ["SEO", "Audits", "SERP"],
  },
  {
    number: "04",
    slug: "crawling-redirects",
    title: "Crawling, Broken Links & Redirect Logic",
    description:
      "Recipes for detecting broken links, redirect chains, 404s, old CMS URLs, internal linking gaps, and migration issues.",
    tags: ["Redirects", "404s", "Crawling"],
  },
  {
    number: "05",
    slug: "browser-diagnostics",
    title: "Rendering, JavaScript & Browser Diagnostics",
    description:
      "Recipes for inspecting scripts, third-party resources, rendering issues, loaded assets, browser behavior, and DevTools checks.",
    tags: ["JavaScript", "DevTools", "Rendering"],
  },
  {
    number: "06",
    slug: "performance",
    title: "Core Web Vitals & Performance Diagnostics",
    description:
      "Recipes for LCP, INP, CLS, image delivery, render-blocking resources, page speed, and template-level performance issues.",
    tags: ["LCP", "INP", "CLS"],
  },
  {
    number: "07",
    slug: "search-console-serp",
    title: "Search Console, SERP & Search Demand Analysis",
    description:
      "Recipes for Search Console exports, SERP API data, query clustering, CTR analysis, demand patterns, and search visibility.",
    tags: ["GSC", "SERP API", "Search demand"],
  },
  {
    number: "08",
    slug: "internal-linking",
    title: "Internal Linking & Site Architecture Graphs",
    description:
      "Recipes for internal link analysis, topic clusters, orphan pages, anchor text, related pages, and graph-based site structure.",
    tags: ["Internal links", "Architecture", "Graphs"],
  },
  {
    number: "09",
    slug: "data-workflows",
    title: "Large-Scale Data Workflows with Python, Polars & Cloud",
    description:
      "Recipes for large CSVs, Parquet, Polars, lazy queries, cloud storage, partitioned datasets, and performance-aware analysis.",
    tags: ["Python", "Polars", "Cloud"],
  },
  {
    number: "10",
    slug: "reporting",
    title: "Reporting, Visualization & Decision Systems",
    description:
      "Recipes for KPI tables, scorecards, audit priority matrices, decision memos, charts, and executive reporting.",
    tags: ["Reporting", "Dashboards", "Decisions"],
  },
];

export const cookbookRecipes = [
  {
    number: "001",
    title: "Split one campaign URL between two landing pages and track variants with UTMs",
    slug: "split-campaign-traffic-utm",
    chapterSlug: "campaign-tracking",
    description:
      "A JavaScript recipe for splitting one public campaign URL between two destinations and tagging each variant with UTM parameters.",
    language: "JavaScript",
    difficulty: "Beginner",
    tags: ["UTMs", "A/B testing", "Cloudflare Workers"],
    href: "/resources/campaign-tracking/split-campaign-traffic-utm/",
  },
];

export function getRecipesByChapter(chapterSlug: string) {
  return cookbookRecipes.filter((recipe) => recipe.chapterSlug === chapterSlug);
}

export function getChapterBySlug(chapterSlug: string) {
  return cookbookChapters.find((chapter) => chapter.slug === chapterSlug);
}
