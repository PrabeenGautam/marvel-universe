import { Url } from "url";
import {
  CommonResouces,
  PaginationStats,
  Resource,
  Story,
  Thumbnail,
  Creator,
} from ".";

interface TextObject {
  type: string;
  language: string;
  text: string;
}

export interface DateObject {
  type: string;
  date: string;
}

interface Price {
  type: string;
  price: number;
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
  creators: CommonResouces<Creator>;
  characters: CommonResouces<Resource>;
  stories: CommonResouces<Story>;
  events: CommonResouces<Resource>;
}

export interface ComicsData extends PaginationStats {
  results: Comic[];
}
