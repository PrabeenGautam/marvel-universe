import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import SortBy from "@/components/shared/SortBy";
import Pagination from "@/components/shared/Pagination";
import Container from "@/components/container/Container,";
import ViewSelector from "@/components/shared/ViewSelector";
import { getCharacters } from "@/services/core/character.api";
import { CharacterChart } from "@/components/modal/ChartModal";
import CharacterTable from "@/components/table/CharacterTable";
import CharacterGrid from "@/components/container/CharacterGrid";

import { getDefaultPage, getDefaultSort } from "@/helpers/getDefaultQuery";
import CharacterHeroWithSearch from "@/components/hero/CharacterHeroWithSearch";

import {
  getItemFromLocalStorage,
  setItemInLocalStorage,
} from "@/helpers/storage";

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

  return (
    <div>
      {/* Hero section with search functionality */}
      <CharacterHeroWithSearch />

      {/* Main content container */}
      <Container className="space-y-8">
        <div className="filter-options flex w-full flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-sm font-medium uppercase text-gray-300">
            {isLoading ? <span>...</span> : data?.total || 0}
            <span>results</span>
          </div>

          {/* Options for chart, sorting, and view selection */}
          <div className="flex flex-wrap items-center gap-2">
            {!isLoading && data && <CharacterChart characters={data.results} />}
            <SortBy />
            <ViewSelector view={view} onChange={handleViewChange} />
          </div>
        </div>

        {/* Display characters based on the selected view */}
        {!isLoading && data ? (
          <>
            <div>
              {view === "grid" && <CharacterGrid characters={data.results} />}
              {view === "list" && <CharacterTable characters={data.results} />}
            </div>
            <div className="flex justify-end">
              {/* Pagination component */}
              <Pagination
                pagination={{
                  count: data.count,
                  limit: data.limit,
                  offset: data.offset,
                  total: data.total,
                }}
              />
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </Container>
    </div>
  );
}

export default Home;
