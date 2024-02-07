import { Search } from "lucide-react";

function SearchBar() {
  return (
    <form className="flex w-full select-none rounded bg-white px-2 py-1.5">
      <Search className="stroke-gray-500" />

      <input
        type="text"
        className="mx-2.5 w-full border-none bg-inherit text-sm text-black outline-none"
        placeholder="Search for a character..."
        name="query"
      />
      <input type="submit" hidden />
    </form>
  );
}

export default SearchBar;
