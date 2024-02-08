import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseJSON(value: string | null) {
  if (!value) return null;

  try {
    return JSON.parse(value);
  } catch (error) {
    return value;
  }
}
