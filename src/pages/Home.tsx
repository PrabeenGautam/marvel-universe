import CharacterHeroWithSearch from "@/components/hero/CharacterHeroWithSearch";
import Container from "@/components/shared/Container,";
import SortBy from "@/components/shared/SortBy";
import ViewSelector from "@/components/shared/ViewSelector";

function Home() {
  return (
    <div>
      <CharacterHeroWithSearch />
      <Container>
        <div className="filter-options flex w-full items-center justify-between">
          <div className="text-sm font-medium uppercase text-gray-300">
            <span>7246</span> results
          </div>

          <div className="flex items-center gap-2">
            <SortBy />
            <ViewSelector />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
