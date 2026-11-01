/**
 * Services in three languages. English lives in services.ts; Spanish and
 * Dutch translate only the words (services.es.ts, services.nl.ts) and share
 * figures, quotes, images and evidence links with English.
 *
 * Most linked articles and case studies are in English. The translated
 * pages say so once, near the links, and keep those titles in English.
 */
import { services, engagementFormats, type Service, type ServiceSlug, type ServiceTranslation } from "./services";
import { servicesEs } from "./services.es";
import { servicesNl } from "./services.nl";
import { aboutPath, servicesHubPath, type Lang } from "./siteUi";

const translations: Record<Exclude<Lang, "en">, Record<ServiceSlug, ServiceTranslation>> = {
  es: servicesEs,
  nl: servicesNl,
};

/** Evidence labels, and titles that describe a page rather than quote its title. */
const evidenceText: Record<Exclude<Lang, "en">, { types: Record<string, string>; titles: Record<string, string> }> = {
  es: {
    types: {
      Article: "Artículo",
      "Field note": "Nota de campo",
      Recipe: "Receta",
      "Specialist page": "Página especializada",
      Cookbook: "Recetario técnico",
      Evidence: "Evidencia",
      "Case study": "Caso de estudio",
      Guide: "Guía",
    },
    titles: {
      "/achievements/#outcomes": "Resultados seleccionados: −90% de coste de procesamiento y más de 30 modelos analíticos",
      "/achievements/#recommendations": "Recomendaciones de colegas de ciencia de datos e ingeniería",
      "/achievements/#languages": "Idiomas, trayectoria profesional y formación",
      "/services/product-copy-landing-pages/":
        "Textos de landing pages para productos que necesitan posicionarse, explicarse y convertir",
      "/services/plumbing-hvac-revenue-leak-discovery/":
        "Detección de fugas de ingresos para empresas de fontanería y climatización en Google Local Services Ads",
    },
  },
  nl: {
    types: {
      Article: "Artikel",
      "Field note": "Field note",
      Recipe: "Recept",
      "Specialist page": "Specialistische pagina",
      Cookbook: "Kookboek",
      Evidence: "Bewijs",
      "Case study": "Casestudy",
      Guide: "Gids",
    },
    titles: {
      "/achievements/#outcomes": "Geselecteerde resultaten: −90% verwerkingskosten en meer dan 30 analytische modellen",
      "/achievements/#recommendations": "Aanbevelingen van collega's uit data science en engineering",
      "/achievements/#languages": "Talen, loopbaan en opleiding",
      "/services/product-copy-landing-pages/":
        "Teksten voor landingspagina's van producten die moeten ranken, uitleggen en converteren",
      "/services/plumbing-hvac-revenue-leak-discovery/":
        "Omzetlekken vinden voor loodgieters- en installatiebedrijven op Google Local Services Ads",
    },
  },
};

/** A service as shown on a page, with a flag for evidence titles left in English. */
export type LocalService = Service & {
  lang: Lang;
  evidence: (Service["evidence"][number] & { english: boolean })[];
};

function localise(base: Service, lang: Lang): LocalService {
  if (lang === "en") {
    return { ...base, lang, evidence: base.evidence.map((item) => ({ ...item, english: false })) };
  }
  const t = translations[lang][base.slug];
  const text = evidenceText[lang];
  return {
    ...base,
    lang,
    path: t.path,
    name: t.name,
    short: t.short,
    tags: t.tags,
    metaTitle: t.metaTitle,
    metaDescription: t.metaDescription,
    serviceTypes: t.serviceTypes,
    hero: { ...base.hero, ...t.hero },
    stats: base.stats.map((stat, index) => ({ value: stat.value, label: t.statLabels[index] ?? stat.label })),
    outcomes: t.outcomes,
    signals: t.signals,
    scope: t.scope,
    approach: t.approach,
    firstDeliverable: t.firstDeliverable,
    evidence: base.evidence.map((item) => ({
      ...item,
      type: text.types[item.type] ?? item.type,
      title: text.titles[item.href] ?? item.title,
      english: !(item.href in text.titles),
    })),
    evidenceMore: base.evidenceMore && {
      href: t.evidenceMore?.href ?? base.evidenceMore.href,
      label: t.evidenceMore?.label ?? base.evidenceMore.label,
    },
    tools: t.tools ?? base.tools,
    faqs: t.faqs,
    ctaTitle: t.ctaTitle,
    ctaCopy: t.ctaCopy,
  };
}

