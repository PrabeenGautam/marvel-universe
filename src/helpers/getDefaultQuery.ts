import { SortType } from "@/types";

export function getDefaultPage(page: string | null) {
  if (!page) return 1;
  return Math.abs(Number(page)) || 1;
}

export function getDefaultSort(sort: string | null): SortType {
  if (!sort) return "name";

  const sortCandidates = ["name", "-name", "modified", "-modified"];
  const orderBy = sortCandidates.includes(sort) ? sort : "name";
  return orderBy as SortType;
}
