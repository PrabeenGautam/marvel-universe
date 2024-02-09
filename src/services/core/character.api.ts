import { CharactersConfig } from "@/services/api.routes";
import getResponse from "../getResponse.api";
import { CharacterResponse } from "@/types/response/character.types";

import { SortType } from "@/types";
import { ComicsData, SeriesData, StoriesData } from "@/types/response";

interface GetCharactersProps {
  page: number;
  limit?: number;
  nameStartsWith?: string;
  orderBy?: SortType;
}

export const getCharacters = async (
  props: GetCharactersProps,
): Promise<CharacterResponse> => {
  const { page = 1, limit = 20, nameStartsWith, orderBy = "name" } = props;

  const offset = (page - 1) * limit;
  const params = { offset, limit, orderBy } as any;

  if (nameStartsWith) {
    params["nameStartsWith"] = nameStartsWith;
  }

  const response = await getResponse({
    url: CharactersConfig.GET_CHARACTERS,
    params,
  });

  return response.data;
};

export const getCharacterById = async (
  id?: string,
): Promise<CharacterResponse> => {
  if (!id) throw new Error("Character ID is required");

  const response = await getResponse({
    url: CharactersConfig.GET_CHARACTER_BY_ID(id),
  });

  return response.data;
};

export const getCharacterComics = async (id?: string): Promise<ComicsData> => {
  if (!id) throw new Error("Character ID is required");

  const response = await getResponse({
    url: CharactersConfig.GET_CHARACTER_COMICS(id),
  });

  return response.data;
};

export const getCharacterEvents = async (id?: string) => {
  if (!id) throw new Error("Character ID is required");

  const response = await getResponse({
    url: CharactersConfig.GET_CHARACTER_EVENTS(id),
  });

  return response.data;
};

export const getCharacterSeries = async (id?: string): Promise<SeriesData> => {
  if (!id) throw new Error("Character ID is required");

  const response = await getResponse({
    url: CharactersConfig.GET_CHARACTER_SERIES(id),
  });

  return response.data;
};

export const getCharacterStories = async (
  id?: string,
): Promise<StoriesData> => {
  if (!id) throw new Error("Character ID is required");

  const response = await getResponse({
    url: CharactersConfig.GET_CHARACTER_STORIES(id),
  });

  return response.data;
};
