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

  const next = () => {
    setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
  };

  const prev = () => {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  };

  const jump = (page, e) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage(currentPage => Math.min(pageNumber, maxPage));
  };
  const first = () => {
    setCurrentPage(1);
  };
  const last = () => {
    setCurrentPage(maxPage);
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
