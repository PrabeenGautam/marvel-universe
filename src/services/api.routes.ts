export const CharactersConfig = {
  KEY: "CHARACTER",
  GET_CHARACTERS: "/characters",
  GET_CHARACTER_BY_ID: (id: number) => `/characters/${id}`,
  GET_CHARACTER_COMICS: (id: number) => `/characters/${id}/comics`,
  GET_CHARACTER_EVENTS: (id: number) => `/characters/${id}/events`,
  GET_CHARACTER_SERIES: (id: number) => `/characters/${id}/series`,
  GET_CHARACTER_STORIES: (id: number) => `/characters/${id}/stories`,
};

export const ComicsConfig = {
  KEY: "COMICS",
  GET_COMICS: "/comics",
  GET_COMIC_BY_ID: (id: number) => `/comics/${id}`,
  GET_COMIC_CHARACTERS: (id: number) => `/comics/${id}/characters`,
  GET_COMIC_CREATORS: (id: number) => `/comics/${id}/creators`,
  GET_COMIC_EVENTS: (id: number) => `/comics/${id}/events`,
  GET_COMIC_STORIES: (id: number) => `/comics/${id}/stories`,
};

export const SeriesConfig = {
  KEY: "SERIES",
  GET_SERIES: "/series",
  GET_SERIES_BY_ID: (id: number) => `/series/${id}`,
  GET_SERIES_CHARACTERS: (id: number) => `/series/${id}/characters`,
  GET_SERIES_CREATORS: (id: number) => `/series/${id}/creators`,
  GET_SERIES_EVENTS: (id: number) => `/series/${id}/events`,
  GET_SERIES_STORIES: (id: number) => `/series/${id}/stories`,
};

export const StoriesConfig = {
  KEY: "STORIES",
  GET_STORIES: "/stories",
  GET_STORY_BY_ID: (id: number) => `/stories/${id}`,
  GET_STORY_CHARACTERS: (id: number) => `/stories/${id}/characters`,
  GET_STORY_COMICS: (id: number) => `/stories/${id}/comics`,
  GET_STORY_EVENTS: (id: number) => `/stories/${id}/events`,
  GET_STORY_SERIES: (id: number) => `/stories/${id}/series`,
};
