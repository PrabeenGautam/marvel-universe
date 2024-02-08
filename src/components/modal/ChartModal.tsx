import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import CharacterComicChart from "../chart/ComicAvailable";

export function CharacterChart() {
  return (
    <AlertDialog open>
      <AlertDialogTrigger asChild>
        <div className="flex cursor-pointer items-center gap-4 px-2 py-1.5 font-roboto text-sm font-medium uppercase text-gray-300 hover:text-primary">
          View Graphically
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className="border-none px-0 md:p-6">
        <AlertDialogHeader>
          <CharacterComicChart />
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
