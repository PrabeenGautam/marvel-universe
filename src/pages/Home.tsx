import CharacterHeroWithSearch from "@/components/hero/CharacterHeroWithSearch";
import CharacterGrid from "@/components/container/CharacterGrid";
import Container from "@/components/container/Container,";
import SortBy from "@/components/shared/SortBy";
import ViewSelector from "@/components/shared/ViewSelector";

import { characters as c } from "@/constant/temp/characters";
import CharacterTable from "@/components/table/CharacterTable";
import Pagination from "@/components/shared/Pagination";
import { useState } from "react";

type View = "list" | "grid";

function Home() {
  const characters = c.data;
  const [view, setView] = useState<View>("list");

  const [pagination] = useState({
    offset: 0,
    limit: 20,
    total: 400,
    count: 20,
  });

  const handleViewChange = (view: View) => {
    setView(view);
  };

  return (
    <div>
      <CharacterHeroWithSearch />
      <Container className="space-y-8">
        <div className="filter-options flex w-full flex-wrap items-center justify-between gap-4">
          <div className="text-sm font-medium uppercase text-gray-300">
            <span>{characters.total}</span> results
          </div>

          <div className="flex items-center gap-2">
            <SortBy />
            <ViewSelector view={view} onChange={handleViewChange} />
          </div>
        </div>

        <div>
          {view === "grid" && <CharacterGrid characters={characters as any} />}
          {view === "list" && <CharacterTable characters={characters as any} />}
        </div>

        <div className="flex justify-end">
          <Pagination pagination={pagination} />
        </div>
      </Container>
    </div>
  );
}

export default Home;
