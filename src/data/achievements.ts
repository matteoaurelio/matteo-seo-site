/** Areas match the five services, so a visitor can read what fits their problem. */
export type RecommendationArea = "growth" | "payments" | "data" | "product" | "partners";

export type Recommendation = {
  /** Stable anchor used in the URL (#rec-…) and in structured data. */
  id: string;
  name: string;
  headline: string;
  /** Written date where the source shows one ("7 July 2026"). */
  date?: string;
  relationship: string;
  /** Where the recommendation was published or collected. */
  source: "LinkedIn" | "Senja";
  quote: string;
  /** A sentence copied exactly from `quote`. Checked at build time. */
  highlight: string;
  /** Areas of work the text itself speaks to (used by the page filters). */
  areas: RecommendationArea[];
  /** Only set where the quote or relationship names the organisation explicitly. */
  organisation?: string;
  /** Optional: public LinkedIn profile of the recommender. */
  profileUrl?: string;
  /** Optional: square photo in /public/images/recommendations/ (only with permission). */
  photo?: string;
  featured?: boolean;
};

export type Achievement = {
  year: string;
  category: "Award" | "Degree" | "Academic result" | "Recommendation letter";
  title: string;
  institution: string;
  description: string;
  document?: string;
};

export const recommendations: Recommendation[] = [
  {
    id: "oscar-flores",
    name: "Oscar Flores",
    headline:
      "Commercial Strategy & Partnerships Leader | Ex-Kearney | LATAM Market Expert",
    date: "7 July 2026",
    relationship: "Worked with Matteo on the same team",
    source: "LinkedIn",
    featured: true,
    quote: `I worked closely with Matteo on our most demanding client account, and I recommend him without hesitation. Matteo is who you want on the problems nobody has cracked yet.

His range is unusual. In the same week he would run a technical performance audit, dig into payment acceptance rates, and build an AI pipeline to pull customer sentiment from hundreds of YouTube comments. His work translates directly into results.

What sets Matteo apart is his diagnostic ability and communication. He breaks up a messy problem into its key parts and explain it so everyone understands the issue and its impact. He is also direct and honest about everything, which is exactly what true leadership requires.

Matteo raises the standard of any team he joins. Any company working on growth, analytics, or e-commerce performance would be fortunate to have him.`,
    highlight:
      "Matteo is who you want on the problems nobody has cracked yet.",
    areas: ["growth", "payments", "data", "partners"],
  },

  {
    id: "sana-shakeel",
    name: "Sana Shakeel",
    headline: "Fraud Strategy | Payments | Data Science & AI",
    date: "8 October 2026",
    relationship:
      "Worked with Matteo in different teams at Distribusion Technologies",
    source: "LinkedIn",
    featured: true,
    quote: `Working with Matteo has always been a positive and motivating experience. He combines strong knowledge of product, payments, and technology with a proactive, detail-oriented approach. He quickly identifies gaps, connects the right data points, and focuses on practical ways to improve payment performance, conversion, and customer experience.

Collaborating with him on improving the Mexico market was particularly valuable. He consistently looks for ways to improve the existing setup, brings together data from different sources, and helps turn findings into clear, actionable recommendations. His knowledge of modern AI and technology stacks also stands out, especially in the way he uses technology to build solutions that create real value. His Streamlit dashboard, for example, inspired me to think differently about my own tool-building capabilities.

What stands out just as much is his growth mindset and the way he works with others. Matteo is approachable, supportive, reflective, and brings very positive energy to discussions. He is naturally curious, digs deeply into problems that others might overlook, and has a strong understanding of different customer challenges and stages of the payment lifecycle. He is also generous with his knowledge and shows strong leadership qualities through the way he takes initiative, stays engaged, and keeps momentum around key payment and product topics.

I look forward to collaborating with him further at Distribusion, and I am confident that his expertise, initiative, and innovative thinking can bring significant value as we continue to grow across new and emerging markets.`,
    highlight:
      "He quickly identifies gaps, connects the right data points, and focuses on practical ways to improve payment performance, conversion, and customer experience.",
    areas: ["payments", "product", "data"],
    organisation: "Distribusion Technologies",
  },
  {
    id: "angelica-garcia-patino",
    name: "Angélica García Patiño",
    headline: "Payments Optimization & Fraud at Distribusion Technologies",
    date: "16 October 2026",
    relationship: "Worked with Matteo on different teams",
    source: "LinkedIn",
    quote: `I've had the pleasure of working with Matteo at Distribusion, where he often brought payment issues from different markets to our team. What stands out most about him is his passion for the work and his curiosity about other areas. He's always willing to share useful ideas and offer his help so we can solve problems together, even going the extra mile to find the root cause of an issue. He's very supportive: he listens, steps in when needed and helps unblock things whenever he can. His collaboration makes a real difference!`,
    highlight:
      "He's always willing to share useful ideas and offer his help so we can solve problems together, even going the extra mile to find the root cause of an issue.",
    areas: ["payments"],
    organisation: "Distribusion Technologies",
  },
  {
    id: "abhishek-agarwal",
    name: "Abhishek Agarwal",
    headline:
      "Finance Strategy at Deloitte | Risk Management at ICICI Bank | IIM Shillong | Rotary International Youth Leader Awardee",
    date: "24 September 2024",
    relationship: "Worked with Matteo on the same team",
    source: "LinkedIn",
    quote: `Matteo has been a great person to work with who always endeavors to drive new innovations and get into the "Why" of a question. I have worked with him on multiple deployments, and its always a learning experience with him.`,
    highlight:
      "Matteo has been a great person to work with who always endeavors to drive new innovations and get into the \"Why\" of a question.",
    areas: ["data"],
  },

  {
    id: "shalini-kanojia",
    name: "Shalini Kanojia",
    headline: "Senior Finance and Data Analytics Engineer",
    date: "16 October 2024",
    relationship: "Worked with Matteo on the same team",
    source: "LinkedIn",
    quote: `Matteo has outstanding skills in data and analytics, with expertise in Python. We both work on an ML project where we build, train, test, and deploy statistical models in production, continuously improving model performance and make a significant impact on your project. He is an excellent Python trainer and has strong problem-solving skills, which he applies to tackle complex business challenges. Matteo has great potential, and I am grateful to work with him.`,
    highlight:
      "He is an excellent Python trainer and has strong problem-solving skills, which he applies to tackle complex business challenges.",
    areas: ["data"],
  },
  {
    id: "jose-laguna",
    name: "Jose Laguna",
    headline:
      "Consultant / Senior Data Analyst / Senior Data Analyst / BI Lead / BI Coach / M&E Specialist",
    date: "23 September 2024",
    relationship: "Worked with Matteo in different teams",
    source: "LinkedIn",
    quote: `I had the opportunity to work with Matteo in a Cargill project where we were facing a big challenge to deliver a report for the Government of Argentina, before his involvement many teams tried different solutions, however it was Matteo who was able to provide the best solution that would fit the expectations and comply with the different regulations. Matteo's skills go beyond technical capabilities in Python and data analysis: he is an excellent problem solver, he is proactive, a good communicator, he is a change leader and a technology evangelist. In my 9 years working in Cargill I can say that is one of the top 10 professionals with I had work here.`,
    highlight:
      "Matteo's skills go beyond technical capabilities in Python and data analysis: he is an excellent problem solver, he is proactive, a good communicator, he is a change leader and a technology evangelist.",
    areas: ["data"],
    organisation: "Cargill",
  },
  {
    id: "lucas-zarpellon",
    name: "Lucas Zarpellon",
    headline: "Data Science | Advanced Analytics | Power BI | Python | AI",
    date: "23 September 2024",
    relationship: "Worked with Matteo in different teams",
    source: "LinkedIn",
    quote: `I had the pleasure of working with Matteo when I first joined Cargill, and he was instrumental in helping me understand the intricacies of the business. His expertise spans both data-related topics and corporate finance, making him a well-rounded professional. Matteo is a quick learner and an excellent teacher, able to convey complex concepts clearly and deliver sustainable solutions that drive meaningful business growth.`,
    highlight:
      "Matteo is a quick learner and an excellent teacher, able to convey complex concepts clearly and deliver sustainable solutions that drive meaningful business growth.",
    areas: ["data"],
    organisation: "Cargill",
  },
  {
    id: "sagar-makhija",
    name: "Sagar Makhija",
    headline:
      "Data Scientist || Associate Director at Deloitte || Ex Capgemini & Accenture",
    date: "6 July 2024",
    relationship: "Worked with Matteo across different companies",
    source: "LinkedIn",
    quote: `I'd like to express my sincere appreciation for Matteo as a phenomenal Python developer and an indispensable partner in our projects. His deep expertise and unwavering support have been instrumental in delivering successful outcomes time and again. He consistently goes above and beyond, stepping in whenever our team faces challenges, and his problem-solving skills are second to none.

Working closely with him has not only been productive but also incredibly enriching. His ability to translate complex requirements into efficient solutions is truly commendable, making him a linchpin in our collaborative efforts. I feel fortunate to have such a dedicated and talented colleague on our team.

Our collaboration has been incredibly productive, thanks to his dedication and expertise. It's truly a privilege to work alongside someone who not only excels in their role but also contributes positively to the team dynamic. Here's to many more successful projects together!`,
    highlight:
      "His ability to translate complex requirements into efficient solutions is truly commendable, making him a linchpin in our collaborative efforts.",
    areas: ["data"],
  },
  {
    id: "amrita-nandy",
    name: "Amrita Nandy",
    headline: "Senior Analytics Engineer, Cargill",
    date: "19 April 2024",
    relationship: "Worked with Matteo in different teams",
    source: "LinkedIn",
    quote: `Matteo and i had the oppourtinity to work together on a ML project where we came up with the entire model production, from sourcing data from a distributed platform (Hadoop), training the data on aws and piping it back to Hadoop with model results. It was an unsupervised ML model on anamoly detection applied in financial transactions. He is highly aware of different work cultures and excels in collaboration. He is ambitious and thrives working on core business problem. He has great potential and will always be an asset to his team.`,
    highlight:
      "He is highly aware of different work cultures and excels in collaboration.",
    areas: ["data"],
  },
  {
    id: "pedro-p-mendes",
    name: "Pedro P. Mendes",
    headline: "Data Science | Quantitative Finance | Data Engineering",
    date: "9 July 2022",
    relationship: "Worked with Matteo in different teams",
    source: "LinkedIn",
    quote: `Matteo's data and technical skills are really outstanding! It's been an honour to have his support in solving data science & engineering related problems. With a deep understanding of coding concepts and architectural data structure, Matteo has been abreast of latest resources in Python and SQL, including internal coding ecosystem on Hadoop. He's a great professional and poses solid skills in Machine Learning and statistical concepts since the basics to the most advanced topics, without loosing the capacity to share his knowledges and goals in a clear and concise way! I'm grateful to work with him!`,
    highlight:
      "Matteo's data and technical skills are really outstanding!",
    areas: ["data"],
  },
  {
    id: "nikolay-andonov",
    name: "Nikolay Andonov",
    headline: "Senior Analytics Engineer",
    date: "6 July 2022",
    relationship:
      "Held a more senior role, without directly supervising Matteo",
    source: "LinkedIn",
    quote: `Matteo's technical expertise and his analytical skills solved a problem that has been long lingering in our backlog, which was thought to be currently unsolvable. Exchanging knowledge, creating solutions and understanding the issues make him a great pair in the engineering process, alongside with his great personality. I'm thrilled to work side by side with him.`,
    highlight:
      "Matteo's technical expertise and his analytical skills solved a problem that has been long lingering in our backlog, which was thought to be currently unsolvable.",
    areas: ["data"],
  },
  {
    id: "gizem-unlu",
    name: "Gizem ÜNLÜ",
    headline: "Senior Demand Planner",
    date: "12 December 2021",
    relationship: "Professional recommendation",
    source: "LinkedIn",
    quote: `Good to have your support in our optimizing process! Beside the technical skills that you already have on understanding data analysis, your eagerness to learn more and more, really appreciate to share your knowledge with me always enthusiastically and positive attitude. Thanks a lot!`,
    highlight:
      "Good to have your support in our optimizing process!",
    areas: ["data"],
  },

  /* ---------- Collected through Senja (shown on the site as written; no dates are shown in Senja) ---------- */
  {
    id: "daniel-martinez",
    name: "Daniel Martinez",
    headline: "Country Manager",
    relationship: "Worked with Matteo",
    source: "Senja",
    quote: `We have worked in different implementations of website optimizations for different carriers in Colombia.

He has performed great and thanks to him we have received great feedback from our clients.

I´ll recommend for anything related to Growth`,
    highlight:
      "He has performed great and thanks to him we have received great feedback from our clients.",
    areas: ["growth", "partners"],
  },
  {
    id: "diego-vera",
    name: "Diego Vera",
    headline: "Technical Partnership Manager",
    relationship: "Worked with Matteo",
    source: "Senja",
    quote: `I am consistently impressed by Matteo's deep product knowledge and his willingness to share that expertise with the rest of the team.

Matteo is a true collaborator who understands that the ultimate goal is the success of the project. They are always ready to step up and support others to ensure we cross the finish line together. Beyond being incredibly resourceful when faced with challenges, Matteo is highly reliable. Someone you can always count on to deliver great results. Any team would be lucky to have them.`,
    highlight:
      "I am consistently impressed by Matteo's deep product knowledge and his willingness to share that expertise with the rest of the team.",
    areas: ["product", "partners"],
  },
  {
    id: "eduardo-cortes",
    name: "Eduardo Cortes",
    headline: "Senior LATAM BizDev",
    relationship: "Worked with Matteo",
    source: "Senja",
    quote: `I have worked with Matteo on several White Label (WL) projects to date, and he is easily the best hands-on colleague I have ever collaborated with. His work ethic, commitment, and technical depth are top-notch. If he encounters a problem he doesn't know how to solve, he will relentlessly research it until he masters the solution.
What stands out most about Matteo is his level of ownership—he is completely self-managed and excels at both soliciting and implementing constructive feedback. As a Senior team member in our tech company, I can state without hesitation that Matteo is one of our top technical contributors.`,
    highlight:
      "I have worked with Matteo on several White Label (WL) projects to date, and he is easily the best hands-on colleague I have ever collaborated with.",
    areas: ["product", "partners"],
  },
  {
    id: "artem-aspidov",
    name: "Artem Aspidov",
    headline: "Growth Manager",
    relationship: "Worked with Matteo",
    source: "Senja",
    quote: `I have really enjoyed working with Matteo, especially during our time together on the project team for one of the biggest Mexican bus companies. He took on a massive part of the workload and handled the communication, project development, and the analytical side of things extremely well. One of his biggest strengths is his curiosity. He is always asking the right questions and going beyond his regular scope, like when he took the initiative to create custom tools that automated our day-to-day tasks, which made a huge impact on the team.

Because of how well he handles both the technical and project management sides, I would highly recommend Matteo for roles that bridge operations and strategy. He would be a great fit for something like a technical project manager or an analytics lead, where he can take charge of complex, data-heavy projects and build systematic solutions from the ground up.`,
    highlight:
      "He took on a massive part of the workload and handled the communication, project development, and the analytical side of things extremely well.",
    areas: ["product", "data", "partners"],
  },
  {
    id: "alejandra-olvera",
    name: "Alejandra Olvera",
    headline: "Fraud Prevention Analyst",
    relationship: "Worked with Matteo",
    source: "Senja",
    quote: `We've worked together to analyze and try to fix the payment issues customers have been experiencing.
Always with a great attitude and willingness to help.`,
    highlight:
      "Always with a great attitude and willingness to help.",
    areas: ["payments"],
  },
  {
    id: "guilherme-goncalves",
    name: "Guilherme Gonçalves",
    headline: "E-commerce Analyst",
    relationship: "Worked with Matteo",
    source: "Senja",
    quote: `I worked with Matteo within the Growth team, focused on LATAM Whitelabels as well as on improving the global whitelabel product as a whole, bringing recommendations that increased conversions and also recommendations for building/optimizing the CMS so we could perform better organically. A concrete example of this partnership was at Rodoviária de Goiânia, where we investigated a conversion drop between "Click Pay" and "Purchase" together - Matteo dug into the refused transactions data (Adyen) and helped me pinpoint exactly where the funnel was losing users, which pointed us to the right fixes in the right place.

Matteo also contributed to investigating the Vai de Ônibus whitelabel, where he identified several inconsistencies, mainly related to Content - a number of routes that should have been showing up simply weren't appearing. He brought a lot of valuable insights to that analysis, helping map the root of the problem clearly.

Standout strength
What stands out most about Matteo is the depth of his analysis: he doesn't stop at surface-level data, he digs into the "why" behind every number, cross-referencing Amplitude, Google Analytics, and tracking dashboards until he arrives at an actionable recommendation. A direct example of this was the dashboard he built with highly meaningful data, which I still use today to build route pages and carrier pages with precise, optimized content - this has already generated real impact on organic visibility and conversions across the whitelabels.

Recommended role
I'd recommend Matteo for any role requiring deep conversion-funnel investigation and cross-referencing of multiple data sources - he has the ideal profile for advanced CRO projects or leading complex technical diagnostics where connecting data to root cause is essential.

Growth suggestion
As a suggestion, I think it would be valuable for him to explore the CMS further - understanding how tools like Claude can create pages efficiently via CMS + MCP - since the CMS today has features that give the site a more professional, conversion-oriented look. I'd also recommend digging deeper into Google Search Console, which offers valuable clues about the client's organic performance.`,
    highlight:
      `What stands out most about Matteo is the depth of his analysis: he doesn't stop at surface-level data, he digs into the "why" behind every number, cross-referencing Amplitude, Google Analytics, and tracking dashboards until he arrives at an actionable recommendation.`,
    areas: ["growth", "product", "payments", "data"],
  },
];

