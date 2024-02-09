import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

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
    queryKey: [`comic-${id}`],
    queryFn: () => getComicById(id),
    select: (data) => data.results[0],
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
      {isLoading && <div>Loading...</div>}
      {comicData && (
        <DetailHero
          title={comicData.title}
          description={comicData.description}
          thumbnail={comicData.thumbnail}
          creators={comicData.creators}
          date={date}
        />
      )}
    </div>
  );
}

export default ComicPage;