export function getServices(lang: Lang): LocalService[] {
  return services.map((service) => localise(service, lang));
}

export function getLocalService(lang: Lang, slug: ServiceSlug): LocalService {
  const base = services.find((service) => service.slug === slug);
  if (!base) throw new Error(`Unknown service: ${slug}`);
  return localise(base, lang);
}

/** The path of one service in each language, for hreflang and the language switcher. */
export function serviceAlternates(slug: ServiceSlug): Record<Lang, string> {
  const en = services.find((service) => service.slug === slug)!.path;
  return { en, es: translations.es[slug].path, nl: translations.nl[slug].path };
}

/** Every page that has its own booking calendar, in every language. */
export const pagesWithCalendar: string[] = [
  ...Object.values(servicesHubPath),
  ...services.map((service) => service.path),
  ...Object.values(translations).flatMap((set) => Object.values(set).map((service) => service.path)),
];

export const engagementFormatsByLang: Record<Lang, { title: string; copy: string }[]> = {
  en: engagementFormats,
  es: [
    {
      title: "Diagnóstico",
      copy: "Una revisión centrada en un solo problema que termina con hallazgos cuantificados y un plan priorizado.",
    },
    {
      title: "Proyecto",
      copy: "Ejecución práctica del plan con tu equipo, desde la especificación hasta el lanzamiento y la medición.",
    },
    {
      title: "Socio continuo",
      copy: "Apoyo sénior periódico para un equipo que necesita criterio comercial, analítico y técnico en una sola persona.",
    },
  ],
  nl: [
    {
      title: "Diagnose",
      copy: "Een gerichte analyse van één probleem, die eindigt met gekwantificeerde bevindingen en een geprioriteerd plan.",
    },
    {
      title: "Project",
      copy: "Praktische uitvoering van het plan met je team, van specificatie tot lancering en meting.",
    },
    {
      title: "Vaste partner",
      copy: "Regelmatige senior ondersteuning voor een team dat commercieel, analytisch en technisch oordeelsvermogen in één persoon nodig heeft.",
    },
  ],
};

/* ---------------------------------------------------------------------- */
/* Fixed words on every service page                                       */
/* ---------------------------------------------------------------------- */

export type ServiceUi = {
  home: string;
  services: string;
  breadcrumb: string;
  bookCall: string;
  seeEvidence: string;
  outcomesOverline: string;
  outcomesTitle: string;
  fitOverline: string;
  fitTitle: string;
  startTitle: string;
  steps: [string, string][];
  firstStep: string;
  emailAlt: string;
  scopeOverline: string;
  scopeTitle: string;
  evidenceOverline: string;
  evidenceTitle: string;
  quoteNote?: string;
  evidenceNote?: string;
  allRecommendations: string;
  methodOverline: string;
  methodTitle: string;
  formatsTitle: string;
  toolsTitle: string;
  faqOverline: string;
  faqTitle: string;
  bookLabel: string;
  calendar: { eyebrow: string; note?: string; noteDetail?: string; embedLabel?: string };
  othersOverline: string;
  othersTitle: string;
  allServices: string;
};

