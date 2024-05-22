import React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css"

const Pagination = ({ TotalPageCount, Limit, SetPageNumber }) => {
  const pageCount = Math.ceil(TotalPageCount / Limit);

  const changePage = ({ selected }) => {
    SetPageNumber(selected);
  };
  return (
    <ReactPaginate
      previousLabel={"Prev"}
      nextLabel={"Next"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"paginationBttns"}
      previousLinkClassName={"previousBttn"}
      nextLinkClassName={"nextBttn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
    />
  );
};

export default Pagination;
