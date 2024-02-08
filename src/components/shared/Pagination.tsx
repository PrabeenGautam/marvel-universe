import { useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { PaginationStats } from "@/types";
import getInitialState from "@/helpers/getPageInitialState";
import Ellipsis from "./Ellipsis";

interface Props {
  pagination: PaginationStats;
}

function Pagination({ pagination }: Props) {
  const { total, limit, offset } = pagination;
  const paginationLength = Math.ceil(total / limit);
  const apiPage = offset / limit + 1;

  const [searchParams, setSearchParams] = useSearchParams();

  const length = Math.min(paginationLength, 5);
  const currentPage = Math.abs(Number(searchParams.get("page"))) || apiPage;

  const { pageState, showState } = getInitialState({
    currentPage,
    length,
    paginationLength,
  });

  const [show, setShow] = useState(showState);
  const [pages, setPages] = useState<number[]>(pageState);

  const resetPages = () => {
    setPages(Array.from({ length }, (_, i) => i + 1));
    setShow({ first: false, last: paginationLength > 5 });
  };

  if (paginationLength <= 1) return null;

  const handlePageChange = (page: number) => {
    if (page === currentPage) return;

    setSearchParams((params) => {
      page === 1 ? params.delete("page") : params.set("page", String(page));
      return params;
    });

    if (page <= 5) {
      return resetPages();
    }

    const remainder = (page - 1) % 5;

    const newPages = Array.from({ length }, (_, i) => i + page - remainder);
    setPages(newPages);
    setShow({ first: true, last: paginationLength >= page + 5 });
  };

  function handleNextPage() {
    if (currentPage === paginationLength) return;
    handlePageChange(currentPage + 1);
  }

  function handlePreviousPage() {
    if (currentPage === 1) return;
    handlePageChange(currentPage - 1);
  }

  return (
    <div className="flex flex-wrap gap-2">
      <div
        className={cn("pagination-box", { disabled: currentPage === 1 })}
        title="Previous Page"
        onClick={handlePreviousPage}
      >
        <ChevronLeft className="h-2.5 w-2.5" />
      </div>

      {show.first && (
        <div className="flex  gap-2">
          <div
            className="pagination-box"
            title="Go to last Page"
            onClick={() => handlePageChange(1)}
          >
            1
          </div>

          <Ellipsis />
        </div>
      )}

      {pages.map((page) => (
        <div
          title={`Go to Page ${page}`}
          onClick={() => handlePageChange(page)}
          key={page}
          className={cn("pagination-box", {
            active: page === currentPage,
          })}
        >
          {page}
        </div>
      ))}

      {show.last && (
        <div className="flex  gap-2">
          <Ellipsis />

          <div
            className="pagination-box"
            title="Go to last Page"
            onClick={() => handlePageChange(paginationLength)}
          >
            {paginationLength}
          </div>
        </div>
      )}

      <div
        className={cn("pagination-box", {
          disabled: currentPage === paginationLength,
        })}
        title="Next Page"
        onClick={handleNextPage}
      >
        <ChevronRight className="h-2.5 w-2.5" />
      </div>
    </div>
  );
}

export default Pagination;
