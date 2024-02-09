import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Header from "@/components/shared/Header";
import Container from "@/components/container/Container";
import DetailHero from "@/components/hero/DetailHero";
import { getComicById } from "@/services/core/comic.api";

function ComicPage() {
  // Extracting the character ID from URL parameters
  const { id } = useParams<{ id: string }>();

  const {
    data: comicData,
    isError: isComicError,
    isLoading,
  } = useQuery({
    queryKey: [`character-comic-${id}`],
    queryFn: () => getComicById(id),
    select: (data) => data.results[0],
  });

  // Throw error if comics not found. This will be caught by the ErrorBoundary
  if (isComicError) throw new Error("Character not found");

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {comicData && (
        <DetailHero
          title={comicData.title}
          description={comicData.description}
          thumbnail={comicData.thumbnail}
          creators={comicData.creators}
          dates={comicData.dates}
        />
      )}

      <Container className="space-y-6">
        <Header title="Creators" />
      </Container>

      <Container className="space-y-6">
        <Header title="Characters" />
      </Container>
    </div>
  );
}

export default ComicPage;
