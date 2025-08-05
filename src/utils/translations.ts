import type { Translation } from "../types";

export const translations: Record<"pt" | "en", Translation> = {
  pt: {
    nav: {
      dashboard: "Dashboard",
      series: "Séries da Artista",
      about: "Sobre",
      contact: "Contato",
    },
    home: {
      recentWork: "Trabalho Recente",
      featuredArtworks: "Obras em Destaque",
      viewSerie: "Ver Série",
    },
    common: {
      view: "Ver",
      loading: "Carregando...",
      error: "Erro ao carregar",
      back: "Voltar",
    },
    series: {
      title: "Séries",
      allSeries: "Todas as Séries",
      artworksCount: "obras",
      description:
        "Explore a diversa gama de séries da artista, cada uma apresentando um tema e estilo únicos. Mergulhe nas galerias para descobrir obras individuais dentro de cada série.",
      viewSerie: "Ver Série",
    },
    about: {
      title: "Sobre a Artista",
      biography: "Biografia",
      biographyText: `Nasci em Gandu, situada na região cacaueira do Sul da Bahia. Ainda criança, tive os primeiros contatos com tintas e pincéis, guiada pelo olhar atento da professora Ismênia, uma estimada tia – cuja presença marcante na minha vida foi um farol e inspiração, desde o início da minha caminhada.
Após concluir o curso de Letras, mergulhei no universo denso e fascinante dos escritores realistas – cujas temáticas marcadas por humanidade e crítica social, passaram a habitar o meu imaginário e hoje reverberam nas minhas obras.
Mais tarde, realizei o tão sonhado encontro com as Artes Plásticas, e na Pintura descobri a linguagem capaz de desnudar alma e revelar a minha visão de mundo. Por meio das cores e das formas, dou corpo à memória, ao tempo, ao aspecto cultural e à paisagem baiana a qual tanto me inspira.`,
      exhibitions: "Algumas Exposições",
      awards: "Obras Institucionalizadas",
      visualArtist: "Artista Plástica",
      basedIn: "Reside em",
      artistJourney: "Trajetória Artística",
      creativeProcess: "Processo Criativo",
      creativeProcessDescription: `Minha pintura nasce do gesto. Entre pinceladas firmes e a dança da espátula, dou forma a paisagens, memórias e afetos que emergem da minha vivência com a Bahia. Trabalho com camadas espessas de tinta a óleo, sobrepostas com as marcas do tempo sobre as fachadas da cidade. São relevos que se entrelaçam, se tocam, se completam – construindo, aos poucos, uma poesia visual tátil, quase tridimensional.
A espátula, com sua força e espontaneidade, imprime movimento e textura. O pincel, por sua vez desenha os detalhes, as nuances de luz, os contornos da emoção. Entre esses dois instrumentos, acontece um diálogo silencioso onde o acaso tem lugar e o instante ganha corpo.
Cada tela é um processo intuitivo, quase ritualístico, onde a matéria se torna linguagem. Não busco apenas representar: busco revelar – o invisível que habita a cena, o silêncio que há entre os saveiros, o sopro de vida nas cores da feira, os vestígios da história nas paredes do Mercado.
Minha arte se ancora na cultura baiana, mas não se limita a ela: ela é memória, identidade e tempo pulsando em cor. É uma maneira de contar histórias com camadas, relevos e ritmos próprios. Pintar para mim é desnudar a alma e deixá-la ressoar na superfície da tela.`,
      getInTouch: "Entre em Contato",
      email: "E-mail",
      allRightsReserved: "Todos os direitos reservados.",
      portfolio: "Portfólio",
      viewSloopsPortfolio: "Ver Portfólio de Saveiros",
      viewBlackWomenPortfolio: "Ver Portfólio de Mulheres Negras",
    },
    contact: {
      title: "Contato",
      getInTouch: "Entre em Contato",
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      send: "Enviar",
      success: "Mensagem enviada com sucesso!",
      namePlaceholder: "Seu nome",
      emailPlaceholder: "seu.email@exemplo.com",
      messagePlaceholder: "Sua mensagem...",
      sending: "Enviando...",
      error: "Erro ao enviar mensagem. Tente novamente.",
      contactInformation: "Informações de Contato",
      copied: "Copiado!",
      sendMessage: "Enviar Mensagem",
    },
    seriesDetails: {
      formRelief:
        "Uma série que explora a beleza das formas e relevos naturais.",
      sloops: "Uma série que captura a essência dos saveiros na Bahia.",
      abstracts: "Uma série que explora a interação entre cores e formas.",
      blackWomen:
        "Uma série que celebra a beleza e a força das mulheres negras.",
    },
  },
  en: {
    nav: {
      dashboard: "Dashboard",
      series: "Artist's Series",
      about: "About",
      contact: "Contact",
    },
    home: {
      recentWork: "Recent Work",
      featuredArtworks: "Featured Artworks",
      viewSerie: "View Serie",
    },
    common: {
      view: "View",
      loading: "Loading...",
      error: "Error loading",
      back: "Back",
    },
    series: {
      title: "Series",
      allSeries: "All Series",
      artworksCount: "artworks",
      description:
        "Explore the diverse range of artistic series, each showcasing a unique theme and style. Dive into the galleries to discover individual artworks within each serie.",
      viewSerie: "View Serie",
    },
    about: {
      title: "About the Artist",
      biography: "Biography",
      biographyText: `I was born in Gandu, located in the cocoa-growing region of southern Bahia. As a child, I had my first contact with paints and brushes, guided by the watchful eye of Professor Ismênia, a dear aunt – whose remarkable presence in my life was a beacon and inspiration, from the beginning of my journey.
After completing my degree in Literature, I immersed myself in the dense and fascinating universe of realist writers – whose themes, marked by humanity and social criticism, began to inhabit my imagination and today reverberate in my works.
Later, I realized the long-awaited encounter with the Visual Arts, and in Painting I discovered the language capable of baring the soul and revealing my vision of the world.`,
      exhibitions: "Some Exhibitions",
      awards: "Institutionalized Works",
      visualArtist: "Fine Artist",
      basedIn: "Reside in",
      artistJourney: "Artistic Journey",
      creativeProcess: "Creative Process",
      creativeProcessDescription: `My painting is born of gesture. Between firm brushstrokes and the dance of the palette knife, I shape landscapes, memories, and affections that emerge from my experience with Bahia. I work with thick layers of oil paint, overlaid with the marks of time on the city's facades. These reliefs intertwine, touch, and complement each other—gradually constructing a tactile, almost three-dimensional visual poetry.
The palette knife, with its strength and spontaneity, imprints movement and texture. The brush, in turn, draws the details, the nuances of light, the contours of emotion. Between these two instruments, a silent dialogue takes place where chance finds its place and the moment takes shape.
Each canvas is an intuitive, almost ritualistic process, where matter becomes language. I seek not only to represent: I seek to reveal—the invisible that inhabits the scene, the silence between the saveiros, the breath of life in the colors of the fair, the traces of history on the walls of the market.
My art is anchored in Bahian culture, but not limited to it: it is memory, identity, and time pulsating in color. It's a way of telling stories with layers, reliefs, and rhythms of its own. Painting, for me, is about baring the soul and letting it resonate on the surface of the canvas.`,
      getInTouch: "Get in Touch",
      email: "Email",
      allRightsReserved: "All rights reserved.",
      portfolio: "Portfolio",
      viewSloopsPortfolio: "View Sloops Portfolio",
      viewBlackWomenPortfolio: "View Black Women Portfolio",
    },
    contact: {
      title: "Contact",
      getInTouch: "Get in Touch",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      success: "Message sent successfully!",
      namePlaceholder: "Your name",
      emailPlaceholder: "your.email@example.com",
      messagePlaceholder: "Your message...",
      sending: "Sending...",
      error: "Error sending message. Please try again.",
      contactInformation: "Contact Information",
      copied: "Copied!",
      sendMessage: "Send Message",
    },
    seriesDetails: {
      formRelief:
        "A series that explores the beauty of natural shapes and reliefs.",
      sloops: "A series that captures the essence of the saveiros in Bahia.",
      abstracts:
        "A series that explores the interaction between colors and forms.",
      blackWomen:
        "A series that celebrates the beauty and strength of black women.",
    },
  },
};
