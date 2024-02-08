import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import CharacterComicChart from "../chart/CharacterComicChart";
import CharacterSelect from "../dropdown/CharacterSelect";

import { characters as c } from "@/constant/temp/characters";
import { CharacterType } from "@/types/response/character.types";

const characters = c.data.results;

const sortedCharacters = [...characters].sort((a, b) => {
  return a.comics.available - b.comics.available;
}) as unknown as CharacterType[];

export function CharacterChart() {
  const [selectedCharacter, setSelectedCharacter] =
    useState<CharacterType[]>(sortedCharacters);

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