/** Filter labels, in the order of the services, with the matching service page. */
export const recommendationAreas: {
  id: RecommendationArea;
  label: string;
  service: { href: string; label: string };
}[] = [
  { id: "growth", label: "Growth", service: { href: "/services/growth-marketing/", label: "Growth marketing" } },
  { id: "data", label: "Data & engineering", service: { href: "/services/data-engineering-automation/", label: "Data engineering & automation" } },
  { id: "product", label: "Product", service: { href: "/services/product-improvement/", label: "Product improvement" } },
  { id: "partners", label: "Clients & partners", service: { href: "/services/business-development/", label: "Business development & technical sales" } },
  { id: "payments", label: "Payments", service: { href: "/payment-solutions/", label: "Payment solutions" } },
];

const MONTHS: Record<string, string> = {
  january: "01", february: "02", march: "03", april: "04", may: "05", june: "06",
  july: "07", august: "08", september: "09", october: "10", november: "11", december: "12",
};

/** "7 July 2026" → "2026-07-07" */
export function toIsoDate(date: string): string {
  const [day, month, year] = date.trim().split(/\s+/);
  const mm = MONTHS[month?.toLowerCase() ?? ""];
  if (!mm || !day || !year) throw new Error(`Unrecognised recommendation date: ${date}`);
  return `${year}-${mm}-${day.padStart(2, "0")}`;
}

