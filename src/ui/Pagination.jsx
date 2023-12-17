import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import PropTypes from "prop-types";

Pagination.propTypes = {
  courses: PropTypes.array,
  onPageChange: PropTypes.func,
  currentPage: PropTypes.number,
};

function Pagination({ courses, onPageChange, currentPage }) {
  const itemsPerPage = 8;
  const totalPages = Math.ceil(courses.length / itemsPerPage);

  function handlePageChange(newPage) {
    onPageChange(newPage);
  }

  return (
    <div className="pagination">
      <span
        className={`pagination-icon${currentPage === 1 ? "-disabled" : ""}`}
        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
      >
        <IoIosArrowRoundBack
          size={20}
          color={currentPage === 1 ? "#a6adbb" : "#64748B"}
        />
      </span>
      {Array.from({ length: totalPages }).map((_, index) => (
        <span
          key={index}
          className={`eachPageNo pagination-number${
            currentPage === index + 1 ? " active-pagination" : ""
          }`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </span>
      ))}
      <span
        className={`right pagination-icon${
          currentPage === totalPages ? "-disabled" : ""
        }`}
        onClick={() =>
          currentPage < totalPages && handlePageChange(currentPage + 1)
        }
      >
        <IoIosArrowRoundForward
          size={20}
          color={currentPage === totalPages ? "#a6adbb" : "#64748B"}
        />
      </span>
    </div>
  );
}

export default Pagination;

{
  /* <div className="pagination">
      <span className="pagination-icon">
        <IoIosArrowRoundBack size={20} color="#64748B" />
      </span>
      <span className="pagination-number">1</span>
      <span className="pagination-number">2</span>
      <span className="pagination-number-3 active-pagination">3</span>
      <span className="pagination-icon right">
        <IoIosArrowRoundForward size={20} color="#64748B" />
      </span>
    </div> */
}
