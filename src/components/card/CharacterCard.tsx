import { CharacterType } from "@/types/response/character.types";
import Image from "../shared/Image";
import { Link } from "react-router-dom";

interface Props {
  character: CharacterType;
}

function CharacterCard({ character }: Props) {
  const { path, extension } = character.thumbnail;

  return (
    <Link
      to={`/character/${character.id}`}
      className="hover-full clip-border group flex flex-col overflow-hidden rounded-md bg-black"
    >
      <div className="img-wrapper h-52 w-full overflow-hidden">
        <Image
          src={`${path}.${extension}`}
          alt={character.name}
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      <div className="flex-1">
        <div className="h-1 bg-red-500" />
        <div className="flex h-full flex-col justify-between space-y-3 px-4 py-6">
          <h2 className="text-lg font-bold  uppercase text-white">
            {character.name}
          </h2>
          <p className="line-clamp-2 text-sm text-[#bbb]">
            {character.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CharacterCard;
