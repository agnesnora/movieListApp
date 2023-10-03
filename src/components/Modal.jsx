import { MovieContext } from "./Movies";
import { useContext } from "react";
import { IoArrowForwardCircle, IoArrowBackCircle } from "react-icons/io5";

export default function Modal() {
  const { selectedMovie, setSelectedMovie, closeModal, moviesArray } =
    useContext(MovieContext);

  function stepTwo(e) {
    const lastIndex = moviesArray.length - 1;

    if (e.target.dataset.step == "next") {
      setSelectedMovie((prevDetailed) => {
        let nextIndex = moviesArray.findIndex(
          (movie) => movie.Id === prevDetailed.Id
        );

        return nextIndex == lastIndex
          ? moviesArray[0]
          : moviesArray[nextIndex + 1];
      });
    } else if (e.target.dataset.step == "previous") {
      setSelectedMovie((prevDetailed) => {
        let prevIndex = moviesArray.findIndex(
          (movie) => movie.Id === prevDetailed.Id
        );

        return prevIndex == 0
          ? moviesArray[lastIndex]
          : moviesArray[prevIndex - 1];
      });
    }
  }
  return (
    <div className="modal--container">
      <div className="modal--step">
        <button>
          <IoArrowBackCircle
            onClick={stepTwo}
            data-step="previous"
            className="modal--icon"
          />
        </button>
        <h1 className="modal--title">{selectedMovie.Title}</h1>

        <button>
          <IoArrowForwardCircle
            onClick={stepTwo}
            data-step="next"
            className="modal--icon"
          />
        </button>
      </div>

      <h3>
        Director: {selectedMovie.Director ? selectedMovie.Director : "N/A"}
      </h3>
      <h3>
        Distributor:{" "}
        {selectedMovie.Distributor ? selectedMovie.Distributor : " N/A"}
      </h3>
      <h3>
        Production budget:{" "}
        {selectedMovie.Production_Budget
          ? selectedMovie.Production_Budget.toLocaleString(true)
          : "N/A"}{" "}
        $
      </h3>
      <h3>
        Worldwide gross:{" "}
        {selectedMovie.Worldwide_Gross
          ? selectedMovie.Worldwide_Gross.toLocaleString(true)
          : "N/A"}{" "}
        $
      </h3>
      <button className="close--modal--button" onClick={closeModal}>
        Close
      </button>
    </div>
  );
}
