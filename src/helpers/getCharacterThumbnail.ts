import { Thumbnail } from "@/types";

function getCharacterThumbnail(thumbnail: Thumbnail | null | undefined) {
  if (!thumbnail)
    return "https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";

  const { path, extension } = thumbnail;
  return `${path}.${extension}`;
}

export default getCharacterThumbnail;
