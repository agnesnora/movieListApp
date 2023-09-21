import { MovieContext } from "./Movies";
import { useContext } from "react";

export default function Pagination() {
  const { moviesArray, moviesPerPage, paginate } = useContext(MovieContext);
  const totalMovies = moviesArray.length;
  const pageNumbersValue = totalMovies / moviesPerPage;
  //   const pageNumbers = [];
  //   pageNumbers.from({ length: pageNumbers }, (_, i) => i + 1);

  //   console.log(pageNumbers);
  //   //   for (let i = 1; totalMovies / moviesPerPage; i++) {
  //   //     pageNumbers.push(i);
  //   //   }

  //   console.log(Array.from({ length: pageNumbersValue }, (_, i) => i + 1));
  //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const pageNumbers = Array.from({ length: pageNumbersValue }, (_, i) => i + 1);
  console.log(pageNumbers);
  return (
    <div className="pagination">
      {pageNumbers.map((page) => (
        <div key={page}>
          <a className="pagenumber" href="#" onClick={() => paginate(page)}>
            {page}
          </a>
        </div>
      ))}
    </div>
  );
}
