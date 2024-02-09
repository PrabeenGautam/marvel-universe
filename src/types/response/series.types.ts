import {
  CommonResouces,
  Creator,
  PaginationStats,
  Resource,
  Story,
  Thumbnail,
  Url,
} from ".";

export interface SeriesData extends PaginationStats {
  results: SeriesTypes[];
}

export interface SeriesTypes {
  id: number;
  title: string;
  description: string | null;
  resourceURI: string;
  urls: Url[];
  startYear: number;
  endYear: number;
  rating: string;
  type: string;
  modified: string;
  thumbnail: Thumbnail;
  creators: CommonResouces<Creator>;
  characters: CommonResouces<Resource>;
  stories: CommonResouces<Story>;
  comics: CommonResouces<Resource>;
  events: CommonResouces<Resource>;
  next: null;
  previous: null;
}
