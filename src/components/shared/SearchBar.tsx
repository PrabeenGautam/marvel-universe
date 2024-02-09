import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const nameStartsWith = searchParams.get("nameStartsWith") || "";

  const [query, setQuery] = useState(nameStartsWith);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchParams((params) => {
        if (!query) {
          params.delete("nameStartsWith");
          return params;
        }

        params.set("nameStartsWith", query);
        params.delete("page");

        return params;
      });
    }, 500);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timeout);
  }, [query]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      className="flex w-full select-none rounded bg-white px-2 py-1.5"
      onSubmit={handleSubmit}
    >
      <Search className="stroke-gray-500" />

      <input
        type="text"
        className="mx-2.5 w-full border-none bg-inherit text-sm text-black outline-none"
        placeholder="Search for a character..."
        name="query"
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchBar;
