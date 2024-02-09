import { characterStatOptions } from "@/constant";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

/**
 * CharacterStatOptions component is used to display the options for the character stats like comics, series, and stories.
 */
function CharacterStatOptions() {
  const { hash } = useLocation() as { hash: string };
  const isIn = ["#comics", "#series", "#stories"].includes(hash);

  const selected = isIn ? hash.slice(1) : "comics";

  return (
    <div className="flex w-fit divide-x overflow-hidden rounded-b-md bg-[#222] text-gray-400 shadow-2xl">
      {characterStatOptions.map((option) => (
        <Link
          to={`#${option.value}`}
          key={option.key}
          className={cn(
            "cursor-pointer border-t-2 border-x-[#464646] border-t-[#464646] p-2 text-center text-sm transition-all hover:border-t-red-500 hover:bg-black hover:text-red-500 sm:px-5 sm:py-2.5 sm:text-base lg:min-w-32",
            {
              "border-t-red-500 bg-black text-red-500":
                selected === option.value,
            },
          )}
        >
          {option.label}
        </Link>
      ))}
    </div>
  );
}

export default CharacterStatOptions;
