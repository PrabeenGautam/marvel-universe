import { PaginationStats } from "..";

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Resource {
  resourceURI: string;
  name: string;
}

export interface Story {
  resourceURI: string;
  name: string;
  type: string;
}

export interface Url {
  type: string;
  url: string;
}

export interface CharacterType {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: {
    available: number;
    collectionURI: string;
    items: Resource[];
    returned: number;
  };
  series: {
    available: number;
    collectionURI: string;
    items: Resource[];
    returned: number;
  };
  stories: {
    available: number;
    collectionURI: string;
    items: Story[];
    returned: number;
  };
  events: {
    available: number;
    collectionURI: string;
    items: Event[];
    returned: number;
  };
  urls: Url[];
}

export interface CharacterData extends PaginationStats {
  results: CharacterType[];
}
