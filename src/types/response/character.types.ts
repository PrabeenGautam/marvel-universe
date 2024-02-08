import { Url } from "url";
import {
  PaginationStats,
  Resource,
  Thumbnail,
  CommonResouces,
  Story,
} from "..";

export interface CharacterType {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: CommonResouces<Resource>;
  series: CommonResouces<Resource>;
  stories: CommonResouces<Story>;
  events: CommonResouces<Resource>;
  urls: Url[];
}

export interface CharacterResponse extends PaginationStats {
  results: CharacterType[];
}
