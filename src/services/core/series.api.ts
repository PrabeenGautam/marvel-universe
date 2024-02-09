import { SeriesConfig } from "@/services/api.routes";
import getResponse from "../getResponse.api";
import { SeriesData } from "@/types";

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

export const getSeriesById = async (id?: string): Promise<SeriesData> => {
  if (!id) {
    throw new Error("Series ID is required");
  }

  const response = await getResponse({
    url: SeriesConfig.GET_SERIES_BY_ID(id),
  });

  return response.data;
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