/** Fails the build if an excerpt shown on the site is not verbatim. */
export function assertVerbatimExcerpts() {
  for (const r of recommendations) {
    if (!r.quote.includes(r.highlight)) {
      throw new Error(`Highlight for ${r.name} is not an exact excerpt of the recommendation.`);
    }
  }
}

export const achievements: Achievement[] = [
  {
    year: "2018",
    category: "Degree",
    title: "Master of Science in Business Administration",
    institution: "Rotterdam School of Management, Erasmus University",
    description:
      "Awarded in Rotterdam on 24 August 2018 after completing the Master in Management programme.",
  },
  {
    year: "2017",
    category: "Award",
    title: "Winner of the Rotterdam100",
    institution:
      "Municipality of Rotterdam and Rotterdam100 partner organisations",
    description:
      "Selected for a multidisciplinary talent competition and recognised for professional work ethic, entrepreneurial skills, creativity, perseverance, and the successful development of a Next Economy business case.",
  },
  {
    year: "2016",
    category: "Academic result",
    title: "Grade A: China's Economic Growth, Foreign Trade and Investment",
    institution: "LSE-PKU Summer School at Peking University",
    description:
      "Completed the EC205 course at Peking University in Beijing from 8 to 19 August 2016 and received a grade of A.",
  },
  {
    year: "2016",
    category: "Recommendation letter",
    title: "Financial Analysis academic recommendation",
    institution:
      "Graduate School of Management, St. Petersburg State University",
    description:
      "A faculty recommendation highlighting analytical ability, attention to detail, teamwork, facilitation skills, and a strong drive to understand the financial sector.",
  },
  {
    year: "2015",
    category: "Academic result",
    title: "Grade A: Human Resource Management and Employment Relations",
    institution: "The London School of Economics and Political Science",
    description:
      "Completed the intensive MG190 LSE Summer School course from 6 to 24 July 2015 and received a grade of A.",
  },
];
