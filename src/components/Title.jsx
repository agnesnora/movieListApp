import "../styles/Title/Title.css";
import { MovieContext } from "./Movies";
import { useContext } from "react";
import { BsSortAlphaDown, BsSortNumericDownAlt } from "react-icons/bs";
export default function Title() {
  const { setMoviesArray, moviesArray } = useContext(MovieContext);

  function sortByTitle() {
    setMoviesArray(sort(moviesArray, "Title"));
  }

  function sortByGenre() {
    setMoviesArray(sort(moviesArray, "Major_Genre"));
  }
  function sortByRating() {
    setMoviesArray(sort(moviesArray, "IMDB_Rating", "descending"));
  }

  function sort(arr, propertyName, order = "ascending") {
    const sortedArr = [...arr].sort((a, b) => {
      if (a[propertyName] == null || a[propertyName] < b[propertyName]) {
        return -1;
      }
      if (b[propertyName] == null || a[propertyName] > b[propertyName]) {
        return 1;
      }
      return 0;
    });

    if (order === "descending") {
      return sortedArr.reverse();
    }

    return sortedArr;
  }

  return (
    <div>
      <div className="table--container--firstline">
        <div className=" movie--table--title">
          <div className="sorting">
            {" "}
            <h2 onClick={sortByTitle} className="title--sort">
              Title
            </h2>
            <BsSortAlphaDown className="sort--icon" />
          </div>

          <h2>Duration</h2>
          <h2>Release date</h2>
          <div className="sorting">
            <h2
              onClick={sortByRating}
              className="title--sort"
              style={{ width: "50%", margin: "0px;" }}
            >
              Rating{" "}
            </h2>{" "}
            <BsSortNumericDownAlt className="sort--icon" />
          </div>

          <h2 className="title--sort" onClick={sortByGenre}>
            Genre
          </h2>
        </div>
        <div className="delete--title--first">
          <h2>Delete</h2>
        </div>
      </div>
    </div>
  );
}
