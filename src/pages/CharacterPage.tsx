import Container from "@/components/container/Container,";
import GridContainer from "@/components/container/GridContainer";
import CharacterHero from "@/components/hero/CharacterHero";
import CharacterStatOptions from "@/components/info/CharacterStatOptions";
import Header from "@/components/shared/Header";
import { characters } from "@/constant/temp/characters";
import { useParams } from "react-router-dom";
import { comics } from "./../constant/temp/comic";
import DetailCard from "@/components/card/DetailCard";

function CharacterPage() {
  const { id } = useParams<{ id: string }>();
  const character = characters.data.results.find(
    (c) => String(c.id) === id,
  ) as any;

  const comicsList = comics.data.results;

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
        <Header title="Stories" />
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
    </div>
  );
}

export default CharacterPage;
