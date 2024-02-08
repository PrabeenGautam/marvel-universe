import { useNavigate } from "react-router-dom";

import ImageHoverCard from "../card/ImageHoverCard";
import { CharacterType } from "@/types/response/character.types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Props {
  characters: CharacterType[];
}

function CharacterTable({ characters }: Props) {
  const navigate = useNavigate();

  const handleRoute = (id: number) => {
    navigate(`/character/${id}`);
  };

  return (
    <div className="overflow-x-auto rounded-xl bg-[#2e2e36] text-white shadow-md">
      <Table className="min-w-[28rem] rounded-xl text-sm">
        <TableHeader className="bg-[#19181d] text-base">
          <TableRow className="h-16  border-none hover:bg-inherit ">
            <TableHead className="hidden w-24 md:table-cell">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Thumbnails</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {characters.map((character) => {
            const { path, extension } = character.thumbnail;
            const image = `${path}.${extension}`;

            return (
              <TableRow
                onClick={() => handleRoute(character.id)}
                key={character.id}
                className="cursor-pointer border-none transition-all odd:bg-[#26252b] hover:bg-[#222]"
              >
                <TableCell className="hidden font-medium md:table-cell">
                  {character.id}
                </TableCell>
                <TableCell>{character.name}</TableCell>
                <TableCell>{character.description || "N/A"}</TableCell>
                <TableCell className="flex-center">
                  <ImageHoverCard src={image} alt={character.name} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default CharacterTable;
