/**
 * Text for the About page in English, Spanish, Dutch and Norwegian (Bokmål).
 *
 * Layout, photos, links and colleague quotes live in
 * src/components/AboutStory.astro. Colleague quotes stay in the original
 * English on every version, because they are copied word for word from
 * LinkedIn recommendations.
 */

export type AboutLang = "en" | "es" | "nl" | "no";

export type PhotoKey =
  | "portrait"
  | "plantVisit"
  | "cityView"
  | "communityProject"
  | "buildBreak"
  | "ferry"
  | "river";

export type ChapterId = "rotterdam" | "luxembourg" | "cargill" | "mexico-family" | "africa" | "distribusion";

type Chapter = {
  place: string;
  period: string;
  title: string;
  paragraphs: string[];
  takeaway?: string;
};

export type AboutText = {
  /** Value for <html lang> and hreflang. */
  htmlLang: string;
  path: string;
  /** Name of the language in itself, shown in the language switch. */
  endonym: string;
  homePath: string;
  meta: { title: string; description: string };
  breadcrumb: { home: string; about: string };
  hero: {
    overline: string;
    title: string;
    lede: string;
    support: string;
    primary: string;
    secondary: string;
    portraitAlt: string;
    switchLabel: string;
  };
  glance: { label: string; items: { label: string; value: string }[] };
  story: { overline: string; title: string; takeawayLabel: string };
  /** Shown under quotes on translated pages. Empty in English. */
  quoteNote: string;
  photos: Record<PhotoKey, { alt: string; caption: string }>;
  chapters: Record<ChapterId, Chapter>;
  /** Labels for the links under the last chapter, in order. */
  chapterLinks: [string, string, string];
  colleagues: {
    overline: string;
    title: string;
    intro: string;
    headings: [string, string, string, string];
    more: string;
  };
  outside: {
    overline: string;
    title: string;
    /** "{count}" is replaced with the number of languages. */
    intro: string;
    listLabel: string;
    /** Level labels by step: 4 native … 1 A2. */
    levels: Record<1 | 2 | 3 | 4, string>;
    /** Language names by BCP 47 code. */
    languageNames: Record<string, string>;
  };
  education: {
    overline: string;
    title: string;
    items: { year: string; title: string; place: string }[];
    more: string;
  };
  side: {
    overline: string;
    title: string;
    yeelen: string;
    wegozero: string;
    more: string;
  };
  calendar: {
    eyebrow: string;
    title: string;
    copy: string;
    note: string;
    noteDetail: string;
    embedLabel: string;
  };
};

