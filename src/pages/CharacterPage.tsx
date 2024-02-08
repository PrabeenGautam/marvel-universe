import Container from "@/components/container/Container,";
import GridContainer from "@/components/container/GridContainer";
import CharacterHero from "@/components/hero/CharacterHero";
import CharacterStatOptions from "@/components/info/CharacterStatOptions";
import Header from "@/components/shared/Header";
import { characters } from "@/constant/temp/characters";
import { useLocation, useParams } from "react-router-dom";
import { comics } from "./../constant/temp/comic";
import DetailCard from "@/components/card/DetailCard";
import { series } from "@/constant/temp/series";
import { stories } from "@/constant/temp/stories";
import { useLayoutEffect, useRef } from "react";

function CharacterPage() {
  const { id } = useParams<{ id: string }>();
  const character = characters.data.results.find(
    (c) => String(c.id) === id,
  ) as any;

  const { hash } = useLocation();

  const elementRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    if (!elementRef.current.length) return;

    const element = elementRef.current.find((ref) => ref.id === hash.slice(1));
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

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

      <Container
        className="space-y-4"
        id="comics"
        ref={(ref) => (elementRef.current[0] = ref as HTMLDivElement)}
      >
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

      <Container
        className="space-y-4"
        id="series"
        ref={(ref) => (elementRef.current[1] = ref as HTMLDivElement)}
      >
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

      <Container
        className="space-y-4"
        id="stories"
        ref={(ref) => (elementRef.current[2] = ref as HTMLDivElement)}
      >
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
