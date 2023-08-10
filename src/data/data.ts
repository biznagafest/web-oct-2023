import type {
  Data,
  Event,
  FAQ,
  Speaker,
  Sponsor,
  TeamMember,
  Ticket,
} from "./data.type";

export const speakers = [
  {
    name: "Jecelyn Yeen",
    position: "DevRel Engineer, Chrome",
    picture: "/speakers/jecelyn.jpg",
    descriptionParagraphs: [
      "Jecelyn Yeen is a DevRel engineer at Google working on Chrome DevTools and Browser Automation.",
      "Her work focuses on understanding and activating the ecosystem around developer tooling.",
      "When she’s not coding (and avocado-ing), she’s jumping into mysterious sea waters in search of narwhals and mermaids.",
    ],
    socials: {
      mail: "jec@google.com",
      mastodon: "https://indieweb.social/@jecfish",
      twitter: "https://twitter.com/jecfish",
    },
  },
  {
    name: "Bezael Pérez",
    position: "Lead Software Engineer",
    picture: "/speakers/bezael.jpg",
    descriptionParagraphs: ["Divulgador de contenido."],
    socials: {
      mail: "bezael@gmail.com",
      youtube: "https://youtube.com/@dominicode",
      twitter: "https://twitter.com/domini_code",
    },
  },
  {
    name: "Leifer Mendez",
    position: "Front-end Developer",
    picture: "/speakers/leifer.jpg",
    descriptionParagraphs: [
      "Apasionado de la tecnología y la divulgación de contenido.",
    ],
    socials: {
      youtube: "https://youtube.com/@LeiferMendez",
      twitter: "https://twitter.com/LeiferMendez",
    },
  },
  {
    name: "Carmen Ansio",
    position: "Freelance UX Engineer.",
    picture: "/speakers/carmen.jpg",
    descriptionParagraphs: [
      "Mi nombre es Carmen Ansio y soy freelance UX Engineer. ",
      "He trabajado en compañías increíbles diseñando e implementando productos digitales desde hace más de 10 años.",
      "Además formo parte del programa de Google GDE y comparto mi pasión sobre diseño y desarrollo web a diario en redes. Actualmente imparto formaciones y consultorías enfocadas en formación para perfiles de diseño y desarrollo web.",
    ],
    socials: {
      mail: "carmenansio@gmail.com",
      twitter: "https://twitter.com/carmenansio",
    },
  },
  {
    name: "Alvaro Lopez Sanchez",
    position: "R&D Engineer / Innovation, Fortris",
    picture: "/speakers/black.png",
    descriptionParagraphs: [
      "+10 yrs of expertise as a software engineer in the video game industry.",
      "In recent years, I turned his attention to decentralized technologies in terms of cybersecurity and scalability.",
      "Now, I hold the position of R&D Engineer at Fortris and am pursuing a Ph.D. at the University of Malaga in decentralized technology and its cybersecurity implications.",
    ],
    socials: {
      mail: "bluebycode@gmail.com",
      linkedin: "https://www.linkedin.com/in/bluebycode/",
    },
  },
] as const satisfies ReadonlyArray<Speaker>;

export const events = [
  {
    name: "Modern Web Debugging",
    descriptionInParagraphs: [
      "Few developers enjoy debugging, and debugging can be complex for modern web apps because of the multiple frameworks, languages, and libraries used. But, developer tools have come a long way in making the process easier.",
      "In this talk, Jecelyn will dig into the modern state of debugging, improvements in DevTools, and how you can use them to reliably debug your apps.",
    ],
    durationInMinutes: 45,
    place: "auditorium",
    type: "lecture",
    speakers: ["Jecelyn Yeen"],
    language: "English",
  },
  {
    name: "El Presente y el Futuro Inminente del Frontend: Perspectivas y Predicciones",
    descriptionInParagraphs: [
      "En esta charla dinámica, exploraremos las tendencias actuales y las previsiones futuras del desarrollo frontend.",
      "Con un enfoque especial en los frameworks, herramientas y técnicas emergentes, analizaremos cómo estas innovaciones están redefiniendo las capacidades y responsabilidades del desarrollo frontend.",
      "Esta charla es imprescindible para desarrolladores, diseñadores y todos aquellos interesados en la dirección futura del diseño web y la programación frontend.",
    ],
    durationInMinutes: 45,
    place: "auditorium",
    type: "lecture",
    speakers: ["Bezael Pérez", "Leifer Mendez"],
    language: "Español",
  },
  {
    name: "✨ Haz magia con CSS",
    descriptionInParagraphs: [
      "En la charla veremos hechizos de magia a modo de snippets de código CSS variados, desde arte con CSS, ilusiones ópticas, un videojuego funcional, interfaces animadas, funciones en CSS, elementos de html con los que tener funcionalidades de saque en el navegador sin necesidad de JS...",
    ],
    durationInMinutes: 45,
    place: "auditorium",
    type: "lecture",
    speakers: ["Carmen Ansio"],
    language: "Español",
  },
  {
    name: "Under the Hood of Decentralized Technology: Examining Scalability and Security",
    descriptionInParagraphs: [
      "This talk examines everything no one tells you about blockchain as a decentralized distributed system: challenges of balancing security and scalability.",
      "It covers the costs of improving performance, known challenges in blockchain platforms, and the issue of centralization in decentralized systems.",
      "It visits the known-unknown security attacks case per case.",
    ],
    durationInMinutes: 45,
    place: "auditorium",
    type: "lecture",
    speakers: ["Alvaro Lopez Sanchez"],
    language: "Español",
  },
] as const satisfies ReadonlyArray<Event>;

