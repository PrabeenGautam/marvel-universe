import Container from "@/components/container/Container,";
import GridContainer from "@/components/container/GridContainer";
import CharacterHero from "@/components/hero/CharacterHero";
import CharacterStatOptions from "@/components/info/CharacterStatOptions";
import Header from "@/components/shared/Header";
import { characters } from "@/constant/temp/characters";
import { useParams } from "react-router-dom";
import { comics } from "./../constant/temp/comic";
import DetailCard from "@/components/card/DetailCard";
import { series } from "@/constant/temp/series";
import { stories } from "@/constant/temp/stories";

function CharacterPage() {
  const { id } = useParams<{ id: string }>();
  const character = characters.data.results.find(
    (c) => String(c.id) === id,
  ) as any;

  const comicsList = comics.data.results;
  const seriesList = series.data.results;
  const storiesList = stories.data.results;

  return (
    <div className="space-y-4">
      <section className="relative">
        <div>
          <CharacterHero character={character} />
          <div className="absolute bottom-0 right-0 hidden translate-y-1/2 sm:right-20 sm:block">
            <CharacterStatOptions />
          </div>
        </div>
      </section>

      <Container className="space-y-4">
        <Header title="Comics" />
        <GridContainer>
          {comicsList.map((comic) => (
            <DetailCard
              key={comic.id}
              title={comic.title}
              description={comic.description}
              thumbnail={comic.thumbnail}
            />
          ))}
        </GridContainer>
      </Container>

      <Container className="space-y-4">
        <Header title="Series" />
        <GridContainer>
          {seriesList.map((series) => (
            <DetailCard
              key={series.id}
              title={series.title}
              description={series.description || ""}
              thumbnail={series.thumbnail}
            />
          ))}
        </GridContainer>
      </Container>

      <Container className="space-y-4">
        <Header title="Stories" />
        <GridContainer>
          {storiesList.map((comic) => (
            <DetailCard
              key={comic.id}
              title={comic.title}
              description={comic.description}
              thumbnail={comic.thumbnail}
            />
          ))}
        </GridContainer>
      </Container>
    </div>
  );
}

export default CharacterPage;
