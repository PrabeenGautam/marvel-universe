import getInitialState from "@/helpers/getPageInitialState";

test("pageState returns correct values when currentPage <= 5", () => {
  const initialState = getInitialState({
    currentPage: 3,
    length: 10,
    paginationLength: 20,
  });
  expect(initialState.pageState).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("pageState returns correct values when currentPage > 5", () => {
  const initialState = getInitialState({
    currentPage: 8,
    length: 10,
    paginationLength: 20,
  });
  expect(initialState.pageState).toEqual([6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
});

test("showState returns true for first when currentPage > 5", () => {
  const initialState = getInitialState({
    currentPage: 8,
    length: 10,
    paginationLength: 20,
  });
  expect(initialState.showState.first).toBe(true);
});

test("showState returns true for last when paginationLength >= 5 + currentPage", () => {
  const initialState = getInitialState({
    currentPage: 8,
    length: 10,
    paginationLength: 20,
  });
  expect(initialState.showState.last).toBe(true);
});