const en: AboutText = {
  htmlLang: "en",
  path: "/about/",
  endonym: "English",
  homePath: "/",
  meta: {
    title: "About Matteo Arellano | From Finance to Data, Product and Payments",
    description:
      "The story of Matteo Arellano: from Barcelona to Rotterdam School of Management, the European Investment Bank in Luxembourg, five years of finance, data and automation at Cargill, travels in Africa, and product, payments and conversion work in travel tech from Mexico City.",
  },
  breadcrumb: { home: "Home", about: "About" },
  hero: {
    overline: "About",
    title: "Hi, I'm Matteo Arellano.",
    lede: "I left Barcelona to study in Rotterdam, learnt corporate finance in Luxembourg, discovered my love for data and automation at Cargill, and now work on product, payments and conversion in travel tech. I have lived in four countries and studied in four.",
    support:
      "Each move started with something I wanted to understand better. This page is the longer version of that story, with a few photos along the way.",
    primary: "Say hello",
    secondary: "Read the story →",
    portraitAlt: "Portrait of Matteo Arellano",
    switchLabel: "Read this page in",
  },
  glance: {
    label: "At a glance",
    items: [
      { label: "Now", value: "Senior Technical Growth Lead at Distribusion Technologies · Founder of Yeelen · based in Mexico City" },
      { label: "Experience", value: "European Investment Fund · European Investment Bank · Cargill · PIA Group · Ecowater Economics · Distribusion" },
      { label: "Education", value: "BSc and MSc in Business Administration, Rotterdam School of Management, Erasmus University · all three CFA Program exams passed" },
      { label: "Lived in", value: "Spain · the Netherlands · Luxembourg · Mexico" },
      { label: "Studied in", value: "the Netherlands · United Kingdom · China · Russia" },
      { label: "Languages", value: "Spanish, Catalan, English, Dutch, French, Portuguese and some Norwegian" },
    ],
  },
  story: { overline: "The story so far", title: "Six chapters, four countries", takeawayLabel: "What I took with me:" },
  quoteNote: "",
  photos: {
    portrait: {
      alt: "Matteo in a red shirt in front of a taula, a prehistoric stone monument, under a clear blue sky",
      caption: "In front of a taula, one of the prehistoric stone monuments of Menorca.",
    },
    plantVisit: {
      alt: "Matteo and a colleague in high-visibility jackets in front of a projected diagram of an oilseed crushing process",
      caption: "Safety gear on before a plant visit during my Cargill years. Seeing the crushing process in person made the numbers much easier to read.",
    },
    cityView: {
      alt: "Matteo on a rooftop above a hazy city with low buildings, palm trees and two minarets",
      caption: "Looking over the city on a hazy, dusty day while travelling in Africa.",
    },
    communityProject: {
      alt: "Matteo standing between two people in organisation vests in front of a green and white school building",
      caption: "With two people from the organisation behind a community project I visited.",
    },
    buildBreak: {
      alt: "Matteo in work gloves taking a selfie with a man in paint-splashed overalls at a shaded table",
      caption: "Work gloves still on, during a break on a building project.",
    },
    ferry: {
      alt: "Matteo smiling on the deck of a ferry, with a rocky mountain island and the sea behind him",
      caption: "On a ferry along the Norwegian coast. I am learning Norwegian and am at A2 so far.",
    },
    river: {
      alt: "Matteo in a life jacket giving a thumbs up on a wooden boat on a green river through the jungle",
      caption: "Life jacket on, on a river trip through the jungle.",
    },
  },
  chapters: {
    rotterdam: {
      place: "Barcelona → Rotterdam",
      period: "2014–2018",
      title: "Learning how to start again somewhere new",
      paragraphs: [
        "In 2014 I left Barcelona for Rotterdam to study International Business Administration at Rotterdam School of Management, Erasmus University. It was the first time I had to build a life from nothing: a new city, a new language, a new climate and a culture where people tell you exactly what they think.",
        "I learnt Dutch, settled into a new environment and got used to working in international teams where nobody shared the same assumptions. For a few months I also taught Spanish to groups of international students, which is where I learnt to stand in front of a room and explain things simply. In 2017 I was part of the team that won the Rotterdam100, a talent programme run by the city and partner companies in which students solve real business cases.",
        "I also took every chance to study somewhere else. I did a summer course at the London School of Economics, a course on China's economic growth at Peking University in Beijing, and a financial analysis programme at St. Petersburg State University. After my bachelor's I stayed at RSM for my Master of Science in Business Administration, which I finished in 2018.",
      ],
      takeaway: "Settling into a new place is a skill, and it gets easier each time you do it.",
    },
    luxembourg: {
      place: "Luxembourg",
      period: "2018–2019",
      title: "Banking, where every number is checked twice",
      paragraphs: [
        "My first jobs took me to Luxembourg. I started at the European Investment Fund in operational risk, developing risk indicators, analysing risk events, supporting portfolio reports and writing a market research report. I then joined the European Investment Bank's restructuring and resolution team, supporting the officers who handle distressed deals: credit and fundamental analysis, reviewing financial models, testing debt repayment schedules and researching insolvency rules across EU countries. I learnt to value a business and to judge whether it can pay back what it owes.",
        "It was a formal and highly regulated environment, and I learnt a lot from that. Analysis there has to be precise and documented, and every recommendation has to be clear about what it is based on.",
        "It was also where my interest in development economics started. I saw how finance can help companies and countries grow sustainably, and that stayed with me.",
      ],
      takeaway: "How to read a company through its numbers, and how to write analysis that survives review.",
    },
    cargill: {
      place: "Schiphol & Amsterdam",
      period: "2020–2024",
      title: "Where I discovered my love for data",
      paragraphs: [
        "After a year I found an opportunity in agriculture with Cargill. I was excited to go back to the Netherlands, and I stayed with the company for almost five years. I joined as a financial management trainee at the office at Schiphol, working with traders and commercial teams across Cargill's agricultural supply chain business, and later supported the Bioindustrial business across Europe and the Middle East and North Africa.",
        "This is where I discovered how much I enjoy data, automation and technology. I automated the entire reconciliation process, built Power BI reports and ETL pipelines, and used Python and ARIMA models to forecast inventories for the trading teams. I also helped to solve product traceability challenges across global supply chains. In 2021 I also completed a data scientist track with Dataquest to go deeper into the tools.",
        "My colleagues noticed and asked me to join the financial analytics team. There I helped build Cargill's global finance data infrastructure for three enterprises, from food to grain trading to bioindustrials, which meant bringing together every region, currency and the different terms each business used for the same things. I built financial APIs that saved teams hundreds of hours, worked on a machine learning model that flags anomalies in financial transactions, and redesigned a cloud workflow so that it cost about 90% less to run. By then I was working closely with the headquarters in the United States.",
      ],
      takeaway: "Most manual work can be automated, and most messy data can be made to agree. It takes patience and good questions.",
    },
    "mexico-family": {
      place: "Mexico",
      period: "2023–2024",
      title: "Time with my grandparents",
      paragraphs: [
        "My grandparents lived in Mexico and they were very old. I wanted to spend time with them while I still could, so in 2023 I moved to Mexico City and continued my work with Cargill from there.",
        "That year I also taught Python, SQL and machine learning to students, more than 120 hours in total. Teaching something is still the best test I know of whether I really understand it.",
      ],
    },
    africa: {
      place: "Africa",
      period: "2024–2025",
      title: "Seeing development up close",
      paragraphs: [
        "After almost five years at Cargill I wanted to travel, and Africa was at the top of my list. The interest in development economics that started in Luxembourg had never left me, and I wanted to see what growth and development look like away from reports and spreadsheets.",
        "I visited community projects, met the people running them and helped where I could.",
        "In the same period I kept my hands in finance and data. I worked as a financial analytics engineer for PIA Group, a Dutch company, building its management reporting and data models in dbt and SQL, and as a sustainable finance expert for Ecowater Economics, on budgets, financing and business models in water, energy and food.",
      ],
    },
    distribusion: {
      place: "Back to Mexico",
      period: "Now",
      title: "Product, payments and conversion",
      paragraphs: [
        "Then, in October 2025, an opportunity came up to join Distribusion, a travel tech company, as Senior Technical Growth Lead, and to lead a large project in Mexico. So I came back, and I am based in Mexico City today.",
        "That is where my current work started: improving products, payments and conversion, from search and location data to tracking, experiments and checkout, with GA4, Amplitude, BigQuery and SQL behind every decision. Every earlier chapter shows up in it. Banking taught me to put a value on a problem before solving it. Cargill taught me to automate, build the data and get teams to agree on it. Living in four countries taught me that customers in different markets search, decide and pay differently.",
      ],
    },
  },
  chapterLinks: ["How I improve products", "Product research case studies", "Payment case studies"],
  colleagues: {
    overline: "How I work",
    title: "In my colleagues' words",
    intro:
      "I could describe my working style myself, but the people I have worked with put it better. These lines come word for word from their recommendations.",
    headings: [
      "I ask why until the problem is clear",
      "I dig into what others skip",
      "I learn fast and pass it on",
      "I work well across cultures",
    ],
    more: "Read all recommendations →",
  },
  outside: {
    overline: "Outside work",
    title: "Always learning something",
    intro:
      "Most of what I learn outside work comes from travelling and languages. I speak {count} languages at different levels, and the newest one is Norwegian. Learning a language is the quickest way I know to understand how people in a place think, and that habit carries straight into my work with customers in different markets.",
    listLabel: "Languages",
    levels: { 4: "Native", 3: "Advanced professional", 2: "Conversational", 1: "A2 level" },
    languageNames: { es: "Spanish", ca: "Catalan", en: "English", nl: "Dutch", fr: "French", pt: "Portuguese", no: "Norwegian" },
  },
  education: {
    overline: "Education",
    title: "Studies and awards",
    items: [
      { year: "2021", title: "Data Scientist track", place: "Dataquest" },
      { year: "2018", title: "Master of Science in Business Administration", place: "Rotterdam School of Management, Erasmus University · Rotterdam" },
      { year: "2017", title: "BSc in International Business Administration", place: "Rotterdam School of Management, Erasmus University · Rotterdam" },
      { year: "2017", title: "Winner of the Rotterdam100 talent programme", place: "Municipality of Rotterdam and partner companies" },
      { year: "2016", title: "China's Economic Growth, Foreign Trade and Investment (grade A)", place: "LSE–PKU Summer School, Peking University · Beijing" },
      { year: "2016", title: "Financial analysis programme", place: "Graduate School of Management, St. Petersburg State University · St. Petersburg" },
      { year: "2015", title: "Human Resource Management and Employment Relations (grade A)", place: "LSE Summer School, London School of Economics · London" },
    ],
    more: "Details and reference letters →",
  },
  side: {
    overline: "Side projects",
    title: "What I build on the side",
    yeelen:
      "I founded Yeelen in 2026, a social enterprise that helps independent professionals, local businesses and underserved entrepreneurs build an affordable online presence and become easier to find, trust and contact. I do everything from customer research to pricing and the website, which keeps me honest about how hard growth is for a small business.",
    wegozero: "An independent collaboration on technology and commercial thinking for the circular economy.",
    more: "Read about it →",
  },
  calendar: {
    eyebrow: "Let's talk",
    title: "Working on something I could help with?",
    copy: "Tell me what you are trying to figure out. Twenty minutes is usually enough to see whether I can be useful, and I enjoy these conversations either way.",
    note: "20 minutes · No Prepared Brief Required",
    noteDetail: "We start with the business question, not a predetermined solution.",
    embedLabel: "Book a 20-minute conversation with Matteo Arellano",
  },
};

