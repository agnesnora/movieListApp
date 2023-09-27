import Title from "./Title";
import { useContext, useState } from "react";
import { MovieContext } from "./Movies";

export default function Table() {
  const {
    setMoviesArray,
    getMovieDetail,
    selectedMovie,
    modalState,

    currentMovies,
  } = useContext(MovieContext);

  function deleteLine(e) {
    const id = e.target.dataset.delete;

    setMoviesArray((prevListedMovies) =>
      prevListedMovies.filter((movie) => movie.Id != id)
    );
  }

  const selectedStyle = {
    backgroundColor: "#fffffe",
    color: " #232946",
  };

  const redStyle = {
    color: "#A5414B",
    backgroundColor: "#fffffe",
    borderRadius: "18px",
  };
  const greenStyle = {
    color: "green",
    backgroundColor: "#fffffe",
    borderRadius: "18px",
  };
  const blackStyle = {
    color: "black",
    backgroundColor: "#fffffe",
    borderRadius: "18px",
  };

  return (
    <>
      {currentMovies.map((item) => {
        return (
          <div
            key={item.Id}
            className="table--container"
            style={item.Id == selectedMovie.Id ? selectedStyle : null}
          >
            <div
              className="movie--table"
              data-select={item.Id}
              onClick={getMovieDetail}
            >
              {" "}
              <h3 className="movie--column" data-select={item.Id}>
                {item.Title}{" "}
              </h3>
              <p className="movie--column" data-select={item.Id}>
                {item.Running_Time_min ? item.Running_Time_min : " - "}
              </p>
              <p className="movie--column" data-select={item.Id}>
                {item.Release_Date}
              </p>
              <p
                className="movie--column"
                data-select={item.Id}
                style={
                  item.IMDB_Rating <= 3
                    ? redStyle
                    : item.IMDB_Rating <= 7 && item.IMDB_Rating > 3
                    ? blackStyle
                    : greenStyle
                }
              >
                {item.IMDB_Rating ? item.IMDB_Rating : "-"}
              </p>
              <p className="movie--column" data-select={item.Id}>
                {item.Major_Genre ? item.Major_Genre : "N/A"}
              </p>
            </div>
            <div
              data-delete={item.Id}
              // style={item.Id == selectedMovie.Id ? selectedStyle : null}
            >
              <button
                className="delete--line"
                data-delete={item.Id}
                onClick={deleteLine}
              >
                Delete line
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
