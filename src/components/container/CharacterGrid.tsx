import { CharacterType } from "@/types/response/character.types";
import CharacterCard from "../card/CharacterCard";
import NoResult from "../shared/NoResult";

interface Props {
  characters: CharacterType[];
}

function CharacterGrid({ characters }: Props) {
  const length = characters.length;

  if (length === 0) {
    return (
      <NoResult
        title="No Characters Found"
        description="We couldn't find any characters that match your search criteria. It's possible that the search query you entered doesn't match any existing characters in our database."
      />
    );
  }

  return (
    <div className="grid gap-x-2 gap-y-6 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharacterGrid;