const es: AboutText = {
  htmlLang: "es",
  path: "/es/sobre-mi/",
  endonym: "Español",
  homePath: "/es/",
  meta: {
    title: "Sobre Matteo Arellano | De las finanzas a los datos, el producto y los pagos",
    description:
      "La historia de Matteo Arellano: de Barcelona a Rotterdam School of Management, el Banco Europeo de Inversiones en Luxemburgo, casi cinco años de finanzas, datos y automatización en Cargill, viajes por África y trabajo en producto, pagos y conversión en travel tech desde Ciudad de México.",
  },
  breadcrumb: { home: "Inicio", about: "Sobre mí" },
  hero: {
    overline: "Sobre mí",
    title: "Hola, soy Matteo Arellano.",
    lede: "Dejé Barcelona para estudiar en Róterdam, aprendí finanzas corporativas en Luxemburgo, descubrí mi pasión por los datos y la automatización en Cargill y hoy trabajo en producto, pagos y conversión en travel tech. He vivido en cuatro países y he estudiado en cuatro.",
    support:
      "Cada mudanza empezó con algo que quería entender mejor. Esta página es la versión larga de esa historia, con algunas fotos del camino.",
    primary: "Escríbeme",
    secondary: "Leer la historia →",
    portraitAlt: "Retrato de Matteo Arellano",
    switchLabel: "Esta página en",
  },
  glance: {
    label: "En resumen",
    items: [
      { label: "Ahora", value: "Senior Technical Growth Lead en Distribusion Technologies · fundador de Yeelen · vivo en Ciudad de México" },
      { label: "Experiencia", value: "Fondo Europeo de Inversiones · Banco Europeo de Inversiones · Cargill · PIA Group · Ecowater Economics · Distribusion" },
      { label: "Formación", value: "Grado y máster (MSc) en Business Administration, Rotterdam School of Management, Erasmus University · aprobados los tres exámenes del programa CFA" },
      { label: "He vivido en", value: "España · Países Bajos · Luxemburgo · México" },
      { label: "He estudiado en", value: "Países Bajos · Reino Unido · China · Rusia" },
      { label: "Idiomas", value: "Español, catalán, inglés, neerlandés, francés, portugués y algo de noruego" },
    ],
  },
  story: { overline: "Mi historia hasta ahora", title: "Seis capítulos, cuatro países", takeawayLabel: "Lo que me llevé:" },
  quoteNote: "Cita original en inglés.",
  photos: {
    portrait: {
      alt: "Matteo con una camisa roja delante de una taula, un monumento prehistórico de piedra, bajo un cielo azul",
      caption: "Delante de una taula, uno de los monumentos prehistóricos de piedra de Menorca.",
    },
    plantVisit: {
      alt: "Matteo y un compañero con chaquetas de alta visibilidad delante de un diagrama proyectado del proceso de molienda de semillas oleaginosas",
      caption: "Con el equipo de seguridad puesto antes de visitar una planta durante mis años en Cargill. Ver el proceso de molienda en persona hizo que las cifras fueran mucho más fáciles de entender.",
    },
    cityView: {
      alt: "Matteo en una azotea sobre una ciudad con bruma, edificios bajos, palmeras y dos minaretes",
      caption: "Mirando la ciudad en un día de bruma y polvo, mientras viajaba por África.",
    },
    communityProject: {
      alt: "Matteo entre dos personas con chalecos de una organización, delante de un edificio escolar verde y blanco",
      caption: "Con dos personas de la organización que está detrás de un proyecto comunitario que visité.",
    },
    buildBreak: {
      alt: "Matteo con guantes de trabajo haciéndose un selfi con un hombre con un mono manchado de pintura, en una mesa a la sombra",
      caption: "Todavía con los guantes puestos, en un descanso durante un proyecto de construcción.",
    },
    ferry: {
      alt: "Matteo sonriendo en la cubierta de un ferri, con una isla montañosa y el mar detrás",
      caption: "En un ferri por la costa noruega. Estoy aprendiendo noruego y de momento tengo un nivel A2.",
    },
    river: {
      alt: "Matteo con chaleco salvavidas levantando el pulgar en una lancha de madera sobre un río verde en plena selva",
      caption: "Con el chaleco salvavidas puesto, en un viaje en lancha por un río de la selva.",
    },
  },
  chapters: {
    rotterdam: {
      place: "Barcelona → Róterdam",
      period: "2014–2018",
      title: "Aprender a empezar de nuevo en otro lugar",
      paragraphs: [
        "En 2014 dejé Barcelona y me fui a Róterdam para estudiar International Business Administration en Rotterdam School of Management, Erasmus University. Era la primera vez que tenía que construir una vida desde cero: una ciudad nueva, un idioma nuevo, otro clima y una cultura en la que la gente te dice exactamente lo que piensa.",
        "Aprendí neerlandés, me adapté a un entorno nuevo y me acostumbré a trabajar en equipos internacionales en los que nadie partía de las mismas ideas. Durante unos meses también di clases de español a grupos de estudiantes internacionales, y ahí aprendí a ponerme delante de un grupo y explicar las cosas de forma sencilla. En 2017 formé parte del equipo que ganó el Rotterdam100, un programa de talento del ayuntamiento y de empresas colaboradoras en el que estudiantes resuelven casos de negocio reales.",
        "También aproveché cada oportunidad de estudiar en otros lugares: un curso de verano en la London School of Economics, un curso sobre el crecimiento económico de China en la Universidad de Pekín y un programa de análisis financiero en la Universidad Estatal de San Petersburgo. Después del grado me quedé en RSM para hacer el Master of Science in Business Administration, que terminé en 2018.",
      ],
      takeaway: "Instalarse en un lugar nuevo es una habilidad, y cada vez resulta más fácil.",
    },
    luxembourg: {
      place: "Luxemburgo",
      period: "2018–2019",
      title: "La banca, donde cada cifra se revisa dos veces",
      paragraphs: [
        "Mis primeros trabajos me llevaron a Luxemburgo. Empecé en el Fondo Europeo de Inversiones, en riesgo operacional: desarrollaba indicadores de riesgo, analizaba incidencias, apoyaba los informes de cartera y redacté un estudio de mercado. Después me incorporé al equipo de reestructuraciones y resoluciones del Banco Europeo de Inversiones, donde apoyaba a los responsables de operaciones en dificultades: análisis de crédito y de fundamentales, revisión de modelos financieros, pruebas de calendarios de amortización de deuda e investigación sobre la normativa concursal de distintos países de la UE. Aprendí a valorar una empresa y a juzgar si puede devolver lo que debe.",
        "Era un entorno formal y muy regulado, y aprendí mucho de ello. Allí el análisis tiene que ser preciso y estar documentado, y cada recomendación tiene que dejar claro en qué se basa.",
        "También fue allí donde empezó mi interés por la economía del desarrollo. Vi cómo las finanzas pueden ayudar a empresas y países a crecer de forma sostenible, y eso se quedó conmigo.",
      ],
      takeaway: "A leer una empresa a través de sus cifras y a escribir análisis que resisten una revisión.",
    },
    cargill: {
      place: "Schiphol y Ámsterdam",
      period: "2020–2024",
      title: "Donde descubrí mi pasión por los datos",
      paragraphs: [
        "Al cabo de un año encontré una oportunidad en el sector agrícola con Cargill. Me hacía mucha ilusión volver a los Países Bajos, y me quedé en la empresa casi cinco años. Entré como financial management trainee en la oficina de Schiphol, trabajando con traders y equipos comerciales de la cadena de suministro agrícola de Cargill, y más tarde di soporte al negocio de Bioindustrial en Europa, Oriente Medio y el norte de África.",
        "Ahí descubrí cuánto disfruto con los datos, la automatización y la tecnología. Automaticé todo el proceso de conciliación, construí informes en Power BI y pipelines ETL, y usé Python y modelos ARIMA para prever inventarios para los equipos de trading. También ayudé a resolver problemas de trazabilidad de producto en cadenas de suministro globales. En 2021 completé además el itinerario de data scientist de Dataquest para profundizar en las herramientas.",
        "Mis compañeros se dieron cuenta y me pidieron que me uniera al equipo de financial analytics. Allí ayudé a construir la infraestructura global de datos financieros de Cargill para tres divisiones, desde alimentación hasta comercio de grano y bioindustria, lo que significaba unir todas las regiones, monedas y los distintos términos que cada negocio usaba para lo mismo. Desarrollé APIs financieras que ahorraron cientos de horas a los equipos, trabajé en un modelo de machine learning que detecta anomalías en transacciones financieras y rediseñé un proceso en la nube para que costara alrededor de un 90 % menos. Para entonces ya trabajaba codo con codo con la sede central en Estados Unidos.",
      ],
      takeaway: "Casi todo el trabajo manual se puede automatizar, y casi todos los datos desordenados se pueden hacer cuadrar. Hace falta paciencia y buenas preguntas.",
    },
    "mexico-family": {
      place: "México",
      period: "2023–2024",
      title: "Tiempo con mis abuelos",
      paragraphs: [
        "Mis abuelos vivían en México y ya eran muy mayores. Quería pasar tiempo con ellos mientras todavía pudiera, así que en 2023 me mudé a Ciudad de México y seguí trabajando para Cargill desde allí.",
        "Ese año también di clases de Python, SQL y machine learning, más de 120 horas en total. Enseñar algo sigue siendo la mejor prueba que conozco para saber si de verdad lo entiendo.",
      ],
    },
    africa: {
      place: "África",
      period: "2024–2025",
      title: "Ver el desarrollo de cerca",
      paragraphs: [
        "Después de casi cinco años en Cargill quería viajar, y África estaba la primera de mi lista. El interés por la economía del desarrollo que empezó en Luxemburgo nunca se fue, y quería ver cómo son el crecimiento y el desarrollo lejos de los informes y las hojas de cálculo.",
        "Visité proyectos comunitarios, conocí a las personas que los llevan y ayudé en lo que pude.",
        "En esa misma etapa seguí trabajando con finanzas y datos. Fui financial analytics engineer en PIA Group, una empresa neerlandesa, donde construí sus informes de dirección y sus modelos de datos con dbt y SQL, y experto en finanzas sostenibles para Ecowater Economics, con presupuestos, financiación y modelos de negocio en agua, energía y alimentación.",
      ],
    },
    distribusion: {
      place: "De vuelta en México",
      period: "Hoy",
      title: "Producto, pagos y conversión",
      paragraphs: [
        "En octubre de 2025 surgió la oportunidad de unirme a Distribusion, una empresa de travel tech, como Senior Technical Growth Lead y de liderar un gran proyecto en México. Así que volví, y hoy vivo en Ciudad de México.",
        "Ahí empezó mi trabajo actual: mejorar productos, pagos y conversión, desde la búsqueda y los datos de ubicación hasta el tracking, los experimentos y el checkout, con GA4, Amplitude, BigQuery y SQL detrás de cada decisión. Cada capítulo anterior aparece en él. La banca me enseñó a ponerle valor a un problema antes de resolverlo. Cargill me enseñó a automatizar, construir los datos y conseguir que los equipos se pongan de acuerdo sobre ellos. Vivir en cuatro países me enseñó que los clientes de mercados distintos buscan, deciden y pagan de forma distinta.",
      ],
    },
  },
  chapterLinks: [
    "Cómo mejoro productos (en inglés)",
    "Casos de estudio de investigación de producto (en inglés)",
    "Casos de estudio de pagos (en inglés)",
  ],
  colleagues: {
    overline: "Cómo trabajo",
    title: "En palabras de mis compañeros",
    intro:
      "Podría describir yo mismo cómo trabajo, pero las personas con las que he trabajado lo explican mejor. Estas frases están copiadas tal cual de sus recomendaciones, en el inglés original.",
    headings: [
      "Pregunto por qué hasta que el problema está claro",
      "Investigo lo que otros pasan por alto",
      "Aprendo rápido y lo comparto",
      "Trabajo bien entre culturas",
    ],
    more: "Leer todas las recomendaciones (en inglés) →",
  },
  outside: {
    overline: "Fuera del trabajo",
    title: "Siempre aprendiendo algo",
    intro:
      "Casi todo lo que aprendo fuera del trabajo viene de viajar y de los idiomas. Hablo {count} idiomas con distintos niveles, y el más reciente es el noruego. Aprender un idioma es la forma más rápida que conozco de entender cómo piensa la gente de un lugar, y esa costumbre la llevo directamente a mi trabajo con clientes de distintos mercados.",
    listLabel: "Idiomas",
    levels: { 4: "Nativo", 3: "Profesional avanzado", 2: "Conversación", 1: "Nivel A2" },
    languageNames: { es: "Español", ca: "Catalán", en: "Inglés", nl: "Neerlandés", fr: "Francés", pt: "Portugués", no: "Noruego" },
  },
  education: {
    overline: "Formación",
    title: "Estudios y premios",
    items: [
      { year: "2021", title: "Itinerario de Data Scientist", place: "Dataquest" },
      { year: "2018", title: "Master of Science in Business Administration", place: "Rotterdam School of Management, Erasmus University · Róterdam" },
      { year: "2017", title: "Grado (BSc) en International Business Administration", place: "Rotterdam School of Management, Erasmus University · Róterdam" },
      { year: "2017", title: "Ganador del programa de talento Rotterdam100", place: "Ayuntamiento de Róterdam y empresas colaboradoras" },
      { year: "2016", title: "Crecimiento económico, comercio exterior e inversión en China (nota A)", place: "LSE–PKU Summer School, Universidad de Pekín · Pekín" },
      { year: "2016", title: "Programa de análisis financiero", place: "Graduate School of Management, Universidad Estatal de San Petersburgo · San Petersburgo" },
      { year: "2015", title: "Gestión de recursos humanos y relaciones laborales (nota A)", place: "LSE Summer School, London School of Economics · Londres" },
    ],
    more: "Detalles y cartas de referencia (en inglés) →",
  },
  side: {
    overline: "Proyectos propios",
    title: "Lo que construyo por mi cuenta",
    yeelen:
      "En 2026 fundé Yeelen, una empresa social que ayuda a profesionales independientes, negocios locales y emprendedores con menos recursos a tener una presencia online asequible y a ser más fáciles de encontrar, de confiar y de contactar. Me encargo de todo, desde hablar con clientes hasta los precios y la web, y eso me recuerda lo difícil que es crecer para un negocio pequeño.",
    wegozero: "Una colaboración independiente sobre tecnología y visión comercial para la economía circular.",
    more: "Leer más (en inglés) →",
  },
  calendar: {
    eyebrow: "Hablemos",
    title: "¿Trabajas en algo en lo que pueda ayudarte?",
    copy: "Cuéntame qué intentas resolver. Veinte minutos suelen bastar para ver si puedo serte útil, y disfruto de estas conversaciones en cualquier caso.",
    note: "20 minutos · No hace falta preparar nada",
    noteDetail: "Empezamos por la pregunta de negocio, no por una solución predeterminada.",
    embedLabel: "Reserva una conversación de 20 minutos con Matteo Arellano",
  },
};

