import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Checkbox from "./Checkbox";
import { CharacterType } from "@/types/response/character.types";

interface Props {
  characters: CharacterType[];
  selectedCharacters: CharacterType[];
  setSelectedCharacters: (character: CharacterType[]) => void;
}

/**
 * Component to render a dropdown menu for filtering characters and selecting them using checkboxes.
 */
function CharacterSelect({
  characters,
  setSelectedCharacters,
  selectedCharacters,
}: Props) {
  function handleCheckboxChange(characterId: number, isChecked: boolean) {
    const selectedCharacter = characters.find(
      (character) => character.id === characterId,
    );
    if (!selectedCharacter) return;

    const updatedCharacters = isChecked
      ? [...selectedCharacters, selectedCharacter]
      : selectedCharacters.filter((character) => character.id !== characterId);

    setSelectedCharacters(
      updatedCharacters.sort((a, b) => a.comics.available - b.comics.available),
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="no-focus flex-center ml-3 w-fit rounded-md border border-gray-400 px-3 py-1.5 text-sm text-white hover:bg-black sm:ml-0">
        <span>Filter Character</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="child-scroll max-h-64 space-y-1 overflow-y-auto border-none bg-[#151515] px-2 py-3 text-white">
        {characters.map((c) => (
          <Checkbox
            key={c.id}
            name={c.name}
            id={String(c.id)}
            checked={selectedCharacters.some((ch) => ch.id === c.id)}
            onChange={handleCheckboxChange}
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default CharacterSelect;
