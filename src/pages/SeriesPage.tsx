import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import DetailHero from "@/components/hero/DetailHero";
import { getSeriesById, getSeriesCharacters } from "@/services/core/series.api";
import DetailHeroSkeleton from "@/components/skeleton/DetailHeroSkeleton";
import Container from "@/components/container/Container";
import Header from "@/components/shared/Header";
import CardSkeletonClip from "@/components/skeleton/CardSkeletonClip";
import CharacterGrid from "@/components/container/CharacterGrid";

function SeriesPage() {
  // Extracting the character ID from URL parameters
  const { id } = useParams<{ id: string }>();

  const {
    data: seriesData,
    isError: isSeriesError,
    isLoading: isSeriesLoading,
  } = useQuery({
    queryKey: [`series-${id}`],
    queryFn: () => getSeriesById(id),
    select: (data) => data.results[0],
  });

  const { data: characterList, isLoading: isCharacterLoading } = useQuery({
    queryKey: [`series-character-${id}`],
    queryFn: () => getSeriesCharacters(id),
    select: (data) => data.results,
  });

  // Throw error if comics not found. This will be caught by the ErrorBoundary
  if (isSeriesError) throw new Error("Series not found");

  return (
    <div>
      {isSeriesLoading && <DetailHeroSkeleton />}
      {seriesData && (
        <DetailHero
          title={seriesData.title}
          description={seriesData.description || ""}
          thumbnail={seriesData.thumbnail}
          creators={seriesData.creators}
          date={seriesData.startYear.toString()}
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

export default SeriesPage;
