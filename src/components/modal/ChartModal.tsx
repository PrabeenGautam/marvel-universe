import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import CharacterComicChart from "../chart/ComicAvailable";
import { useState } from "react";

export function CharacterChart() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="flex cursor-pointer items-center gap-4 px-2 py-1.5 font-roboto text-sm font-medium uppercase text-gray-300 hover:text-primary">
          View Graphically
        </div>
      </DialogTrigger>
      <DialogContent className="border-none px-0 md:p-6">
        <DialogHeader>
          <CharacterComicChart />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
