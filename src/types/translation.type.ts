export interface Translation {
  nav: {
    dashboard: string;
    series: string;
    about: string;
    contact: string;
  };
  home: {
    recentWork: string;
    featuredArtworks: string;
    viewSerie: string;
  };
  common: {
    view: string;
    loading: string;
    error: string;
    back: string;
  };
  series: {
    title: string;
    allSeries: string;
    artworksCount: string;
    description: string;
    viewSerie: string;
  };
  about: {
    title: string;
    biography: string;
    biographyText: string;
    exhibitions: string;
    awards: string;
    visualArtist: string;
    basedIn: string;
    artistJourney: string;
    creativeProcess: string;
    getInTouch: string;
    email: string;
    allRightsReserved: string;
  };
  contact: {
    title: string;
    getInTouch: string;
    name: string;
    email: string;
    message: string;
    send: string;
    success: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    sending: string;
    error: string;
    contactInformation: string;
    copied: string;
    sendMessage: string;
  };
  seriesDetails?: {
    formRelief?: string;
    sloops?: string;
    abstracts?: string;
  };
}
