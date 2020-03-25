import React, { useEffect } from "react";
import Pagination from "../components/Pagination/Pagination.component";

const usePagination = (api, currentPage, setCurrentPage, active) => {
  const fetchApi = api[0];
  const data = api[1];

  useEffect(() => {
    const fetchData = async () => {
      fetchApi(currentPage);
    };
    fetchData();
  }, [currentPage]);
  const maxPage = data.total_pages;

  const next = (count, setCount) => {
    setCurrentPage(Math.min(currentPage + 1, maxPage));
    if (setCount !== undefined) {
      setCount(value => ++value);
    }
  };

  const prev = (count, setCount) => {
    setCurrentPage(Math.max(currentPage - 1, 1));
    if (setCount !== undefined && count > 1) {
      console.log("im here");

      setCount(value => --value);
    }
  };

  const jump = (page, setCount) => {
    console.log("im here");

    const pageNumber = Math.max(1, page);
    setCurrentPage(Math.min(pageNumber, maxPage));

    if (setCount !== undefined) {
      setCount(page - 10);
    }
  };
  const first = setCount => {
    setCurrentPage(1);
    setCount(1);
  };
  const last = setCount => {
    setCurrentPage(maxPage);
    setCount(maxPage - 19);
  };

  return (
    <Pagination
      next={next}
      prev={prev}
      jump={jump}
      first={first}
      last={last}
      currentPage={currentPage}
      totalPages={maxPage}
      active={active}
    />
  );
};

export default usePagination;
