export interface Destination {
  from: string;
  origin: string;
  continent: string;
  tag: string;
  name: string;
  img: string; // small preview
  bigImg: string;
  about: string;
  slogan: string;
  planProgram: { day: number; title: string; details: string }[];
  departures: {
    polazak: string;
    povratak: string;
    dana: string;
    price: string;
    link: string;
  }[];
  included: { icon: string; title: string; info: string }[];
  notIncluded: string;
  media: {
    images: string[];
    videos: string[];
  };
  usefulInfo: string;
  similarTrips: string[];
}
