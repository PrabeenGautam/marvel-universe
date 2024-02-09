import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import Loading from "@/components/skeleton/Loading";
import Pagination from "@/components/shared/Pagination";
import Container from "@/components/container/Container,";
import { getCharacters } from "@/services/core/character.api";
import CharacterTable from "@/components/table/CharacterTable";
import CharacterGrid from "@/components/container/CharacterGrid";

import { getDefaultPage, getDefaultSort } from "@/helpers/getDefaultQuery";
import CharacterHeroWithSearch from "@/components/hero/CharacterHeroWithSearch";

import {
  getItemFromLocalStorage,
  setItemInLocalStorage,
} from "@/helpers/storage";
import CardSkeletonClip from "@/components/skeleton/CardSkeletonClip";
import HomeFilter from "@/components/filter/HomeFilter";

type View = "list" | "grid";

/**
 * Home Page
 * Responsible for displaying a list of characters with various viewing options.
 */
function Home() {
  // State for managing the current view type (list or grid)
  const [view, setView] = useState<View>(
    getItemFromLocalStorage("view") || "list",
  );

  // Extract search parameters from the URL
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const page = getDefaultPage(searchParams.get("page"));
  const sort = getDefaultSort(searchParams.get("sort"));

  // Fetch characters based on search parameters using react-query
  const { data, isError, isLoading } = useQuery({
    queryKey: [`characters-${page}-${sort}-${search}`],
    queryFn: () =>
      getCharacters({
        page,
        orderBy: sort,
        nameStartsWith: search,
      }),
  });

  if (isError) throw new Error("Something went wrong fetching data!");

  // Function to handle view change
  const handleViewChange = (view: View) => {
    setView(view);
    setItemInLocalStorage("view", view);
  };

  // Display loading skeleton while fetching data
  if (isLoading || !data)
    return (
      <div>
        {/* Hero section with search functionality */}
        <CharacterHeroWithSearch />
        {/* Main content container */}
        <Container className="space-y-8">
          {view === "grid" && <CardSkeletonClip />}
          {view === "list" && (
            <div className="min-h-96">
              <Loading />
            </div>
          )}
        </Container>
      </div>
    );

  // Display characters based on the selected view
  return (
    <div>
      {/* Hero section with search functionality */}
      <CharacterHeroWithSearch />

      {/* Main content container */}
      <Container className="space-y-8">
        {data.results.length > 0 && (
          <HomeFilter data={data} onViewChange={handleViewChange} />
        )}

        {/* Display characters based on the selected view */}
        <div>
          {view === "grid" && <CharacterGrid characters={data.results} />}
          {view === "list" && <CharacterTable characters={data.results} />}
        </div>
        <div className="flex justify-end">
          {/* Pagination component */}
          <Pagination
            key={`pagination-${page}-${sort}-${search}`}
            pagination={{
              count: data.count,
              limit: data.limit,
              offset: data.offset,
              total: data.total,
            }}
          />
        </div>
      </Container>
    </div>
  );
}

export default Home;
