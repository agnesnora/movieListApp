import { MovieContext } from "./Movies";
import { useContext } from "react";
import { IoArrowForwardCircle, IoArrowBackCircle } from "react-icons/io5";

export default function Pagination() {
  const { moviesArray, moviesPerPage, paginate, currentPage, setCurrentPage } =
    useContext(MovieContext);
  const totalMovies = moviesArray.length;
  const pageNumbersValue = totalMovies / moviesPerPage;

  const pageNumbers = Array.from({ length: pageNumbersValue }, (_, i) => i + 1);
  console.log(
    "pageNumbers.length:",
    pageNumbers.length,
    "pagenumbersValue",
    pageNumbersValue
  );
  function stepForward(currentPage) {
    currentPage == pageNumbers.length
      ? setCurrentPage(1)
      : paginate(currentPage + 1);
    console.log(
      "FORWARDpageNumbers.length:",
      pageNumbers.length,
      "pagenumbersValue",
      pageNumbersValue
    );
  }

  function stepBackward(currentPage) {
    currentPage == 1
      ? setCurrentPage(pageNumbers.length)
      : paginate(currentPage - 1);
  }
  return (
    <div className="pagination">
      <button
        onClick={() => stepBackward(currentPage)}
        disabled={currentPage == 1 ? true : false}
      >
        {" "}
        <IoArrowBackCircle className="page--step--icon" />{" "}
      </button>
      <h1 className="pageNumber">{currentPage}</h1>
      <button
        onClick={() => stepForward(currentPage)}
        disabled={
          currentPage == pageNumbers.length
            ? true
            : totalMovies / moviesPerPage < currentPage
            ? true
            : false
        }
      >
        <IoArrowForwardCircle className="page--step--icon" />
      </button>
    </div>
  );
}
