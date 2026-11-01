/**
 * Dutch versions of the five services, addressed with "je", in line with
 * the Dutch homepage. Figures, quotes and evidence links come from the
 * English file, so only words live here.
 */
import type { ServiceSlug, ServiceTranslation } from "./services";

export const servicesNl: Record<ServiceSlug, ServiceTranslation> = {
  /* ------------------------------------------------------------------ */
  "growth-marketing": {
    path: "/nl/diensten/growth-marketing/",
    name: "Growth marketing",
    short: "SEO, AI-zoekresultaten, advertenties en GA4, gemeten in omzet",
    tags: ["SEO", "GEO", "Google Ads", "GA4"],
    metaTitle: "Growth marketing consultant: SEO, GEO, Google Ads en GA4 | Matteo Arellano",
    metaDescription:
      "Growth marketing consultant voor SEO, generative engine optimisation (GEO), Google Ads en GA4. Ik koppel elk kanaal aan leads en omzet, niet alleen aan verkeer.",
    serviceTypes: [
      "Growth marketing",
      "Zoekmachineoptimalisatie (SEO)",
      "Generative engine optimisation (GEO)",
      "Google Ads-beheer",
      "Implementatie van Google Analytics 4",
    ],
    hero: {
      kicker: "Dienst 01 · Growth marketing",
      title: "Growth marketing die van zoekverkeer, AI-antwoorden en advertenties omzet maakt.",
      lede: "Ik help bedrijven meer gekwalificeerde vraag te winnen met SEO, generative engine optimisation (GEO), Google Ads en GA4. Elk kanaal wordt gemeten aan de leads, verkopen of omzet die het oplevert, niet alleen aan verkeer.",
    },
    statLabels: [
      "betere conversie in een digitale klantreis",
      "gepubliceerde artikelen over SEO, AI-zoeken en meting",
      "talen voor internationale SEO en campagnes",
    ],
    outcomes: [
      {
        title: "Meer gekwalificeerde vraag",
        copy: "Je pagina's verschijnen bij de zoekopdrachten en vragen van echte kopers, in Google en in AI-antwoorden.",
      },
      {
        title: "Advertentiebudget dat zich terugverdient",
        copy: "Campagnes worden beoordeeld op conversies en leadkwaliteit, zodat budget niet langer naar klikken gaat die nooit kopen.",
      },
      {
        title: "Cijfers die je kunt vertrouwen",
        copy: "GA4, Tag Manager en toestemming worden zo ingericht dat conversies, kanalen en campagnes correct worden gerapporteerd.",
      },
      {
        title: "Pagina's die converteren",
        copy: "Landingspagina's beantwoorden de vragen van de koper en maken de volgende stap duidelijk, zodat meer bezoeken aanvragen worden.",
      },
    ],
    signals: [
      "Het organische verkeer stagneert of daalt, en niemand kan precies zeggen waarom.",
      "Je concurrenten verschijnen in Google AI Overviews of in antwoorden van ChatGPT, en jij niet.",
      "De uitgaven aan Google Ads blijven stijgen, terwijl de kwaliteit van de leads gelijk blijft.",
      "GA4 en je verkoopsysteem rapporteren verschillende cijfers voor dezelfde maand.",
      "Je lanceert in een nieuw land of een nieuwe taal en hebt vanaf de eerste dag zoekvraag nodig.",
    ],
    scope: [
      {
        title: "SEO en technische SEO",
        copy: "Ik vind en verhelp wat zoekmachines belet om de belangrijkste pagina's te crawlen, te begrijpen en goed te laten ranken.",
        items: ["Technische audits", "Core Web Vitals", "Migraties en redirects", "Internationale SEO en hreflang"],
      },
      {
        title: "Zichtbaarheid in AI-zoekresultaten (GEO)",
        copy: "Ik maak je bedrijf makkelijk te begrijpen, te vertrouwen en te citeren voor AI-antwoorden, vanuit dezelfde basis als SEO.",
        items: ["Google AI Overviews en AI Mode", "ChatGPT en Perplexity", "Duidelijke feiten en bewijs", "Gestructureerde data"],
      },
      {
        title: "Betaalde acquisitie",
        copy: "Ik audit, richt in en verbeter Google Ads, zodat het budget naar zoekopdrachten gaat die klanten opleveren.",
        items: ["Google Ads-audits", "Conversietracking", "Local Services Ads", "Tests met landingspagina's"],
      },
      {
        title: "Meting en GA4",
        copy: "Ik maak je analytics betrouwbaar genoeg om budgetten op te baseren, van toestemming tot de uiteindelijke conversie.",
        items: ["GA4 en Google Tag Manager", "Consent mode", "UTM- en campagnetracking", "Rapportages in Looker Studio"],
      },
      {
        title: "Content en landingspagina's",
        copy: "Ik schrijf en herstructureer pagina's rond de vragen die kopers stellen voordat ze beslissen.",
        items: ["Zoekwoord- en vraagonderzoek", "Teksten voor landingspagina's", "Productpagina's", "Meertalige pagina's"],
      },
    ],
    approach: [
      {
        title: "De vraag doorlichten",
        copy: "Ik bekijk zoekdata, GA4, advertentieaccounts en de site zelf om te zien waar gekwalificeerde vraag verloren gaat of nooit wordt opgevangen.",
      },
      {
        title: "Oplossen wat blokkeert",
        copy: "We beginnen met de technische, meet- of contentproblemen die het grootste effect hebben op leads en omzet.",
      },
      {
        title: "Meten en opschalen",
        copy: "Elke wijziging wordt gemeten aan conversies, en de kanalen die zich terugverdienen krijgen meer budget en aandacht.",
      },
    ],
    firstDeliverable:
      "Dat is een geprioriteerde groei-audit: wat de vraag blokkeert, wat elke oplossing waard is en in welke volgorde je ze aanpakt.",
    evidenceMore: { label: "Alle artikelen per onderwerp" },
    faqs: [
      {
        q: "Wat is het verschil tussen SEO en GEO?",
        a: "SEO verbetert hoe een website rankt in de zoekresultaten. GEO, oftewel generative engine optimisation, zorgt ervoor dat AI-antwoorden in Google AI Overviews, ChatGPT en Perplexity je bedrijf vaker noemen en citeren. Volgens Google steunen de AI-functies op dezelfde kernsystemen voor ranking als Zoeken, dus technische SEO en echt nuttige content blijven voor allebei de basis.",
      },
      {
        q: "Beheer je Google Ads-campagnes?",
        a: "Ja. Ik audit, richt in en verbeter Google Ads-campagnes, inclusief Local Services Ads. De focus ligt op conversietracking en leadkwaliteit, want een goedkopere klik is alleen nuttig als er een klant uit voortkomt.",
      },
      {
        q: "Kun je onze GA4-inrichting repareren?",
        a: "Ja. Ik audit GA4 en Google Tag Manager, herstel events en conversies die niet werken en controleer of toestemming, intern verkeer en cross-domain tracking goed zijn ingesteld. Het resultaat is rapportage waar je sales- en financeteams het mee eens kunnen zijn.",
      },
      {
        q: "Met welke bedrijven werk je?",
        a: "Ik werk het best met bedrijven die al een product en enige vraag hebben, zoals webshops, marktplaatsen, SaaS-bedrijven, reisbedrijven en lokale dienstverleners. De meeste willen meer van de juiste klanten, niet meer verkeer.",
      },
      {
        q: "Kun je ook in andere talen dan het Engels werken?",
        a: "Ja. Ik werk in zeven talen, waaronder Spaans, Nederlands, Portugees en Frans. Dat helpt bij internationale SEO, meertalige landingspagina's en campagnes in nieuwe markten.",
      },
    ],
    ctaTitle: "Wil je dat meer van de juiste klanten je vinden?",
    ctaCopy:
      "Vertel me hoe klanten je vandaag vinden en waar je meer vraag wilt. In 20 minuten kunnen we zien of de grootste kans in zoekmachines, AI-antwoorden, advertenties of meting zit.",
  },

  /* ------------------------------------------------------------------ */
  "data-engineering-automation": {
    path: "/nl/diensten/data-engineering-en-automatisering/",
    name: "Data engineering & automatisering",
    short: "Big data, pipelines en automatisering die kosten en handwerk verlagen",
    tags: ["Data engineering", "Big data-analyse", "Python", "Automatisering"],
    metaTitle: "Consultant data engineering, big data-analyse en automatisering | Matteo Arellano",
    metaDescription:
      "Consultant voor data engineering en automatisering. Ik bouw datapipelines, analyseer grote datasets met Python, SQL en BigQuery en automatiseer terugkerend werk om kosten te verlagen.",
    serviceTypes: [
      "Data engineering",
      "Big data-analyse",
      "Automatisering van bedrijfsprocessen",
      "Ontwikkeling van datapipelines",
    ],
    hero: {
      kicker: "Dienst 02 · Data engineering & automatisering",
      title: "Data engineering en automatisering die kosten verlagen en beslissingen versnellen.",
      lede: "Ik bouw datapipelines, analyseer grote datasets en automatiseer terugkerend werk met Python, SQL, BigQuery en cloudtools. Het doel is eenvoudig: lagere verwerkingskosten, minder handmatige uren en cijfers waarop je team kan vertrouwen.",
    },
    statLabels: [
      "kosten voor cloudverwerking na een herontwerp van de pipeline",
      "analytische modellen gebouwd voor managementbeslissingen",
      "geschreven aanbevelingen van collega's uit data en engineering",
    ],
    outcomes: [
      {
        title: "Lagere datakosten",
        copy: "Pipelines lezen, bewaren en berekenen alleen wat het bedrijf nodig heeft, zodat de cloudrekening daalt zonder dat je detail verliest.",
      },
      {
        title: "Minder handwerk",
        copy: "Terugkerende exports, spreadsheetwerk en rapportages draaien automatisch, zodat mensen hun tijd aan beslissingen besteden.",
      },
      {
        title: "Snellere antwoorden",
        copy: "Vragen die wekenlang op de rapportage-backlog stonden, worden binnen enkele uren beantwoord met schone, gekoppelde data.",
      },
      {
        title: "Cijfers die je kunt verdedigen",
        copy: "Dubbele records, kapotte identifiers en inconsistente logica worden gevonden en hersteld voordat ze in een beslissing terechtkomen.",
      },
    ],
    signals: [
      "Je rekening voor clouddata groeit sneller dan de waarde die je uit de data haalt.",
      "Mensen besteden elke week uren aan het exporteren, opschonen en plakken van data in spreadsheets.",
      "Belangrijke vragen blijven weken liggen, omdat de data in systemen staat die niet met elkaar praten.",
      "Twee rapporten tonen verschillende cijfers, en niemand weet welk rapport klopt.",
      "Je team heeft een dataset die te groot is voor Excel en geen duidelijke manier om die te analyseren.",
    ],
    scope: [
      {
        title: "Data engineering",
        copy: "Ik ontwerp en repareer de pipelines die data uit bronsystemen naar een datawarehouse brengen waarmee je team kan werken.",
        items: ["ETL- en ELT-pipelines", "BigQuery en datawarehouses in de cloud", "Partitionering en kostenoptimalisatie", "Controles op datakwaliteit"],
      },
      {
        title: "Big data-analyse",
        copy: "Ik analyseer miljoenen transacties, events of records om te zien waar omzet wordt gemaakt, verloren gaat of blijft liggen.",
        items: ["Python en Polars", "SQL op grote schaal", "Segment- en cohortanalyse", "Oorzaakanalyse"],
      },
      {
        title: "Automatisering",
        copy: "Ik vervang repetitief handwerk door geplande workflows die elke keer dezelfde logica uitvoeren.",
        items: ["API-koppelingen", "Geplande workflows", "Geautomatiseerde rapportages", "Spreadsheets vervangen"],
      },
      {
        title: "Modellen en beslissingsondersteuning",
        copy: "Ik bouw de statistische en financiële modellen die data omzetten in een beslissing waarmee het management verder kan.",
        items: ["Prognoses en statistische modellen", "Anomaliedetectie", "Financiële en operationele modellen", "Dashboards"],
      },
    ],
    approach: [
      {
        title: "Begin bij de vraag",
        copy: "We bepalen welke beslissing of kostenpost het werk moet veranderen, zodat de technologie een bedrijfsresultaat dient.",
      },
      {
        title: "Bouw het goed",
        copy: "Ik bouw pipelines en analyses met geteste logica, gedocumenteerde stappen en controles op de data in elke fase.",
      },
      {
        title: "Draaiend overdragen",
        copy: "Je team krijgt een workflow die zelfstandig draait, met documentatie en een duidelijke eigenaar.",
      },
    ],
    firstDeliverable:
      "Dat is een korte datareview: waar vandaag tijd en geld verloren gaan, wat je eerst automatiseert en welke besparing je kunt verwachten.",
    evidenceMore: { label: "Het technische kookboek" },
    faqs: [
      {
        q: "Wat voor data engineering-werk doe je?",
        a: "Ik ontwerp en repareer datapipelines, breng data naar datawarehouses zoals BigQuery, verlaag verwerkingskosten en voeg controles op datakwaliteit toe. Ook analyseer ik grote datasets en automatiseer ik de rapportages die erop zijn gebouwd.",
      },
      {
        q: "Hoe heb je de kosten voor cloudverwerking met 90% verlaagd?",
        a: "Ik heb een workflow voor dataverwerking in de cloud opnieuw ontworpen rond efficiëntere verwerkingstechnologieën. De terugkerende verwerkingskosten daalden met ongeveer 90%.",
      },
      {
        q: "Bouw je machine learning-modellen?",
        a: "Ja, als een model het juiste antwoord is. Ik heb statistische modellen gebouwd en een model voor anomaliedetectie in financiële transacties dat in productie draaide, met data uit Hadoop en training op AWS.",
      },
      {
        q: "Kan ons team het werk zelf onderhouden?",
        a: "Ja. Elke workflow wordt gedocumenteerd, getest en overgedragen met een duidelijke eigenaar. Ik kies liever voor eenvoudige, onderhoudbare code dan voor slimme code die alleen de maker begrijpt.",
      },
    ],
    ctaTitle: "Kost data je meer tijd of geld dan nodig is?",
    ctaCopy:
      "Vertel me welke rapporten, datasets of workflows je team vertragen. In 20 minuten zien we wat je het eerst automatiseert en wat dat kan opleveren.",
  },

  /* ------------------------------------------------------------------ */
  "product-improvement": {
    path: "/nl/diensten/productverbetering/",
    name: "Productverbetering",
    short: "Vinden waar gebruikers afhaken en de oplossing samen met je team live zetten",
    tags: ["Productanalytics", "UX-onderzoek", "Experimenten", "QA"],
    metaTitle: "Consultant productverbetering: analytics, UX en experimenten | Matteo Arellano",
    metaDescription:
      "Consultant productverbetering. Met Amplitude, GA4, BigQuery en gebruikersonderzoek vind ik waar klanten afhaken, en samen met je team zet ik de oplossing live en test ik die.",
    serviceTypes: [
      "Productverbetering",
      "Productanalytics",
      "Conversieoptimalisatie (CRO)",
      "UX-onderzoek",
      "Experimenten",
    ],
    hero: {
      kicker: "Dienst 03 · Productverbetering",
      title: "Productverbetering, van de eerste klik tot een geteste oplossing die live staat.",
      lede: "Ik vind waar gebruikers afhaken tussen zoeken en betalen, bepaal wat dat kost en werk met product-, design- en engineeringteams om de oplossing live te zetten en te testen. Ik combineer data uit Amplitude, GA4 en BigQuery met sessie-opnames, klantfeedback en technische audits.",
    },
    statLabels: [
      "betere conversie in een digitale klantreis",
      "verbeterpatronen in mijn playbook voor de klantreis",
      "uitgewerkte casestudy's over productonderzoek, volledig gepubliceerd",
    ],
    outcomes: [
      {
        title: "Hogere conversie",
        copy: "De stappen waar gebruikers afhaken worden gevonden, verklaard en opgelost, zodat meer van je bestaande vraag omzet wordt.",
      },
      {
        title: "Een backlog gerangschikt op waarde",
        copy: "Elke verbetering heeft een geschatte impact op de omzet, zodat product- en engineeringtijd gaat naar wat zich terugverdient.",
      },
      {
        title: "Bewezen wijzigingen",
        copy: "Elke oplossing gaat live met een hypothese, een primaire metric en guardrails, zodat je weet of ze heeft gewerkt.",
      },
      {
        title: "Minder bugs in productie",
        copy: "Tracking, QA en cross-browsertests vangen kapotte klantreizen op voordat klanten ze tegenkomen.",
      },
    ],
    signals: [
      "Veel gebruikers beginnen aan een zoekopdracht, aanmelding of checkout, en te weinig maken die af.",
      "De roadmap wordt op basis van meningen bepaald, omdat niemand de kansen heeft gekwantificeerd.",
      "Je analytics laten zien waar mensen vertrekken, maar niet waarom ze vertrekken.",
      "Er ging een release live, de conversie daalde en het team vindt de oorzaak niet.",
      "Product-, engineering- en commerciële teams hebben één persoon nodig die met iedereen kan praten.",
    ],
    scope: [
      {
        title: "Productanalytics",
        copy: "Ik kwantificeer waar gebruikers afhaken en wat elke stap in de klantreis waard is.",
        items: ["Amplitude", "GA4 en BigQuery", "Funnel- en cohortanalyse", "Trackingplannen"],
      },
      {
        title: "Onderzoek en UX",
        copy: "Ik vind het gedrag en de vragen achter de cijfers en vertaal die naar concrete ontwerpwijzigingen.",
        items: ["Sessie-opnames", "Interviews met klanten en support", "Benchmarks van concurrenten", "Usability-reviews"],
      },
      {
        title: "Experimenten",
        copy: "Ik ontwerp tests die een zakelijke vraag beantwoorden en de omzet beschermen terwijl ze lopen.",
        items: ["Opzet van A/B-tests", "Hypotheses en guardrails", "Steekproefgrootte bepalen", "Analyse van resultaten"],
      },
      {
        title: "Oplevering met engineering",
        copy: "Ik schrijf de specificatie, werk tot de release samen met engineers en controleer of de wijziging zich gedraagt zoals bedoeld.",
        items: ["Specificaties en tickets", "QA en cross-browsertests", "Feature-releases", "Meting na de lancering"],
      },
    ],
    approach: [
      {
        title: "Vind het lek",
        copy: "Ik combineer funneldata, opnames, inzichten van support en technische audits om te zien waar en waarom klanten vertrekken.",
      },
      {
        title: "Kwantificeer en prioriteer",
        copy: "Elke bevinding krijgt een schatting van omzet of marge en wordt gerangschikt op impact, zekerheid en inspanning.",
      },
      {
        title: "Zet live en bewijs het",
        copy: "We specificeren de wijziging, zetten die samen met engineering live en meten haar af aan een duidelijk succescriterium.",
      },
    ],
    firstDeliverable:
      "Dat is een kansenkaart: waar waarde weglekt in je klantreis, het bewijs achter elke bevinding en een geprioriteerde backlog.",
    evidenceMore: { label: "Alle casestudy's over productonderzoek" },
    tools: ["Amplitude", "GA4", "BigQuery", "Sessie-opnames", "BrowserStack", "SQL", "Python"],
    faqs: [
      {
        q: "Wat houdt een traject voor productverbetering in?",
        a: "Meestal gaat het om een kansenkaart, een bewijsdossier, een geprioriteerde backlog, opzetten voor experimenten en een trackingplan. Als dat nodig is, blijf ik ook tot de release betrokken om met engineers samen te werken en het resultaat te meten.",
      },
      {
        q: "Werk je met Amplitude en GA4?",
        a: "Ja. Ik gebruik Amplitude, GA4 en BigQuery om funnels en cohorten te meten, en ik schrijf trackingplannen als de events die je nodig hebt ontbreken.",
      },
      {
        q: "Vervang je een productmanager?",
        a: "Nee. Ik werk naast productmanagers, designers en engineers. Als een team capaciteit mist, kan ik eigenaar zijn van één specifiek probleem, van diagnose tot release.",
      },
      {
        q: "Voor welke producten is dit bedoeld?",
        a: "Het past bij elk product met een zoekopdracht, een keuze en een checkout, zoals marktplaatsen, webshops, SaaS en boekingsplatforms. Mijn meeste ervaring ligt in travel tech en vervoer over land.",
      },
    ],
    ctaTitle: "Haken gebruikers ergens af zonder dat je weet waarom?",
    ctaCopy:
      "Vertel me waar je klantreis mensen verliest. In 20 minuten kunnen we de eerste hypotheses opstellen en bepalen welk bewijs ze zou bevestigen.",
  },

  /* ------------------------------------------------------------------ */
  "business-development": {
    path: "/nl/diensten/business-development-en-technische-sales/",
    name: "Business development & technische sales",
    short: "Nieuwe markten, partnerships en deals die technische kennis vragen",
    tags: ["Marktintroductie", "Partnerships", "Prospecting", "Technische sales"],
    metaTitle: "Consultant business development en technische sales | Matteo Arellano",
    metaDescription:
      "Consultant voor business development en technische sales. Ik help bedrijven nieuwe markten te betreden, partners te vinden, te prospecten en deals te sluiten die technische kennis vragen.",
    serviceTypes: [
      "Business development",
      "Technische sales",
      "Marktintroductie",
      "Ontwikkeling van partnerships",
      "Prospecting",
    ],
    hero: {
      kicker: "Dienst 04 · Business development & technische sales",
      title: "Business development en technische sales voor nieuwe markten, partners en deals.",
      lede: "Ik help bedrijven nieuwe markten te betreden, gesprekken met partners te openen en deals te sluiten waarvoor iemand nodig is die zowel het product als de koper begrijpt. Ik combineer marktonderzoek, prospecting en outreach met technische salesondersteuning over integraties, data en betalingen.",
    },
    statLabels: [
      "werktalen, waaronder Spaans, Portugees, Nederlands en Frans",
      "landen waar ik heb gewoond, in Europa en Latijns-Amerika",
      "winnaar van Rotterdam100 met een businesscase voor de Next Economy",
    ],
    outcomes: [
      {
        title: "Een duidelijke markt om op te richten",
        copy: "Je weet welke markt, welk segment en welke partners je het eerst benadert, en waarom zij zouden luisteren.",
      },
      {
        title: "Een gekwalificeerde pijplijn",
        copy: "Outreach gaat naar bedrijven met een echt probleem en een reden om te kopen, niet naar een lange lijst met namen.",
      },
      {
        title: "Partnerships die deuren openen",
        copy: "Partners brengen distributie, markttoegang of een sterker aanbod, met een pilot die de waarde bewijst.",
      },
      {
        title: "Deals die rondkomen",
        copy: "Technische vragen over integraties, data en betalingen worden tijdens het verkoopproces met vertrouwen beantwoord.",
      },
    ],
    signals: [
      "Je wilt een nieuw land betreden en weet niet welke klanten of partners je het eerst moet benaderen.",
      "Je outreach levert afspraken op, maar die afspraken leiden zelden tot pijplijn.",
      "Kopers stellen technische vragen die je salesteam tijdens het gesprek niet kan beantwoorden.",
      "Een partnership zou een markt kunnen openen, maar niemand heeft tijd om het voorstel uit te werken.",
      "Je verkoopt in Latijns-Amerika of Europa en hebt iemand nodig die de taal spreekt en de markt kent.",
    ],
    scope: [
      {
        title: "Marktintroductie",
        copy: "Ik breng de markt in kaart, prioriteer segmenten en bepaal welke lokale eisen bepalen of klanten kunnen kopen.",
        items: ["Markt- en segmentanalyse", "Ideaal klantprofiel", "Lokale betaal- en taalbehoeften", "Introductieplan"],
      },
      {
        title: "Prospecting en outreach",
        copy: "Ik zoek de juiste bedrijven, vind de mensen die beslissen en schrijf outreach die over hun probleem gaat.",
        items: ["Prospectonderzoek", "Dataverrijking", "Outreach-sequenties", "CRM en pijplijn"],
      },
      {
        title: "Partnerships",
        copy: "Ik vind partners met een echte reden om met je samen te werken en maak van het idee een voorstel en een pilot.",
        items: ["Partners in kaart brengen", "Partnershipvoorstellen", "Opzet van pilots", "Onboarding van partners"],
      },
      {
        title: "Technische sales",
        copy: "Ik schuif aan bij discovery calls en demo's om te vertalen tussen het probleem van de koper en wat je product kan.",
        items: ["Discovery calls", "Oplossingsontwerp", "Vragen over integraties en betalingen", "Offertes en antwoorden op RFP's"],
      },
    ],
    approach: [
      {
        title: "Praat met de markt",
        copy: "Ik spreek prospects en partners om te leren waar ze mee worstelen, wat ze waarderen en hoe ze kopen.",
      },
      {
        title: "Kies de sterkste invalshoek",
        copy: "We combineren die gesprekken met marktdata om het segment, het aanbod en de partners met het meeste potentieel te kiezen.",
      },
      {
        title: "Bouw de weg naar omzet",
        copy: "De kans wordt gerichte outreach, afspraken, een pilot of een partnershipvoorstel met een duidelijke volgende stap.",
      },
    ],
    firstDeliverable:
      "Dat is een markt- en pijplijnbrief: de segmenten om op te richten, de eerste bedrijven om te benaderen en de boodschap voor elk van hen.",
    evidenceMore: { href: "/nl/over-mij/", label: "Mijn verhaal" },
    tools: ["Prospectonderzoek", "Marktanalyse", "CRM en pijplijn", "Dataverrijking", "Commerciële analyse", "Python", "SQL"],
    faqs: [
      {
        q: "Wat houdt ondersteuning bij business development in?",
        a: "Dat kan gaan om markt- en segmentonderzoek, prospectlijsten, outreach, het in kaart brengen van partners, partnershipvoorstellen en de opzet van pilots. De invulling hangt af van waar je pijplijn het zwakst is.",
      },
      {
        q: "Wat is technische salesondersteuning?",
        a: "Technische salesondersteuning betekent dat ik aanschuif bij discovery calls, demo's en offertes wanneer kopers gedetailleerde vragen stellen over integraties, data of betalingen. Ik vertaal tussen het probleem van de koper en wat je product kan, zodat de verkoop niet vastloopt.",
      },
      {
        q: "Welke markten ken je het best?",
        a: "Ik ken Latijns-Amerika en Europa het best, vooral Mexico, Brazilië, Colombia, Nederland, Spanje en Luxemburg. Daarnaast heb ik gewerkt aan betaalacceptatie in het Midden-Oosten en Noord-Afrika.",
      },
      {
        q: "Kun je ook in andere talen dan het Engels verkopen?",
        a: "Ja. Ik werk in zeven talen, waaronder Spaans, Catalaans, Nederlands, Portugees en Frans. Dat helpt in markten waar kopers verwachten dat je hen in hun eigen taal aanspreekt.",
      },
    ],
    ctaTitle: "Op zoek naar een nieuwe markt, partner of deal?",
    ctaCopy:
      "Vertel me welke markt of klant je wilt bereiken. In 20 minuten toetsen we de kans en bepalen we de eerste concrete stap.",
  },

  /* ------------------------------------------------------------------ */
  "payment-solutions": {
    path: "/nl/diensten/betaaloplossingen/",
    name: "Betaaloplossingen",
    short: "Betaalacceptatie, PSP-integraties en lokale betaalmethoden",
    tags: ["Acceptatie", "PSP's", "Lokale methoden", "3DS"],
    metaTitle: "Consultant betaaloplossingen: acceptatie, PSP's en lokale methoden | Matteo Arellano",
    metaDescription:
      "Consultant voor betaaloplossingen: betaalacceptatie, PSP-integraties, routing, 3DS en lokale betaalmethoden in Latijns-Amerika, het Midden-Oosten en Europa.",
    serviceTypes: [
      "Advies over betaaloplossingen",
      "Optimalisatie van betaalacceptatie",
      "PSP-integratie",
      "Lokale betaalmethoden",
    ],
    hero: {
      kicker: "Dienst 05 · Betaaloplossingen",
      title: "Betaaloplossingen waarmee meer van je klanten hun betaling afronden.",
      lede: "Ik onderzoek betaalstromen die slechter presteren dan ze zouden moeten en ontwerp betaalinrichtingen met PSP's, lokale betaalmethoden, acquiring, routing en 3DS. Mijn werk bestrijkt Latijns-Amerika, het Midden-Oosten en Noord-Afrika, en Europa.",
    },
    statLabels: [
      "kaartgoedkeuring, van ongeveer 57% naar 75%",
      "van de verlopen betalingen herleid tot één timingprobleem",
      "van de vermoedelijke mislukkingen correct geherclassificeerd",
    ],
    outcomes: [
      {
        title: "Hogere betaalacceptatie",
        copy: "Meer legitieme klanten ronden hun betaling af, omdat weigeringen, 3DS-frictie en fraudregels goed zijn afgesteld.",
      },
      {
        title: "Betaalmethoden die bij de markt passen",
        copy: "Elke markt biedt de kaarten, wallets en lokale methoden die klanten daar echt gebruiken.",
      },
      {
        title: "Integraties die standhouden",
        copy: "Betaalstatussen, webhooks en routing sluiten aan op je boekings- of orderlogica, zodat betaalde orders niet mislukken.",
      },
      {
        title: "Helder inzicht",
        copy: "Je ziet wat er misgaat, waar en waarom, van checkout tot levering en reconciliatie.",
      },
    ],
    signals: [
      "Goedkeuringspercentages dalen, of één markt of issuer presteert veel slechter dan de rest.",
      "Je lanceert in een nieuw land en hebt lokale betaalmethoden of lokale acquiring nodig.",
      "Betalingen verlopen, terugbetalingen nemen toe of betaalde orders mislukken, en niemand kan uitleggen waarom.",
      "Je moet een betaalprovider kiezen of toevoegen en wilt een onafhankelijke blik.",
      "Het dashboard van je PSP verklaart niet wat je klanten werkelijk hebben meegemaakt.",
    ],
    scope: [
      {
        title: "Acceptatie en conversie",
        copy: "Ik vergroot het aandeel legitieme klanten dat de betaling afrondt.",
        items: ["Autorisatie- en goedkeuringspercentages", "3DS en authenticatie", "Frictie door fraudregels", "Gedrag van issuers en acquirers"],
      },
      {
        title: "Integraties en routing",
        copy: "Ik ontwerp en debug het technische pad tussen checkout, betaalproviders en de order.",
        items: ["PSP- en API-integraties", "Routing- en valutalogica", "Configuratie van wallets", "Betaalstatussen en webhooks"],
      },
      {
        title: "Lokale en grensoverschrijdende betalingen",
        copy: "Ik richt betaalinrichtingen in op de manier waarop klanten in elke markt echt betalen.",
        items: ["Lokale betaalmethoden", "Lokale en internationale acquiring", "PSP-inrichting per markt", "Valuta-ontwerp"],
      },
      {
        title: "Observability en operations",
        copy: "Ik creëer het inzicht dat nodig is om te weten wat er misgaat, waar en waarom.",
        items: ["Monitoring van betalingen", "Logs en transactietracing", "Terugbetalingen en verlopen betalingen", "Reconciliatie"],
      },
    ],
    approach: [
      {
        title: "Begin bij het symptoom",
        copy: "We starten met het zakelijke probleem, zoals dalende goedkeuring, mislukte orders of een marktlancering.",
      },
      {
        title: "Volg het door de hele keten",
        copy: "Ik volg het probleem via checkout, PSP-responses, acquiring, 3DS, logs en levering tot de oorzaak duidelijk is.",
      },
      {
        title: "Oplossen en bewaken",
        copy: "We voeren de wijziging door met engineering en payment operations en bewaken haar daarna, zodat het probleem opgelost blijft.",
      },
    ],
    firstDeliverable:
      "Dat is een betaaldiagnose: de grondoorzaak, de gekwantificeerde impact, de aanbevolen wijzigingen en een plan om ze te meten.",
    evidenceMore: { label: "Alle betaalcases en gidsen" },
    faqs: [
      {
        q: "Hoe verbeter je de betaalacceptatie?",
        a: "Ik kijk naar de volledige betaalstroom in plaats van een weigering van de PSP als eindantwoord te zien. Ik verbind issuer-responses, acquiring, routing, 3DS, fraudregels, valuta en gedrag in de checkout om de echte oorzaak te vinden, en daarna kwantificeer ik de oplossing.",
      },
      {
        q: "Met welke betaalproviders heb je gewerkt?",
        a: "Ik heb praktijkervaring met Adyen, dLocal, Checkout.com, Mercado Pago en PayPal, en met lokale methoden zoals Pix, OXXO, Apple Pay en Google Pay. Het gaat om praktijkervaring, niet om een dienstverband bij of partnerschap met deze providers.",
      },
      {
        q: "Kun je ons helpen een betaalprovider te kiezen?",
        a: "Ja. Ik vergelijk providers op marktdekking, lokale acquiring, betaalmethoden, kosten en integratie-inspanning voor jouw specifieke markten. Mijn vergelijking van Adyen, Checkout.com en dLocal laat zien hoe ik die beslissing aanpak.",
      },
      {
        q: "Welke markten bestrijk je?",
        a: "Ik heb het meest gewerkt in Latijns-Amerika, vooral in Mexico, Brazilië en Colombia, en aan acceptatie en acquiring in het Midden-Oosten en Noord-Afrika. Daarnaast werk ik aan grensoverschrijdende betalingen in Europa.",
      },
    ],
    ctaTitle: "Kost een betaalprobleem je klanten?",
    ctaCopy:
      "Vertel me wat je ziet: dalende goedkeuring, mislukte orders of een marktlancering. In 20 minuten bepalen we waar je het eerst moet zoeken.",
  },
};
