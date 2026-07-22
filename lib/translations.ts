/**
 * CB HaLi Translation System
 * Complete translations for all site content in ES/EN
 *
 * Uso: const t = getTranslations(lang) → t.homeHero.slides, t.homeIdentity.tagline, etc.
 * `lang` viene del hook useLanguage() (ver lib/LanguageContext.tsx).
 *
 * Cubre TODAS las páginas del sitio (Home, Collections, Custom, Contract,
 * About, Blog, Contact) y el Navbar/menú/buscador global. Los nombres,
 * direcciones y teléfonos de distribuidores (contactContentFull) NO se
 * traducen por ser datos reales. "Crafted for Visionaries!" (Home,
 * InnerPageBand, About) queda fijo en inglés siempre, sin importar el
 * idioma — es la única excepción explícita pedida por el cliente.
 */
export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      collections: 'Colecciones',
      custom: 'Personalizado',
      contract: 'Contrato',
      about: 'Nosotros',
      blog: 'Blog [CB Atelier]',
      contact: 'Contacto y Distribuidores'
    },
    homeHero: {
      slides: [
        { title: 'Descubre *El Arte*', subtitle: 'Bajo Tus Pies.' },
        { title: 'Creado para', subtitle: 'Visionarios.' },
        { title: 'Diseño Atemporal,', subtitle: 'Belleza Infinita.' },
        { title: 'Hecho a Medida,', subtitle: 'Hecho Para Ti.' },
        { title: 'El Arte de', subtitle: 'La Alfombra Artesanal.' }
      ]
    },
    homeIdentity: {
      caption: 'CREADO PARA VISIONARIOS',
      tagline: 'TEJEMOS HISTORIA Y EMOCIONES',
      p1: 'En CB Hali, el diseño no es decoración: es una declaración de intención, memoria y movimiento. Cada pieza se concibe como una extensión del espacio, una fuerza silenciosa que lo completa. Creemos en el diseño como un lenguaje transformador que va más allá de la forma para crear conexión emocional. En un mundo que se mueve deprisa, elegimos bajar el ritmo, escuchar —a los materiales, a los lugares, a las personas— y diseñar con sentido, sensibilidad y un profundo respeto por el detalle.',
      p2: 'Nuestro lenguaje creativo está arraigado en el Caribe colombiano, un lugar definido por el ritmo, la sensibilidad y la profundidad cultural. Desde ese origen aprendimos a valorar la imperfección, a explorar formas orgánicas y a fusionar técnicas artesanales con una visión contemporánea. Guiados por la curiosidad y el respeto por el oficio, creamos piezas que existen entre la tradición y la innovación, traduciendo historias, memorias y atmósferas en paisajes táctiles. CB Hali se convierte en un puente —entre el espacio y la emoción, entre la materia y el significado— donde el diseño transforma lo ordinario en extraordinario.'
    },
    homeManifesto: {
      statement: 'NO CREAMOS OBJETOS.\nCREAMOS PRESENCIA.',
      body: 'Estamos comprometidos a crear productos que no solo embellezcan espacios, sino que también cuenten historias y conecten emocionalmente con quienes los eligen. Al fusionar lo contemporáneo con lo artesanal en cada detalle, hemos encontrado un equilibrio entre innovación y tradición que define nuestro trabajo y sigue guiando nuestra visión hacia el futuro.',
      videoTitle: 'CB RUGS - Seres del Multiverso - Making of'
    },
    homeCollage: {
      newsletter: 'Suscríbete a Nuestro Newsletter',
      subscribe: 'Suscribirse'
    },
    homeSignature: {
      script: '¡Creado para Visionarios!'
    },
    collectionsHero: {
      title: 'Colecciones.',
      available: 'Disponible ahora. Listo para enviar.'
    },
    collectionsList: {
      kicker: 'Piezas curadas disponibles para entrega inmediata.',
      heading: 'Colecciones',
      intro: 'Cada colección es una atmósfera distinta. Material, ritmo y proporción trabajan juntos para dar forma a cómo se siente y se vive un espacio.',
    },
    customHero: {
      kicker: 'Personalizado',
      title: 'Diseñado por expertos. Elaborado con precisión.'
    },
    customContent: {
      introHeading: 'Diseñado para espacios con intención.',
      introLead: 'Elige con nosotros tamaño, forma, diseño y color.',
      journeyTitle: 'Nuestro proceso de colaboración personalizado',
      journeySubtitle: 'Guiado por experiencia en diseño, conocimiento artesanal y una exploración refinada de materiales.',
      steps: [
        { title: 'Comparte tu visión', desc: 'Cada proyecto comienza con una conversación. Exploramos tu espacio, concepto, necesidades funcionales y dirección estética para entender la atmósfera que quieres crear.' },
        { title: 'Diseño y exploración de materiales', desc: 'A través de herramientas curadas —muestras de material, técnicas de construcción, acabados y más de 1.000 combinaciones de color— definimos juntos el carácter, escala, textura y paleta del tapete.' },
        { title: 'Desarrollo de diseño', desc: 'Traducimos el concepto en un documento de diseño 2D detallado que describe dimensiones, materiales, colores y especificaciones técnicas — asegurando claridad antes de producción.' },
        { title: 'Revisión y aprobación', desc: 'El diseño se refina de forma colaborativa hasta que cada detalle esté alineado. Una vez aprobado y firmado, el proyecto pasa a fabricación.' },
        { title: 'Elaboración y entrega', desc: 'Tu tapete es elaborado a mano por artesanos expertos y entregado en aproximadamente 12-16 semanas, listo para integrarse sin problemas en su espacio.' },
      ],
      authorP1: 'Author es nuestra plataforma de colaboración creativa. Un espacio donde co-creamos con arquitectos, diseñadores de interiores, artistas y visionarios para desarrollar piezas profundamente personales, innovadoras y arraigadas en la narrativa.',
      authorP2: 'Tú traes tu concepto. Nosotros traemos los materiales, las técnicas y la guía experta para hacerlo realidad — ya sea un tapete personalizado, un experimento textil o un objeto único para un proyecto irrepetible. Cada colaboración bajo Author es acreditada y celebrada. Es un proceso compartido de diseño, diálogo y autoría — donde la pieza final lleva tu firma tanto como la nuestra. No solo creamos para ti.',
      authorShort: 'Creamos contigo.',
      authorCta: 'Explora Nuestro Catálogo Personalizado',
      authorTagline: 'Personalizado → A la medida, expresivo, único, guiado por diseño',
      statement: ['Creemos que todo gran espacio', 'comienza con una idea audaz', "y estamos aquí para ayudar a darle vida."],
      galleryCaption: 'Del boceto al espacio.',
    },
    contractHero: {
      kicker: 'Contrato',
      title: ['De la visión a la realidad,', 'cada detalle se moldea', 'con cuidado.'],
      sub: '[De principio a fin.]'
    },
    contractContent: {
      label: 'Contrato',
      heading: 'Donde el diseño se encuentra con el rendimiento.',
      caption: 'Donde el diseño se encuentra con el rendimiento.',
      desc0: 'Un tapete bien diseñado hace más que definir un piso — define cómo funciona un espacio.',
      desc1: 'CB HALI Contract desarrolla soluciones textiles a la medida para hospitalidad, proyectos residenciales, retail y corporativos. Colaboramos de cerca con arquitectos y diseñadores para traducir la intención espacial en material, escala y estructura — creando piezas que no son decorativas, sino estratégicas.',
      desc2: 'Desde lobbies de hotel hasta espacios de trabajo boutique y desarrollos residenciales de alta gama, cada proyecto se aborda con precisión, entendimiento técnico y un profundo respeto por la integridad del diseño.',
      overlaySubtitle: 'Diseñamos alfombras y proyectos de gran escala, colecciones.',
      tags: ['Concepto', 'Adaptabilidad', 'Durabilidad'],
      card1Title: 'Personalización de catálogo',
      card1Desc: 'Adaptamos nuestros diseños existentes a las medidas y requisitos de cada proyecto.',
      card2Title: 'Soluciones bespoke',
      card2Desc: 'Creamos diseño desde cero para equipos especializados.',
      processTitle: ['The', 'Creative', 'Process'],
      processAside: ['Residential,', 'Hospitality,', 'Retail', 'and Beyond'],
      services: [
        { title: 'Consulta estratégica', desc: 'Cada proyecto comienza con alineación. Revisamos el concepto espacial, los requisitos de rendimiento y la dirección estética para establecer un marco claro.' },
        { title: 'Desarrollo de concepto', desc: 'El espacio, la estética, el color y el material se refinan para responder a la identidad del proyecto. El diseño puede evolucionar desde colecciones existentes o desarrollarse desde cero.' },
        { title: 'Definición técnica y muestreo', desc: 'Proporcionamos un dossier completo que incluye referencias visuales, especificaciones de material y muestras hechas a mano para evaluación. El muestreo típicamente requiere 3-4 semanas.' },
        { title: 'Aprobación y producción', desc: 'Tras la aprobación, cada pieza se elabora a mano con precisión excepcional. Los tiempos de producción varían entre 8 y 18 semanas según la complejidad y el volumen.' },
        { title: 'Logística y entrega', desc: 'Coordinamos el envío internacional y la gestión aduanera para asegurar una entrega global sin contratiempos.' },
      ],
      galleryCaptionTitle: 'Hotel Irotama – Santa Marta',
      galleryCaptionSub: 'por la diseñadora de interiores Isabel Parra',
      tagline: ['CONTRATO → ORIENTADO AL RENDIMIENTO', 'REPETIBLE, LISTO PARA NORMATIVA'],
    },
    aboutHero: {
      kicker: 'CB',
      title: 'Nosotros'
    },
    aboutContent: {
      storyPrefix: 'La',
      storySuffix: 'Historia',
      bodyHeadingLine1: 'Donde el patrimonio',
      bodyHeadingLine2: 'se encuentra con el',
      bodyHeadingLine3: 'diseño.',
      designStoryLabel: 'Historia de diseño',
      designStoryP: 'El diseño corre profundo en la familia Borelly Esmeral. Criada entre galerías de arte y estudios de diseño de interiores en Nueva York, Miami y Colombia, Cristina Borelly creció rodeada de creatividad, artesanía y una pasión por la estética heredada de su madre y su tío. Inspirada por este legado creativo, lanzó CB HaLi con un propósito: reimaginar la artesanía atemporal a través de una mirada contemporánea. Lo que comenzó como una visión para transformar el tapete en una declaración de diseño moderno ha evolucionado hacia una misión más amplia: crear piezas que reflejen identidad, cultura y emoción.',
      globalVisionLabel: 'Visión global',
      globalVisionP: 'A lo largo de los años, hemos expandido nuestras alianzas globales, incorporando técnicas tradicionales y modernas de Brasil, India, Turquía, Francia y más allá. Cada colaboración ha ayudado a definir quiénes somos hoy: un estudio arraigado en la artesanía, impulsado por la innovación y guiado por un profundo respeto cultural. En 2019 abrimos nuestro showroom insignia en Barranquilla, un espacio donde arquitectos, diseñadores y amantes del diseño se reúnen para explorar el universo creativo de CB HaLi. Ahora, después de una década de crecimiento, nuestra visión es aún más clara: no solo diseñamos para espacios — diseñamos para la forma en que las personas viven, sienten y se conectan.',
      valuesPrefix: 'Nuestros',
      valuesSuffix: 'Valores',
      values: [
        { title: 'Artesanía y Patrimonio', desc: 'Honramos tradiciones artesanales probadas por el tiempo — anudado a mano, tejido y tufting — mientras las reimaginamos para hoy. Cada pieza lleva el alma de quien la hace y la sabiduría de generaciones.' },
        { title: 'Innovación y Personalización', desc: 'Creemos que el diseño debe evolucionar. Nuestro trabajo está impulsado por la curiosidad, la creatividad y la libertad de co-crear. Cada proyecto es una experiencia a la medida — porque no hay dos historias iguales.' },
        { title: 'Sostenibilidad con Propósito', desc: 'Estamos comprometidos con el uso de materiales sostenibles y reciclados, minimizando el impacto ambiental y apoyando una producción responsable y ética en toda nuestra cadena de suministro.' },
      ],
    },
    blogContent: {
      heroTitle: 'Blog e Inspiración.',
      latestNews: 'Últimas noticias',
      atelierPrefix: 'El',
      atelierSuffix: 'Atelier',
      upcomingEvents: 'Próximos eventos',
      posts: [
        { category: 'CB Hali', title: 'Resumen 2025', date: 'Mar 9 Dic.' },
        { category: 'Presentamos', title: 'Tamaños para cada espacio', date: 'Mar 9 Dic.' },
        { category: 'CB Hali', title: 'Cuidado y Limpieza', date: 'Mar 3 Jun.' },
        { category: 'Presentamos', title: 'Manchaha', date: 'Lun 5 May.' },
      ],
      exploreCatalog: 'Explorar Nuestro Catálogo',
      badgeText: 'CB HALI ATELIER · LEE MÁS ·',
      newsletterHeading: 'Suscríbete a Nuestro Newsletter',
      formName: 'Nombre',
      formEmail: 'Correo electrónico',
      subscribe: 'Suscribirse',
      contactDetailsTitle: 'DATOS DE CONTACTO',
      contactDetailsLines: ['CB Hali', 'info@cbhali.com', 'Carrera 49c #79-183', 'BARRANQUILLA', 'Visitas con cita previa.'],
    },
    contactHero: {
      title: 'Contacto y Distribuidores'
    },
    contactContentFull: {
      getInTouch: 'PONTE EN CONTACTO',
      success: 'Gracias. Tu mensaje fue capturado exitosamente.',
      formName: 'Nombre completo',
      formEmail: 'Correo electrónico',
      formSubject: 'Asunto',
      formProduct: 'Producto preferido (Opcional)',
      formMessage: 'Tu mensaje',
      send: 'ENVIAR MENSAJE',
      addressLabel: 'Distribuidores autorizados',
      addressCity: 'BARRANQUILLA',
      addressVisits: 'Visitas con cita previa.',
      dealersTitle: 'Distribuidores.',
      brandDevelopers: 'Desarrolladores de marca.',
    },
    footer: {
      blogLabel: 'Blog e Inspiración',
      legal: 'Catálogo de productos - Términos y Condiciones - Términos Comerciales - Cuidado y mantenimiento - Programa de socios',
      copyright: '© 2026 CB HALI. Todos los derechos reservados.',
      credit: 'diseñado por @_.Pargo - Santa Marta / Colombia 2026.',
    },
    common: {
      exploreCatalog: 'Explorar nuestro catálogo',
      scrollDown: 'Desplazar hacia abajo',
      searchLabel: 'Buscar',
      findAPage: 'Encuentra una página',
      searchPlaceholder: 'Busca inicio, colecciones, contacto...',
      noResults: 'No se encontraron páginas.',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      openSearch: 'Abrir búsqueda',
      closeSearch: 'Cerrar búsqueda',
    },
    productDetail: {
      itemCode: 'Referencia',
      chooseColor: 'Elige un color',
      size: 'Talla',
      stockInStock: 'Disponible',
      stockComingSoon: 'Próximamente',
      stockOutOfStock: 'Agotado',
      customSizingNote: 'Medidas a la carta disponibles bajo pedido.',
      details: 'Detalles',
      detailLabels: {
        softness: 'Suavidad',
        handmade: 'Hecho a mano',
        stainResistance: 'Resistencia a manchas',
        durability: 'Durabilidad',
        biodegradable: 'Biodegradable',
        resistant: 'Resistente',
        softnessLuster: 'Suavidad y brillo',
        hypoallergenic: 'Hipoalergénico',
      },
      needHelp: '¿Necesitas ayuda?',
      needHelpBody: 'Contacta a uno de nuestros asesores',
      aboutThisDesign: 'Sobre este diseño',
      productDetails: 'Ficha técnica',
      specMaterial: 'Material',
      specPileHeight: 'Altura de pelo',
      specTexture: 'Textura',
      specShape: 'Forma',
      specBacking: 'Reverso',
      washingCare: 'Lavado y cuidado',
      washingCareBody: 'Nuestras alfombras son hechas a mano con fibras naturales premium. Es normal que las alfombras nuevas suelten un poco de pelusa durante las primeras semanas de uso. Aspira regularmente con una aspiradora sin cepillo, siguiendo siempre la dirección del pelo, y rota la alfombra periódicamente para asegurar un desgaste uniforme. Se recomienda limpieza en seco profesional cuando sea necesario. En caso de derrames, seca inmediatamente con un paño blanco limpio evitando frotar o usar exceso de humedad. No uses aspiradoras robot y evita la exposición prolongada a la humedad, accidentes de mascotas y el contacto directo entre muebles pesados y la alfombra. Recomendamos usar protectores bajo las patas de los muebles para evitar marcas o deformaciones. Con el cuidado adecuado, tu alfombra conservará su belleza, textura y calidad por años.',
      shippingWarranty: 'Envío y garantía',
      shippingWarrantyBody: 'Cada alfombra se elabora y despacha bajo pedido desde nuestro taller. Los tiempos de entrega varían según la colección, la talla y el destino, y te los confirmamos junto con el costo de envío al momento de la cotización. Todas nuestras piezas cuentan con garantía contra defectos de fabricación; si algo no está a la altura de lo esperado, contáctanos y lo resolvemos. Para envíos internacionales o proyectos contract a gran escala, nuestro equipo coordina la logística contigo caso por caso.',
      downloads: 'Descargas',
      downloadTechnicalSheet: 'Ficha técnica',
      download2DCad: '2D CAD',
      downloadCommercialTerms: 'Términos comerciales',
      exploreMore: 'Explorar más colecciones',
      requestThisRug: 'Solicitar esta alfombra',
    }
  },
  en: {
    nav: {
      home: 'Home',
      collections: 'Collections',
      custom: 'Custom',
      contract: 'Contract',
      about: 'About Us',
      blog: 'Blog [CB Atelier]',
      contact: 'Contact & Dealers'
    },
    homeHero: {
      slides: [
        { title: 'Uncover *The Art*', subtitle: 'Beneath Your Feet.' },
        { title: 'Crafted for', subtitle: 'Visionaries.' },
        { title: 'Timeless Design,', subtitle: 'Endless Beauty.' },
        { title: 'Made to Order,', subtitle: 'Made for You.' },
        { title: 'The Art of', subtitle: 'The Handmade Rug.' }
      ]
    },
    homeIdentity: {
      caption: 'CRAFTED FOR VISIONARIES',
      tagline: 'WE WEAVE HISTORY & EMOTIONS',
      p1: 'At CB Hali, design is not decoration — it is a statement of intention, memory, and movement. Each piece is conceived as an extension of space, a quiet force that completes it. We believe in design as a transformative language that goes beyond form to create emotional connection. In a fast-moving world, we choose to slow down, to listen — to materials, to places, to people — and to design with meaning, sensitivity, and deep respect for detail.',
      p2: 'Our creative language is rooted in the Colombian Caribbean, a place defined by rhythm, sensitivity, and cultural depth. From this origin, we learned to value imperfection, explore organic forms, and merge artisanal techniques with a contemporary vision. Guided by curiosity and respect for craftsmanship, we create works that exist between tradition and innovation, translating stories, memories, and atmospheres into tactile landscapes. CB Hali becomes a bridge — between space and emotion, between matter and meaning — where design transforms the ordinary into the extraordinary.'
    },
    homeManifesto: {
      statement: "WE DON'T CREATE OBJECTS.\nWE CREATE PRESENCE.",
      body: 'We are committed to creating products that not only beautify spaces but also tell stories and connect emotionally with those who choose them. By merging the contemporary with the artisanal in every detail, we have found a balance between innovation and tradition that defines our work and continues to guide our vision for the future.',
      videoTitle: 'CB RUGS - Seres del Multiverso - Making of'
    },
    homeCollage: {
      newsletter: 'Subscribe To Our Newsletter',
      subscribe: 'Subscribe'
    },
    homeSignature: {
      script: 'Crafted for Visionaries!'
    },
    collectionsHero: {
      title: 'Collections.',
      available: 'Available Now. Ready to Ship.'
    },
    collectionsList: {
      kicker: 'Curated pieces available for immediate delivery.',
      heading: 'Collections',
      intro: 'Each collection is a distinct atmosphere. Material, rhythm and proportion work together to shape how a room feels and lives.',
    },
    customHero: {
      kicker: 'Custom',
      title: 'Designed by experts. Crafted with precision.'
    },
    customContent: {
      introHeading: 'Designed for spaces with intention.',
      introLead: 'Choose with us size, shape, design and color.',
      journeyTitle: 'Our custom collaborative journey',
      journeySubtitle: 'Guided by design expertise, artisanal knowledge, and refined material exploration.',
      steps: [
        { title: 'Share your vision', desc: 'Every project begins with a conversation. We explore your space, concept, functional needs, and aesthetic direction to understand the atmosphere you want to create.' },
        { title: 'Design & material exploration', desc: "Through curated tools — material samples, construction techniques, finishes, and over 1,000 color pomps — we define the rug's character, scale, texture, and palette together." },
        { title: 'Design development', desc: 'We translate the concept into a detailed 2D design document outlining dimensions, materials, colors, and technical specifications — ensuring clarity before production.' },
        { title: 'Review & approval', desc: 'The design is refined collaboratively until every detail is aligned. Once approved and signed, the project moves into fabrication.' },
        { title: 'Craft & delivery', desc: 'Your rug is handcrafted by expert artisans and delivered within approximately 12-16 weeks, ready to integrate seamlessly into its space.' },
      ],
      authorP1: 'Author is our platform for creative collaboration. A space where we co-create with architects, interior designers, artists, and visionaries to develop pieces that are deeply personal, innovative, and rooted in storytelling.',
      authorP2: "You bring your concept. We bring the materials, techniques, and expert guidance to make it real—whether that means a custom rug, a textile experiment, or a unique object for a one-of-a-kind project. Each collaboration under Author is credited and celebrated. It's a shared process of design, dialogue, and authorship—where the final piece carries your signature as much as ours. We don't just create for you.",
      authorShort: 'We create with you.',
      authorCta: 'Explore Our Custom Catalog',
      authorTagline: 'Custom → Bespoke, Expressive, One-of-a-kind, Design-led',
      statement: ['We believe that every great space', 'begins with a bold idea', "and we're here to help bring it to life."],
      galleryCaption: 'From sketch to space.',
    },
    contractHero: {
      kicker: 'Contract',
      title: ['From vision to reality,', 'every detail is shaped', 'with care.'],
      sub: '[From start to finish.]'
    },
    contractContent: {
      label: 'Contract',
      heading: 'Where design meets performance.',
      caption: 'Where design meets performance.',
      desc0: 'A well-designed rug does more than define a floor — it defines how a space performs.',
      desc1: 'CB HALI Contract develops bespoke textile solutions for hospitality, residential, retail and corporate projects. We collaborate closely with architects and designers to translate spatial intent into material, scale and structure — creating pieces that are not decorative, but strategic.',
      desc2: 'From hotel lobbies to boutique workspaces and high-end short-term residential developments, each project is approached with precision, technical understanding and a deep respect for design integrity.',
      overlaySubtitle: 'We design large-scale rugs and projects, collections.',
      tags: ['Concept', 'Adaptability', 'Durability'],
      card1Title: 'Catalog Customization',
      card1Desc: 'We adapt our existing designs to the measurements and requirements of each project.',
      card2Title: 'Bespoke Solutions',
      card2Desc: 'We create designs from scratch for specialized teams.',
      processTitle: ['The', 'Creative', 'Process'],
      processAside: ['Residential,', 'Hospitality,', 'Retail', 'and Beyond'],
      services: [
        { title: 'Strategic Consultation', desc: 'Every project begins with alignment. We review the spatial concept, performance requirements and aesthetic direction to establish a clear framework.' },
        { title: 'Concept Development', desc: 'Space, esthetic, color and material are refined to respond to the identity of the project. Design may evolve from existing collections or be developed entirely from scratch.' },
        { title: 'Technical Definition & Sampling', desc: 'We provide a comprehensive dossier including visual references, material specifications and custom hand samples for evaluation. Sampling typically requires 3-4 weeks.' },
        { title: 'Approval & Production', desc: 'Following approval, each piece is handcrafted with exceptional precision. Production timelines range between 8-18 weeks depending on complexity and volume.' },
        { title: 'Logistics & Delivery', desc: 'We coordinate international shipping and customs management to ensure seamless global delivery.' },
      ],
      galleryCaptionTitle: 'Hotel Irotama – Santa Marta',
      galleryCaptionSub: 'by interior designer Isabel Parra',
      tagline: ['CONTRACT → PERFORMANCE-DRIVEN', 'REPEATABLE, REGULATION-READY'],
    },
    aboutHero: {
      kicker: 'CB',
      title: 'About Us'
    },
    aboutContent: {
      storyPrefix: 'The',
      storySuffix: 'Story',
      bodyHeadingLine1: 'Where heritage',
      bodyHeadingLine2: 'meets',
      bodyHeadingLine3: 'design.',
      designStoryLabel: 'Design story',
      designStoryP: 'Design runs deep in the Borelly Esmeral family. Raised among art galleries and interior design studios in New York, Miami, and Colombia, Cristina Borelly grew up surrounded by creativity, craftsmanship, and a passion for aesthetics passed down from her mother and uncle. Inspired by this creative legacy, she launched CB HaLi with one purpose: to reimagine timeless craft through a contemporary lens. What began as a vision for transforming the rug into a modern design statement has evolved into a broader mission—crafting pieces that reflect identity, culture, and emotion.',
      globalVisionLabel: 'Global vision',
      globalVisionP: "Over the years, we've expanded our global partnerships, sourcing traditional and modern techniques from Brazil, India, Turkey, France, and beyond. Each collaboration has helped shape who we are today: a studio grounded in craftsmanship, driven by innovation, and guided by deep cultural respect. In 2019, we opened our flagship showroom in Barranquilla, a space where architects, designers, and design lovers gather to explore the creative universe of CB HaLi. Now, after a decade of growth, our vision has become even clearer: we don't just design for spaces—we design for the way people live, feel, and connect.",
      valuesPrefix: 'Our',
      valuesSuffix: 'Values',
      values: [
        { title: 'Craftsmanship & Heritage', desc: 'We honor time-tested artisanal traditions—hand-knotting, weaving, and tufting—while reimagining them for today. Every piece carries the soul of the maker and the wisdom of generations.' },
        { title: 'Innovation & Personalization', desc: 'We believe design should evolve. Our work is driven by curiosity, creativity, and the freedom to co-create. Each project is a tailored experience—because no two stories are alike.' },
        { title: 'Sustainability with Purpose', desc: 'We are committed to using sustainable and recycled materials, minimizing environmental impact, and supporting responsible, ethical production across our supply chain.' },
      ],
    },
    blogContent: {
      heroTitle: 'Blog & Inspiration.',
      latestNews: 'Latest News',
      atelierPrefix: 'The',
      atelierSuffix: 'Atelier',
      upcomingEvents: 'Upcoming Events',
      posts: [
        { category: 'CB Hali', title: '2025 Recap', date: 'Tue 9 Dec.' },
        { category: 'Introducing', title: 'Sizes 4 spaces', date: 'Tue 9 Dec.' },
        { category: 'CB Hali', title: 'Care & Cleaning', date: 'Tue 3 Jun.' },
        { category: 'Introducing', title: 'Manchaha', date: 'Mon 5 May.' },
      ],
      exploreCatalog: 'Explore Our Catalog',
      badgeText: 'CB HALI ATELIER · READ MORE ·',
      newsletterHeading: 'Subscribe to our Newsletter',
      formName: 'Name',
      formEmail: 'Email Address',
      subscribe: 'Subscribe',
      contactDetailsTitle: 'CONTACT DETAILS',
      contactDetailsLines: ['CB Hali', 'info@cbhali.com', 'Carrera 49c #79-183', 'BARRANQUILLA', 'Visits by appointment only.'],
    },
    contactHero: {
      title: 'Contact & Dealers'
    },
    contactContentFull: {
      getInTouch: 'GET IN TOUCH',
      success: 'Thanks. Your message was captured successfully.',
      formName: 'Full Name',
      formEmail: 'Email Address',
      formSubject: 'Subject',
      formProduct: 'Preferred product (Optional)',
      formMessage: 'Your Message',
      send: 'SEND MESSAGE',
      addressLabel: 'Authorized preferred partners',
      addressCity: 'BARRANQUILLA',
      addressVisits: 'Visits by appointment only.',
      dealersTitle: 'Dealers.',
      brandDevelopers: 'Brand developers.',
    },
    footer: {
      blogLabel: 'Blog & Inspiration',
      legal: 'Product catalog - Terms & Conditions - Comercial Terms - Care & maintenance - Partner Program',
      copyright: '© 2026 CB HALI. All Rights Reserved.',
      credit: 'designed by @_.Pargo - Santa Marta / Colombia 2026.',
    },
    common: {
      exploreCatalog: 'Explore Our Catalog',
      scrollDown: 'Scroll down',
      searchLabel: 'Search',
      findAPage: 'Find a page',
      searchPlaceholder: 'Search home, collections, contact...',
      noResults: 'No matching pages found.',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      openSearch: 'Open search',
      closeSearch: 'Close search',
    },
    productDetail: {
      itemCode: 'Item Code',
      chooseColor: 'Choose a color',
      size: 'Size',
      stockInStock: 'In stock',
      stockComingSoon: 'Coming Soon',
      stockOutOfStock: 'Out of stock',
      customSizingNote: 'Made-to-measure sizes available on request.',
      details: 'Details',
      detailLabels: {
        softness: 'Softness',
        handmade: 'Handmade',
        stainResistance: 'Stain Resistance',
        durability: 'Durability',
        biodegradable: 'Biodegradable',
        resistant: 'Resistant',
        softnessLuster: 'Softness & Luster',
        hypoallergenic: 'Hypoallergenic',
      },
      needHelp: 'Need Help?',
      needHelpBody: 'Contact one of our team members',
      aboutThisDesign: 'About This Design',
      productDetails: 'Product Details',
      specMaterial: 'Material',
      specPileHeight: 'Pile Height',
      specTexture: 'Texture',
      specShape: 'Shape',
      specBacking: 'Backing',
      washingCare: 'Washing & care',
      washingCareBody: 'Our rugs are handcrafted using premium natural fibers. It is normal for new rugs to shed lightly during the first few weeks of use. Vacuum regularly using a vacuum cleaner without a brush, always following the direction of the pile, and rotate the rug periodically to ensure even wear. Professional dry cleaning is recommended whenever needed. In the event of spills, blot immediately with a clean white cloth and avoid rubbing or using excessive moisture. Do not use robotic vacuum cleaners, and avoid prolonged exposure to moisture, pet accidents, and direct contact between heavy furniture and the rug. We recommend using protective pads under furniture legs to prevent indentations or deformation. With proper care, your rug will retain its beauty, texture, and quality for years to come.',
      shippingWarranty: 'Shipping & Warranty',
      shippingWarrantyBody: 'Every rug is made and dispatched to order from our workshop. Lead times vary by collection, size, and destination, and we confirm them along with shipping cost at the time of your quote. All our pieces are covered by a warranty against manufacturing defects — if anything falls short, reach out and we will make it right. For international shipping or large-scale contract projects, our team coordinates logistics with you case by case.',
      downloads: 'Downloads',
      downloadTechnicalSheet: 'Technical Sheet',
      download2DCad: '2D CAD',
      downloadCommercialTerms: 'Commercial Terms',
      exploreMore: 'Explore more collections',
      requestThisRug: 'Request this rug',
    }
  }
};

export type Language = 'es' | 'en';
export type Translations = typeof translations.es;
export const getTranslations = (lang: Language): Translations => translations[lang];
