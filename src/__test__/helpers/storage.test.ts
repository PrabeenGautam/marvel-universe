import {
  getItemFromLocalStorage,
  setItemInLocalStorage,
} from "@/helpers/storage";

describe("getItemFromLocalStorage", () => {
  test("returns null when key does not exist in localStorage", () => {
    const key = "nonexistentKey";
    expect(getItemFromLocalStorage(key)).toBe(null);
  });

  test("returns parsed JSON value when key exists in localStorage", () => {
    const key = "existingKey";
    const value = { name: "John", age: 30 };
    localStorage.setItem(key, JSON.stringify(value));
    expect(getItemFromLocalStorage(key)).toEqual(value);
  });
});

describe("setItemInLocalStorage", () => {
  test("sets item in localStorage with correct key and value", () => {
    const key = "testKey";
    const value = { name: "Alice", age: 25 };
    setItemInLocalStorage(key, value);
    expect(localStorage.getItem(key)).toEqual(JSON.stringify(value));
  });
});
