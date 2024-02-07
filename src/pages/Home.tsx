import CharacterHeroWithSearch from "@/components/hero/CharacterHeroWithSearch";
import CharacterGrid from "@/components/container/CharacterGrid";
import Container from "@/components/container/Container,";
import SortBy from "@/components/shared/SortBy";
import ViewSelector from "@/components/shared/ViewSelector";

import { characters as c } from "@/constant/temp/characters";
import CharacterTable from "@/components/table/CharacterTable";

type View = "list" | "grid";

function Home() {
  const characters = c.data;
  const view = "list" as View;

  return (
    <div>
      <CharacterHeroWithSearch />
      <Container>
        <div className="filter-options flex w-full flex-wrap items-center justify-between gap-4">
          <div className="text-sm font-medium uppercase text-gray-300">
            <span>{characters.total}</span> results
          </div>

          <div className="flex items-center gap-2">
            <SortBy />
            <ViewSelector />
          </div>
        </div>

        <div className="mt-8">
          {view === "grid" && <CharacterGrid characters={characters as any} />}{" "}
          {view === "list" && <CharacterTable characters={characters as any} />}
        </div>
      </Container>
    </div>
  );
}

export default Home;