export const tickets = [
  {
    name: "Estudiante",
    price: 8.5,
    url: "https://example.com/ticket1",
    perks: [
      "Acceso al área reservado de patrocinadores",
      "Coffee Break (varios)",
      "Almuerzo",
      "Café durante todo el día",
      "Regalos valorados en 15€",
      "Sorteos valorados en 300€",
    ],
  },
  {
    name: "Summer",
    price: 15.5,
    url: "https://example.com/ticket1",
    perks: [
      "Acceso al área reservado de patrocinadores",
      "Coffee Break (varios)",
      "Almuerzo",
      "Café durante todo el día",
      "Regalos valorados en 15€",
      "Sorteos valorados en 300€",
    ],
    notice: "Hasta 1 de septiembre.",
  },
  {
    name: "Early Bird",
    price: 14,
    url: "https://example.com/ticket1",
    perks: [
      "Acceso al área reservado de patrocinadores",
      "Coffee Break (varios)",
      "Almuerzo",
      "Café durante todo el día",
      "Regalos valorados en 15€",
      "Sorteos valorados en 300€",
    ],
    isSoldOut: true,
  },
] as const satisfies ReadonlyArray<Ticket>;

export const sponsors = [
  {
    name: "Fortris",
    picture: "/sponsors/fortris.svg",
    tier: "platinum",
    url: "https://fortris.com/",
    description: "fortris",
  },
  {
    name: "Fortris",
    picture: "/sponsors/fortris.svg",
    tier: "gold",
    url: "https://fortris.com/",
    description: "fortris",
  },
  {
    name: "Fortris",
    picture: "/sponsors/fortris.svg",
    tier: "silver",
    url: "https://fortris.com/",
    description: "fortris",
  },
  {
    name: "Fortris",
    picture: "/sponsors/fortris.svg",
    tier: "bronze",
    url: "https://fortris.com/",
    description: "fortris",
  },
  {
    name: "Fortris",
    picture: "/sponsors/fortris.svg",
    tier: "media",
    url: "https://fortris.com/",
    description: "fortris",
  },
  {
    name: "Fortris",
    picture: "/sponsors/fortris.svg",
    tier: "community",
    url: "https://fortris.com/",
    description: "fortris",
  },
  {
    name: "Fortris",
    picture: "/sponsors/fortris.svg",
    tier: "food",
    url: "https://fortris.com/",
    description: "fortris",
  },
  {
    name: "Fortris",
    picture: "/sponsors/fortris.svg",
    tier: "platinum",
    url: "https://fortris.com/",
    description: "fortris",
  },
  {
    name: "Fortris",
    picture: "/sponsors/fortris.svg",
    tier: "platinum",
    url: "https://fortris.com/",
    description: "fortris",
  },
] as const satisfies ReadonlyArray<Sponsor>;

