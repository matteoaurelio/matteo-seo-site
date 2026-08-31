export type GrowthService = {
  slug: string;
  number: string;
  name: string;
  shortTitle: string;
  homepagePromise: string;
  homepageDescription: string;
  heroTitle: string;
  heroLede: string;
  heroOutcomes: {
    title: string;
    copy: string;
    evidence?: string;
  }[];
  valueTitle: string;
  valueCopy: string;
  valuePoints: string[];
  workTitle: string;
  workAreas: string[];
  approachTitle: string;
  approach: {
    title: string;
    copy: string;
  }[];
  outcomesTitle: string;
  outcomes: string[];
  tools: string[];
  relatedLinks?: {
    label: string;
    href: string;
  }[];
  calendarTitle: string;
  calendarCopy: string;
};

export const growthServices: GrowthService[] = [
  {
    slug: "expansion-partnerships",
    number: "01",
    name: "Expansion & Partnerships",
    shortTitle: "Create new commercial opportunities",
    homepagePromise:
      "Find new markets, partners and customer segments that can become real revenue.",
    homepageDescription:
      "I speak with prospects, uncover pain points and buying triggers, identify the right companies, and turn the strongest opportunities into focused outreach, pilots and partnerships.",
    heroTitle:
      "I help companies find new ways to grow, establish new commercial opportunities and generate higher revenue.",
    heroLede:
      "That starts with the market: talking to prospects, understanding what they actually need, finding the segments and partners with the strongest fit, and turning those insights into a focused commercial plan.",
    heroOutcomes: [
      {
        title: "New revenue opportunities",
        copy: "Identify markets, customer segments and use cases with a credible path to commercial value.",
      },
      {
        title: "Qualified prospect pipeline",
        copy: "Focus outreach on companies with a clear problem, buying reason and strategic fit.",
      },
      {
        title: "Stronger partnerships",
        copy: "Find partners that can unlock distribution, demand, market access or a better customer proposition.",
      },
    ],
    valueTitle: "Turn market conversations into commercial direction.",
    valueCopy:
      "Expansion is not a desk-research exercise. The fastest way to understand an opportunity is to combine market evidence with direct conversations and learn why a prospect would actually buy, partner or change behaviour.",
    valuePoints: [
      "Enter a new market with a clear target segment, commercial angle and first set of companies to approach.",
      "Speak with prospects to understand their pain points, buying triggers, objections and decision process.",
      "Build a qualified pipeline instead of a large list of companies with no clear reason to engage.",
      "Turn market feedback into a sharper offer, partnership proposition, pilot or next sales move.",
    ],
    workTitle: "What I can help you do",
    workAreas: [
      "Prospect discovery & interviews",
      "Pain-point and buying-trigger research",
      "Market & segment prioritization",
      "Partner mapping & qualification",
      "Focused outreach & pipeline design",
      "Commercial proposition & pilot design",
    ],
    approachTitle: "From market signal to revenue opportunity.",
    approach: [
      {
        title: "Talk to the market",
        copy: "Identify the right prospects and partners, then learn directly what hurts, what they value, how they buy and what would make them act.",
      },
      {
        title: "Find the strongest commercial angle",
        copy: "Combine conversations, market evidence and company data to prioritize the segment, problem and partnership model with the best potential.",
      },
      {
        title: "Build the path to revenue",
        copy: "Translate the opportunity into targeted outreach, meetings, a pilot, a partnership proposal or another concrete commercial next step.",
      },
    ],
    outcomesTitle: "A clear route from opportunity to action.",
    outcomes: [
      "A validated view of which markets, segments or partners are worth pursuing",
      "A sharper ideal customer or partner profile based on real conversations",
      "A qualified list of prospects with clear reasons to engage",
      "A commercial proposition and next step that can move toward meetings, pilots or revenue",
    ],
    tools: [
      "Prospect research",
      "Market mapping",
      "Commercial analysis",
      "CRM & pipeline",
      "Data enrichment",
      "Targeted outreach",
    ],
    calendarTitle: "Looking for a new market, partner or revenue opportunity?",
    calendarCopy:
      "Tell me where you want to grow and what you already know. We can use 20 minutes to identify the strongest commercial questions, the prospects worth speaking to and what a useful first move could look like.",
  },
  {
    slug: "insights-commercial-analysis",
    number: "02",
    name: "Insights & Commercial Analysis",
    shortTitle: "Find where the money is made or lost",
    homepagePromise:
      "Use customer, revenue, margin and operational data to find where money is being made, lost or left on the table.",
    homepageDescription:
      "I turn messy business data into clear commercial decisions: where to focus, what to stop, which customers or products matter, and where revenue or margin can improve.",
    heroTitle:
      "I help companies find the commercial opportunities hidden in their data.",
    heroLede:
      "Customer, revenue, product and operational data should lead to decisions. I analyse the numbers to show what is driving performance, where value is leaking and which actions are most likely to improve revenue or margin.",
    heroOutcomes: [
      {
        title: "Revenue & margin opportunities",
        copy: "Find the customers, products, routes or segments that create disproportionate value — or destroy it.",
      },
      {
        title: "Clearer priorities",
        copy: "Replace competing opinions with evidence about where attention and resources will have the greatest impact.",
      },
      {
        title: "Decision-ready analysis",
        copy: "Turn fragmented data into answers that commercial, product and operational teams can actually use.",
      },
    ],
    valueTitle: "Make the numbers useful to the business.",
    valueCopy:
      "The point of analysis is not another dashboard. It is to understand why performance is changing, quantify what matters and improve the next decision.",
    valuePoints: [
      "Identify the customers, products, routes or segments that drive the most revenue and margin.",
      "Find leakage, anomalies and underperformance that standard reporting does not explain.",
      "Compare markets or commercial segments before deciding where to invest.",
      "Connect data across systems so one business question can be answered properly.",
    ],
    workTitle: "What I can analyse",
    workAreas: [
      "Customer & cohort performance",
      "Revenue & margin drivers",
      "Product & route economics",
      "Market & segment comparisons",
      "Revenue leak discovery",
      "Large-scale data analysis",
    ],
    approachTitle: "From business question to commercial decision.",
    approach: [
      {
        title: "Define the decision",
        copy: "Start with what the company needs to understand, change or choose — and what better information would make that decision easier.",
      },
      {
        title: "Build the evidence",
        copy: "Join, clean and interrogate the relevant data using SQL, Python or whatever level of technical depth the question requires.",
      },
      {
        title: "Turn analysis into action",
        copy: "Translate the findings into priorities, trade-offs and a commercial next step that people outside the data team can use.",
      },
    ],
    outcomesTitle: "Better decisions with a clear economic reason behind them.",
    outcomes: [
      "Revenue and margin opportunities surfaced and quantified",
      "Clearer understanding of customer, product and market performance",
      "Commercial priorities backed by evidence rather than intuition alone",
      "Reusable analysis or reporting when the question needs to be answered repeatedly",
    ],
    tools: ["BigQuery", "SQL", "Python", "Polars", "Parquet", "Analytics"],
    relatedLinks: [
      {
        label: "Large-scale data analysis",
        href: "/services/large-scale-data-analysis/",
      },
      {
        label: "Revenue leak discovery",
        href: "/services/plumbing-hvac-revenue-leak-discovery/",
      },
    ],
    calendarTitle: "Have a commercial question buried in the data?",
    calendarCopy:
      "Tell me the decision you are trying to make. We can look at what information exists, what is still missing and whether a deeper analysis could materially change what you do next.",
  },
  {
    slug: "product-conversion",
    number: "03",
    name: "Product & Conversion",
    shortTitle: "Turn more demand into revenue",
    homepagePromise:
      "Increase revenue from the demand you already have by fixing the parts of the customer journey where people drop.",
    homepageDescription:
      "I analyse funnels, payments, user behaviour and technical friction to find where conversion is being lost, quantify the impact and prioritize the fixes that matter most.",
    heroTitle: "I help companies turn more existing demand into revenue.",
    heroLede:
      "I analyse funnels, payments, customer behaviour and technical friction to find where users abandon, quantify the revenue impact, and prioritize the changes most likely to increase conversion.",
    heroOutcomes: [
      {
        title: "Higher conversion",
        copy: "Find and remove the friction that prevents more users from completing the journey.",
        evidence:
          "42% conversion improvement achieved on a digital customer journey",
      },
      {
        title: "More successful payments",
        copy: "Understand payment acceptance, checkout errors and abandonment instead of treating them as one generic drop-off.",
      },
      {
        title: "Better product priorities",
        copy: "Focus engineering and product effort on the issues with the largest measurable commercial impact.",
      },
    ],
    valueTitle: "Find exactly where revenue is leaking from the journey.",
    valueCopy:
      "A funnel percentage by itself is not enough. I connect behavioural data, technical signals and commercial value so teams know what is broken, why it matters and what to fix first.",
    valuePoints: [
      "Locate the steps where users abandon and quantify the revenue attached to the leak.",
      "Separate UX friction, technical failures, payment issues and measurement problems.",
      "Prioritize product changes by expected commercial impact instead of opinion.",
      "Design experiments with a clear hypothesis, metric and success criterion.",
    ],
    workTitle: "What I can help improve",
    workAreas: [
      "Funnel & journey analysis",
      "Checkout & payment acceptance",
      "Abandonment behaviour",
      "Experiment design & measurement",
      "Landing-page & product UX",
      "Analytics instrumentation",
    ],
    approachTitle: "From drop-off to measurable improvement.",
    approach: [
      {
        title: "Quantify the leak",
        copy: "Locate where the journey loses users or revenue and establish how large the opportunity actually is.",
      },
      {
        title: "Find the cause",
        copy: "Combine event data, technical signals and user behaviour to distinguish symptoms from the underlying problem.",
      },
      {
        title: "Fix and measure",
        copy: "Turn the finding into a product change, experiment or instrumentation fix with a clear measure of commercial success.",
      },
    ],
    outcomesTitle:
      "More customers completing the journey and more revenue captured.",
    outcomes: [
      "Conversion leaks identified and quantified",
      "Product priorities tied to revenue impact",
      "Payment and checkout issues separated from general abandonment",
      "Experiments with clearer hypotheses and success metrics",
    ],
    tools: ["Amplitude", "GA4", "GTM", "BigQuery", "Hotjar", "Experimentation"],
    relatedLinks: [
      {
        label: "Landing pages & conversion copy",
        href: "/services/product-copy-landing-pages/",
      },
    ],
    calendarTitle: "Losing customers somewhere in the journey?",
    calendarCopy:
      "Bring the funnel, product flow or metric that is underperforming. We can use 20 minutes to identify where I would investigate first and what the commercial upside of fixing it could be.",
  },
  {
    slug: "acquisition-visibility",
    number: "04",
    name: "Acquisition & Visibility",
    shortTitle: "Bring in more qualified demand",
    homepagePromise:
      "Reach more of the right customers through search, paid acquisition, stronger landing pages and better digital visibility.",
    homepageDescription:
      "SEO is one part of the system. I connect discoverability, demand, landing experience and measurement so visibility is tied to real commercial outcomes.",
    heroTitle:
      "I help companies bring in more qualified demand and turn visibility into commercial opportunity.",
    heroLede:
      "I improve how the right customers discover a business across search and paid channels, then connect that demand to landing pages, measurement and the next commercial action.",
    heroOutcomes: [
      {
        title: "More qualified demand",
        copy: "Focus acquisition on people already showing the problems, needs or intent that make them worth reaching.",
      },
      {
        title: "Stronger visibility",
        copy: "Improve how the business appears across organic search, AI discovery and paid high-intent channels.",
      },
      {
        title: "Better conversion from traffic",
        copy: "Connect acquisition to clearer landing pages and measurement so clicks have a better chance of becoming business.",
      },
    ],
    valueTitle: "Make discoverability commercially useful.",
    valueCopy:
      "Traffic is not the end state. The goal is to reach the right audience, communicate a relevant offer and know whether acquisition is creating leads, customers or revenue.",
    valuePoints: [
      "Capture organic and paid demand from customers already looking for a solution.",
      "Improve technical SEO, search structure and AI discoverability where visibility is being blocked.",
      "Build landing pages that match the intent behind the traffic and make the next action obvious.",
      "Connect campaigns and search visibility to qualified outcomes instead of reporting clicks in isolation.",
    ],
    workTitle: "What I can help improve",
    workAreas: [
      "Technical SEO & search visibility",
      "AI visibility & discoverability",
      "Google Ads & high-intent demand",
      "Keyword & customer-demand research",
      "Landing pages & conversion copy",
      "Acquisition measurement & attribution",
    ],
    approachTitle: "From demand to measurable customer action.",
    approach: [
      {
        title: "Find valuable intent",
        copy: "Understand what potential customers are trying to solve, what they search for and where high-value demand already exists.",
      },
      {
        title: "Win the right visibility",
        copy: "Fix the technical, content or campaign issues that stop the business from appearing in front of that demand.",
      },
      {
        title: "Convert the attention",
        copy: "Improve the landing experience and measurement so acquisition is judged by leads, customers or revenue — not traffic alone.",
      },
    ],
    outcomesTitle:
      "More of the right people finding the business and taking action.",
    outcomes: [
      "More qualified organic and paid demand",
      "Better alignment between search intent and landing pages",
      "Acquisition activity tied more clearly to commercial outcomes",
      "A stronger digital presence across search and AI discovery",
    ],
    tools: [
      "Technical SEO",
      "AI visibility",
      "Google Ads",
      "Search Console",
      "GA4",
      "Landing pages",
    ],
    relatedLinks: [
      { label: "Google Ads", href: "/services/google-ads/" },
      {
        label: "Landing pages & conversion copy",
        href: "/services/product-copy-landing-pages/",
      },
      { label: "Free visibility check", href: "/free-visibility-check/" },
    ],
    calendarTitle: "Want more qualified customers to find you?",
    calendarCopy:
      "Tell me how customers find you today and where you want more demand. We can use 20 minutes to identify whether the strongest opportunity sits in search, paid acquisition, the landing experience or measurement.",
  },
  {
    slug: "data-automation",
    number: "05",
    name: "Data & Automation",
    shortTitle: "Lower cost and remove manual work",
    homepagePromise:
      "Automate expensive recurring work, connect fragmented systems and build data workflows that let the business move faster.",
    homepageDescription:
      "I use Python, SQL, APIs and cloud data tools to replace repetitive processes, reduce operating cost and make information easier to use at scale.",
    heroTitle:
      "I help companies remove expensive manual work, lower operating costs and build data workflows that scale.",
    heroLede:
      "When a recurring process depends on spreadsheets, manual exports, duplicated work or fragile data flows, I redesign it into a practical system that saves time and keeps working as the business grows.",
    heroOutcomes: [
      {
        title: "Lower operating cost",
        copy: "Reduce recurring compute, processing or process cost by redesigning how the work is done.",
        evidence:
          "90% cloud cost reduction achieved through a technical redesign",
      },
      {
        title: "Less manual work",
        copy: "Replace repeated exports, transformations and reporting steps with reusable automated workflows.",
      },
      {
        title: "Reliable data flows",
        copy: "Connect systems and build repeatable pipelines so analysis and operations no longer depend on fragile one-off work.",
      },
    ],
    valueTitle:
      "Remove the operational bottlenecks that make growth expensive.",
    valueCopy:
      "Automation should have a business reason. I focus on processes that consume recurring time, create avoidable cost, delay decisions or cannot scale with the team.",
    valuePoints: [
      "Automate recurring reporting, extraction, transformation and operational workflows.",
      "Connect APIs, databases and cloud systems so teams stop moving data manually.",
      "Reduce unnecessary cloud or processing cost when the technical design is inefficient.",
      "Turn one-off analyses into reusable workflows when the business needs the answer repeatedly.",
    ],
    workTitle: "What I can build or automate",
    workAreas: [
      "Python & SQL workflows",
      "API integrations",
      "BigQuery data pipelines",
      "Automated reporting",
      "Data extraction & transformation",
      "Operational process automation",
    ],
    approachTitle: "From expensive repetition to a reusable system.",
    approach: [
      {
        title: "Find the costly bottleneck",
        copy: "Identify the manual process, technical dependency or broken information flow that is consuming time or money.",
      },
      {
        title: "Design the simplest useful system",
        copy: "Choose a pragmatic workflow that solves the business need without creating unnecessary infrastructure or maintenance.",
      },
      {
        title: "Automate and make it reusable",
        copy: "Build, validate and document the workflow so it can support recurring work reliably instead of solving the problem once.",
      },
    ],
    outcomesTitle:
      "Lower recurring cost, faster execution and less operational friction.",
    outcomes: [
      "Less time spent on repetitive operational work",
      "Lower recurring compute or processing cost where optimization is possible",
      "More reliable data movement and reporting",
      "Reusable technical workflows instead of one-off manual fixes",
    ],
    tools: [
      "Python",
      "SQL",
      "APIs",
      "BigQuery",
      "Cloud workflows",
      "Automation",
    ],
    calendarTitle:
      "Is manual work or fragmented data costing the team time or money?",
    calendarCopy:
      "Show me the process that keeps repeating or the information flow that keeps breaking. We can use 20 minutes to understand the cost of the bottleneck and whether automation could remove it.",
  },
];

export function getGrowthService(slug: string) {
  return growthServices.find((service) => service.slug === slug);
}
