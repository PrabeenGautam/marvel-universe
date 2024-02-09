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

export const getCharacters = async (props: GetCharactersProps) => {
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

  return response.data as CharacterResponse;
};

export const getCharacterViaOffset = async (queryOptions: any) => {
  const offset = queryOptions?.pageParam || 0;

  const response = await getResponse({
    url: CharactersConfig.GET_CHARACTERS,
    params: { offset },
  });

  return response.data as CharacterResponse;
};

export const getCharacterById = async (id?: string) => {
  if (!id) throw new Error("Character ID is required");

  const response = await getResponse({
    url: CharactersConfig.GET_CHARACTER_BY_ID(id),
  });

  return response.data as CharacterResponse;
};

export const getCharacterComics = async (id?: string) => {
  if (!id) throw new Error("Character ID is required");

  const response = await getResponse({
    url: CharactersConfig.GET_CHARACTER_COMICS(id),
  });

  return response.data as ComicsData;
};

export const getCharacterEvents = async (id?: string) => {
  if (!id) throw new Error("Character ID is required");

  const response = await getResponse({
    url: CharactersConfig.GET_CHARACTER_EVENTS(id),
  });

  return response.data;
};

export const getCharacterSeries = async (id?: string) => {
  if (!id) throw new Error("Character ID is required");

  const response = await getResponse({
    url: CharactersConfig.GET_CHARACTER_SERIES(id),
  });

  return response.data as SeriesData;
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
