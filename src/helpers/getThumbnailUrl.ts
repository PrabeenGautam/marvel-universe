import { Thumbnail } from "@/types";

/**
 * Generates the URL for the character's thumbnail image.
 * @param thumbnail - The thumbnail object of the character.
 * @returns The URL of the character's thumbnail image.
 */
function getThumbnailUrl(thumbnail: Thumbnail | null | undefined) {
  if (!thumbnail)
    return "https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";

  const { path, extension } = thumbnail;
  return `${path}.${extension}`;
}

export default getThumbnailUrl;
