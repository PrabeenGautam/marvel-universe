import { ComicsConfig } from "@/services/api.routes";
import getResponse from "../getResponse.api";

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

export const getComicById = async (id: number) => {
  return await getResponse({
    url: ComicsConfig.GET_COMIC_BY_ID(id),
  });
};

export const getComicCharacters = async (id: number) => {
  return await getResponse({
    url: ComicsConfig.GET_COMIC_CHARACTERS(id),
  });
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
