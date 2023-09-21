import { MovieContext } from "./Movies";
import { useContext, useState } from "react";

export default function Search() {
  const {
    // searchValue,
    // setSearchValue,
    moviesArray,
    setMoviesArray,
    moviesArrayClone,
  } = useContext(MovieContext);

  const [searchValue, setSearchValue] = useState("");
  function getInputValue(event) {
    setSearchValue(event.target.value);
    console.log(searchValue);
  }

  function deleteSearch() {
    setSearchValue("");
    setMoviesArray(moviesArrayClone);
  }

  function search() {
    const searchedMovieArray = moviesArrayClone.filter((film) => {
      if (
        film.Title &&
        film.Title.toString()
          .toLowerCase()
          .includes(searchValue.toLocaleLowerCase())
      ) {
        return film;
      }
    });
    setMoviesArray(searchedMovieArray);
    console.log(moviesArray);
  }
  function refresh() {
    setMoviesArray(moviesArrayClone);
  }
  return (
    <div>
      <div>
        <button onClick={refresh}>Reload</button>
      </div>
      <div className="form--container">
        <input
          type="search"
          placeholder="Start typing..."
          className="form--input"
          name="searchBar"
          value={searchValue}
          onChange={getInputValue}
        />
        <button className="form--button--search" onClick={search}>
          Search
        </button>
        <button className="form--button--clear" onClick={deleteSearch}>
          Delete search
        </button>
      </div>
    </div>
  );
}
