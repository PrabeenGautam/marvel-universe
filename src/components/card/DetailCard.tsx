import { Thumbnail } from "@/types";
import Image from "../shared/Image";
import getCharacterThumbnail from "@/helpers/getCharacterThumbnai;";

interface Props {
  title: string;
  description: string;
  thumbnail?: Thumbnail | null;
}

function DetailCard({ title, description, thumbnail }: Props) {
  const image = getCharacterThumbnail(thumbnail);

  return (
    <div className="group cursor-pointer">
      {
        <div className="img-wrapper h-auto w-full overflow-hidden bg-black">
          <Image
            src={image || "/static/no-image.png"}
            alt={title}
            className="aspect-2/3 object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          {/* {image ? (
            <Image
              src={image}
              alt={title}
              className="aspect-2/3 object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          ) : (
            <div className="flex-center aspect-2/3">No image</div>
          )} */}
        </div>
      }

      <div className="mt-3 flex flex-col gap-1">
        <a href="#" className="title font-medium group-hover:text-red-500">
          {title}
        </a>
        {description && (
          <span className="description line-clamp-2 text-sm">
            {description}
          </span>
        )}
      </div>
    </div>
  );
}

export default DetailCard;
