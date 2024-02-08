import { Thumbnail } from "@/types/response/character.types";

function getCharacterThumbnail(thumbnail: Thumbnail) {
  if (!thumbnail) return "";
  const { path, extension } = thumbnail;
  return `${path}.${extension}`;
}

export default getCharacterThumbnail;
