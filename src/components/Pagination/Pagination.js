import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./pagination.css"

const Pagination = ({ pageNumber, updatePageNumber, pageCount }) => {
  let pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
            }
          }
        `}

      </style>
      <ReactPaginate
        className="pagination justify-content-end my-4 gap-4"
        nextLabel=">"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="<"
        previousClassName="btn btn-primary fs-5 prev"
        nextClassName="btn btn-primary fs-5 next"
        activeClassName="active"
        marginPagesDisplayed={0}
        pageRangeDisplayed={pageCount}
        onPageChange={pageChange}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        pageCount={pageCount}
      />
    </>
  );
};

export default Pagination;
