import { CharacterData } from "@/types/response/character.types";
import CharacterCard from "../card/CharacterCard";

interface Props {
  characters: CharacterData;
}

function CharacterGrid({ characters }: Props) {
  return (
    <div className="grid grid-cols-5 gap-x-4 gap-y-8">
      {characters.results.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharacterGrid;
