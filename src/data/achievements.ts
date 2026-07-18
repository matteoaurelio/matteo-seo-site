export type Recommendation = {
  name: string;
  headline: string;
  date: string;
  relationship: string;
  source: "LinkedIn" | "Client review" | "Academic";
  quote: string;
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
  },
  {
    name: "Shalini Kanojia",
    headline: "Senior Finance and Data Analytics Engineer",
    date: "16 October 2024",
    relationship: "Worked with Matteo on the same team",
    source: "LinkedIn",
    quote: `Matteo has outstanding skills in data and analytics, with expertise in Python. We both work on an ML project where we build, train, test, and deploy statistical models in production, continuously improving model performance and make a significant impact on your project. He is an excellent Python trainer and has strong problem-solving skills, which he applies to tackle complex business challenges. Matteo has great potential, and I am grateful to work with him.`,
  },
  {
    name: "Abhishek Agarwal",
    headline:
      "Finance Strategy at Deloitte | Risk Management at ICICI Bank | IIM Shillong | Rotary International Youth Leader Awardee",
    date: "24 September 2024",
    relationship: "Worked with Matteo on the same team",
    source: "LinkedIn",
    quote: `Matteo has been a great person to work with who always endeavors to drive new innovations and get into the "Why" of a question. I have worked with him on multiple deployments, and its always a learning experience with him.`,
  },
  {
    name: "Jose Laguna",
    headline:
      "Consultant / Senior Data Analyst / Senior Data Analyst / BI Lead / BI Coach / M&E Specialist",
    date: "23 September 2024",
    relationship: "Worked with Matteo in different teams",
    source: "LinkedIn",
    quote: `I had the opportunity to work with Matteo in a Cargill project where we were facing a big challenge to deliver a report for the Government of Argentina, before his involvement many teams tried different solutions, however it was Matteo who was able to provide the best solution that would fit the expectations and comply with the different regulations. Matteo's skills go beyond technical capabilities in Python and data analysis: he is an excellent problem solver, he is proactive, a good communicator, he is a change leader and a technology evangelist. In my 9 years working in Cargill I can say that is one of the top 10 professionals with I had work here.`,
  },
  {
    name: "Lucas Zarpellon",
    headline: "Data Science | Advanced Analytics | Power BI | Python | AI",
    date: "23 September 2024",
    relationship: "Worked with Matteo in different teams",
    source: "LinkedIn",
    quote: `I had the pleasure of working with Matteo when I first joined Cargill, and he was instrumental in helping me understand the intricacies of the business. His expertise spans both data-related topics and corporate finance, making him a well-rounded professional. Matteo is a quick learner and an excellent teacher, able to convey complex concepts clearly and deliver sustainable solutions that drive meaningful business growth.`,
  },
  {
    name: "Sagar Makhija",
    headline:
      "Data Scientist || Associate Director at Deloitte || Ex Capgemini & Accenture",
    date: "6 July 2024",
    relationship: "Worked with Matteo across different companies",
    source: "LinkedIn",
    quote: `I'd like to express my sincere appreciation for Matteo as a phenomenal Python developer and an indispensable partner in our projects. His deep expertise and unwavering support have been instrumental in delivering successful outcomes time and again. He consistently goes above and beyond, stepping in whenever our team faces challenges, and his problem-solving skills are second to none.

Working closely with him has not only been productive but also incredibly enriching. His ability to translate complex requirements into efficient solutions is truly commendable, making him a linchpin in our collaborative efforts. I feel fortunate to have such a dedicated and talented colleague on our team.

Our collaboration has been incredibly productive, thanks to his dedication and expertise. It's truly a privilege to work alongside someone who not only excels in their role but also contributes positively to the team dynamic. Here's to many more successful projects together!`,
  },
  {
    name: "Amrita Nandy",
    headline: "Senior Analytics Engineer, Cargill",
    date: "19 April 2024",
    relationship: "Worked with Matteo in different teams",
    source: "LinkedIn",
    quote: `Matteo and i had the oppourtinity to work together on a ML project where we came up with the entire model production, from sourcing data from a distributed platform (Hadoop), training the data on aws and piping it back to Hadoop with model results. It was an unsupervised ML model on anamoly detection applied in financial transactions. He is highly aware of different work cultures and excels in collaboration. He is ambitious and thrives working on core business problem. He has great potential and will always be an asset to his team.`,
  },
  {
    name: "Pedro P. Mendes",
    headline: "Data Science | Quantitative Finance | Data Engineering",
    date: "9 July 2022",
    relationship: "Worked with Matteo in different teams",
    source: "LinkedIn",
    quote: `Matteo's data and technical skills are really outstanding! It's been an honour to have his support in solving data science & engineering related problems. With a deep understanding of coding concepts and architectural data structure, Matteo has been abreast of latest resources in Python and SQL, including internal coding ecosystem on Hadoop. He's a great professional and poses solid skills in Machine Learning and statistical concepts since the basics to the most advanced topics, without loosing the capacity to share his knowledges and goals in a clear and concise way! I'm grateful to work with him!`,
  },
  {
    name: "Nikolay Andonov",
    headline: "Senior Analytics Engineer",
    date: "6 July 2022",
    relationship:
      "Held a more senior role, without directly supervising Matteo",
    source: "LinkedIn",
    quote: `Matteo's technical expertise and his analytical skills solved a problem that has been long lingering in our backlog, which was thought to be currently unsolvable. Exchanging knowledge, creating solutions and understanding the issues make him a great pair in the engineering process, alongside with his great personality. I'm thrilled to work side by side with him.`,
  },
  {
    name: "Gizem ÜNLÜ",
    headline: "Senior Demand Planner",
    date: "12 December 2021",
    relationship: "Professional recommendation",
    source: "LinkedIn",
    quote: `Good to have your support in our optimizing process! Beside the technical skills that you already have on understanding data analysis, your eagerness to learn more and more, really appreciate to share your knowledge with me always enthusiastically and positive attitude. Thanks a lot!`,
  },
];

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
