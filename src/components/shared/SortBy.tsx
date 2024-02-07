import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sortOptions } from "@/constant";

function SortBy() {
  const [selected, setSelected] = useState("asc");

  const handleSortChange = (value: string) => {
    setSelected(value);
  };

  return (
    <div className="flex items-center gap-4 px-2 py-1.5 font-roboto ">
      <label
        htmlFor="sort-by"
        className="text-sm font-medium uppercase text-gray-300"
      >
        Sort by
      </label>

      <Select defaultValue={selected} onValueChange={handleSortChange}>
        <SelectTrigger
          className="no-focus h-auto w-fit border-none bg-transparent px-2 py-1 text-xs "
          id="sort-by"
        >
          <SelectValue placeholder="Choose sorting methods" />
        </SelectTrigger>

        <SelectContent>
          {sortOptions.map((option) => (
            <SelectItem
              key={option.key}
              value={option.value}
              className="text-xs"
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
