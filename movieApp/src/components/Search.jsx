import { MovieContext } from "./Movies";
import { useContext } from "react";

export default function Search() {
  const {
    searchValue,
    setSearchValue,
    moviesArray,
    setMoviesArray,
    moviesArrayClone,
  } = useContext(MovieContext);

  // function getInputValue(event) {
  //   setSearchValue(event.target.value);
  // }

  function deleteSearch() {
    setSearchValue("");
  }

  function search() {
    const searchedMovieArray = moviesArray.filter((film) => {
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
          // onChange={getInputValue}
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