const faq = [
  {
    title: "¿Cuándo y dónde se llevará a cabo?",
    body: "El BiznagaFest se celebrará el 28 de octubre en la ETSI de Informática de la Universidad de Málaga. La dirección exacta es Bulevar Louis Pasteur, 35, 29071, Málaga.",
  },
  {
    title: "¿Cómo puedo registrarme para asistir?",
    body: "El proceso de registro para el BiznagaFest es sencillo. Simplemente dirígete a nuestro portal de entradas en Eventbrite y elige la opción correspondiente a tu categoría (público general o estudiante). Además, las 100 primeras entradas, tanto para el público general como para estudiantes, contarán con grandes descuentos.",
  },
  {
    title: "¿Qué tipo de charlas y temas se tratarán?",
    body: "En el BiznagaFest, contaremos con una amplia variedad de charlas y temas relacionados con la tecnología. Nuestros expertos abordarán temas como Frontend, Backend, DevOps, Ciberseguridad, Diseño de Interfaces y de Usuario, entre otros.",
  },
  {
    title: "¿Habrá oportunidades de networking?",
    body: "¡Absolutamente! El BiznagaFest brinda una excelente oportunidad para establecer contactos y conocer a otros profesionales y entusiastas de la tecnología y de la programación. Durante los descansos, habrá espacios designados para interactuar y compartir ideas con otros asistentes y patrocinadores.",
  },
  {
    title: "¿Se proporcionará comida y bebida?",
    body: "Sí, los asistentes podrán disfrutar de áreas de descanso y stands de comida para que puedas disfrutar de un refrigerio o una comida durante el BiznagaFest.",
  },
  {
    title: "¿Puedo cancelar mi registro y solicitar un reembolso?",
    body: "Lamentamos informarte que no se aceptarán cancelaciones ni se realizarán reembolsos una vez completado el registro. Sin embargo, si no puedes asistir al evento, te animamos a que nos lo comuniques para que podamos ofrecer tu lugar a otra persona interesada.",
  },
  {
    title: "¿Cómo puedo obtener más información sobre el BiznagaFest?",
    body: "Si tienes más preguntas o necesitas información adicional, no dudes en contactarnos a través de nuestro correo electrónico de contacto: biznagafest@gmail.com También puedes seguirnos en nuestras redes sociales para recibir las últimas actualizaciones y novedades sobre el evento.",
  },
] as const satisfies ReadonlyArray<FAQ>;

const team = [
  {
    name: "Jose Antonio Palacios",
    // TODO
    picture: "/fallback/person.png",
    position: "Software Engineer Lead, Vodafone",
    socials: {
      twitter: "https://twitter.com/JoseAntPR",
      github: "https://github.com/JoseAntpr",
      linkedin: "https://www.linkedin.com/in/joseantpalacios/",
    },
    descriptionInParagraphs: [],
  },
  {
    name: "Carlos Caballero",
    // TODO
    picture: "/fallback/person.png",
    descriptionInParagraphs: [
      "Carlos Caballero González es ingeniero informático y doctor en informática de la Universidad de Málaga.",
      "Máster en Ingeniería de Software y en Inteligencia Artificial.",
      "Google Developer Experts en Angular.",
    ],
    position: "Angular Google Developer Expert (GDE)",
    socials: {
      twitter: "https://twitter.com/carlillo",
      website: "https://www.carloscaballero.io/",
      github: "https://github.com/caballerog",
      linkedin: "https://www.linkedin.com/in/carloscaballerogonzalez/",
      youtube: "https://www.youtube.com/c/DotTechES",
    },
  },
  {
    name: "Jose Barrera",
    // TODO
    picture: "/fallback/person.png",
    position: "Digital Product Designer at Fortris",
    socials: {
      twitter: "https://twitter.com/joseabarreram",
      linkedin: "https://www.linkedin.com/in/joseabarreram/",
    },
    descriptionInParagraphs: [],
  },
  {
    name: "David Rojo",
    picture: "/team/david-rojo.png",
    descriptionInParagraphs: [
      "David Rojo es un desarrollador de software especializado en tecnologías web como NestJs y Angular.",
      "Con gran interes en la comunidad y en proyectos open source.",
    ],
    position: "Software Developer, Max Gain Development",
    socials: {
      twitter: "https://twitter.com/davidrojom",
      website: "https://davidrojom.vercel.app/",
      github: "https://github.com/DavidRojoM",
      linkedin: "https://www.linkedin.com/in/davidrojom/",
    },
  },
  {
    name: "Inma Ortega",
    // TODO
    picture: "/fallback/person.png",
    descriptionInParagraphs: [
      "Graduada en periodismo, es técnica en Comunicación Corporativa, PR y especialista en Social Media Marketing.",
      "Tiene un gran interes sobre sector tecnológico, que tan en boga está en Málaga y está siendo un revulsivo en el tejido social y económico en la provincia.",
    ],
    position: "Community Manager, ComparteMedios",
    socials: {
      linkedin: "https://www.linkedin.com/in/inmaculadaortegamartin/",
    },
  },
  {
    name: "Daniel Olivet",
    // TODO
    picture: "/fallback/person.png",
    descriptionInParagraphs: [
      "Desarrollador de software malagueño.",
      "Estudió ASIR y por afición pura acabó desarrollando webs.",
      "Especializado en entornos LAMP, con gran interés en nuevas tecnologías y en clean code.",
    ],
    position: "Desarrollador Backend, Bulevip",
    socials: {
      linkedin: "https://www.linkedin.com/in/daniel-olivet-jimenez/",
      github: "https://github.com/daniolivet",
    },
  },
] as const satisfies ReadonlyArray<TeamMember>;

