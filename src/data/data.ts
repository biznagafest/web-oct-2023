import type {
  Data,
  Event,
  FAQ,
  Speaker,
  Sponsor,
  Team,
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
    name: "Álvaro López Sánchez",
    position: "R&D Engineer / Innovation, Fortris",
    picture: "/speakers/alvaro-lopez.jpeg",
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
  {
    name: "Irene M Morgado",
    position: "Head of Brand & Culture, Kairós Digital Solutions",
    picture: "/speakers/irene.jpg",
    descriptionParagraphs: [],
    socials: {
      mail: "irenemmorgado@gmail.com",
      linkedin: "https://www.linkedin.com/in/irenemmorgado/",
    },
  },
  {
    name: "Francisco Guerrero",
    position: "QA Manager & QA Coach",
    picture: "/speakers/fran-guerrero.jpeg",
    descriptionParagraphs: [
      "Fran Guerrero es un especialista certificado en Agile ISTQB con más de 12 años de experiencia en el campo de la Calidad del Software.",
      "Implementa procesos de prueba, estrategias de control de calidad, herramientas innovadoras y construye relaciones sólidas en todos los equipos.Su objetivo siempre es que su equipo se convierta en una parte esencial del proceso de Calidad del Software",
      "De vez en cuando, le gusta hablar en foros relacionados con QA y Testing sobre temas que incluyen Metodologías Ágiles, Test Automation y DevOps CI / CD.",
    ],
    socials: {
      mail: "fran.guerrero.sanchez@gmail.com",
      linkedin: "https://www.linkedin.com/in/franguerrero/",
    },
  },
  {
    name: "Sasha Denisov",
    position: "Chief Software Engineer",
    picture: "/speakers/denisov.png",
    descriptionParagraphs: [
      "Sasha is an experienced software developer with a rich background, in IT for more than 20 years.",
      "He worked with different stacks in backend, frontend and mobile fields, but since 2018 his main interest is Flutter.Sasha is a Chief Software Engineer and Head of Flutter Discipline in EPAM Systems.",
      "Also, he is Flutter and Dart GDE and Co- Organizer of Flutter Berlin community.",
    ],
    socials: {
      mail: "denisov.shureg@gmail.com",
      twitter: "https://twitter.com/ShuregDenisov",
    },
  },
  {
    name: "Alix Martínez Martínez",
    position: "Product design manager, Miro & ONUT",
    picture: "/speakers/alix.jpg",
    descriptionParagraphs: [
      "ONUT son Alix Martínez y Juan Real. Dos artistas multimedia residentes en los Países Bajos. Colaboran como ONUT desde 2016.",
      "Más de 20 años de experiencia en los campos de Diseño, Tecnología e Innovación.",
      "Desde startups a grandes corporaciones. Marcas como Fjord, Accenture, Vodafone, Ubuntu, Barclays, Tesco, Transport for London, Halifax, COS-H&M... Actualmente, ambos trabajan en Miro redefiniendo el espacio de la colaboración visual en grupo.",
      "ONUT es su vehículo de expresión. A través de su práctica artística reflexionan sobre el mundo en el que vivimos y cómo la tecnología afecta el comportamiento humano.",
    ],
    socials: {
      mail: "info@alixmzmz.eu",
      website: "https://www.alixmzmz.eu/",
      linkedin:
        "https://www.linkedin.com/in/alix-mart%C3%ADnez-mart%C3%ADnez-60037b19/",
    },
  },
  {
    name: "Juan Manuel Real Garry",
    position: "Product design manager, Miro & ONUT",
    picture: "/speakers/juanreal.jpeg",
    descriptionParagraphs: [
      "ONUT son Alix Martínez y Juan Real. Dos artistas multimedia residentes en los Países Bajos. Colaboran como ONUT desde 2016.",
      "Más de 20 años de experiencia en los campos de Diseño, Tecnología e Innovación.",
      "Desde startups a grandes corporaciones. Marcas como Fjord, Accenture, Vodafone, Ubuntu, Barclays, Tesco, Transport for London, Halifax, COS-H&M... Actualmente, ambos trabajan en Miro redefiniendo el espacio de la colaboración visual en grupo.",
      "ONUT es su vehículo de expresión. A través de su práctica artística reflexionan sobre el mundo en el que vivimos y cómo la tecnología afecta el comportamiento humano.",
    ],
    socials: {
      mail: "pheurton@gmail.com",
      website: "https://juanreal.com/",
      linkedin: "https://www.linkedin.com/in/juanreal/",
    },
  },
  {
    name: "Albert Sunyer",
    position: "Technical Account Manager",
    picture: "/speakers/albert.jpeg",
    descriptionParagraphs: [],
    socials: {
      mail: "sunyer@google.com",
    },
  },
  {
    name: "Alba Rivas",
    position: "Principal Developer Advocate at Salesforce",
    picture: "/speakers/albarivas.jpeg",
    descriptionParagraphs: [],
    socials: {
      twitter: "https://twitter.com/AlbaSFDC",
      linkedin: "https://www.linkedin.com/in/alba-rivas/",
      mail: "alba.azconarivas@gmail.com",
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
    speakers: ["Álvaro López Sánchez"],
    language: "Español",
  },
  {
    name: "A Developer Journey",
    descriptionInParagraphs: [
      "¿Sabes qué además de la UX existe toda una ciencia detrás de la Experiencia de Developers y otras personas que trabajan en empresas tech?",
      'Si tu empresa "presume" de cuidar bien a quienes trabajan en ella, seguro que tiene expertas y expertos en #EX(Employee Xperience) que trabajan para que tu día a día y la cultura de tu organización sea un éxito...o deberían.',
    ],
    durationInMinutes: 45,
    place: "auditorium",
    type: "lecture",
    speakers: ["Irene M Morgado"],
    language: "Español",
  },
  {
    name: "API Testing con herramientas CI/CD",
    descriptionInParagraphs: [
      "Las pruebas de API han sido un desafío para los probadores y herramientas como Postman han facilitado esta tarea gracias a la creación manual de colecciones de solicitudes. Pero, ¿cómo podemos configurar pruebas automatizadas de API usando Postman y lanzar estas pruebas en contenedores? No solo eso, sino también integrarlos en nuestras canalizaciones de CI/CD.",
      "En esta charla, Fran Guerrero explorará 3 puntos clave en la automatización de pruebas API con herramientas habituales como Postman: es decir, la creación de pruebas automatizadas desde Postman, cómo ejecutar tus recopilaciones de solicitudes y sus pruebas automatizadas usando Docker, así como los contenedores adecuados.para ellos y cómo las pruebas de API se integran en una canalización de CI / CD de una manera sencilla usando GitlabCI.",
    ],
    durationInMinutes: 45,
    place: "auditorium",
    type: "workshop",
    speakers: ["Francisco Guerrero"],
    language: "Español",
  },
  {
    name: "Compose Flutter Modules in your Android App",
    descriptionInParagraphs: [
      "Explore the process of embedding Flutter into existing Android applications in this live coding session.",
      "Learn how to seamlessly integrate Flutter with your native code, rendering multiple Flutter modules on a single screen and incorporating them into a Jetpack Compose hierarchy.",
      "Discover the techniques and best practices for successfully integrating Flutter into your Android app.Join us for this informative session and level up your app development skills.",
    ],
    durationInMinutes: 45,
    place: "auditorium",
    type: "workshop",
    speakers: ["Sasha Denisov"],
    language: "English",
  },
  {
    name: "Creatividad en la era de la IA: ¿Existe realmente la posibilidad de ser original?",
    descriptionInParagraphs: [
      "En esta charla profundizaremos en analíticas, anécdotas, caminos, herramientas prácticas y personas detrás del #EX, hablando concretamente del sector Tech.",
    ],
    durationInMinutes: 45,
    place: "auditorium",
    type: "lecture",
    speakers: ["Juan Manuel Real Garry", "Alix Martínez Martínez"],
    language: "Español",
  },
  {
    name: "ML API Skills",
    descriptionInParagraphs: [
      "In this game you will combine Vision API, Translation API, and Natural Language API, analyze images with the Vision API, perform text analysis with the Cloud Natural Language API, and use Kubernetes and Cloud Vision API to classify images from Reddit's /r/aww subreddit and displayed the results in a web app.",
    ],
    durationInMinutes: 45,
    place: "auditorium",
    type: "workshop",
    speakers: ["Albert Sunyer"],
    language: "Español",
  },
  {
    name: "¿Salesforce Developer?¿Quééé?",
    descriptionInParagraphs: [
      "El rol de Salesforce Developer está altamente demandado en el mercado laboral, pero a la vez, es un gran desconocido.",
      "En esta sesión os contaré a qué se dedica un Salesforce Developer, veremos qué lenguajes y herramientas se utilizan para crear aplicaciones en Salesforce, y, desde mi experiencia personal, os contaré las ventajas y retos que os podéis encontrar en el camino.",
    ],
    durationInMinutes: 45,
    place: "auditorium",
    type: "lecture",
    speakers: ["Alba Rivas"],
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
    name: "General",
    price: 18,
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
    isSoldOut: true,
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
    name: "Google",
    picture: "/sponsors/google.png",
    tier: "platinum",
    url: "https://google.com/",
    description: "google",
  },
  {
    name: "Fortris",
    picture: "/sponsors/fortris.svg",
    tier: "platinum",
    url: "https://fortris.com/",
    description: "fortris",
  },
  {
    name: "Freepik",
    picture: "/sponsors/freepik.png",
    tier: "silver",
    url: "https://www.freepik.com/",
    description: "freepik",
  },
  {
    name: "fillthegapp",
    picture: "/sponsors/fillthegapp.png",
    tier: "gold",
    url: "https://fillthegapp.com/",
    description: "Fill the Gapp",
  },
  {
    name: "PwC",
    picture: "/sponsors/pwc.png",
    tier: "gold",
    url: "https://www.pwc.com/",
    description: "PwC",
  },
  {
    name: "Verisk",
    picture: "/sponsors/verisk.png",
    tier: "gold",
    url: "https://www.verisk.com/",
    description: "Verisk",
  },
  {
    name: "CodeSpace",
    picture: "/sponsors/codespace.svg",
    tier: "media",
    url: "https://codespaceacademy.com/",
    description: "Code Space Academy",
  },
  {
    name: "DotTech",
    picture: "/sponsors/communities/dottech.svg",
    tier: "community",
    url: "https://www.youtube.com/@DotTechES",
    description: "Dottech",
  },
  {
    name: "Angular Málaga",
    picture: "/sponsors/communities/angularmalaga.svg",
    tier: "community",
    url: "https://angularmalaga.com/",
    description: "Angular Málaga",
  },
  {
    name: "GDG Jaén",
    picture: "/sponsors/communities/gdgjaen.svg",
    tier: "community",
    url: "https://gdg.community.dev/gdg-jaen/",
    description: "GDG Jaén",
  },
  {
    name: "VUE Málaga",
    picture: "/sponsors/communities/vuemalaga.webp",
    tier: "community",
    url: "https://www.vuemalaga.com/",
    description: "Vue Málaga",
  },
  {
    name: "Flutter Málaga",
    picture: "/sponsors/communities/fluttermalaga.jpeg",
    tier: "community",
    url: "https://www.meetup.com/es-ES/flutter-malaga/",
    description: "Flutter Málaga",
  },
  {
    name: "Yes We Tech",
    picture: "/sponsors/communities/yeswetech.jpg",
    tier: "community",
    url: "https://www.yeswetech.org/",
    description: "Yes We Tech",
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

const team = {
  organizers: [
    {
      name: "Jose Antonio Palacios",
      // TODO
      picture: "/team/jose-palacios.jpeg",
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
      picture: "/team/carlos-caballero.jpeg",
      descriptionInParagraphs: [
        "Es ingeniero informático y doctor en informática de la Universidad de Málaga.",
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
      picture: "/team/jose-barrera.jpeg",
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
        "Es un desarrollador de software especializado en tecnologías web como NestJs y Angular.",
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
      picture: "/team/inma-ortega.jpeg",
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
      picture: "/team/dani-olivet.jpeg",
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
    {
      name: "Alba Ruiz",
      picture: "/team/alba-ruiz.jpg",
      descriptionInParagraphs: [
        "Alba Ruiz es estudiante de ingeniería del Sofware en la Universidad de Málaga, Google Developer Student Club Lead y Women Techmakers Ambassador.",
      ],
      position: "GDSC Málaga",
      socials: {
        linkedin:
          "https://www.linkedin.com/in/alba-ruiz-guti%C3%A9rrez-63851b20a/",
        twitter: "https://twitter.com/AlbaRuizGutirr1",
      },
    },
  ],
  staff: [
    {
      name: "César Dasseville",
      picture: "/team/cesar-dasseville.jpg",
      descriptionInParagraphs: [
        "Apasionado por la tecnología, videojuegos y la naturaleza.",
      ],
      socials: {
        linkedin: "https://www.linkedin.com/in/cesardasseville",
      },
    },
    {
      name: "Basilio David Gómez",
      picture: "/team/basilio-gomez.jpg",
      descriptionInParagraphs: [
        "Soy un desarrollador movido por el amor a este nuevo mundo; la informática.",
        "Actualmente centrado en el desarrollo web, específicamente en el backend, usando tecnologías como NestJs.",
      ],
      position: "Software Developer, Max Gain Development.",
      socials: {
        linkedin:
          "https://www.linkedin.com/in/basilio-david-g%C3%B3mez-fern%C3%A1ndez-6a1631185/",
      },
    },
    {
      name: "Raúl Aguilar",
      picture: "/team/raul-aguilar.jpg",
      descriptionInParagraphs: [
        "Uno de los organizadores de la comunidad de Vue Málaga, amante del software libre y del baloncesto.",
      ],
      position: "Frontend Associate Engineer, Ebury",
    },
    {
      name: "Jesús Narbona",
      picture: "/team/jesus-narbona.jpg",
      descriptionInParagraphs: [
        "Uno de los organizadores de la comunidad de Vue Málaga, amante del software libre y del baloncesto.",
      ],
      position: "Full Stack Developer, Andy",
      socials: {
        linkedin: "https://www.linkedin.com/in/jesusnarbona",
        twitter: "https://x.com/im_only_yisus?t=noKX3hAfqPh8J0kITz3Zow&s=09",
      },
    },
  ],
} as const satisfies Team;

const gallery: string[] = [];

export const DATA: Data = {
  title: "BiznagaFest 2023",
  ticketsUrl:
    "https://www.eventbrite.es/e/entradas-biznagafest-2023-638556609007",
  date: new Date(2023, 9, 28),
  about: {
    descriptionInParagraphs: [
      'El BiznagaFest es el gran evento IT de la Costa del Sol para las comunidades "Google developers" de España, que se reúnen para ofrecer conferencias y workshops sobre Devops, Backend, Frontend, Chatbots, IA, Blockchain y soft skills.',
      "En su edición anterior asisitieron más de 500 personas a las 12 horas de ponencias y talleres.",
      "Por Biznaga fest han pasado grandes expertos que trabajan en las principales empresas tecnológicas nacionales e internacionales, como Google, Virus Total, Deloitte, Red Hat, Chainalysis, Sngular, entre otros.",
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
        "Línea 1 (Andalucía Tech - El Perchel) - Parada Hospital Clínico",
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
