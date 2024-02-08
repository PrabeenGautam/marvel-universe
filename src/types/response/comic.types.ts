import { Url } from "url";
import { CommonResouces, PaginationStats, Resource, Story, Thumbnail } from ".";

interface TextObject {
  type: string;
  language: string;
  text: string;
}

interface DateObject {
  type: string;
  date: string;
}

interface Price {
  type: string;
  price: number;
}

interface Creator {
  resourceURI: string;
  name: string;
  role: string;
}

interface CreatorList {
  available: number;
  collectionURI: string;
  items: Creator[];
  returned: number;
}

interface Character {
  resourceURI: string;
  name: string;
}

interface Comic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: Url[];
  series: Resource;
  variants: any[];
  collections: any[];
  collectedIssues: any[];
  dates: DateObject[];
  prices: Price[];
  thumbnail: Thumbnail;
  images: Thumbnail[];
  creators: CreatorList;
  characters: CommonResouces<Character>;
  stories: CommonResouces<Story>;
  events: CommonResouces<Resource>;
}

export interface ComicsData extends PaginationStats {
  results: Comic[];
}
