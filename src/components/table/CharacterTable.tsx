import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CharacterData } from "@/types/response/character.types";
import ImageHoverCard from "../card/ImageHoverCard";
import { useNavigate } from "react-router-dom";

interface Props {
  characters: CharacterData;
}

function CharacterTable({ characters }: Props) {
  const navigate = useNavigate();

  const handleRoute = (id: number) => {
    navigate(`/character/${id}`);
  };

  return (
    <div className="rounded-xl bg-black/30 shadow-md">
      <Table className="rounded-xl text-sm">
        <TableHeader className="text-base">
          <TableRow className="border-none bg-[#111] hover:bg-black">
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Thumbnails</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {characters.results.map((character) => {
            const { path, extension } = character.thumbnail;
            const image = `${path}.${extension}`;

            return (
              <TableRow
                onClick={() => handleRoute(character.id)}
                key={character.id}
                className="cursor-pointer border-none transition-all odd:bg-[#222] hover:bg-black"
              >
                <TableCell className="font-medium">{character.id}</TableCell>
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
