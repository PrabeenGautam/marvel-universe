import { useSearchParams } from "react-router-dom";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sortOptions } from "@/constant";

function SortBy() {
  const [searchParams, setSearchParams] = useSearchParams();

  const sort = searchParams.get("sort") || "name";

  const handleSortChange = (value: string) => {
    setSearchParams((params) => {
      params.set("sort", value);
      return params;
    });
  };

  return (
    <div className="flex items-center gap-4 px-2 py-1.5 font-roboto ">
      <label
        htmlFor="sort-by"
        className="text-sm font-medium uppercase text-gray-300"
      >
        Sort by
      </label>

      <Select defaultValue={sort} onValueChange={handleSortChange}>
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
