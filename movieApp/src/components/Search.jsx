import { MovieContext } from "./Movies";
import { useContext, useState, useEffect } from "react";
import { IoReloadOutline } from "react-icons/io5";

export default function Search() {
  const [activeSearch, setActiveSearch] = useState(false);
  const { moviesArray, setMoviesArray, moviesArrayClone } =
    useContext(MovieContext);
  useEffect(() => {
    setMoviesArray[moviesArray];
  }, [activeSearch]);
  const [searchValue, setSearchValue] = useState("");
  function getInputValue(event) {
    setSearchValue(event.target.value);
  }

  function deleteSearch() {
    setSearchValue("");
    setMoviesArray(moviesArrayClone);
  }

  function search() {
    setActiveSearch(true);
    // const searchedMovieArray = moviesArray.filter((film) => {
    //   if (
    //     film.Title &&
    //     film.Title.toString()
    //       .toLowerCase()
    //       .includes(searchValue.toLocaleLowerCase())
    //   ) {
    //     return film;
    //   }
    // });
    setMoviesArray(
      moviesArray.filter((film) => {
        if (
          film.Title &&
          film.Title.toString()
            .toLowerCase()
            .includes(searchValue.toLocaleLowerCase())
        ) {
          return film;
        }
      })
    );

    // setMoviesArray(searchedMovieArray);
    // console.log("search után moviesARray ", moviesArray);
  }
  function refresh() {
    setMoviesArray(moviesArrayClone);
  }
  return (
    <div className="search--container">
      <div>
        <button className="button--search" onClick={refresh}>
          Reload
          <IoReloadOutline />
        </button>
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
        <button type="submit" className="button--search" onClick={search}>
          Search
        </button>
        <button type="submit" className="button--search" onClick={deleteSearch}>
          Delete search
        </button>
      </div>
    </div>
  );
}
