export interface MarvelResponse<T> {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: T;
}

export interface PaginationStats {
  offset: number;
  limit: number;
  total: number;
  count: number;
}

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

export interface CommonResouces<T> {
  available: number;
  collectionURI: string;
  items: T[];
  returned: number;
}

export interface Creator {
  resourceURI: string;
  name: string;
  role: string;
}
