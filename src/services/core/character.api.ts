import { CharactersConfig } from "@/services/api.routes";
import getResponse from "../getResponse.api";

interface GetCharactersProps {
  offset?: number;
  limit?: number;
  nameStartsWith?: string;
  orderBy?: "name" | "modified" | "-name" | "-modified";
}

export const getCharacters = async (props: GetCharactersProps) => {
  const {
    offset = 0,
    limit = 20,
    nameStartsWith = "",
    orderBy = "name",
  } = props;

  return await getResponse({
    url: CharactersConfig.GET_CHARACTERS,
    params: {
      offset,
      limit,
      nameStartsWith,
      orderBy,
    },
  });
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
