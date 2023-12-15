// import { useState } from "react";
// import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
// import PropTypes from "prop-types";

// Pagination.propTypes = {
//   courses: PropTypes.array,
// };

// function Pagination({ courses }) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 8;

//   const calculatePaginatedCourses = () => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     return courses.slice(startIndex, endIndex);
//   };

//   return (
//     <div className="pagination">
//       <span className="pagination-icon">
//         <IoIosArrowRoundBack size={20} color="#64748B" />
//       </span>
//       <span className="pagination-number">1</span>
//       <span className="pagination-number">2</span>
//       <span className="pagination-number-3 active-pagination">3</span>
//       <span className="pagination-icon right">
//         <IoIosArrowRoundForward size={20} color="#64748B" />
//       </span>
//     </div>
//   );
// }

// export default Pagination;
