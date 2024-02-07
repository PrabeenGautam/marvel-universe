import CharacterHero from "@/components/hero/CharacterHero";
import CharacterStatOptions from "@/components/info/CharacterStatOptions";

function CharacterPage() {
  return (
    <div className="relative">
      <CharacterHero />
      <div className="absolute bottom-0 right-0 hidden translate-y-1/2 sm:right-20 sm:block">
        <CharacterStatOptions />
      </div>
    </div>
  );
}

export default CharacterPage;
