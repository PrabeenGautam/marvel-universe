import { parseJSON } from "@/lib/utils";

export const getItemFromLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);
  if (!item) return null;
  return parseJSON(item);
};

export const setItemInLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};
