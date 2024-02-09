// CharacterGrid.js
import { CharacterResponse } from "@/types";
import { Fragment, useCallback } from "react";
import { InfiniteData } from "@tanstack/react-query";

import CharacterCard from "../card/CharacterCard";
import { CardSkeletonBase } from "../skeleton/CardSkeletonClip";

interface CharacterGridProps {
  data: InfiniteData<CharacterResponse, unknown> | undefined;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
}

function CharacterGridInfinite({
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: CharacterGridProps) {
  const cardRef = useCallback(
    (card: HTMLDivElement) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
            observer.unobserve(card);
            fetchNextPage();
          }
        },
        { threshold: 1 },
      );

      observer.observe(card);
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage],
  );

  return (
    <div className="grid gap-x-2 gap-y-6 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {data &&
        data.pages.map((page, pageIndex) => (
          <Fragment key={`infinite-card-${pageIndex}`}>
            {page.results.map((character, index, array) => (
              <div
                key={character.id}
                className="flex"
                ref={index === array.length - 1 ? cardRef : undefined}
              >
                <CharacterCard character={character} />
              </div>
            ))}
          </Fragment>
        ))}

      {isFetchingNextPage && <CardSkeletonBase />}
    </div>
  );
}

export default CharacterGridInfinite;
