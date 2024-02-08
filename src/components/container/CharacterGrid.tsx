import { CharacterType } from "@/types/response/character.types";
import CharacterCard from "../card/CharacterCard";

interface Props {
  characters: CharacterType[];
}

function CharacterGrid({ characters }: Props) {
  return (
    <div className="grid gap-x-4 gap-y-8 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharacterGrid;
