import { Fragment } from "react";
import NoResult from "../shared/NoResult";
import { CharacterResponse } from "@/types";
import CharacterCard from "../card/CharacterCard";

interface Props {
  response: CharacterResponse[];
}

function CharacterInfiniteGrid({ response }: Props) {
  // Render a message if no characters are found
  if (response.length === 0) {
    return (
      <NoResult
        title="No Characters Found"
        description="We couldn't find any characters that match your search criteria. It's possible that the search query you entered doesn't match any existing characters in our database."
      />
    );
  }

  return (
    <div className="grid gap-x-2 gap-y-6 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {response.map((page, pageIndex) => (
        <Fragment key={`infinite-card-${pageIndex}`}>
          {page.results.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </Fragment>
      ))}
    </div>
  );
}

export default CharacterInfiniteGrid;