export const serviceUi: Record<Lang, ServiceUi> = {
  en: {
    home: "Home",
    services: "Services",
    breadcrumb: "Breadcrumb",
    bookCall: "Book a 20-minute call",
    seeEvidence: "See the evidence",
    outcomesOverline: "What changes",
    outcomesTitle: "What you get from this work.",
    fitOverline: "Is this for you?",
    fitTitle: "Call me when one of these sounds familiar.",
    startTitle: "How we start",
    steps: [
      ["A 20-minute call.", "We look at the problem together, with no brief needed."],
      ["A short proposal.", "If there is a fit, I send the scope, the first deliverable and the timing."],
    ],
    firstStep: "A first deliverable.",
    emailAlt: "Prefer email? Write to",
    scopeOverline: "What I do",
    scopeTitle: "The work, area by area.",
    evidenceOverline: "Evidence",
    evidenceTitle: "Proof, in other people's words and my own work.",
    allRecommendations: "Read all recommendations →",
    methodOverline: "How I work",
    methodTitle: "Three steps, measured at every stage.",
    formatsTitle: "Ways to work together",
    toolsTitle: "Tools I use",
    faqOverline: "Questions",
    faqTitle: "Frequently asked questions.",
    bookLabel: "Book a call",
    calendar: { eyebrow: "Talk it through" },
    othersOverline: "Other services",
    othersTitle: "Often combined with this work.",
    allServices: "All services →",
  },
  es: {
    home: "Inicio",
    services: "Servicios",
    breadcrumb: "Ruta de navegación",
    bookCall: "Reserva una llamada de 20 minutos",
    seeEvidence: "Ver la evidencia",
    outcomesOverline: "Qué cambia",
    outcomesTitle: "Lo que obtienes con este trabajo.",
    fitOverline: "¿Es para ti?",
    fitTitle: "Llámame si alguna de estas situaciones te resulta familiar.",
    startTitle: "Cómo empezamos",
    steps: [
      ["Una llamada de 20 minutos.", "Vemos el problema juntos, sin necesidad de preparar un briefing."],
      ["Una propuesta breve.", "Si encajamos, te envío el alcance, la primera entrega y los plazos."],
    ],
    firstStep: "Una primera entrega.",
    emailAlt: "¿Prefieres el correo? Escríbeme a",
    scopeOverline: "Qué hago",
    scopeTitle: "El trabajo, área por área.",
    evidenceOverline: "Evidencia",
    evidenceTitle: "Pruebas, en palabras de otros y en mi propio trabajo.",
    quoteNote: "Recomendación original en inglés",
    evidenceNote: "La mayoría de los artículos y casos enlazados están en inglés.",
    allRecommendations: "Leer todas las recomendaciones →",
    methodOverline: "Cómo trabajo",
    methodTitle: "Tres pasos, medidos en cada etapa.",
    formatsTitle: "Formas de trabajar juntos",
    toolsTitle: "Herramientas que uso",
    faqOverline: "Preguntas",
    faqTitle: "Preguntas frecuentes.",
    bookLabel: "Reservar una llamada",
    calendar: {
      eyebrow: "Hablemos",
      note: "20 minutos · no necesitas preparar un briefing",
      noteDetail: "Empezamos por la pregunta de negocio, no por una solución predeterminada.",
      embedLabel: "Reservar una conversación de 20 minutos con Matteo Arellano",
    },
    othersOverline: "Otros servicios",
    othersTitle: "Suele combinarse con este trabajo.",
    allServices: "Todos los servicios →",
  },
  nl: {
    home: "Home",
    services: "Diensten",
    breadcrumb: "Kruimelpad",
    bookCall: "Plan een gesprek van 20 minuten",
    seeEvidence: "Bekijk het bewijs",
    outcomesOverline: "Wat er verandert",
    outcomesTitle: "Wat dit werk je oplevert.",
    fitOverline: "Is dit iets voor jou?",
    fitTitle: "Neem contact op als een van deze situaties bekend klinkt.",
    startTitle: "Zo beginnen we",
    steps: [
      ["Een gesprek van 20 minuten.", "We bekijken het probleem samen, zonder voorbereide briefing."],
      ["Een kort voorstel.", "Als het past, stuur ik de scope, de eerste oplevering en de planning."],
    ],
    firstStep: "Een eerste oplevering.",
    emailAlt: "Liever e-mail? Schrijf naar",
    scopeOverline: "Wat ik doe",
    scopeTitle: "Het werk, per onderdeel.",
    evidenceOverline: "Bewijs",
    evidenceTitle: "Bewijs, in de woorden van anderen en in mijn eigen werk.",
    quoteNote: "Oorspronkelijke aanbeveling in het Engels",
    evidenceNote: "De meeste gelinkte artikelen en cases zijn in het Engels.",
    allRecommendations: "Lees alle aanbevelingen →",
    methodOverline: "Hoe ik werk",
    methodTitle: "Drie stappen, gemeten in elke fase.",
    formatsTitle: "Manieren om samen te werken",
    toolsTitle: "Tools die ik gebruik",
    faqOverline: "Vragen",
    faqTitle: "Veelgestelde vragen.",
    bookLabel: "Plan een gesprek",
    calendar: {
      eyebrow: "Samen praten en ontdekken",
      note: "20 minuten · geen voorbereide briefing nodig",
      noteDetail: "We beginnen met de businessvraag, niet met een vooraf bepaalde oplossing.",
      embedLabel: "Boek een gesprek van 20 minuten met Matteo Arellano",
    },
    othersOverline: "Andere diensten",
    othersTitle: "Vaak gecombineerd met dit werk.",
    allServices: "Alle diensten →",
  },
};

