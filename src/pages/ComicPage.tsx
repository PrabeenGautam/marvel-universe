import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import DetailHero from "@/components/hero/DetailHero";
import { getComicById, getComicCharacters } from "@/services/core/comic.api";
import DetailHeroSkeleton from "@/components/skeleton/DetailHeroSkeleton";
import Container from "@/components/container/Container";
import Header from "@/components/shared/Header";
import CharacterGrid from "@/components/container/CharacterGrid";
import CardSkeletonClip from "@/components/skeleton/CardSkeletonClip";

function ComicPage() {
  // Extracting the character ID from URL parameters
  const { id } = useParams<{ id: string }>();

  // Querying comic details and characters
  const {
    data: comicData,
    isError: isComicError,
    isLoading: isComicLoading,
  } = useQuery({
    queryKey: [`comic-${id}`],
    queryFn: () => getComicById(id),
    select: (data) => data.results[0],
  });

  const { data: characterList, isLoading: isCharacterLoading } = useQuery({
    queryKey: [`comics-character-${id}`],
    queryFn: () => getComicCharacters(id),
    select: (data) => data.results,
  });

  // Throw error if comics not found. This will be caught by the ErrorBoundary
  if (isComicError) throw new Error("Character not found");

  const date = comicData
    ? new Date(comicData.dates[0].date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <div>
      {isComicLoading && <DetailHeroSkeleton />}
      {comicData && (
        <DetailHero
          title={comicData.title}
          description={comicData.description}
          thumbnail={comicData.thumbnail}
          creators={comicData.creators}
          date={date}
        />
      )}

      <Container className="space-y-6">
        <Header title="Characters" />
        {isCharacterLoading && !characterList && <CardSkeletonClip />}
        {characterList && <CharacterGrid characters={characterList} />}
      </Container>
    </div>
  );
}

export default ComicPage;
