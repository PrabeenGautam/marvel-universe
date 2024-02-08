interface PageState {
  currentPage: number;
  length: number;
  paginationLength: number;
}

function getInitialState({ currentPage, length, paginationLength }: PageState) {
  const pageState = Array.from({ length }, (_, i) => {
    if (currentPage <= 5) return i + 1;

    const remainder = (currentPage - 1) % 5;
    return i + currentPage - remainder;
  });

  const showState = {
    first: currentPage > 5,
    last: paginationLength >= 5 + currentPage,
  };

  return { pageState, showState };
}

export default getInitialState;
