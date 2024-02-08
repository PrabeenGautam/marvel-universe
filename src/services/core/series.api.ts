import { SeriesConfig } from "@/services/api.routes";
import getResponse from "../getResponse.api";

interface GetSeriesProps {
  offset?: number;
  limit?: number;
  titleStartsWith?: string;
}

export const getSeries = async (props: GetSeriesProps) => {
  const { offset = 0, limit = 20, titleStartsWith = "" } = props;

  return await getResponse({
    url: SeriesConfig.GET_SERIES,
    params: {
      offset,
      limit,
      titleStartsWith,
    },
  });
};

export const getSeriesById = async (id: number) => {
  return await getResponse({
    url: SeriesConfig.GET_SERIES_BY_ID(id),
  });
};

export const getSeriesCharacters = async (id: number) => {
  return await getResponse({
    url: SeriesConfig.GET_SERIES_CHARACTERS(id),
  });
};

export const getSeriesCreators = async (id: number) => {
  return await getResponse({
    url: SeriesConfig.GET_SERIES_CREATORS(id),
  });
};

export const getSeriesEvents = async (id: number) => {
  return await getResponse({
    url: SeriesConfig.GET_SERIES_EVENTS(id),
  });
};

export const getSeriesStories = async (id: number) => {
  return await getResponse({
    url: SeriesConfig.GET_SERIES_STORIES(id),
  });
};
