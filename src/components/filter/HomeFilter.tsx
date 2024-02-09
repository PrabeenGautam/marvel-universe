import { useSearchParams } from "react-router-dom";

import { CharacterResponse } from "@/types";
import SortBy from "@/components/shared/SortBy";
import ViewSelector from "@/components/shared/ViewSelector";
import { getDefaultPage, getDefaultSort } from "@/helpers/getDefaultQuery";
import CharacterChartModal from "../modal/ChartModal";

interface Props {
  data: CharacterResponse;
  onViewChange: (view: "list" | "grid") => void;
}

function HomeFilter({ data, onViewChange }: Props) {
  // Extract search parameters from the URL
  const [searchParams] = useSearchParams();
  const nameStartsWith = searchParams.get("nameStartsWith") || "";
  const page = getDefaultPage(searchParams.get("page"));
  const sort = getDefaultSort(searchParams.get("sort"));

  return (
    <div className="filter-options flex w-full flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-1 text-sm font-medium uppercase text-gray-300">
        {/* Display total results count */}
        {data.total || "N/A"}

        <span>results</span>
        {nameStartsWith && (
          <span>
            for <strong>"{nameStartsWith}"</strong>
          </span>
        )}
      </div>

      {/* Options for chart, sorting, and view selection */}
      <div className="flex flex-wrap items-center gap-2">
        <CharacterChartModal
          characters={data.results}
          key={`pagination-${page}-${sort}-${nameStartsWith}`}
        />
        <SortBy />
        <ViewSelector onChange={onViewChange} />
      </div>
    </div>
  );
}

export default HomeFilter;
