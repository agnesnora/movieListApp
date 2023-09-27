import { MovieContext } from "./Movies";
import { useContext } from "react";

export default function Title() {
  const { moviesArray, setMoviesArray, moviesArrayClone } =
    useContext(MovieContext);

  function sortByTitle() {
    setMoviesArray(sort(moviesArrayClone, "Title"));
  }

  function sortByGenre() {
    setMoviesArray(sort(moviesArrayClone, "Major_Genre"));
  }
  function sortByRating() {
    setMoviesArray(sort(moviesArrayClone, "IMDB_Rating", "descending"));
  }

  function sort(arr, propertyName, order = "ascending") {
    const sortedArr = [...arr].sort((a, b) => {
      if (a[propertyName] < b[propertyName]) {
        return -1;
      }
      if (a[propertyName] > b[propertyName]) {
        return 1;
      }
      return 0;
    });

    if (order === "descending") {
      return sortedArr.reverse();
    }

    return sortedArr;
  }

  // function handleHeaderTitleClick() {
  //   setMoviesArray(sortByTitle(moviesArray, "Title"));
  // }

  // function handleHeaderRatingClick() {
  //   setMoviesArray(sortByTitle(moviesArray, "IMDB_Rating", "descending"));
  // }
  return (
    <div>
      <div className="table--container--firstline">
        <div className=" movie--table--title">
          <h2 onClick={sortByTitle}>Title</h2>
          <h2>Duration</h2>
          <h2>Release date</h2>
          <h2 onClick={sortByRating}>Rating</h2>
          <h2 onClick={sortByGenre}>Genre</h2>
        </div>
        <div>
          <h2>Delete</h2>
        </div>
      </div>
    </div>
  );
}
