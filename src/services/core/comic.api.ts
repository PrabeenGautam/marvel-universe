import { ComicsConfig } from "@/services/api.routes";
import getResponse from "../getResponse.api";
import { ComicsData, CharacterResponse } from "@/types";

interface GetComicsProps {
  offset?: number;
  limit?: number;
  titleStartsWith?: string;
}

export const getComics = async (props: GetComicsProps) => {
  const { offset = 0, limit = 20, titleStartsWith = "" } = props;

  return await getResponse({
    url: ComicsConfig.GET_COMICS,
    params: {
      offset,
      limit,
      titleStartsWith,
    },
  });
};

export const getComicById = async (id?: string): Promise<ComicsData> => {
  if (!id) throw new Error("Comic ID is required");

  const response = await getResponse({
    url: ComicsConfig.GET_COMIC_BY_ID(id),
  });

  return response.data;
};

export const getComicCharacters = async (
  id?: string,
): Promise<CharacterResponse> => {
  if (!id) throw new Error("Comic ID is required");

  const response = await getResponse({
    url: ComicsConfig.GET_COMIC_CHARACTERS(id),
  });

  return response.data;
};

export const getComicCreators = async (id: number) => {
  return await getResponse({
    url: ComicsConfig.GET_COMIC_CREATORS(id),
  });
};

export const getComicEvents = async (id: number) => {
  return await getResponse({
    url: ComicsConfig.GET_COMIC_EVENTS(id),
  });
};

export const getComicStories = async (id: number) => {
  return await getResponse({
    url: ComicsConfig.GET_COMIC_STORIES(id),
  });
};
