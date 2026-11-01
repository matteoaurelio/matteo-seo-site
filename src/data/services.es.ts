/**
 * Spanish versions of the five services. Neutral Spanish, addressed with
 * "tú", in line with the Spanish homepage. Figures, quotes and evidence
 * links come from the English file, so only words live here.
 */
import type { ServiceSlug, ServiceTranslation } from "./services";

export const servicesEs: Record<ServiceSlug, ServiceTranslation> = {
  /* ------------------------------------------------------------------ */
  "growth-marketing": {
    path: "/es/servicios/growth-marketing/",
    name: "Growth marketing",
    short: "SEO, búsqueda con IA, anuncios y GA4, medidos en ingresos",
    tags: ["SEO", "GEO", "Google Ads", "GA4"],
    metaTitle: "Consultor de growth marketing: SEO, GEO, Google Ads y GA4 | Matteo Arellano",
    metaDescription:
      "Consultor de growth marketing para SEO, optimización para motores generativos (GEO), Google Ads y GA4. Conecto cada canal con leads e ingresos, no solo con tráfico.",
    serviceTypes: [
      "Growth marketing",
      "Posicionamiento en buscadores (SEO)",
      "Optimización para motores generativos (GEO)",
      "Gestión de Google Ads",
      "Implementación de Google Analytics 4",
    ],
    hero: {
      kicker: "Servicio 01 · Growth marketing",
      title: "Growth marketing que convierte la búsqueda, las respuestas de IA y los anuncios en ingresos.",
      lede: "Ayudo a empresas a captar más demanda cualificada con SEO, optimización para motores generativos (GEO), Google Ads y GA4. Cada canal se mide por los leads, las ventas o los ingresos que aporta, no solo por el tráfico.",
    },
    statLabels: [
      "de mejora de la conversión en un recorrido digital de cliente",
      "artículos publicados sobre SEO, búsqueda con IA y medición",
      "idiomas para SEO internacional y campañas",
    ],
    outcomes: [
      {
        title: "Más demanda cualificada",
        copy: "Tus páginas aparecen en las búsquedas y preguntas que hacen los compradores reales, tanto en Google como en las respuestas de IA.",
      },
      {
        title: "Inversión publicitaria que se recupera",
        copy: "Las campañas se evalúan por conversiones y calidad de los leads, así que el presupuesto deja de ir a clics que nunca compran.",
      },
      {
        title: "Datos en los que puedes confiar",
        copy: "GA4, Tag Manager y el consentimiento se configuran para que las conversiones, los canales y las campañas se registren correctamente.",
      },
      {
        title: "Páginas que convierten",
        copy: "Las landing pages responden a las preguntas del comprador y dejan claro el siguiente paso, así que más visitas se convierten en solicitudes.",
      },
    ],
    signals: [
      "El tráfico orgánico se ha estancado o ha caído, y nadie sabe explicar exactamente por qué.",
      "Tus competidores aparecen en las AI Overviews de Google o en las respuestas de ChatGPT, y tú no.",
      "La inversión en Google Ads no deja de subir, pero la calidad de los leads sigue igual.",
      "GA4 y tu sistema de ventas dan cifras distintas para el mismo mes.",
      "Vas a lanzarte en un nuevo país o idioma y necesitas demanda de búsqueda desde el primer día.",
    ],
    scope: [
      {
        title: "SEO y SEO técnico",
        copy: "Encuentro y corrijo lo que impide a los buscadores rastrear, entender y posicionar las páginas que más importan.",
        items: ["Auditorías técnicas", "Core Web Vitals", "Migraciones y redirecciones", "SEO internacional y hreflang"],
      },
      {
        title: "Visibilidad en búsqueda con IA (GEO)",
        copy: "Hago que tu negocio sea fácil de entender, de creer y de citar para las respuestas de IA, partiendo de las mismas bases que el SEO.",
        items: ["AI Overviews y AI Mode de Google", "ChatGPT y Perplexity", "Datos claros y evidencias", "Datos estructurados"],
      },
      {
        title: "Adquisición de pago",
        copy: "Audito, configuro y mejoro Google Ads para que el presupuesto vaya a las búsquedas que se convierten en clientes.",
        items: ["Auditorías de Google Ads", "Seguimiento de conversiones", "Local Services Ads", "Pruebas de landing pages"],
      },
      {
        title: "Medición y GA4",
        copy: "Hago que tu analítica sea lo bastante fiable para decidir presupuestos, desde el consentimiento hasta la conversión final.",
        items: ["GA4 y Google Tag Manager", "Modo de consentimiento", "Seguimiento de UTM y campañas", "Informes en Looker Studio"],
      },
      {
        title: "Contenido y landing pages",
        copy: "Escribo y reorganizo páginas en torno a las preguntas que se hacen los compradores antes de decidir.",
        items: ["Investigación de palabras clave y demanda", "Textos para landing pages", "Páginas de producto", "Páginas multilingües"],
      },
    ],
    approach: [
      {
        title: "Auditar la demanda",
        copy: "Reviso los datos de búsqueda, GA4, las cuentas de anuncios y el propio sitio para ver dónde se pierde la demanda cualificada o dónde nunca se capta.",
      },
      {
        title: "Corregir lo que la bloquea",
        copy: "Empezamos por los problemas técnicos, de medición o de contenido que más afectan a los leads y a los ingresos.",
      },
      {
        title: "Medir y escalar",
        copy: "Cada cambio se mide por las conversiones, y los canales que se rentabilizan reciben más presupuesto y atención.",
      },
    ],
    firstDeliverable:
      "Es una auditoría de crecimiento priorizada: qué bloquea la demanda, cuánto vale cada corrección y en qué orden hacerlas.",
    evidenceMore: { label: "Todos los artículos por tema" },
    faqs: [
      {
        q: "¿Cuál es la diferencia entre SEO y GEO?",
        a: "El SEO mejora la posición de un sitio web en los resultados de búsqueda. El GEO, u optimización para motores generativos, aumenta la frecuencia con la que las respuestas de IA de Google AI Overviews, ChatGPT y Perplexity mencionan y citan tu negocio. Google indica que sus funciones de IA se basan en los mismos sistemas de clasificación que la Búsqueda, así que el SEO técnico y el contenido realmente útil siguen siendo la base de ambos.",
      },
      {
        q: "¿Gestionas campañas de Google Ads?",
        a: "Sí. Audito, configuro y mejoro campañas de Google Ads, incluidas las Local Services Ads. Me centro en el seguimiento de conversiones y en la calidad de los leads, porque un clic más barato solo sirve si se convierte en cliente.",
      },
      {
        q: "¿Puedes arreglar nuestra configuración de GA4?",
        a: "Sí. Audito GA4 y Google Tag Manager, reparo eventos y conversiones que no funcionan y compruebo que el consentimiento, el tráfico interno y el seguimiento entre dominios estén bien configurados. El resultado son informes con los que tus equipos de ventas y finanzas pueden estar de acuerdo.",
      },
      {
        q: "¿Con qué empresas trabajas?",
        a: "Trabajo mejor con empresas que ya tienen un producto y algo de demanda, como tiendas online, marketplaces, empresas SaaS, de viajes y de servicios locales. La mayoría quiere más clientes adecuados, no más tráfico.",
      },
      {
        q: "¿Puedes trabajar en otros idiomas además del inglés?",
        a: "Sí. Trabajo en siete idiomas, entre ellos español, neerlandés, portugués y francés, lo que ayuda en el SEO internacional, en las landing pages multilingües y en las campañas para nuevos mercados.",
      },
    ],
    ctaTitle: "¿Quieres que te encuentren más clientes adecuados?",
    ctaCopy:
      "Cuéntame cómo te encuentran hoy tus clientes y dónde quieres más demanda. En 20 minutos podemos ver si la mayor oportunidad está en la búsqueda, en las respuestas de IA, en los anuncios o en la medición.",
  },

  /* ------------------------------------------------------------------ */
  "data-engineering-automation": {
    path: "/es/servicios/ingenieria-de-datos-y-automatizacion/",
    name: "Ingeniería de datos y automatización",
    short: "Big data, pipelines y automatización que reducen costes y trabajo manual",
    tags: ["Ingeniería de datos", "Análisis de big data", "Python", "Automatización"],
    metaTitle: "Consultor de ingeniería de datos, big data y automatización | Matteo Arellano",
    metaDescription:
      "Consultor de ingeniería de datos y automatización. Construyo pipelines, analizo grandes volúmenes de datos con Python, SQL y BigQuery y automatizo tareas recurrentes para reducir costes.",
    serviceTypes: [
      "Ingeniería de datos",
      "Análisis de big data",
      "Automatización de procesos de negocio",
      "Desarrollo de pipelines de datos",
    ],
    hero: {
      kicker: "Servicio 02 · Ingeniería de datos y automatización",
      title: "Ingeniería de datos y automatización que reducen costes y aceleran las decisiones.",
      lede: "Construyo pipelines de datos, analizo grandes volúmenes de datos y automatizo tareas recurrentes con Python, SQL, BigQuery y herramientas en la nube. El objetivo es sencillo: menos coste de procesamiento, menos horas manuales y cifras en las que tu equipo pueda confiar.",
    },
    statLabels: [
      "de coste de procesamiento en la nube tras rediseñar un pipeline",
      "modelos analíticos creados para decisiones de dirección",
      "recomendaciones escritas por colegas de datos e ingeniería",
    ],
    outcomes: [
      {
        title: "Menores costes de datos",
        copy: "Los pipelines leen, almacenan y calculan solo lo que el negocio necesita, así que la factura de la nube baja sin perder detalle.",
      },
      {
        title: "Menos horas manuales",
        copy: "Las exportaciones, el trabajo en hojas de cálculo y los informes recurrentes se ejecutan solos, y el equipo dedica su tiempo a decidir.",
      },
      {
        title: "Respuestas más rápidas",
        copy: "Las preguntas que llevaban semanas en la cola de informes se responden en horas con datos limpios y conectados.",
      },
      {
        title: "Cifras que puedes defender",
        copy: "Los duplicados, los identificadores rotos y la lógica incoherente se detectan y se corrigen antes de llegar a una decisión.",
      },
    ],
    signals: [
      "Tu factura de datos en la nube crece más rápido que el valor que obtienes de ellos.",
      "Hay personas que pasan horas cada semana exportando, limpiando y pegando datos en hojas de cálculo.",
      "Las preguntas importantes esperan semanas porque los datos están en sistemas que no se comunican entre sí.",
      "Dos informes muestran cifras distintas y nadie sabe cuál es la correcta.",
      "Tu equipo tiene un conjunto de datos demasiado grande para Excel y ninguna forma clara de analizarlo.",
    ],
    scope: [
      {
        title: "Ingeniería de datos",
        copy: "Diseño y reparo los pipelines que llevan los datos desde los sistemas de origen hasta un data warehouse que tu equipo pueda usar.",
        items: ["Pipelines ETL y ELT", "BigQuery y data warehouses en la nube", "Particionado y optimización de costes", "Controles de calidad de datos"],
      },
      {
        title: "Análisis de big data",
        copy: "Analizo millones de transacciones, eventos o registros para ver dónde se generan ingresos, dónde se pierden y dónde se dejan de ganar.",
        items: ["Python y Polars", "SQL a gran escala", "Análisis de segmentos y cohortes", "Análisis de causa raíz"],
      },
      {
        title: "Automatización",
        copy: "Sustituyo el trabajo manual repetitivo por flujos programados que aplican siempre la misma lógica.",
        items: ["Integraciones por API", "Flujos programados", "Informes automatizados", "Sustitución de hojas de cálculo"],
      },
      {
        title: "Modelos y apoyo a la decisión",
        copy: "Construyo los modelos estadísticos y financieros que convierten los datos en una decisión que la dirección puede tomar.",
        items: ["Previsiones y modelos estadísticos", "Detección de anomalías", "Modelos financieros y operativos", "Dashboards"],
      },
    ],
    approach: [
      {
        title: "Empezar por la pregunta",
        copy: "Definimos la decisión o el coste que el trabajo debe cambiar, para que la tecnología sirva a un resultado de negocio.",
      },
      {
        title: "Construirlo bien",
        copy: "Construyo pipelines y análisis con lógica probada, pasos documentados y controles sobre los datos en cada etapa.",
      },
      {
        title: "Entregarlo funcionando",
        copy: "Tu equipo recibe un flujo que funciona solo, con documentación y un responsable claro.",
      },
    ],
    firstDeliverable:
      "Es una revisión breve de tus datos: dónde se pierden hoy tiempo y dinero, qué automatizar primero y el ahorro esperado.",
    evidenceMore: { label: "El recetario técnico" },
    faqs: [
      {
        q: "¿Qué tipo de trabajo de ingeniería de datos haces?",
        a: "Diseño y corrijo pipelines de datos, llevo datos a data warehouses como BigQuery, reduzco el coste de procesamiento y añado controles de calidad. También analizo grandes volúmenes de datos y automatizo los informes que se construyen sobre ellos.",
      },
      {
        q: "¿Cómo redujiste un 90% el coste de procesamiento en la nube?",
        a: "Rediseñé un flujo de procesamiento de datos en la nube en torno a tecnologías de procesamiento más eficientes. Su coste recurrente de procesamiento bajó aproximadamente un 90%.",
      },
      {
        q: "¿Creas modelos de machine learning?",
        a: "Sí, cuando un modelo es la respuesta adecuada. He creado modelos estadísticos y un modelo de detección de anomalías para transacciones financieras que funcionó en producción, con datos de Hadoop y entrenamiento en AWS.",
      },
      {
        q: "¿Podrá nuestro equipo mantener el trabajo?",
        a: "Sí. Cada flujo se documenta, se prueba y se entrega con un responsable claro. Prefiero código sencillo y fácil de mantener a código ingenioso que solo entiende quien lo escribió.",
      },
    ],
    ctaTitle: "¿Tus datos te cuestan más tiempo o dinero del que deberían?",
    ctaCopy:
      "Cuéntame qué informes, conjuntos de datos o flujos frenan a tu equipo. En 20 minutos podemos ver qué automatizar primero y cuánto podría ahorrarte.",
  },

  /* ------------------------------------------------------------------ */
  "product-improvement": {
    path: "/es/servicios/mejora-de-producto/",
    name: "Mejora de producto",
    short: "Encontrar dónde abandonan los usuarios y lanzar la solución con tu equipo",
    tags: ["Analítica de producto", "Investigación UX", "Experimentación", "QA"],
    metaTitle: "Consultor de mejora de producto: analítica, UX y experimentación | Matteo Arellano",
    metaDescription:
      "Consultor de mejora de producto. Uso Amplitude, GA4, BigQuery e investigación de usuarios para detectar dónde abandonan los clientes, y lanzo y pruebo la solución con tu equipo.",
    serviceTypes: [
      "Mejora de producto",
      "Analítica de producto",
      "Optimización de la tasa de conversión (CRO)",
      "Investigación UX",
      "Experimentación",
    ],
    hero: {
      kicker: "Servicio 03 · Mejora de producto",
      title: "Mejora de producto, desde el primer clic hasta una solución lanzada y probada.",
      lede: "Detecto dónde abandonan los usuarios entre la búsqueda y el pago, cuantifico lo que cuesta y trabajo con los equipos de producto, diseño e ingeniería para lanzar y probar la solución. Combino datos de Amplitude, GA4 y BigQuery con grabaciones de sesión, opiniones de clientes y auditorías técnicas.",
    },
    statLabels: [
      "de mejora de la conversión en un recorrido digital de cliente",
      "patrones de mejora en mi guía de recorrido de cliente",
      "casos de investigación de producto publicados completos",
    ],
    outcomes: [
      {
        title: "Mayor conversión",
        copy: "Los pasos donde los usuarios abandonan se detectan, se explican y se corrigen, así que más parte de tu demanda actual se convierte en ingresos.",
      },
      {
        title: "Un backlog ordenado por valor",
        copy: "Cada mejora tiene un impacto estimado en ingresos, así que el tiempo de producto e ingeniería va donde más rinde.",
      },
      {
        title: "Cambios demostrados",
        copy: "Cada solución se lanza con una hipótesis, una métrica principal y métricas de control, así sabes si ha funcionado.",
      },
      {
        title: "Menos errores en producción",
        copy: "La medición, el QA y las pruebas en distintos navegadores detectan los recorridos rotos antes que tus clientes.",
      },
    ],
    signals: [
      "Muchos usuarios empiezan una búsqueda, un registro o un pago, y muy pocos lo terminan.",
      "El roadmap se decide por opiniones porque nadie ha cuantificado las oportunidades.",
      "Tu analítica muestra dónde se va la gente, pero no por qué se va.",
      "Salió una nueva versión, la conversión cayó y el equipo no encuentra la causa.",
      "Los equipos de producto, ingeniería y negocio necesitan a una persona que sepa hablar con todos ellos.",
    ],
    scope: [
      {
        title: "Analítica de producto",
        copy: "Cuantifico dónde abandonan los usuarios y cuánto vale cada paso del recorrido.",
        items: ["Amplitude", "GA4 y BigQuery", "Análisis de embudos y cohortes", "Planes de medición"],
      },
      {
        title: "Investigación y UX",
        copy: "Descubro el comportamiento y las dudas que hay detrás de los números y los convierto en cambios de diseño concretos.",
        items: ["Grabaciones de sesión", "Entrevistas con clientes y soporte", "Comparativas con la competencia", "Revisiones de usabilidad"],
      },
      {
        title: "Experimentación",
        copy: "Diseño pruebas que responden a una pregunta de negocio y protegen los ingresos mientras están activas.",
        items: ["Diseño de tests A/B", "Hipótesis y métricas de control", "Cálculo del tamaño de muestra", "Análisis de resultados"],
      },
      {
        title: "Entrega con ingeniería",
        copy: "Escribo la especificación, acompaño a los ingenieros hasta el lanzamiento y compruebo que el cambio funciona como se esperaba.",
        items: ["Especificaciones y tickets", "QA y pruebas en distintos navegadores", "Lanzamiento de funcionalidades", "Medición tras el lanzamiento"],
      },
    ],
    approach: [
      {
        title: "Encontrar la fuga",
        copy: "Combino datos del embudo, grabaciones, información de soporte y auditorías técnicas para ver dónde y por qué se van los clientes.",
      },
      {
        title: "Cuantificar y priorizar",
        copy: "Cada hallazgo recibe una estimación de ingresos o margen y se ordena por impacto, confianza y esfuerzo.",
      },
      {
        title: "Lanzar y demostrar",
        copy: "Especificamos el cambio, lo lanzamos con ingeniería y lo medimos frente a un criterio de éxito claro.",
      },
    ],
    firstDeliverable:
      "Es un mapa de oportunidades: dónde se pierde valor a lo largo del recorrido, la evidencia de cada hallazgo y un backlog priorizado.",
    evidenceMore: { label: "Todos los casos de investigación de producto" },
    tools: ["Amplitude", "GA4", "BigQuery", "Grabaciones de sesión", "BrowserStack", "SQL", "Python"],
    faqs: [
      {
        q: "¿Qué incluye un proyecto de mejora de producto?",
        a: "Normalmente incluye un mapa de oportunidades, un dossier de evidencias, un backlog priorizado, diseños de experimentos y un plan de medición. Cuando hace falta, también acompaño el lanzamiento junto a los ingenieros y mido el resultado.",
      },
      {
        q: "¿Trabajas con Amplitude y GA4?",
        a: "Sí. Uso Amplitude, GA4 y BigQuery para medir embudos y cohortes, y escribo planes de medición cuando faltan los eventos que necesitas.",
      },
      {
        q: "¿Sustituyes a un product manager?",
        a: "No. Trabajo junto a product managers, diseñadores e ingenieros. Cuando a un equipo le falta capacidad, puedo encargarme de un problema concreto desde el diagnóstico hasta el lanzamiento.",
      },
      {
        q: "¿Para qué productos es?",
        a: "Encaja con cualquier producto que tenga una búsqueda, una elección y un pago, como marketplaces, tiendas online, SaaS y plataformas de reservas. Mi mayor experiencia está en travel tech y transporte terrestre.",
      },
    ],
    ctaTitle: "¿Pierdes usuarios en algún punto que no sabes explicar?",
    ctaCopy:
      "Cuéntame dónde pierde gente tu recorrido. En 20 minutos podemos plantear las primeras hipótesis y decidir qué evidencias las confirmarían.",
  },

  /* ------------------------------------------------------------------ */
  "business-development": {
    path: "/es/servicios/desarrollo-de-negocio-y-venta-tecnica/",
    name: "Desarrollo de negocio y venta técnica",
    short: "Nuevos mercados, alianzas y acuerdos que necesitan credibilidad técnica",
    tags: ["Entrada en mercados", "Alianzas", "Prospección", "Venta técnica"],
    metaTitle: "Consultor de desarrollo de negocio y venta técnica | Matteo Arellano",
    metaDescription:
      "Consultor de desarrollo de negocio y venta técnica. Ayudo a empresas a entrar en nuevos mercados, encontrar socios, prospectar y cerrar acuerdos que necesitan credibilidad técnica.",
    serviceTypes: [
      "Desarrollo de negocio",
      "Venta técnica",
      "Entrada en nuevos mercados",
      "Desarrollo de alianzas",
      "Prospección comercial",
    ],
    hero: {
      kicker: "Servicio 04 · Desarrollo de negocio y venta técnica",
      title: "Desarrollo de negocio y venta técnica para nuevos mercados, socios y acuerdos.",
      lede: "Ayudo a empresas a entrar en nuevos mercados, abrir conversaciones con socios y cerrar acuerdos que necesitan a alguien que entienda tanto el producto como al comprador. Combino investigación de mercado, prospección y contacto comercial con apoyo técnico en la venta sobre integraciones, datos y pagos.",
    },
    statLabels: [
      "idiomas de trabajo, entre ellos español, portugués, neerlandés y francés",
      "países en los que he vivido, entre Europa y América Latina",
      "ganador de Rotterdam100 con un caso de negocio de Next Economy",
    ],
    outcomes: [
      {
        title: "Un mercado claro al que dirigirte",
        copy: "Sabes a qué mercado, segmento y socios acercarte primero, y por qué deberían escucharte.",
      },
      {
        title: "Un pipeline cualificado",
        copy: "El contacto comercial se dirige a empresas con un problema real y un motivo para comprar, no a una larga lista de nombres.",
      },
      {
        title: "Alianzas que abren puertas",
        copy: "Los socios aportan distribución, acceso al mercado o una oferta más sólida, con un piloto que demuestra su valor.",
      },
      {
        title: "Acuerdos que se cierran",
        copy: "Las preguntas técnicas sobre integraciones, datos y pagos se responden con seguridad durante la venta.",
      },
    ],
    signals: [
      "Quieres entrar en un nuevo país y no sabes a qué clientes o socios dirigirte primero.",
      "Tu prospección consigue reuniones, pero esas reuniones rara vez se convierten en pipeline.",
      "Los compradores hacen preguntas técnicas que tu equipo comercial no sabe responder en la llamada.",
      "Una alianza podría abrirte un mercado, pero nadie tiene tiempo para preparar la propuesta.",
      "Vendes en América Latina o Europa y necesitas a alguien que hable el idioma y conozca el mercado.",
    ],
    scope: [
      {
        title: "Entrada en mercados",
        copy: "Analizo el mercado, priorizo segmentos e identifico los requisitos locales que deciden si los clientes pueden comprar.",
        items: ["Mapa de mercado y segmentos", "Perfil de cliente ideal", "Necesidades locales de pago e idioma", "Plan de entrada"],
      },
      {
        title: "Prospección y contacto comercial",
        copy: "Investigo las empresas adecuadas, encuentro a quienes deciden y escribo mensajes que hablan de su problema.",
        items: ["Investigación de prospectos", "Enriquecimiento de datos", "Secuencias de contacto", "CRM y pipeline"],
      },
      {
        title: "Alianzas",
        copy: "Busco socios con un motivo real para trabajar contigo y convierto la idea en una propuesta y un piloto.",
        items: ["Mapa de socios", "Propuestas de alianza", "Diseño de pilotos", "Incorporación de socios"],
      },
      {
        title: "Venta técnica",
        copy: "Participo en llamadas de descubrimiento y demos para traducir entre el problema del comprador y lo que tu producto puede hacer.",
        items: ["Llamadas de descubrimiento", "Diseño de soluciones", "Preguntas sobre integraciones y pagos", "Propuestas y respuestas a RFP"],
      },
    ],
    approach: [
      {
        title: "Hablar con el mercado",
        copy: "Hablo con clientes potenciales y socios para entender qué les preocupa, qué valoran y cómo compran.",
      },
      {
        title: "Elegir el mejor enfoque",
        copy: "Combinamos esas conversaciones con datos de mercado para elegir el segmento, la oferta y los socios con más potencial.",
      },
      {
        title: "Construir el camino a los ingresos",
        copy: "La oportunidad se convierte en contacto comercial dirigido, reuniones, un piloto o una propuesta de alianza con un siguiente paso claro.",
      },
    ],
    firstDeliverable:
      "Es un informe de mercado y pipeline: los segmentos a los que dirigirse, las primeras empresas a contactar y el mensaje para cada una.",
    evidenceMore: { href: "/es/sobre-mi/", label: "Mi historia" },
    tools: ["Investigación de prospectos", "Mapa de mercado", "CRM y pipeline", "Enriquecimiento de datos", "Análisis comercial", "Python", "SQL"],
    faqs: [
      {
        q: "¿Qué incluye el apoyo en desarrollo de negocio?",
        a: "Puede incluir investigación de mercados y segmentos, listas de prospectos, contacto comercial, mapa de socios, propuestas de alianza y diseño de pilotos. El alcance depende de dónde sea más débil tu pipeline.",
      },
      {
        q: "¿Qué es el apoyo en venta técnica?",
        a: "Consiste en participar en llamadas de descubrimiento, demos y propuestas cuando los compradores hacen preguntas detalladas sobre integraciones, datos o pagos. Traduzco entre el problema del comprador y lo que tu producto puede hacer, para que la venta no se atasque.",
      },
      {
        q: "¿Qué mercados conoces mejor?",
        a: "Conozco mejor América Latina y Europa, sobre todo México, Brasil, Colombia, los Países Bajos, España y Luxemburgo. También he trabajado en la aceptación de pagos en Oriente Medio y el Norte de África.",
      },
      {
        q: "¿Puedes vender en otros idiomas además del inglés?",
        a: "Sí. Trabajo en siete idiomas, entre ellos español, catalán, neerlandés, portugués y francés, lo que ayuda en mercados donde los compradores esperan que se les hable en su propio idioma.",
      },
    ],
    ctaTitle: "¿Buscas un nuevo mercado, socio o acuerdo?",
    ctaCopy:
      "Cuéntame a qué mercado o cliente quieres llegar. En 20 minutos podemos poner a prueba la oportunidad y decidir el primer paso concreto.",
  },

  /* ------------------------------------------------------------------ */
  "payment-solutions": {
    path: "/es/servicios/soluciones-de-pago/",
    name: "Soluciones de pago",
    short: "Aceptación de pagos, integraciones con PSP y métodos de pago locales",
    tags: ["Aceptación", "PSP", "Métodos locales", "3DS"],
    metaTitle: "Consultor de soluciones de pago: aceptación, PSP y métodos locales | Matteo Arellano",
    metaDescription:
      "Consultor de soluciones de pago: aceptación de pagos, integraciones con PSP, enrutamiento, 3DS y métodos de pago locales en América Latina, Oriente Medio y Europa.",
    serviceTypes: [
      "Consultoría de soluciones de pago",
      "Optimización de la aceptación de pagos",
      "Integración de PSP",
      "Métodos de pago locales",
    ],
    hero: {
      kicker: "Servicio 05 · Soluciones de pago",
      title: "Soluciones de pago para que más clientes completen su pago.",
      lede: "Diagnostico flujos de pago que rinden por debajo de lo esperado y diseño configuraciones de pago con PSP, métodos de pago locales, adquirencia, enrutamiento y 3DS. Mi trabajo abarca América Latina, Oriente Medio y el Norte de África, y Europa.",
    },
    statLabels: [
      "de aprobación de tarjetas, de aproximadamente el 57% al 75%",
      "de los pagos expirados, atribuidos a un único problema de tiempos",
      "de los supuestos fallos, reclasificados correctamente",
    ],
    outcomes: [
      {
        title: "Mayor aceptación de pagos",
        copy: "Más clientes legítimos completan el pago porque se ajustan los rechazos, la fricción de 3DS y las reglas antifraude.",
      },
      {
        title: "Métodos de pago adecuados para cada mercado",
        copy: "Cada mercado ofrece las tarjetas, los monederos digitales y los métodos locales que sus clientes usan de verdad.",
      },
      {
        title: "Integraciones sólidas",
        copy: "Los estados de pago, los webhooks y el enrutamiento encajan con la lógica de tus reservas o pedidos, así que los pedidos pagados no fallan.",
      },
      {
        title: "Visibilidad clara",
        copy: "Puedes ver qué falla, dónde y por qué, desde el checkout hasta la entrega y la conciliación.",
      },
    ],
    signals: [
      "Las tasas de aprobación caen, o un mercado o emisor rinde mucho peor que el resto.",
      "Vas a lanzarte en un nuevo país y necesitas métodos de pago locales o adquirencia local.",
      "Los pagos expiran, los reembolsos aumentan o fallan pedidos ya pagados, y nadie sabe explicar por qué.",
      "Necesitas elegir o añadir un proveedor de pagos y quieres una opinión independiente.",
      "El panel de tu PSP no explica lo que vivieron realmente tus clientes.",
    ],
    scope: [
      {
        title: "Aceptación y conversión",
        copy: "Aumento la proporción de clientes legítimos que completan el pago.",
        items: ["Tasas de autorización y aprobación", "3DS y autenticación", "Fricción de las reglas antifraude", "Comportamiento de emisores y adquirentes"],
      },
      {
        title: "Integraciones y enrutamiento",
        copy: "Diseño y depuro el recorrido técnico entre el checkout, los proveedores de pago y el pedido.",
        items: ["Integraciones con PSP y API", "Lógica de enrutamiento y divisas", "Configuración de monederos digitales", "Estados de pago y webhooks"],
      },
      {
        title: "Pagos locales e internacionales",
        copy: "Diseño configuraciones de pago según cómo pagan realmente los clientes de cada mercado.",
        items: ["Métodos de pago locales", "Adquirencia local e internacional", "Configuración de PSP por mercado", "Diseño de divisas"],
      },
      {
        title: "Observabilidad y operaciones",
        copy: "Creo la visibilidad necesaria para saber qué falla, dónde y por qué.",
        items: ["Monitorización de pagos", "Logs y trazabilidad de transacciones", "Reembolsos y expiraciones", "Conciliación"],
      },
    ],
    approach: [
      {
        title: "Empezar por el síntoma",
        copy: "Partimos del problema de negocio, como una caída de la aprobación, pedidos fallidos o el lanzamiento en un mercado.",
      },
      {
        title: "Seguirlo por toda la cadena",
        copy: "Lo rastreo a través del checkout, las respuestas del PSP, la adquirencia, el 3DS, los logs y la entrega hasta que la causa está clara.",
      },
      {
        title: "Corregir y vigilar",
        copy: "Aplicamos el cambio con ingeniería y operaciones de pago, y después lo vigilamos para que el problema no vuelva.",
      },
    ],
    firstDeliverable:
      "Es un diagnóstico de pagos: la causa raíz, su impacto cuantificado, los cambios recomendados y un plan para medirlos.",
    evidenceMore: { label: "Todos los casos y guías de pagos" },
    faqs: [
      {
        q: "¿Cómo mejoras la aceptación de pagos?",
        a: "Analizo todo el flujo de pago en lugar de tomar el rechazo del PSP como respuesta final. Relaciono las respuestas del emisor, la adquirencia, el enrutamiento, el 3DS, las reglas antifraude, las divisas y el comportamiento en el checkout para encontrar la causa real, y después cuantifico la solución.",
      },
      {
        q: "¿Con qué proveedores de pago has trabajado?",
        a: "Tengo experiencia práctica con Adyen, dLocal, Checkout.com, Mercado Pago y PayPal, y con métodos locales como Pix, OXXO, Apple Pay y Google Pay. Se trata de experiencia práctica, no de un empleo ni de una alianza con estos proveedores.",
      },
      {
        q: "¿Puedes ayudarnos a elegir un proveedor de pagos?",
        a: "Sí. Comparo proveedores según la cobertura de mercados, la adquirencia local, los métodos de pago, las comisiones y el esfuerzo de integración para tus mercados concretos. Mi comparativa de Adyen, Checkout.com y dLocal muestra cómo abordo esa decisión.",
      },
      {
        q: "¿Qué mercados cubres?",
        a: "He trabajado sobre todo en América Latina, especialmente en México, Brasil y Colombia, y en aceptación y adquirencia en Oriente Medio y el Norte de África. También trabajo en pagos transfronterizos en Europa.",
      },
    ],
    ctaTitle: "¿Un problema de pagos te está costando clientes?",
    ctaCopy:
      "Cuéntame lo que ves: una caída de la aprobación, pedidos fallidos o el lanzamiento en un mercado. En 20 minutos podemos ver por dónde empezar a buscar.",
  },
};
