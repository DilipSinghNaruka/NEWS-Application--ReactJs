import React from "react";
import { useGlobalContext } from "./context";
import "./css/Pagination.css"; // Import CSS file

function Pagination() {
  const { page, nbPages, getPrevPage, getNextPage } = useGlobalContext();
  return (
    <div className="pagination-container">
      <button className="pagination-button-left" onClick={() => getPrevPage()}>
        Prev
      </button>
      <p className="pagination-page-number">
        {page + 1} of {nbPages}
      </p>
      <button className="pagination-button-right" onClick={() => getNextPage()}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
