/**
 * Text for the homepage in each language. The layout lives in
 * src/components/HomePage.astro; this file only holds words and links.
 *
 * Most pages behind these links are in English. The Spanish and Dutch
 * versions say so once, near the links. Each language has its own intro video.
 */
import { services } from "./services";

export type HomeLang = "en" | "es" | "nl";

type Link = { href: string; title: string; copy: string };

export type HomeContent = {
  lang: HomeLang;
  path: string;
  title: string;
  description: string;
  skip: string;
  navLabel: string;
  nav: { href: string; label: string }[];
  langLabel: string;
  langLinkLabel: (lang: HomeLang) => string;
  overline: string;
  /** Lede split around the gold, italic word. */
  lede: [string, string, string];
  bookCall: string;
  watchIntro: string;
  /** Shown as a small badge on the video button when the video is not in the page language. */
  videoLangBadge?: { text: string; label: string };
  quick: { email: string; explore: string };
  scrollLabel: string;
  exploreOverline: string;
  exploreTitle: string;
  exploreNote?: string;
  work: { kicker: string; title: string; links: Link[]; more: string };
  know: {
    kicker: string;
    title: string;
    links: Link[];
    videoTitle: string;
    videoCopy: string;
    more: string;
  };
  read: { kicker: string; title: string; links: Link[]; more: string };
  proofTitle: string;
  quoteNote?: string;
  allRecommendations: string;
  stats: { value: string; label: string }[];
  logosLabel: string;
  bookLabel: string;
  calendar: {
    namespace: string;
    eyebrow: string;
    title: string;
    copy: string;
    note?: string;
    noteDetail?: string;
    embedLabel?: string;
  };
  emailAlt: string;
  video: {
    title: string;
    /** Short description used in the VideoObject schema. */
    description: string;
    /** 1080p and 720p files, plus the poster frame (1280 px wide). */
    src: { large: string; small: string; poster: string };
    close: string;
    readAsText: string;
    transcript: (languageCount: number) => string;
  };
};

const email = "matteo.visibility@gmail.com";

/* Service names in Spanish and Dutch, in the same order as src/data/services.ts. */
const serviceText: Record<Exclude<HomeLang, "en">, { name: string; copy: string }[]> = {
  es: [
    { name: "Growth marketing", copy: "SEO, búsqueda con IA, anuncios y GA4, medidos en ingresos" },
    { name: "Ingeniería de datos y automatización", copy: "Big data, pipelines y automatización que reducen costes y trabajo manual" },
    { name: "Mejora de producto", copy: "Encontrar dónde abandonan los usuarios y lanzar la solución con tu equipo" },
    { name: "Desarrollo de negocio y venta técnica", copy: "Nuevos mercados, alianzas y acuerdos que necesitan credibilidad técnica" },
    { name: "Soluciones de pago", copy: "Aceptación de pagos, integraciones con PSP y métodos de pago locales" },
  ],
  nl: [
    { name: "Growth marketing", copy: "SEO, AI-zoekresultaten, advertenties en GA4, gemeten in omzet" },
    { name: "Data engineering & automatisering", copy: "Big data, pipelines en automatisering die kosten en handwerk verlagen" },
    { name: "Productverbetering", copy: "Vinden waar gebruikers afhaken en de oplossing samen met je team live zetten" },
    { name: "Business development & technische sales", copy: "Nieuwe markten, partnerships en deals die technische kennis vragen" },
    { name: "Betaaloplossingen", copy: "Betaalacceptatie, PSP-integraties en lokale betaalmethoden" },
  ],
};

function serviceLinks(lang: HomeLang): Link[] {
  return services.map((service, index) => ({
    href: service.path,
    title: lang === "en" ? service.name : serviceText[lang][index].name,
    copy: lang === "en" ? service.short : serviceText[lang][index].copy,
  }));
}

