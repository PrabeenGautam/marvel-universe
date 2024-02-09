import { useState } from "react";

import CharacterSelect from "../dropdown/CharacterSelect";
import CharacterComicChart from "../chart/CharacterComicChart";
import { CharacterType } from "@/types/response/character.types";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  characters: CharacterType[];
}

export default function CharacterChartModal({ characters }: Props) {
  const sortedCharacters = [...characters].sort((a, b) => {
    return a.comics.available - b.comics.available;
  });

  const [selectedCharacter, setSelectedCharacter] = useState(sortedCharacters);

  return (
    <Dialog>
      <DialogTrigger asChild className="">
        <div className="flex cursor-pointer items-center gap-4 px-2 py-1.5 font-roboto text-sm font-medium uppercase text-gray-300 hover:text-primary">
          View Graphically
        </div>
      </DialogTrigger>
      <DialogContent className="border-none bg-[#181818] px-0 md:p-6">
        <DialogHeader className="space-y-4">
          <CharacterSelect
            character={sortedCharacters}
            selectedCharacter={selectedCharacter}
            setSelectedCharacter={setSelectedCharacter}
          />
          <CharacterComicChart character={selectedCharacter} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
