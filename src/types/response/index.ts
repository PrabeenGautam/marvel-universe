import { CharacterData } from "./character.types";

export interface CharactersType {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: CharacterData;
}
