import { getDefaultPage, getDefaultSort } from "@/helpers/getDefaultQuery";

describe("Utility Functions", () => {
  test("getDefaultPage - should return 1 if page is null", () => {
    expect(getDefaultPage(null)).toBe(1);
  });

  test("getDefaultPage - should return 1 if page is not a number", () => {
    expect(getDefaultPage("abc")).toBe(1);
  });

  test("getDefaultPage - should return the absolute value of the page number", () => {
    expect(getDefaultPage("-5")).toBe(5);
  });

  test('getDefaultSort - should return "name" if sort is null', () => {
    expect(getDefaultSort(null)).toBe("name");
  });

  test('getDefaultSort - should return "name" if sort is not in the valid options', () => {
    expect(getDefaultSort("invalid")).toBe("name");
  });

  test("getDefaultSort - should return the provided sort value if it is valid", () => {
    expect(getDefaultSort("modified")).toBe("modified");
  });
});
