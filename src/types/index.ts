export * from "./response";

export interface CharacterReduceType {
  id: number;
  name: string;
}

export type SortType = "name" | "modified" | "-name" | "-modified";
