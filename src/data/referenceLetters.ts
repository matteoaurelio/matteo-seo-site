/**
 * Signed reference letters, presented as summaries.
 *
 * The original PDFs are deliberately NOT stored in this repository or in
 * /public: they contain signatures, personal contact details and (in one case)
 * a date of birth. Only the excerpts below are published. Every `pull` and
 * `passages` entry must be copied exactly from the original letter.
 */

export type ReferenceLetter = {
  id: string;
  kind: string;
  author: string;
  authorRole: string;
  organisation: string;
  /** Display date, exactly as precise as the letter itself. */
  date: string;
  /** ISO date or year, used for <time> and structured data. */
  iso: string;
  /** Opening line of the original, shown on the letter preview. */
  salutation: string;
  /** One-sentence factual context, written by me (not a quote). */
  context: string;
  /** The single most representative sentence, verbatim. */
  pull: string;
  /** Further verbatim passages. */
  passages: string[];
  /** What the letter speaks to, in a few words each. */
  confirms: string[];
};

export const referenceLetters: ReferenceLetter[] = [
  {
    id: "daniel-aleman",
    kind: "Employer reference",
    author: "Daniel Aleman",
    authorRole: "Analytics Engineering Lead",
    organisation: "Cargill — Finance Data & Technology",
    date: "2024",
    iso: "2024",
    salutation: "To whom it may concern,",
    context:
      "A reference from the Analytics Engineering Lead in Cargill's Finance Data & Technology organisation, covering my data and analytics engineering work.",
    pull: "Matteo has demonstrated impressive performance across several areas, including his excellent Python skills, support for our Analytics team, and innovative approach to problem-solving.",
    passages: [
      "I have had the pleasure of working with Matteo at Cargill, where he has consistently demonstrated exceptional technical expertise, problem-solving abilities, and leadership qualities.",
      "Matteo exemplifies a strong customer-driven approach by building and creating processes that meet customer needs.",
      "He is also able to adapt to changing and challenging circumstances. With these skills, he has proven he can consistently drive results.",
      "He will be missed as he was a key player in many of our initiatives across organization.",
    ],
    confirms: [
      "Python",
      "Analytics engineering",
      "Problem solving",
      "Leadership",
      "Adaptability",
      "Customer focus",
    ],
  },
  {
    id: "michelle-griffis",
    kind: "Professional reference",
    author: "Michelle Griffis",
    authorRole: "Finance Data and Business Analyst",
    organisation: "Cargill, Inc",
    date: "25 June 2024",
    iso: "2024-06-25",
    salutation: "To Whom It May Concern:",
    context:
      "Written by a colleague after about two years of working together on a profitability and segmentation project at Cargill.",
    pull: "Matteo also has the ability to understand concepts and be able to take those concepts and create a process that supports the end goal.",
    passages: [
      "I have worked with Mr. Arellano for about 2 years on a Profitability & Segmentation project at Cargill.",
      "During this ongoing project we have worked closely on taking business requirements and driving them to completion.",
      "Matteo has been instrumental in writing python scripts to serve the business needs.",
      "He is honest, dependable, and incredibly hard working.",
    ],
    confirms: [
      "Profitability & segmentation",
      "Business requirements",
      "Python",
      "Dependability",
    ],
  },
  {
    id: "rotterdam100",
    kind: "Award letter",
    author: "Ahmed Aboutaleb & Jan Peter Balkenende",
    authorRole: "Mayor of Rotterdam · International Advisory Board Rotterdam",
    organisation: "Rotterdam100, 2016–2017",
    date: "26 April 2017",
    iso: "2017-04-26",
    salutation: "Letter of Recommendation",
    context:
      "Confirms that I won the Rotterdam100 2016–2017, a talent competition in which selected students and young professionals solve business cases with leading companies.",
    pull: "During the Rotterdam100 this talent showed a professional work ethic, entrepreneurial skills, creativity and perseverance.",
    passages: [
      "This talent worked in a multidisciplinary team consisting of outstanding students and young professionals and successfully solved a Next Economy business case.",
      "Students and young professionals are carefully selected by the Municipality of Rotterdam, SMO, CGI, ABN AMRO, KPN, Soundies, ENGIE and Port of Rotterdam, to participate in this program and to create innovative solutions for Next Economy challenges.",
      "Six groups with the most innovative case solutions were nominated to further develop their idea with one of the partner companies during the Getting It Done Battle from February until April.",
    ],
    confirms: [
      "Winner, 2016–2017",
      "Entrepreneurship",
      "Multidisciplinary teamwork",
      "Business case development",
    ],
  },
];
