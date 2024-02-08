import { CommonResouces, Creator, PaginationStats, Resource } from ".";

export interface StoriesData extends PaginationStats {
  results: StoryList[];
}

export interface StoryList {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  type: string;
  modified: string;
  thumbnail: any;
  creators: CommonResouces<Creator>;
  characters: CommonResouces<Resource>;
  series: CommonResouces<Resource>;
  comics: CommonResouces<Resource>;
  events: Event;
  originalIssue: Resource;
}
