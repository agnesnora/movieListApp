import { useContext } from "react";
import { MovieContext } from "./Movies";
import "../styles/Table/Table.css";

export default function Table() {
  const {
    setMoviesArray,
    getMovieDetail,
    selectedMovie,
    currentMovies,
    moviesArray,
  } = useContext(MovieContext);

  function deleteLine(e) {
    const id = e.target.dataset.delete;

    setMoviesArray((prevListedMovies) =>
      prevListedMovies.filter((movie) => movie.Id != id)
    );
  }

  const selectedStyle = {
    backgroundColor: "  #fb6376",
    color: " #fff1eb",
    fontWeight: "700",
  };

  const redStyle = {
    color: "#A5414B",
    backgroundColor: "#fffffe",
    borderRadius: "18px",
    width: "50%",
    justifySelf: "center",
  };
  const greenStyle = {
    color: "green",
    backgroundColor: "#fffffe",
    borderRadius: "18px",
    width: "50%",
    justifySelf: "center",
  };
  const blackStyle = {
    color: "black",
    backgroundColor: "#fffffe",
    borderRadius: "18px",
    width: "50%",
    justifySelf: "center",
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
                  (item.IMDB_Rating <= 3) & (item.IMDB_Rating !== null)
                    ? redStyle
                    : item.IMDB_Rating == null ||
                      (item.IMDB_Rating <= 7 && item.IMDB_Rating > 3)
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
            <div data-delete={item.Id}>
              <button
                className="delete--line"
                data-delete={item.Id}
                onClick={deleteLine}
                disabled={moviesArray.length == 1 ? true : false}
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
