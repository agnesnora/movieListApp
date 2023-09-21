import { MovieContext } from "./Movies";
import { useContext, useState } from "react";

export default function Modal() {
  const { selectedMovie, closeModal, moviesArray } = useContext(MovieContext);
  const [detailedMovie, setDetailedMovie] = useState(selectedMovie);

  function stepTwo(e) {
    if (e.target.dataset.step == "next") {
      setDetailedMovie((prevDetailed) =>
        prevDetailed.Id == moviesArray.length - 1
          ? moviesArray.filter((movie) => movie.Id == 1)[0]
          : moviesArray.filter((movie) => movie.Id == prevDetailed.Id + 1)[0]
      );
    } else if (e.target.dataset.step == "previous") {
      setDetailedMovie((prevDetailed) =>
        prevDetailed.Id == 1
          ? moviesArray.filter((movie) => movie.Id == moviesArray.length - 1)[0]
          : moviesArray.filter((movie) => movie.Id == prevDetailed.Id - 1)[0]
      );
    }
  }

  return (
    <div className="modal--container">
      <h1>{detailedMovie.Title}</h1>
      <h3>Director: {detailedMovie.Director}</h3>
      <h3>Distributor: {detailedMovie.Distributor}</h3>
      <h3>
        Production budget:{" "}
        {detailedMovie.Production_Budget.toLocaleString(true)} $
      </h3>
      <h3>
        Worldwide gross: {detailedMovie.Worldwide_Gross.toLocaleString(true)} $
      </h3>
      <button onClick={stepTwo} data-step="next">
        Next
      </button>
      <button onClick={stepTwo} data-step="previous">
        Previous
      </button>
      <button onClick={closeModal}>Close movie</button>
      {/* <Link to=".">Close modal</Link>
      </Link> */}
    </div>
  );
}
