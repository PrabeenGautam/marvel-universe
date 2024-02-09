import { useLayoutEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";

import Header from "@/components/shared/Header";
import DetailCard from "@/components/card/DetailCard";
import Container from "@/components/container/Container,";
import CharacterHero from "@/components/hero/CharacterHero";
import GridContainer from "@/components/container/GridContainer";
import {
  getCharacterById,
  getCharacterComics,
  getCharacterSeries,
  getCharacterStories,
} from "@/services/core/character.api";
import CharacterStatOptions from "@/components/info/CharacterStatOptions";

function CharacterPage() {
  const { id } = useParams<{ id: string }>();

  const { hash } = useLocation();

  const elementRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    if (!elementRef.current.length) return;

    const element = elementRef.current.find((ref) => ref.id === hash.slice(1));
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  const {
    data: characters,
    isError: isCharacterError,
    isLoading: isCharacterLoading,
  } = useQuery({
    queryKey: [`character-${id}`],
    queryFn: () => getCharacterById(id),
  });

  const { data: comicsList } = useQuery({
    queryKey: [`character-comic-${id}`],
    queryFn: () => getCharacterComics(id),
  });

  const { data: seriesList } = useQuery({
    queryKey: [`character-series-${id}`],
    queryFn: () => getCharacterSeries(id),
  });

  const { data: storiesList } = useQuery({
    queryKey: [`character-story-${id}`],
    queryFn: () => getCharacterStories(id),
  });

  if (isCharacterError) throw new Error("Character not found");

  return (
    <div className="space-y-4">
      <section className="relative">
        <div>
          {!isCharacterLoading && characters && (
            <CharacterHero character={characters.results[0]} />
          )}
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
          {comicsList?.results.map((comic) => (
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
          {seriesList?.results.map((series) => (
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
          {storiesList?.results.map((story) => (
            <DetailCard
              key={story.id}
              title={story.title}
              description={story.description || ""}
              thumbnail={story.thumbnail}
            />
          ))}
        </GridContainer>
      </Container>
    </div>
  );
}

export default CharacterPage;
