import { CharactersConfig } from "@/services/api.routes";
import getResponse from "../getResponse.api";
import { CharacterResponse } from "@/types/response/character.types";

import { SortType } from "@/types";

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

  return response.data.data;
};

export const getCharacterById = async (id: number) => {
  return await getResponse({
    url: CharactersConfig.GET_CHARACTER_BY_ID(id),
  });
};

export const getCharacterComics = async (id: number) => {
  return await getResponse({
    url: CharactersConfig.GET_CHARACTER_COMICS(id),
  });
};

export const getCharacterEvents = async (id: number) => {
  return await getResponse({
    url: CharactersConfig.GET_CHARACTER_EVENTS(id),
  });
};

export const getCharacterSeries = async (id: number) => {
  return await getResponse({
    url: CharactersConfig.GET_CHARACTER_SERIES(id),
  });
};

export const getCharacterStories = async (id: number) => {
  return await getResponse({
    url: CharactersConfig.GET_CHARACTER_STORIES(id),
  });
};
