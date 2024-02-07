import { cn } from "@/lib/utils";
import { Grid2X2, List } from "lucide-react";
import { useState } from "react";

function ViewSelector() {
  const [selected, setSelected] = useState<"grid" | "list">("grid");

  return (
    <div className="flex items-center gap-4 px-2 py-1.5 font-roboto ">
      <label
        htmlFor="sort-by"
        className="text-sm font-medium uppercase text-gray-800"
      >
        View
      </label>

      <div className="flex items-center gap-2">
        <Grid2X2
          onClick={() => setSelected("grid")}
          className={cn("h-7 w-7 cursor-pointer fill-slate-300 stroke-white", {
            "fill-black ": selected === "grid",
          })}
        />

        <List
          className={cn("h-7 w-7 cursor-pointer text-slate-300", {
            "stroke-black": selected === "list",
          })}
          onClick={() => setSelected("list")}
        />
      </div>
    </div>
  );
}

export default ViewSelector;
