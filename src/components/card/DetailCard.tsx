import { Thumbnail } from "@/types";
import Image from "../shared/Image";
import getThumbnailUrl from "@/helpers/getThumbnailUrl";
import DetailContainer from "../container/DetailContainer";

interface Props {
  title: string;
  description: string;
  thumbnail?: Thumbnail | null | undefined;
  link?: string;
}

/**
 * Component to render a detail card.
 * Displays the title, description, and an optional thumbnail.
 * Applies hover effects for interactive elements.
 */
function DetailCard({ title, description, thumbnail, link }: Props) {
  const image = getThumbnailUrl(thumbnail);

  return (
    <DetailContainer to={link}>
      <div className="img-wrapper aspect-[1/1.537] overflow-hidden rounded-md bg-black lg:min-h-72">
        <Image
          src={image}
          alt={title}
          className="h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>

      <div className="mt-3 flex flex-col gap-1">
        <a href="#" className="title font-medium group-hover:text-red-500">
          {title}
        </a>

        {/* Render description if available */}
        {description && (
          <span className="description line-clamp-2 text-sm">
            {description}
          </span>
        )}
      </div>
    </DetailContainer>
  );
}

export default DetailCard;
