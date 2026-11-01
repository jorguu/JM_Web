// =====================================================================
//  CONTENIDO DE LA WEB
//  Aquí se cambian todos los textos, enlaces e imágenes.
//
//  Reglas sencillas:
//  - Cambia solo lo que está entre comillas "...".
//  - No borres comas, llaves { } ni corchetes [ ].
//  - Para añadir un elemento a una lista, copia un bloque { ... },
//    pégalo debajo separado por una coma y cambia sus textos.
//
//  IDIOMAS (español, alemán, inglés)
//  - Los textos traducidos tienen tres versiones juntas:
//        { es: "Hola", de: "Hallo", en: "Hello" }
//  - Lo que es igual en todos los idiomas (nombres, emails, enlaces)
//    se escribe una sola vez, sin llaves.
//  - Si falta la traducción de un idioma, se muestra la de "porDefecto".
//  - El alemán usa "Sie" (formal) y ortografía suiza ("ss" en vez de "ß").
// =====================================================================

window.SITE_CONTENT = {

  // ---------- Idiomas ----------
  // disponibles: idiomas del selector del menú.
  // porDefecto: el que se ve si el navegador del visitante no usa ninguno de ellos.
  idiomas: {
    porDefecto: "es",
    disponibles: ["es", "de", "en"]
  },

  // ---------- Datos generales ----------
  sitio: {
    // Nombre que sale en el menú y en el pie. Vacío "" = no se muestra ningún nombre.
    nombre: "",
    tituloPestana: {
      es: "Webs hechas con IA",
      de: "Websites, mit KI gebaut",
      en: "Websites built with AI"
    },
    descripcion: {
      es: "Webs y herramientas digitales hechas con IA y revisadas a mano.",
      de: "Websites und digitale Tools, mit KI gebaut und von Hand geprüft.",
      en: "Websites and digital tools built with AI and reviewed by hand."
    },
    sello: "JM",                                    // Iniciales del logo del menú
    etiquetaIdioma: { es: "Idioma", de: "Sprache", en: "Language" },
    etiquetaMenu: { es: "Principal", de: "Hauptmenü", en: "Main" },
    etiquetaInicio: { es: "Inicio", de: "Startseite", en: "Home" }, // Para lectores de pantalla si no hay nombre
    botonMenu: { es: "Menú", de: "Menü", en: "Menu" } // Botón del menú en el móvil
  },

  // ---------- Barra fina de arriba del todo ----------
  aviso: {
    texto: {
      es: "Webs hechas con IA y revisadas a mano.",
      de: "Websites mit KI gebaut und von Hand geprüft.",
      en: "Websites built with AI and reviewed by hand."
    },
    enlaceTexto: {
      es: "Así se hace cada proyecto",
      de: "So entsteht jedes Projekt",
      en: "How every project is made"
    },
    enlace: "#como-se-hace"
  },

  // ---------- Menú superior (máximo 4 enlaces) ----------
  menu: [
    { texto: { es: "Proyectos", de: "Projekte", en: "Projects" }, enlace: "#proyectos" },
    { texto: { es: "Servicios", de: "Leistungen", en: "Services" }, enlace: "#servicios" },
    { texto: "Lab", enlace: "#lab" },
    { texto: { es: "Contacto", de: "Kontakt", en: "Contact" }, enlace: "#contacto" }
  ],

  // ---------- Portada (lo primero que se ve) ----------
  portada: {
    // Etiqueta pequeña encima del nombre
    lema: {
      es: "Proyectos, servicios y pruebas",
      de: "Projekte, Leistungen und Experimente",
      en: "Projects, services and experiments"
    },
    // Titular grande. Cada frase va en una línea
    titulo: {
      es: ["Webs y herramientas,", "hechas con IA."],
      de: ["Websites und Tools,", "mit KI gebaut."],
      en: ["Websites and tools,", "built with AI."]
    },
    subtitulo: {
      es: "Construyo webs y herramientas con ayuda de IA.",
      de: "Ich baue Websites und Tools mit Hilfe von KI.",
      en: "I build websites and tools with the help of AI."
    },
    texto: {
      es: "No soy ingeniero de IA: soy alguien que usa la IA para construir. Tú me cuentas qué necesitas; yo dirijo el trabajo, reviso el resultado y lo pruebo antes de entregártelo.",
      de: "Ich bin kein KI-Ingenieur, sondern jemand, der mit KI baut. Sie sagen mir, was Sie brauchen; ich steuere die Arbeit, prüfe das Ergebnis und teste es, bevor ich es Ihnen übergebe.",
      en: "I'm not an AI engineer: I'm someone who uses AI to build. You tell me what you need; I direct the work, review the result and test it before handing it over."
    },
    botonPrincipal: {
      texto: { es: "Pedir presupuesto", de: "Angebot anfragen", en: "Request a quote" },
      enlace: "#contacto"
    },
    botonSecundario: {
      texto: { es: "Ver proyectos", de: "Projekte ansehen", en: "View projects" },
      enlace: "#proyectos"
    },
    // Déjalo vacío "" para ocultarlo
    estado: {
      es: "Disponible para nuevos proyectos",
      de: "Offen für neue Projekte",
      en: "Available for new projects"
    }
  },

  // ---------- Sobre mí (panel enmarcado bajo la portada) ----------
  sobreMi: {
    // Cada frase va en una línea
    titulo: {
      es: ["Hecho con IA.", "Revisado por mí."],
      de: ["Mit KI gebaut.", "Von mir geprüft."],
      en: ["Built with AI.", "Reviewed by me."]
    },
    texto: {
      es: "La mayor parte del código la escribe una inteligencia artificial. Mi trabajo es entender lo que necesitas, guiar a la IA, revisar lo que hace y comprobar que funciona. Te lo cuento desde el principio porque prefiero que sepas exactamente qué contratas.",
      de: "Den Grossteil des Codes schreibt eine künstliche Intelligenz. Meine Aufgabe ist es, zu verstehen, was Sie brauchen, die KI anzuleiten, ihre Arbeit zu prüfen und sicherzustellen, dass alles funktioniert. Ich sage Ihnen das von Anfang an, weil Sie genau wissen sollen, was Sie beauftragen.",
      en: "Most of the code is written by an artificial intelligence. My job is to understand what you need, guide the AI, review what it does and make sure it works. I'm telling you up front because I'd rather you know exactly what you're hiring."
    },
    herramientasTitulo: {
      es: "Herramientas que uso",
      de: "Werkzeuge, die ich nutze",
      en: "Tools I use"
    },
    herramientas: ["Claude Code", "HTML", "CSS", "JavaScript", "GitHub"]
  },

  // ---------- Proyectos ----------
  // estado: texto libre (por ejemplo "En línea", "Prototipo", "Entregado").
  // credito: quién y cómo se hizo. Se muestra en naranja.
  // enlace: dirección del proyecto. Déjalo vacío "" si no está publicado.
  // imagen: opcional. Ruta (por ejemplo "img/proyecto.jpg") o URL. Vacío "" = sin imagen.
  proyectos: {
    titulo: { es: "Proyectos", de: "Projekte", en: "Projects" },
    intro: {
      es: "Trabajos reales, con su estado real. Cuando algo es un prototipo, lo pone.",
      de: "Echte Arbeiten mit ihrem echten Stand. Wenn etwas ein Prototyp ist, steht es dabei.",
      en: "Real work, with its real status. If something is a prototype, it says so."
    },
    verProyecto: { es: "Ver proyecto", de: "Projekt ansehen", en: "View project" },
    lista: [
      {
        titulo: "JM Web",
        descripcion: {
          es: "Esta misma web. Un portfolio estático, sin frameworks, con todo el contenido editable desde un único archivo.",
          de: "Diese Website. Ein statisches Portfolio ohne Frameworks, dessen Inhalte sich komplett in einer einzigen Datei bearbeiten lassen.",
          en: "This very website. A static portfolio with no frameworks, with all content editable from a single file."
        },
        fecha: "2026",
        estado: { es: "Esta web", de: "Diese Website", en: "This website" },
        etiquetas: ["HTML", "CSS", "JavaScript"],
        credito: {
          es: "Hecho con Claude Code · Revisado a mano",
          de: "Mit Claude Code gebaut · Von Hand geprüft",
          en: "Built with Claude Code · Reviewed by hand"
        },
        enlace: "#inicio",
        imagen: "",
        imagenAlt: ""
      },
      {
        // Puedes poner el nombre del negocio si el cliente está de acuerdo.
        titulo: {
          es: "Web para una peluquería",
          de: "Website für einen Coiffeur",
          en: "Website for a hair salon"
        },
        descripcion: {
          es: "Web en alemán y página para pedir cita de una peluquería en Ebikon (Suiza). El negocio puede cambiar textos y horarios sin saber programar.",
          de: "Website auf Deutsch mit Seite zur Terminbuchung für einen Coiffeur in Ebikon (Schweiz). Texte und Öffnungszeiten lassen sich ohne Programmierkenntnisse ändern.",
          en: "German-language website with an appointment booking page for a hair salon in Ebikon (Switzerland). The owner can change texts and opening hours without coding."
        },
        fecha: "2026",
        estado: { es: "Prototipo", de: "Prototyp", en: "Prototype" },
        etiquetas: {
          es: ["Web", "Reservas", "Editable"],
          de: ["Website", "Terminbuchung", "Editierbar"],
          en: ["Website", "Booking", "Editable"]
        },
        credito: {
          es: "Hecho con Claude Code · Revisado a mano",
          de: "Mit Claude Code gebaut · Von Hand geprüft",
          en: "Built with Claude Code · Reviewed by hand"
        },
        enlace: "",
        imagen: "",
        imagenAlt: ""
      }
    ]
  },

  // ---------- Servicios ----------
  // mostrar: true = se ve en la web · false = oculto (no hace falta borrarlo).
  // precio y plazo: déjalos vacíos "" si no quieres mostrarlos.
  servicios: {
    titulo: { es: "Servicios", de: "Leistungen", en: "Services" },
    intro: {
      es: "Lo que puedo hacer por ti hoy. Si tu idea no encaja aquí, cuéntamela igualmente.",
      de: "Was ich heute für Sie tun kann. Wenn Ihre Idee hier nicht hineinpasst, erzählen Sie mir trotzdem davon.",
      en: "What I can do for you today. If your idea doesn't fit here, tell me about it anyway."
    },
    // Línea naranja de cada tarjeta
    credito: {
      es: "Hecho con IA · Revisado a mano",
      de: "Mit KI gebaut · Von Hand geprüft",
      en: "Built with AI · Reviewed by hand"
    },
    lista: [
      {
        mostrar: true,
        titulo: {
          es: "Webs y landing pages",
          de: "Websites & Landingpages",
          en: "Websites & landing pages"
        },
        descripcion: {
          es: "Páginas rápidas, adaptadas al móvil y fáciles de editar sin programar.",
          de: "Schnelle Seiten, fürs Handy optimiert und ohne Programmierkenntnisse bearbeitbar.",
          en: "Fast pages, mobile-friendly and easy to edit without coding."
        },
        incluye: {
          es: ["Diseño a medida", "Adaptada a móvil", "Textos editables", "Ayuda para publicarla"],
          de: ["Individuelles Design", "Für Handys optimiert", "Bearbeitbare Texte", "Hilfe beim Veröffentlichen"],
          en: ["Custom design", "Mobile-friendly", "Editable text", "Help getting it online"]
        },
        precio: { es: "A medida", de: "Auf Anfrage", en: "Custom quote" },
        plazo: { es: "1–3 semanas", de: "1–3 Wochen", en: "1–3 weeks" }
      },
      {
        mostrar: true,
        titulo: { es: "Herramientas sencillas", de: "Einfache Tools", en: "Simple tools" },
        descripcion: {
          es: "Utilidades para el día a día: páginas de reserva, formularios, calculadoras o paneles simples.",
          de: "Helfer für den Alltag: Buchungsseiten, Formulare, Rechner oder einfache Übersichten.",
          en: "Everyday utilities: booking pages, forms, calculators or simple dashboards."
        },
        incluye: {
          es: ["Análisis de lo que necesitas", "Versión para probar", "Ajustes tras tu opinión"],
          de: ["Analyse Ihres Bedarfs", "Version zum Testen", "Anpassungen nach Ihrem Feedback"],
          en: ["Understanding what you need", "A version to try out", "Changes based on your feedback"]
        },
        precio: { es: "A medida", de: "Auf Anfrage", en: "Custom quote" },
        plazo: { es: "Según el proyecto", de: "Je nach Projekt", en: "Depends on the project" }
      },
      {
        mostrar: true,
        titulo: { es: "Prototipos rápidos", de: "Schnelle Prototypen", en: "Quick prototypes" },
        descripcion: {
          es: "¿Tienes una idea y quieres verla funcionando? Monto una primera versión para enseñarla o validarla.",
          de: "Sie haben eine Idee und möchten sie in Aktion sehen? Ich baue eine erste Version, die Sie zeigen oder testen können.",
          en: "Got an idea and want to see it working? I build a first version you can show or validate."
        },
        incluye: {
          es: ["Primera versión funcional", "Pensado para enseñar", "Siguientes pasos claros"],
          de: ["Erste funktionierende Version", "Zum Vorzeigen gedacht", "Klare nächste Schritte"],
          en: ["First working version", "Made to be shown", "Clear next steps"]
        },
        precio: { es: "A medida", de: "Auf Anfrage", en: "Custom quote" },
        plazo: { es: "Días, no meses", de: "Tage, nicht Monate", en: "Days, not months" }
      },
      {
        mostrar: false,                               // Oculto: cambia a true para mostrarlo
        titulo: { es: "Mantenimiento", de: "Wartung", en: "Maintenance" },
        descripcion: {
          es: "Cambios pequeños, textos nuevos y revisiones periódicas de una web que ya tengas.",
          de: "Kleine Änderungen, neue Texte und regelmässige Kontrollen für eine bestehende Website.",
          en: "Small changes, new copy and regular check-ups for a website you already have."
        },
        incluye: {
          es: ["Cambios de contenido", "Revisión mensual"],
          de: ["Inhaltliche Änderungen", "Monatliche Kontrolle"],
          en: ["Content changes", "Monthly check-up"]
        },
        precio: { es: "A medida", de: "Auf Anfrage", en: "Custom quote" },
        plazo: { es: "Mensual", de: "Monatlich", en: "Monthly" }
      }
    ],
    nota: {
      es: "¿Necesitas algo distinto? Escríbeme y te digo con sinceridad si puedo hacerlo.",
      de: "Brauchen Sie etwas anderes? Schreiben Sie mir, und ich sage Ihnen ehrlich, ob ich es umsetzen kann.",
      en: "Need something different? Write to me and I'll tell you honestly whether I can do it."
    },
    boton: {
      texto: { es: "Pedir presupuesto", de: "Angebot anfragen", en: "Request a quote" },
      enlace: "#contacto"
    }
  },

  // ---------- Cómo se hace (transparencia) ----------
  comoSeHace: {
    titulo: { es: "Cómo se hace", de: "Wie es entsteht", en: "How it's made" },
    intro: {
      es: "Sin letra pequeña: esto es lo que hago yo, lo que hace la IA y lo que conviene que sepas.",
      de: "Ohne Kleingedrucktes: Das mache ich, das macht die KI, und das sollten Sie wissen.",
      en: "No fine print: here's what I do, what the AI does and what you should know."
    },
    bloques: [
      {
        titulo: { es: "Lo que hago yo", de: "Was ich mache", en: "What I do" },
        texto: {
          es: "Hablo contigo, decido qué hay que construir, doy las instrucciones a la IA, reviso lo que entrega, lo pruebo en móvil y ordenador y te lo dejo listo para usar.",
          de: "Ich spreche mit Ihnen, entscheide, was gebaut wird, gebe der KI die Anweisungen, prüfe, was sie liefert, teste es auf Handy und Computer und übergebe es Ihnen einsatzbereit.",
          en: "I talk with you, decide what needs to be built, give the AI its instructions, review what it delivers, test it on phone and computer, and hand it over ready to use."
        }
      },
      {
        titulo: { es: "Lo que hace la IA", de: "Was die KI macht", en: "What the AI does" },
        texto: {
          es: "Escribe la mayor parte del código y me ayuda con textos e ideas de diseño. Trabajo sobre todo con Claude Code, de Anthropic.",
          de: "Die KI schreibt den Grossteil des Codes und hilft mir bei Texten und Designideen. Ich arbeite vor allem mit Claude Code von Anthropic.",
          en: "It writes most of the code and helps me with copy and design ideas. I mainly work with Claude Code, by Anthropic."
        }
      },
      {
        titulo: { es: "Lo que debes saber", de: "Was Sie wissen sollten", en: "What you should know" },
        texto: {
          es: "No soy ingeniero de IA. Si tu proyecto necesita a un especialista (pagos, datos sensibles, mucho tráfico), te lo diré antes de empezar.",
          de: "Ich bin kein KI-Ingenieur. Wenn Ihr Projekt einen Spezialisten braucht (Zahlungen, sensible Daten, viel Traffic), sage ich es Ihnen, bevor wir anfangen.",
          en: "I'm not an AI engineer. If your project needs a specialist (payments, sensitive data, heavy traffic), I'll tell you before we start."
        }
      }
    ]
  },

  // ---------- Lab: pruebas, experimentos e ideas ----------
  // Para una prueba nueva: duplica lab/plantilla.html, cámbiale el nombre
  // y añade aquí un bloque con enlace "lab/nombre-del-archivo.html".
  lab: {
    titulo: "Lab",
    intro: {
      es: "Pruebas, experimentos e ideas para futuros proyectos. Lo que aún no está terminado también vive aquí.",
      de: "Tests, Experimente und Ideen für künftige Projekte. Auch Unfertiges hat hier seinen Platz.",
      en: "Tests, experiments and ideas for future projects. Unfinished things live here too."
    },
    abrir: { es: "Abrir", de: "Öffnen", en: "Open" },
    lista: [
      {
        titulo: { es: "Plantilla de pruebas", de: "Test-Vorlage", en: "Test template" },
        nota: {
          es: "Página base para empezar experimentos nuevos con el mismo estilo que esta web.",
          de: "Basisseite, um neue Experimente im gleichen Stil wie diese Website zu starten.",
          en: "Base page for starting new experiments in the same style as this website."
        },
        estado: { es: "Terminado", de: "Fertig", en: "Done" },
        fecha: "2026",
        enlace: "lab/plantilla.html"
      },
      {
        titulo: { es: "Gráfico luminoso en CSS", de: "Leuchtgrafik in CSS", en: "Glowing CSS graphic" },
        nota: {
          es: "Los cuadrados que giran en la portada: solo CSS, sin imágenes ni librerías.",
          de: "Die rotierenden Quadrate auf der Startseite: nur CSS, ohne Bilder oder Bibliotheken.",
          en: "The rotating squares on the home page: pure CSS, no images or libraries."
        },
        estado: { es: "Terminado", de: "Fertig", en: "Done" },
        fecha: "2026",
        enlace: "#inicio"
      },
      {
        titulo: { es: "Próxima idea", de: "Nächste Idee", en: "Next idea" },
        nota: {
          es: "Apunta aquí la siguiente idea antes de empezarla.",
          de: "Hier kommt die nächste Idee hin, bevor ich sie umsetze.",
          en: "The next idea goes here before I start on it."
        },
        estado: { es: "Idea", de: "Idee", en: "Idea" },
        fecha: "",
        enlace: ""
      }
    ]
  },

  // ---------- Contacto ----------
  contacto: {
    etiqueta: { es: "Contacto", de: "Kontakt", en: "Contact" },
    titulo: { es: "¿Tienes una idea?", de: "Haben Sie eine Idee?", en: "Got an idea?" },
    texto: {
      es: "Cuéntamela. Te diré con sinceridad si puedo hacerla y cómo la haría.",
      de: "Erzählen Sie mir davon. Ich sage Ihnen ehrlich, ob ich sie umsetzen kann und wie.",
      en: "Tell me about it. I'll tell you honestly whether I can build it and how."
    },
    email: "tu-email@ejemplo.com",                  // CAMBIA ESTO por tu email
    botonCopiar: { es: "Copiar email", de: "E-Mail kopieren", en: "Copy email" },
    copiado: { es: "Copiado", de: "Kopiert", en: "Copied" },
    redes: [
      { texto: "GitHub", enlace: "https://github.com/jorguu" },
      { texto: "LinkedIn", enlace: "https://www.linkedin.com/" }
    ]
  },

  // ---------- Pie de página ----------
  pie: {
    credito: {
      es: "Hecho con IA y revisado a mano",
      de: "Mit KI gebaut und von Hand geprüft",
      en: "Built with AI and reviewed by hand"
    },
    legal: {
      es: "* Esta web se ha creado con Claude Code y se ha revisado a mano",
      de: "* Diese Website wurde mit Claude Code erstellt und von Hand geprüft",
      en: "* This website was made with Claude Code and reviewed by hand"
    }
  }
};
