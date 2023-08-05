import type { Data, Event, FAQ, Speaker, Sponsor, Ticket } from "./data.type";

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
      "Acceso a todas las sesiones",
      "Acceso al área reservado de patrocinadores",
      "Coffee Break (varios)",
      "Almuerzo",
      "Café durante todo el día",
      "Regalos valorados en 15€",
      "Sorteo de regalos valorados en 300€",
    ],
  },
  {
    name: "Summer",
    price: 15.5,
    url: "https://example.com/ticket1",
    perks: [
      "Acceso a todas las sesiones",
      "Acceso al área reservado de patrocinadores",
      "Coffee Break (varios)",
      "Almuerzo",
      "Café durante todo el día",
      "Regalos valorados en 15€",
      "Sorteo de regalos valorados en 300€",
    ],
    notice: "Hasta 1 de septiembre.",
  },
  {
    name: "Early Bird",
    price: 14,
    url: "https://example.com/ticket1",
    perks: [
      "Acceso a todas las sesiones",
      "Acceso al área reservado de patrocinadores",
      "Coffee Break (varios)",
      "Almuerzo",
      "Café durante todo el día",
      "Regalos valorados en 15€",
      "Sorteo de regalos valorados en 300€",
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
    title: "¿Cuándo y dónde se llevará a cabo el BiznagaFest?",
    body: "El BiznagaFest se celebrará el 28 de octubre en la ETSI de Informática de la Universidad de Málaga. La dirección exacta es Bulevar Louis Pasteur, 35, 29071, Málaga.",
  },
  {
    title: "¿Cómo puedo registrarme para asistir al BiznagaFest?",
    body: "El proceso de registro para el BiznagaFest es sencillo. Simplemente dirígete a nuestro portal de entradas en Eventbrite y elige la opción correspondiente a tu categoría (público general o estudiante). Además, las 100 primeras entradas, tanto para el público general como para estudiantes, contarán con grandes descuentos.",
  },
  {
    title: "¿Qué tipo de charlas y temas se tratarán en el BiznagaFest?",
    body: "En el BiznagaFest, contaremos con una amplia variedad de charlas y temas relacionados con la tecnología. Nuestros expertos abordarán temas como Frontend, Backend, DevOps, Ciberseguridad, Diseño de Interfaces y de Usuario, entre otros.",
  },
  {
    title: "¿Habrá oportunidades de networking durante el BiznagaFest?",
    body: "¡Absolutamente! El BiznagaFest brinda una excelente oportunidad para establecer contactos y conocer a otros profesionales y entusiastas de la tecnología y de la programación. Durante los descansos, habrá espacios designados para interactuar y compartir ideas con otros asistentes y patrocinadores.",
  },
  {
    title: "¿Se proporcionará comida y bebida durante el evento?",
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
] satisfies ReadonlyArray<FAQ>;

export const DATA: Data = {
  title: "BiznagaFest 2023",
  ticketsUrl:
    "https://www.eventbrite.es/e/entradas-biznagafest-2023-638556609007",
  date: new Date(2023, 9, 28),
  about: {
    lengthInHours: 12,
    attendees: 500,
    description: `El BiznagaFest es el gran evento IT de la Costa del Sol para las comunidades "Google developers" de España, que se reúnen para ofrecer conferencias y workshops sobre Devops, Backend, Frontend, Chatbots, IA, Blockchain y Soft Skills. En sus ediciones anteriores han pasado grandes expertos que trabajan en las principales empresas tecnológicas tanto nacionales e internacionales, como Google, Virus Total, Deloitte, Red Hat, Chainalysis, Singular, entre otros.`,
    socials: {},
  },
  lastEditionVideoUrl: "https://www.youtube.com/embed/L1B6GCrWFVQ",
  team: {
    organizers: [],
    staff: [],
  },
  venue: {
    address: "Campus de Teatinos, Blvr. Louis Pasteur, 35, 29010 Málaga",
    description: "",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.313861364173!2d-4.4811915018006445!3d36.715022691025084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f74b9f3606f1%3A0x9fa32cc2e6b0bbf9!2sE.T.S.%20de%20Ingenier%C3%ADa%20Inform%C3%A1tica!5e0!3m2!1ses!2ses!4v1691019443359!5m2!1ses!2ses",
    perks: [],
    pictures: [],
    title: "E.T.S de Ingeniería Informática",
    city: "Málaga",
  },
  previousEditions: [],
  faq,
  codeOfConduct: "TODO",
  tickets,
  sponsors,
  speakers,
  events,
} as const satisfies Readonly<Data>;
