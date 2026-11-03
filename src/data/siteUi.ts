/**
 * Words used by the shared site header and footer, per language.
 * Page content lives in its own data file (homeContent, services, …).
 */

export type Lang = "en" | "es" | "nl";

export const langs: Lang[] = ["en", "es", "nl"];

export const homePath: Record<Lang, string> = { en: "/", es: "/es/", nl: "/nl/" };
export const aboutPath: Record<Lang, string> = { en: "/about/", es: "/es/sobre-mi/", nl: "/nl/over-mij/" };
export const servicesHubPath: Record<Lang, string> = { en: "/services/", es: "/es/servicios/", nl: "/nl/diensten/" };
export const recommendationsPath: Record<Lang, string> = {
  en: "/achievements/",
  es: "/es/recomendaciones/",
  nl: "/nl/aanbevelingen/",
};
/** Where "Recommendations" links point in each language. */
export const recommendationsLink: Record<Lang, string> = {
  en: "/achievements/#recommendations",
  es: "/es/recomendaciones/",
  nl: "/nl/aanbevelingen/",
};

export const languageLinks: { lang: Lang; label: string }[] = [
  { lang: "en", label: "EN" },
  { lang: "es", label: "ES" },
  { lang: "nl", label: "NL" },
];

type SiteUi = {
  brandTag: string;
  brandAria: string;
  services: string;
  servicesMenu: string;
  allServices: string;
  insights: string;
  recommendations: string;
  about: string;
  primaryNav: string;
  mobileNav: string;
  openMenu: string;
  language: string;
  languageSelector: string;
  viewIn: (lang: Lang) => string;
  talk: string;
  footer: {
    about: string;
    email: string;
    notes: string;
    allNotes: string;
    explore: string;
    exploreLabel: string;
    cybersecurity: string;
    extensions: string;
    lab: string;
    privacy: string;
    motto: string;
  };
};

export const siteUi: Record<Lang, SiteUi> = {
  en: {
    brandTag: "Technical Growth Partner",
    brandAria: "Matteo Arellano homepage",
    services: "Services",
    servicesMenu: "Services submenu",
    allServices: "All services →",
    insights: "Insights",
    recommendations: "Recommendations",
    about: "About",
    primaryNav: "Primary navigation",
    mobileNav: "Mobile navigation",
    openMenu: "Open navigation menu",
    language: "Language",
    languageSelector: "Language selector",
    viewIn: (lang) => `View this page in ${{ en: "English", es: "Spanish", nl: "Dutch" }[lang]}`,
    talk: "Let's talk",
    footer: {
      about:
        "Technical Growth Partner working across growth marketing, data engineering, product improvement, business development and payments.",
      email: "Email",
      notes: "Field Notes",
      allNotes: "View all Field Notes →",
      explore: "Explore",
      exploreLabel: "Footer navigation",
      cybersecurity: "Cybersecurity",
      extensions: "Chrome extensions",
      lab: "Lab & experiments",
      privacy: "Privacy",
      motto: "Business problems first. Tools second.",
    },
  },
  es: {
    brandTag: "Socio técnico de crecimiento",
    brandAria: "Página de inicio de Matteo Arellano",
    services: "Servicios",
    servicesMenu: "Submenú de servicios",
    allServices: "Todos los servicios →",
    insights: "Artículos",
    recommendations: "Recomendaciones",
    about: "Sobre mí",
    primaryNav: "Navegación principal",
    mobileNav: "Navegación móvil",
    openMenu: "Abrir el menú de navegación",
    language: "Idioma",
    languageSelector: "Selector de idioma",
    viewIn: (lang) => `Ver esta página en ${{ en: "inglés", es: "español", nl: "neerlandés" }[lang]}`,
    talk: "Hablemos",
    footer: {
      about:
        "Socio técnico de crecimiento: growth marketing, ingeniería de datos, mejora de producto, desarrollo de negocio y pagos.",
      email: "Email",
      notes: "Notas de campo",
      allNotes: "Ver todas las notas de campo →",
      explore: "Explorar",
      exploreLabel: "Navegación del pie de página",
      cybersecurity: "Ciberseguridad",
      extensions: "Extensiones de Chrome",
      lab: "Laboratorio y experimentos",
      privacy: "Privacidad",
      motto: "Primero el problema de negocio. Después, las herramientas.",
    },
  },
  nl: {
    brandTag: "Technisch groeipartner",
    brandAria: "Homepage van Matteo Arellano",
    services: "Diensten",
    servicesMenu: "Submenu diensten",
    allServices: "Alle diensten →",
    insights: "Inzichten",
    recommendations: "Aanbevelingen",
    about: "Over mij",
    primaryNav: "Hoofdnavigatie",
    mobileNav: "Mobiele navigatie",
    openMenu: "Navigatiemenu openen",
    language: "Taal",
    languageSelector: "Taalkeuze",
    viewIn: (lang) => `Bekijk deze pagina in het ${{ en: "Engels", es: "Spaans", nl: "Nederlands" }[lang]}`,
    talk: "Laten we praten",
    footer: {
      about:
        "Technisch groeipartner voor growth marketing, data engineering, productverbetering, business development en betalingen.",
      email: "E-mail",
      notes: "Field Notes",
      allNotes: "Bekijk alle Field Notes →",
      explore: "Ontdek",
      exploreLabel: "Footernavigatie",
      cybersecurity: "Cybersecurity",
      extensions: "Chrome-extensies",
      lab: "Lab & experimenten",
      privacy: "Privacy",
      motto: "Eerst het businessprobleem. Daarna de tools.",
    },
  },
};

/** hreflang links for a page that exists in all three languages. */
export function hreflangLinks(paths: Record<Lang, string>, site = "https://matteoarellano.com") {
  return [
    ...langs.map((lang) => ({ hreflang: lang, href: `${site}${paths[lang]}` })),
    { hreflang: "x-default", href: `${site}${paths.en}` },
  ];
}