/* ---------------------------------------------------------------------- */
/* The services hub                                                        */
/* ---------------------------------------------------------------------- */

export type HubContent = {
  title: string;
  description: string;
  kicker: string;
  h1: string;
  lede: string;
  chooseCta: string;
  stats: { value: string; label: string }[];
  listOverline: string;
  listTitle: string;
  startOverline: string;
  startTitle: string;
  startCopy: string;
  thirdStep: string;
  proofTitle: string;
  work: { href: string; type: string; title: string }[];
  calendarTitle: string;
  calendarCopy: string;
};

export const hubContent: Record<Lang, HubContent> = {
  en: {
    title: "Services: Growth Marketing, Data, Product, Sales & Payments | Matteo Arellano",
    description:
      "Five services from one technical growth partner: growth marketing (SEO, GEO, ads, GA4), data engineering and automation, product improvement, business development and payments.",
    kicker: "Services",
    h1: "Five ways I help companies grow revenue and cut cost.",
    lede: "I work across marketing, data, product, business development and payments. Most clients start with one service and add another when the problem crosses into it, because growth problems rarely stay in one department.",
    chooseCta: "Choose a service",
    stats: [
      { value: "+42%", label: "conversion improvement on a digital customer journey" },
      { value: "−90%", label: "cloud-processing cost after a pipeline redesign" },
      { value: "+18pp", label: "card approval, from roughly 57% to 75%" },
    ],
    listOverline: "Choose a service",
    listTitle: "What would you like to improve?",
    startOverline: "Not sure where to start?",
    startTitle: "Start with the problem, not the service.",
    startCopy:
      "Many problems cross more than one area. A drop in sales can come from search, from a broken checkout step or from a payment provider that declines local cards. In the first call, we work out where the cause sits and which service fits it.",
    thirdStep: "Every engagement opens with a sized, prioritised view of the problem.",
    proofTitle: "What people I have worked with say.",
    work: [
      { href: "/achievements/#outcomes", type: "Results", title: "Selected outcomes from different parts of my career" },
      { href: "/product-research/case-studies/", type: "Case studies", title: "Product research case studies, worked step by step" },
      { href: "/payment-solutions/case-studies/", type: "Case studies", title: "Payment case studies and guides" },
      { href: "/insights/", type: "Writing", title: "Insights, articles and technical recipes" },
      { href: aboutPath.en, type: "Background", title: "My story, from finance into data, technology and growth" },
    ],
    calendarTitle: "Have something you're trying to grow, fix or understand?",
    calendarCopy:
      "Bring the problem or the opportunity. In 20 minutes we can understand it together, exchange ideas and see which service, if any, fits.",
  },
  es: {
    title: "Servicios: growth marketing, datos, producto, ventas y pagos | Matteo Arellano",
    description:
      "Cinco servicios de un mismo socio técnico de crecimiento: growth marketing (SEO, GEO, anuncios y GA4), ingeniería de datos y automatización, mejora de producto, desarrollo de negocio y pagos.",
    kicker: "Servicios",
    h1: "Cinco formas en las que ayudo a las empresas a aumentar sus ingresos y reducir costes.",
    lede: "Trabajo en marketing, datos, producto, desarrollo de negocio y pagos. La mayoría de los clientes empieza con un servicio y añade otro cuando el problema se extiende a esa área, porque los problemas de crecimiento rara vez se quedan en un solo departamento.",
    chooseCta: "Elige un servicio",
    stats: [
      { value: "+42%", label: "de mejora de la conversión en un recorrido digital de cliente" },
      { value: "−90%", label: "de coste de procesamiento en la nube tras rediseñar un pipeline" },
      { value: "+18pp", label: "de aprobación de tarjetas, de aproximadamente el 57% al 75%" },
    ],
    listOverline: "Elige un servicio",
    listTitle: "¿Qué te gustaría mejorar?",
    startOverline: "¿No sabes por dónde empezar?",
    startTitle: "Empieza por el problema, no por el servicio.",
    startCopy:
      "Muchos problemas abarcan más de un área. Una caída de las ventas puede venir de la búsqueda, de un paso roto en el checkout o de un proveedor de pagos que rechaza tarjetas locales. En la primera llamada averiguamos dónde está la causa y qué servicio encaja.",
    thirdStep: "Toda colaboración empieza con una visión cuantificada y priorizada del problema.",
    proofTitle: "Lo que dicen las personas con las que he trabajado.",
    work: [
      { href: "/achievements/#outcomes", type: "Resultados", title: "Resultados seleccionados de distintas etapas de mi carrera" },
      { href: "/product-research/case-studies/", type: "Casos de estudio", title: "Casos de investigación de producto, explicados paso a paso" },
      { href: "/payment-solutions/case-studies/", type: "Casos de estudio", title: "Casos y guías sobre pagos" },
      { href: "/insights/", type: "Artículos", title: "Análisis, artículos y recetas técnicas" },
      { href: aboutPath.es, type: "Trayectoria", title: "Mi historia, de las finanzas a los datos, la tecnología y el crecimiento" },
    ],
    calendarTitle: "¿Hay algo que estás intentando hacer crecer, arreglar o entender?",
    calendarCopy:
      "Trae el problema o la oportunidad. En 20 minutos podemos entenderlo juntos, intercambiar ideas y ver qué servicio encaja, si es que alguno lo hace.",
  },
  nl: {
    title: "Diensten: growth marketing, data, product, sales en betalingen | Matteo Arellano",
    description:
      "Vijf diensten van één technisch groeipartner: growth marketing (SEO, GEO, advertenties en GA4), data engineering en automatisering, productverbetering, business development en betalingen.",
    kicker: "Diensten",
    h1: "Vijf manieren waarop ik bedrijven help hun omzet te laten groeien en kosten te verlagen.",
    lede: "Ik werk op het snijvlak van marketing, data, product, business development en betalingen. De meeste klanten beginnen met één dienst en voegen er een toe zodra het probleem zich uitbreidt, want groeiproblemen blijven zelden binnen één afdeling.",
    chooseCta: "Kies een dienst",
    stats: [
      { value: "+42%", label: "betere conversie in een digitale klantreis" },
      { value: "−90%", label: "kosten voor cloudverwerking na een herontwerp van de pipeline" },
      { value: "+18pp", label: "kaartgoedkeuring, van ongeveer 57% naar 75%" },
    ],
    listOverline: "Kies een dienst",
    listTitle: "Wat wil je verbeteren?",
    startOverline: "Weet je niet waar je moet beginnen?",
    startTitle: "Begin bij het probleem, niet bij de dienst.",
    startCopy:
      "Veel problemen raken meer dan één gebied. Een daling in de verkoop kan komen door zoekmachines, door een kapotte stap in de checkout of door een betaalprovider die lokale kaarten weigert. In het eerste gesprek zoeken we uit waar de oorzaak zit en welke dienst daarbij past.",
    thirdStep: "Elke samenwerking begint met een gekwantificeerd en geprioriteerd beeld van het probleem.",
    proofTitle: "Wat mensen met wie ik heb gewerkt over mij zeggen.",
    work: [
      { href: "/achievements/#outcomes", type: "Resultaten", title: "Geselecteerde resultaten uit verschillende fasen van mijn loopbaan" },
      { href: "/product-research/case-studies/", type: "Casestudy's", title: "Casestudy's over productonderzoek, stap voor stap uitgewerkt" },
      { href: "/payment-solutions/case-studies/", type: "Casestudy's", title: "Casestudy's en gidsen over betalingen" },
      { href: "/insights/", type: "Artikelen", title: "Inzichten, artikelen en technische recepten" },
      { href: aboutPath.nl, type: "Achtergrond", title: "Mijn verhaal, van finance naar data, technologie en groei" },
    ],
    calendarTitle: "Werk je aan iets dat je wilt laten groeien, oplossen of beter begrijpen?",
    calendarCopy:
      "Neem het probleem of de kans mee. In 20 minuten kunnen we het samen begrijpen, ideeën uitwisselen en kijken welke dienst past, als er een past.",
  },
};
