import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ total, paginate, perPage, selected }) => {
  return (
    <div>
      <ReactPaginate
        containerClassName="flex items-center text-xs"
        pageClassName="px-3 py-2"
        activeClassName="bg-borderGrey rounded-md"
        previousClassName={`bg-yellow py-1 px-3 text-lg mr-2 text-white shadow-[0px_3px_8px_#F9E78C]ƒ ${
          selected <= 0 ? "bg-borderGrey text-grey" : ""
        }`}
        nextClassName={`bg-yellow disabled:bg-borderGrey py-1 px-3 text-lg ml-2 text-white shadow-[0px_3px_8px_#F9E78C] ${
          selected + 1 >= total ? "bg-borderGrey text-grey shadow-none" : ""
        }`}
        breakLabel="..."
        nextLabel=" >"
        onPageChange={paginate}
        pageRangeDisplayed={perPage}
        pageCount={total}
        previousLabel="< "
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
