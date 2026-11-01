/**
 * The five services. Each service page, the services hub, the header menu
 * and the homepage read from this file, so wording and links stay in one
 * place.
 *
 * Writing rules for this file:
 * - Every sentence is a full sentence in international (British) English.
 * - Every number is a real result or a count of published work. Client
 *   names, markets and figures stay anonymous unless already public.
 * - Quotes are copied verbatim from src/data/achievements.ts.
 */

export type ServiceSlug =
  | "growth-marketing"
  | "data-engineering-automation"
  | "product-improvement"
  | "business-development"
  | "payment-solutions";

export interface ServiceLink {
  href: string;
  title: string;
  type: string;
}

export interface Service {
  slug: ServiceSlug;
  path: string;
  number: string;
  /** Name used in menus and cards. */
  name: string;
  /** One line used in menus, cards and the homepage. */
  short: string;
  /** Keywords shown under the name on cards. */
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  /** schema.org serviceType values. */
  serviceTypes: string[];
  hero: {
    kicker: string;
    title: string;
    lede: string;
    image: string;
    imagePortrait: string;
    ogImage: string;
  };
  stats: { value: string; label: string }[];
  outcomes: { title: string; copy: string }[];
  signals: string[];
  scope: { title: string; copy: string; items: string[] }[];
  approach: { title: string; copy: string }[];
  firstDeliverable: string;
  quote: { recommendationId: string; text: string };
  evidence: ServiceLink[];
  evidenceMore?: { href: string; label: string };
  tools: string[];
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaCopy: string;
}

const img = (name: string) => ({
  image: `/images/services/${name}`,
  imagePortrait: `/images/services/${name}-portrait-900.webp`,
  ogImage: `/images/services/${name}-og.jpg`,
});