export const homeContent: Record<HomeLang, HomeContent> = {
  en: {
    lang: "en",
    path: "/",
    title: "Matteo Arellano | Technical Growth Partner",
    description:
      "I help companies find new ways to grow and turn them into revenue: new markets and partnerships, conversion, payments, acquisition, data and automation. Book a 20-minute call.",
    skip: "Skip to the main links",
    navLabel: "Primary",
    nav: [
      { href: "/services/", label: "Services" },
      { href: "/about/", label: "About" },
      { href: "/insights/", label: "Insights" },
      { href: "/cybersecurity/", label: "Cybersecurity" },
    ],
    langLabel: "Language",
    langLinkLabel: (lang) => `View site in ${{ en: "English", es: "Español", nl: "Nederlands" }[lang]}`,
    overline: "Technical Growth Partner",
    lede: ["I help companies find new ways to grow and turn them into ", "revenue", "."],
    bookCall: "Book a 20-minute call",
    watchIntro: "Watch my 30-second intro",
    quick: { email: "Email me", explore: "Explore the site" },
    scrollLabel: "Scroll to the main links",
    exploreOverline: "Where would you like to start?",
    exploreTitle: "Three ways in.",
    work: {
      kicker: "Work with me",
      title: "Services",
      links: serviceLinks("en"),
      more: "All services together →",
    },
    know: {
      kicker: "Get to know me",
      title: "Who I am",
      links: [
        { href: "/about/", title: "My story", copy: "From finance into data, technology and growth" },
        { href: "/achievements/#recommendations", title: "Recommendations", copy: "What people I have worked with say" },
        { href: "/achievements/#outcomes", title: "Results & experience", copy: "Outcomes, career path and education" },
        { href: "/achievements/#languages", title: "{languages} languages", copy: "For the markets you want to reach" },
      ],
      videoTitle: "The 30-second version",
      videoCopy: "A short video introduction",
      more: "All evidence on one page →",
    },
    read: {
      kicker: "Read & learn",
      title: "Writing",
      links: [
        { href: "/insights/", title: "Insights", copy: "Articles and recipes, by growth area" },
        { href: "/journal/", title: "Field notes", copy: "What I am learning from real work" },
        { href: "/payment-solutions/case-studies/", title: "Case studies", copy: "Payments and product research, worked through" },
        { href: "/cybersecurity/", title: "Cybersecurity", copy: "Security explained for websites, ads and stores" },
        { href: "/resources/", title: "Technical cookbook", copy: "Reusable code recipes for SEO, analytics and data" },
      ],
      more: "Blog by topic →",
    },
    proofTitle: "Evidence",
    allRecommendations: "Read all recommendations →",
    stats: [
      { value: "+42%", label: "conversion improvement" },
      { value: "−90%", label: "cloud-processing cost" },
      { value: "30+", label: "analytical models built" },
    ],
    logosLabel: "Organisations I have worked with",
    bookLabel: "Book a call",
    calendar: {
      namespace: "homepage-discovery",
      eyebrow: "Talk it through",
      title: "Have something you're trying to grow, fix or understand?",
      copy: "Bring the problem or the opportunity. In 20 minutes we can understand it together, exchange ideas and see whether there is a useful way for me to contribute.",
    },
    emailAlt: "Prefer email? Write to",
    video: {
      title: "Matteo Arellano in 30 seconds",
      description:
        "A 30-second introduction to Matteo Arellano, Technical Growth Partner: background, selected results, languages and how to start a conversation.",
      src: {
        large: "/videos/matteo-arellano-intro-1080.mp4",
        small: "/videos/matteo-arellano-intro-720.mp4",
        poster: "/images/home/intro-poster-1280.webp",
      },
      close: "Close video",
      readAsText: "Read the video as text",
      transcript: (n) =>
        `Have something you're trying to grow, fix or understand? I'm Matteo Arellano, Technical Growth Partner. I help companies find new ways to grow and turn them into revenue. I didn't start in marketing: I started by learning how companies make money, in Luxembourg (EIB and EIF, 2018), Amsterdam and Mexico City (Cargill, 2020), Utrecht (PIA Group, 2024) and worldwide today (Distribusion). Evidence over assumptions: +42% conversion improvement, −90% cloud-processing cost, 30+ analytical models built. ${n} languages, ready for the markets you want to reach. Let's talk: 20 minutes, no prepared brief required.`,
    },
  },

  es: {
    lang: "es",
    path: "/es/",
    title: "Matteo Arellano | Socio técnico de crecimiento",
    description:
      "Ayudo a empresas a encontrar nuevas formas de crecer y a convertirlas en ingresos: nuevos mercados y alianzas, conversión, pagos, adquisición, datos y automatización. Reserva una llamada de 20 minutos.",
    skip: "Saltar a los enlaces principales",
    navLabel: "Navegación principal",
    nav: [
      { href: "/services/", label: "Servicios" },
      { href: "/es/sobre-mi/", label: "Sobre mí" },
      { href: "/insights/", label: "Artículos" },
      { href: "/cybersecurity/", label: "Ciberseguridad" },
    ],
    langLabel: "Idioma",
    langLinkLabel: (lang) => `Ver el sitio en ${{ en: "inglés", es: "español", nl: "neerlandés" }[lang]}`,
    overline: "Socio técnico de crecimiento",
    lede: ["Ayudo a empresas a encontrar nuevas formas de crecer y a convertirlas en ", "ingresos", "."],
    bookCall: "Reserva una llamada de 20 minutos",
    watchIntro: "Mi intro en 30 segundos",
    quick: { email: "Escríbeme", explore: "Explora el sitio" },
    scrollLabel: "Ir a los enlaces principales",
    exploreOverline: "¿Por dónde quieres empezar?",
    exploreTitle: "Tres puntos de partida.",
    exploreNote: "La mayoría de las páginas y artículos están en inglés.",
    work: {
      kicker: "Trabaja conmigo",
      title: "Servicios",
      links: serviceLinks("es"),
      more: "Todos los servicios →",
    },
    know: {
      kicker: "Conóceme",
      title: "Quién soy",
      links: [
        { href: "/es/sobre-mi/", title: "Mi historia", copy: "De las finanzas a los datos, la tecnología y el crecimiento" },
        { href: "/achievements/#recommendations", title: "Recomendaciones", copy: "Lo que dicen las personas con las que he trabajado" },
        { href: "/achievements/#outcomes", title: "Resultados y experiencia", copy: "Resultados, trayectoria y formación" },
        { href: "/achievements/#languages", title: "{languages} idiomas", copy: "Para los mercados a los que quieres llegar" },
      ],
      videoTitle: "La versión de 30 segundos",
      videoCopy: "Una breve presentación en vídeo",
      more: "Toda la evidencia en una página →",
    },
    read: {
      kicker: "Lee y aprende",
      title: "Publicaciones",
      links: [
        { href: "/insights/", title: "Artículos", copy: "Artículos y recetas por área de crecimiento" },
        { href: "/journal/", title: "Notas de campo", copy: "Lo que aprendo del trabajo real" },
        { href: "/payment-solutions/case-studies/", title: "Casos de estudio", copy: "Pagos e investigación de producto, paso a paso" },
        { href: "/cybersecurity/", title: "Ciberseguridad", copy: "Seguridad explicada para webs, anuncios y tiendas online" },
        { href: "/resources/", title: "Recetario técnico", copy: "Recetas de código reutilizables para SEO, analítica y datos" },
      ],
      more: "Blog por tema →",
    },
    proofTitle: "Evidencia",
    quoteNote: "Recomendación original en inglés",
    allRecommendations: "Leer todas las recomendaciones →",
    stats: [
      { value: "+42%", label: "mejora de la conversión" },
      { value: "−90%", label: "coste de procesamiento en la nube" },
      { value: "30+", label: "modelos analíticos creados" },
    ],
    logosLabel: "Organizaciones con las que he trabajado",
    bookLabel: "Reservar una llamada",
    calendar: {
      namespace: "homepage-discovery-es",
      eyebrow: "Hablemos",
      title: "¿Hay algo que estás intentando hacer crecer, arreglar o entender?",
      copy: "Trae el problema o la oportunidad. En 20 minutos podemos entenderlo juntos, intercambiar ideas y ver si hay una forma útil en la que pueda contribuir.",
      note: "20 minutos · no necesitas preparar un briefing",
      noteDetail: "Empezamos por la pregunta de negocio, no por una solución predeterminada.",
      embedLabel: "Reservar una conversación de 20 minutos con Matteo Arellano",
    },
    emailAlt: "¿Prefieres el correo? Escríbeme a",
    video: {
      title: "Matteo Arellano en 30 segundos",
      description:
        "Una presentación de 30 segundos de Matteo Arellano, socio técnico de crecimiento: trayectoria, resultados, idiomas y cómo empezar una conversación.",
      src: {
        large: "/videos/matteo-arellano-intro-es-1080.mp4",
        small: "/videos/matteo-arellano-intro-es-720.mp4",
        poster: "/images/home/intro-poster-es-1280.webp",
      },
      close: "Cerrar vídeo",
      readAsText: "Leer el vídeo como texto",
      transcript: (n) =>
        `¿Hay algo que estás intentando hacer crecer, arreglar o entender? Soy Matteo Arellano, socio técnico de crecimiento. Ayudo a empresas a encontrar nuevas formas de crecer y a convertirlas en ingresos. No empecé en marketing: empecé aprendiendo cómo ganan dinero las empresas, en Luxemburgo (BEI y FEI, 2018), Ámsterdam y Ciudad de México (Cargill, 2020), Utrecht (PIA Group, 2024) y hoy a nivel internacional (Distribusion). Evidencia, no suposiciones: +42% de mejora en la conversión, −90% en costes de procesamiento en la nube y más de 30 modelos analíticos construidos. ${n} idiomas, listos para los mercados a los que quieres llegar. Nuevos ingresos, mayor conversión y demanda cualificada. Hablemos en matteoarellano.com. Primero el problema de negocio; después, las herramientas. Son 20 minutos y no necesitas preparar un briefing.`,
    },
  },

  nl: {
    lang: "nl",
    path: "/nl/",
    title: "Matteo Arellano | Technisch groeipartner",
    description:
      "Ik help bedrijven nieuwe manieren te vinden om te groeien en die om te zetten in omzet: nieuwe markten en partnerships, conversie, betalingen, acquisitie, data en automatisering. Plan een gesprek van 20 minuten.",
    skip: "Ga naar de belangrijkste links",
    navLabel: "Hoofdnavigatie",
    nav: [
      { href: "/services/", label: "Diensten" },
      { href: "/nl/over-mij/", label: "Over mij" },
      { href: "/insights/", label: "Inzichten" },
      { href: "/cybersecurity/", label: "Cybersecurity" },
    ],
    langLabel: "Taalkeuze",
    langLinkLabel: (lang) => `Bekijk de site in het ${{ en: "Engels", es: "Spaans", nl: "Nederlands" }[lang]}`,
    overline: "Technisch groeipartner",
    lede: ["Ik help bedrijven nieuwe manieren te vinden om te groeien en die om te zetten in ", "omzet", "."],
    bookCall: "Plan een gesprek van 20 minuten",
    watchIntro: "Mijn intro in 30 seconden",
    quick: { email: "Mail me", explore: "Ontdek de site" },
    scrollLabel: "Ga naar de belangrijkste links",
    exploreOverline: "Waar wil je beginnen?",
    exploreTitle: "Drie ingangen.",
    exploreNote: "De meeste pagina's en artikelen zijn in het Engels.",
    work: {
      kicker: "Werk met mij",
      title: "Diensten",
      links: serviceLinks("nl"),
      more: "Alle diensten op een rij →",
    },
    know: {
      kicker: "Leer mij kennen",
      title: "Wie ik ben",
      links: [
        { href: "/nl/over-mij/", title: "Mijn verhaal", copy: "Van finance naar data, technologie en groei" },
        { href: "/achievements/#recommendations", title: "Aanbevelingen", copy: "Wat mensen met wie ik heb gewerkt zeggen" },
        { href: "/achievements/#outcomes", title: "Resultaten & ervaring", copy: "Resultaten, loopbaan en opleiding" },
        { href: "/achievements/#languages", title: "{languages} talen", copy: "Voor de markten die je wilt bereiken" },
      ],
      videoTitle: "De versie van 30 seconden",
      videoCopy: "Een korte video-introductie",
      more: "Al het bewijs op één pagina →",
    },
    read: {
      kicker: "Lezen & leren",
      title: "Publicaties",
      links: [
        { href: "/insights/", title: "Inzichten", copy: "Artikelen en recepten per groeigebied" },
        { href: "/journal/", title: "Field Notes", copy: "Wat ik leer van echt werk" },
        { href: "/payment-solutions/case-studies/", title: "Casestudy's", copy: "Betalingen en productonderzoek, stap voor stap" },
        { href: "/cybersecurity/", title: "Cybersecurity", copy: "Beveiliging uitgelegd voor websites, advertenties en webshops" },
        { href: "/resources/", title: "Technisch kookboek", copy: "Herbruikbare coderecepten voor SEO, analytics en data" },
      ],
      more: "Blog per onderwerp →",
    },
    proofTitle: "Bewijs",
    quoteNote: "Oorspronkelijke aanbeveling in het Engels",
    allRecommendations: "Lees alle aanbevelingen →",
    stats: [
      { value: "+42%", label: "betere conversie" },
      { value: "−90%", label: "kosten voor cloudverwerking" },
      { value: "30+", label: "analytische modellen gebouwd" },
    ],
    logosLabel: "Organisaties waarmee ik heb gewerkt",
    bookLabel: "Plan een gesprek",
    calendar: {
      namespace: "homepage-discovery-nl",
      eyebrow: "Samen praten en ontdekken",
      title: "Werk je aan iets dat je wilt laten groeien, oplossen of beter begrijpen?",
      copy: "Neem het probleem of de kans mee. In 20 minuten kunnen we het samen begrijpen, ideeën uitwisselen en kijken of ik op een nuttige manier kan bijdragen.",
      note: "20 minuten · geen voorbereide briefing nodig",
      noteDetail: "We beginnen met de businessvraag, niet met een vooraf bepaalde oplossing.",
      embedLabel: "Boek een gesprek van 20 minuten met Matteo Arellano",
    },
    emailAlt: "Liever e-mail? Schrijf naar",
    video: {
      title: "Matteo Arellano in 30 seconden",
      description:
        "Een introductie van 30 seconden over Matteo Arellano, technisch groeipartner: achtergrond, resultaten, talen en hoe je een gesprek begint.",
      src: {
        large: "/videos/matteo-arellano-intro-nl-1080.mp4",
        small: "/videos/matteo-arellano-intro-nl-720.mp4",
        poster: "/images/home/intro-poster-nl-1280.webp",
      },
      close: "Video sluiten",
      readAsText: "Lees de video als tekst",
      transcript: (n) =>
        `Werk je aan iets dat je wilt laten groeien, oplossen of beter begrijpen? Ik ben Matteo Arellano, technisch groeipartner. Ik help bedrijven nieuwe groeikansen te vinden en die om te zetten in omzet. Ik begon niet in marketing: ik begon met leren hoe bedrijven geld verdienen, in Luxemburg (EIB en EIF, 2018), Amsterdam en Mexico-Stad (Cargill, 2020), Utrecht (PIA Group, 2024) en nu internationaal (Distribusion). Bewijs boven aannames: +42% betere conversie, −90% kosten voor cloudverwerking en meer dan 30 analytische modellen gebouwd. ${n} talen, klaar voor de markten die je wilt bereiken. Nieuwe omzet, hogere conversie en gekwalificeerde vraag. Laten we praten via matteoarellano.com. Eerst het businessprobleem, daarna de tools. Het duurt 20 minuten en je hoeft geen briefing voor te bereiden.`,
    },
  },
};

export const homeEmail = email;

export const homeLanguages: { lang: HomeLang; href: string; label: string; name: string }[] = [
  { lang: "en", href: "/", label: "EN", name: "English" },
  { lang: "es", href: "/es/", label: "ES", name: "Español" },
  { lang: "nl", href: "/nl/", label: "NL", name: "Nederlands" },
];
