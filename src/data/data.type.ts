import type { Nullish } from "../utils/nullish";
import type { DATA, speakers } from "./data";

export type Socials = Nullish<
  Partial<{
    twitter: string;
    youtube: string;
    linkedin: string;
    website: string;
    mastodon: string;
    github: string;
    medium: string;
    mail: string;
    instagram: string;
    devto: string;
    twitch: string;
  }>
>;
export type Speaker = {
  name: string;
  position?: Nullish<string>;
  descriptionParagraphs: ReadonlyArray<string>;
  socials?: Socials;
  picture: string;
};

interface Organizer {
  name: string;
  position?: Nullish<string>;
  description?: Nullish<string>;
  socials?: Socials;
  picture: string;
}

interface Staff {
  name: string;
  position?: Nullish<string>;
  description?: Nullish<string>;
  socials?: Socials;
  picture: string;
}

export type SponsorTier =
  | "platinum"
  | "gold"
  | "silver"
  | "bronze"
  | "media"
  | "food"
  | "community"
  | "supporter";

export interface Sponsor {
  name: string;
  tier: SponsorTier;
  description?: Nullish<string>;
  picture: string;
  url: string;
}

export interface Ticket {
  name: string;
  price: number;
  url: string;
  perks: ReadonlyArray<string>;
  isSoldOut?: Nullish<boolean>;
  notice?: Nullish<string>;
}

export interface FAQ {
  title: string;
  body: string;
}

interface PreviousEdition {
  name: string;
  date: Date;
  picture: string;
  url: string;
}

export interface Event {
  name: string;
  type: "lecture" | "workshop";
  speakers: ReadonlyArray<(typeof speakers)[number]["name"]>;
  descriptionInParagraphs: ReadonlyArray<string>;
  durationInMinutes?: Nullish<number>;
  place?: Nullish<string>;
  date?: Nullish<string>;
  language?: Nullish<string>;
}

export type Data = {
  title: string;
  date: Date;
  ticketsUrl: string;
  about: {
    lengthInHours: number;
    attendees: number;
    description: string;
    socials?: Socials;
  };
  venue: {
    title: string;
    description: string;
    address: string;
    mapUrl: string;
    perks: ReadonlyArray<string>;
    pictures: ReadonlyArray<string>;
    city: string;
  };
  speakers: ReadonlyArray<Speaker>;
  team: {
    organizers: ReadonlyArray<Organizer>;
    staff: ReadonlyArray<Staff>;
  };
  sponsors: ReadonlyArray<Sponsor>;
  events: ReadonlyArray<Event>;
  tickets: ReadonlyArray<Ticket>;
  previousEditions: ReadonlyArray<PreviousEdition>;
  lastEditionVideoUrl: string;
  faq: ReadonlyArray<FAQ>;
  codeOfConduct: string;
};
