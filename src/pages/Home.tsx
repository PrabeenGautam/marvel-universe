import CharacterHeroWithSearch from "@/components/hero/CharacterHeroWithSearch";
import CharacterGrid from "@/components/shared/CharacterGrid";
import Container from "@/components/shared/Container,";
import SortBy from "@/components/shared/SortBy";
import ViewSelector from "@/components/shared/ViewSelector";

import { characters as c } from "@/constant/temp/characters";

function Home() {
  const characters = c.data;

  return (
    <div>
      <CharacterHeroWithSearch />
      <Container>
        <div className="filter-options flex w-full items-center justify-between">
          <div className="text-sm font-medium uppercase text-gray-300">
            <span>{characters.total}</span> results
          </div>

          <div className="flex items-center gap-2">
            <SortBy />
            <ViewSelector />
          </div>
        </div>

        <div className="mt-8">
          <CharacterGrid characters={characters as any} />
        </div>
      </Container>
    </div>
  );
}

export default Home;
