export * from "./response";

export interface PaginationStats {
  offset: number;
  limit: number;
  total: number;
  count: number;
}
