import { CharacterData } from "@/types/response/character.types";
import CharacterCard from "../card/CharacterCard";

interface Props {
  characters: CharacterData;
}

function CharacterGrid({ characters }: Props) {
  return (
    <div className="xs:grid-cols-2 grid gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {characters.results.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharacterGrid;