export const services: Service[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "growth-marketing",
    path: "/services/growth-marketing/",
    number: "01",
    name: "Growth Marketing",
    short: "SEO, AI search, paid ads and GA4, measured against revenue",
    tags: ["SEO", "GEO", "Google Ads", "GA4"],
    metaTitle: "Growth Marketing Consultant: SEO, GEO, Paid Ads & GA4 | Matteo Arellano",
    metaDescription:
      "Growth marketing consultant for SEO, generative engine optimisation (GEO), Google Ads and GA4. I connect every channel to leads and revenue, not traffic alone.",
    serviceTypes: [
      "Growth marketing",
      "Search engine optimisation",
      "Generative engine optimisation",
      "Google Ads management",
      "Google Analytics 4 implementation",
    ],
    hero: {
      kicker: "Service 01 · Growth Marketing",
      title: "Growth marketing that turns search, AI answers and ads into revenue.",
      lede: "I help companies win more qualified demand through SEO, generative engine optimisation (GEO), Google Ads and GA4. Every channel is measured by the leads, sales or revenue it brings, not by traffic alone.",
      ...img("growth-marketing"),
    },
    stats: [
      { value: "+42%", label: "conversion improvement on a digital customer journey" },
      { value: "11", label: "published articles on SEO, AI search and measurement" },
      { value: "7", label: "languages for international SEO and campaigns" },
    ],
    outcomes: [
      {
        title: "More qualified demand",
        copy: "Your pages appear for the searches and questions that real buyers use, in Google and in AI answers.",
      },
      {
        title: "Ad spend that pays back",
        copy: "Campaigns are judged on conversions and lead quality, so budget moves away from clicks that never buy.",
      },
      {
        title: "Numbers you can trust",
        copy: "GA4, Tag Manager and consent are set up so that conversions, channels and campaigns are reported correctly.",
      },
      {
        title: "Pages that convert",
        copy: "Landing pages answer the buyer's questions and make the next step obvious, so more visits become enquiries.",
      },
    ],
    signals: [
      "Organic traffic has stalled or fallen, and nobody can say exactly why.",
      "Your competitors appear in Google AI Overviews or ChatGPT answers, and you do not.",
      "Google Ads spend keeps rising while the quality of leads stays the same.",
      "GA4 and your sales system report different numbers for the same month.",
      "You are launching in a new country or language and need search demand from day one.",
    ],
    scope: [
      {
        title: "SEO and technical SEO",
        copy: "I find and fix what stops search engines from crawling, understanding and ranking the pages that matter most.",
        items: ["Technical audits", "Core Web Vitals", "Migrations and redirects", "International SEO and hreflang"],
      },
      {
        title: "AI search visibility (GEO)",
        copy: "I make your business easy for AI answers to understand, trust and cite, starting from the same foundations as SEO.",
        items: ["Google AI Overviews and AI Mode", "ChatGPT and Perplexity", "Clear facts and evidence", "Structured data"],
      },
      {
        title: "Paid acquisition",
        copy: "I audit, set up and improve Google Ads so that budget goes to searches that turn into customers.",
        items: ["Google Ads audits", "Conversion tracking", "Local Services Ads", "Landing page tests"],
      },
      {
        title: "Measurement and GA4",
        copy: "I make your analytics reliable enough to decide budgets on, from consent to the final conversion.",
        items: ["GA4 and Google Tag Manager", "Consent mode", "UTM and campaign tracking", "Looker Studio reporting"],
      },
      {
        title: "Content and landing pages",
        copy: "I write and restructure pages around the questions buyers actually ask before they decide.",
        items: ["Keyword and demand research", "Landing page copy", "Product pages", "Multilingual pages"],
      },
    ],
    approach: [
      {
        title: "Audit the demand",
        copy: "I review search data, GA4, ad accounts and the site itself to find where qualified demand is lost or never captured.",
      },
      {
        title: "Fix what blocks it",
        copy: "We start with the technical, tracking or content issues that have the largest effect on leads and revenue.",
      },
      {
        title: "Measure and scale",
        copy: "Each change is measured against conversions, and the channels that pay back receive more budget and attention.",
      },
    ],
    firstDeliverable:
      "The first deliverable is a prioritised growth audit: what is blocking demand, what each fix is worth and the order in which to do them.",
    quote: {
      recommendationId: "oscar-flores",
      text: "His range is unusual. In the same week he would run a technical performance audit, dig into payment acceptance rates, and build an AI pipeline to pull customer sentiment from hundreds of YouTube comments. His work translates directly into results.",
    },
    evidence: [
      { type: "Article", title: "How Do You Boost Conversion Rates by Increasing Your AI Visibility", href: "/blog/ai-visibility/how-to-drive-conversion-through-ai-visibility/" },
      { type: "Article", title: "What Is Google AI Mode and What Does It Mean for Businesses in 2026?", href: "/blog/ai-visibility/google-ai-mode-search-business-impact/" },
      { type: "Article", title: "How to Get More Website Traffic with Keyword Research That Solves Real Customer Problems", href: "/blog/organic-growth/how-to-get-more-website-traffic-keyword-research/" },
      { type: "Article", title: "Core Web Vitals Audit: How to Read a Real PageSpeed Insights Report", href: "/blog/technical-seo/core-web-vitals-pagespeed-audit/" },
      { type: "Article", title: "Is Your Cookie Banner Aligned With Your Tracking?", href: "/blog/technical-seo/is-your-cookie-banner-aligned-with-your-tracking/" },
      { type: "Field note", title: "Country Domains vs. One Multilingual Site: When Each Pays Off", href: "/journal/2026-10-29-country-domains-vs-one-multilingual-site-when-each-pays-off/" },
      { type: "Field note", title: "One IP Address, Many People: What NAT Means for Your Analytics and Ads", href: "/journal/2026-10-31-one-ip-address-many-people-what-nat-means-for-your-analytics-and-ads/" },
      { type: "Recipe", title: "How to Run a Simple A/B Test with UTM Parameters and Traffic Splitting", href: "/blog/analytics-measurement/utm-ab-test-traffic-split-food-delivery/" },
      { type: "Specialist page", title: "Landing page copy for products that need to rank, explain and convert", href: "/services/product-copy-landing-pages/" },
      { type: "Specialist page", title: "Revenue leak discovery for plumbing and HVAC companies on Google Local Services Ads", href: "/services/plumbing-hvac-revenue-leak-discovery/" },
    ],
    evidenceMore: { href: "/blog/", label: "All articles by topic" },
    tools: ["Google Search Console", "GA4", "Google Tag Manager", "Google Ads", "Looker Studio", "BigQuery", "PageSpeed Insights", "Python"],
    faqs: [
      {
        q: "What is the difference between SEO and GEO?",
        a: "SEO improves how a website ranks in search results. GEO, or generative engine optimisation, improves how often AI answers in Google AI Overviews, ChatGPT and Perplexity mention and cite your business. Google states that its AI features rely on the same core ranking systems as Search, so technical SEO and genuinely useful content remain the foundation for both.",
      },
      {
        q: "Do you manage Google Ads campaigns?",
        a: "Yes. I audit, set up and improve Google Ads campaigns, including Local Services Ads. The focus is on conversion tracking and lead quality, because a cheaper click is only useful if it becomes a customer.",
      },
      {
        q: "Can you fix our GA4 set-up?",
        a: "Yes. I audit GA4 and Google Tag Manager, repair broken events and conversions, and check that consent, internal traffic and cross-domain tracking are configured correctly. The result is reporting that your sales and finance teams can agree with.",
      },
      {
        q: "Which companies do you work with?",
        a: "I work best with companies that already have a product and some demand, such as e-commerce shops, marketplaces, SaaS, travel and local service businesses. Most want more of the right customers rather than more traffic.",
      },
      {
        q: "Can you work in languages other than English?",
        a: "Yes. I work in seven languages, including Spanish, Dutch, Portuguese and French, which helps with international SEO, multilingual landing pages and campaigns in new markets.",
      },
    ],
    ctaTitle: "Want more of the right customers to find you?",
    ctaCopy:
      "Tell me how customers find you today and where you want more demand. In 20 minutes we can see whether the biggest opportunity sits in search, AI answers, ads or measurement.",
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "data-engineering-automation",
    path: "/services/data-engineering-automation/",
    number: "02",
    name: "Data Engineering & Automation",
    short: "Big data analytics, pipelines and automation that cut cost and manual work",
    tags: ["Data engineering", "Big data analytics", "Python", "Automation"],
    metaTitle: "Data Engineering, Big Data Analytics & Automation Consultant | Matteo Arellano",
    metaDescription:
      "Data engineering and automation consultant. I build data pipelines, analyse large datasets with Python, SQL and BigQuery, and automate recurring work to lower cost.",
    serviceTypes: ["Data engineering", "Big data analytics", "Business process automation", "Data pipeline development"],
    hero: {
      kicker: "Service 02 · Data Engineering & Automation",
      title: "Data engineering and automation that lower cost and speed up decisions.",
      lede: "I build data pipelines, analyse large datasets and automate recurring work with Python, SQL, BigQuery and cloud tools. The aim is simple: lower processing cost, fewer manual hours and numbers your team can trust.",
      ...img("data-engineering-automation"),
    },
    stats: [
      { value: "−90%", label: "cloud-processing cost after a pipeline redesign" },
      { value: "30+", label: "analytical models built for management decisions" },
      { value: "8", label: "written recommendations from data and engineering colleagues" },
    ],
    outcomes: [
      {
        title: "Lower data costs",
        copy: "Pipelines read, store and compute only what the business needs, so cloud bills fall without losing detail.",
      },
      {
        title: "Fewer manual hours",
        copy: "Recurring exports, spreadsheet work and reports run automatically, so people spend their time on decisions.",
      },
      {
        title: "Faster answers",
        copy: "Questions that sat in a reporting backlog for weeks are answered from clean, connected data in hours.",
      },
      {
        title: "Numbers you can defend",
        copy: "Duplicates, broken identifiers and inconsistent logic are found and fixed before they reach a decision.",
      },
    ],
    signals: [
      "Your cloud data bill grows faster than the value you get from the data.",
      "People spend hours every week exporting, cleaning and pasting data into spreadsheets.",
      "Important questions wait weeks because the data sits in systems that do not talk to each other.",
      "Two reports show different numbers, and nobody knows which one is right.",
      "Your team has a dataset too large for Excel and no clear way to analyse it.",
    ],
    scope: [
      {
        title: "Data engineering",
        copy: "I design and repair the pipelines that move data from source systems into a warehouse your team can use.",
        items: ["ETL and ELT pipelines", "BigQuery and cloud warehouses", "Partitioning and cost tuning", "Data quality checks"],
      },
      {
        title: "Big data analytics",
        copy: "I analyse millions of transactions, events or records to find where revenue is made, lost or left on the table.",
        items: ["Python and Polars", "SQL at scale", "Segment and cohort analysis", "Root-cause analysis"],
      },
      {
        title: "Automation",
        copy: "I replace repetitive manual work with scheduled workflows that run the same logic every time.",
        items: ["API integrations", "Scheduled workflows", "Automated reporting", "Spreadsheet replacement"],
      },
      {
        title: "Models and decision support",
        copy: "I build the statistical and financial models that turn data into a decision that management can act on.",
        items: ["Forecasting and statistical models", "Anomaly detection", "Financial and operational models", "Dashboards"],
      },
    ],
    approach: [
      {
        title: "Start from the question",
        copy: "We define the decision or cost the work should change, so the technology serves a business outcome.",
      },
      {
        title: "Build it properly",
        copy: "I build pipelines and analyses with tested logic, documented steps and checks on the data at every stage.",
      },
      {
        title: "Hand it over running",
        copy: "Your team receives a workflow that runs on its own, with documentation and a clear owner.",
      },
    ],
    firstDeliverable:
      "The first deliverable is a short data review: where time and money are lost today, what to automate first and the expected saving.",
    quote: {
      recommendationId: "nikolay-andonov",
      text: "Matteo's technical expertise and his analytical skills solved a problem that has been long lingering in our backlog, which was thought to be currently unsolvable.",
    },
    evidence: [
      { type: "Field note", title: "How I Turned Mexico’s DENUE API Into a National Excel Dataset With Python", href: "/journal/2026-08-02-how-i-turned-mexicos-denue-api-into-a-national-excel-dataset-with-python/" },
      { type: "Field note", title: "I built my first route map", href: "/journal/2026-08-25-i-built-my-first-route-map/" },
      { type: "Cookbook", title: "Large-Scale Data Workflows with Python, Polars & Cloud", href: "/resources/data-workflows/" },
      { type: "Cookbook", title: "Reporting, Visualization & Decision Systems", href: "/resources/reporting/" },
      { type: "Evidence", title: "Selected outcomes: −90% processing cost and 30+ analytical models", href: "/achievements/#outcomes" },
      { type: "Evidence", title: "Recommendations from data science and engineering colleagues", href: "/achievements/#recommendations" },
    ],
    evidenceMore: { href: "/resources/", label: "The technical cookbook" },
    tools: ["Python", "SQL", "Polars", "BigQuery", "Google Cloud", "AWS", "Hadoop", "APIs", "Looker Studio"],
    faqs: [
      {
        q: "What kind of data engineering work do you do?",
        a: "I design and fix data pipelines, move data into warehouses such as BigQuery, reduce processing cost and add data quality checks. I also analyse large datasets and automate the reporting built on top of them.",
      },
      {
        q: "How did you reduce cloud-processing cost by 90%?",
        a: "I redesigned a cloud data-processing workflow around more efficient data-processing technologies. Its recurring processing cost fell by roughly 90%.",
      },
      {
        q: "Do you build machine-learning models?",
        a: "Yes, when a model is the right answer. I have built statistical models and an anomaly-detection model for financial transactions that ran in production, using data from Hadoop and training on AWS.",
      },
      {
        q: "Will our team be able to maintain the work?",
        a: "Yes. Every workflow is documented, tested and handed over with a clear owner. I prefer simple, maintainable code over clever code that only its author understands.",
      },
    ],
    ctaTitle: "Is data costing you more time or money than it should?",
    ctaCopy:
      "Tell me which reports, datasets or workflows slow your team down. In 20 minutes we can see what to automate first and what it could save.",
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "product-improvement",
    path: "/services/product-improvement/",
    number: "03",
    name: "Product Improvement",
    short: "Find where users drop off, size it and ship the fix with your team",
    tags: ["Product analytics", "UX research", "Experimentation", "QA"],
    metaTitle: "Product Improvement Consultant: Analytics, UX & Experimentation | Matteo Arellano",
    metaDescription:
      "Product improvement consultant. I use Amplitude, GA4, BigQuery and user research to find where customers drop off, then ship and test the fix with your team.",
    serviceTypes: ["Product improvement", "Product analytics", "Conversion rate optimisation", "UX research", "Experimentation"],
    hero: {
      kicker: "Service 03 · Product Improvement",
      title: "Product improvement, from the first click to a shipped and tested fix.",
      lede: "I find where users drop off between search and payment, size what it costs and work with product, design and engineering teams to ship and test the fix. I combine Amplitude, GA4 and BigQuery data with session recordings, customer feedback and technical audits.",
      ...img("product-improvement"),
    },
    stats: [
      { value: "+42%", label: "conversion improvement on a digital customer journey" },
      { value: "48", label: "improvement patterns in my customer-journey playbook" },
      { value: "3", label: "worked product research case studies, published in full" },
    ],
    outcomes: [
      {
        title: "Higher conversion",
        copy: "The steps where users abandon are found, explained and fixed, so more of your existing demand becomes revenue.",
      },
      {
        title: "A backlog ranked by value",
        copy: "Each improvement has an estimated revenue impact, so product and engineering time goes where it pays back.",
      },
      {
        title: "Changes that are proven",
        copy: "Each fix ships with a hypothesis, a primary metric and guardrails, so you know whether it worked.",
      },
      {
        title: "Fewer bugs in production",
        copy: "Tracking, QA and cross-browser checks catch broken journeys before customers do.",
      },
    ],
    signals: [
      "Many users start a search, a sign-up or a checkout, and too few finish it.",
      "The roadmap is decided by opinion because nobody has sized the opportunities.",
      "Your analytics show where people leave, but not why they leave.",
      "A release went live and conversion fell, and the team cannot find the cause.",
      "Product, engineering and commercial teams need one person who can speak to all of them.",
    ],
    scope: [
      {
        title: "Product analytics",
        copy: "I quantify where users drop off and what each step of the journey is worth.",
        items: ["Amplitude", "GA4 and BigQuery", "Funnel and cohort analysis", "Tracking plans"],
      },
      {
        title: "Research and UX",
        copy: "I find the behaviour and the questions behind the numbers, then turn them into specific design changes.",
        items: ["Session recordings", "Customer and support interviews", "Competitor benchmarks", "Usability reviews"],
      },
      {
        title: "Experimentation",
        copy: "I design tests that answer a business question and protect revenue while they run.",
        items: ["A/B test design", "Hypotheses and guardrails", "Sample sizing", "Result analysis"],
      },
      {
        title: "Delivery with engineering",
        copy: "I write the specification, work with engineers through release and check that the change behaves as intended.",
        items: ["Specifications and tickets", "QA and cross-browser testing", "Feature releases", "Post-launch measurement"],
      },
    ],
    approach: [
      {
        title: "Find the leak",
        copy: "I combine funnel data, recordings, support insight and technical audits to see where and why customers leave.",
      },
      {
        title: "Size and prioritise",
        copy: "Each finding receives a revenue or margin estimate and is ranked by impact, confidence and effort.",
      },
      {
        title: "Ship and prove it",
        copy: "We specify the change, release it with engineering and measure it against a clear success criterion.",
      },
    ],
    firstDeliverable:
      "The first deliverable is an opportunity map: where value leaks along your journey, the evidence behind each finding and a prioritised backlog.",
    quote: {
      recommendationId: "sana-shakeel",
      text: "He combines strong knowledge of product, payments, and technology with a proactive, detail-oriented approach. He quickly identifies gaps, connects the right data points, and focuses on practical ways to improve payment performance, conversion, and customer experience.",
    },
    evidence: [
      { type: "Case study", title: "Why customers abandon a search before they see a single result", href: "/product-research/case-studies/search-dead-ends/" },
      { type: "Case study", title: "How to help customers choose the right option and price faster", href: "/product-research/case-studies/faster-choice-results-pages/" },
      { type: "Case study", title: "Where checkout trust breaks: price changes, form errors and failed orders", href: "/product-research/case-studies/checkout-trust-price-changes-failed-orders/" },
      { type: "Field note", title: "How I Fixed a Broken Funnel Caused by JavaScript Loading Order", href: "/journal/2026-07-24-how-i-fixed-a-broken-funnel-caused-by-javascript-loading-order/" },
      { type: "Field note", title: "How Deep Analytics Work Fixed Product Bugs", href: "/journal/2026-07-18-how-deep-analytics-work-fixed-product-bugs/" },
      { type: "Field note", title: "How to Analyze a Funnel Without Drowning in the Details", href: "/journal/2026-07-13-how-to-analyze-a-funnel-without-drowning-in-the-details/" },
      { type: "Field note", title: "Why I Use BrowserStack to Investigate Website Conversion Problems", href: "/journal/2026-10-21-why-i-use-browserstack-to-investigate-website-conversion-problems/" },
      { type: "Article", title: "Is Your Bounce Rate Driven by Poor Website Performance?", href: "/blog/technical-seo/resource-loading-browser-priority-bounce-rate/" },
    ],
    evidenceMore: { href: "/product-research/case-studies/", label: "All product research case studies" },
    tools: ["Amplitude", "GA4", "BigQuery", "Session recordings", "BrowserStack", "SQL", "Python"],
    faqs: [
      {
        q: "What does a product improvement engagement include?",
        a: "It usually includes an opportunity map, an evidence pack, a prioritised backlog, experiment designs and a tracking plan. When needed, I also stay through release to work with engineers and measure the result.",
      },
      {
        q: "Do you work with Amplitude and GA4?",
        a: "Yes. I use Amplitude, GA4 and BigQuery to measure funnels and cohorts, and I write tracking plans when the events you need are missing.",
      },
      {
        q: "Do you replace a product manager?",
        a: "No. I work alongside product managers, designers and engineers. When a team lacks capacity, I can own one specific problem from diagnosis to release.",
      },
      {
        q: "Which products is this for?",
        a: "It suits any product with a search, a choice and a checkout, such as marketplaces, e-commerce, SaaS and booking platforms. My deepest experience is in travel tech and ground transportation.",
      },
    ],
    ctaTitle: "Are users dropping off somewhere you cannot explain?",
    ctaCopy:
      "Tell me where your journey loses people. In 20 minutes we can form the first hypotheses and decide what evidence would confirm them.",
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "business-development",
    path: "/services/business-development/",
    number: "04",
    name: "Business Development & Technical Sales",
    short: "New markets, partnerships and deals that need technical credibility",
    tags: ["Market entry", "Partnerships", "Prospecting", "Technical sales"],
    metaTitle: "Business Development & Technical Sales Consultant | Matteo Arellano",
    metaDescription:
      "Business development and technical sales consultant. I help companies enter new markets, find partners, prospect and close deals that need technical credibility.",
    serviceTypes: ["Business development", "Technical sales", "Market entry", "Partnership development", "Sales prospecting"],
    hero: {
      kicker: "Service 04 · Business Development & Technical Sales",
      title: "Business development and technical sales for new markets, partners and deals.",
      lede: "I help companies enter new markets, open partner conversations and close deals that need someone who understands both the product and the buyer. I combine market research, prospecting and outreach with technical sales support on integrations, data and payments.",
      ...img("business-development"),
    },
    stats: [
      { value: "7", label: "working languages, including Spanish, Portuguese, Dutch and French" },
      { value: "4", label: "countries lived in across Europe and Latin America" },
      { value: "2017", label: "Rotterdam100 winner for a Next Economy business case" },
    ],
    outcomes: [
      {
        title: "A clear market to pursue",
        copy: "You know which market, segment and partners to approach first, and why they should listen.",
      },
      {
        title: "A qualified pipeline",
        copy: "Outreach goes to companies with a real problem and a reason to buy, not to a long list of names.",
      },
      {
        title: "Partnerships that open doors",
        copy: "Partners bring distribution, market access or a stronger offer, with a pilot that proves the value.",
      },
      {
        title: "Deals that close",
        copy: "Technical questions about integrations, data and payments are answered with confidence during the sale.",
      },
    ],
    signals: [
      "You want to enter a new country and do not know which customers or partners to approach first.",
      "Your outreach produces meetings, but the meetings rarely turn into pipeline.",
      "Buyers ask technical questions that your sales team cannot answer on the call.",
      "A partnership could unlock a market, but nobody has time to build the proposal.",
      "You sell into Latin America or Europe and need someone who speaks the language and knows the market.",
    ],
    scope: [
      {
        title: "Market entry",
        copy: "I map the market, prioritise segments and identify the local requirements that decide whether customers can buy.",
        items: ["Market and segment mapping", "Ideal customer profile", "Local payment and language needs", "Entry plan"],
      },
      {
        title: "Prospecting and outreach",
        copy: "I research the right companies, find the people who decide and write outreach that speaks to their problem.",
        items: ["Prospect research", "Data enrichment", "Outreach sequences", "CRM and pipeline"],
      },
      {
        title: "Partnerships",
        copy: "I find partners with a real reason to work with you and turn the idea into a proposal and a pilot.",
        items: ["Partner mapping", "Partnership proposals", "Pilot design", "Partner onboarding"],
      },
      {
        title: "Technical sales",
        copy: "I join discovery calls and demos to translate between the buyer's problem and what your product can do.",
        items: ["Discovery calls", "Solution design", "Integration and payment questions", "Proposals and RFP answers"],
      },
    ],
    approach: [
      {
        title: "Talk to the market",
        copy: "I speak to prospects and partners to learn what hurts, what they value and how they buy.",
      },
      {
        title: "Choose the strongest angle",
        copy: "We combine those conversations with market data to choose the segment, offer and partners with the best potential.",
      },
      {
        title: "Build the path to revenue",
        copy: "The opportunity becomes targeted outreach, meetings, a pilot or a partnership proposal with a clear next step.",
      },
    ],
    firstDeliverable:
      "The first deliverable is a market and pipeline brief: the segments to target, the first companies to approach and the message for each.",
    quote: {
      recommendationId: "oscar-flores",
      text: "What sets Matteo apart is his diagnostic ability and communication. He breaks up a messy problem into its key parts and explain it so everyone understands the issue and its impact.",
    },
    evidence: [
      { type: "Field note", title: "Making Complex Business Problems Simpler: My Collaboration with WeGoZero", href: "/journal/2026-10-29-making-complex-business-problems-simpler-my-collaboration-with-wegozero/" },
      { type: "Field note", title: "Local Acquiring in Emerging Markets: Benefits, Challenges and Real Examples", href: "/journal/2026-10-19-local-acquiring-in-emerging-markets-benefits-challenges-and-real-examples/" },
      { type: "Field note", title: "Country Domains vs. One Multilingual Site: When Each Pays Off", href: "/journal/2026-10-29-country-domains-vs-one-multilingual-site-when-each-pays-off/" },
      { type: "Field note", title: "How I Turned Mexico’s DENUE API Into a National Excel Dataset With Python", href: "/journal/2026-08-02-how-i-turned-mexicos-denue-api-into-a-national-excel-dataset-with-python/" },
      { type: "Guide", title: "Adyen vs Checkout.com vs dLocal: which payment provider fits your business?", href: "/payment-solutions/guides/adyen-vs-checkout-com-vs-dlocal/" },
      { type: "Evidence", title: "Languages, career path and education", href: "/achievements/#languages" },
    ],
    evidenceMore: { href: "/about/", label: "My story" },
    tools: ["Prospect research", "Market mapping", "CRM and pipeline", "Data enrichment", "Commercial analysis", "Python", "SQL"],
    faqs: [
      {
        q: "What does business development support include?",
        a: "It can include market and segment research, prospect lists, outreach, partner mapping, partnership proposals and pilot design. The scope depends on where your pipeline is weakest.",
      },
      {
        q: "What is technical sales support?",
        a: "Technical sales support means joining discovery calls, demos and proposals when buyers ask detailed questions about integrations, data or payments. I translate between the buyer's problem and what your product can do, so the sale does not stall.",
      },
      {
        q: "Which markets do you know best?",
        a: "I know Latin America and Europe best, especially Mexico, Brazil, Colombia, the Netherlands, Spain and Luxembourg. I have also worked on payment acceptance in the Middle East and North Africa.",
      },
      {
        q: "Can you sell in languages other than English?",
        a: "Yes. I work in seven languages, including Spanish, Catalan, Dutch, Portuguese and French, which helps in markets where buyers expect to be addressed in their own language.",
      },
    ],
    ctaTitle: "Looking for a new market, partner or deal?",
    ctaCopy:
      "Tell me which market or customer you want to reach. In 20 minutes we can test the opportunity and decide on the first concrete step.",
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "payment-solutions",
    path: "/payment-solutions/",
    number: "05",
    name: "Payment Solutions",
    short: "Payment acceptance, PSP integrations and local methods across markets",
    tags: ["Acceptance", "PSPs", "Local methods", "3DS"],
    metaTitle: "Payment Solutions Consultant: Acceptance, PSPs & Local Methods | Matteo Arellano",
    metaDescription:
      "Payment solutions consultant for payment acceptance, PSP integrations, routing, 3DS and local payment methods across Latin America, the Middle East and Europe.",
    serviceTypes: ["Payment solutions consulting", "Payment acceptance optimisation", "PSP integration", "Local payment methods"],
    hero: {
      kicker: "Service 05 · Payment Solutions",
      title: "Payment solutions that let more of your customers pay.",
      lede: "I diagnose underperforming payment flows and design payment set-ups across PSPs, local payment methods, acquiring, routing and 3DS. My work spans Latin America, the Middle East and North Africa, and Europe.",
      ...img("payment-solutions"),
    },
    stats: [
      { value: "+18pp", label: "card approval, from roughly 57% to 75%" },
      { value: "~60%", label: "of payment expirations traced to one timing issue" },
      { value: "94%", label: "of suspected failures correctly reclassified" },
    ],
    outcomes: [
      {
        title: "Higher payment acceptance",
        copy: "More legitimate customers complete payment because declines, 3DS friction and fraud rules are tuned.",
      },
      {
        title: "Payment methods that fit the market",
        copy: "Each market offers the cards, wallets and local methods that customers there actually use.",
      },
      {
        title: "Integrations that hold up",
        copy: "Payment states, webhooks and routing match your booking or order logic, so paid orders do not fail.",
      },
      {
        title: "Clear visibility",
        copy: "You can see what fails, where and why, from checkout to fulfilment and reconciliation.",
      },
    ],
    signals: [
      "Approval rates are falling, or one market or issuer performs far worse than the rest.",
      "You are launching in a new country and need local payment methods or local acquiring.",
      "Payments expire, refunds rise or paid orders fail, and nobody can explain why.",
      "You need to choose or add a payment provider and want an independent view.",
      "Your PSP dashboard does not explain what your customers actually experienced.",
    ],
    scope: [
      {
        title: "Acceptance and conversion",
        copy: "I improve the share of legitimate customers who complete payment.",
        items: ["Authorisation and approval rates", "3DS and authentication", "Fraud-rule friction", "Issuer and acquirer behaviour"],
      },
      {
        title: "Integrations and routing",
        copy: "I design and troubleshoot the technical path between checkout, payment providers and the order.",
        items: ["PSP and API integrations", "Routing and currency logic", "Wallet configuration", "Payment states and webhooks"],
      },
      {
        title: "Local and cross-border payments",
        copy: "I build payment set-ups around how customers in each market actually pay.",
        items: ["Local payment methods", "Local and international acquiring", "Market-specific PSP set-up", "Currency design"],
      },
      {
        title: "Observability and operations",
        copy: "I create the visibility needed to know what is failing, where and why.",
        items: ["Payment monitoring", "Logs and transaction tracing", "Refunds and expirations", "Reconciliation"],
      },
    ],
    approach: [
      {
        title: "Start with the symptom",
        copy: "We begin with the business problem, such as falling approval, failed orders or a market launch.",
      },
      {
        title: "Follow it through the stack",
        copy: "I trace it through checkout, PSP responses, acquiring, 3DS, logs and fulfilment until the cause is clear.",
      },
      {
        title: "Fix and monitor",
        copy: "We implement the change with engineering and payment operations, then monitor it so it stays fixed.",
      },
    ],
    firstDeliverable:
      "The first deliverable is a payment diagnosis: the root cause, its quantified impact, the recommended changes and a plan to measure them.",
    quote: {
      recommendationId: "angelica-garcia-patino",
      text: "I've had the pleasure of working with Matteo at Distribusion, where he often brought payment issues from different markets to our team. What stands out most about him is his passion for the work and his curiosity about other areas. He's always willing to share useful ideas and offer his help so we can solve problems together, even going the extra mile to find the root cause of an issue.",
    },
    evidence: [
      { type: "Case study", title: "How to fix currency rejections when you process payments with dLocal in Colombia and South America", href: "/payment-solutions/case-studies/dlocal-currency-rejections-colombia/" },
      { type: "Case study", title: "How to prevent failed orders when your customers use a cash payment method like OXXO Pay", href: "/payment-solutions/case-studies/oxxo-pay-cash-vouchers-time-limited-inventory/" },
      { type: "Guide", title: "How to integrate dLocal: a step-by-step guide for managers, with real API examples", href: "/payment-solutions/guides/dlocal-integration-step-by-step/" },
      { type: "Guide", title: "How GCash works: a step-by-step guide to accepting GCash payments and fixing failed payments in the Philippines", href: "/payment-solutions/guides/gcash-philippines-explained/" },
      { type: "Guide", title: "Adyen vs Checkout.com vs dLocal: which payment provider fits your business?", href: "/payment-solutions/guides/adyen-vs-checkout-com-vs-dlocal/" },
      { type: "Field note", title: "Who Should Authenticate the Customer? The Difficult Balance Between Payment Conversion, Security and Liability", href: "/journal/2026-10-18-who-should-authenticate-the-customer-the-difficult-balance-between-payment-conversion-security-and-liability/" },
      { type: "Field note", title: "Why Do Brazilian Merchants Wait 30 Days to Receive Their Money?", href: "/journal/2026-10-17-why-do-brazilian-merchants-wait-30-days-to-receive-their-money/" },
      { type: "Field note", title: "The Payment Was Successful. But How Much Money Did the Merchant Actually Keep?", href: "/journal/2026-10-19-the-payment-was-successful-but-how-much-money-did-the-merchant-actually-keep/" },
    ],
    evidenceMore: { href: "/payment-solutions/case-studies/", label: "All payment case studies and guides" },
    tools: ["Adyen", "dLocal", "Checkout.com", "Mercado Pago", "PayPal", "Pix", "OXXO", "Apple Pay", "Google Pay", "3DS2", "BigQuery", "Google Cloud Logging", "New Relic"],
    faqs: [
      {
        q: "How do you improve payment acceptance?",
        a: "I look at the whole payment flow rather than treating a PSP decline as the final answer. I connect issuer responses, acquiring, routing, 3DS, fraud rules, currencies and checkout behaviour to find the real cause, then quantify the fix.",
      },
      {
        q: "Which payment providers have you worked with?",
        a: "I have hands-on experience with Adyen, dLocal, Checkout.com, Mercado Pago and PayPal, and with local methods such as Pix, OXXO, Apple Pay and Google Pay. This means hands-on exposure, not employment by or partnership with these providers.",
      },
      {
        q: "Can you help us choose a payment provider?",
        a: "Yes. I compare providers on market coverage, local acquiring, payment methods, fees and integration effort for your specific markets. My comparison of Adyen, Checkout.com and dLocal shows how I approach that decision.",
      },
      {
        q: "Which markets do you cover?",
        a: "I have worked most in Latin America, especially Mexico, Brazil and Colombia, and on acceptance and acquiring in the Middle East and North Africa. I also work on cross-border payments in Europe.",
      },
    ],
    ctaTitle: "Is a payment problem costing you customers?",
    ctaCopy:
      "Tell me what you see: falling approval, failed orders or a market launch. In 20 minutes we can trace where to look first.",
  },
];

