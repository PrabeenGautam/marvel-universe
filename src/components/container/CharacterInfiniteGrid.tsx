import { Fragment } from "react";
import { CharacterResponse } from "@/types";
import CharacterCard from "../card/CharacterCard";

interface Props {
  response: CharacterResponse[];
}

function CharacterInfiniteGrid({ response }: Props) {
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
