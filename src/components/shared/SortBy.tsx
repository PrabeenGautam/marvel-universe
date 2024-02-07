import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sortOptions } from "@/constant";
import { cn } from "@/lib/utils";

function SortBy() {
  const [selected, setSelected] = useState("asc");

  const handleSortChange = (value: string) => {
    setSelected(value);
  };

  return (
    <div className="flex items-center gap-4 px-2 py-1.5 font-roboto ">
      <label
        htmlFor="sort-by"
        className="text-sm font-medium uppercase text-gray-600"
      >
        Sort by
      </label>

      <Select defaultValue={selected} onValueChange={handleSortChange}>
        <SelectTrigger
          className="no-focus h-auto w-fit border-none p-0 text-xs text-red-500"
          id="sort-by"
        >
          <SelectValue placeholder="Choose sorting methods" />
        </SelectTrigger>

        <SelectContent>
          {sortOptions.map((option) => (
            <SelectItem
              key={option.key}
              value={option.value}
              className={cn("text-xs", {
                "text-red-500 focus:text-red-500": selected === option.value,
              })}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default SortBy;
