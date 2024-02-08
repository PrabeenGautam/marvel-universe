import CharacterHero from "@/components/hero/CharacterHero";
import CharacterStatOptions from "@/components/info/CharacterStatOptions";
import { characters } from "@/constant/temp/characters";
import { useParams } from "react-router-dom";

function CharacterPage() {
  const { id } = useParams<{ id: string }>();
  const character = characters.data.results.find(
    (c) => String(c.id) === id,
  ) as any;

  return (
    <div className="relative">
      <CharacterHero character={character} />
      <div className="absolute bottom-0 right-0 hidden translate-y-1/2 sm:right-20 sm:block">
        <CharacterStatOptions />
      </div>
    </div>
  );
}

export default CharacterPage;