const nl: AboutText = {
  htmlLang: "nl",
  path: "/nl/over-mij/",
  endonym: "Nederlands",
  homePath: "/nl/",
  meta: {
    title: "Over Matteo Arellano | Van finance naar data, product en betalingen",
    description:
      "Het verhaal van Matteo Arellano: van Barcelona naar Rotterdam School of Management, de Europese Investeringsbank in Luxemburg, bijna vijf jaar finance, data en automatisering bij Cargill, reizen door Afrika en werk aan product, betalingen en conversie in travel tech vanuit Mexico-Stad.",
  },
  breadcrumb: { home: "Home", about: "Over mij" },
  hero: {
    overline: "Over mij",
    title: "Hoi, ik ben Matteo Arellano.",
    lede: "Ik verliet Barcelona om in Rotterdam te studeren, leerde corporate finance in Luxemburg, ontdekte bij Cargill mijn liefde voor data en automatisering en werk nu aan product, betalingen en conversie in travel tech. Ik heb in vier landen gewoond en in vier landen gestudeerd.",
    support:
      "Elke verhuizing begon met iets wat ik beter wilde begrijpen. Deze pagina is de lange versie van dat verhaal, met een paar foto's van onderweg.",
    primary: "Zeg hallo",
    secondary: "Lees het verhaal →",
    portraitAlt: "Portret van Matteo Arellano",
    switchLabel: "Deze pagina in",
  },
  glance: {
    label: "In het kort",
    items: [
      { label: "Nu", value: "Senior Technical Growth Lead bij Distribusion Technologies · oprichter van Yeelen · woont in Mexico-Stad" },
      { label: "Ervaring", value: "Europees Investeringsfonds · Europese Investeringsbank · Cargill · PIA Group · Ecowater Economics · Distribusion" },
      { label: "Opleiding", value: "Bachelor en master (MSc) in Business Administration, Rotterdam School of Management, Erasmus Universiteit · alle drie de examens van het CFA-programma gehaald" },
      { label: "Gewoond in", value: "Spanje · Nederland · Luxemburg · Mexico" },
      { label: "Gestudeerd in", value: "Nederland · Verenigd Koninkrijk · China · Rusland" },
      { label: "Talen", value: "Spaans, Catalaans, Engels, Nederlands, Frans, Portugees en een beetje Noors" },
    ],
  },
  story: { overline: "Mijn verhaal tot nu toe", title: "Zes hoofdstukken, vier landen", takeawayLabel: "Wat ik meenam:" },
  quoteNote: "Citaat in het oorspronkelijke Engels.",
  photos: {
    portrait: {
      alt: "Matteo in een rood overhemd voor een taula, een prehistorisch stenen monument, onder een strakblauwe lucht",
      caption: "Voor een taula, een van de prehistorische stenen monumenten van Menorca.",
    },
    plantVisit: {
      alt: "Matteo en een collega in veiligheidsjassen voor een geprojecteerd schema van het persproces van oliezaden",
      caption: "Veiligheidsuitrusting aan voor een fabrieksbezoek tijdens mijn jaren bij Cargill. Het persproces met eigen ogen zien maakte de cijfers veel makkelijker te lezen.",
    },
    cityView: {
      alt: "Matteo op een dak boven een heiige stad met lage gebouwen, palmbomen en twee minaretten",
      caption: "Uitkijkend over de stad op een heiige, stoffige dag tijdens mijn reis door Afrika.",
    },
    communityProject: {
      alt: "Matteo tussen twee mensen in hesjes van een organisatie, voor een groen-wit schoolgebouw",
      caption: "Met twee mensen van de organisatie achter een gemeenschapsproject dat ik bezocht.",
    },
    buildBreak: {
      alt: "Matteo met werkhandschoenen die een selfie maakt met een man in een overall vol verfvlekken, aan een tafel in de schaduw",
      caption: "Werkhandschoenen nog aan, tijdens een pauze op een bouwproject.",
    },
    ferry: {
      alt: "Matteo lachend aan dek van een veerboot, met een rotsachtig bergeiland en de zee achter hem",
      caption: "Op een veerboot langs de Noorse kust. Ik leer Noors en zit nu op niveau A2.",
    },
    river: {
      alt: "Matteo met zwemvest die een duim opsteekt op een houten boot op een groene rivier door de jungle",
      caption: "Zwemvest aan, tijdens een boottocht over een rivier door de jungle.",
    },
  },
  chapters: {
    rotterdam: {
      place: "Barcelona → Rotterdam",
      period: "2014–2018",
      title: "Leren om ergens opnieuw te beginnen",
      paragraphs: [
        "In 2014 verliet ik Barcelona en verhuisde ik naar Rotterdam om International Business Administration te studeren aan de Rotterdam School of Management, Erasmus Universiteit. Voor het eerst moest ik een leven vanaf nul opbouwen: een nieuwe stad, een nieuwe taal, een ander klimaat en een cultuur waarin mensen precies zeggen wat ze denken.",
        "Ik leerde Nederlands, vond mijn weg in een nieuwe omgeving en raakte gewend aan internationale teams waarin niemand van dezelfde aannames uitging. Een paar maanden gaf ik ook Spaanse les aan groepen internationale studenten. Daar leerde ik voor een groep te staan en dingen eenvoudig uit te leggen. In 2017 zat ik in het team dat de Rotterdam100 won, een talentprogramma van de gemeente en partnerbedrijven waarin studenten echte businesscases oplossen.",
        "Ik greep ook elke kans aan om ergens anders te studeren: een zomercursus aan de London School of Economics, een cursus over de economische groei van China aan Peking University in Beijing en een programma financiële analyse aan de Staatsuniversiteit van Sint-Petersburg. Na mijn bachelor bleef ik aan RSM voor mijn Master of Science in Business Administration, die ik in 2018 afrondde.",
      ],
      takeaway: "Je ergens nieuw vestigen is een vaardigheid, en het wordt elke keer makkelijker.",
    },
    luxembourg: {
      place: "Luxemburg",
      period: "2018–2019",
      title: "Bankieren, waar elk getal twee keer wordt gecontroleerd",
      paragraphs: [
        "Mijn eerste banen brachten me naar Luxemburg. Ik begon bij het Europees Investeringsfonds op operationeel risico: ik ontwikkelde risico-indicatoren, analyseerde risicogebeurtenissen, ondersteunde portefeuillerapportages en schreef een marktonderzoek. Daarna kwam ik bij het herstructurerings- en resolutieteam van de Europese Investeringsbank, waar ik de officers ondersteunde die probleemdossiers behandelen: krediet- en fundamentele analyse, financiële modellen beoordelen, aflossingsschema's doorrekenen en onderzoek doen naar insolventieregels in verschillende EU-landen. Ik leerde een bedrijf te waarderen en in te schatten of het kan terugbetalen wat het schuldig is.",
        "Het was een formele en sterk gereguleerde omgeving, en daar heb ik veel van geleerd. Analyse moet er precies en goed gedocumenteerd zijn, en elke aanbeveling moet duidelijk maken waarop ze is gebaseerd.",
        "Daar begon ook mijn interesse in ontwikkelingseconomie. Ik zag hoe financiering bedrijven en landen kan helpen duurzaam te groeien, en dat is me altijd bijgebleven.",
      ],
      takeaway: "Hoe je een bedrijf leest aan de hand van zijn cijfers, en hoe je analyse schrijft die een kritische review doorstaat.",
    },
    cargill: {
      place: "Schiphol & Amsterdam",
      period: "2020–2024",
      title: "Waar ik mijn liefde voor data ontdekte",
      paragraphs: [
        "Na een jaar vond ik een kans in de landbouw bij Cargill. Ik vond het geweldig om terug te gaan naar Nederland, en ik bleef bijna vijf jaar bij het bedrijf. Ik begon als financial management trainee op het kantoor op Schiphol, waar ik samenwerkte met traders en commerciële teams in Cargills agrarische supply chain, en later ondersteunde ik de Bioindustrial-business in Europa, het Midden-Oosten en Noord-Afrika.",
        "Hier ontdekte ik hoeveel plezier ik haal uit data, automatisering en technologie. Ik automatiseerde het volledige reconciliatieproces, bouwde Power BI-rapporten en ETL-pipelines en gebruikte Python en ARIMA-modellen om voorraden te voorspellen voor de tradingteams. Ook hielp ik problemen met producttraceerbaarheid in wereldwijde supply chains op te lossen. In 2021 rondde ik daarnaast het data scientist-traject van Dataquest af om dieper in de tools te duiken.",
        "Mijn collega's merkten het op en vroegen me om bij het financial analytics-team te komen. Daar hielp ik Cargills wereldwijde financiële data-infrastructuur op te bouwen voor drie divisies, van voeding tot graanhandel en bio-industrie. Dat betekende alle regio's, valuta en de verschillende termen die elk bedrijfsonderdeel voor dezelfde dingen gebruikte samenbrengen. Ik bouwde financiële API's die teams honderden uren bespaarden, werkte aan een machine learning-model dat afwijkingen in financiële transacties signaleert en herontwierp een cloudproces zodat het ongeveer 90% minder kostte. Inmiddels werkte ik nauw samen met het hoofdkantoor in de Verenigde Staten.",
      ],
      takeaway: "Het meeste handwerk kun je automatiseren, en de meeste rommelige data kun je laten kloppen. Het vraagt geduld en goede vragen.",
    },
    "mexico-family": {
      place: "Mexico",
      period: "2023–2024",
      title: "Tijd met mijn grootouders",
      paragraphs: [
        "Mijn grootouders woonden in Mexico en waren al heel oud. Ik wilde tijd met ze doorbrengen zolang dat nog kon, dus in 2023 verhuisde ik naar Mexico-Stad en werkte ik van daaruit verder voor Cargill.",
        "Dat jaar gaf ik ook les in Python, SQL en machine learning, in totaal meer dan 120 uur. Iets aan anderen uitleggen is nog steeds de beste test die ik ken om te weten of ik het echt begrijp.",
      ],
    },
    africa: {
      place: "Afrika",
      period: "2024–2025",
      title: "Ontwikkeling van dichtbij zien",
      paragraphs: [
        "Na bijna vijf jaar bij Cargill wilde ik reizen, en Afrika stond bovenaan mijn lijst. De interesse in ontwikkelingseconomie die in Luxemburg begon, was nooit weggegaan, en ik wilde zien hoe groei en ontwikkeling eruitzien buiten rapporten en spreadsheets.",
        "Ik bezocht gemeenschapsprojecten, leerde de mensen kennen die ze leiden en hielp waar ik kon.",
        "In dezelfde periode bleef ik bezig met finance en data. Ik werkte als financial analytics engineer bij PIA Group, een Nederlands bedrijf, waar ik de managementrapportage en datamodellen bouwde in dbt en SQL, en als expert duurzame financiering voor Ecowater Economics, aan begrotingen, financiering en businessmodellen in water, energie en voedsel.",
      ],
    },
    distribusion: {
      place: "Terug naar Mexico",
      period: "Nu",
      title: "Product, betalingen en conversie",
      paragraphs: [
        "In oktober 2025 kreeg ik de kans om bij Distribusion, een travel tech-bedrijf, te beginnen als Senior Technical Growth Lead en een groot project in Mexico te leiden. Dus kwam ik terug, en vandaag woon ik in Mexico-Stad.",
        "Daar begon mijn huidige werk: producten, betalingen en conversie verbeteren, van zoekfunctie en locatiedata tot tracking, experimenten en checkout, met GA4, Amplitude, BigQuery en SQL achter elke beslissing. Elk eerder hoofdstuk komt erin terug. Het bankwezen leerde me een probleem op waarde te schatten voordat ik het oplos. Cargill leerde me te automatiseren, de data op te bouwen en teams het daarover eens te laten worden. Wonen in vier landen leerde me dat klanten in verschillende markten anders zoeken, kiezen en betalen.",
      ],
    },
  },
  chapterLinks: [
    "Hoe ik producten verbeter (Engels)",
    "Casestudy's productonderzoek (Engels)",
    "Casestudy's betalingen (Engels)",
  ],
  colleagues: {
    overline: "Hoe ik werk",
    title: "In de woorden van mijn collega's",
    intro:
      "Ik kan mijn manier van werken zelf beschrijven, maar de mensen met wie ik heb gewerkt, zeggen het beter. Deze zinnen komen letterlijk uit hun aanbevelingen, in het oorspronkelijke Engels.",
    headings: [
      "Ik vraag door tot het probleem helder is",
      "Ik duik in wat anderen overslaan",
      "Ik leer snel en geef het door",
      "Ik werk goed samen tussen culturen",
    ],
    more: "Alle aanbevelingen lezen (Engels) →",
  },
  outside: {
    overline: "Naast het werk",
    title: "Altijd iets aan het leren",
    intro:
      "Het meeste wat ik buiten mijn werk leer, komt van reizen en talen. Ik spreek {count} talen op verschillende niveaus, en de nieuwste is Noors. Een taal leren is de snelste manier die ik ken om te begrijpen hoe mensen ergens denken, en die gewoonte neem ik direct mee in mijn werk met klanten in verschillende markten.",
    listLabel: "Talen",
    levels: { 4: "Moedertaal", 3: "Professioneel gevorderd", 2: "Conversatieniveau", 1: "Niveau A2" },
    languageNames: { es: "Spaans", ca: "Catalaans", en: "Engels", nl: "Nederlands", fr: "Frans", pt: "Portugees", no: "Noors" },
  },
  education: {
    overline: "Opleiding",
    title: "Studies en prijzen",
    items: [
      { year: "2021", title: "Data Scientist-traject", place: "Dataquest" },
      { year: "2018", title: "Master of Science in Business Administration", place: "Rotterdam School of Management, Erasmus Universiteit · Rotterdam" },
      { year: "2017", title: "Bachelor (BSc) International Business Administration", place: "Rotterdam School of Management, Erasmus Universiteit · Rotterdam" },
      { year: "2017", title: "Winnaar van het talentprogramma Rotterdam100", place: "Gemeente Rotterdam en partnerbedrijven" },
      { year: "2016", title: "Economische groei, buitenlandse handel en investeringen in China (cijfer A)", place: "LSE–PKU Summer School, Peking University · Beijing" },
      { year: "2016", title: "Programma financiële analyse", place: "Graduate School of Management, Staatsuniversiteit van Sint-Petersburg · Sint-Petersburg" },
      { year: "2015", title: "Human resource management en arbeidsverhoudingen (cijfer A)", place: "LSE Summer School, London School of Economics · Londen" },
    ],
    more: "Details en referentiebrieven (Engels) →",
  },
  side: {
    overline: "Eigen projecten",
    title: "Wat ik ernaast bouw",
    yeelen:
      "In 2026 richtte ik Yeelen op, een sociale onderneming die zelfstandige professionals, lokale bedrijven en ondernemers met weinig middelen helpt aan een betaalbare online aanwezigheid, zodat ze makkelijker te vinden, te vertrouwen en te benaderen zijn. Ik doe alles zelf, van klantonderzoek tot prijzen en de website, en dat houdt me scherp over hoe moeilijk groeien is voor een klein bedrijf.",
    wegozero: "Een onafhankelijke samenwerking over technologie en commercieel denken voor de circulaire economie.",
    more: "Lees meer (Engels) →",
  },
  calendar: {
    eyebrow: "Laten we praten",
    title: "Werk je aan iets waarbij ik kan helpen?",
    copy: "Vertel me wat je probeert uit te zoeken. Twintig minuten is meestal genoeg om te zien of ik je kan helpen, en ik vind deze gesprekken hoe dan ook leuk.",
    note: "20 minuten · Geen voorbereiding nodig",
    noteDetail: "We beginnen bij de zakelijke vraag, niet bij een vooraf bedachte oplossing.",
    embedLabel: "Plan een gesprek van 20 minuten met Matteo Arellano",
  },
};

