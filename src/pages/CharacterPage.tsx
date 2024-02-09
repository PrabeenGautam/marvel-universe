import { useInfiniteQuery } from "@tanstack/react-query";

import Header from "@/components/shared/Header";
import NoResult from "@/components/shared/NoResult";
import Container from "@/components/container/Container";
import { getCharacterViaOffset } from "@/services/core/character.api";

import CardSkeletonClip from "@/components/skeleton/CardSkeletonClip";
import CharacterGridInfinite from "@/components/infinite/CharacterGridInfinite";

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
  const isEmpty = data?.pages[0].results.length === 0;

  return (
    <Container className="space-y-6">
      <Header title="Explore Characters" />

      {/* Show InitiaL Skeleton while data is fetching */}
      {isLoading && <CardSkeletonClip />}

      {/* Show no results found if given response has empty response */}
      {isEmpty && (
        <NoResult
          title="No Characters Found"
          description="We couldn't find any characters that match your search criteria. It's possible that the search query you entered doesn't match any existing characters in our database."
        />
      )}

      <CharacterGridInfinite
        data={data}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </Container>
  );
}

export default CharacterPage;
