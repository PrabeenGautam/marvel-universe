import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import DetailHero from "@/components/hero/DetailHero";
import { getSeriesById } from "@/services/core/series.api";
import DetailHeroSkeleton from "@/components/skeleton/DetailHeroSkeleton";

function SeriesPage() {
  // Extracting the character ID from URL parameters
  const { id } = useParams<{ id: string }>();

  const {
    data: seriesData,
    isError: isSeriesError,
    isLoading,
  } = useQuery({
    queryKey: [`series-${id}`],
    queryFn: () => getSeriesById(id),
    select: (data) => data.results[0],
  });

  // Throw error if comics not found. This will be caught by the ErrorBoundary
  if (isSeriesError) throw new Error("Series not found");

  return (
    <div>
      {isLoading && <DetailHeroSkeleton />}
      {seriesData && (
        <DetailHero
          title={seriesData.title}
          description={seriesData.description || ""}
          thumbnail={seriesData.thumbnail}
          creators={seriesData.creators}
          date={seriesData.startYear.toString()}
        />
      )}
    </div>
  );
}

export default SeriesPage;