const no: AboutText = {
  htmlLang: "nb",
  path: "/no/om-meg/",
  endonym: "Norsk",
  homePath: "/",
  meta: {
    title: "Om Matteo Arellano | Fra finans til data, produkt og betalinger",
    description:
      "Historien om Matteo Arellano: fra Barcelona til Rotterdam School of Management, Den europeiske investeringsbanken i Luxembourg, nesten fem år med finans, data og automatisering i Cargill, reiser i Afrika og arbeid med produkt, betalinger og konvertering i reiseteknologi fra Mexico by.",
  },
  breadcrumb: { home: "Hjem", about: "Om meg" },
  hero: {
    overline: "Om meg",
    title: "Hei, jeg heter Matteo Arellano.",
    lede: "Jeg forlot Barcelona for å studere i Rotterdam, lærte bedriftsfinans i Luxembourg, oppdaget kjærligheten til data og automatisering i Cargill og jobber nå med produkt, betalinger og konvertering innen reiseteknologi. Jeg har bodd i fire land og studert i fire.",
    support:
      "Hver flytting begynte med noe jeg ville forstå bedre. Denne siden er den lange versjonen av den historien, med noen bilder underveis.",
    primary: "Si hei",
    secondary: "Les historien →",
    portraitAlt: "Portrett av Matteo Arellano",
    switchLabel: "Denne siden på",
  },
  glance: {
    label: "Kort fortalt",
    items: [
      { label: "Nå", value: "Senior Technical Growth Lead i Distribusion Technologies · grunnlegger av Yeelen · bor i Mexico by" },
      { label: "Erfaring", value: "Det europeiske investeringsfondet · Den europeiske investeringsbanken · Cargill · PIA Group · Ecowater Economics · Distribusion" },
      { label: "Utdanning", value: "Bachelor og master (MSc) i Business Administration, Rotterdam School of Management, Erasmus University · bestått alle tre eksamenene i CFA-programmet" },
      { label: "Har bodd i", value: "Spania · Nederland · Luxembourg · Mexico" },
      { label: "Har studert i", value: "Nederland · Storbritannia · Kina · Russland" },
      { label: "Språk", value: "Spansk, katalansk, engelsk, nederlandsk, fransk, portugisisk og litt norsk" },
    ],
  },
  story: { overline: "Historien så langt", title: "Seks kapitler, fire land", takeawayLabel: "Det jeg tok med meg:" },
  quoteNote: "Sitert på originalspråket, engelsk.",
  photos: {
    portrait: {
      alt: "Matteo i rød skjorte foran en taula, et forhistorisk steinmonument, under en klar blå himmel",
      caption: "Foran en taula, et av de forhistoriske steinmonumentene på Menorca.",
    },
    plantVisit: {
      alt: "Matteo og en kollega i refleksjakker foran et projisert diagram av pressingsprosessen for oljefrø",
      caption: "Verneutstyret på før et fabrikkbesøk i årene mine i Cargill. Å se pressingsprosessen med egne øyne gjorde tallene mye lettere å forstå.",
    },
    cityView: {
      alt: "Matteo på et tak over en disig by med lave bygninger, palmer og to minareter",
      caption: "Utsikt over byen en disig og støvete dag mens jeg reiste i Afrika.",
    },
    communityProject: {
      alt: "Matteo mellom to personer i vester fra en organisasjon, foran en grønn og hvit skolebygning",
      caption: "Sammen med to personer fra organisasjonen bak et lokalsamfunnsprosjekt jeg besøkte.",
    },
    buildBreak: {
      alt: "Matteo med arbeidshansker som tar en selfie med en mann i malingsflekkete kjeledress ved et bord i skyggen",
      caption: "Fortsatt med arbeidshanskene på, i en pause på et byggeprosjekt.",
    },
    ferry: {
      alt: "Matteo smiler på dekket av en ferje, med en fjellrik øy og havet bak seg",
      caption: "På en ferje langs norskekysten. Jeg lærer norsk og er foreløpig på nivå A2.",
    },
    river: {
      alt: "Matteo i redningsvest som gir tommel opp i en trebåt på en grønn elv gjennom jungelen",
      caption: "Redningsvesten på, på en elvetur gjennom jungelen.",
    },
  },
  chapters: {
    rotterdam: {
      place: "Barcelona → Rotterdam",
      period: "2014–2018",
      title: "Å lære å begynne på nytt et nytt sted",
      paragraphs: [
        "I 2014 forlot jeg Barcelona og flyttet til Rotterdam for å studere International Business Administration ved Rotterdam School of Management, Erasmus University. Det var første gang jeg måtte bygge opp et liv fra ingenting: en ny by, et nytt språk, et annet klima og en kultur der folk sier rett ut hva de mener.",
        "Jeg lærte nederlandsk, fant meg til rette i nye omgivelser og ble vant til å jobbe i internasjonale team der ingen hadde de samme forutsetningene. I noen måneder underviste jeg også i spansk for grupper av internasjonale studenter, og der lærte jeg å stå foran en gruppe og forklare ting enkelt. I 2017 var jeg med på laget som vant Rotterdam100, et talentprogram drevet av kommunen og partnerbedrifter der studenter løser ekte forretningscaser.",
        "Jeg grep også hver sjanse til å studere andre steder: et sommerkurs ved London School of Economics, et kurs om Kinas økonomiske vekst ved Peking-universitetet i Beijing og et program i finansanalyse ved Det statlige universitetet i St. Petersburg. Etter bacheloren ble jeg værende ved RSM og tok en Master of Science in Business Administration, som jeg fullførte i 2018.",
      ],
      takeaway: "Å slå seg ned et nytt sted er en ferdighet, og det blir lettere for hver gang.",
    },
    luxembourg: {
      place: "Luxembourg",
      period: "2018–2019",
      title: "Bank, der hvert tall sjekkes to ganger",
      paragraphs: [
        "De første jobbene mine tok meg til Luxembourg. Jeg begynte i Det europeiske investeringsfondet innen operasjonell risiko, der jeg utviklet risikoindikatorer, analyserte risikohendelser, bidro til porteføljerapporter og skrev en markedsanalyse. Deretter begynte jeg i restrukturerings- og resolusjonsteamet i Den europeiske investeringsbanken, der jeg støttet saksbehandlerne som håndterer selskaper i krise: kreditt- og fundamentalanalyse, gjennomgang av finansielle modeller, testing av nedbetalingsplaner og research på insolvensregler i ulike EU-land. Jeg lærte å verdsette et selskap og å vurdere om det kan betale tilbake det det skylder.",
        "Det var et formelt og sterkt regulert miljø, og jeg lærte mye av det. Analysene må være presise og dokumenterte, og hver anbefaling må gjøre det klart hva den bygger på.",
        "Det var også der interessen min for utviklingsøkonomi startet. Jeg så hvordan finansiering kan hjelpe selskaper og land med å vokse bærekraftig, og det har blitt med meg.",
      ],
      takeaway: "Hvordan man leser et selskap gjennom tallene, og hvordan man skriver analyser som tåler en grundig gjennomgang.",
    },
    cargill: {
      place: "Schiphol og Amsterdam",
      period: "2020–2024",
      title: "Der jeg oppdaget kjærligheten til data",
      paragraphs: [
        "Etter et år fant jeg en mulighet innen landbruk i Cargill. Jeg gledet meg til å komme tilbake til Nederland, og jeg ble i selskapet i nesten fem år. Jeg begynte som financial management trainee på kontoret på Schiphol, der jeg jobbet med tradere og kommersielle team i Cargills landbruksforsyningskjede, og senere støttet jeg Bioindustrial-virksomheten i Europa, Midtøsten og Nord-Afrika.",
        "Det var her jeg oppdaget hvor mye jeg liker data, automatisering og teknologi. Jeg automatiserte hele avstemmingsprosessen, bygde Power BI-rapporter og ETL-pipelines og brukte Python og ARIMA-modeller til å lage lagerprognoser for tradingteamene. Jeg bidro også til å løse utfordringer med sporbarhet av produkter i globale forsyningskjeder. I 2021 fullførte jeg i tillegg data scientist-løpet hos Dataquest for å gå dypere inn i verktøyene.",
        "Kollegaene mine la merke til det og ba meg bli med i financial analytics-teamet. Der hjalp jeg med å bygge Cargills globale infrastruktur for finansdata for tre divisjoner, fra mat til kornhandel og bioindustri. Det betydde å samle alle regioner, valutaer og de ulike begrepene hver virksomhet brukte om de samme tingene. Jeg bygde finansielle API-er som sparte teamene for hundrevis av timer, jobbet med en maskinlæringsmodell som fanger opp avvik i finansielle transaksjoner, og redesignet en skyprosess slik at den kostet rundt 90 % mindre å kjøre. Da jobbet jeg allerede tett med hovedkontoret i USA.",
      ],
      takeaway: "Det meste av manuelt arbeid kan automatiseres, og de fleste rotete data kan bringes til å stemme. Det krever tålmodighet og gode spørsmål.",
    },
    "mexico-family": {
      place: "Mexico",
      period: "2023–2024",
      title: "Tid med besteforeldrene mine",
      paragraphs: [
        "Besteforeldrene mine bodde i Mexico og var svært gamle. Jeg ville tilbringe tid med dem mens jeg fortsatt kunne, så i 2023 flyttet jeg til Mexico by og fortsatte å jobbe for Cargill derfra.",
        "Det året underviste jeg også studenter i Python, SQL og maskinlæring, over 120 timer totalt. Å lære bort noe er fortsatt den beste testen jeg vet om for å sjekke om jeg virkelig forstår det.",
      ],
    },
    africa: {
      place: "Afrika",
      period: "2024–2025",
      title: "Å se utvikling på nært hold",
      paragraphs: [
        "Etter nesten fem år i Cargill ville jeg reise, og Afrika sto øverst på listen. Interessen for utviklingsøkonomi som startet i Luxembourg, hadde aldri forsvunnet, og jeg ville se hvordan vekst og utvikling ser ut utenfor rapporter og regneark.",
        "Jeg besøkte lokalsamfunnsprosjekter, møtte menneskene som driver dem, og hjalp til der jeg kunne.",
        "I samme periode fortsatte jeg å jobbe med finans og data. Jeg var financial analytics engineer i PIA Group, et nederlandsk selskap, der jeg bygde ledelsesrapporteringen og datamodellene i dbt og SQL, og ekspert på bærekraftig finans for Ecowater Economics, med budsjetter, finansiering og forretningsmodeller innen vann, energi og mat.",
      ],
    },
    distribusion: {
      place: "Tilbake til Mexico",
      period: "Nå",
      title: "Produkt, betalinger og konvertering",
      paragraphs: [
        "I oktober 2025 fikk jeg muligheten til å begynne i Distribusion, et reiseteknologiselskap, som Senior Technical Growth Lead og lede et stort prosjekt i Mexico. Så jeg kom tilbake, og i dag bor jeg i Mexico by.",
        "Der startet det nåværende arbeidet mitt: å forbedre produkter, betalinger og konvertering, fra søk og stedsdata til sporing, eksperimenter og checkout, med GA4, Amplitude, BigQuery og SQL bak hver beslutning. Hvert tidligere kapittel viser seg i dette arbeidet. Bankverdenen lærte meg å sette en verdi på et problem før jeg løser det. Cargill lærte meg å automatisere, bygge dataene og få team til å bli enige om dem. Å bo i fire land lærte meg at kunder i ulike markeder søker, velger og betaler forskjellig.",
      ],
    },
  },
  chapterLinks: [
    "Slik forbedrer jeg produkter (engelsk)",
    "Casestudier i produktanalyse (engelsk)",
    "Casestudier om betalinger (engelsk)",
  ],
  colleagues: {
    overline: "Slik jobber jeg",
    title: "Med kollegaenes ord",
    intro:
      "Jeg kunne beskrevet arbeidsmåten min selv, men folkene jeg har jobbet med, sier det bedre. Disse setningene er hentet ordrett fra anbefalingene deres, på originalspråket engelsk.",
    headings: [
      "Jeg spør hvorfor til problemet er klart",
      "Jeg graver i det andre hopper over",
      "Jeg lærer raskt og deler videre",
      "Jeg samarbeider godt på tvers av kulturer",
    ],
    more: "Les alle anbefalingene (engelsk) →",
  },
  outside: {
    overline: "Utenom jobben",
    title: "Alltid i gang med å lære noe",
    intro:
      "Det meste jeg lærer utenom jobben, kommer fra reiser og språk. Jeg snakker {count} språk på ulike nivåer, og det nyeste er norsk. Å lære et språk er den raskeste måten jeg vet om for å forstå hvordan folk et sted tenker, og den vanen tar jeg rett med inn i arbeidet med kunder i ulike markeder.",
    listLabel: "Språk",
    levels: { 4: "Morsmål", 3: "Avansert profesjonelt nivå", 2: "Samtalenivå", 1: "Nivå A2" },
    languageNames: { es: "Spansk", ca: "Katalansk", en: "Engelsk", nl: "Nederlandsk", fr: "Fransk", pt: "Portugisisk", no: "Norsk" },
  },
  education: {
    overline: "Utdanning",
    title: "Studier og priser",
    items: [
      { year: "2021", title: "Data Scientist-løp", place: "Dataquest" },
      { year: "2018", title: "Master of Science in Business Administration", place: "Rotterdam School of Management, Erasmus University · Rotterdam" },
      { year: "2017", title: "Bachelor (BSc) i International Business Administration", place: "Rotterdam School of Management, Erasmus University · Rotterdam" },
      { year: "2017", title: "Vinner av talentprogrammet Rotterdam100", place: "Rotterdam kommune og partnerbedrifter" },
      { year: "2016", title: "Kinas økonomiske vekst, utenrikshandel og investeringer (karakter A)", place: "LSE–PKU Summer School, Peking-universitetet · Beijing" },
      { year: "2016", title: "Program i finansanalyse", place: "Graduate School of Management, Det statlige universitetet i St. Petersburg · St. Petersburg" },
      { year: "2015", title: "Personalledelse og arbeidslivsrelasjoner (karakter A)", place: "LSE Summer School, London School of Economics · London" },
    ],
    more: "Detaljer og referansebrev (engelsk) →",
  },
  side: {
    overline: "Egne prosjekter",
    title: "Det jeg bygger ved siden av",
    yeelen:
      "I 2026 grunnla jeg Yeelen, et sosialt foretak som hjelper selvstendige, lokale bedrifter og gründere med lite ressurser med å få en rimelig tilstedeværelse på nett og bli lettere å finne, stole på og kontakte. Jeg gjør alt selv, fra kundeintervjuer til prising og nettsiden, og det minner meg på hvor vanskelig det er for en liten bedrift å vokse.",
    wegozero: "Et uavhengig samarbeid om teknologi og kommersiell tenkning for sirkulærøkonomien.",
    more: "Les mer (engelsk) →",
  },
  calendar: {
    eyebrow: "La oss snakke",
    title: "Jobber du med noe jeg kan hjelpe med?",
    copy: "Fortell meg hva du prøver å finne ut av. Tjue minutter er som regel nok til å se om jeg kan være til nytte, og jeg setter pris på disse samtalene uansett.",
    note: "20 minutter · Ingen forberedelser nødvendig",
    noteDetail: "Vi starter med forretningsspørsmålet, ikke med en ferdig løsning.",
    embedLabel: "Book en samtale på 20 minutter med Matteo Arellano",
  },
};

export const aboutContent: Record<AboutLang, AboutText> = { en, es, nl, no };

/** Order of the language switch. */
export const aboutLanguages: AboutLang[] = ["en", "es", "nl", "no"];
