import { characterStat } from "@/constant";
import BackgroundHero from "./BackgroundHero";
import { CharacterType } from "@/types/response/character.types";
import getThumbnailUrl from "@/helpers/getThumbnailUrl";

interface Props {
  character: CharacterType;
}

type Stat = "comics" | "series" | "stories" | "events";

/**
 * Component for displaying the hero section of a character.
 */
function CharacterHero({ character }: Props) {
  const image = getThumbnailUrl(character?.thumbnail);

  const stat = characterStat.map((stat) => {
    const key = stat.key as Stat;

    return {
      ...stat,
      value: character[key]?.available || 0,
    };
  });

  return (
    <div className="group relative sm:h-96">
      {/* // Background wrapper*/}
      <BackgroundHero opacity={1} scale={3} />

      {/* // Content */}
      <div className="z-10 mx-auto flex h-full max-w-screen-xl flex-col px-4 sm:flex-row sm:items-center sm:gap-8 lg:gap-16">
        <div className="img-wrapper relative h-full overflow-hidden grayscale transition-all">
          <img
            src={image}
            alt={character.name}
            className="h-full object-cover transition-all group-hover:scale-105"
          />
        </div>

        {/* Character Details  */}
        <div className="space-y-4 p-6 text-white sm:p-0">
          <h1 className=" w-fit text-2xl font-bold uppercase transition-all lg:text-6xl">
            {character.name}
          </h1>

          <p className="max-w-lg">{character.description}</p>

          <div className="!mt-8 flex items-center text-sm">
            {stat.map((stat) => (
              <div key={stat.key} className="dot-separator space-x-1">
                <span>{stat.value}</span>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterHero;
