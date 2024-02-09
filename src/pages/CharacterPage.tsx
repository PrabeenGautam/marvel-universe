import { useInfiniteQuery } from "@tanstack/react-query";

import Header from "@/components/shared/Header";
import Container from "@/components/container/Container";
import CardSkeletonClip from "@/components/skeleton/CardSkeletonClip";
import { getCharacterViaOffset } from "@/services/core/character.api";
import React from "react";
import CharacterInfiniteGrid from "@/components/container/CharacterInfiniteGrid";

function CharacterPage() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["characters"],
    queryFn: getCharacterViaOffset,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.results.length === 0) return;
      return lastPage.offset + lastPage.limit;
    },
  });

  // Throw an error if something went wrong fetching data. This will be caught by the ErrorBoundary
  if (isError) throw new Error("Something went wrong fetching data!");

  return (
    <Container className="space-y-6">
      <Header title="Explore Characters" />

      <div>{isLoading && <CardSkeletonClip />}</div>
      <div>
        {data && <CharacterInfiniteGrid response={data.pages} />}

        {hasNextPage && (
          <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? "Loading more..." : "Load More"}
          </button>
        )}
      </div>
    </Container>
  );
}

export default CharacterPage;
