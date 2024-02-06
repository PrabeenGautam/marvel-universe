// Welcome field for the character page with a search bar
function CharacterHeroWithSearch() {
  return (
    <div className="hero-container flex-center h-100 relative bg-black px-4 text-white">
      {/* // Background wrapper*/}
      <div className="hero-wrapper before:bg-hero-pattern z-[1] before:absolute before:inset-0 before:bg-cover before:bg-no-repeat  after:absolute after:inset-0 after:bg-black/50"></div>

      {/* // Content */}
      <div className="hero-content z-[2] space-y-4 text-center">
        <h1 className="text-2xl font-bold uppercase transition-all lg:text-4xl">
          Marvel Universe
        </h1>
        <span className="block leading-tight tracking-wide">
          Dive into the Marvel Universe's thrilling tales of heroes and
          villains!
        </span>
      </div>
    </div>
  );
}

export default CharacterHeroWithSearch;
