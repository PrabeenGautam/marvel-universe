import { getItemFromLocalStorage } from "@/helpers/storage";
import { cn } from "@/lib/utils";
import { Grid2X2, List } from "lucide-react";

interface Props {
  onChange: (view: "grid" | "list") => void;
}

function ViewSelector({ onChange }: Props) {
  const handleViewChange = (view: "grid" | "list") => {
    onChange(view);
  };

  const view = getItemFromLocalStorage("view") || "list";

  return (
    <div className="flex items-center gap-4 px-2 py-1.5 font-roboto ">
      <label
        htmlFor="sort-by"
        className="text-sm font-medium uppercase text-gray-300"
      >
        View
      </label>

      <div className="flex items-center gap-2">
        <Grid2X2
          onClick={() => handleViewChange("grid")}
          className={cn("h-5 w-5 cursor-pointer fill-slate-400 stroke-black", {
            "fill-slate-300 ": view === "grid",
          })}
        />

        <List
          className={cn("h-5 w-5 cursor-pointer stroke-slate-400", {
            "stroke-white": view === "list",
          })}
          onClick={() => handleViewChange("list")}
        />
      </div>
    </div>
  );
}

export default ViewSelector;
