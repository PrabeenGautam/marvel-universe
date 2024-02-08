import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchParams((params) => {
        query ? params.set("search", query) : params.delete("search");
        return params;
      });
    }, 500);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <form className="flex w-full select-none rounded bg-white px-2 py-1.5">
      <Search className="stroke-gray-500" />

      <input
        type="text"
        className="mx-2.5 w-full border-none bg-inherit text-sm text-black outline-none"
        placeholder="Search for a character..."
        name="query"
        onChange={(e) => setQuery(e.target.value)}
      />
      <input type="submit" hidden />
    </form>
  );
}

export default SearchBar;
