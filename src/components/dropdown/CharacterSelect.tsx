import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Checkbox from "./Checkbox";
import { CharacterType } from "@/types/response/character.types";

interface Props {
  character: CharacterType[];
  selectedCharacter: CharacterType[];
  setSelectedCharacter: (character: CharacterType[]) => void;
}

function CharacterSelect({
  character,
  setSelectedCharacter,
  selectedCharacter,
}: Props) {
  function handleChange(id: number, isChecked: boolean) {
    if (!isChecked) {
      return setSelectedCharacter(selectedCharacter.filter((c) => c.id !== id));
    }

    const newCharacter = character.find((c) => c.id === id);
    if (newCharacter) {
      setSelectedCharacter(
        [...selectedCharacter, newCharacter].sort(
          (a, b) => a.comics.available - b.comics.available,
        ),
      );
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="no-focus flex-center w-fit rounded-md border border-gray-400 px-3 py-1.5 text-sm text-white hover:bg-black">
        <span>Filter Character</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="child-scroll max-h-64 space-y-1 overflow-y-auto bg-[#151515] px-2 py-3 text-white">
        {character.map((c) => (
          <Checkbox
            key={c.id}
            name={c.name}
            id={String(c.id)}
            checked={selectedCharacter.some((ch) => ch.id === c.id)}
            onChange={handleChange}
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default CharacterSelect;
