import CharacterHeroWithSearch from "@/components/hero/CharacterHeroWithSearch";
import CharacterGrid from "@/components/container/CharacterGrid";
import Container from "@/components/container/Container,";
import SortBy from "@/components/shared/SortBy";
import ViewSelector from "@/components/shared/ViewSelector";

import CharacterTable from "@/components/table/CharacterTable";
import Pagination from "@/components/shared/Pagination";
import { useState } from "react";
import { CharacterChart } from "@/components/modal/ChartModal";
import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "@/services/core/character.api";
import {
  getItemFromLocalStorage,
  setItemInLocalStorage,
} from "@/helpers/storage";
import { useSearchParams } from "react-router-dom";
import { getDefaultPage, getDefaultSort } from "@/helpers/getDefaultQuery";

type View = "list" | "grid";

function Home() {
  const [view, setView] = useState<View>(
    getItemFromLocalStorage("view") || "list",
  );

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const page = getDefaultPage(searchParams.get("page"));
  const sort = getDefaultSort(searchParams.get("sort"));

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

  const handleViewChange = (view: View) => {
    setView(view);
    setItemInLocalStorage("view", view);
  };

  return (
    <div>
      <CharacterHeroWithSearch />
      <Container className="space-y-8">
        <div className="filter-options flex w-full flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-sm font-medium uppercase text-gray-300">
            {isLoading ? <span>...</span> : data?.total || 0}
            <span>results</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <CharacterChart />
            <SortBy />
            <ViewSelector view={view} onChange={handleViewChange} />
          </div>
        </div>

        {!isLoading && data ? (
          <>
            <div>
              {view === "grid" && <CharacterGrid characters={data} />}
              {view === "list" && <CharacterTable characters={data} />}
            </div>
            <div className="flex justify-end">
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
