import { characterStat } from "@/constant";
import BackgroundHero from "./BackgroundHero";

function CharacterHero() {
  return (
    <div className="group relative sm:h-96">
      {/* // Background wrapper*/}
      <BackgroundHero opacity={1} scale={3} />

      {/* // Content */}
      <div className="z-10 mx-auto flex h-full max-w-6xl flex-col items-center sm:flex-row sm:gap-8 lg:gap-16">
        <div className="img-wrapper relative h-full overflow-hidden grayscale transition-all group-hover:grayscale-0">
          <img
            src="https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
            alt="character"
            className="h-full object-cover transition-all group-hover:scale-105"
          />
        </div>

        {/* Character Details  */}
        <div className="space-y-4 p-6 text-white sm:p-0">
          <h1 className="text-2xl font-bold uppercase transition-all lg:text-6xl">
            LOKI
          </h1>

          <p className="max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa
            consequatur rem ex optio officia cum repellendus accusantium
            perspiciatis!
          </p>

          <div className="!mt-8 flex items-center text-sm">
            {characterStat.map((stat) => (
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
