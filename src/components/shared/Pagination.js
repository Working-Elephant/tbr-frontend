import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ total, handlePageClick }) => {
  return (
    <div>
      <ReactPaginate
        containerClassName="flex items-center text-xs"
        pageClassName="px-3 py-2"
        activeClassName="bg-borderGrey rounded-md"
        previousClassName="bg-yellow disabled:bg-borderGrey py-1 px-3 text-lg mr-2 text-white shadow-[0px_3px_8px_#F9E78C]ƒ "
        nextClassName="bg-yellow disabled:bg-borderGrey py-1 px-3 text-lg ml-2 text-white shadow-[0px_3px_8px_#F9E78C]"
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={total}
        previousLabel="< "
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