const gallery: string[] = [];

export const DATA: Data = {
  title: "BiznagaFest 2023",
  ticketsUrl:
    "https://www.eventbrite.es/e/entradas-biznagafest-2023-638556609007",
  date: new Date(2023, 9, 28),
  about: {
    descriptionInParagraphs: [
      'El BiznagaFest es el gran evento IT de la Costa del Sol para las comunidades "Google developers" de España, que se reúnen para ofrecer conferencias y workshops sobre Devops, Backend, Fronted, Chatbots, IA, Blockchain y soft skills.',
      "En sus ediciones anteriores han pasado grandes expertos que trabajan en las principales empresas tecnológicas tanto nacionales e internacionales, como Google, Virus Total, Deloitte, Red Hat, Chainalysis, Singular, entre otros.",
    ],
    socials: {
      instagram: "https://www.instagram.com/biznagafest/",
      twitter: "https://twitter.com/home",
      youtube: "https://www.youtube.com/@biznagafest",
    },
  },
  lastEditionVideoUrl: "https://www.youtube.com/embed/L1B6GCrWFVQ",
  venue: {
    address: "Campus de Teatinos, Blvr. Louis Pasteur, 35, 29010 Málaga",
    description: "",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.313861364173!2d-4.4811915018006445!3d36.715022691025084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f74b9f3606f1%3A0x9fa32cc2e6b0bbf9!2sE.T.S.%20de%20Ingenier%C3%ADa%20Inform%C3%A1tica!5e0!3m2!1ses!2ses!4v1691019443359!5m2!1ses!2ses",
    pictures: [],
    title: "E.T.S de Ingeniería Informática",
    city: "Málaga",
    howToArrive: {
      howToArriveByBus: [
        "Línea 8 (Alameda Principal - Clínico) - Parada Hospital Clínico",
        "Línea 11 (Universidad - El Palo: P. Virginia) - Parada Louis Pasteur",
        "Línea 22 (Avda. de Moliere - Universidad) Parada Louis Pasteur",
        "Línea 25 (Paseo del Parque - Maqueda) - Parada  Andrés Llorden",
      ],
      howToArriveByBike: [
        "El Campus cuenta con un carril bici que comienza en el Paseo del Parque y llega al Boulevar Louis Pasteur",
      ],
      howToArriveByMetro: [
        "El Campus cuenta con un carril bici que comienza en el Paseo del Parque y llega al Boulevar Louis Pasteur",
      ],
    },
  },
  previousEditions: [
    {
      name: "2017",
      url: "https://devfest17.gdgmalaga.dev/",
    },
    {
      name: "2018",
      url: "https://devfest18.gdgmalaga.dev/",
    },
    {
      name: "2019",
      url: "https://devfest19.gdgmalaga.dev/",
    },
    {
      name: "2021",
      url: "https://devfest21.gdgmalaga.dev/",
    },
    {
      name: "2022",
      url: "https://2022.biznagafest.com/",
    },
  ],
  gallery,
  team,
  faq,
  tickets,
  sponsors,
  speakers,
  events,
  footerLinks: [
    {
      title: "Code Of Conduct",
      href: "/code",
    },
    {
      title: "GDG Málaga",
      href: "https://www.meetup.com/es-ES/google-developer-group-malaga/",
    },
    {
      title: "Google Developers",
      href: "https://developers.google.com/",
    },
  ],
} as const satisfies Readonly<Data>;