export const servicesBySlug = Object.fromEntries(services.map((service) => [service.slug, service])) as Record<
  ServiceSlug,
  Service
>;

export function getService(slug: ServiceSlug) {
  return servicesBySlug[slug];
}

/** Shared description of how an engagement can be shaped. */
export const engagementFormats = [
  {
    title: "Diagnostic",
    copy: "A focused review of one problem that ends with sized findings and a prioritised plan.",
  },
  {
    title: "Project",
    copy: "Hands-on delivery of the plan with your team, from specification to launch and measurement.",
  },
  {
    title: "Ongoing partner",
    copy: "Regular senior support for a team that needs commercial, analytical and technical judgement in one person.",
  },
];

/** Old service URLs and where they now live. Used for redirects. */
export const retiredServicePaths: Record<string, string> = {
  ["/services/" + "acquisition-visibility/"]: "/services/growth-marketing/",
  ["/services/" + "google-ads/"]: "/services/growth-marketing/",
  ["/services/" + "data-automation/"]: "/services/data-engineering-automation/",
  ["/services/" + "large-scale-data-analysis/"]: "/services/data-engineering-automation/",
  ["/services/" + "insights-commercial-analysis/"]: "/services/product-improvement/",
  ["/services/" + "product-conversion/"]: "/services/product-improvement/",
  ["/services/" + "expansion-partnerships/"]: "/services/business-development/",
};
