import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import Image from "../shared/Image";

interface Props {
  src: string;
  alt?: string;
}

/**
 * Component to render an image with a hover effect.
 * Displays the image with a hoverable card containing the same image.
 */
function ImageHoverCard({ src, alt = "thumbnail" }: Props) {
  return (
    <HoverCard openDelay={100}>
      <HoverCardTrigger>
        <Image src={src} alt={alt} className="aspect-square w-10 rounded-md" />
      </HoverCardTrigger>
      <HoverCardContent className="border-none bg-gray-800 p-2">
        <Image
          src={src}
          alt={alt}
          className="aspect-square w-full rounded-md"
        />
      </HoverCardContent>
    </HoverCard>
  );
}

export default ImageHoverCard;
