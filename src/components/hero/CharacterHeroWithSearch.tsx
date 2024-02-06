import SearchBar from "../ui/SearchBar";

function CharacterHeroWithSearch() {
  return (
    <div className="hero-container flex-center relative h-100 bg-black px-4 text-white">
      {/* // Background wrapper*/}
      <div className="hero-wrapper z-[1] before:absolute before:inset-0 before:bg-hero-pattern before:bg-cover before:bg-center  before:bg-no-repeat after:absolute after:inset-0 after:bg-black/50"></div>

      {/* // Content */}
      <div className="hero-content z-[2] space-y-4 sm:text-center">
        <h1 className="font-bold uppercase transition-all sm:text-2xl lg:text-4xl">
          Marvel Universe
        </h1>
        <span className="block leading-tight tracking-wide">
          Dive into the Marvel Universe's thrilling tales of heroes and
          villains!
        </span>

        <div className="!mt-8 basis-96">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default CharacterHeroWithSearch;
