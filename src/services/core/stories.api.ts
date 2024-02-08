import { StoriesConfig } from "@/services/api.routes";
import getResponse from "../getResponse.api";

interface GetStoriesProps {
  offset?: number;
  limit?: number;
  titleStartsWith?: string;
}

export const getStories = async (props: GetStoriesProps) => {
  const { offset = 0, limit = 20, titleStartsWith = "" } = props;

  return await getResponse({
    url: StoriesConfig.GET_STORIES,
    params: {
      offset,
      limit,
      titleStartsWith,
    },
  });
};

export const getStoryById = async (id: number) => {
  return await getResponse({
    url: StoriesConfig.GET_STORY_BY_ID(id),
  });
};

export const getStoryCharacters = async (id: number) => {
  return await getResponse({
    url: StoriesConfig.GET_STORY_CHARACTERS(id),
  });
};

export const getStoryComics = async (id: number) => {
  return await getResponse({
    url: StoriesConfig.GET_STORY_COMICS(id),
  });
};

export const getStoryEvents = async (id: number) => {
  return await getResponse({
    url: StoriesConfig.GET_STORY_EVENTS(id),
  });
};

export const getStorySeries = async (id: number) => {
  return await getResponse({
    url: StoriesConfig.GET_STORY_SERIES(id),
  });
};
