import { characterStatOptions } from "@/constant";
import { cn } from "@/lib/utils";
import { useState } from "react";

type SelectedType = "overview" | "comic" | "series" | "stories" | "events";

function CharacterStatOptions() {
  const [selected, setSelected] = useState<SelectedType>("overview");

  const handleSelected = (value: string) => {
    setSelected(value as SelectedType);
  };

  return (
    <div className="flex w-fit divide-x overflow-hidden rounded-b-md bg-[#222] text-gray-400 shadow-2xl">
      {characterStatOptions.map((option) => (
        <div
          key={option.key}
          className={cn(
            "cursor-pointer border-t-2 border-x-[#464646] border-t-[#464646] p-2 text-center text-sm transition-all hover:border-t-red-500 hover:bg-black hover:text-red-500 sm:px-5 sm:py-2.5 sm:text-base lg:min-w-32",
            {
              "border-t-red-500 bg-black text-red-500":
                selected === option.value,
            },
          )}
          onClick={() => handleSelected(option.value)}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
}

export default CharacterStatOptions;
